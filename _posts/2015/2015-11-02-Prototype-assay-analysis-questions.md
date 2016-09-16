---
title: Prototype assay analysis questions
date: 2015-11-02T13:51:36+00:00
layout: post
categories:
  - gsta assays
---
  * Sean Moody's quail data analysis questions:
      * He has measurements from pools of 2 birds (experimental unit?), took three measurements from each pool, and repeated the whole experiment 3 times.
      * I think because a pool of birds is the experimental unit, the three measurements in each experiment are all just replicated measurements that should be averaged into a single value for each pool. That is assuming that his actual question is Are there differences between the 2 varieties of quail and mouse.
      * The fact that he repeated the experiment with replicates each time suggests he also have some question about how consistent the assay is. We can look at that by doing some exploratory analysis BEFORE averaging things to see where the variation in his process lies... between pools, between replicates or between experiments and how that variation compares to the variation between types. It won't be a valid analysis for his actual question about the quail varieties but it will provide useful info about his process that he can use in the future to decide whether he really needs as many replicates or experiments.
  * Deepika Gaddam's turkey data analysis questions:
      * The dataset is very similar to the other turkey analyses we have done (Wild and Domesticated, AFB treated and Control) with a couple exceptions:
          * Each value is actually from 2 combined livers. This makes the experimental unit 2 pooled birds instead of a single bird but it shouldn't affect the analysis.
          * There are no N birds, so we have 2 Wild varieties and only 1 Domesticated. That isn't an issue for the analysis by Variety but it means the data is not balanced in the Type analysis. How does this affect things? It means it makes a difference what order we put the independent variables in the model and whether we use weighted or unweighted means. I ran it 3 different ways (both orders of variables and with weighted means) and only accepted conclusions supported by all three.
