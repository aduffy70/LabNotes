---
title:  Designing bisulfite primers for GSTA3 promoter
date:  2016-10-27
layout: post
categories:
  - gsta methylation
---
There is no CpG island upstream of GSTA3, but there are CpG scattered through this region. Can we design primers to do bisulfite sequencing?

Sequence investigated: Meleagris gallopavo clone BAC 37H15, 151105-162715. Everything between GSTA4 and GSTA3 coding sequences.

| bp in this section | bp in BAC | description |
| ------------------ | --------- | ----------- |
| 1 | 151105 | First base after GSTA4 cds |
| 8900 | 160004 | Annotated UTR5 exon1 - first base |
| 8928 | 160032 | Annotated UTR5 exon1 - last base |
| 11577 | 162681 | Annotated UTR5 exon2 - first base |
| 11611 | 162715 | Annotated UTR5 exon2 - last base; last base before GSTA3 cds |

Bisulfite sequencing guidelines from [here][1] and [here (with more links at the bottom)][2]
  * No CpGs in the Primer. If there is no other option, only allow one and use R/Y wobble bases
  * Primers should have some non-CpG C's to amplify only the bisulfite modified DNA ???
  * Use hot start polymerase--primer dimers and non-specific binding are more likely with only 3 bases.
  * Longer than normal (26-35bp) primers with high Tm--definitely over 50C
  * 200-500bp amplicons
  * Since we are only amplifying from one strand more PCR cycles are needed (35-40)
  * 

[1]: http://www.urogene.org/methprimer/rules.html
[2]: http://epigenie.com/guide-simple-tips-to-boost-your-bisulfite-based-applications/
