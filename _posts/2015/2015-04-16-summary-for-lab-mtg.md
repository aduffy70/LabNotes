---
title: Summary for lab mtg - miRNA targeting in GSTA mRNAs
date: 2015-04-16T09:20:55+00:00
layout: post
categories:
  - gsta mirna
---
# miRNA sequences in Turkey

  * 609 precursor miRNAs (from Ensemble, Genbank, & RNACentral)
    * 478 unique
  * 956 mature miRNAs (from MatureBayes)
    * 875 unique

# GSTA mRNA sequences

  * Partial mRNA sequences from Kim2010 5'-RACE & 3'-RACE (missing UTR motifs, RACE artifacts?)
  * Predicted mRNA sequences from Ensembl (untrusted assembly, automated annotations have been repealed)
  * Tangled mess of mRNA sequences from LiverTranscriptome
  * BAC DNA sequence (trusted) from Kim2010

## Process:

  * Coding sequence (cds)
      * mRNA cds from Kim2010 matches BAC - Use it!
  * UTRs
    * BLAST partial UTR from Kim2010 against BAC to identify exons and find where it ends
    * BLAST the exons + upstream BAC sequence against LiverTranscriptome to extend the ends and identify additional exons.
    * BLAST any upstream sequence from the LiverTranscriptome against BAC to find additional exons
    * Verify expected UTR motifs
  * Concatenate extended 5'UTR, cds, and extended 3'UTR

## GSTA4

  * Kim2010 mRNA: 845bp (cds 86-775)
  * Extended mRNA: 1461 (cds 153-842)

## GSTA3

  * Kim2010 mRNA: 851bp (cds 72-743)
  * Extended mRNA: 923bp (cds 82-753)

# miRNA targeting

  * StarMir:
    * 5' seed matches
    * Hybridization energy
    * Access in the folded mRNA

## GSTA4

  * 3'UTR: 129 interactions
  * 5'UTR: 25 interactions
  * cds: 119 interactions

## GSTA3

  * 3'UTR: 26 interactions
  * 5'UTR: 16 interactions
  * cds: 144 interactions

# Next steps

  * Include other GSTAs
  * How many miRNAs are involved in these potential interactions?
  * Incorporate SNP data from other varieties. Which of these sites include SNPs? Do SNPs create additional sites?
  * Can we identify these miRNAs in the raw LiverTranscriptome reads?
