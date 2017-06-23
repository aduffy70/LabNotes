---
title:  qPCR troubleshooting
date:  2017-06-23
layout: post
categories:
  - gsta alt splicing
---
PCR0289 was my first attempt at qPCR and there were some issues:

## PCR product in "No template" control wells

  * I ran 1 well for each primer pair with water instead of template and 4 of the 5 had CT values--2 of them very low.
  * I ran them out on a gel and they are definitely the expected PCR products for each primer pair, not primer-dimers.
  * Contamination of the Sybr Green supermix or nuclease-free water is unlikely. Contamination of primers is possible, though it would have to be contamination from previous PCR setups--the primer was added before the templates in this setup. Most likely is aerosols in the pipetter. We had just finished loading templates into the other wells before adding water (in lieu of template) in these 5 wells and we didn't have filtered tips. If that is the case, it makes pretty much everything on this run suspect.
  * For the next run I will make fresh dilutions of all primers and use filter tips (place an order for several thousand).
  * Also, I am going to try a different setup sheet layout so I can make use of mastermixes for each primer set, which will eliminate a lot of pipetting and reduce errors due to operator error/fatigue. It will also include running fewer samples (but with replicates of each) on the plate.

## Many wells with no CT on Domestic samples--especially the control samples

  * We expect much lower GSTA3 expression on domestic samples, so it could be that there really is not enough expression to show up.
  * That wouldn't explain the missing GAPDH signal in 3 wells. The other GAPDH CTs are very consistent acrossed samples and there is no reason to expect them to be lower in control Domestic birds. Those wells may have been at the tail end of a SybrGreen tube where I was spinning down to get the dregs, so perhaps they had a different concentration of the supermix.
  * For the next run I am going to increase the template concentration for all domestic samples.
  * For the next run, I'll calculate the amount of SyberGreen needed, and combine all the tubes into one to ensure that any differences between tubes of supermix will be averaged out.

## The qPCR cycler calibration is past due

  * On the final report, the cycler reported that calibrations have not been checked in over 700 days (they recommend every 30 days).
  * This could result in inaccurate measurements in some or all wells.
  * We ordered supplies to do a calibration run and will complete it before the next qPCR attempt.
