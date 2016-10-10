---
title: Crepidomanes GBS analysis meeting
date: 2015-05-08T14:18:55+00:00
layout: post
categories:
  - t. intricatum gbs
---
  * Meeting with Paul Wolf and Zach Gompert to discuss Crepidomanes analysis
      * Try Euclidean distance based on 3 genotype frequencies rather than 2 allele frequencies
      * Structure
          * make sure I'm using admixture mode with correlated frequencies
          * report credibility intervals in addition to the point estimates.
          * Make sure to repeat runs to be sure results are similar since it may not be reaching equilibrium.
          * Look at plots for lower K-values to see if they make more sense geographically
      * What is my level of heterozygozity? If it is low consider dropping heterozygotes and using a haploid model
      * Try PCA - it has no HWE related assumptions
      * What is the minor allele frequency distribution? Do I get similar results if I filter things with MAF < 5% or 10%? Consider separate runs using all the data, just the low MAF values (likely rare alleles) and just the high MAF values (common alleles). Rare alleles are more likely to show recent patterns and may overwhelm the analysis since there are so many of them.
      * Zach has GATK running on the cluster and can help with getting things running.
      * For the talk, keep the focus on the organism. Only VERY briefly even acknowledge the caveats of this analysis since the audience won't be interested or have the background to know how it matters.
