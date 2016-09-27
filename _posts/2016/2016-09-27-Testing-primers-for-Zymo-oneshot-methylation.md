---
title:  Testing primers for Zymo oneshot methylation
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
    * 
