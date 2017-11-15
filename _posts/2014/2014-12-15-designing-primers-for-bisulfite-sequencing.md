---
title: Designing primers for bisulfite sequencing
date: 2014-12-15T15:00:06+00:00
layout: post
categories:
  - gsta methylation
---
  * Meleagris gallopavo clone BAC 37H15, complete sequence - GenBank: GQ254850.1 (from Deepika's Primer INFO.xlsx)
  * Aligned Hardeep's (non-bisulfite) primers to the 3 inter-GST regions to see how much of them we expect to have SNP data for. Ideally I'd cover all this same area with bisulfite sequencing.
  * 3 Regions  -  26119bp (21210bp covered by primers):
      * Region 1: ICK-GSTA4  -  5828bp (5085bp covered by primers: 710-5795)
      * Region 2: GSTA4-GSTA3  -  11774bp (8685bp covered by primers: 595-9280)
      * Region 3: GSTA3-GST1.1  -  8517bp (7440bp covered by primers: 63-7503)
      * It does no good to design bisulfite sequencing primers beyond the covered regions since I need the non-bisulfite sequences as a comparison. I COULD compare to the Turkey reference genome, but that assumes there are no SNPs, and we know there are SNPs in the part covered by primers so there are likely others in the parts not covered.
  * 3 types:
      * Wild
          * Eastern
          * Rio Grande
          * Spanish
      * Heritage
          * Bourbon Red
          * Royal Palm
      * Domestic
          * Moroni
          * Group III?

Strategy:

  * Library prep:
      * Use Sequenom epidesigner (http://www.epidesigner.com) to design new primers (bs-primers)to cover the 3 regions
          * The longer the amplified fragments, the fewer primers needed and the more likely they will shear in random places leading to consistent sequence coverage.
          * 4-5kb amplicons seems to be the max recommended for many polymerases.
      * Bisulfite treat genomic DNA from domestic, heritage, and wild types using EZ DNA Methylation-Gold kit from Zymo (?)
      * Amplify bisulfite treated DNA using bs-primers
          * high-fidelity polymerase? long-range pcr? Isom used  HotStarTaq Plus from Quiagen (not hi-fi).
          * B-family high-fidelity polymerases will NOT amplify bisulfite treated DNA (see KAPA HIFI URACIL+ @$260/100 reactions)
      * Amplify non-bisulfite treated DNA using Hardeep's primers
      * Shear both sets of amplified products to 100-150bp lengths
      * Prepare standard Illumina libraries (unique index for each type and bisulfite/non-bisulfite).  How does the number of indexes used affect cost/difficulty? If the index can also tell which of the 3 regions the sequence is from it will simplify assembly.
      * Pool and sequence on a single Illumina lane
          * Assuming 250 million reads divided among 14 indices (7 varieties * two treatments) gives ~18 million reads per variety
          * 1.8 billion bases covering ~26000 combined bases in the 3 regions gives average depth-of-coverage of ~69000
  * Sequence analysis:
      * Sort sequences by variety and treatment
      * QC cleaning/trimming
      * Assemble each against the reference sequence for the 3 regions
      * Compare bisulfite to non-bisulfite in each variety to find methylation patterns
      * Compare non-bisulfite to non-bisulfite between varieties to find SNPs
