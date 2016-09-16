---
title: Analyzing turkey Fluidigm data
date: 2015-02-19T14:57:03+00:00
layout: post
categories:
  - gsta expression
---
  * Ran 2-way anovas on Deepika Gaddam's turkey Fluidigm data (ct-values for GSTA's and Nrf normalized against 3 different house keeping genes. Only found significant interactions between AFB treatment and type or variety for a couple of them when normalized against B-Actin. All interactions were non-significant when data was normalized against GADPH or RPL11. Generated full ANOVA output, a summary table of significance values and interaction plots, box-whisker plots, and QQ plots.
      * Interesting R quirk... The line endings on the R ANOVA output are Unix linefeeds so the files don't open correctly on Windows. I converted them to Windows endings (using TextWrangler - but I now know how to do it in Sublime2 - in the view menu) so she can view the files. I think if I do this before running the summary script it will fail.
  * Worked with Deepika to run the Fluidigm data reformatting script in a couple different ways so she could make more direct comparisons between her dataset and the one Carol Rowe generated.
