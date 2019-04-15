---
title:  Sphagnum recurvum RADseq analysis notes
date:  2019-01-14
layout: post
categories:
  - sphagnum other
---

# Planning

Compared Blanka Aguero's ipyrad params file to my _Crepidomanes intricatum_ and Carol Rowe's _Salvinia minima_ params files. Differences:

| Difference | Shaw Lab / Wolf Lab | Notes |
| ---------- | ------------------- | ----- |
| restriction_overhang | AATT,TA / CAATTC,GTAA | The difference in the first overhang sequence probably makes little difference since ipyrad removes the barcode before looking for the overhang and doesn't require it to be at the very start of the sequence. The second overhang difference will cause problems in end-trimming and may have been the source of the "data-churn" Blanka found. In the end it didn't matter what I used. Some samples had huge amounts of illumina adapter remaining after trimming unless we left the second adapter off completely. |
| max_low_quality_bases | 5 / 4  | Carol used 4 rather than the default 5. Reducing this will tend to shorten lower quality reads. I used the defaults |
| phred_Qscore_offset | 43 / 33  | Blanka increased this to require higher quality reads thinking that bad sequence at read ends was leading to "data-churn" but I suspect that was caused by untrimmed adapters. I used the default 33 with no problems. |
| mindepth_statistical & min_depth_majority | 12 & 18 / 6 | These were both increased from the default (6). This will result in any locus with 6-11 or 6-17 reads in a sample getting thrown out, drastically reducing the number of loci. If we had mostly diploids, increasing these might reduce the number of heterozygotes miscalled as homozygotes, but with mostly haploids it is just throwing loci away unnecessarily. I used the default. |
| max_barcode_mismatch | 1 / 0 or 2  | I used 1. |
| max_alleles_consens | 1 / 2 | Setting it to 1 is appropriate for haploids. At 1, all the heterozygous loci in the diploids will be discarded--more missing data for diploid samples. At 2, some loci with errors in haploids will be miscalled as heterozygous--which makes no sense for a haploid. I used 1 since we were expected everything but one outgroup sample to be haploid. |
| trim_reads | 0,80,0,80 / 0,0,0,0 | I used 92 to trim the 100bp and 150bp reads to all be the same length. |

# Data

The voucher file with more info about the samples is in the lab dropbox at ShawLab/Jon/RecurvumComplex/plates_combined.xlsx.

We have 4 lanes (96 samples each) of Illumina sequence data. Lane 1 was standard 100bp single-end reads. Plates 2-4 are Illumina NextSeq 500, Mid output, 75bp PE but requesting in the comments that they “run at 150bp”.

Ploidy levels:
  * One of the outgroup samples is most likely diploid (S. missouricum)
  * The other outgroup samples are probably haploid (S. riparium)
  * We expected all the other species included in the dataset to be haploid.
  * Since nearly everything is expected to be haploid we processes the data as haploid data (but see S. balticum ploidy discussion below).

A file with what we know about Sphagnum ploidy levels is at ShawLab/Jon/OOTT_nexus_files/OOTT_20150604/ploidy_for_MalloryUSE_THIS.xlsx.

# Analysis

## Strategy

This analysis got messy...

  * I did an initial "quick-and-dirty" ipyrad run and raxml/structure analysis but we discovered some errors in the barcode file for lane 1. Blanka figured out which samples were out of order and fixed the barcodes file. I made a conversion table from wrong samplename to correct sample name and used it to fix the raxml tree and structure plots. The files from that run are in /work/amd176/S_recurvum_radseq/demultiplex1 on the Duke cluster (An unfortunate folder name choice but I forgot ipyrad doesn't like when you move/rename folders). In that folder, I also started some other branches with different settings but aborted them to start over with the correct barcodes in a new folder. When this analysis is done, there is no reason to keep this quick-and-dirty run.
  * The "real" analysis files are in /work/amd176/S_recurvum_radseq/ipyrad_runs on the Duke cluster. A branching diagram for the analyses in this folder [is available here][1].
    - To determine the optimal cluster threshold (~0.90) I ran multiple cluster thresholds on a subset of the samples (~1/5 samples including multiple samples of each species) and plotted the variable and parsimony informative loci.
    - I ran the full data on cluster threshold 0.90 and filtered for loci present in 70% (269) of the 384 samples. Then I identified low-locus samples with less than 50% of those loci.
    - I dropped the low locus samples and filtered loci two ways:
      - Loci present in 70% (214) of the 305 good samples. 2877 loci. This dataset has little missing data but fewer loci.
      - Loci present in 269 of the 305 good samples. 10053 loci. This dataset has lots of loci but lots of missing data
    - I ran both datasets through RAxML to ensure the results are not sensitive to number of loci or level of missing data.
    - I also ran datasets at cluster thresholds 0.85, and 0.80 through RAxML trees to ensure that the results are not sensitive to cluster threshold.
  * Strongly supported groupings were the same in all analyses so I focused on the 0.90, few-loci, low-missing-data results.  

## Details

### Demultiplex

Ran each fastq and its barcode file through ipyrad step 1 separately (params-rec1 thru params-rec4) to generate separate fastq files for each sample. Then merged all the demultiplex runs into one run (params-rec_combined).

### Filtering

Even after filtering there are large numbers of reads (>5% of reads in some samples) with Illumina adapter sequence. It looks like sometimes the second adapter is getting attached where there is not a cutsite. I refiltered without a second cutsite sequence in the parameters (params-rec_combined-no_2nd_cut) so ipyrad just cuts off the adapter. The cutsite bases at the end of the sequence should not be any more of a problem then the other cutsite bases at the start of the sequence (they may even help with alignment). This reduced the adapter content so it doesn't appear in the FASTQC output anymore.

The number of reads passing all filters is correlated with number of raw reads (R-square 0.997), but there are some differences between the 4 lanes:
  * number of adapter bp trimmed: 2 & 3 > 4 > 1
  * number of low quality bp trimmed: 1 >>> 2, 3 & 4
  * number of reads filtered for too many Ns: 3 & 4 > 2 >>> 1
  * number of reads filtered by min length: 1 > 2, 3, & 4

### Clustering

Started at cluster_threshold 0.85 (default) to see if the "data-churn" problem is resolved--no problems. Then ran additional values on a subset of the samples (including multiple samples from each species) to determine the best value.

[1]: {{site.image_path}}ipyrad_branching_diagram.pdf
