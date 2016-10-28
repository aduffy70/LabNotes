---
title:  Testing NRF2 primers for Zymo OneStep methylation
date:  2016-10-27
layout: post
categories:
  - gsta methylation
---
Primers are here. Let's run PCR with similar settings to Zymo kit to test for clean amplification.

PCR0238
  * Test NRF2 primers to make sure we can amplify clean bands for all 3 segments before trying Zymo qMethyl kit.
  * Using 10% v-v GC enhancer since we know this is GC rich. This is "half-strength" since when we ran the GSTA4 primers we got better results than the Zymo kit with 20% v-v GC Enhancer but little or no amplification with no GC Enhancer. Apparently the Zymo kit contains something to partially enhance GC performance--I'm trying to simulate those conditions here.
  * Using one Wild and one Domestic to ensure primers work in both.
  * Annealing temp of 54 since that is what the Zymo control primers require. Our primer Tms range from 55.6 to 59.0
  * Not mixing and matching forward and reverse primers since we aren't going to try for larger fragments if the small ones don't work--the Zymo kit seems to strongly select against amplification of fragments \>350bp.

PCR0238 results:
  * The bottom section primers work
  * Top and middle sections only have faint unexpected bands, all longer than the expected 250-350bp length (500 to 3000bp!)
    * Is it a GC content problem? Top=78% GC, Middle=80% GC, Bottom=66% GC, so there is a pretty big difference between the one that worked and the two that didn't.
    * Maybe more GC enhancer or a longer denaturing step? If the correct band amplifies at all with the Zymo kit the long bands shouldn't be an issue since it selects strongly for short bands, but on this reaction I see no evidence of the correct size bands.
