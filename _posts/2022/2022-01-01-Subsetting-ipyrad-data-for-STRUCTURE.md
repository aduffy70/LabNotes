---
title:  Subsetting ipyrad data for STRUCTURE and Admixture
date:  2022-01-01
layout: post
categories:
  - sphagnum magellanicum
  - ideas
---

1. Subsetting ipyrad data the way we have been doing it is bad. There is a big difference between an 80% sample coverage dataset subsetted for a smaller set of samples and a dataset subsetted for a smaller set of samples with 80% sample coverage.
2. Both Admixture cross-validation and STRUCTURE log(n) probability of data suggest best K=1
3. Admixture seems more "confident" in assigning samples to a group than STRUCTURE is.
4. STRUCTURE is internally consistent as K values increase. Admixture is definitely NOT internally consistent.

# A better subset process:

Best would be filtering at ipyrad so we have best loci for those exact samples but that means every analysis has potentially drastically different loci and different SNPs randomly selected to represent each locus. Otherwise:
  * filter vcf file for the samples desired
  * select a random SNP per locus (or one of the SNPs with best coverage is even better)
  * keep only if coverage is over the minimum acceptable and the SNP is variable
  * Convert from vcf to str for STRUCTURE or vcf to bed for Admixture

I have scripts to do this.
