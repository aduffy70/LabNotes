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

Helpful references [here][1] and [here][2]

[1]: http://www.openwetware.org/wiki/Protocol_Size_selective_DNA_precipitation_by_PEG/MgCl2
[2]: http://doi.org/10.1007/s00253-013-5195-0
