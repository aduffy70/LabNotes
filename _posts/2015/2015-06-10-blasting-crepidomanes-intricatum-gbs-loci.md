---
title: Blasting Crepidomanes intricatum GBS loci
date: 2015-06-10T10:14:23+00:00
layout: post
categories:
  - t. intricatum gbs
---
Blasted the 756 loci with no heterozygosity to make sure they aren't homozygous because they are all haploid bacteria, moss, or fungus

  * online blastn, max target sequences=10, expect threshold=0.001, other settings at default.
  * Format output as text, don't show graphical overview, don't show alignments. This gives a list of just the top 10 hits for each sequence with e-values. It took over an hour to run but it finished - good to know the online blast interface is useful even for relatively large jobs like this.
  * 78 of 756 loci have blast hits in Genbank nr with e<0.0001:
      * Plant nuclear 46
      * Bacteria 8
      * Filmy fern chloroplast 5
      * Other fern chloroplast 5
      * Fungus 2
      * Nematode 2
      * Moss nuclear 2
      * Algae chloroplast 2
      * Fern nuclear 1
      * Fish 1
      * Duck 1
      * Human 1
      * Tapeworm 1
      * Mouse 1
  * This is reassuring. 57 of 78 are expected (plant or fern). Likely contaminants in my sample are low (fungus, nematode, moss, algae, human). But it also shows how unuseful blast is for verifying GBS loci. Only 10% of my loci had hits. And some have hits to random, unlikely things - I strongly doubt that 70% of my samples are contaminated with duck DNA, for example.
  * As a control, I generated a set of 756 random 87bp DNA sequences and blasted them against nr. I don't get ANY sequences with hits, much less hits in plant DNA.
