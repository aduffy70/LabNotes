---
title:  Crepidomanes ipyrad analysis notes
date:  2017-08-11
layout: post
categories:
  - t. intricatum gbs
---
Things to show/explain:
  * Why I chose the 0.85 clustering threshold
  * Why I chose the diploid, rather than haploid setting
  * Why I left the maximum cluster depth setting alone
  * Pair-wise shared locus counts

Analyses to try:
  * Run Structure allowing 3 groups to see if suspected species assignments hold.
  * Run with all samples and see which gametophytes group with the known sporophytes to try to confirm species assignments.
  * Run with just samples that have the best support for actually being Crepidomanes.
  * Use s27 and s18 ustr data for structure (since structure assumes unlinked or loosely linked loci and multiple snps in a 100bp locus are probably tightly linked)
    * 123 variable loci from 165 loci with coverage in 27 samples (50% of 54)
    * 1176 variable loci from 1911 loci with coverage in 18 samples (33% of 54)
  * How consistent is the structure output? How different are multiple runs and what burnin/rep counts are necessary?
  * Running structure on fiddlehead

Starting with raw .str output from ipyrad:
  * Remove extra columns at start.
    * Open .str file in atom. Regex search for ```     \t\t\t\t``` and replace with an empty string.
  * Run through analyze_GBS_str_file.R, following instructions in the comments.
