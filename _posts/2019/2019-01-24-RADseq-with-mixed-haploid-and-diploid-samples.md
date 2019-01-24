---
title:  RADseq with mixed haploid and diploid samples
date:  2019-01-24
layout: post
categories:
  - sphagnum
  - t. intricatum gbs
  - ideas
---
# Thoughts on analyzing datasets with diploid and haploid samples:

Running ipyrad with haploid base calling will throw out information for heterozygous diploids (randomly assigning them one of the alleles). Loci where all diploid samples are homozygous wouldn't be affected, but loci with some heterozygous samples (which should be all or most under HWE) would add noise to the dataset.

Running with diploid base calling will cause some haploids to be incorrectly called as heterozygous. This is more likely to be a problem if error rates are high (either in general or in specific samples) or at loci with low readcounts (the majority of loci in our RADseq datasets).

If we know which samples are the haploids, we could adjust for it after the fact by recoding loci using one of the output formats that include readcounts for the two alleles.

Is it possible in ipyrad to call genotypes separately in haploid and diploid samples and then merge the assemblies afterward? This would require knowing the ploidy of samples upfront or trying to determine ploidy by calling bases as haploid and watching for samples appear to have unusually high error rates (the likely diploids) or by calling bases as diploid and watching for samples with unusually low heterozygosity rates (the haploids). Unfortunately, factors other than ploidy could also lead to those low or high rates.

In a dataset with a known mixture of haploid and diploid samples does this work?

Does any of this actually matter in practice?

We have an unpublished dataset that would be good for looking at this... the "potato" data (from Yan's Pacific Rim work?) contains many pairs of related taxa where one is haploid and the other diploid. Raw data is in the lab dropbox at ShawLab/JohnMcVay/RADtag_order#1353/. The barcode data is ShawLab/JohnMcVay/RAD_voucher.xls.

Relevant paper related to this [dataset is here][1]

[1]: http://dx.doi.org/10.1111/bij.12586
