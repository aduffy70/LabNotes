---
title: Possible issues with Lung Affymetrix data
date: 2015-02-09T15:00:44+00:00
layout: post
categories:
  - pm2.5
---
  * Find more info on typical Affymetrix intensity values. Are the Lung Affymetrix data outside the typical range? Compared findings with Jake Weston:
      * The lower difference between positive and negative border controls is expected for the HuGene 2.0 chip. The sample dataset from Affymetrix looks very similar.
      * I think our values are a bit lower than other datasets but not drastically. The bigger concern is that there is more variation between our 3 controls (or between our 2 controls if we leave out control 1 since it won't normalize correctly) than there is between the rest of our samples combined. This doesn't seem biologically plausible, so it suggests one or both is wrong. We don't have a way to determine which.
      * If we use RMA normalization and both C2 and C3 we have 11 upregulated (2fold) genes and 0 downregulated.
      * With just C2 we have ~30 upregulated and ~20 downregulated.
      * With just C3 we have ~60 up and ~60 down.
      * If the ~50 from C2 are a subset of the ~120 from C3 maybe those are worth looking into further (Jake will check). If not, I think we need to run new control chips or look at what we can pull out of this dataset without controls (D1 vs D12, P1 vs P12, D1 vs P1, and D12 vs P12 direct comparisons.
