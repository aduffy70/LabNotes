---
title: Lung Affymetrix update
date: 2015-03-19T15:00:05+00:00
layout: post
categories:
  - pm2.5
---
  * Jake Weston has updated Lung Affymetrix data for C1, C2, C3, and P1-1.
      * The new P1-1 clusters even further from the rest of the data than the old
      * The new C1 had the same "odd looking" MA plots as the old
      * The new C2 and C3 cluster closer to each other than the old did, and closer to the rest of the dataset as well.
      * Running the analysis with just the new C2 and C3 chips gives more significantly up/down regulated genes than using just the old C2/C3 or both sets (not surprising since there is less variation between the two new chips so finding significance is easier).
      * We decided to drop both P1-1s, both C1s, and the old C2 and C3 and keep everything else as the final dataset.
      * Arrayanalysis.org has been updated in the last few weeks and no longer supports the same qc analyses we were using for our particular chip. So we weren't able to run the exact set of qc plots but we compared what we could using the Affymetrix provided software.
