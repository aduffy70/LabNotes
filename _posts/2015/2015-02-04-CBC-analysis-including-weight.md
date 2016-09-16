---
title: CBC analysis- including weight
date: 2015-02-04T23:59:33+00:00
layout: post
categories:
  - gsta cbc weight
---
  * Added turkey weight into CBC-LiverProfile analyses and reran 2-way anovas. For the Type and Variety analyses and the pairwise comparisons I rewrote the code to generate plots so it only generates the interaction plot if the difference in responses to the treatment (the interaction effect in the model) is statistically significant.
      * Some of the within-Type comparisons have significant differences, which we would hope not to see if we want to use just one Variety to represent each Type.
      * The between type comparisons vary in the number of measurements with significant differences and in which measurements have significant differences, which also isn't great if we want to just focus on a single Variety for each Type.
      * The Rio Grande vs Nicholas comparison has the greatest number of measurements with significant differences (8/22), though if we consider more highly significant differences (p<0.01 rather than p<0.05), East vs BB White has the most (4/22). Since Roger Coulombe says getting Nicholas birds can be a problem, East and BB White may be the best choices going forward. But overall, the data suggest that including more representatives Varieties of each Type would be better.
