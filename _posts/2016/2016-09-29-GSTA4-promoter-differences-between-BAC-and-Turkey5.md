---
title:  GSTA4 promoter differences between BAC and Turkey5
date:  2016-09-29
layout: post
categories:
  - gsta methylation
  - gsta other
---

While designing primers for Zymo OneShot methylation I noticed some strange things about the GSTA4 promoter region. Specifically I am looking at the 1585bp directly upstream of the GSTA4 start codon .

  * The Turkey5.0 assembly differs from the BAC sequence in this region
    * In T5.0 the first 1009bp of the BAC GSTA4 promoter sequence are 32000bp downstream of the last 474bp. The bases from 1010 to 1111 don't have any close hits in Turkey5.0.

    | bp in 1585 fragment | bp in T5.0 Chr 2 |
    | ------------------- | ---------------- |
    | 1    | 86973164 |
    | 1009 | 86974172 |
    | 1112 | 86940465 |
    | 1585 | 86940938 |

  * The way this is split fits our PCR results in some ways:
    * primers 1-f to 1-r should amplify (though the length doesn't make sense)
    * primer 2-f to 2-r and 1-f to 2-r should fail because the primers are far apart on the chromosome
  * The positions of CpG islands are different in Turkey5.0 but don't make any more sense than in the BAC.
    * GSTA3 still has no upstream CpG islands
    * There is an extra island upstream of GSTA2.

![CPG islands in Turkey5.0 TMEM14A to ICK][image1]

# Conclusion

I don't think there is evidence to say Turkey5.0 more accurately represents this part of the genome than the BAC sequence. But if I continue to have problems amplifying the GSTA4 promoter region it may be worth designing primers based on the Turkey5.0 version of the promoter and seeing what happens.


[image1]: {{site.image_path}}CpG_Islands_in_Turkey5.0_TMEM14-ICK.png
