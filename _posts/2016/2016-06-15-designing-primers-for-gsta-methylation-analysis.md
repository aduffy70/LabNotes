---
title: Designing primers for GSTA methylation analysis
date: 2016-06-15T11:24:14+00:00
layout: post
categories:
  - gsta methylation
---
  * There are only 89 CG's in the 11603 bp upstream of GSTA3 coding sequence (BAC sequence 151104-162716: everything between the end of GSTA4 cds and the start of GSTA3 cds).
  * By chance we would expect to find ~700.
  * Only 20 sites in this 11613 would be cut by the restriction enzymes in the Zymo Onse-step methylation kit.
      * ACGT 17 sites; CCGG 2 sites; CGCG 1 site
  * The 89 CG's do not appear to be clustered. The only thing that looks like it might be a CpG island is around 157490-157717 where there are 9 all less than 100bp apart and none of those would be cut by the methylation sensitive restriction enzymes in the Zymo kit. Also, this possible CpG island is 2250 bp upstream of the suspected Transcription Start Site (TSS) somewhere around 159962. Studies I've seen where they look for CpG islands associated with promoters typically only look 2000bp upstream of the TSS.  __Can we design primers to bisulfite sequence this small region?__
  * So... it appears GSTA3 may not be associated with a CpG island near the Transcription Start Site (TSS), and even if it is, the Zymo kit isn't going to work on it.
  * GSTA4 is upstream of GSTA3 in the same orientation. __Is it possible GSTA3 and GSTA4 are sharing a promoter?__
      * GSTA4 has 136 CGs in the 5434 bp upstream to ICK (BAC sequence 139789-145222)
      * There is a large cluster 1100-300bp upstream of the cds and they get more and more dense as you approach the point 300bp upstream of GSTA4 where they abruptly stop. Many of these sites would also be cut with the REs in the Zymo kit.

        ![ GSTA4 Promoter region sequence ]({{ site.image_path }}wp-content/uploads/2016/06/GSTA4_Promoter.png)


  * We designed primers to amplify 2 ~400bp fragments that cover the region of most dense CpGs and all but one of the ones that the REs would cut.

    ~~~
    >G4_Promoter1-f
    TCTCTATCGGGGAAGGTC
    >G4_Promoter1-r
    AAGGCTCTGCTTTGCATA
    >G4_Promoter2-f
    TATGCAAAGCAGAGCCTT
    >G4_Promoter2-r
    CATAGAATCATCCCTCCTAG
    ~~~

  * We need to test these primers and optimize PCR cycles to see if we can use them with the Zymo kit.
  * How does the rest of the GSTA region look? (Shown: Last base of ICK to first base of TMEM14A, 74239 bases)

    ![ CPG Islands ICK-TMEM14A ]({{ site.image_path }}wp-content/uploads/2016/06/CpG_islands_ICK-TMEM14A.jpg)
