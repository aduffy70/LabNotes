---
title:  iQ5 qPCR cycler calibration
date:  2017-06-27
layout: post
categories:
  - gsta alt splicing
---
iQ5 qPCR cycler hadn't been calibrated in 700+ days (recommended mask, background, and well factor correction every 30 days).

  * Fresh External Well Factor Solution (arrived 2017-06-26) diluted from 10X to 1X (255uL WFS in 2295uL DNAse/RNAse-free water).
  * Used the repeating pipetter to get consistent 25uL volumes.
  * Tried calibrating according to the printed instructions with the machine, but ran into problems when the instructions told me to specify the well factor volume and there was no field to enter the volume. Turns out, the printed instructions are for software version 1.0 and we are using version 2.1. I found a more up-to-date set of instructions [online][1] and calibrated according to those.
  * Calibrated for Neptune \#3430 Non-skirted 96-well PCR plates (since we have a full box on hand).
  * Calibrated for BioRad Microseal B film PCR sealers (since we have ~100 on hand and only enough flat-cap lids for a couple plates).
  * No dye calibration was performed since both the old and new calibration procedures say it is not needed for Sybr Green.

## Changes from v1.0 to 2.1 in calibration procedure:
  * Previously, the volume of External Well Factor Solution in Calibration plate A needed to match the volume to be used in the experiments. Now it MUST be 25uL and the software will adjust when we used smaller volumes in experiments.
  * Previously, there was a field to record the External Well Factor Solution volume on the Well Factors page. Now the field is gone since the volume will always be 25uL.
  * Previously, the mask calibration was performed using filter 3. Now it uses filter 2.

[1]: https://drive.google.com/open?id=0B0DnkQIRAeIIUzQ0d2NHQ2xLOVE
