---
title: Solution- memory limits building GBS genotypes table
date: 2015-03-26T15:02:42+00:00
layout: post
categories:
  - t. intricatum gbs
---
  * Crepidomanes GBS
    * Got the genotypes table building by pre-filtering the list of genotypes to remove extremely low-coverage loci (<10 samples; took the list of loci in the table from 409 million to 80 million) and by building my table in a dictionary where the values are concatenated strings of 44 genotypes (125 bytes per value) instead of lists of genotypes (2078 bytes per value).  This kept the script to <25% of the total memory on the workstation (~18/85GB).
    * When I have my table, I want to make a table of  # of loci shared between each pair of samples. This may highlight if I have  one or more loci that don't fit in with everything else (as might be expected if I have a misidentified gametophyte)
