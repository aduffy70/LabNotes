---
title: Salvinia GBS preprocessing
date: 2014-12-17T15:01:36+00:00
layout: post
categories:
  - for others
---
  * Corrected and trimmed Don Hauber's GBS data. We ran cutadapt first but because it cut at least one of the reads shorter than the barcode (indicating that it found the 2nd adapter sequence in error!) my barcode correcting script wouldn't run on the cutadapt output file. So I ran my scripts on the original fastq file and then ran cutadapt after (the "normal" process).
