---
title: miRNA data exploration
date: 2015-02-26T14:46:49+00:00
layout: post
categories:
  - gsta mirna
---
  * miRNA data exploration
    * Read the [ miRNA PCR panel assay info Roger Coulombe forwarded ]( http://www.exiqon.com/pick-and-mix?utm_source=PCRInfomail&utm_medium=email&utm_campaign=2015-02 )
      * LNA (Locked Nucleic Acid) PCR [ doi:10.1261/rna.2148705 ]( http://doi.org/10.1261/rna.2148705 ) uses specially modified nucleotides in the primer so you can use shorter than normal primers and still get good amplification.
      * Two-step process where a first (miRNA specific) primer is used to reverse transcribe the miRNA into cDNA and add a priming site for a second primer (which also increases the length into a range suitable for PCR) that is used for Sybergreen RT qPCR..
      * The method can focus on the precursor-miRNA or the mature-miRNA (we are probably only interested in the mature) with enough specificity (2000-fold less detection of the precursor when targeting the mature) that one does not drastically affect measurements of the other.
      * Helpful [ general guidelines for designing and performing mRNA expression experiments with qPCR methods ]( http://www.exiqon.com/ls/Documents/Scientific/miRNA-qPCR-guidelines.pdf ) (ex. Fluidigm)
