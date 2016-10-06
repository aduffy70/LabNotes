---
title:  Testing Didymoglossum petersii re-extractions
date:  2016-09-27
layout: post
categories:
  - t. intricatum gbs
---

I have the re-extracted DNA (from 2016-04-06) from suspected D. petersii gametophytes, S26 mystery gametophyte and my one D. petersii sporophyte sample.

The sporophyte re-extraction has reasonable concentration (41ng/uL). One D.pet gametophyte extraction failed, but the other has at least some DNA (6ng/uL). The S26 mystery gametophyte has very low DNA (2ng/uL). See if we can get anything to amplify from these three.

  * PCR0221
    * D.pet gametophyte, S26 mystery gametophyte and D.pet sporophyte on rps4-trnS, F1F-F1379R (rbcL), and atpB-rbcL.
  * PCR0221 results:
    * Visualized in the Coulombe Lab so I could crank the exposure way up.
    * rps4-trnS: everything failed but positive control
    * F1F-F1379R: No expected bands. On all but S26 there are bright very short bands (<100bp) - longer than the primer dimers but definitely not the expected length for rbcL. Retry with F26 instead of F1F - I've had positive results on filmies before.
    * atpB-rbcL: Expected bands on D.pet gametophyte, D.pet sporophyte, and positive control. S26 failed. The D.pet sporo seems to have the shorter length fragment (like V.bosch) but the D.pet gamet has the longer fragment (like C. int)? There is also a brighter unexpected 150bp band on the D.pet sporo?

Next steps:

  * PCR0228:
    * Retrying the samples from PCR0221 with F26-F1379R. If we can get an rbcL for D.pet and the mystery gametophyte we can sequence them and the V.bos sporophyte that worked with F26-F1379R and see where they fall on the filmy fern phylogeny.
  * PCR0228 results:
    * Everything failed but the positive control.
  * PCR0235:
    * Run a couple C.int and V.bos samples that have worked with atpB-rbcL in an annealing temperature gradient to optimize the temperature for that reaction.
    * Primer Tm's are 54.6 and 59.7. I've been running at 46. Try annealing temps between 46 and 60.
    * The Wolf Lab BioRad cycler's gradient feature isn't activated, so I set the reactions up in that lab but ran it on the BioRad cycler in the Coulombe Lab.
  * PCR0235 results:
    * For things that amplify well we could use any temperature--and lower temperatures are best, but for things that are going to struggle to amplify we want to be 55-57C.
    * Note- The MassRuler ladder I used is better for visualizing these than the Hyperladder since it has more bands around the length of the bands of interest.
  * ... Then with the optimized settings:
    * try all suspected "C.int to V.bos" samples with atpB-rbcL and see if they have short bands as expected.
    * Try "V.bos to C.int" samples and see if they have long bands as suspected.
    * Perhaps also try a sampling (or all??) of the V.bos and C.int where the collector's species assignment matches the suspected species based on GBS with atpB-rbcL to make sure they have expected band sizes  
