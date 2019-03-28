---
title:  Sphagnum macrophyllum DNA sequence analysis
date:  2019-03-28
layout: post
categories:
  - sphagnum
---
Maximum Likelihood analysis of Ping's S. macrophyllum DNA sequence data using RAxML.

# Problem

We have evidence for (Northern NJ/DE to Newfoundland) and Southern (DE/VA to FL/TX) groups of S. macrophyllum and want to see how they fit in with each other and related species.

# Data

Sequence data files were emailed from Jon Shaw and placed in ShawLab/Aaron/Active/S_macrophyllum_biogeography/Ping_files. Sequences are in nexus format, but I converted the combined alignment to fasta (using Aliview) and put that in the same folders. Also contains accession info and results of a previous parsimony analysis.
  * 6 loci: LL, LS, rapdA, rapdB, rapdF, trnG with 4360bp in combined alignment.
  * 275 taxa with multiple representatives of macrophyllum (North and South), cribrosum, cyclophyllum, and pylaesii, plus one microcarpum and guwanense as outgroup.

# Analysis

On the Duke Computing cluster:
  * Ran RAxML bootstrap and likelihood search using separate partitions for each locus with all samples. Ran 1000 bootstraps which is probably overkill but it only takes ~4 hours anyway.
    - One cyclophyllum (P9 NC Carteret) fell with the outgroup which isn't interesting or relevant to our questions so I removed it from the alignment.
    - RAxML complained about 31 sequences being exact duplicates so I removed them as well, renaming sequences to indicate they represent multiple samples. - It also complained about 2 alignment columns with entirely undetermined columns so I verified that they really were undetermined in the original nexus files (I didn't foul something up) but left them in since RAxML just treats them as missing data and in removing them I risk messing up the partition boundaries.
  * Re-ran RAxML using the reduced dataset of XXX samples.
