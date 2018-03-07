---
title:  Chicken assay statistical analysis revisited again
date:  2018-02-28
layout: post
categories:
  - gsta assays
---
# Problem

While working on the quail trapping and bioactivation data, we discovered problems with the spreadsheet for analyzing individual HPLC runs. Now that I have a better understanding of how this type of data should be analyzed, I want to take another look at the chicken bioactivation runs to see if I can reduce some of the within-Type variation. Also, we were calculating and analyzing a V128 value for chicken (though it was not applicable for many runs that didn't use 128nm AFB as a test value) instead of a kcat.

Still focus just on the 2015 data for the same reasons as last time:
  - They are the most internally consistent. Multiple runs for the same bird give similar Vmax and Km values. Replicates from other years give very different values.
  - They are the most complete. Three birds of each Type with at least 2 replicate runs per bird. Data from other years don't have as many birds or don't have replicate runs to allow comparing consistency.

Start with the 2015 data and see how much the corrected values differ from the original values.

# Re-evaluating 2015 runs

## Runs with no AFG spike-in

  * The earliest runs use the AFB-gsh peak value directly (with an AFB-gsh RF (Response Factor) value from the standard curve) instead of the AFB-gsh:AFG ratio and an RRF (Relative Response Factor).
  * I thought there might have been an AFG spike-in the assay and they just didn't pull the peak areas from the HPLC output files. Looking at the raw data from the HPLC, there is a peak at 23.7 minutes (our AFG spike-in peak is usually at 24.4 minutes) but the peak areas for this peak double as AFB concentration doubles, suggesting it is NOT an AFG spike-in--or if it IS, it was not at the same concentration in each reaction and can't be used.
  * The AFB-gsh RF from 2-23-15 was a clear outlier so they used the average of the RFs from 1-22-15, 2-25-15, and 2-17-15 for that run. I want to take the average RF from all the standard runs (excluding outliers) and use that RF to analyze all the runs with no AFG spike-in (1182.1)
  * These non-spike-in runs affect both L533 runs, two of three F562 runs, and one of two B27 runs.
    * The non-spike-in B27 run has similar Vmax and Km values as the spike-in B27 run, suggesting that the difference in methods does not lead to drastically different results. Keep both B27 runs.
    * One of the non-spike-in F562 runs (2-23-15) is similar to the spike-in run but the other (1-22-15) is different. Keep the 2-23-15 non-spike-in run and the spike-in run. Conveniently, that leaves exactly two runs per bird for all birds.
    * The L533 runs are nearly identical to each other and similar to spike-in runs for the other Leghorn birds. Keep both L533 non-spike-in runs.


## RRF (CF) values

They ran standards and calculated RRF values for the first two runs (0.889 and 0.914), then used the average of those two RRF values (0.902) for 10 runs (where no standard was run), then ran a standard and used that new calculated RRF value (0.919) for the last two runs. The RRF values from all these standards are similar, so there is no reason to suspect the "true" RRF value changed much over the course of these runs. I am going to recalculate Vmax, Km, and kcat values for all runs using the average of the three calculated RRF values (0.907).

## Unusually high variation in Km values for L532 replicates

All of the Vmax and Km values for repeated runs on the same sample are very similar except for L532. The Vmax values are similar but the Km values differ greatly (one is higher than all the other 2015 L-type runs and one is lower than all the others). When I initially analyzed this dataset I tried using the average of the two values, just the higher, just the lower, and without L532.  It didn't make a difference in significance tests but it is an outlier in an otherwise consistent-looking dataset so I wanted to try to understand what about the data is causing this. I closely inspected the data and the calculations used in the analysis of these two runs and I don't see any issues with either that could explain the difference. The difference is still there  (though slightly smaller) even after I correct the data as described below, so I am going to leave both runs in the dataset and evaluate based on the mean of the two.

## Slope/intercept calculation differences

I can exactly replicate the original analysis results using my updated HPLC analysis templates with one big difference. Originally, they plotted all of the replicate activity values when calculating the slopes and intercepts to get Vmax and Km. Currently we only plot the mean of the replicate values. This results in slightly different results.
  * I confirmed this is the only difference because when I use all of the replicate values my Vmax and Km exactly match the original values.
  * Using all replicates causes problems if we drop any outlier replicates (which we often do) because then AFB levels with fewer replicates in the final dataset are weighted differently, potentially leading to big shifts in slope and intercept.
  * As I go through each analysis, I am going to recalculate using mean activities rather than individual replicate activities.

## kcat calculation problem

We have been expressing kcat in the wrong units (probably in all the HPLC analyses I have helped analyze). The calculation for kcat is Vmax/amount of enzyme in reaction. We express Vmax in units of nmol/min/mg but we express the amount of enzyme in the reaction in pmol. We need to convert that to nmol, so all of our original kcat values should be multiplied by 1000. Values around 1E-4 to 1E-3 are the original, incorrect values. New values tend to be around 0.1 to 1.0.

# Data correction plan

So, for each 2015 Chicken bioactivation analysis that has AFG spike-in values:
  * Add the AFB-gsh and AFG peak area data to my template and confirm that I can replicate the original results. This will ensure I am calculating using the original assay concentrations, injection volumes, etc.
  * Replace the RRF/CF value with the average of the three calculated values (0.907).
  * Remove any outlier replicate activity levels (see outlier definition below).
  * Do slope and intercept calculations using mean of replicate activity levels instead of all replicates.

For the runs without AFG spike-in values:
  * Confirm that the starting concentrations, A365 readings, etc look reasonable and that I can replicate the original results.
  * Replace the AFB-gsh RF value with the average from the seven non-outlier standard runs (1182.1).
  * Remove any outlier replicate activity levels (see outlier definition below).
  * Do slope and intercept calculations using mean of replicate activity levels instead of all replicates.

## How I am defining outliers:

We usually have three replicate activity values for each AFB concentration. If the activities of two replicate reactions at a given AFB concentration are obviously more similar to each other than to the third, I calculate the absolute difference between the third and the average of the other two. If that difference is >33% of the average of the two similar replicates I call it an outlier and remove it.
  * In practice, replicates were clearly outliers or not. I didn't have to make any judgment calls about replicates that were really close to the 33% cutoff.
  * When making decisions about outliers I stuck to the cutoff and did not take into consideration how including or removing replicates affected how well the resulting points fit the activity curve, but in nearly all cases removing outliers DID improve the fit--suggesting the 33% cutoff is reasonable.

# Results

  * Correcting the data did not drastically change things.
  * In general, correcting the data slightly reduced the variation between replicates for the same bird.
  * One-way ANOVA still shows no significant differences between chicken Types for Vmax, Km, or kcat (though Km is close--Km's for Broiler vs Leghorn are most different).

~~~
One-way ANOVA: Vmax
              Df Sum Sq Mean Sq F value Pr(>F)
  Type         2  0.385  0.1923   0.432  0.657
  Residuals   15  6.675  0.4450               

One-way ANOVA: Km
              Df Sum Sq Mean Sq F value Pr(>F)  
  Type         2 150727   75364   3.317 0.0642
  Residuals   15 340838   22723                 

One-way ANOVA: kcat
              Df Sum Sq Mean Sq F value Pr(>F)
  Type         2  0.104 0.05201   0.432  0.657
  Residuals   15  1.805 0.12033            
~~~

![Chicken Vmax corrections][image1]
![Chicken Km corrections][image2]
![Chicken kcat corrections][image3]

[image1]: {{site.image_path}}Chicken_Vmax_corrections.png
[image2]: {{site.image_path}}Chicken_Km_corrections.png
[image3]: {{site.image_path}}Chicken_kcat_corrections.png
