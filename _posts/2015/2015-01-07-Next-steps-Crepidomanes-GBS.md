---
title: Next steps Crepidomanes GBS
date: 2015-01-07T14:51:43+00:00
layout: post
categories:
  - t. intricatum gbs
---
  * Next steps on Crepidomanes GBS data
      * Used fastq\_quality\_trimmer to remove low quality (<20) bases from the 3' end of reads and discard anything <30bp after trimming: 
        ~~~
        fastq_quality_trimmer -t 20 -l 30 -v -i removeemptysequencesOUT-fixed.fastq -o fastq_quality_trimmerOUT.fastq
        ~~~
      * Now that I've gotten what are probably the worst bases of each read removed should I now get rid of any reads that don't have average quality above some higher threshold?
      * Rerun fastx\_quality\_stats to compare pre- and post- quality trimmed datasets
      * Wrote and ran getbarcodecounts.py to count the reads and bases assigned to each barcode. Ran it for pre-quality trimmed data. Need to run it post quality trimming for comparison
      * Convert fastq to fasta and try uclust
