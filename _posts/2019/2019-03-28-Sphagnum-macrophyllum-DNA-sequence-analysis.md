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
  * Ran RAxML bootstrap and likelihood search using separate partitions for each locus with all samples. Ran 1000 bootstraps which is overkill but only took ~4 hours anyway.
    - One cyclophyllum (P9 NC Carteret) fell with the outgroup which isn't interesting or relevant to our questions so I removed it from the alignment.
    - RAxML complained about 31 sequences being exact duplicates so I removed them. Actually, I let RAxML remove them and just renamed the samples in the reduced alignment file it created to indicate they represent multiple samples. In all but one case they were samples of the same species from the same site. The other was cyclophyllum from SC and MS. The name now includes both states.
    - It also complained about 2 alignment columns with entirely undetermined columns so I let RAxML remove those too and create the updated partition file for me.
  * Re-ran RAxML using this reduced/renamed dataset of 242 samples and 4358 alignment positions.

# Results

  * Southern macrophyllum is supported as sister to S. cribrosum.
  * Norther macrophyllum is separate and falls with cyclophyllum and pylaesii, but relationships among those three are not well resolved.
  * So we essentially have an unresolved polytomy with pylaesii, cyclophyllum, Northern macrophyllum and Southern macrophyllum+cribrosum

![Maximum likelihood tree cartoon][image1]

[image1]:{{site.image_path}}S_macrophyllum_ML_tree-cartoon.png
