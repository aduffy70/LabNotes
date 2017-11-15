---
title: 'Methylation sequencing - primer design explanation'
date: 2014-12-08T14:16:49+00:00
layout: post
categories:
  - gsta methylation
---
I couldn't understand why forward primers for methylation sequencing all have no Cs and reverse primers all have no Gs, when it seems like you should avoid Gs in both primers since they will bind to a sequence that has had some or all Cs changed to Us. But it actually makes sense for the following reasons:

  * When we bisulfite treat DNA the 2 strands are no longer complementary so we have to choose on which strand we want to analyze methylation. So we have a strand-of-interest (SOI) and an other-strand (OS).
  * In the first round of PCR we use the SOI as template with the reverse primer. So the reverse primer has no Gs since it is binding to a template that has had some or all Cs changed to Us. The resulting new strand is the SOI-complement.
  * There is no primer that binds to the OS so it does not get used as a template and just continues to exist in low levels as single stranded DNA throughout PCR (and even in the final product), won't get sequenced (since those primers won't bind to it either) and we will never know anything about methylation on that strand.
  * In subsequent rounds of PCR we use both the SOI and the SOI-complement as templates. The SOI still uses the reverse primer with no Gs, but since the forward primer will have no Cs since it needs to bind to the SOI-complement.
  * So, the reverse primer sequence is designed to bind to the SOI after the Cs in the SOI are replaced with Ts
  * The forward primer sequence matches (doesn't bind to it, it MATCHES) the SOI after the Cs in the SOI are replaced with Ts.
  * I wrote out an example demonstrating this:

    ![ MethylationSequencingExplanation ]( {{site.image_path}}wp-content/uploads/2014/12/MethylationSequencingExplanation.jpg )
