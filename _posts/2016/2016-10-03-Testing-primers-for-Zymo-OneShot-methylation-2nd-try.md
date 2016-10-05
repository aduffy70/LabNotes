---
title:  Testing primers for Zymo OneShot methylation-2nd try
date:  2016-10-03
layout: post
categories:
  - gsta methylation
---

We designed a second set of primers to amplify the GSTA4 promoter in two pieces for the Zymo OneShot methylation kit. We made longer primers, with higher Tms to avoid the non-specific binding we were getting and moved out further on either side of the CpG island to avoid the sequence that is similar to sequence on chromosome 1.

Trying all combinations of the new forward primers with the old and new reverse primers. Some of these should make very small, not-useful fragments, but since there is some disagreement between the BAC and turkey 5.0 sequences in this region, I want to see which combinations work.

  * PCR0231:
    * Trying all combinations of the new forward primers with the old and new reverse primers. Some of these should make very small, not-useful fragments, but since there is some disagreement between the BAC and turkey 5.0 sequences in this region, I want to see which combinations work.
    * Running at 54C annealing temperature, just below the new primer with the lowest Tm (by IDT's calculations--Primer3 says they are all ~4C higher.)
    * 3-F to 1-R: expected length ~490bp
    * 3-F to 2-R: expected length ~910bp
    * 3-F to 3-R: expected length ~450bp
    * 3-F to 4-R: expected length ~925bp
    * 4-F to 1-R: expected length ~120bp
    * 4-F to 2-R: expected length ~525bp
    * 4-F to 3-R: expected length ~80bp
    * 4-F to 4-R: expected length ~540bp
  * PCR0231 results:
    * Bands in the first half of the promoter worked and are the correct length.
    * Bands in the second half of the promoter (the part that might not exist if Turkey5.0 is correct) failed to amplify or gave multiple bands of the wrong length.
    * Are these failing because this section of sequence doesn't really exist or is it a GC-content problem? That second half of the promoter has ~75% GC content. Try GC enhancer.
  * PCR0232:
    * Adding GC Enhancer that comes with the Amplitaq Gold kit and trying all combinations that should amplify the second half of the promoter (the part that doesn't exist as a single piece if Turkey5.0 is correct). Used the maximum amount recommended for very high GC content regions (20% of the PCR volume)
  * PCR0232 results:
    * Almost all reactions worked--even most using the old primers. Clean, single bands. So it was a GC-content problem, not a problem with the BAC vs Turkey5.0 rearrangements. I can continue to trust the BAC!
    * Our new primers gave slightly brighter bands than the older set.
    * The Zymo kit should be designed to work in high GC-content sequence (it is made for amplifying CpG islands) but if we run into problems in our initial tests we can add GC Enhancer.
  * PCR0233:
    * Now that we have primers that we know work, let's make sure ALL of the Domestic and Wild turkey DNA samples are good.
    * Using our new 3-F to 4-R primers for the test.
  * PCR0233 results:
    * All 4 of the Domestic Control templates failed. Everything else looks beautiful.
    * Let's rule out operator error... the most likely possibility is I added those 4 templates to reactions 5-8 instead of 13-16 since they were side by side in strip tubes. Run those 8 reactions again."							
  * PCR0234:
    * Rerun the EW control and Domestic control templates using the same primers as before (3-F to 4-R). 
