---
title:  Electroporating turkey primary cells
date:  2017-09-27
layout: post
categories:
  - gsta mirna
  - gsta other
---

# Problem

Now that we are able to isolate turkey liver cells, we need to figure out how to transfect them for validation experiments and for the miRNA transfection experiments.

# Experiment

We want to try electroporating in 2 media types:
  * HBSS (Perfusion buffer 1)
  * Supplemented Williams E media

We want to try different electroporation settings (based on [what works in rat][1]):
  * 0: No electroporation
  * 1: Electroporated at 220V 500uF
  * 2: Electroporated at 220V 950uF
  * 3: Electroporated at 400V 950uF

All electroporation was with 2uL of 1ug/uL vector (pEGFP-C1). Samples not electroporated received no vector.

Everything will be plated in Supplemented Williams E at the end so cells electroporated in HBSS will have to be spun out and resuspended. We need controls to separate the effect of media type from the effect of spinning.

So, our final setup was:

We isolated cells using our [protocol][2] but stopped after removing the pellet from the percoll and divided the pellet slurry into three 300uL aliquots and resuspended:
  * HS: 300uL pellet slurry + 1400uL HBSS (Perfusion Buffer 1)
  * WS: 300uL pellet slurry + 1400uL Supplemented Williams E
  * WN: 300uL pellet slurry + 1400uL Supplemented Williams E

Hemocytometer count for resuspended cells = ~2.6M/mL 92% viability

Each resuspension was divided into 400uL aliquots for electroporation.

After electroporation, samples that got spun were spun 2 minutes at max speed (on a tabletop centrifuge) in a 1.5uL tube to repellet the cells. Media was removed and replaced with 400uL Supplemented Williams E and mixed by pipetting. Samples that were not spun were left in their original Willaiams E media.

Everything was plated in replicate on a 24well plate. 100uL sample to 200uL Williams E (~260000 cells / well).

| Sample | electroporation media | Electroporated? | Spun and resuspended? |
| ------ | --------------------- | --------------- | --------------------- |
| HS0 | HBSS | No - no vector | Yes |
| HS1 | HBSS | 220V 500uF | Yes |
| HS2 | HBSS | 220V 950uF | Yes |
| HS3 | HBSS | 400V 950uL | Yes |
| WS0 | Williams | No - no vector | Yes |
| WS1 | Williams | 220V 500uF | Yes  |
| WS2 | Williams | 220V 950uF | Yes |
| WS3 | Williams | 400V 950uL | Yes |
| WN0 | Williams | No - no vector | No |
| WN1 | Williams | 220V 500uF | No  |
| WN2 | Williams | 220V 950uF | No |
| WN3 | Williams | 400V 950uL | No |

Media will be changed according to our cell isolation protocol and transfection results checked after 24 hours (cells should fluoresce)

# Results

# Next steps

Take whichever settings worked the best and now optimize vector concentration?

[1]: http://doi.org/10.3748/wjg.v8.i5.893
[2]: https://aduffy70.github.io/Protocols/Turkey_liver_cell_isolation/
