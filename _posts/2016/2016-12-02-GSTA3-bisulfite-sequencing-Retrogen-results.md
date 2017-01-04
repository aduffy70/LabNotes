---
title:  GSTA3 bisulfite sequencing Retrogen results
date:  2016-12-02
layout: post
categories:
  - gsta methylation
---

# Retrogen sequencing order 2016-12-02

I want to know:
  1. For each CpG predicted in the genome, is it a CpG in the non-converted sequence for each sample?
  2. What additional CpGs are in the non-converted sequence for each sample

Process:
  * Use 1 and 2 to generate a master list of all CpG sites for each sample
  * For each CpG site on the master list, is the site a C, T, or Y (both) in the bisulfite converted sequence for each sample?
  * Record sites and methylation status in a table for comparison between samples
  * Identify differentially methylated sites and calculate methylation percentages (methylated sites/total sites) for each sample (how do we incorporate partially methylated sites into the calculation?)

Reef A
  * reference sequences (non-bisulfite):
    * Nothing from the reverse sequences is usable - multiple signal.
    * Forward sequences give clear results for ~400 bases in both samples but then there are multiple signals. Those 400 bases include 6 out of 12 CpGs in this reef.
  * bisulfite sequences:
    * Reverse sequences have multiple signal - unusable

Reef BCD
  * reference forward and reverse sequences have sections with multiple signal but in different locations on each so I can identify CpGs at most sites in one or the other. Where the multiple signal sections are is consistent between EW1 and N1.
  *
