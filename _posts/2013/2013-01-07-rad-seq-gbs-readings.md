---
title: 'RAD-seq & GBS readings'
date: 2013-01-07T13:41:17+00:00
layout: post
categories:
  - t. intricatum gbs
---
[ doi:10.1111/mec.12084 ]( http://doi.org/10.1111/mec.12084 ) Potential problems with RAD-seq and a possible solution to the 'dream filter' problem of homozygote bias in our GBS data:

  * GC PCR bias - higher GC content leads to higher read depths
  * fragment length bias - longer restriction cut lengths lead to higher read depths
  * presence or absence of restriction sites could make different alleles have drastically different fragment lengths

    >"A more conservative approach to handling the diffi-
    culties described earlier would be to discard any locus
    featuring an allele with restriction fragment length
    below around 2 kb. In a PstI C. elegans library, this
    would remove 6,254 of 24,826 unique RAD loci or 25%
    of the data set (ignoring repeats). While this figure is
    substantial, over 18,000 loci remain, a large data set for
    many applications, and these loci can be reliably geno-
    typed by the tools tested here (Fig. 7B)."

[ doi:10.1111/mec.12089 ]( http://doi.org/10.1111/mec.12089 ) Allele dropout (ADO) in RAD-seq data:

  * They recommend using reduced read depth as a sign of ADO at a locus.  But the last paper I read, suggests that we really can't use read depth to distinguish between homo- and heterozygotes, so how can we use it for this?

[ doi:10.1371/journal.pgen.1000862 ]( http://doi.org/10.1371/journal.pgen.1000862 ) An example using RAD-seq for population genetics and QTL identification.
