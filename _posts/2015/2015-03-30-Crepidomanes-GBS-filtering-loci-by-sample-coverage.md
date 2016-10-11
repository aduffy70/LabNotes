---
title: Crepidomanes GBS- filtering loci by sample coverage
date: 2015-03-30T15:20:43+00:00
layout: post
categories:
  - t. intricatum gbs
---
  * Filter loci by sample by coverage - 70%. Used the GT1-del\_dupl\_missing\_threshold.pl script from npgeno. It also removes loci that have exactly duplicated genotypes. Not duplicated locus names, but actually duplicated genotype strings. I'm not sure whether it makes sense to remove these. I mean, if a lot of loci show the same pattern of variation among samples isn't that useful info I would WANT to keep? Going with it for now. It takes my locus count from 2286 to 2265 so it isn't changing much anyway. I'm not using GT2\_del\_at\_contig_pos.pl because it just removes loci close to the ends of contigs and I did quality cleaning that removed weak bases at the ends anyway.
