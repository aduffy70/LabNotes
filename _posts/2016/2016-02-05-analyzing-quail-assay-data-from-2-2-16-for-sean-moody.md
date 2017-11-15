---
title: Analyzing quail assay data from 2-2-16 for Sean Moody
date: 2016-02-05T14:31:51+00:00
layout: post
categories:
  - gsta assays
---
  * Ran repeated measures Anova to test whether there are differences between the 2 experiments he ran for each assay.
      * Error in the raw data calculations? The specific activity umol/min/mg is based just on Replicate 2, not on the average of the two replicates. I recalculated in my input file so I can look for differences between Experiments using the average of the two replicates and the differences between Replicates using all the replicate values.
      * There are no significant differences between Experiments of Replicates for DCNB
      * For CHP there are significant differences between the two experiment but not between the 4 Replicates. The difference seems to be driven by M20 which has low values for the first replicate in each experiment.
      * These were just tests to see if he can get consistent results from the assay. Based on this result, it seems there is still  variation but things are consistent enough that the variable data jumps out. He is going to continue to use this layout of 2 separate assays with 2 replicates of each so that we can spot potentially erratic datapoints and remove them before analysis.
  * Why are the undiluted M readings so low while all the diluted M's have approximately the same value as each other? Apparently when there is too much of the protein it blocks the assay. Once you dilute below the level where that is not an issue the activity level is consistent. It shouldn't change much with level of dilution because the calculation of specific activity includes the protein concentration.
