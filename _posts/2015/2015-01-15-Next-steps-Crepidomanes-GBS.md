---
title: Next steps Crepidomanes GBS
date: 2015-01-15T14:39:35+00:00
layout: post
categories:
  - t. intricatum gbs
---
  * Next steps on Crepidomanes GBS analysis
    * Wrote splitfastq.py to split reads for known non-intricatum samples into separate files. This same script could also be used for splitting every barcode into its own file, removing specific barcodes from a dataset or selecting specific barcodes from a dataset. Used HTSeq library so it doesn't even need to know the starting sequence for your fastq header lines..
      * C. intricatum - 183,895,640 reads from 43 samples (mean=4.3M reads/sample)
      * D. petersii - 8,972,058 reads from 3 samples (mean=3.0M reads/sample)
      * T. boschianum -  45,037,737 reads from 8 samples (mean=5.6M reads/sample)
    * Try uclust, find out about cdhit, others?
