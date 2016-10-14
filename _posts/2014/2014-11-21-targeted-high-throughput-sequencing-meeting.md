---
title: 'Meeting: Targeted high-throughput sequencing'
date: 2014-11-21T10:28:17+00:00
layout: post
categories:
  - gsta methylation
---
Attending: Paul Wolf, Carol Rowe, Zach Gompert

The problem: You have a large number of specific DNA fragments you want to sequence with good depth of coverage (in our case to find SNPs and methylation patterns in inter-GST regions, in Paul's to get all alleles of several genes from several fern species).

  * Paul and Carol proposed a solution using restriction cut sites in at the start of primers so you amplify the fragments, then cut them with two RE's and use the GBS library prep protocol to attach barcoded illumina primers. It lets you use already existing barcoded primers (saving $) but will give unpredictable results where there are restriction cut sites in the target sequence (which is likely).
  * Another solution would be to design fragment-specific PCR primers that include a barcode and Illumina adapter so you can amplify the sequences, pool, and send off for sequencing. With this method, you are paying to create many barcoded primers that will not be useful in the future.
  * Zach proposes a system where you make a set of generic barcodes with an Illumina adapter, barcode and a M13 binding site. Then you make a few fragment-specific primers that have the complement M13 site. You amplify the fragments with the fragment-specific primers, with the generic barcodes in the reaction so they get incorporated. The generic barcodes will be expensive but can be reused, so for any future project you just need to design a handful of fragment-specific primers with M13 complement sites.
  * Aaron Thomas has been doing something similar to Zach's proposal on 454 so if you wanted to do 454 sequencing the generic barcode primers are likely already available. Looking to the future, having a set of these available for Illumina MiSeq makes more sense due to the increased sequence for less expense. Paul is going to see if Emily Sessa is interested in splitting the cost to develop a set of 96 generic barcodes, since she will be wanting to do this same thing.
  * To use this on the inter-GST regions I would need overlapping pairs of primers that amplify fragments of ~550bp (a double-ended MiSeq run gives ~350bp reads from each end) each with an M13 complement at the beginning.  The primer sets Hardeep Rai designed may make too large of fragments.
