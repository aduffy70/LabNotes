---
title:  Combining HPLC datasets
date:  2017-08-22
layout: post
categories:
  - gsta assays
---
We have tried a couple methods to combine HPLC datasets:
  * Just pooling data and averaging values for overlapping concentrations does not work. There is so much between-run variation that you can clearly see there are two different sets of points.
  * Using overlapping concentrations to generate a normalization factor (either by subtracting or dividing) did not work, even when we plotted them, and fit a line so the normalization factor could vary by concentration. This seemed to work for the points that fall in the same range as the overlapping points we used to normalize, but it did bad things to the points outside that range--low points often became negative and high points became unrealistically high.
  * Using the control reactions to generate a normalization factor by dividing worked. We run control reactions (mouse) on every HPLC run but the values never actually get used in processing the data. Perhaps THIS is why they are there.
    * Calculate the mean of the control reactions for each run.
    * Divide the mean from the first run by the mean from the second run to get the normalization factor.
    * Multiply the activities from the second run by the normalization factor to bring them in line with the first run.
  * It worked on the 2017-08-07 and 2017-08-10 Quail data.
