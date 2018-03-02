---
title:  Chicken assay statistical analysis revisited again
date:  2018-02-28
layout: post
categories:
  - gsta assays
---

While working on the quail trapping and bioactivation data, we discovered problems with the spreadsheet for analyzing individual HPLC runs. Now that I have a better understanding of how this type of data should be analyzed, I want to take another look at the chicken trapping and bioactivation runs to see if I can reduce some of the within-Type variation. Also, we were calculating a V128 value (though it was not applicable for many runs that didn't use 128nm AFB as a test value) instead of a kcat.

Still focus just on the 2015 data for the same reasons as last time?  Or load all of the data into the new spreadsheets to see if I can identify why replicates from other years are consistent with each other but not consistent with the replicates from 2015?

Start with the 2015 data and see how much the recalculated values differ from the original values.

All of Deepika's runs and the first of Fran's runs use the AFB-gsh peak value directly instead of the AFB-gsh:AFG ratio. Looking at the raw data from the HPLC, there is a peak at 23.7 minutes (our AFG spike-in peak is usually at 24.4 minutes) but the peak areas for this peak double as AFB concentration doubles. If it IS an AFG spike-in it was not spiked in at the same value in each reaction. It can't be used. This affects both L533 runs and one B27 run. The B27 run that was adjusted correctly has similar Vmax and Km values as the one that was not adjusted correctly, so that adjustment may not make much difference--especially since our RRF is so close to 1.0. The Vmax and Kmax values for the two L533 runs are similar to the L529 and L533 runs that were adjusted correctly. I am going to use these 3 "unadjusted" runs as is.

Fran uses calculated CF values for the first two runs (0.889 and 0.914), then the average of those two CF values (0.902) for 10 runs, and then a new calculated CF value (0.919) for the next last two runs. The values are all similar. Recalculate Vmax, Km, and kcat values for all runs using the average of the three calculated values (0.907). While I am doing that, look for outlier HPLC measurements that may be throwing off calculations.

All of the Vmax and Km values for repeated runs on the same sample are very similar except for L532. The Vmax values are similar but the Km values differ greatly (one is higher than all the other 2015 L-type runs and one is lower). When I initially analyzed this dataset I analyzed it using the average of the two values, just the higher, just the lower, and without L532.  It didn't make a difference in significance but it is an outlier in an otherwise consistent-looking dataset. See if I see any issues with those two analysis spreadsheets?
