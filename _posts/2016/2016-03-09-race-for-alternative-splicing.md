---
title: 'RACE for alternative splicing - preparations'
date: 2016-03-09T10:16:03+00:00
layout: post
categories:
  - gsta alt splicing
---
  * RACE-ready cDNA from Kim June's RACE work is problematic:
      1. Inconsistent labeling and incomplete records make it unclear which tubes are from which samples or even if there was more than one bird per type used. I can't find the information needed to trace samples back to specific birds.
      2. These samples are all non-AFB-treated birds and the RNA-seq data suggests the possibility of mRNA splicing/start-point differences between treated and untreated birds.
      3. The commercial bird(s?) is Nicholas and we prefer BB white vs EW comparisons.
  * So... I will make new RACE-ready cDNA using a subset of Deepika Gaddam's RNA extraction in the -80 freezer (box 16-5, and 16-6 (don't let the "mouse cytosols" written on the outside of 16-6 mislead... the tubes inside are clearly labeled turkey whole RNA extractions:
      * They are the same samples used in the Fluidigm mRNA-expression work and we know where they came from
      * They include BB white and EW birds with and without AFB treatment:
          * B2-9 - BB White AFB-treated
          * B10-17 - BB White control
          * E1-8 - Eastern Wild AFB-treated
          * E9-16 - Eastern Wild control
  * But first I can use the existing RACE-ready cDNA to make sure this process is really going to work:
      * Do I get multiple bands of the expected lengths when I amplify GSTA3 5' and 3' UTRs using June's gene-specific primers?
      * If not, can I design new primers to specifically grab the alternate splice versions?
      * If I can't do one or both of these with the existing cDNAs then making new RACE-ready cDNAs will be a waste of time and money.
  * Do we have SMART RACE or SMARTer RACE kit reagents still on hand that I can test or should I buy a new kit?
  * How big is this experiment?
      * 5'UTR: 4 type-treatments X # of birds in each type-treatment X 3 expected versions X 5-10 clones to maximize sequence length
      * 3'UTR: 4 type-treatments X # of birds in each type-treatment X 2 expected versions X ? clones to maximize sequence length
          * Getting the full 3' UTR length generally isn't a problem like it is for the 5'UTR

# RACE Expected band lengths:

  * Kim 2010 GSTA3 mRNA = 1-851bp (cds = 72-743)

| Name | Location | Length of amplified sequence | Est. length A | Est. length B | Est. length C |
| ---- | -------- | ---------------------------- | ------------- | ------------- | ------------- |
| 5A3-R2 | 712-682 | 641 + UTR5 + UPM | EW_Cntrl 799<br /> EW_AFB 803<br /> N_Cntrl 776<br /> N_Cntrl 777 | EW_Cntrl 782<br /> EW_AFB 785<br /> N_Cntrl 755<br /> N_Cntrl 754 | EW_Cntrl 907<br /> EW_AFB 1397<br /> N_Cntrl 926<br /> N_Cntrl 1397 |
| 5A3-R5 | 539-514 | 443 + UTR5 + UPM | EW_Cntrl 601<br /> EW_AFB 605<br /> N_Cntrl 578<br /> N_Cntrl 579 | EW_Cntrl 584<br /> EW_AFB 587<br /> N_Cntrl 557<br /> N_Cntrl 556 | EW_Cntrl 709<br /> EW_AFB 1199<br /> N_Cntrl 728<br /> N_Cntrl 1199 |

UPM = 52bp (45bp for the primer, plus the SMART II A Oligo that it binds to extends 7 bases downstream before the start of the mRNA - so all my estimates before 2016-04-20 were 52bp shorter than they should have been. Explains why all my PCR products seemed a bit long.)

| Name | Location | Length of amplified sequence | Est. length A | Est. length B |
| ---- | -------- | ---------------------------- | ------------- | ------------- |
| 3A3-2 | 435-461 | 308 + UTR3 + UPM | 520 | 2320 |
| 3A3-4 | 566-593 | 177 + UTR3 + UPM | 389 | 2389 |

UPM = 77bp (45bp for the primer plus the 3' RACE CDS Primer A that it binds to extends 32 bases downstream before the start of the mRNA - so all my estimates were 77 shorter than they should have been)
