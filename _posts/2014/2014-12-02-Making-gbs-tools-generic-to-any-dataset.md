---
title: Making gbs-tools generic to any dataset
date: 2014-12-02T14:58:54+00:00
layout: post
categories:
  - t. intricatum gbs
---
  * Make gbs-tools generic for any dataset (sortbarcodes-zd.py and compare12merquality-zd.py are the last 2 that are dataset-specific?)
      * updated sortbarcodes-zd.py so it now works on barcodes with or without wobble nucleotides, and for any range of lengths of barcodes
      * I don't like how this script sorts 12mers into barcodes. It doesn't allow for indels.  In one example I found (if I found one, there are others) a read started with an N and would have been an exact match for one of the barcodes if the N represented 2 nucleotides rather than one. By not allowing indels and forcing the N to only represent 1 nucleotide, that read was a distant match for another barcode and was thrown away. I am going to make a new version of sortbarcodes.py that will allow for indels and calculate a Levenstein distance. Doing this for barcodes that have wobble nucleotides would be much more difficult, but since our current barcodes don't, we have an opportunity to better assign our reads to barcodes. So, I'll have one version of sortbarcodes.py that can handle wobble nucleotides but can't handle indels, and one version that can't handle wobble nucleotides but can handle indels.
