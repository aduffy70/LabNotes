---
title: Analyzing turkey Fluidigm data
date: 2015-02-25T15:06:06+00:00
layout: post
categories:
  - gsta expression
---
  * Ran fluidigm reformatting scripts on "average Nicholas" normalized data for Deepika Gaddam. I have a better understanding of the fluidigm data after our discussion:
      * Values are the inverse of what I was thinking. A high value does not represent higher expression - it means it took longer (more PCR cycles) for expression to be detected so it is lower expression.
      * ct values are the value of a gene of interest minus the value of the housekeeping gene (in the same bird).
      * Fold change values are the difference in ct value of one bird versus some reference (in the different analyses we've used the average of the control birds of the same variety, the average of one of the domestic varieties, or the value of a single bird from one of the domestic varieties
      * ANOVA based on fold changes is probably not appropriate since the group's values are now based on another group so they aren't all independent anymore.
      * ANOVA based on ct values makes more sense, and our apparent result that there aren't significant interactions between treatment and variety or type fits with what we suspect: mRNAs are present in wild and domestic birds, but they aren't being translated to functional proteins in the domestic birds.
  * Ran ANOVAs removing outliers. To find outliers, I ran the ANOVA, looked at the Variety boxplots and removed anything labeled as outlier, then reran and checked for new outliers, repeating til none were left. Then I looked at samples that had more than one outlier deleted to see if the remaining values were within the range of the rest of the samples in their Variety\*Treatment and if not, completely removed the sample. (I first tried removing all outliers marked in the Type and Treatment boxplots as well, but that resulted in deleting ALL measurements from some Variety\*Treatments!)
