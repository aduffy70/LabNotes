---
title: 'Crepidomanes GBS analysis - second round'
date: 2015-05-11T13:57:24+00:00
layout: post
categories:
  - t. intricatum gbs
---
# Building on my preliminary analysis after discussing those results with Paul Wolf and Zach Gompert:

  * Confirm assumption of diploid gametophytes:
    * Emailed Martin to request a set of data for a known triploid and diploid to test my method for predicting ploidy - he says he doesn't have anything now.
  * What is my level of heterozygosity?
    * Median 0.03125
    * Mean 0.04060
    * Max 0.94120
  * What is the minor allele frequency distribution?
  * I have a Euclidean tree. Is it based on allele frequencies or genotype frequencies? Make one with each and compare.
  * I have Structure analysis but was it run using the admixture model w/correlated frequencies? Did I get reports of credibility intervals or just point estimates? Redo (if necessary) and repeat runs to ensure consistent results. Generate cluster plots for K2-6 (or more?) and see if any make geographic sense.
  * Divide data into high and low MAF data and run separately in Structure
  * Run Structure using just the 227 high coverage loci.

# Notes:

  * 9/2264 loci have 3 alleles. All others have 2.
  * Confirmed that adagenet calculates observed and expected heterozygosity as expected: It ignores missing data and calculates based on the allele frequencies of the data that is present.

    ![ Hobs vs Hexp by locus ]( {{site.image_path}}wp-content/uploads/2015/05/Hobs_vs_Hexp_by_locus.jpeg )

  * In my observed vs expected heterozygosity plot:
    * Generally, observed heterozygosity is higher than expected (62% of loci have Hobs > Hexp). Increased heterozygosity is expected under clonal reproduction (meselsen effect), but heterozygosity would also be higher if these are the product of hybridization.
    * The majority (95%) of the loci have either the maximum possible (2*MAF) or the minimum possible (0) heterozygosity. I added a line to this plot showing the max possible to make this clear. In other words, most of my loci have only 2 genotypes.
      * Either they have no heterozygosity so they only have AA and aa (756 loci, 33%),
      * or one allele is entirely bound up in heterozygotes so they have Aa and AA but no aa (1388 loci, 61%).
      * Only 119 loci (5%) have all three genotypes.
      * However, this pattern is heavily influenced by the loci with very low MAF values. If I break the expected heterozygosity range into sections each section looks quite different:

| Genotypes | overall | 0-0.1 | 0.1-0.2 | 0.2-0.3 | 0.3-0.4 | 0.4-0.5 |
| --------- | ------- | ----- | ------- | ------- | ------- | ------- |
|Aa AA | 1388 (61%) | 1302 (66%) | 61 (31%) | 15 (38%) | 8 (26%) | 5 (16%) |
| AA Aa aa | 119 (5%) | 31 (1.5%) | 42 (21%) | 15 (38%) | 11 (35%) | 17 (54%) |
| AA aa | 756 (33%) | 633 (32%) | 93 (47%) | 9 (23%) | 12 (38%) | 9 (29%) |
| total | 2264 | 1966 | 196 | 39 | 31 | 31 |

  * (Numbers don't add exactly acrossed columns because I had to use the less accurate method of separating points with maximum heterozygosity from the others, but these values should be close to accurate)
  * This seems to follow the expected pattern where rare alleles are more likely to be found only in heterozygotes while more common alleles are more likely to be found in a mix of heterozygotes and homozygotes.
  * I still don't understand why loci with NO heterozygosity are equally common (as a % of total) and in such high numbers in each of the sections though.
    * If there are 2 of a rare allele in 43 samples (86 alleles, allele frequency=0.023) the Hexp=0.045, so the probablity of NOT drawing a homozygote from that pool is 0.955.
    * The probability of doing that 43 times is 0.14 so we'd expect to have about 14% of loci with that very low MAF have no observed heterozygotes.
    * But we have about 30% of loci with no heterozygotes at ALL MAF values.
    * That probability drops quickly as MAF increases (MAF 0.1 -> a 2 in 10000 chance of a locus having no heterozygotes and at MAF 0.5 it should essentially never happen!). I have extremely high numbers of loci with no heterozygosity.

      ![ MAF distribution ]( {{site.image_path}}wp-content/uploads/2015/05/MAF_distribution.jpeg)

  * Comparing this to a dataset from known diploids (the sample flax dataset from npGeno):

    ![ Hobs vs Hexp npgeno sample ]( {{site.image_path}}wp-content/uploads/2015/05/Hobs_vs_Hexp_npgeno_sample.jpeg)

  * This dataset is a diploid but they included 2 different flax types so that might be expected to increase the number of loci with no heterozygosity (loci that are fixed in each type).
    * They have a much more even distribution of expected heterozygosities.

| Genotypes | overall | 0-0.1 | 0.1-0.2 | 0.2-0.3 | 0.3-0.4 | 0.4-0.5 |
| --------- | ------- | ----- | ------- | ------- | ------- | ------- |
| Aa AA | 23% | 64% | 9% | 7% | 15% | 23% |
| AA Aa aa | 51% | 0% | 52% | 70% | 62% | 70% |
| AA aa | 26% | 35% | 70% | 23% | 22% | 7% |
| total | 1624 | 324 | 362 | 347 | 279 | 312 |
