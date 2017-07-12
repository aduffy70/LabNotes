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
  * 1 replicate of 4 birds from each type-treatment
  * Good data. I reran these reactions putting everything for one primer pair on a single plate AND including all six birds per type-treatment. Use those data instead.

PCR0291
  * 2nd replicate of same 4 birds from each type type-treatment
  * Good data. I reran these reactions putting everything for one primer pair on a single plate AND including all six birds per type-treatment. Use those data instead.

## Combining data from plates / Equalizing plates

Because of differences in the auto-determined thresholds on the two plates, they differ systematically, which introduces error (Ct values on PCR0291 were consistently higher than PCR0290).

To adjust for this, I used just GAPDH values to find thresholds for each plate that minimized the differences between replicates between the two plates and gave as close as possible to the same distribution of values. In this process, I didn't use E9-GAPDH from either plate since it had a strange looking curve on PCR0291 (a long linear increase rather than an S-curve.) I ended up with threshold values (242 and 150) that give almost identical mean GAPDH Cts for each plate (22.94 and 22.93) and similar standard deviations (1.06 and 0.86). I then used these thresholds to calculate the Cts for the rest of the samples on each plate.

This was only a problem because of how I set up the experiment. I ran all samples and genes on one plate, and then ran technical replicates on a second plate. I should have run all the samples and replicates that I wanted for a gene on the SAME plate. I never make comparisons between genes, so having genes on different plates isn't an issue. If I decide I need to run more samples it will get even more complicated. So I'll have to include more GAPDH replicates for the samples I ran on these two plates so I'll have something to use to equalize the new plate to these two. Ugh. In the future, I will put all samples and replicates for a gene on ONE plate, even if it means using plates less efficiently.

I setup reactions for UTR3 so that all samples and replicates for a particular gene on one plate so this will not be a problem. No plate equalization is necessary for those runs and I should have lower error in the datapoints I am directly comparing.

I want to run all 6 samples for each type-treatment and I'm not comfortable with the potential for higher error when combining plates, so I am rerunning UTR5 reactions with the proper plate setup:

PCR0296
  * 2 technical replicates of all 24 samples for UTR5-A
  * Good data

PCR0297
  * 2 technical replicates of all 24 samples for UTR5-B
  * Good data

PCR0298
  * 2 technical replicates of all 24 samples for UTR5-C
  * Running at 3X the template concentration to try to bring Ct values into a range where more of them will reach the threshold.
  * Running

PCR0299
  * 2 technical replicates of all 24 samples for GSTA3_cds
  * Pending

PCR0300
  * 2 technical replicates of all 24 samples for GAPDH
  * Pending



# Analysis

## How to handle missing data?
  * Likely failed reactions (other technical and biological replicates have low Cts):
    * Remove from dataset. Removed 1 value (a UTR5-A)
  * Likely unexpressed or so low it needed >40 cycles (other technical and biological replicates have Cts ~35-40):
    * Replace NA with 40. Changed 11 values (all UTR5-C)

Do this before normalization?
  * Doing it after would make all unexpressed/low values the same (40).
  * Doing it before will make an unexpressed/low value for a sample with less cDNA lower than one for a sample with more cDNA.
    * This makes more sense, since having more total cDNA but STILL not having enough to amplify the gene means more.

## Normalization

  * For calculating delta Ct, I used the average of the 2 GAPDH technical replicates for each bird. Then I subtract this housekeeping factor from the 2 gene technical replicates and average--or average the 2 gene technical replicates and subtract the housekeeping factor--you get the same result in either order.
  * Did the same thing using GSTA3_cds to get the housekeeping factors. This lets me see how relative levels of each UTR version change while holding GSTA3 constant.
