---
title:  Designing primers for NRF2 methylation
date:  2016-10-26
layout: post
categories:
  - gsta methylation
---
Now that we know the sequence upstream of NRF2 (NFE2L2) and can see there is a CpG island in this region, we can design primers to look at methylation levels with the Zymo OneStep qMethyl kit.

We designed 3 sets of primers to capture most (31/38) of the CpGs the Zymo kit can detect, and which cover the most dense part of the CpG island upstream of and extending into the NRF2 mRNA:
~~~
>NRF2_Promoter3-F
CTCTCCTGACAGAAAATCCCGC
>NRF2_Promoter3-R
CAGCTCGATCTCCATAGCGC
>NRF2_Promoter4-F
GCGCTATGGAGATCGAGCTG
>NRF2_Promoter4-R
ACCCTTCGCTACGGACTGAC
>NRF2_Promoter5-F
CTAGTCCGGTTCCTTCTTGAGAG
>NRF2_Promoter5-R
TTTCCACAACAGCTCTAACAGAAAC
~~~

All expected fragment sizes are under Zymo's recommended maximum of 350 bp:

| primer pair | length |
| ----------- | ------ |
| 3-F to 3-R | 287 |
| 4-F to 4-R | 308 |
| 5-F to 5-R | 310 |

Map of primers on the sequence. The numbered region is what we used for primer design--the rest is just included to show the extents of the CpG island. Labeled bp1 = Turkey5.0 chromosome7 bp 15274319. Entire region shown is 15273519-15276018 (the length doesn't add up because 1145bp of NNNs in the Turkey5 sequence are replaced with 539bp of real sequence):
![Map of NRF2 Zymo primer positions][image1]

[image1]: {{site.image_path}}Map_of_NRF2_Zymo_primer_positions.png
