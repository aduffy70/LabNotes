---
title: Analyzing turkey Fluidigm data
date: 2015-02-12T14:37:05+00:00
layout: post
categories:
  - gsta expression
---
  * Working with Deepika Gaddam on the Fluidigm data
      * We thought the script was not calculating averages correctly because some of the values in the table did not match our manual calculations. It turned out the script was correct - some of the samples have six values instead of three and we didn't notice as we were manually calculating.
      * The script was handling missing data (-1 fold change values) incorrectly. It was using the -1 as a real value in calculating the averages. I modified it to not include -1's in the average (and adjust the count of values accordingly).
      * Deepika wanted values for all genes, not just the GSTAs and Nrf, so I tweaked the script to provide that.
      * She also wanted the same table but with ct values rather than fold-change values, so I made a second version of the script to do that.
      * I gave her folders with the tables produced by the script along with a copy of the script that was used to generate each set of tables.
