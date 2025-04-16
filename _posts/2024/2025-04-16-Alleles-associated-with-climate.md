---
title:  Alleles associated with climate
date:  2024-02-29
layout: post
categories:
  - sphagnum magellanicum
  - ideas
---

In *Sphagnum diabolicum* and *Sphagnum magniae* are there alleles that are associated with climate variables?

# Problem

  * Species are associated with climate variables so alleles associated with species are also associated with climate.
  * Because of admixture/ILS we have very few fixed "diabolicum alleles" or "magniae alleles" that we could look for in admixed samples.  However, our previous attempts to identify fixed alleles between species included admixed samples. What if I identify fixed alleles in a subset of samples with very low evidence of admixture? Then look for those alleles in the admixture zone.
  
# Possible solution notes

Point biserial correlation = tests for correlation between a continuous variable and a binary variable. 
  * Climate variables = continuous. 
  * Allele at a locus = binary. 
  
So I could identify all loci where climate and allele are significantly correlated after making a huge correction for multiple tests.

Doing this in all samples will likely find many since spp and climate are strongly correlated. We will essentially be identifying alleles with different allele frequencies between species.

But in the admixture zone there is less correlation between spp and climate because spp is a fuzzy concept due to all the admixture there. So the alleles identified would be the ones that are actually associated with climate. But does species correlate with climate in the admixture zone?

The best evidence of allele to climate correlations would be if admixture zone samples don't also show species to climate correlations.  That is, the admixture occurring in the admixture zone uncouples the association between spp and climate but the climate-important alleles are still associated.  THIS! identufy the alleles that are more strongly associated with climate than the species are associated with climate (in the admixture zone).

Would a statistical test of two correlations be useful? Allele A is more correlated to climate than species is correlated to climate?  For example, Fishers r-to-z transformation?

Or... Allele A is more correlated to climate than Allele A is correlated to species? Be then I am comparing a binary-continuous correlation to a binary-binary correlation.
