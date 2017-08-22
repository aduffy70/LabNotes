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
