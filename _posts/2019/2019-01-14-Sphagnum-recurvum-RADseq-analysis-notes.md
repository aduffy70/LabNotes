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

I did an initial "quick-and-dirty" ipyrad run (dropped worst 20% of samples and keeping only loci with coverage in 90% of remaining samples) and RAxML/Structure analysis but we discovered some errors in the barcode file for lane 1. Blanka figured out which samples were out of order and fixed the barcodes file. I deleted the ipyrad run files from this analysis once the full exploratory analysis was complete.

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

Jon and Blanka reinspected the herbarium specimens for all samples that fell in wrong clades/clusters in the full exploratory analysis results and determined that for most, the species labels were wrong and the morphology is consistent with the clades/clusters. For the reanalysis:
  * Renamed 13 mislabeled samples.
  * Clarified the names of 14 samples (e.g. it was labeled "baltbrev" and it is in the "balt" clade/cluster)
  * Removed ~8 samples that are falling in the wrong places based on morphology. They are either errors, mixed-species herbarium specimens, or potentially interesting. If some DO represent something biologically interesting, there just aren't enough and they are too scattered on the tree to do more than speculate.
  * Removed a couple samples because we can't locate the voucher to inspect morphology.
  * Added back one sample that I dropped for having 70% missing data but is our only sample from the Azores. We also hoped to save Japanese and Sakhalin island samples but they both had >99.5% missing data so I did not add them back in.
  * A few samples could have been added back since we removed them earlier over a possible barcoding shift-error that turned out not be an error. But I didn't because they are from species and locations with other samples.
  * Fixed typos and inconsistencies in the sample names.
  * For this re-analysis, I did not rerun ipyrad from scratch to rename things. I branched the all-c90 ipyrad run from the full exploratory analysis to include the desired samples, and ran step 7 (filtering for loci with coverage in 80% or 235 of 294 samples = 6148 loci), ran RAxML and Structure, and then renamed the samples in the RAxML and Structure output.

## Miscellaneous analysis notes

  * After ipyrad trimming/filtering (step 2) there were large numbers of reads (>5% of reads in some samples) with Illumina adapter sequence. Sometimes the second adapter is getting attached where there is not a cutsite. I refiltered without a second cutsite sequence in the parameters so ipyrad just cuts off the adapter. The cutsite bases at the end of the sequence should not be any more of a problem then the first cutsite bases at the start of the sequence (they may even help with alignment). This reduced the adapter content so it doesn't appear in the FASTQC output anymore.
  * The number of reads passing all filters is correlated with number of raw reads (R-square 0.997), but there are some quality differences between the 4 lanes and especially between the 100bp and 150bp runs. See [discussion of quality differences here][2].

# Results

## RAxML

## Structure

  * Everything, pointed-leaf group (fal, pac, pseudopac, ingroup balt?), round-leaf group (ingroup balt?, rec, ang, flex), individual spp clades where there are sufficient samples (fal/brev/isov, ang, flex, recurvum  ).

## Network analysis?

## S. balticum ploidy



[1]: {{site.image_path}}ipyrad_branching_diagram.pdf
[2]: {{site.baseurl}}{% post_url /2019/2019-04-04-Notes-on-RADseq-library-sequencing %}
[image1]: {{site.image_path}}S_recurvum_best_cluster_threshold.png
