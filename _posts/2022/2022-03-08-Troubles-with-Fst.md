---
title:  Troubles with Fst
date:  2022-03-08
layout: post
categories:
  - sphagnum subsecunda biogeography
  - sphagnum magellanicum
  - sphagnum other
  - for others
---
## Background

I have used different methods of generating Fst values:

  * Recurvum project: I used the pairwise.fst function in the R 'hierfstat' package. This function no longer exists, and I don't know what version of Fst it was actually calculating. I called it "Fst" in the manuscript and no one questioned it.
  * Eastern North American _Sphagnum_ Biogeography project: I used Genalex (Blanka Aguero did it for me) for the diploids and pairwise.fst for the haploids because Genalex doesn't do Fst for haploids (or it wasn't in the output Blanka gave me).
  * Magellanicum/divinum project: Bryan Piatkowski calculated the Fst from a vcf file I provided. He doesn't say in the manuscript methods but I suspect vcftools (Marta Nieto-Lugilde also uses vcftools).

## The problem

For Juan's _Sphagnum subnitens_/_subfulvum_/_incundum_ data I tried using the 'hierfstat' pairwise.fst but found it no longer exists. It has been replaced by separate functions for Nei87 Fst, WC84 Fst, and a genet.dist method for Latter Fst. I ran those on Juan's data and got similar numbers for all, but they are high compared to the values from past projects (~0.8 vs <~0.5). So I reran the Recurvum group Fst using these new functions to compare. The new results are much higher than the old.

## The cause

I think ploidy is causing the difference.

Using the old pairwise.fst function I followed these steps:

  1. Convert structure data into a genind object. In this process I declare the ploidy as haploid, and I can see it did it correctly because the number of loci in the genind object is correct.
  1. Run pairwise.fst directly on the genind object. This function was running on an object that was specified as haploid so I assumed it was treating the data as haploid. This appears to be an incorrect assumption.

With the new functions, I follow these steps:

  1. Convert structure data into a genind object, declaring the ploidy as haploid.
  1. Convert the genind object to a hierfstat object. The hierfstat functions no longer run directly on genind objects.
  1. Run pairwise.Neifst or pairwise.WCfst, or genet.dist with method "WC84", "Nei87" or "Fst". All of these require specifying the ploidy ('diploid=FALSE' for haploids).

I think that when I was using the old pairwise.fst function it was treating the data as diploid data and combining every two adjacent loci into two alleles of a single locus. When I rerun the Recurvum data with the new pairwise.Neifst or pairwise.WCfst function and set the ploidy to diploid ('diploid=TRUE') I get results that are similar (but not exactly identical) to the results from the old function.

## The implications

The pairwise Fst values for the Recurvum and North American Biogeography projects are lower than they should be. Within each analysis the orders of the values are still the same--anything we inferred from one being higher than another is still correct--but we should not make direct comparisons between those Fst values and Fst values calculated using other methods.

Going forward I can now generate Fst values correctly, taking ploidy into account. I still want to compare results from calculations using vcftools, but it will have to wait until the Duke cluster maintenance is complete and I can generate a vcf file for Juan's data.
