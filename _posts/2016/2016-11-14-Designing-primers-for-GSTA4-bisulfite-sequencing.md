---
title:  Designing primers for GSTA4 bisulfite sequencing
date:  2016-11-14
layout: post
categories:
  - gsta methylation
---

# Problem

The Zymo OneStep kit worked on the top half of the GSTA4 promoter but not the bottom half. We need to design primers to bisulfite sequence the bottom half.

# Primer Design

Used MethPrimer. There are many CpGs so there are few locations where primers can be designed.

I can amplify either a long (~575bp) amplicon that includes the entire region. Or a more reasonably sized (~500bp) amplicon that does not include the last 9 CpGs of the island.

Both amplicons overlap with the top half of the promoter so there will be two CpGs that were targetted by the Zymo OneStep kit and that will be covered by this bisulfite data.

I'm going to use the smaller amplicon to stay inline with the sizes of the GSTA3 fragments. It includes 51 CpGs, about 40 of which are not part of the overlap with the top half. That is still way more CpGs than we have gotten in any other fragment.

No need to purchase non-bisulfite primers to get the genomic DNA sequence for comparison--the Zymo OneShot primers will amplify this section... just not with the Zymo kit.

~~~
>G3botbsF
AAGGTTAATATTTAAAAGTTTTTAAGGTTATGGTGA
>G3botbsR
ACCCTTATATCAAAACACCAAAAACACC
~~~

No need to place the order immediately... we have lots to do already with the GSTA3 and NRF2 primers. I'll order these when we get closer or when we have to place another order.
