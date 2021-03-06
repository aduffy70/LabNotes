---
title: Next steps Crepidomanes GBS
date: 2015-01-05T14:41:04+00:00
layout: post
categories:
  - t. intricatum gbs
---
  * Found a minor problem with the trimbarcodes.py script. I hardcoded the length of the RE stickyend sequence so when it splits the barcode+stickyend into a separate barcode and stickyend it is using the last 4 characters for the stickyend and everything else for the barcode. On the Crepidomanes dataset, that stickyend length is actually 6 so all the stickyends in the description are missing the leading CA and all the barcodes in the description have an extra CA at the end. The sequence and quality line are being trimmed correctly. The only error is in the header line so it isn't really a critical error. But I fixed the script by making the stickyend length a command line option and reran on Crepidomanes (trimbarcodesOUT-fixed.fastq).
  * Next steps on Crepidomanes GBS data
      * Ran fastx\_quality\_stats on cutadaptOUT2.fastq to get a baseline for the quality before trimming
          * Failed at first because I have some zero length sequences after running cutadapt so I made a script to only output the sequences with non-zero lengths in a fastq file (removeemptysequences.py). I had 240,389,602 non-zero length sequences and 49 empty sequences. Ran fastx\_quality\_stats on removeemptysequencesOUT.fastq
