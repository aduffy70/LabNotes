---
title:  Zymo methylation analysis cheatsheet
date:  2018-01-04
layout: post
categories:
  - gsta methylation
---

I can never remember the details behind how the Zymo OneShot methylation kit works...

The reference reaction just amplifies the DNA.

The test reaction cuts with a methylation sensitive restriction enzyme first.
  * The RE cuts non-methylated DNA so it doesn't amplify.
  * The RE does not cut methylated DNA so it amplifies as well as the reference.

| Reference | Low methylation | High methylation |
| --------- | --------------- | ---------------- |
| Nothing cuts | Everything cuts | Nothing cuts |
| High amplification | Low amplification  | High amplification |
| Low Ct | High Ct (big delta Ct) | Low Ct (small delta Ct) |

Relationship between delta Ct and % methylation:
  * At small delta Ct values, small increases in delta Ct correspond to big decreases in % methylation.
  * At high delta Ct values, even big increases in delta Ct correspond to only small decreases in % methylation
  * That means we can probably more accurately detect differences when methylation is low (e.g., the difference between samples that measure 90% and 100% methylation probably isn't real, but the difference between samples that measure 10% and 20% probably is.)
  * That also means variation in replicate Ct values used to calculate delta Cts creates more uncertainty at lower delta Ct values.

![Plot of relationship between deltaCt and % methylation][image1]

[image1]: {{ site.baseurl }}/assets/Relationship_between_deltaCt_and_methylation.png
