---
title:  Zymo Onestep qMethyl kit testing
date:  2016-10-07
layout: post
categories:
  - gsta methylation
---
# Notes

* 20ng DNA in each reaction. Protocol specifies 5uL of 4ng/uL solution. We need to make dilutions.
* They provide enough reagents to run 8 sets of control reactions (The human methylated and non-methylated DNA standard is the limiting factor (40uL of each @ 5uL per)).
* QMETH001: We set up reactions to test:
  * Can we amplify the top section, bottom section, and complete promoter?
  * Does it work better with or without GC enhancer?
  * Does it work on both Wild and Domestic turkey DNA?
* QMETH001 results:
  * CTs for Hu-meth were similar (~2 apart) but not identical. How much variation is normal for what should be 2 identical PCR reactions?
  * CTs for Hu-non differed in the wrong direction (Test should be higher than Ref but it was the other way around). Even switching the values, the calculated difference in methylation is 2.8% rather than the expected 6%.
  * CTs without GC enhancer differ in the expected direction and possibly suggest that the methylation levels in EW1 and N1 differ for the top and bottom sections--but this difference disappears on the longer (all) fragment.
  * CTs with GC enhancer vary wildly and several reactions never reached the threshold.
  * We had some confusion on the setup when loading the Reaction Premixes and transferred things to a new tray halfway through. Perhaps in the confusion we mixed things up on the Hu-non reactions?
* QMETH002: Repeating some of the reactions from QMETH001, but:
  * multiple reps of each reaction to see how much variation is expected,
  * No GC enhancer reactions
  * just top and bot sections, not all (this keeps us closer to Zymo's fragment size recommendations)
