---
title:  Rethinking methylation analysis
date:  2016-10-13
layout: post
categories:

  - gsta methylation
---
I hoped to use the Zymo OneShot qMethyl kit to determine if there were differences between methylation in GSTA promoters of Wild and Domestic turkeys and with/without AFB treatment. Then we would only put the effort into bisulfite sequencing regions where there are differences.

# Problems:

## GSTA3:
  * No concentrated CpG island where the kit can be used
  * Few, widely spaced CpGs of the types the kit can detect

## GSTA4:
  * Not really the gene we want, but it has the first CpG island upstream of GSTA3 so perhaps they share a promoter? Guessing- No evidence for that.
  * The first half of the CpG island has low methylation (1.5%) and no difference between Wild and Domestic turkeys
  * The second half (most of the CpGs) can't be amplified with the kit.
    * Very high GC content
    * Near exact match to DNA on Chromosome 1

## Nrf2:
  * The sequence upstream of the transcription start site is unknown (NNNNNs) so we don't know if there is a CpG island and can't design primers for the kit.

# How to proceed?

## GSTA3
  * There are two 1500bp regions upstream of the transcription start site with CpGs (weak islands?)
  * The Zymo kit won't work but we could bisulfite sequence these two regions. For each region we need:
    * Bisulfite conversion kit
    * primers to amplify non-converted DNA
    * primers to amplify and re-amplify converted DNA
    * Sequence the non-converted DNA for each of our 16 turkey samples
    * Sequence 5-10? clones of the converted DNA for each of our turkey samples
    *
