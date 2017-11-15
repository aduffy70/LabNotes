---
title: GBS meeting prep
date: 2016-02-29T10:21:20+00:00
layout: post
categories:
  - t. intricatum gbs
---
  * Don Hauber's Salvinia GBS data is on an external drive attached to the workstation
      * /media/usb1/salvinia (aka ~/salvinia)
      * That directory has read/write access for everyone, but the files themselves are read only so no one accidentally overwrites them.
      * 2 files:
          * Barcodes-Salvinia.csv with the barcodes to sample ID (well numbers from the plate) conversion table
          * gomp001\_NoIndex\_L003\_R1\_001.fastq with 80Gb of data (309,878,631 reads)
  * Processing I have done already is in /media/usb1/aduffy/gomp001\_NoIndex\_L003\_R1\_001 (aka ~/BigDisc/aduffy/gomp001\_NoIndex\_L003\_R1\_001)
      * Unless specified, steps were done using my gbs-tools scripts
      * Ran FastQC on the raw data
          * output in gomp001\_NoIndex\_L003\_R1\_001_fastqc/
      * Explored how well sequences match the expected barcodes+cutsite
          * 283 million reads (91%) exactly match one of the expected barcode+cutsites
          * 294 million reads (95%) can be unambiguously assigned to a barcode with distance<=1 (NOT allowing indels)
      * For reads with exact matches or just 1 error:
          * Added ::the\_cutsite:the\_sample\_id:the\_barcode to the end of the description line
          * Trimmed the barcode and cutsite bases from the sequence line and the quality line
          * 293,813,500 reads saved to correctedreads.fastq (ambiguousreads.fastq and distantreads.fastq contain the other reads)
      * Trimmed illumina adapter sequences from the 3' end with cutadapt
          * saved to cutadaptOUT.fastq
      * Removed empty sequences - there aren't many but they would cause problems downstream
          * saved 293,813,448 reads to removeemptysequencesOUT.fastq
      * Used fastq\_quality\_trimmer to remove low quality (<20) bases from the 3′ end of reads and discard anything <30bp after trimming
          * saved 292,169,102 reads to fastq\_quality\_trimmerOUT.fastq
