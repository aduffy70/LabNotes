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
  * Why we focus on just 2015: 2015 replicates are internally consistent and represent multiple birds of all three types, while other years' replicates are internally consistent but clearly different from 2015, or are single measurements for a bird with no way to evaluate their internal consistency, or don't provide multiple birds for all three types.
  * Why I still have reservations about the 2015 data: High between-replicate variation for L532 Km values. Can I show that it doesn't affect ANOVA? Run ANOVA using:
      * just the high Km assay for L532
      * just the low Km assay for L532
      * leaving L532 out entirely

# Results

  * All replicates from 2013-2016: No significant differences between types for Km, Vmax, or Velocity 128.
  * 2015 replicates: No significant differences
  * 2015 replicates with high Km L532 assay: No significant differences
  * 2015 replicates with low Km L532 assay: No significant differences
  * 2015 replicates with no L532: No significant differences
  * 2015 replicates transformed multiple ways to try to improve the "Residual vs Fitted" and "Normal Q-Q plots" (log, inverse, cubed, and square root transformations): No significant differences with any of the transformations

# Conclusion

I have reservations about the repeatability of the assays, but we can minimize those concerns by focusing on the subset of the data that has evidence of repeatability, and by directly exploring the effect of the most variable replicates.  We find no significant differences between chicken types for Km, Vmax, or Velocity at 128uM AFB regardless of whether we use the entire dataset, or just the datapoints with the best evidence for repeatability. The data may violate the ANOVA assumptions of normality and homoscedasticity, but we find no significant differences between chicken types even after transforming the data.

[1]: {{site.baseurl}} {% post_url 2016/2016-12-05-Chicken-Vmax-and-Km-ANOVA-for-Fran-Bhushan %}
