---
title:  Combining HPLC datasets
date:  2017-08-22
layout: post
categories:
  - gsta assays
---
We have tried a couple methods to combine HPLC datasets:
  * Just pooling data and averaging values for overlapping concentrations does not work.
  * Using overlapping concentrations to generate a normalization factor (either by subtracting or dividing) did not work, even when we plotted them, and fit a line so the normalization factor could vary by concentration.
  * Using the control reactions to generate a normalization factor by dividing worked.
    * Calculate the mean of the control reactions for each run.
    * Divide the mean from the first run by the mean from the second run to get the normalization factor.
    * Multiply the activities from the second run by the normalization factor to bring them in line with the first run.
  * It worked on the 2017-08-07 and 2017-08-10 Quail data.
