---
title:  Genbank Bankit submissions for Subsecunda Biogeography data
date:  2021-12-03
layout: post
categories:
  - sphagnum subsecunda biogeography
---
Submitting alignments of 6 loci through Bankit for the North American Subsecunda Biogeography manuscript:

  * LL
  * LS
  * RAPD-A
  * RAPD-B
  * RAPD-F
  * trn-G

## Process

### LL

  * Fixed line endings.
  * Swapped '?' at the start and end of reads with '-'.
  * Used AY361089.1 as an example to get the annotations.
  * After submitting and being rejected:
    * Replaced 2 '-' with 'N' to prevent pre-mature stop codons:
      * P7_pylaesii at ungapped position 38
      * P10_cyclophyllum at ungapped position 459
    * Manually adjusted start codons for everything not starting at position 1. Bankit messes them up!

### LS

  * Fixed line endings.
  * Swapped '?' at the start and end of reads with '-'.
  * Used AY361328.1 as an example to get the annotations.
  * After submitting and being rejected:
    * Replaced 2 '-' with 'N' to prevent frame-shift gibberish:
      * P1_pylaesii at ungapped bases 21 and 41
    * Manually adjusted start codons for everything not starting at position 1. Bankit messes them up!

### Others

RAPD-A, B, F, and trn-G were a bit simpler because they were not annotated.

## Results

Genbank assessions are in the manuscript voucher table.
