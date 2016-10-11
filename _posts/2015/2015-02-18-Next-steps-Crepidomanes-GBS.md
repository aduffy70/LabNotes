---
title: Next steps Crepidomanes GBS
date: 2015-02-18T15:01:43+00:00
layout: post
categories:
  - t. intricatum gbs
---
  * Next steps GBS - pull reads for a couple of Don Hauber's most common samples and look for peaks in most common read proportions at 0.5, 0.67 or 0.75 that would suggest ploidy level. (This is the test to see if this method of finding ploidy will work). (Output from steps marked with ** were moved into Don's folder since he will likely want to perform these steps anyway.)
      * His cutadaptOUT.fastq still has the problem in the header barcodes/stickyend so:
          * I reran trimbarcodes.py using the fixed script**
          * Reran cutadapt**
      * Remove any empty sequences with removeemptysequences.py to avoid problems with fastx tools**
      * ran fastq\_quality\_trimmer from fastx tools to trim trailing low quality bases and discard reads under 30bp.**
      * Used splitfastq.py to pull out just G9-TTATGCATCA (~9M reads), C6-TTCTCATAA (~4M reads), and F2-ACTGAATA (~500K reads) as examples of samples with extreme, typical, and low read counts.
      * Converted them to fasta with fastq\_to\_fasta from fastx tools
      * Sorted them by decreasing read length with sort.pl
      * Moved the barcodes to the start with movefastabarcode.py so they don't get clipped by cdhit
      * clustered at 100% identity with cd-hit-454
      * renamed those clusters with renameclusters.py to retain counts in the next round of clustering
      * clustered those clusters at 0.978 identity (this identity doesn't allow for any reads with 2 differences to join a cluster - 85/87 = 0.977 and allows reads with 1 difference for all but the shortest reads - 45/46 = 0.978. We have so few reads <46bp it won't make a difference for this analysis)
      * Use plotclusterreadproportions.py to generate data to look for peaks at 0.5, 0.67, or 0.75 suggesting ploidy level.
      * I don't see clear peaks. Using G9 there does seem to be a lower peak, but it is just at or above 0.5. Is this a 0.67 peak shifted down due to reads with errors? C6 and F2 don't have anymore of a lower peak than my Crepidomanes samples. Not what I was hoping for.
