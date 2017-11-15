---
title: Revisiting old Crepidomanes sanger sequences
date: 2016-02-16T12:29:33+00:00
layout: post
categories:
  - t. intricatum gbs
---
My goal in sequencing these back in 2008 was to try to identify variable chloroplast markers. I struggled to get clean sequences and stopped when I found that only one of the 5 samples I tested differed from the other 4 at any of the markers- that level of variation wasn't going to be useful for population genetics analysis. I now strongly suspect that the different one is actually Vandenboschia boschiana, not Crepidomanes intricatum and these sequences may be useful as I decide which markers to use to sort my GBS samples by species.

  * Samples sequenced:
      * 07032, 07035, 07041, 07046 - suspected Crepidomanes intricatum
      * 07050 - suspected Vandenboschia boschianum
      * This was unintentional. At the time I thought they were all Crepidomanes and I was looking for variation within species, not markers to sort them by species.
  * Markers sequenced:
      * rbcL
          * PCR0146 - amplified well with F1F & F1379R. ~1200bp fragments
          * Sequenced with:
              * F1F (short messy sequences)
              * F26 (worked well)
              * H1F1 (worked well)
              * H1R1 (worked well)
              * TKT-F1 (short, messy sequences)
              * F1379R (worked on some)
          * 07020, 07032, 07035, 07041, 07046 are nearly identical to C. schmidtianum sequences in genbank
          * 07050 is messy but clearly different from the others.
          * Good taxon converage in Genbank
      * rbcL-atpB spacer
          * PCR0152- amplified well with atpB411R and rbcL132R
          * Sequenced with same. Clean sequences for all but 07050
          * 07020, 07032, 07035, 07041, and 07046 are identical to each other and similar to the atpB end of Ebihara's Crepidomanes lanceolatum (Genbank:AB083291.1)
          * 07050 is dirtier but clearly different - many SNPs and indels including an 85bp deletion - which corresponds to the visible shorter band lengths on gels.
          * This marker includes ~70bp of atpB, the entire atbP-rbcL spacer and ~110bp of rbcL.
          * Ebihara has a few filmy sequences for this region in genbank but not for the 3 taxa of interest (Crepidomanes intricatum, Vandenboschia boschiana, Didymoglossum petersii).
      * trnL-trnF spacer
          * PCR0152- amplified well with trnL-F(f) and trnL-F(e). ~425bp fragments
          * Sequenced with same. Clean sequences
          * All are identical to each other except 07050.
          * All blast in fern trnL-trnF spacer but there are no Trichomanes sequences in Genbank (just Hymenophyllums).
      * trnS-rps4
          * PCR-0147 - amplified weakly. I think I combined with PCR0143 to get enough PCR product to sequence. trnS-GGA & rps4.5
          * Sequenced with same. Messy sequences for some samples.
          * 07020 and 07046 were too messy to use even after sequencing twice
          * 07032 and 07035 are nearly identical to each other and to C. intricatum and C. schmidtianum in genbank.
          * For some reason I did not amplify or sequence 07050 for this marker.
  * Reasons to use atpB-rbcL spacer to identify my GBS samples to species:
      * The Wolf Lab rbcL curse. And even if I could amplify rbcL consistently, there aren't existing rbcL sequences for V. boschiana and D. petersii anyway.
      * This region amplifies easier than trnS-rps4.
      * There is a big indel between suspected Crepidomanes and suspected Vandenboschia. If there is also a big difference between Didymoglossum, I may not even have to sequence everything - I can amplify and compare fragment lengths.
      * I can confirm that this sequence is what I think it is because it contains parts of known genes at each end and blasts to other filmy fern sequences for this region
  * Reasons not to:
      * It might not work on Didymoglossum. Though nothing has worked on that sample so it may not be a species-specific issue. And even if I just use this to sort out the Vandenboschia sample that is a help - there are many fewer samples where I have doubts about whether they are Crepidomanes vs Didymoglossum.
      * There are few filmy fern sequences for this region in genbank so I can't use it to try to identify the mystery sample S26 or to confirm that the Didymoglossum and Vandenboschia sequences fall about where expected in the phylogeny.
