---
title: Lung affymentrix data
date: 2015-02-11T14:56:51+00:00
layout: post
categories:
  - pm2.5
---
  * Thinking more about the apparent issues with the controls on the Lung Affymetrix data:
      * Perhaps it doesn't matter that there is a lot of spread between replicates.
      * The examples I've looked at online are comparisons of different tissues/organs so they would be expected to have greater differences between the groups.
      * Our groups are identical tissues, so there is likely less variation between groups, so a greater proportion of the variation is within groups.
      * I think the solution is to run the entire analysis multiple times and compare the results we get using all controls, leaving out each control one at a time, and using each control separately.
          * If we get large overlap in the up and down regulated genes with each of these, then it doesn't matter.
          * If it does make a big difference we can compare the overlap between analyses to try to determine which control gives the most divergent results.
