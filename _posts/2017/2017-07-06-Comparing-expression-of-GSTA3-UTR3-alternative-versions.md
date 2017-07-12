---
title:  Comparing expression of GSTA3 UTR3 alternative versions
date:  2017-07-06
layout: post
categories:
  - gsta alt splicing
---
# qPCR runs

PCR0292
  * 2 technical replicates of all 24 samples for UTR3-A and GSTA_cds
  * Good data

PCR0293
  * 2 technical replicates of all 24 samples for UTR3-B and UTR3-C
  * Good data, but expression is low for UTR3-C so all Ct values are high. I added extra cycles at the end to see if I could get real values for more of them (rather than just assigning them Ct=40 because they never reached threshold) but I am not comfortable with how the results turned out. Most reached the threshold eventually but with such high Cts and with such variation between replicates that I am not confident that it isn't spurious. I reran UTR3-C with higher template concentration on PCR0295 to try to bring Ct values down into a more reliable range. Use those data instead.


PCR0294
  * 2 technical replicates of all 24 samples for UTR3-D
  * Good data


PCR0295
  * 2 technical replicates of all 24 samples for UTR3-C
  * This is a second run with 3X the template concentration to try to bring Ct values down into a more reliable range.
  * Good data. With higher concentration, Ct values were a bit lower and fewer of them failed to reach threshold. Use this instead of the data from PCR0293.

# Analysis

## Data cleaning
  * It looks like Ct values for all row A reactions are slightly higher than the replicates in row B. Also, wells A1 and A12 are consistently much higher. I am discarding all data from these 2 wells and will not use row A on future qPCR plates.

## Normalization
  * Delta Ct using GSTA3_cds and GAPDH (separately). GAPDH is just so I can verify GSTA3 is behaving as expected. Normalization with GSTA3 lets me see how relative levels of each alternative version change holding GSTA3 constant.

## Analysis
  2-way ANOVA of Type-Treatments

# Results
