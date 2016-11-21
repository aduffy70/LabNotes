---
title:  Designing bisulfite primers for GSTA3 promoter
date:  2016-10-27
layout: post
categories:
  - gsta methylation
---
# The problem:

There is no CpG island upstream of GSTA3 but there are 88 CpGs scattered through this region. Bisulfite sequencing all of the CpGs in this region would take >15 500bp fragments. Can we design primers to focus on those CpGs that seem more likely to represent the promoter, while capturing a reasonably sized sample of the total 88?

Sequence investigated: Meleagris gallopavo clone BAC 37H15, 151105-162715. Everything between GSTA4 and GSTA3 coding sequences.

| bp in this section | bp in BAC | description |
| ------------------ | --------- | ----------- |
| 1 | 151105 | First base after GSTA4 cds |
| 8900 | 160004 | Annotated UTR5 exon1 - first base |
| 8928 | 160032 | Annotated UTR5 exon1 - last base |
| 11577 | 162681 | Annotated UTR5 exon2 - first base |
| 11611 | 162715 | Annotated UTR5 exon2 - last base; last base before GSTA3 cds |

Bisulfite sequencing guidelines from [here][1] and [here (with more links at the bottom)][2] and more [here][3]
  * No CpGs in the Primer. If there is no other option, only allow one and use R/Y wobble bases
  * Primers should have some non-CpG C's to amplify only the bisulfite modified DNA ???
  * Use hot start polymerase--primer dimers and non-specific binding are more likely with only 3 bases.
  * Longer than normal (26-35bp) primers with high Tm--definitely over 50C
  * 200-500bp amplicons--bisulfite treatment is harsh and degrades the DNA so larger fragments will be difficult to amplify (and more likely to be incompletely converted).
  * Since we are only amplifying from one strand more PCR cycles are needed (35-40)
  * proteinase K incubation, fully denaturing DNA prior to conversion, and not trying to do too much DNA in one well make bisulfite conversion more consistent

There are no CpG islands but there are "CpG reefs" where we can capture a larger than normal number of CpGs in one 500bp section.

| Reef start (bp in BAC) | Reef end | Length | CpGs in reef | Comment |
| ---------------------- | -------- | ------ | ------------ | ------- |
| 153179 | 153647 | 460bp | 9 | This is >6000bp upstream of the transcription start site (TSS). Ignore. |
| 157094 | 157566 | 461bp | 12 | ~2400bp upstream of the TSS. Reef A |
| 159451 | 159951 | 492bp | 9 | ~50bp upstream of the TSS. Reef B |
| 159993 | 160476 | 474bp | 10 | Straddles the TSS. Reef C |
| 160786 | 161217 | 424bp | 8 | ~750bp downstream of the TSS in the intron of the 5'UTR. Reef D |
| 161921 | 162381 | 454bp | 7 | ~2000bp downstream of the TSS in the intron of the 5'UTR. Ignore. |

  * Reef A seems reasonably close upstream to still be part of the promoter.
  * Reef B, C, and D are all contiguous and about where a promoter might be expected.

# The plan:

Using these primers, bisulfite sequence the 4 reefs in the 4 birds from each Type-Treatment. We won't clone, so the methylated bases may show double peaks in the sequence chromatographs. The relative height of these peaks is not precise enough to test for differences in methylation rates, but should allow us to see if anything interesting appears to be happening in any of these reefs and get a feel for whether there is variation between birds and between Type-Treatments. If so, we can proceed to cloning and sequencing on just the interesting reefs to quantify the differences. Basically, if it looks like everything is methylated or everything is not methylated and that doesn't differ between birds or Type-Treatments, we can avoid spending an excessive amount on sequencing.

  * Designed bisulfite primers to cover all 4 reefs using [MethPrimer][4]. All amplicons are <550bp:
    ~~~
    >G3bsAF
    TAGTGAAGTTGGTGTTTGTATAGTTATTTTTATTGT
    >G3bsAR
    CTCCCCCTAACACAACTCCATACC
    >G3bsBF
    AGTTATATTTTATTTTATTTTTGTATATGTTGTGTG
    >G3bsBR
    AATACCACTCAAAACAAAAACTCTTTTACC
    >G3bsCF
    GGAGTTGTTAAGTTAAATTAGAAGTGGGATTG
    >G3bsCR
    ACCAAACATCACCACTAACTACAAAAAACC
    >G3bsDF
    GTTTTTTTGTGTAGTTGTAGAATTTTTGGTTGT
    >G3bsDR
    CCCACACTTCATTTCCCATTTAAATAAAAT
    ~~~

  * Designed a second ReefB primer set because the first one fails to amplify (2016-11-21):
    ~~~
    >G3bsB2F
    ATTTTTGTATATGTTGTGTGTATATTTTTATGTATA
    >G3bsB2R
    AAAATAAAATCTCCTATTACCATTAATCTAATATTA
    ~~~

  * Expected amplicons with these primers. This covers 38/88 CpGs:

| Reef | Length | CpGs captured |
| ---- | ------ | ------------- |
| Reef A | 545 | 12 |
| Reef B | 480 | 8 |
| Reef B2 | 527 | 8 |
| Reef C | 548 | 10 |
| Reef D | 508 | 8 |

  * Designed normal primers to get reference sequence to compare against. Amplicon length is not limited since these will be used in non-bisulfite treated DNA so we will amplify B, C, and D in 2 overlapping amplicons:
    ~~~
    >G3AF
    GTCTGTACAGCCACTCCTACTG
    >G3AR
    TTCAAACCCTACTGCACACACACT
    >G3BCF
    ACATCACAGAAACAGGGTAGGAAA
    >G3BCR
    GCAAATACCATTCCAAACTTGCTG
    >G3CDF
    GATACATCCGCTTTCTTTTGTGCT
    >G3CDR
    ACAGATGATTTCAATTTTCTCAGAGCT
    ~~~  

  * Expected amplicons:

| Reef | Length |
| ---- | ------ |
| Reef A | 642 |
| Reef B/C | 1029 |
| Reef C/D | 1150 |


[1]: http://www.urogene.org/methprimer/rules.html
[2]: http://epigenie.com/guide-simple-tips-to-boost-your-bisulfite-based-applications/
[3]: https://www3.appliedbiosystems.com/cms/groups/mcb_marketing/documents/generaldocuments/cms_039258.pdf
[4]: http://www.urogene.org/cgi-bin/methprimer/methprimer.cgi
