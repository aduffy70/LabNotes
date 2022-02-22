---
title: Salvinia GBS data summary
date: 2014-12-04T13:26:30+00:00
layout: post
categories:
  - for others
---
Summary of Don Hauber's Salvinia GBS dataset from GBS_2014-11-24:

  * <span style="line-height: 13px;">309,878,631 total reads</span>
  * 283 million reads (91%) exactly match one of the expected barcode+cutsites
  * 296 million reads (95%) can be unambiguously assigned to a barcode with distance<=2
  * 79 barcodes have over 1 million reads
  * 8 barcodes have under 50 thousand reads

How I arrived at these numbers:

  * <span style="line-height: 13px;">Unzipped fastq.gz file (gomp001_NoIndex_L003_R1_001.fastq.gz)</span>
  * Run fastqc w/default parameters
  * Find unique 16mers (findunique12mers.py) and assign to barcodes (sortbarcodes-wobble.py & sortbarcodes-indels.py)
  * Prepare my basic quality report
