---
title:  Normalizing parentage heterozygosities
date:  2025-06-09
layout: post
categories:
  - sphagnum imbricatum
  - ideas
---
When I calculate heterozygosity of diagnostic vs nondiagnostic alleles I end up using different sets of loci in each 2-species comparison because I only use loci with a minimum cutoff of sample coverage in the two species. That means overall heterozygosity differs in different 2-species comparisons, which affects how much heterozygosity can possibly be in the diagnostic loci. So, there needs to be some kind of normalization before I compare the numbers.

# Normalizations I tried

## "Normalization 1"

``` 
norm_het_diag = het_diag / het_nondiag
```

Assumes the true parental pair will be the one with more of the heterozygosity partitioned in the diagnostic than in the nondiagnostic loci. Gives the same order as "Normalization 3" in practice.

## "Normalization 2"

```
norm_het_diag = het_diag x mean_het_total
                           --------------
                              het_total
```

This scales the diagnostic heterozygosity to what it would be if the total heterozygosity for this 2-species pair was equal to the average total heterozygosity for all 2-species pairs. Seem logical but gives strange results on _Sphagnum alaskense_ in my initial tests.

## "Normalization 3"

```
norm_het_diag = het_diag x mean_het_nondiag
                           ----------------
                             het_nondiag
```

This is satisfying because it yields very high normalized diagnostic heterozygosity percentages for the top 2-species sets, but it is saying we expect the nondiagnostic heterozygosity to be the same in all 2-species comparisons and I don't think that is true. I think we would expect it to be lower in the true parental sets because more of the heterozygosity should be in the diagnostic loci leaving less for the nondiagnostic loci.

