---
title:  Testing primers for Zymo OneShot methylation
date:  2016-09-27
layout: post
categories:
  - gsta methylation
---

We designed 2 sets of primers (2016-06-15) to amplify the GSTA4 promoter region in two pieces, intending to use them with the Zymo Oneshot methylation kit. It is designed for ~350bp sections.

Testing those primers:

  * PCR0227:
    * Trying to amplify both fragments using DNA extracted from liver tissue EW1, EW9, N1, and N11.
  * PCR0227 results:
    * All the samples amplified but with lots of non-specific binding.
    * The brightest band for G4_Promoter1 is 700bp. Expected = 398bp
    * The 2 brightest bands for G4_Promoter2 are a bit less and a bit greater than 400. Expected=425bp
    * **Maybe try higher annealing temp and hotstart to reduce non-specific binding (add template at 95C since Taq volume is so small), shorter extension and annealing time to favor shorter amplicons, and consider GC enhancer since the fragment we want is GC rich (though will I be able to use GC enhancer with the Zymo kit?)**
  * PCR0229:
    * Trying to amplify the entire 800bp region as a single fragment (suspecting that the 1R/2F primers are in repetitive DNA so we might have better luck spanning from 1F to 2R)
  * PCR0229 results:
    * Multiple bands but the brighest is about 400bp.
    * That means these bands are the length we expected for 1-F to 1-R and the bands for 1-F to 1-R are the 800bp length we expected here. Are the 1-R and 2-R primers mislabeled?
      * The stock labels have the correct name with the correct printed sequence based on how they were designed, so I didn't switch things when I ordered them and it is unlikely IDT put the wrong label on the wrong tube. It's possible but more likely I made a mistake when preparing and labeling my dilutions.
      * Sean and I made new dilutions from the stocks, double checking each other at every step. I threw away the old dilutions. We can run a new PCR with these new dilutions and see if we get different results
  * PCR0230:
    * Using new primer dilutions and running:
      * 1-F to 1-R: expected length ~400bp
      * 1-F to 2-R: expected length ~800bp
      * 2-F to 2-R: expected length ~400bp
      * 2-F to 1-R: shouldn't amplify. Might have lots of primer dimers since these 2 primers are exactly complementary. Though at low annealing temps they may amplify unexpected fragments.
