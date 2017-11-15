---
title: Ploidy in Crepidomanes GBS
date: 2015-02-11T14:56:22+00:00
layout: post
categories:
  - t. intricatum gbs
---
  * When we collapse unique reads, each cluster represents:
      * a single copy sequence that has no variation
      * one allele of a single copy locus
      * multiple identical high-copy sequences (i.e., that might have no variation or might have other alleles)
      * one of the above with errors
  * When we further collapse reads that differ by one base, the clusters that change represent:
      * invariant single copy sequences and errors
          * should have a high proportion of the 'true' sequence and others (error reads) at low frequencies
      * alleles of a single copy locus (and errors of one (both?) of those alleles
          * should have high proportions of 2 sequences (though the ratio of the two will depend on prevalence of each allele in my samples.
              * At the whole dataset level, an allele present in just a few samples may have as low a frequency as an error read
              * At the sample level the ratio of the two sequences should be based on ploidy and genotype - if each sample is a clone.
      * reads from multiple high-copy loci plus their errors and alleles
  * If I plot the proportion of reads in each cluster that are the most common read against the number of unique sequences in the cluster, I should get a large peak just below 1.0 representing all the single copy sequences (or homozygous loci), and a peak just below 0.5 (if I have diploids) or just below .66 (if I have triploids), or 0.75 and 0.5 if I have tetraploids.  Tetraploid gametophytes would be really unusual so anything beyond that is unlikely.
      * I did that at the whole dataset level and there is a clear peak below 1.0 and possible at 0.5.
          * At the dataset level the 0.5 or 0.66 peaks position would vary based on the number of homozygotes vs heterozygotes in the sample.
          * At the sample level those peaks should be more clear (assuming sample = clone) since the sample is either homozygous or heterozygous at each locus.
