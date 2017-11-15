---
title: Power calculations for probiotics study
date: 2016-08-03T09:02:52+00:00
layout: post
categories:
  - gsta other
---
Roger is making animal care plan requests and needed power calculations to support those plans. There will be two experimental setups, both of which can be analyzed as two-way anova:

  1. Our usual AFB treated vs control in wild and domestic type birds,
  2. Probiotics vs control in AFB treated and control birds (all domestic)

Power analysis background info:

  * Type II error = probability of not detecting a difference when there is one.
  * Power = probability of NOT making a type II error, or Power = probability of detecting a difference when there is one.
  * The general process for a power analysis is to determine how large of differences you expect to need to be able to detect (the effect size), and then calculate the power at different sample sizes to determine how large a sample is needed to reliably detect a difference at that effect size. A power of 0.8 is reasonable... a power of 0.5 means you only have a 50:50 chance of detecting a difference.

Determining expected effect sizes:

  * We have a previous study ([Rawal et al. 1997][1]) with a similar experimental design that we can use. For a two-way anova, we should compare within and between group variance to get the effect size. The published data doesn't provide enough detail to get that, but it does give means and standard deviations for the 4 treatment groups, which is what we need to get effect sizes for a one-way anova. It isn't ideal, but treating the 4 treatment groups as different levels of a one-way anova lets me get at least a ballpark idea of the effect sizes.
  * The formula to calculate one-way anova effect sizes from means and standard deviations is:
    * ![Effect size formula][image1]
    * k is the number of treatment groups (4)
    * u(i) is the mean of each group (from the manuscript)
    * u is the mean of all groups combined (calculated using mean in R)
    * the denominator is the overall standard deviation (calculated the standard deviation of the 4 group means using sd in R-not exact but gets something close)
    * Using these formulas for the measurements in the Rawal 2014 manuscript I manually calculated the following effect sizes:
      * body weight 0.75
      * liver weight 0.75
      * liver/body weight 0.74
      * BGI expression in liver 0.75
      * BG4 expression in liver 0.61
      * BG1 expression in spleen 0.75
    * [Cohen 1992][2] suggests that small, medium, and large effect sizes should correspond to values of 0.1, 0.25, and 0.4. The calculated values are all large by this standard.

Power calculations:

  * I used pwr.f2.test in R to calculate the power for a two-way anova. This is the tool for determining power in a generalized linear model, and 2-way anova is just a glm with 2 main effects, interaction effects, and error.
  * It requires the numerator degrees of freedom, denominator degrees of freedom, a target effect size, and a significance value and returns the power.
    * numerator df for a main effect = number of levels - 1
      * This is 2-1=1 for both main effects in our design
    * numerator df for interaction effect = (number of levels in effect A - 1) * (number of levels in effect B - 1)
      * This is (2-1) * (2-1) = 1 in our design. Since the numerator df for both main effects and the interaction are the same, the power calculations for each effect will be the same.
    * denominator df = Total samples in all groups - (number of levels in effect A * number of levels in effect B)
      * This will vary with the sample size but as an example, for 10 samples per treatment group it is 40 - (2 * 2) = 36
      * I calculated values for sample sizes ranging from 2-20 birds per sample (8-80 total samples)
    * target effect size:
      * I calculated values for 0.1, 0.25, 0.4, and 0.8 to cover Cohen's low, medium, and high levels as well as the higher values we found in the previous study.
    * significance value:
      * I used p<0.05
  * I calculated all the values using R, pasted to excel, and manually reformatted for plotting
  * ![Power curves][image2]
  * The 9-10 birds per treatment group used in the Rawal 2014 study is sufficient to detect medium to large differences but if we want to detect small effects we need 20+ birds per group.  Effects of the very large size found in that study can be very reliably detected with 10 birds (and perhaps as few as 4 birds).

[1]: http://doi.org/10.1016/j.rvsc.2014.06.008
[2]: http://dx.doi.org/10.1037/0033-2909.112.1.155
[image1]: {{site.image_path}}wp-content/uploads/2016/08/effectsizeformula.png
[image2]: {{site.image_path}}wp-content/uploads/2016/08/Power_curves.png
