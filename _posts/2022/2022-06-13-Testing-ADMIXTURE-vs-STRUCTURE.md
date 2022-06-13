---
title:  Testing ADMIXTURE vs STRUCTURE
date:  2022-06-13
layout: post
categories:
  - sphagnum magellanicum
  - for others
  - ideas
---
How do STRUCTURE and ADMIXTURE handle truly admixed samples with varying levels of missing data?

# Process

  * I took an _S. magni_ (SB5525) and _S. diabolicum_ (SB4940) sample that ADMIXTURE and STRUCTURE agree are not admixed and that have high coverage. I _in silico_ admixed them at different levels and with different levels of missing data to generate fake admixed samples.
    * I used the ustr files from ipyrad and a custom script to admix the 2 files and filter to specific levels of missing data
      * 50% admixed, <10% missing
      * 50% admixed, 99% missing
      * 90% magni admixed with 10% diabolicum, <10% missing
      * 90% magni admixed with 10% diabolicum, 99% missing
      * Not admixed magni, 99% missing
      * Not admixed diabolicum, 99% missing
    * Added the new samples into the dataset of all magni and diabolicum samples (removing the two samples used to create them).
    * Ran 10 runs of STRUCTURE at K=2 on the new ustr file.
    * Converted ustr to ped and ran 10 runs of ADMIXTURE at K=2 on the ped file.
    * Plotted the average and the uncertainty (STRUCTURE provides a 90% probability interval and ADMIXTURE provides standard error).

# Results

![STRUCTURE vs ADMIXTURE with varying admixture and missing data][image1]

In the image above, gray= magni and orange = diabolicum.

With low missing data, both programs correctly identified high and low admixture with little uncertainty.

With high missing data, both programs called the 50% admixed sample diabolicum and the range of uncertainty does NOT include the correct admixture.

With high missing data, ADMIXTURE called the 90% magni:10% diabolicum sample 100% magni, but with uncertainty that includes the true value. STRUCTURE correctly identified it as 90% magni but with uncertainty that includes everything from 100% magni to 50:50 admixture.

With high missing data, ADMIXTURE called the 100% diabolicum as 100% diabolicum with little uncertainty. STRUCTURE called it >95% diabolicum with uncertainty ranging from 0-10% magni admixture. For the 100% magni, ADMIXTURE correctly called it 100% magni, but with uncertainty from 0-10% admixture. STRUCTURE called it as ~5% admixed with high uncertainty.

# Conclusions

With low missing data, either program correctly identified both high (50%) and low (10%) levels of admixture. With high missing data, neither program can be relied upon to correctly identify admixed samples. ADMIXTURE is more likely to correctly identify non-admixed samples but will also call samples with low admixture as not admixed. Structure sometimes identifies admixture where there is none. In most cases, the uncertainty from each program at least included the correct admixture value, but both programs completely failed to identify the 50% admixed sample with high missing data.


[image1]: {{site.image_path}}STRUCTURE_vs_ADMIXTURE_test-2022-06-13.png
