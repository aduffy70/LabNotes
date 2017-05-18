---
title:  Limitations of PEG PCR purification
date:  2017-05-17
layout: post
categories:
  - ideas  
---
PEG purification works by size selection--fragments smaller than some minimum size stay suspended in the PEG (and are discarded) while larger fragments get pelleted during the first centrifugation and continue on through ethanol precipitation.

The size of the fragments that stay suspended and are discarded is based on the % PEG and the molarity of the salt (NaCl):
  * Higher PEG allows shorter fragments to remain in the purified DNA.
  * Higher salt allows shorter fragments to remain in the purified DNA

My current concentrations (20% PEG and 2.5M NaCl) are probably removing things smaller than 300bp. For fragments smaller than that, even when starting with large amounts of DNA, I usually end up with 5ng/uL or less after PEG purification.

If I want to be able to purify smaller fragments (while still removing primers) I will need to run tests with different concentrations. I could use a DNA ladder to do this. Trying to purify a DNA ladder with my current concentrations would also tell me where exactly the cutoff is right now.

Qiagen's Qiaquick kits remove things smaller than 100bp, so they might be better for my smaller fragments. How sharp is the cutoff for those kits? Purifying a ladder with the kit would yield useful info.

Helpful references [here][1] and [here][2].

My PEG purification protocol [here][3].

# Comparing Qiagen Qiaquick and PEG PCR purification:

Used two ladders:
  * L1 Thermo Scientific MassRuler High Range DNA ladder
    * Bands at 10k, 8k, 6k, 5k, 4k, 3k, 2.5k, 2k, and 1.5k
    * Manufacturer says it is 42.2ng/uL. It contains a loading dye so I can't verify (Nanodrops as 56.3ng/uL when blanked against TE)
  * L2 Promega PCR Markers
    * Bands at 1k, 750, 500, 300, 150, and 50
    * Manufacturer says it is 60ng/uL. Nanodrops as 353.9ng/uL when blanked against TE.

For each ladder:
  * Purified 25uL following the Qiaquick protocol and eluted into 30uL EB.
  * Purified 25uL following my PEG protocol and eluted into 30uL TE.
  * Nanodropped using 2uL of each PCR product and ran a minigel with 5uL of each product for 55 minutes at 115V.

## Results:

| Sample | ng/uL | 260/280 | 260/230 |
| --- | --- | --- | --- |
| L1 Qiagen | 31.5 | 1.86 | 1.84 |
| L1 PEG | 32.9 | 1.88 | 2.21 |
| L2 Qiagen | 31.3 | 1.89 | 1.94 |
| L2 PEG | 15.4 | 1.98 | 2.35 |

![Qiagen vs PEG gel image][image1]

[1]: http://www.openwetware.org/wiki/Protocol_Size_selective_DNA_precipitation_by_PEG/MgCl2
[2]: http://doi.org/10.1007/s00253-013-5195-0
[3]: https://docs.google.com/document/d/1QIAPW2Sqezbr2klQmA8WXQb_aPfYRmIv7mDHETS03iI/edit?usp=sharing
[image1]: {{ site.baseurl }}/assets/Qiaquick_vs_PEG_Purification.jpg
