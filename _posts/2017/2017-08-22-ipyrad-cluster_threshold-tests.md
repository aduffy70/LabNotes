---
title:  ipyrad cluster_threshold tests
date:  2017-08-22
layout: post
categories:
  - t. intricatum gbs
---
# Problem:

The cluster_threshold used to assemble loci in ipyrad impacts the results.
  * Too high of a threshold will split alleles from heterozygous loci into 2 separate loci and will split reads with errors into separate loci, which results in too many loci with decreased heterozygosity.
  * Too low of a threshold will combine paralogs into a single locus, which results in too few loci with increased heterozygosity.
How do you identify a cluster_threshold value that balances between these two issues?

# Possible solutions

Use comparisons between cluster counts in sporophytes and gametophytes to determine an appropriate cluster threshold:
  * In my preliminary runs, I noticed that the 3 Vandenboschia sporophytes have the highest number of clusters and are among the highest for number of hi-depth clusters (6+ reads)
  * Suspected Vandenboschia gametophyte samples have cluster and hi-depth cluster counts more similar to other samples.
  * This observed difference between Vandenboschia sporophytes and gametophytes is more pronounced at higher clustering thresholds.
  * If the clustering threshold is low enough that most alleles are being joined into correct loci, there is no reason why I should expect sporophytes of a species to have more clusters than gameophytes of the same species.
