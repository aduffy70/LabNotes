---
title:  Comparing expression of GSTA3 UTR5 alternative versions
date:  2017-06-28
layout: post
categories:
  - gsta alt splicing
---
# qPCR runs

PCR0289
  * Do not use. My first qPCR attempt had setup issues and the machine had not been calibrated in years.

PCR0290
  * Good data
  * 1 replicate of 4 birds from each type-treatment

PCR0291
  * Good data
  * 2nd replicate of same 4 birds from each type type-treatment

# Combining data from plates / Equalizing plates

Because of differences in the auto-determined thresholds on the two plates, they differ systematically, which introduces error (Ct values on PCR0291 were consistently higher than PCR0290).

To adjust for this, I used just GAPDH values to find thresholds for each plate that minimized the differences between replicates between the two plates and gave as close as possible to the same distribution of values. In this process, I didn't use E4-GAPDH from either plate since it had a strange looking curve on PCR0291 (a long linear increase rather than an S-curve.) I ended up with threshold values (242 and 150) that give almost identical mean GAPDH Cts for each plate (22.94 and 22.93) and similar standard deviations (1.06 and 0.86). I then used these thresholds to calculate the Cts for the rest of the samples on each plate.

This was only a problem because of how I set up the experiment. I ran all samples and genes on one plate, and then ran technical replicates on a second plate. I should have run all the samples and replicates that I wanted for a gene on the SAME plate. I never make comparisons between genes, so having genes on different plates isn't an issue. If I decide I need to run more samples it will get even more complicated. So I'll have to include more GAPDH replicates for the samples I ran on these two plates so I'll have something to use to equalize the new plate to these two. Ugh. In the future, I will put all samples and replicates for a gene on ONE plate, even if it means using plates less efficiently.
