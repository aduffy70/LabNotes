---
title:  Frullania RADseq
date:  2019-08-13
layout: post
categories:
---
Two files of Frullania data from Blanka Aguero. There seems to be a problem with the barcodes (many reads without an exact barcode match) and she wants to know if these data can be salvaged.

The 2 files are just the results of a single Illumina run that has been split in half for easier transfer. Only one barcode file is needed. I am combining them into a single fastq.gz file before processing in ipyrad.
  * L001 = 137362236 reads
  * L002 = 139411418 reads
  * Combined = 276773654 reads

# Problems

According to FastQC, the raw data have fairly low quality overall, and particularly low quality at a few bases right where the barcode and cutsite are expected.
  * of 276 million reads, 200 million (72%) start with 8 characters and an exact cutsite.
  * Only ~1 million (0.3%) seem to be missing a base in the barcode (there are 7 bases and then an exact cutsite)
  * About 20 million (7%) seem to have an error or N in the cutsite, and 16 million of these are at the 4th base of the cutsite. This is one of the two sites in the barcode and cutsite that FastQC identifies as having worst quality.
  * We know there is a quality problem at a few bases of the barcode/cutsite that doesn't seem to extend into the rest of the read. So if we can get the reads assigned to the correct sample, the data are useable. The question is, do we have confidence in how the reads are getting assigned to samples?
    * For error barcodes with counts >5% of the correct barcode, the error is always at the 3rd (19%), 4th (33%), or 5th (48%) bp. So the errors are focused and systematic--not random. This area shows a dip in sequence quality in FastQC as well, so it isn't something that is affecting the quality of the rest of the read.
  * The high error rate at the 4th base of the cutsite also seems to be allowing reads with just adapter sequence to slip by the filters. I demultiplexed with ipyrad (allowing 1 error in the barcode) and wrote a script to remove reads without the cutsite (allowing 2 errors in the cutsite), which will also get rid of all the pure adapter sequence reads. Then I can filter/trim in ipyrad and continue processing normally. 
