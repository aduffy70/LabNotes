---
title:  Bisulfite sequencing preparation
date:  2016-11-11
layout: post
categories:
  - gsta methylation
---
# Basic Process:

  1. Quantify and analyze genomic DNA
  2. Bisulfite treat genomic DNA
  3. Quantify and analyze bisulfite treated DNA
  4. Amplify bisulfite DNA using bisulfite primer pairs
  5. Analyze, purify, and quantify bisulfite PCR products
  6. Amplify genomic DNA using normal primer pairs
  7. Analyze, purify, and quantify normal PCR products
  8. Sequence bisulfite PCR products using bisulfite sequencing primer pairs
  9. Sequence normal PCR products using normal sequencing primer pairs
  10. Compare bisulfite and normal sequences.

Zymo EZ DNA Methylation-Gold Kit [Protocol][1]

  * Each reaction needs 20uL DNA template volume containing 200 to 500ng DNA = 10 to 25ng/uL. So our normal 25ng/uL template dilutions are perfect.
  * Only prep as much CT conversion reagent as needed immediately. It is only good for 1 month in the -20 freezer once disolved. Each tube does 10 treatments. We have a kit for 50 total.

Testing the methylation kit and amplification w/bisulfite primers:

  * Start with one Wild and Domestic sample
  * Run each on a temperature gradient to optimize PCR profile
  * The bisulfite kit yields 10uL bisulfite-treated template, which is only enough for 5 PCR reactions. We need 8 for a full temperature gradient so bisulfite treat 2 replicates of each sample and combine them to get 20uL bisulfite-treated template.
  * GC enhancer? No, not needed:

| Raft | GC percent |
| ---- | ---------- |
| Raft A | 31.1 |
| Raft B | 20.6 |
| Raft C | 28.9 |
| Raft D | 23.3 |

  * Hot-start polymerase--our AmpliTaq Gold 360 is a hot-start polymerase
  * All our amplicons are ~500bp so we won't use any of the modified bisulfite temperature profiles for larger fragments (since they also increase the chance of incomplete conversion)

[1]: https://drive.google.com/drive/folders/0B0DnkQIRAeIISHZ6My1rSFBSWEk
