---
title:  GSTA3 bisulfite sequencing test run
date:  2016-11-14
layout: post
categories:
  - gsta methylation
---

# 1) Quantify and analyze genomic DNA:

  * EW1 and N1. Made more 25ng/uL dilution from stocks to ensure we'd have the 40uL of each
  * Nanodropped to get a baseline for quantity and quality:

| Sample | ng/uL | 260/280 | 260/230 |
| ------ | ----- | ------- | ------- |
| EW1 | 26.7 | 1.76 | 0.73 |
| N1 | 27.2 | 2.11 | 1.55 |

  * EW1 has never had great scores, but it represents our worst extraction. If it works the others should.

# 2) Bisulfite conversion and cleaning:

  * Two replicates of each sample. 20uL of 25ng/uL (500ng total) in each reaction.
  * Using recommended thermal cycler settings (cyclename: bis_cnvrt):
    * 98C for 10min
    * 64C for 2.5 hours
    * 4C hold
  * Clean according to Zymo protocol. Combine the 2 replicates for each sample after elution (10uL + 10uL for 20uL of each sample)

# 3) Analyze and quantify bisulfite PCR products

| Sample | ng/uL | 260/280 | 260/230 |
| ------ | ----- | ------- | ------- |
| EW1-bis 2016-11-15 |  |  |  |
| N1-bis 2016-11-15 |  |  |  |

# 4) Amplify bisulfite DNA using bisulfite primer pairs

PCR0241:
  * Testing GSTA3 promoter bisulfite primers with an annealing temperature gradient to optimize for each primer pair.
    * Temperatures for each strip tube of 8 reactions:
      * (1) 61.0, 60.3, 58.9, 56.7, 53.6, 51.4, 49.9, 49.0 (8)
    * Hotstart polymerase per Zymo recommendation--AmpliTaq Gold 360
    * Using primer concentration at the lower end of the recommended scale to reduce secondary products per AmpliTaq Gold 360 protocol.
    * 40 cycles per Zymo recommendation
    * Other PCR concentrations per AmpliTaq recommendations

PCR0241 results:


# 5) Analyze, purify, and quantify bisulfite PCR products

# 6) Amplify genomic DNA using normal primer pairs

# 7) Analyze, purify, and quantify normal PCR products

# 8) Sequence bisulfite PCR products using bisulfite sequencing primer pairs

# 9) Sequence normal PCR products using normal sequencing primer pairs

# 10) Compare bisulfite and normal sequences.
