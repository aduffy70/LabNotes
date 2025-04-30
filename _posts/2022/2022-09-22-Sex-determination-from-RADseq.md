---
title:  Sex determination from RADseq
date:  2022-09-22
layout: post
categories:
  - sphagnum other
  - ideas
---
# Background info

LG20 / Chromosome 20 = V chromosome = Male
Scaffold9707 = U chromosome = Female

LG20 was in the S. angustifolium reference genome. Adam Healey assembled Scaffold9707 from resequenced female S. angustifolium samples.

# The basic idea

Ideally, the % locus coverage in a sample should be about the same in all the chromosomes that are present in that sample and there should no locus coverage in chromosomes that are not present in that sample. So... 
  * In male samples, the percent of locus coverage in Chr20/V should be about the same as the autosomes (1-19), and there should be no locus coverage in Scaff9707/U.
  * In male samples, the percent of locus coverage in Scaff9707/U should be about the same as the autosomes (1-19), and there should be no locus coverage in Chr20.

If I map samples to the autosomes, Chr20/V and Scaff9707/U it should be obvious which sex a sample is.

# The idea in practice

Chr20/V and Scaffold9707/U actually share a lot of sequence, so every sample has reads that map to both. But males DO have approximately the same locus coverage in Chr20/V as in the autosomes, whereas females have about 50% the locus coverage in Chr20/V as in the chromosomes. The picture isn't as clear when using Scaffold9707--I think because it isn't as well assembled or as complete.

Also, samples vary drastically in their level of missing data overall. In samples with high coverage overall, the range of coverages in individual autosomes is very small. In samples with low coverage overall, the range of coverages in individual autosomes can vary drastically making it difficult to determine whether coverage in Chr20/V is similar or lower.

I can somewhat normalize samples by expressing their percent coverage at each chromosome as a percentage of the average autosomal percent coverage. Then plot the samples in order of increasing average percent autosomal coverage and the plots are easier to interpret for all but the lowest coverage samples.

Species differ in how well they map to the reference genomes too, so it helps to plot samples of each species separately.

