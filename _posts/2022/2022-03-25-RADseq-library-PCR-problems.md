---
title:  RADseq library PCR problems
date:  2022-03-25
layout: post
categories:
  - sphagnum other
  - for others
  - ideas
---
# Problem

In trouble-shooting possible bead-cleaning issues leading to low yield RADseq libraries being rejected at the sequencing center (Kenyon plate2 and Gustaf plate1) we sent a completely unfiltered library to the sequencing center. From their Bioanalyzer traces it is clear that our libraries are more primer-dimer than good DNA. So once we filter out the primer-dimers there just isn't enough 350-ish bp DNA left for a library.

I have traces from early 2019 that show we used to get much more DNA in the 350bp range--10 times more after cleaning than we now have before cleaning. What is going wrong?

# What has changed?

Differences in the PCR master mix (volumes are per sample) for different versions of the original Parchman _et al_ protocol, the version used in the Shawlab when I arrived, and my current protocol:

| Attribute | Parchman v2.3 | Parchman v2.6b | Old Shawlab | Current |
| --- | --- | --- | --- | --- |
| Primer mix | 1.33uL at 2.5uM or 5uM? Unclear | same | same | 1.33uL @ 5uM |
| DMSO | 0.15uL | 0.3uL | 0.15uL | 0.15uL |
| Ligation product | 4uL @0.06X (0.24X) | 3uL @0.06X (0.18X) | 2uL @1X (2X) | 2uL @0.12X (0.24X) |

## Primers

The original protocol is unclear about the correct primer mix concentration. It says it should be 2.5uM each, but gives a recipe that makes 5uM each and refers to it everywhere else as 5uM. When I ran out of premixed primer in July 2020 I didn't know whether to make 2.5uM each or 5uM each. I made 5uM to follow the actual provided recipe and updated my protocol to match. So currently I use 5uM each primer but it is possible we were using 2.5uM each when things were working better.

Excess primers can cause primer-dimers.

## Ligation product

The original protocol specifies diluting the ligation products to 0.06X (12uL product in 200uL total volume). Versions differ in how much of the diluted product is used as template in PCR. The Shawlab protocol did not mention diluting so we were using ~8X the amount of DNA in our PCR. In late 2019 I was having problems with herbarium samples failing PCR so I starting diluting to match the original protocol. So we are using much less DNA template than we were when things were working better.

Insufficient template can cause primer-dimers.

## DMSO

Recent versions of the Parchman protocol have increased the amount of DMSO. We have always used the lower amount.

What we use hasn't changed, but increasing DMSO can help with primer-dimers and we are using less than the latest Parchman protocol.

## Handling temperatures

I don't think I've changed my material handling, but I tend to warm reagents as quickly as possible and I hold the master mix tube in my hand when pipetting, so it has time to warm up. Also, I am not consistent about pre-warming the thermocycler to minimize time to start the first cycle.

Not keeping reagents cold once mixed or delaying thermocycling can lead to primer-dimers.

# Process

I am going to try re-running PCR from the ligation products using more DNA, less primer, more DMSO, better cold-handling, and preheating the thermocycler.

## New master mix

| Reagent | 1X uL | 120X uL |
| --- | --- | --- |
| water | 2.45 | 294 |
| buffer 5X | 4.0 | 480 |
| dNTP 1mM | 4.0 | 480 |
| MgCl2 50mM | 0.4 | 48 |
| Primer mix 5uM each | 0.65 | 78 |
| DMSO | 0.3 | 36 |
| iProof Taq | 0.2 | 24 |

Each plate well contains 12uL master mix + 8uL diluted (0.12X) ligation product.

I am testing this on Kenyon plate#2 and will proceed with Gustaf plate1 if it works.
