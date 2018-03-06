---
title:  Chicken assay statistical analysis revisited again
date:  2018-02-28
layout: post
categories:
  - gsta assays
---
# Problem

While working on the quail trapping and bioactivation data, we discovered problems with the spreadsheet for analyzing individual HPLC runs. Now that I have a better understanding of how this type of data should be analyzed, I want to take another look at the chicken trapping and bioactivation runs to see if I can reduce some of the within-Type variation. Also, we were calculating and analyzing a V128 value (though it was not applicable for many runs that didn't use 128nm AFB as a test value) instead of a kcat.

Still focus just on the 2015 data for the same reasons as last time:
  - They are the most internally consistent. Multiple runs for the same bird give similar Vmax and Km values. Replicates from other years give very different values.
  - They are the most complete. Three birds of each Type with at least 2 replicate runs per bird. Data from other years don't have as many birds or don't have replicate runs to allow comparing consistency.

Start with the 2015 data and see how much the corrected values differ from the original values.

# Re-evaluating 2015 runs

## Runs with no AFG spike-in

  * All of Deepika Gaddam's runs and the first of Fran Bhushan's runs use the AFB-gsh peak value directly (with an AFB-gsh RF (Response Factor) value from the standard curve) instead of the AFB-gsh:AFG ratio and an RRF (Relative Response Factor).
  * I thought there might have been a spike-in but they just didn't pull the peak areas from the HPLC output files. Looking at the raw data from the HPLC, there is a peak at 23.7 minutes (our AFG spike-in peak is usually at 24.4 minutes) but the peak areas for this peak double as AFB concentration doubles. If it IS an AFG spike-in it was not spiked in at the same value in each reaction. It can't be used.
  * This affects both L533 runs and one B27 run. The B27 run that was adjusted correctly has similar Vmax and Km values as the one that was not adjusted correctly, so that adjustment may not make much difference--especially since our RRF is so close to 1.0. The Vmax and Kmax values for the two L533 runs are similar to the L529 and L533 runs that were adjusted correctly.
  * The AFB-gsh RF from 2-23-15 was a clear outlier so they used the average of the RFs from 1-22-15, 2-25-15, and 2-17-15 for that run. I want to take the average RF from all the standard runs (excluding outliers) and use that RF to analyze all the runs with no AFG spike-in (1182.1)

## RRF (CF) values

Fran uses calculated RRF values for the first two runs (0.889 and 0.914), then the average of those two RRF values (0.902) for 10 runs (where she ran no standard), and then a new calculated RRF value (0.919) for the last two runs. The values are all similar. I am going to recalculate Vmax, Km, and kcat values for all runs using the average of the three calculated RRF values (0.907).

## Unusually high variation in Km values for L532 replicates

All of the Vmax and Km values for repeated runs on the same sample are very similar except for L532. The Vmax values are similar but the Km values differ greatly (one is higher than all the other 2015 L-type runs and one is lower). When I initially analyzed this dataset I tried using the average of the two values, just the higher, just the lower, and without L532.  It didn't make a difference in significance but it is an outlier in an otherwise consistent-looking dataset. I closely inspected the data from these two runs and I don't see any issues with either of those two analyses that could explain the difference. The difference is still there  (though slightly smaller) even after I correct the data as described below, so I am going to leave both runs in the dataset and evaluated based on the mean of the two.

## Slope/intercept calculation differences

I can exactly replicate Fran's analysis results using my updated HPLC analysis templates with one big difference. She plots all of the replicate activity values when calculating the slopes and intercepts to get Vmax and Km. I have been plotting the mean of the replicate values. This results in slightly different numbers but I know this is the only difference between our analyses because when I use all of the replicate values my Vmax and Km exactly match hers. Using all replicates causes problems if we drop any outlier replicates (which we often do) because then AFB levels with fewer replicates in the final dataset are weighted differently, potentially leading to big shifts in slope and intercept. As I go through each analysis, I need to recalculate using mean activities rather than individual replicate activities.

## kcat calculation problem

We have been expressing kcat in the wrong units (probably in all the HPLC analyses I have helped analyze). The calculation for kcat is Vmax/amount of enzyme in reaction. We express Vmax in units of nmol/min/mg but we express the amount of enzyme in the reaction in pmol. We need to convert that to nmol, so all of our old kcat values should be multiplied by 1000. Values around 1E-3 to 1E-4 are the old, incorrect values. New values tend to be around 1.

## F562 variation

We have three replicate HPLC runs of F562. Two are very similar but the oldest is different. Just keep the newest two replicates. That leaves exactly two replicate HPLC runs per bird in the dataset.

# Data correction plan

So, for each 2015 Chicken bioactivation analysis that has AFG spike-in values:
  * Add the data to my template and confirm that I can replicate the original results. This will ensure I am using the right assay concentrations, injection volumens, etc.
  * Replace the RRF/CF value with the average of the three calculated values (0.907).
  * Remove any outlier replicate activity levels.
  * Do slope and intercept calculations using mean of replicate activity levels instead of all replicates.

For the runs without AFG spike-in values:
  * Confirm that the starting concentrations, A365 readings, etc look reasonable and that I can replicate the original results.
  * Replace the AFB-gsh RF value with the average from the seven non-outlier standard runs (1182.1)
  * Remove any outlier replicate activity levels
  * Do slope and intercept calculations using mean of replicate activity levels instead of all replicates

## How I am defining outliers:

If the activities of two replicate reactions at a given AFB concentration seem more similar than the third, I calculated the difference between the third and the average of the other two. If that difference is >33% of the average of the two similar replicates I call it an outlier and remove it.

# Results

  * Correcting the data did drastically change things.
  * In general, correcting the data slightly reduced the variation between replicates for the same bird.
  * One-way ANOVA still shows now significant differences between chicken Types.
