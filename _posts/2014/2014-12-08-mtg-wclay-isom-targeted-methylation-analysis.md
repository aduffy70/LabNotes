---
title: 'Mtg w/Clay Isom - targeted methylation analysis'
date: 2014-12-08T10:23:51+00:00
layout: post
categories:
  - gsta methylation
---
  * <span style="line-height: 13px;">Still not sure I understand why only G's on forward primers and only C's on reverse primers. Need to work that out, but it IS what works.</span>
  * He uses Sequenum EpiDesigner (free online tool) to design primers. It is similar to Primer3 but is designed specifically for making primers for bisulfite sequencing.
  * He recommends against using Ion Torrent (or 454) for bisulfite sequencing. Both platforms have problems handling mono-nucleotide runs, and bisulfite sequencing generally increases the number of mono-nucleotide runs as it reduces sequence complexity. He says others have used 454 for bisulfite sequencing projects (including Abby Benninghoff) with mixed results.
  * In their project they did not individually barcode the loci (there shouldn't be a need unless loci are so similar that read-length fragments can't be assigned to the correct locus), so they only had to use barcoding/indexing to identify the two types of embryos.
  * They amplified ~400bp fragments but there is no reason they can't be larger as long as you can get them to amplify. Longer fragments would actually improve an issue they had with most fragments being sheared in the same place, essentially splitting their fragment in half and leading to good coverage at the ends and the center, but lower coverage 1/4 and 3/4 along the fragments. Longer fragments would lead to a higher variety of different shearing patterns.
  * He is working on a similar project but with many more loci and has concerns about how to analyze the data. He may come looking for recommendations or assistance.
