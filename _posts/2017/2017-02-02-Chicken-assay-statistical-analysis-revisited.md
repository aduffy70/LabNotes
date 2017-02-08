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

  * All replicates: ANOVA for Vmax, Km, and V128 (where it exists)
  * Just 2015 replicates: ANOVA for Vmax, Km, and V128
  * Why we focus on just 2015 - apparent systematic differences between replicates run in other years, and minimal variation between replicates for 2015. Also, 2015 data are the only ones where we have replication within birds. The two replicates for L533 were run 2 days apart, but all the others were at least 24 days (and up to 6 months apart), yet the within bird replicates are very similar. The replicates from other years are all more different from the 2015 values than the 2015 values are from each other. *tldr*: 2015 replicates are internally consistent, while other years' replicates are clearly different or are single measurements with no way to evaluate their internal consistency.
  * Why I still have reservations about the 2015 data - Extreme between-replicate variation for L532 Km values.
    * Can I show that it doesn't affect ANOVA? Run ANOVA using:
      * just the high Km values for L532
      * just the low Km values for L532
      * leaving L532 out entirely

# Results

  * All replicates from 2013-2016: No significant differences between types for Km, Vmax, or Velocity 128.
  * 2015 replicates: No significant differences
  * 2015 replicates with high Km L532 replicate: No significant differences
  * 2015 replicates with low Km L532 replicate: No significant differences
  * 2015 replicates with no L532 replicates: No significant differences
  * 2015 replicates transformed several ways to try to improve the "Residual vs Fitted and Normal QQ plots (log, inverse, cubed, square root): No significant differences

# Conclusion

I have reservations about the reliability/repeatability of the assays, but we find no significant differences between chicken types for Km, Vmax, or Velocity at 128uM AFB regardless of whether we use the entire dataset, or just the datapoints with the best evidence for repeatability.

[1]: {% post_url 2016/2016-12-05-Chicken-Vmax-and-Km-ANOVA-for-Fran-Bhushan %}
