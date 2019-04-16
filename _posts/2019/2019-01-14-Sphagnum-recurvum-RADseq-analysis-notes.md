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
| restriction_overhang | AATT,TA / CAATTC,GTAA | The difference in the first overhang sequence makes little difference since ipyrad removes the barcode before looking for the overhang and doesn't require it to be at the very start of the sequence. The second overhang difference may have been the source of the "data-churn" Blanka found. In the end, it didn't matter. To remove all the illumina adapter sequence we had ipyrad ignore the second overhang, leaving it at the end of the shorter reads. |
| max_low_quality_bases | 5 / 4  | Carol used 4 rather than the default 5. Reducing this will tend to shorten lower quality reads. I used the defaults |
| phred_Qscore_offset | 43 / 33  | Blanka increased this to require higher quality reads to solve the "data-churn" after better removal of illumina adapters solved that. I used the default 33 with no problems. |
| mindepth_statistical & min_depth_majority | 12 & 18 / 6 | These were both increased from the default (6). For haploids this just reduces the number of loci unnecessarily. I used the default. |
| max_barcode_mismatch | 1 / 0 or 2  | I used 1. |
| max_alleles_consens | 1 / 2 | I used 1 since we were expected everything but one outgroup sample to be haploid. |
| trim_reads | 0,80,0,80 / 0,0,0,0 | Using 92 trims the 100bp and 150bp reads to the same maximum length. |

# Data

The voucher file with more info about the samples is in the lab dropbox at
~~~
ShawLab/Jon/RecurvumComplex/plates_combined.xlsx
~~~

We have 4 lanes (96 samples each) of Illumina sequence data. Lane 1 was standard 100bp single-end reads. Plates 2-4 are Illumina NextSeq 500, Mid output, 75bp PE but requesting in the comments that they “run at 150bp”.

Ploidy levels:
  * One of the outgroup samples is most diploid (S. missouricum)
  * All the other species included in the dataset should be be haploid so we processed the data as haploid data (but see S. balticum ploidy discussion below).

A file with what we know about Sphagnum ploidy levels is at
~~~
ShawLab/Jon/OOTT_nexus_files/OOTT_20150604/ploidy_for_MalloryUSE_THIS.xlsx
~~~

# Analysis

## Strategy

This analysis got messy...

### Initial quick-and-dirty analysis

I did an initial "quick-and-dirty" ipyrad run (dropped worst 20% of samples and keeping only loci with coverage in 90% of remaining samples) and RAxML/Structure analysis but we discovered some errors in the barcode file for lane 1. Blanka figured out which samples were out of order and fixed the barcodes file. I made a conversion table from wrong samplename to correct sample name and used it to fix the RAxML tree and Structure plots.
  * The files from that run are on the Duke cluster in a poorly named subfolder--I forgot ipyrad doesn't like when you move/rename folders
  ~~~
  /work/amd176/S_recurvum_radseq/demultiplex1
  ~~~

  * In that folder, I also started some other branches with different settings but aborted them to start over with the correct barcodes in a new folder.
  * When everything is done, there is no reason to keep this quick-and-dirty run. Some of the sample names in the ipyrad output files are still wrong because I only fixed the tree figure labels and Structure figure labels.

### Full exploratory analysis

  * The "real" analysis files are on the Duke cluster at
  ~~~
  /work/amd176/S_recurvum_radseq/ipyrad_runs
  ~~~
  * A branching diagram for the analyses in this folder [is available here][1].
  * To determine the optimal cluster threshold (~0.90) I ran multiple cluster thresholds on a subset of the samples (~1/5 samples including multiple samples of each species) and plotted the variable and parsimony informative loci.

  ![Cluster threshold plot][image1]

  * I ran all samples with cluster threshold 0.90 and filtered for loci present in 70% (269) of the 384 samples. Then I identified low-locus samples with less than 50% of those loci.
  * I dropped the low locus samples and filtered loci two ways:
    - Loci present in 269 of the 305 good samples. 2877 loci. (Fewer loci, less missing data)
    - Loci present in 70% (214) of the 305 good samples. 10053 loci. (More loci but more missing data)
  * I ran both filtered datasets through RAxML and Structure to ensure the results are not sensitive to number of loci and level of missing data.
  * I also ran datasets at cluster thresholds 0.85, and 0.80 through RAxML trees to ensure that the results are not sensitive to cluster threshold.
  * Strongly supported clades and clearly defined Structure clusters were consistent in all analyses so I focused on just the 0.90, fewer-loci, less missing data results.

### Re-analysis after checking morphology

Jon and Blanka reinspected the herbarium specimens for all samples that fell in wrong clades/clusters and determined that for most, the species labels were wrong and the morphology is consistent with the clades/clusters. For the reanalysis:
  * Renamed the mislabeled samples
  * Removed ~8 samples that are clearly falling in the wrong places based on morphology--it is likely they represent errors or mixed species herbarium specimens. If some DO represent something biologically interesting, there just aren't enough to provide good evidence.
  * Put back one sample that I dropped for having 70% missing data but is our only sample from the Azores. We also hoped to save Japanese and Sakhalin island samples but they both had over 99.5% missing data so I left them out.
  * Fixed typos and inconsistencies in the sample names.
  * For this re-analysis, I did not rerun ipyrad from scratch to rename things. I branched the c0.90 ipyrad run to include the desired samples, and ran step 7 (filtering for loci with coverage in XXX% or XXX of XXX samples), ran RAxML and Structure, and then renamed the samples in the RAxML and Structure output.

## Miscellaneous analysis notes

  * After ipyrad trimming/filtering (step 2) there were large numbers of reads (>5% of reads in some samples) with Illumina adapter sequence. Sometimes the second adapter is getting attached where there is not a cutsite. I refiltered without a second cutsite sequence in the parameters so ipyrad just cuts off the adapter. The cutsite bases at the end of the sequence should not be any more of a problem then the first cutsite bases at the start of the sequence (they may even help with alignment). This reduced the adapter content so it doesn't appear in the FASTQC output anymore.
  * The number of reads passing all filters is correlated with number of raw reads (R-square 0.997), but there are some quality differences between the 4 lanes and especially between the 100bp and 150bp runs. See [discussion of quality differences here][2].

# Results

## Structure

## RAxML

## S. balticum ploidy



[1]: {{site.image_path}}ipyrad_branching_diagram.pdf
[2]: {{site.baseurl}}{% post_url /2019/2019-04-04-Notes-on-RADseq-library-sequencing %}
[image1]: {{site.image_path}}S_recurvum_best_cluster_threshold.png
