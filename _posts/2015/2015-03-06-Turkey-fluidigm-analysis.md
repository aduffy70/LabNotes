---
title: Turkey Fluidigm analysis
date: 2015-03-06T23:59:44+00:00
layout: post
categories:
  - gsta expression
---
  * Turkey Fluidigm analysis- I flipped the y-axis on the R plots by just plotting negative ct values instead of ct values. Any other way of doing it would have required extensive calculations to set the ranges. I was also able to order the treatments (Control, then AFB), varieties (the two wild varieties, then the two domestic varieties), and the types (domestic, then wild) in the plots by using the order() function. It doesn't actually change the order of anything in the dataframe - just the order in which the levels are listed in plots and other output. Reran the "no outliers" analysis and saved the plots as the "pretty" version.
