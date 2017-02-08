---
title:  Chicken assay statistical analysis revisited
date:  2017-02-02
layout: post
categories:
  - gsta assays

---
I [previously][1] analyzed chicken AFBO trapping assay data for Fran Bhushan and found no statistically significant differences between the chicken types. I need to take a deeper look at those data to determine what else I can draw out of it.

# About the dataset

  * Comparing 3 chicken types: Broiler, Fayoumi, and Leghorn
  * 3-4 birds of each type
  * The data I analyzed 2016-12 was 2 replicates of 3 birds of each type from 2015. One replicate of one bird (B27) was measured at a different gradient of AFB concentrations so it doesn't have a V128 value (the closest measurement is V114). That replicate also has the lowest R-squared value... coincidence or somehow related to the different AFB concentrations?

# What to show?

  * All replicates: ANOVA for Vmax and Km (V128 doesn't exist for all samples)
  * Just 2015 replicates: ANOVA for Vmax, Km, and V128
  * Why we focus on just 2015 - apparent systematic differences between replicates run in other years, and minimal variation between replicates for 2015.
  * Why I still have reservations about the 2015 data - Extreme between-replicate variation for L532 Km values.
    * Can I show that it doesn't affect ANOVA? Run ANOVA using:
      * just the high Km values for L532
      * just the low Km values for L532
      * leaving L532 out entirely

[1]: {% post_url 2016/2016-12-05-Chicken-Vmax-and-Km-ANOVA-for-Fran-Bhushan %}
