---
title: QC questions on Lung Affymetrix data
date: 2015-02-05T14:58:41+00:00
layout: post
categories:
  - pm2.5
---
  * Working with Jake Weston on Lung Affymetrix quality control. It seems suspicious that almost nothing is down-regulated in his expression data so we went back to the raw data to look for potential problems. The Pearsons Correlation and Spearman Rank Correlation plots suggest that Replicates 1 & 3 of his controls (C1, C3) are outliers from the rest of the chips. The PCA graph supports this as well with all the chips clustering together except 1 & 3 (which are separate from each other as well).
    * Can we assume C2 is correct and there is a problem with 1 & 3? The boxplots give a different picture, as does the intensity distribution (histogram) plot? I think they showed C2 & C3 as the outliers.
    * When we dropped different controls from the analysis to see how it affected the data, were we dropping them post-normalization? If so, their values were still skewing the normalization of all the other plates. We should drop them pre-normalization and see how it affects the analysis.
    * Found arrayanalysis.org that has a set of opensource tools for Affymetrix QC and examples showing what good AND bad datasets should look like. Ran the test dataset to see how it works and then started a run using Jake's data.
