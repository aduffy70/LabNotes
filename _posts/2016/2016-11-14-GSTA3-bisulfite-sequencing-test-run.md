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

# 3) Analyze and quantify bisulfite converted DNA

| Sample | ng/uL | 260/280 | 260/230 |
| ------ | ----- | ------- | ------- |
| EW1-bis 2016-11-15 | 20.2 | 2.10 | 1.10 |
| N1-bis 2016-11-15 | 17.0 | 2.00 | 2.96 |

  * Each of these samples represents 40uL of starting template processed down to 20uL of bisulfite converted product. Does this mean our yield was 50% or can we even compare to the before concentrations since it was measuring double-stranded DNA using the DNA nanodrop settings and these are single-stranded DNA using the RNA nanodrop settings?
  * The yields are high enough to use these as PCR templates.

# 4) Amplify bisulfite DNA using bisulfite primer pairs

PCR0240:
  * Testing GSTA3 promoter bisulfite primers
    * Running ReefA, C, and D primers at 55C annealing temp, and ReefB primers at 52C annealing temp (used 2 thermalcyclers)
    * Hotstart polymerase per Zymo recommendation--AmpliTaq Gold 360
    * Using primer concentration at the lower end of the recommended scale to reduce secondary products per AmpliTaq Gold 360 protocol.
    * 40 cycles per Zymo recommendation
    * Other PCR concentrations per AmpliTaq recommendations

PCR0240 results:


# 5) Analyze, purify, and quantify bisulfite PCR products

| PCR No. | Sample | ng/uL | 260/280 | 260/230 |
| ------- | ------ | ----- | ------- | ------- |
| 1 | EW1 ReefA |  |  |  |
| 2 | N1 ReefA |  |  |  |
| 3 | EW1 ReefC |  |  |  |
| 4 | N1 ReefC |  |  |  |
| 5 | EW1 ReefD |  |  |  |
| 6 | N1 ReefD |  |  |  |
| 9 | EW1 ReefB |  |  |  |
| 10 | N1 ReefB |  |  |  |

# 6) Amplify genomic DNA using normal primer pairs

PCR0241:
  * Amplifying the four GSTA3 promoter CpG reefs (in three sections) so we have the non-sulfite converted sequence.
  * Expected amplicon sizes:
    * A: 640bp
    * BC: 1030bp
    * CD: 1100bp

PCR0241 results:

# 7) Analyze, purify, and quantify normal PCR products

# 8) Sequence bisulfite PCR products using bisulfite sequencing primer pairs

# 9) Sequence normal PCR products using normal sequencing primer pairs

# 10) Compare bisulfite and normal sequences.
