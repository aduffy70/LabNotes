---
title: Notes from GBS discussion w/Zach Gompert and Paul Wolf
date: 2014-08-19T23:59:06+00:00
layout: post
categories:
  - t. intricatum gbs
---
From 8/19/2014

Questions I had going in:

  * Sorting barcodes first vs assembling first?
  * Recommendations for sorting tools?
  * Recommendations for assembly tools?
  * Weirdness in my data (only one common barcode? What could the other 170M reads be? Am I misapplying the sorting tools?)

Possible tools for sorting by barcode:

  * Uneak, GBS barcode splitter, Checkout

Things to look for in the sequences:

  * Do we see the Illumina adapters in the sequence?
  * How many reads have N in the barcode, and how many have multiple Ns in the barcode?
  * Is the cutsite on EVERY read?
  * Track how many of each non-barcode sequence there is
  * make sure there aren't high frequencies of barcodes I didn’t use
  * How does the diversity collapse as you allow increasing similarity? Plotting pairwise similarity between loci (similar to the concept of the Ks plots)

&nbsp;
