---
title:  GSTA4 promoter bisulfite sequencing
date:  2016-12-01
layout: post
categories:
  - gsta methylation
---
The Zymo OneStep kit worked on the top half of the GSTA4 promoter but not the bottom half. We need to bisulfite sequence the bottom half.
  * We have a set of primers we designed to cover 51 CpGs, 11 of which overlap with the top half. Two of those 11 are the type evaluated by the Zymo kit so we can make some comparison between the two methods.
  * Using the same EW1 and N1 bisulfite converted DNA from our GSTA3 bisulfite sequencing.

# Amplify bisulfite DNA using bisulfite primer pairs

Primers:
  * G4bsbotF
  * G4bsbotR

PCR0249:
  * Trying to amplify the GSTA4 promoter bottom half with bisulfite sequencing primers.
  * Running an annealing temperature gradient to optimize.

PCR0249 results:
  * Hotter temperatures (57C) worked better but all temps have strong nonspecific binding at ~200bp. Try even hotter temps and longer extension times to try to improve amplification of the longer desired band.

PCR0253:
  * Trying to amplify the GSTA4 promoter bottom section with bisulfite sequencing primers using higher annealing temperatures and longer extension times than PCR0249 to try to reduce non-specific binding.
  * If this doesn't work, try GC Enhancer?

PCR0253 results:
  * Only worked at 57C. At higher annealing temps we lose the target band and still have non-specific binding.

PCR0254:
  * Trying at 57C with GC Enhancer at 20% and 10% v-v to minimize non-specific binding.

PCR0254 results:
  * GC Enhancer reduced the non-specific binding but we lost the target band. Perhaps the optimal temperature with GC Enhancer in the reaction is different?

# Analyze, purify, and quantify bisulfite PCR products

# Amplify genomic DNA using normal primer pairs

Primers:
  * Using the same primers we used with the Zymo kit.
  * __Do we have amplified product already from the tests we did to see if the primers worked?__ We do. We can use products 232-11-EW1 and 232-12-N1 (which include the top and bottom sections) and sequence them with G4_promoter4-R and G4_promoter4-F (to get just the bottom section).

# Analyze, purify, and quantify normal PCR products

Ready for sequencing:
  * 232-11-EW1
  * 232-12-N1

# Sequence bisulfite PCR products

# Sequence normal PCR products

# Compare bisulfite and normal sequences
