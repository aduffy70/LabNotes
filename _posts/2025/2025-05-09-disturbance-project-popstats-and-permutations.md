---
title:  Disturbance project popstats and permutations
date:  2025-05-09
layout: post
categories:
  - sphagnum other
  - for others
---
Notes:
  * I realized I filtered the dataset incorrectly for the postates analyses! I filtered loci with more or less than 2 loci before I filtered out the admin samples so I had many loci that were not polymorphic in the final sampleset. This doesn't affect Fst but it changes the Hexp, PPL, and PPR results dramatically. I fixed it.
  * I have been calculating Hexp using the poppr table method that gives Nei's 1978 He. But it takes several minutes to run so I can't run permutations of it in reasonable times. So, I am using the Hs expected heterozygosity function in adegenet. The numbers are a bit different but they are relative between groups.
  * I have been using a custom script to get percent polymorphic loci from a vcf. But that means I am using slightly different loci because I can't filter exactly the same way I do in R. I figured out how to do the calculations in R on the exact same set of loci as my other population statistics. And I can permute everything at once.
  * Permutation tests of Hexp, PPL, and PPR are problematic. Tests of Fst make sense, because if all the samples are really one population then we expect pairwise differences between random groups to be zero--and we can see how often we get the original result or higher by chance. But what do we expect for Hexp, PPL, and PPR?
    * If the samples are really all one population we expect random draws to all have the same values for Hexp, PPL, and PPR. But we don't know what we expect that value to be. It is higher than the original for Natural and Around, but by differing degrees. It is lower for Disturbed. And the smaller sample size of Around seems to make a big difference: Around (20 samples) is always lower than the other 2 groups (~115 samples each) in all permutations.
