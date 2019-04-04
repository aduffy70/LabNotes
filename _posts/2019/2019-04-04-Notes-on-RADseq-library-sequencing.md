---
title:  Notes on RADseq library sequencing
date:  2019-04-04
layout: post
categories:
  - sphagnum other
---
We use [DUGSIM][1] to submit sequencing orders to the Duke Center for Genomic and Computational Biology.

We have been using Illumina NextSeq 500, Mid output, 75bp PE but requesting in the comments that they "run at 150bp". This allows us to get ~100bp of good quality read (we just trim off the last 50bp during the quality trimming process) for a lower price than we would get with 100bp reads. On the S. recurvum project we had one plate using a standard 100bp read method and 3 plates done using this method. The quality using this method is noticeably lower (mean estimated error in ipyrad ~0.005 vs 0.007), but adequate--and the cost is half.  

This plot shows the distribution of estimated error (in ipyrad step 4, processing samples as haploid) of the four S. recurvum RADseq plates. Plate 1 was sequenced using standard 100bp reads. Plates 2-4 were sequenced using this strategy. The long tail of the distributions is made up of suspected diploids (and they come from all 4 plates). The quality difference between plates was not so large that it interfered with our ability to detect diploid samples.

![Quality comparison of sequencing strategies on the S. recurvum project][image1]

[1]: https://genome.duke.edu/cores-and-services/sequencing-and-genomic-technologies/next-generation-sequencing
[image1]: {{site.image_path}}Quality_comparison_of_sequencing_strategies.png
