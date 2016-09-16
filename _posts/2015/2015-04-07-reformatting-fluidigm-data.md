---
title: Reformatting Fluidigm data
date: 2015-04-07T15:00:13+00:00
layout: post
categories:
  - gsta mirna
---
  * Ran scripts (after modifying them) to reformat the new Fluidigm data for Deepika Gaddam:
      * There are more genes, and for some there are 8 instead of 4 replicates. Deepika wants to keep the replicates separate this time so we can look at variation between replicates.
      * I generated the gene tables both ways - pooled and unpooled so she can see what the variation is, but we can't do the ANOVA using unpooled data. Each of those replicate pcr reactions is measuring the gene expression from the same bird, so they aren't independent. The birds are the experimental units so the multiple measurements have to be averaged. Otherwise the ANOVA would treat it as if we had 8 times as many birds as we really did (or 4 depending on the gene) and we are more likely to find significance that isn't really there. We still get an advantage from the fact that we have more replicates- we can be more confident that the pooled averaged value reflects the actual gene expression of that bird.
      * I think we have a problem with the overall experimental design of this experiment. If I understand correctly, there were separate pens of bird for each variety and treatment, so all the birds of one variety and treatment were in the same pen together. That means our experimental unit was the pen - not the bird, they aren't independent - so the measurements of all birds in the pen should be averaged, leaving us with just one value for each variety*treatment. We can't separate pen effects from treatment effects.
