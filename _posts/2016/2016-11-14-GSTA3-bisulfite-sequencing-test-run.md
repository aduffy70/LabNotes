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

  * 20uL of 25ng/uL (500ng total) in each reaction with 130uL CT conversion reagent (fresh on 2016-11-15 & 2016-11-28).
  * Using recommended thermal cycler settings (cyclename: bis_cnvrt):
    * 98C for 10min
    * 64C for 2.5 hours
    * 4C hold
  * Clean according to [Zymo protocol][1]. Combine the multiple replicates for each sample at the elution step (eluting multiple columns into the same 1.5mL tube)
  * Storing at -20.

# 3) Analyze and quantify bisulfite converted DNA

| Sample | ng/uL | 260/280 | 260/230 | Volume |
| ------ | ----- | ------- | ------- | ------ |
| EW1-bis 2016-11-15 | 20.2 | 2.10 | 1.10 | 20uL (2 eluted together) |
| N1-bis 2016-11-15 | 17.0 | 2.00 | 2.96 | 20uL (2 eluted together) |
| EW1-bis 2016-11-16 | 21.6 | 3.89 | 0.67 | 40uL (4 eluted together) |
| EW1-bis 2016-11-18 | 32.0 | 2.91 | 0.70 | 10uL |
| N1-bis 2016-11-18 | 28.9 | 2.76 | 0.65 | 10uL |
| EW1-bis 2016-11-28 | 16.4 | 2.16 | 0.51 | 30uL (3 eluted together) |
| N1-bis 2016-11-28 | 16.2 | 4.52 | 0.34 | 30uL (3 eluted together) |

  * Nanodropped using RNA-40 settings per Zymo recommendation.
  * Can we directly compare the before measurements of double-stranded DNA with these after measurements of single-stranded DNA? We are starting with 20ng of 25ng/uL DNA (500ng total) and getting 10uL of ~25ng/uL DNA (250ng total). Does this mean our yield is 50%? In any case, the yields are consistent.
  * The yields are high enough to use these as PCR templates.

# 4) Amplify bisulfite DNA using bisulfite primer pairs

PCR0240:
  * Testing GSTA3 promoter bisulfite primers
    * Running Reef A, C, and D primers at 55C annealing temp, and Reef B primers at 52C annealing temp (used 2 thermalcyclers)
    * Hotstart polymerase per Zymo recommendation--AmpliTaq Gold 360
    * Using primer concentration at the lower end of the recommended scale to reduce secondary products per AmpliTaq Gold 360 protocol.
    * 40 cycles per Zymo recommendation
    * Other PCR concentrations fit AmpliTaq recommendations

PCR0240 results:
  * All primer pairs run at 55C have weak amplification and a bit of a smear of short bands. They might be good enough to sequence, but let's try to optimize them further. We will pick just one sample and primer set for the optimization tests since they all appear to be behaving similarly.
  * The Reef B primer pair run at 52C failed. Try cooler temp?

PCR0242:
  * Optimizations tests using just the Reef A primers and EW1-bis. Trying:
    * longer 95C activation time
    * temperatures +/- 1.5 and 3.0C from the 55C of PCR0240
    * with/without GC enhancer
  * Bisulfite converted more (40uL) of EW1 to use for these optimization tests (EW1-bis 2016-11-16).

PCR0242 results:
  * Surprisingly, hotter annealing temps give better yields than cooler.
  * GC enhancer might reduce yield slightly but it makes the annealing temperature a bit less critical.
  * Let's move forward using 57C annealing temperature and GC enhancer.

PCR0243:
  * Reef B optimization test--on PCR0240 it failed completely at 52C without GC enhancer, so let's try a temperature gradient with GC enhancer.

PCR0243 results:
  * All reactions failed at all temperatures. Design new primers for Reef B.

PCR0244:
  * Rerunning GSTA3 Reef A, C and D with optimized temperature and GC enhancer.
  * We already have Reef A for EW1 from the optimization tests on PCR0242, so I'm not rerunning that here (thus, only 5 instead of 6 reactions).
  * We don't quite have enough of the bisulfite converted DNA for these reactions and all we still need to run, so I converted more (EW1-bis 2016-11-18 & N1-bis 2016-11-18). To avoid wasting what is left, and since our bisulfite conversions have similar yields and qualities, I pooled what was left of the 2016-11-15 & 16 conversions into these new ones.

PCR0244 results:
  * The N1 reactions probably have enough product to purify. The EW1 do not. Try rerunning those 2 with more template?

PCR0245:
  * Rerunning EW1 GSTA3 Reef C and D with more template, more primer, longer Taq pre-activation time, and in a 50uL reaction to try to maximize the yield.

PCR0245 results:
  * Failed! Optimize annealing temperatures.

PCR0246:
  * Trying to optimize annealing temp for <del>Reef C and</del> Reef D. The 55.0C temp gave weak results on PCR0240, so including it here as a positive control. 57C Failed on PCR0244 and 0245 so trying lower temperatures.
  * Just Reef D... I dropped the striptube with the Reef C reactions :(

PCR0246 results:
  * Everything failed on Reef C... not surprisingly since those reactions were dropped.
    * Bisulfite convert more EW1 and retry the Reef C reactions.
  * Only the 55C reaction worked on Reef D. Apparently that is the optimal temperature... it just doesn't give great results.
    * Purify 246-9 combined with 240-5 to get sufficient product for sequencing.

PCR0247:
  * Rerunning the EW1 Reef C reactions I dropped from PCR0246 at a range of annealing temperatures. Bisulfite converted more EW1 and N1 for these.

PCR0247 results:
  * 55C worked weakly. Purify it

PCR0248:
  * Trying to optimize annealing temp for Reef B using redesigned primers.
  * The other reefs worked best at annealing temp close to the IDT Tm. IDT Tm for this primer pair is 51.4C so straddling this value.

PCR0248 results:
  * 52.9 and 51.4 worked weakly. Purify and elute together.

# 5) Analyze, purify, and quantify bisulfite PCR products

Ready for sequencing:
  * EW1 Reef A (242-3-EW1 or 242-11-EW1)
  * EW1 Reef B2 (248-4-EW1)
  * EW1 Reef C (247-1-EW1)
  * EW1 Reef D (246-9-EW1)
  * N1 Reef A (244-1-N1)
  * N1 Reef B2 (248-12-N1)
  * N1 Reef C (244-3-N1)
  * N1 Reef D (244-5-N1)

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
  * The slightly longer band in the Reef A primers could be single-stranded products that formed secondary structures, which should also not cause sequencing problems.
  * Let's try purifying and sequencing. If I am right, I'll get clean sequences. If I'm wrong the entire sequence of 1 & 2 and the first 250bp of 3-6 will have higher than normal background signal.

# 7) Analyze, purify, and quantify normal PCR products

Ready for sequencing:
  * EW1 Reef A (241-1-EW1)
  * EW1 Reef BC (241-3-EW1)
  * EW1 Reef CD (241-5-EW1)
  * N1 Reef A (241-2-N1)
  * N1 Reef BC (241-4-N1)
  * N1 Reef CD (241-6-N1)

# 8) Sequence bisulfite PCR products using bisulfite sequencing primer pairs

# 9) Sequence normal PCR products using normal sequencing primer pairs

# 10) Compare bisulfite and normal sequences.


[1]: https://drive.google.com/drive/folders/0B0DnkQIRAeIISHZ6My1rSFBSWEk
