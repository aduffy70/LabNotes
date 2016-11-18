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

  * 20uL of 25ng/uL (500ng total) in each reaction.
  * Using recommended thermal cycler settings (cyclename: bis_cnvrt):
    * 98C for 10min
    * 64C for 2.5 hours
    * 4C hold
  * Clean according to Zymo protocol. Combine the multiple replicates for each sample at the elution step (eluting multiple columns into the same 1.5mL tube)
  * Storing at -20.

# 3) Analyze and quantify bisulfite converted DNA

| Sample | ng/uL | 260/280 | 260/230 | Volume |
| ------ | ----- | ------- | ------- | -------- |
| EW1-bis 2016-11-15 | 20.2 | 2.10 | 1.10 | 20uL (2 eluted together) |
| N1-bis 2016-11-15 | 17.0 | 2.00 | 2.96 | 20uL (2 eluted together) |
| EW1-bis 2016-11-16 | 21.6 | 3.89 | 0.67 | 40uL (4 eluted together) |
| EW1-bis 2016-11-18 |  |  |  | 10uL |
| N1-bis 2016-11-18 |  |  |  | 10uL |

  * The kit starts with 20ng of 25ng/uL DNA and yields 10uL of ~20ng/uL DNA. Does this mean our yield was 50% or can we even compare to the before concentrations since it was measuring double-stranded DNA using the DNA nanodrop settings and these are single-stranded DNA using the RNA nanodrop settings? In any case, the yields are consistent.
  * The yields are high enough to use these as PCR templates.

# 4) Amplify bisulfite DNA using bisulfite primer pairs

PCR0240:
  * Testing GSTA3 promoter bisulfite primers
    * Running ReefA, C, and D primers at 55C annealing temp, and ReefB primers at 52C annealing temp (used 2 thermalcyclers)
    * Hotstart polymerase per Zymo recommendation--AmpliTaq Gold 360
    * Using primer concentration at the lower end of the recommended scale to reduce secondary products per AmpliTaq Gold 360 protocol.
    * 40 cycles per Zymo recommendation
    * Other PCR concentrations fit AmpliTaq recommendations

PCR0240 results:
  * All primer pairs run at 55C have weak amplification and a bit of a smear of short bands. They might be good enough to sequence, but let's try to optimize them further. We will pick just one sample and primer set for the optimization tests since they all appear to be behaving similarly.
  * The ReefB primer pair run at 52C failed. Try cooler temp?

PCR0242:
  * Optimizations tests using just the ReefA primers and EW1-bis. Trying:
    * longer 95C activation time
    * temperatures +/- 1.5 and 3.0C from the 55C of PCR0240
    * with/without GC enhancer
  * Bisulfite converted more (40uL) of EW1 to use for these optimization tests (EW1-bis 2016-11-16).

PCR0242 results:
  * Surprisingly, hotter annealing temps give better yields than cooler.
  * GC enhancer might reduce yield slightly but it makes the annealing temperature a bit less critical.
  * Let's move forward using 57C annealing temperature and GC enhancer.

PCR0243:
  * ReefB optimization test--on PCR0240 it failed completely at 52C without GC enhancer, so let's try a temperature gradient with GC enhancer.

PCR0243 results:

PCR0244:
  * Rerunning GSTA3 ReefA, C and D with optimized temperature and GC enhancer.
  * We already have ReefA for EW1 from the optimization tests on PCR0242, so I'm not rerunning that here (thus, only 5 instead of 6 reactions).
  * We don't quite have enough of the bisulfite converted DNA for these reactions and all we still need to run, so I converted more (EW1-bis 2016-11-18 & N1-bis 2016-11-18). To avoid wasting what is left, and since our bisulfite conversions have similar yields and qualities, I pooled what was left of the 2016-11-15 & 16 conversions into these new ones.

PCR0244 results:

# 5) Analyze, purify, and quantify bisulfite PCR products

# 6) Amplify genomic DNA using normal primer pairs

PCR0241:
  * Amplifying the four GSTA3 promoter CpG reefs (in three sections) so we have the non-sulfite converted sequence.
  * Expected amplicon sizes:
    * A: 640bp
    * BC: 1030bp
    * CD: 1100bp

PCR0241 results:
  * Everything amplified with bright expected bands but weaker unexpected bands. These are the brightest bands I've ever had using AmpliTaq--due to the extra activation time at 95C?
  * The shorter unexpected bands are all the same size proportionally to the expected band in each lane, which seems unlikely if this is nonspecific binding. Every primer pair would have to be amplifying two smaller products that happen to be 1/5 and 1/7 of the expected product for that primer pair. It seems more likely that these are incompletely extended products--in which case they shouldn't cause problems with sequencing.
  * The slightly longer band in the ReefA primers could be single-stranded products that formed secondary structures, which should also not cause sequencing problems.
  * Let's try purifying and sequencing. If I am right, I'll get clean sequences. If I'm wrong the entire sequence of 1 & 2 and the first 250bp of 3-6 will have higher than normal background signal.

# 7) Analyze, purify, and quantify normal PCR products

Beautiful 260/280 & 260/230 scores and sufficient quantity for sequencing (30-50ng/uL). Let's send them off to Retrogen.

# 8) Sequence bisulfite PCR products using bisulfite sequencing primer pairs

# 9) Sequence normal PCR products using normal sequencing primer pairs

# 10) Compare bisulfite and normal sequences.
