---
title: GBS discussion with Hardeep Rai
date: 2011-12-08T12:55:13+00:00
layout: post
categories:
  - t. intricatum gbs
---
  * Genotyping By Sequencing (GBS) run should happen this week and we will likely have the data during or after winter break.  When it arrives Hardeep, Bryce (lastname?) and I need to sit down and plan out how to analyze the data.
  * Look up Stacks software from the Cresko lab.
  * Basic process:
      * With GBS data we are not forming contigs, we are forming stacks.
      * We first sort by barcodes, filtering out anything that can't be assigned with high certainty.
      * Then within a barcode, sort sequences into stacks of the same locus.  This will be complicated by sequencing errors, multiple alleles (might be a big problem if Trichomanes intricatum is polyploid, or not a problem at all if it is haploid), and differences between multiple individuals in my samples.
      * Then compare stacks from individuals to try to find stacks that represent the same locus.  Again, this will be complicated by drastically different alleles.
      * We only want to focus on stacks that are present in all samples and look for SNPs between them.  This will probably drastically reduce the size of the dataset, but even if we only have thousands of SNPs that is still orders of magnitude larger than we could ever hope to get with microsatellites!
