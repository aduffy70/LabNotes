---
title: "June Kim's GSTA RACE reagents and products"
date: 2016-03-07T14:46:41+00:00
layout: post
categories:
  - gsta alt splicing
---
Looking for reagents from when June Kim used RACE to get the GSTA coding sequence (cds) [ Kim et al. 2010 ]( http://doi.org/10.1016/j.gene.2009.11.001 ). If possible I want to use her products to try to sequence to the very ends of the 5' and 3' UTRs. Barring that, I could at least use her same primers if I have to start from scratch.

# Process documented in the published manuscript:

  * Turkey livers were stored in RNAlater (Ambion)
  * mRNA extracted using Oligotex Direct mRNA kit (Qiagen) - according to the [ kit protocol ]( https://www.qiagen.com/us/resources/resourcedetail?id=f9fa1d98-d54d-47e7-a20b-8b0cb8975009&lang=en ) it gives purified polyA mRNA.
  * First strand cDNA (RACE-ready cDNA) generated with Clontech SMART RACE kit. This gives 2 pools of RACE-ready cDNA- one for 5' RACE and one for 3' RACE. I want this cDNA.
  * To get the UTRs:
      * Fragments were amplified from this RACE-ready cDNA using the Universal primers from the SMART RACE kit and the gene-specific primers in the table below. Advantage 2 PCR kit (Clontech) was used.
      * PCR products were cloned with pDrive TA cloning vector (Qiagen) and transformed into competent cells (DH5a, Invitrogen).
      * It doesn't say how many clones were sequenced. The kit says 5-10 clones should be sequenced to improve likelihood of capturing the entire 5' UTR and multiple clones will be needed to capture possible UTR splice variants. Number of clones isn't as critical for capturing the entire 3'UTR but is necessary to capture possible splice variants.
  * To get the cds:
      * PCR using pfuUltra high-fidelity DNA polymerase and then cloned with Zero Blunt PCRII vector (invitrogen).
      * Primers are in the table below.
      * The manuscript doesn't say whether the template was the 5' or 3' RACE-ready cDNA, or the products of the PCR to get the UTRs. It isn't clear whether they performed the step of joining the 5' and 3' fragments... I don't think they had to do that to get the sequence that is in genbank.

# Primers:

The primer sequences used for 5' and 3' RACE are listed in Table 1 of Kim et al 2010. For each gene there is a PCR primer and a nested PCR primer for both 5' and 3' RACE. I searched for those sequences in the lab Primer Inventory to get their Lab ID, Primer Name, and last known Location:

| 5' or 3' RACE | Gene | Lab ID | Primer Name | Sequence (5' to 3') | Location |
| ------------- | ---- | ------ | ----------- | ------------------- | -------- |
| 5 | GSTA1 | 42 | 5A3-4 | GCA CTG CAC CAA CTT CAT CCC ATC GAT C | PRIMER styro box |
| 5 | GSTA1 nested | 43 | 5A3-5 | CAG CAG GGA TCC ATC TTG GCA TAA CTT C | PRIMER styro box |
| 5 | GSTA2 | 65 | 5A2-1 | CAC ATC GGC TGC TTG AAA AGG GAG AG | STOCK II(B) styro box |
| 5 | GSTA2 nested | 101 | 5A2-3 | GTT CCC TCC ACA TAC ATA TCA ATC | PRIMER styro box |
| 5 | GSTA3 | 52 | 5A3-R2 | GCT ACA TAA TTT TCA TCT GGT GGG GGT TTT C | PRIMER styro box |
| 5 | GSTA3 nested | 61 | 5A3-R5 | TGC CCA GCT GAA TCG GTT TCC CAC AA | STOCK II(B) styro box |
| 5 | GSTA4 | 3 | 5'-CDS3 | GCC AAC AAG AAA GTC CTG GCC ATG GTC | STOCK II(B) styro box |
| 5 | GSTA4 nested | 13 | 5-CDS6 | CAT GTC AAT CAG GGC TCT CTC CTT CAG GTC | PRIMER styro box |
| 3 | GSTA1 | 56 | 1A3-2 | GAT GAA CGT CGT CCA ACC AGC AGA TA | PRIMER styro box |
| 3 | GSTA1 nested | 59 | 1A3-5 | TTT AGC GGT GGA AGA GTC GAA GCC TGA T | PRIMER styro box |
| 3 | GSTA2 | 102 | 3A2-1 | CTC TCC CTT TTC AAG CAG CCG ATG TG | STOCK II(B) styro box |
| 3 | GSTA2 nested | 103 | 3A2-2 | CCA TGG TCA GGA TTA TCT TGT TGG CA | PRIMER styro box |
| 3 | GSTA3 | 45 | 3A3-2 | GCC ACA ATT GCA GAG AAG GCA ACA GAG | PRIMER styro box |
| 3 | GSTA3 nested | 47 | 3A3-4 | AGC AGT GGA GGA GAA AGT GCC TTC TGT G | PRIMER styro box |
| 3 | GSTA4 | 137 (and 5) | 3-CDS2 | CCC GTT CTT ATC AGC TGA GGA TAA GGT G | STOCK II(B) styro box |
| 3 | GSTA4 nested | 4 | 3'-CDS1 | AAG GCT ACA AGC AGG TAC TTC CCA G | PRIMER styro box |

The primers used to amplify the cds sequence are listed in table 2 of Kim et al 2010. The reverse primer for GSTA2 is not in the lab Primer Inventory. I searched for anything remotely similar.

| Name in table | Gene-Direction | Lab ID | Primer Name | Sequence (5' to 3') | Location |
| ------------- | -------------- | ------ | ----------- | ------------------- | -------- |
| A1.1_F | GSTA1.1-F | 91 | A1F2(CT) | ATG TCT GGG AAG CCA GTT CTG | STOCK II(B) styro box |
| A1.1_R | GSTA1.1-R | 92 | A1R2(CT) | TCA ATG GAA AAT TGC CAT CA | STOCK II(B) styro box |
| A1.2_F | GSTA1.2-R | 91 | A1F2(CT) | ATG TCT GGG AAG CCA GTT CTG | STOCK II(B) styro box |
| A1.2_R | GSTA1.2-R | 139 | A1bR1 | TCA GTG GAA AAT TGC TAT CAC ACT | STOCK II(B) styro box |
| A1.3_F | GSTA1.3-F | 89 | A1F1(CT) | ATG TCT GGG AAG CCA GTT CT | STOCK II(B) styro box |
| A1.3_R | GSTA1.3-R | 145 | A1cR2 | TCA ACT GAA AAT TGC CAG CAG | STOCK II(B) styro box |
| A2_F | GSTA2-F | 70 | A2F1 | ATG GCG GAG AAA CCT AAG CTT CAC TAT ACC A | STOCK II(B) styro box |
| A2_R | GSTA2-R | ?? | ?? | TAA TGT GAG GAA AAT ATT CAG TTT CTA AGG CCG C | ???? |
| A3_F | GSTA3-F | 79 | A3_F2(SB) | ATG TCG GAG AAG CCC AGG CTC ACC TA | PRIMER styro box |
| A3_R | GSTA3-R | 80 | A3_R1(SB) | TCA GTC TAG CTT AAA AAT TTT CAT CAC AGT TGC | PRIMER styro box |
| A4_F | GSTA4-F | 22 | tGST_F | ATG GCT GCA AAA CCT GTA CTC TAC TAC | PRIMER styro box |
| A4_R | GSTA4-R | 28 | tGST_R3 | CTA ATT TGG TTT TAC ATC ATA ATA CAT CCG G | PRIMER styro box |

# Notes on June's labbooks:

  * I'm almost certain UMP=Universal Primer A Mix from [ Clonetech SmartRACE protocol ]( http://download.bioon.com.cn/upload/month_0812/20081208_332e38f56ce3add500c3zCJt4vYDjxtY.attach.pdf ).
  * It looks like she was using Commercial Turkey (CT - Nicholas according to the published manuscript), Standard Bronze heritage (SB), Royal Palm heritage (RP), Eastern Wild (EW), Rio Grande wild (RGW) and Naragansett (NT- I thought this might be Nicholas, but on book 1 page 57 it says "NT: Nagassent").
  * I see lots of 5' RACE PCR, nested PCR, and cloning (transformation, ligations and colony PCR), but nothing about generating the RACE-ready cDNA from RNA or which samples were the sources of the RNA.

# Notes on June's freezer box contents:

  * -80 freezer boxes tagged with June or RACE:
      * 9-4 RACE cloning products from 9/30/08?
      * 9-5 RACE cloning products from 4/1/09?
      * 9-6 RACE cloning products from 9/30/08
      * 12-1 Clontech Smart II A Oligos, Turkey RNA, Clonetech control RNA
      * 13-5 Lysate?
      * 13-8 Multiple tubes with red liquid labeled 4TC and 7TC. Is this cytosol? Does TC = CT (commercial turkey)?
      * 13-9 Cytosol
      * 14-2 RNA for EW, RG, NT, SB, CT
      * 14-3 Competent cells and cloning media
      * 14-5 Cloning supplies?
      * 14-6 Competent cells, Clontech Smart II A Oligos
  * Galaxy -20 freezer boxes
      * "Stock" box - I think this contains the RACE-ready cDNA (inconsistently labeled but with 5-CDS, 5-CDNA, 3-CDS, or 3-CDNA in the name). I can tell which are which turkey variety but not always which sample of each variety -- and I can't find anything to tie the sample numbers back to a specific bird or even anything that makes it clear whether they were just replicates from a single bird of each variety.  There are also cloned products (names like CL3) in this box..
      * "RACE" box - Contains buffers, primers, reagents, and control template from the SMART RACE kit and Advantage 2 SA PCR kit. Many appear to have dried up.
      * "Blank" box (no label) - I can't identify most of this box, but it does contain what looks like RACE-ready CDNA for CT-3 (labeled as 3-CDNA CT-3).

# Tox Drive files:

  * I found the genbank submission files for the sequences from Kim et al 2010,
  * a record of a Clontech SMARTer RACE kit purchased in 2010 (after June's RACE work, and an updated version from the SMART RACE kit she used)
  * But no sequencing results or anything else RACE-related.
