---
title: Random GBS data QA
date: 2014-12-04T14:45:28+00:00
layout: post
categories:
  - t. intricatum gbs
---
  * Run Don Hauber's Salvinia GBS data through my QA pipeline (gbs-tools) so when he gets here we can focus on actual data analysis
  * Finish analysis of randomly generated GBS data for comparison to the Salvinia and Crepidomanes datasets. It is clear just from the number of unique 16mers generated (266 million in the random set vs ~2 million in the Crepidomanes) that the GBS datasets are quite different from what we'd expect to find at random, but having the set of plots to show that is nice and it is important that we be thinking about this anytime we deal with high-throughput sequencing data where the datasets are so large we could expect to find some 'real-looking' data just by chance. This analysis takes much longer than on a real dataset, because we have 133X as many unique 16mers to assign to barcodes. The Crepidomanes dataset took a couple hours - the random dataset is approaching 24 hours already.
