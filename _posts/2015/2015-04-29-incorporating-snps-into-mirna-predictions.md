---
title: Incorporating SNPs into miRNA predictions
date: 2015-04-29T14:36:53+00:00
layout: post
categories:
  - gsta mirna
---
SNP data sources:

  * Kent Reeds' table of SNPs in the GSTA3-GSTA4 intergenic region (GSTA3\_promoter\_summary.xlsx)
  * Deepika Gaddam's intergenic sequences
  * SNPs for cds? We should have them- that is how they knew there were differences between the cds of wild and domesticated birds.

Process:

  1. <del>Make a list of mRNA sequence positions that are predicted miRNA targets.</del>
  2. <del>Convert those positions to BAC positions</del>
  3. <del>Make a list of BAC positions that have SNPs</del>
  4. <del>Compare the lists</del> 

__Almost every position is a predicted target so this won't work. Instead...__


  1. Make of list of BAC positions (within the mRNA ranges) that have SNPs.
  2. Convert those to mRNA sequence positions.
  3. Get a list of miRNAs that target sites that include those positions within them.

BAC positions with SNPs (from Reed's table of GSTA3-4 intergenic SNPs) that are within the UTRs (numbers in parenthesis are position within the estimated mRNA):

  * GSTA4 3'UTR: 151241 (979), 151389 (1127), 151390 (1128), 151465 (1203), 151481 (1219), 151494 (1232), 151505 (1243), 151518 (1256), 151520 (1258), 151542 (1280)
  * GSTA3 5'UTR: 159998 (12), 160003 (17), 160004 (18), 160005 (19), 160006 (20), 160007 (21), 160008 (22), 160009 (23), 160010 (24), 160019 (33), 162696 (62)
