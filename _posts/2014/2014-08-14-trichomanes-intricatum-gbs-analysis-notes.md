---
title: Trichomanes intricatum GBS analysis notes
date: 2014-08-14T10:16:58+00:00
layout: post
categories:
  - t. intricatum gbs
---
Rockefeller did the sequencing twice because "...cluster density was too high and the pass filter rate was too low.  While we normally we load samples at 8 pM, we loaded your sample at 6 pM with 10% phiX control to compensate low diversity.  But still the pass filter rate is low.  We will have to repeat it with even lower concentration."  The second try "worked very well".

  * **Tint-GBS\_NoIndex\_L008\_R1\_001.<wbr />fastq.gz** - first, low quality run
  * **Tint-GBS\_NoIndex\_L002_<wbr />R1_001.fastq.gz** - second, better quality

Downloaded files to transcriptome workstation and my cordate server (as a backup). Appx 12Gb each. 44Gb after unzipping.

Analysis notes:

Things to try...

  * UNEAK may be problematic since it isn't really designed for haploids. Even the first barcode splitting steps may not be what we really used in the Aspen analysis.
  * Try Barcode Splitter and Checkout for demultiplexing and see if the results are similar
  * Run FastQC on the data to get an overview of the quality

&nbsp;

UNEAK:

This analysis was not useful so I stopped going down this road. It isn't really designed for the kind of haploid data I have, but I'd hoped I could at least use the initial steps to sort my reads by barcode. The results of that were disappointing: In the hi-quality dataset, it only considered 2,274,991 out of the 172,471,420 total reads to be "good barcoded reads".

  1. <span style="line-height: 13px;"><del>Install tassel and UNEAK</del> - Already installed (Tassel 3.0) on transcriptome at /tassel</span>
  2. Run tassel/UNEAK pipeline
      1. Following instructions at <a href="http://www.maizegenetics.net/tassel/docs/TasselPipelineUNEAK.pdf" target="_blank">http://www.maizegenetics.net/tassel/docs/TasselPipelineUNEAK.pdf</a>
      2. tassel commands need to be run from within the **/tassel** directory.
      3. I directed the output for this first run with the higher quality sequences into **/home/aduffy/TintGBS081314/uneak_hiq/**
      4. For the key file (stored as a tab of the Trichomanes intricatum extraction for GBS Googledoc) I gave each sample a name like: S## where ## is the number 01-54 of the sample in the library
      5. Used FC for the flowcell code since it isn't important for what we are doing. Added the FC code and lane number to the symbolic link for the fastq file to match.

Barcode splitter:

  1. <span style="line-height: 13px;">Downloaded from http://sourceforge.net/projects/gbsbarcode/files/?source=navbar and uploaded to transcriptome in <strong>/home/aduffy/TintGBS081314/GBSBarcodeSplitter/hiq/</strong>  and <strong>..../loq/</strong></span>
  2. Note, it tries to put the files it generates in the same folder where the fastq data file is, so I put a symbolic link in the folder where I wanted it to run.

Checkout:

&nbsp;

FastQC:

  1. <span style="line-height: 13px;">Installed from Ubuntu repos.</span>
  2. Stored results in /home/aduffy/TintGBS0813/fastqc
  3. The low quality run is definitely low quality. But there ARE some high quality sequences in there we could dig out and use.

DataCleaning:

  * <span style="line-height: 13px;">Separate out sequences with N's in the first 12 bases (12mers)</span>
      * Made a list of unique patterns of N's in the 12mers. There are a huge number of possible patterns (2^12) but it looks like a much smaller number are actually present in my data.
      * Now I can compare that list of N patterns against my barcodes to see, for each pattern which barcodes can still be unambiguously recognized, making a new subset of barcodes to use in trying to assign reads with each N pattern.
      * Then I can try to assign patterns to barcodes.
      * I set this aside because it turns out only ~500K reads even have Ns so they are much less of a concern than the 170M reads that don't have Ns but still don't include an exact barcode match. After figuring out how to handle those (see next section) I think I can include the sequences with N's in that analysis, since an N doesn't need to be counted any differently than any other non-matching base.
  * Look into the others to see if they can be unambiguously assigned to a barcode is we allow for one or 2 miscalled bases
      * I first pulled all the 12mers and made a list of unique 12mers with the number of reads of each.  For subsequent steps I can process this list MUCH faster than I can process the 172million reads in the fastq file. Once I know how each unique 12mer should be resolved (assigned to a barcode or set aside because it is ambiguous) I can make a dictionary with those resolutions and process the fastq file with that.
      * Reran that including the sequences with N's since an N is just another kind of mismatched base. It adds a few more (~100K) reads assigned to barcodes and means I won't have to handle those separately.
      * After sorting the 12mers and assigning them to the closest matching barcode, I have about 33 million reads that have a best_match distance of 2 and can't be unambiguously assigned to just one barcode. I looked into these further to understand why. With 2 mismatches, there are 3 possible ways they can be distributed between the barcode bases and the sticky end bases. If they are both in the sticky end, the 12mer will be assigned to a single barcode. If one mismatch is in the barcode bases and one in the sticky end it will be assigned correctly because our barcodes were designed to always be able to handle one mismatch. But if they are both in the barcode bases, our barcodes are very poorly designed to handle this and in many (most?) cases the distance will be the same to more than one barcode and we can't assign it unambiguously.  What if we allowed 3 mismatched bases? We would be able to unambiguously assign any with one mismatch in the barcode and 2 in the sticky end or with 0 in the barcode and 3 in the sticky end. I think if we have that many mismatched bases in just the first 8-12 of a read it doesn't give me much confidence in the rest of the read sequence.
