---
title:  Inferring ploidy for Sphagnum genus-wide samples
date:  2022-02-22
layout: post
categories:
  - sphagnum genus-wide
---
## Problem

We need to know the ploidy of each sample in the _Sphagnum_ genus-wide analysis in order to know how to call RADseq genotypes, but ploidy information is not available for all _Sphagnum_ species and species assignments of some samples are uncertain.

## Process

  1. Combine ploidy information from all available sources and make a best-guess inference of ploidy for each sample. Run ipyrad with the inferred ploidy for each sample and perform downstream analyses.
  1. Run everything through ipyrad as haploid and again as diploid and see how much of an effect the choice of ploidy actually has on downstream inferences.

### Information sources

  * OOTT and Ploidy project spreadsheets (from Jon Shaw) with ploidies for many _Sphagnum_ species.
  * McVay RADseq samples have ploidy determined from microsatellites of the same samples (or same collections?)
  * RADseq error rates (when everything is treated as haploid) for 3 different ipyrad datasets, where I identified loci by mapping reads to the _Sphagnum magellanicum_ genome, the _Sphagnum angustifolium_ genome, or _de novo_. Do I get anything different, or perhaps clearer separation of haploids/diploids if I treat everything as diploid and look at the heterozygosity rates instead? Running dataset to check this now...
  * Behavior and placement of the samples in the different preliminary trees I have generated.
  * Idea: We get fewer ipyrad loci when we treat everything as haploid or everything as diploid compared to when I used my previous best-guesses of ploidy, suggesting that perhaps more loci are found for a sample when it is treated with the correct ploidy. Running datasets to check this now...
