---
title:  Frullania RADseq
date:  2019-08-13
layout: post
categories:
---
Two files of Frullania data from Blanka Aguero. There seems to be a problem with the barcodes (many reads without an exact barcode match) and she wants to know if these data can be salvaged. She also suspects there is an error in the barcode-to-samplename assignment (outgroup samples are embedded within the tree) and wants to see if I get the same confused tree.

The 2 files are just the results of a single Illumina run that has been split in half for easier transfer. Only one barcode file is needed. I combined them into a single fastq.gz file before processing in ipyrad. This wasn't necessary... ipyrad could have taken the two original files as input.
  * L001 = 137,362,236 reads
  * L002 = 139,411,418 reads
  * Combined = 276,773,654 reads

# Problems

According to FastQC, the raw data have fairly low quality overall, and particularly low quality at a few bases right where the barcode and cutsite are expected.
  * of 276 million reads, 200 million (72%) start with 8 characters and an exact cutsite.
  * The problem isn't extra or missing bases at the start--only ~1 million (0.3%) are missing a base in the barcode (7 bases and then an exact cutsite) and <100,000 have an extra base (9 bases and then an exact cutsite).
  * About 20 million (7%) seem to have an error or N in the cutsite, and 16 million of these are at the 4th base of the cutsite. This is one of the two sites in the barcode and cutsite that FastQC identifies as having worst quality.
  * We know there is a quality problem at a few bases of the barcode/cutsite that doesn't seem to extend into the rest of the read. So if we can get the reads assigned to the correct sample, the data are useable. The question is, do we have confidence in how the reads are getting assigned to samples?
    * For error barcodes with counts >5% of the correct barcode, the error is always at the 3rd (19%), 4th (33%), or 5th (48%) bp. So the errors are focused and systematic--not random. This area shows a dip in sequence quality in FastQC as well, so it isn't something that is affecting the quality of the rest of the read.
  * The high error rate at the 4th base of the cutsite also seems to be allowing reads with just adapter sequence to slip by the filters. I demultiplexed with ipyrad (allowing 1 error in the barcode) and wrote a script to remove reads without the cutsite (allowing 1 errors in the cutsite--allowing 2 errors let some specific high-depth adapter sequences through), which will also get rid of all the pure adapter sequence reads. Then I filtered/trimmed in ipyrad and continue processing normally.
  * After all this cleaning, the FastQC report for the post-filter/trim data looks really good. No low quality regions or adapter sequence issues. And allowing only 1 error in the barcode and 1 in the cutsite leaves me confident we are assigning reads to barcodes correctly.

# Analysis

## ipyrad processing

### ipyrad exploratory branching

  * frul-just_demultiplex: step 1. This generated the demultiplexed files that I manually filtered and used as input files for the rest of the runs.
  * frul-mf: steps 1-7
    * frul-mf-c81, -c83, -c87...-c99: steps 3-7. Finding the best clustering level. Dropped 2 really low-locus samples and used 80% sample coverage.
      * frul-mf-c81-s4, -c83-s4, -c87-s4...-c99-s4: step 7. Testing whether it makes a difference if you find the clustering level at high or low sample coverage. IT DOES! At high coverage levels the sample coverage drives everything and pushes the peak in variable and parsimony informative loci to be at a lower cluster threshold. I actually tried at several coverage levels (s10, s25, and s50; data not saved) and above s10 the peak starts being pushed. I definitely want to be sure to find my clustering threshold at low sample coverages (s4) in the future.
    * frul-mf-c90: steps 3-7. Running my best clustering level through the whole ipyrad process at sample coverage s4 to see what sample coverage will be reasonable.
      * frul-mf-c90-s75: step 7. 75 of 94 samples = 80% sample coverage. Running at the reasonable sample coverage to identify samples with low loci.
        * frul-mf-c90-s75-droplow: step 7. 75 of 91 samples = 82% sample coverage. Final run dropping 3 low locus samples. Use the ustr output for Structure and the phy output for RAxML.

### ipyrad results

  * Best clustering level was 0.90--0.91. I used 0.90 and minimum coverage of 75 samples (80%ish)
  * 91 samples with 6990 loci (6862 variable loci, 6559 parsimony informative loci, 47,261 variable SNPs, 30,310 parsimony informative SNPs).
    * Dropped 5 samples: two that I dropped early for extremely low read counts and three I dropped in the final filtering for having >95% missing data.
      * ASA170_19407_24_2
      * ASA207_19329_apall
      * ASA197_19345_10_3
      * ASA198_19346_10_4
      * ASA201_19367_14_1
    * 4 samples have 67--78% missing data but I kept them anyway.
      * ASA203_19375_16_2
      * ASA172_16318_ME
      * ASA158_19391_19_4
      * ASA127_19357_12_3
    * Everything else has <50% missing data (mean missing data of kept samples=11%, sd=18%).
  * Kept all output formats in:
~~~
Frullania_radseq/ipyrad_runs/frul-mf-c90-s75-droplow_outfiles/
~~~

# RAxML

  * Didn't define an outgroup since one of the problems with this dataset may be misnamed samples.
  * Same basic tree as Blanka.

## Structure
  * I started running structure, completed the runs on the cluster, but didn't complete the analysis through StructureHarvester and CLUMPP.
  * 91 samples, 6862 loci from file frul-mf-c90-s75-droplow.ustr
  * 10 replicates at each K from 1-10. 500,000 iterations + 100,000 burnin. Admixture model. Haploid.

# Conclusion

I got basically the same tree as Blanka, with the outgroup samples embedded within the tree. So it looks like the problem is probably an error in the barcode to samplename conversion, rather than something in the ipyrad processing. Blanka has a better idea what may have gone wrong there than I do and has spent time trying to figure it out already, so I won't put further time into this.
