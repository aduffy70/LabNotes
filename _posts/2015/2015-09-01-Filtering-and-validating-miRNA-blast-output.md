---
title: Filtering and validating miRNA blast output
date: 2015-09-01T14:42:14+00:00
layout: post
categories:
  - gsta expression
  - gsta mirna
---
  * Filtering and validating miRNA blast output
      * Finish verifying the process used to create blastdbs: Does physically concatenating the files (file size adds up) and then counting unique reads with a simple python script show the same number of unique reads I got by concatenating and piping into fastx_collapser?
          * Concatenated 2014\_EW\_cntrl file is the sum of the individual file sized (25Gb)
      * Finished making blast databases for the AFB treated samples. I know we are mainly interested in the differences between Wild and Domestic types, but it seems like we should be interested in differences that appear under AFB treatment. And the way to know which miRNAs are changing with AFB treatment is to compare the Cntrl and AFB samples.
