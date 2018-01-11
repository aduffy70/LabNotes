---
title:  Re-analyze Crepidomanes with SNP loci
date:  2018-01-11
layout: post
categories:
  - t. intricatum gbs
---
# Problem
When ipyrad filters loci by sample coverage it does it for the whole locus, which may have multiple SNPs. Because read lengths differ, not all SNPs will have the same sample coverage as the whole locus so when we randomly pick one SNP for the ustr output, we end up with some SNP loci that don't meet the sample coverage cutoff we requested. That means our dataset contains more missing data than expected.

For example, my c85_dip_s27 dataset has 123 loci, but ~45% of them don't actually have coverage in 27 samples. ~10% of them have coverage in less than 13 samples!

Further complicating things, because ipyrad randomly picks one SNP per locus for the ustr dataset, when you do multiple ipyrad runs you aren't getting the same loci. So my c85_dip_s27 dataset isn't actually a subset of my c85_dip_s18 dataset.

# Solution
If I an ipyrad dataset with a low cutoff, I can use a script to filter SNP loci that don't actually meet a specified cutoff. By using the same ipyrad dataset and filtering for different cutoffs, I can get datasets that are actually subsets of each other. My resulting datasets will have fewer loci, but the loci they have will be better.

# Re-analysis

Started with c85_dip_s6.stru from ipyrad. I don't plan to make any datasets with coverage in <6 samples so this is a good starting point. I didn't use s4 because it has many more SNP loci and so takes longer to process. Also, when I filter them down to high coverage loci, the s6 yields a few more SNP loci than the s4 (because a few more of the SNPs chosen by random happen to have higher coverage in the s6)

## Filter ipyrad loci to SNP loci

  * I made 5 filtered datasets:
    - snp6 (30242 loci)
    - snp18 (33% coverage - 578 loci)
    - snp27 (50% coverage - 69 loci)
    - snp34 (happens to give exactly 20 loci)
    - snp36 (66% coverage - 14 loci)
## Identify likely mixed samples:
  * Structure
    - For each dataset, find the optimal K. Tested K=1 to 20, with 5 reps each. 100K burnin/250K MCMC.
    - For each dataset, do 100 runs to check for consistency
    - Combine runs to get a mean (and min/max) probability of assignment to crepidomanes for each run
