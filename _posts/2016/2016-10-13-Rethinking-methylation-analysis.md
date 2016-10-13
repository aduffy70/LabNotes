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
  * Not really the gene we want, but it has the first clear CpG island upstream of GSTA3 so perhaps they share a promoter? Guessing- No evidence for that.
  * The first half of the CpG island has low methylation (1.5%) and no difference between Wild and Domestic turkeys
  * The second half (most of the CpGs) can't be amplified with the kit.
    * Very high GC content
    * Near exact match to sequence on Chromosome 1 & similar to sequence on other chromosomes. Designing primers for smaller fragments puts both primers in duplicated sequence so we'll get non-specific amplification.
    * Our fragment is larger than recommended for the kit (540 vs 350bp)- short non-specific bands that are weak when we amplify with normal PCR get preferentially amplified by the kit.

## Nrf2:
  * Located on Chromosome 7- the sequence upstream of the transcription start site (TSS) is unknown (NNNNNs in Turkey5.0 assembly) so we don't know if there is a CpG island and can't design primers for the kit.

# How to proceed?

## GSTA3
  * If we are going to go to the time and expense of bisulfite sequencing, let's put it into GSTA3.
  * There are two ~1500bp regions upstream of the TSS that include most of the ~60 CpGs between GSTA4 and GSTA3 (weak islands?)
  * The Zymo kit won't work but we could bisulfite sequence these two regions. For each region we need to:
    * Bisulfite convert the DNA (kit? Zymo, Qiagen?)
    * Design primers to amplify non-converted DNA
    * Design primers to amplify and partially nested primers to re-amplify converted DNA (PCR purification kit?)
    * Sequence the non-converted DNA for each of our 16 turkey samples
    * Sequence 5-10? clones of the converted DNA for each of our turkey samples (cloning kit? Sequence at CIB or elsewhere?)
    * Align converted and non-converted sequences, calculate % methylation at each site, and test for differences in % methylation between types-treatments.

## GSTA4
  * Stop. Return our focus to GSTA3.

## Nrf2
  * Design primers to amplify and sequence unknown section upstream of TSS.
  * Sequence the unknown section - will likely be challenging due to high GC content or other issues that prevented it from being included in the Turkey5 assembly.
  * Based on the sequence and whether there is a CpG island, determine whether we can use the Zymo kit or bisulfite sequencing.
