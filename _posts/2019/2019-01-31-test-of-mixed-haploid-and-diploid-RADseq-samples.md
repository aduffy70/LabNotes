---
title:  Test of mixed haploid and diploid RADseq samples
date:  2019-01-31
layout: post
categories:
  - sphagnum
  - ideas
---
Testing processing of mixed haploid and diploid samples on a dataset where we know the ploidy. Using Yan's "potato" Pacific Rim sphagnum dataset. These same taxa were analyzed using microsats so we know ploidy of each.
  * 63 samples
  * 19 diploid
  * 44 haploid

# The Plan

1. Process them through ipyrad as if they were diploid and look for ways of spotting the haploids. (Can we spot haploids mixed into a dataset of diploids?)
2. Process them as if they were haploid and look for ways of spotting the diploids. (Can we spot diploids mixed into a dataset of haploids?)
3. Process the samples of each ploidy separately and merge them together at the end. (Can we use ipyrad to process mixed ploidy datasets?)
4. See if downstream analyses turn out any differently in these three analyses. (Does the ploidy even make a difference?)

# The Process

  * Make a barcode file from the voucher file, copy the Illumina read files to the cluster, and concatenate the many files into a single rawdata file.
  * Demultiplex, clean and filter (ipyrad s1-2) and make sure things look ok.
  * Branch and cluster at different thresholds (ipyrad s3).
  * See if we can determine ploidy of the samples from the ipyrad output and see if we can determine the best cluster_threshold given our knowledge of the ploidy.
  * Use the best threshold to branch and run as haploid and diploid.
  * See if we can determine ploidy of samples from the ipyrad output.
  * Rebranch at step 4 to process haploids and diploids separately at the correct ploidy, then merge for steps 6 and 7.
  * Run STRUCTURE, RAxML, IBD analysis, PCA, etc on all three datasets and compare inferences.

# Result

Identifying ploidy based on error rates or heterozygosity doesn't seem to work. When you process everything as haploid (so heterozygosity gets counted as higher error) the mean error rate from ipyrad step 4 IS higher for diploids than for haploids but the distributions of error rates overlap so much that it couldn't be used to determine ploidy of an unknown sample. There does seem to be a natural break suggesting a group of samples with higher heterozygosity and haploid-called error, but if the groupings are correct then we have about 8 of the 44 haploids that are really diploids and maybe one of the 19 diploids that is really haploid.

![Heterozygosity vs readcount plot][image1]

Maybe the ploidy assignments based on microsat heterozygosity are flawed.
  * It seems possible diploid samples could happen to be homozygous at 13 microsat loci and appear haploid, while still having heterozygous loci in a dataset of thousands of radseq loci.
  * The one diploid that appears to be haploid is in the area between the two clusters where it could plausibly be a diploid with relatively low heterozygosity.

I think I need a dataset where sample ploidy has been determined using flow cytometry.

[image1]:{{site.image_path}}Het_vs_readcount.png
