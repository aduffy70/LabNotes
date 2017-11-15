---
title: Pooling samples is dangerous
date: 2015-11-03T14:43:34+00:00
layout: post
categories:
  - gsta assays
---
  * In at least 2 of the experiments running in the lab we have pooled samples before taking measurements so that each measurement actually represents two birds. This was considered necessary because the livers of individual birds were too small to do the required assays or because we didn't want to use up all of the available material. Pooling samples like this won't affect the group mean measurement values, but it can have big effects on the variance. With small sample sizes (in this case, 8 pooled down to 4) I worried that this could lead to a large possibility of making different inferences than we would have made if the samples were not pooled. I wrote a simulation in python to find out.
  * poolingliversisscary.py - takes two groups of 8 measurements and calculates the p-value from a t-test comparing the two groups. This represents the inference we would have made without pooling. It then randomly "pools" pairs of measurements within each group to leave two groups of 4 measurements and calculates a p-value. It repeats the pooling thousands of times to try to get as many possible random pooling combinations as possible and keeps track of what proportion of the p-values are significant (<=0.05), and tracks the minimum and maximum p-values found over the thousands of repetitions.
  * The results are scary. When I use real data from the turkey CDC data, for example, in every case I tried there was between 10-80% of the random poolings that led to the opposite inference of the full data.

| .   | Example1 | Example2 | Example3 | Example4 | Example5 | Example6 |
| --- | -------- | -------- | -------- | -------- | -------- | -------- |
| Non-pooled p-value | 4.43E-05 | 0.012 | 0.029 | 0.069 | 0.125 | 0.633 |
| Proportion significant | 1 | 0.83 | 0.53 | 0.3 | 0.11 | 0 |
| Minimum p-value | 6.67E-07 | 4.90E-05 | 3.36E-05 | 1.60E-04 | 6.51E-05 | 0.114 |
| Maximum p-value | 0.007 | 0.079 | 0.126 | 0.223 | 0.315 | 0.753 |

  * I also ran some simulations where I just randomly selected 4 values from each group, rather than pooling pairs. This gave even worse results. So pooling pairs of samples isn't as bad as having half the number of samples to begin with, but it definitely can result in different inferences than if we'd kept each sample separate.
  * Conclusion: When designing experiments, we need to consider whether pooling samples will be necessary for the assays we are likely to want to run, and if it is, we need to run more than 8 samples if we want the same level of confidence in our results.
