---
title: Venn diagrams for Lung Affymetrix
date: 2014-12-18T14:57:54+00:00
layout: post
categories:
  - pm2.5
---
  * Looked at ways to generate 4-way venn or euler diagrams for Jake Weston's lung affymetrix data. If you want something weighted, there are not many options - even getting a weighted 3-way euler diagram is difficult. The Vennerable package in R will do a 4-way ChowRuskey plot that isn't nearly as nice as an ellipsis euler plot, but depending on how the numbers turn out it may present the data clearly - especially if there are many 0 values. The other option is an unweighted venn, but it won't be as easy to see the sizes of the categories and will be especially confusing if there are many 0 values, since they still have space assigned on the diagram. Other R-packages I tried include VennDiagram, and venneuler. I also tried several java-based tools at http://www.eulerdiagrams.com/ but they either don't work for 4-category diagrams or they produce lower quality versions of the same plots I can get in R with Vennerable.
