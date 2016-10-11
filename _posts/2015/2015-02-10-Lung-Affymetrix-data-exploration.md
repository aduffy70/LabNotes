---
title: Tuesday
date: 2015-02-10T15:00:36+00:00
layout: post
categories:
  - pm2.5
---
  * I was curious whether the lack of clear clustering of replicates in the Lung Affymetrix data is because we have a gradient of treatment levels, so I ran the arrayanalysis.org QC pipeline on 2 subsets of the data: just the D12s, P12s, and all three controls, and just the D12s, P12s, and C2+C3 (no C1).
      * Replicates do cluster into groups a bit better, though we have more variation within the controls than we do within all the others combined.
      * If I run the QC with no controls at all (just the 12 treatment samples) the replicates don't cluster clearly. There is more variation within groups than between. D1-2 and P1-1 stand out as outliers when the controls are removed.
      * If I run the QC with no controls and no D1-2 or P1-1........ running now............
