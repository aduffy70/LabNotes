---
title:  Distance calculation methods
date:  2025-04-09
layout: post
categories:
  - sphagnum imbricatum
  - ideas
---

I want to better understand how R is calculating euclidean distances on allele counts. And specifically, I want to know whether what it is doing makes sense when I have datasets of mixed haploid and diploid samples.

# The way R is doing it now

When I import genotype data into the genind (or genlight) format, it is converting genotypes to allele counts like this (assuming a locus with only 2 alleles: G or A):

| Original genotype | Allele1 count | Allele2 count |
| ----------------- | ------------- | ------------- |
| Diploid GG | 2 | 0 |
| Diploid AA | 0 | 2 |
| Diploid AG | 1 | 1 |
| Haploid G | 2 | 0 |
| Haploid A | 0 | 2 |

So, haploids are being coded exactly the same as if they were homozygous diploids.

The euclidean distance between two samples is calculated as:
```
Distance = Sqrt( Summation( Difference_in_Locus1_allele1_counts^2 + Difference_in_Locus1_allele2_counts^2 ) ) 
```

Where the summation is over all alleles at all loci and the part under the sqrt gets scaled for missing data.

Example distances for a single locus:

| Genotypes | Allele counts | Distance |
| --------- | ------------- | -------- |
| GG / GG | 2 0 / 2 0 | 0 |
| GG / AG | 2 0 / 1 1 | 1.414 |
| GG / AA | 2 0 / 0 2 | 2.828 |

So, all of these have distance 0 and are all cases where all alleles are shared:
 * GG/GG (two homozygous diploids with the same alleles)
 * GG/G (a homozygous diploid and a haploid with the same allele)
 * AG/AG (two heterozygous diploids)
 * G/G (two haploids with the same allele)

These have distance 1.414 and are cases where one allele is shared and one is not:
  * GG/AG (a homozygous diploid and a heterozygous diploid)
  * AG/G (a heterozygous diploid and a haploid)
 
 And these have distance 2.828 and are cases where no alleles are shared:
  * GG/AA (two homozygous diploids with different alleles)
  * GG/A (a homozygous diploid and a haploid with a different allele)
  * G/A (two haploids with different alleles)
  
That all makes intuitive sense. But it seems wrong to be coding allele counts for haploids as homozygous diploids. Should I be re-coding the genind table to treat them as true haploids? What would that do to the distance calculations?

# If I re-coded allele counts to make haploids actually haploid

I could manually adjust the allele counts to look like this: 

| Original genotype | Allele1 count | Allele2 count |
| ----------------- | ------------- | ------------- |
| Diploid GG | 2 | 0 |
| Diploid AA | 0 | 2 |
| Diploid AG | 1 | 1 |
| Haploid G | 1 | 0 |
| Haploid A | 0 | 1 |

Example distances for a single locus:
  
| Genotypes | Allele counts | Distance |
| --------- | ------------- | -------- |
| GG / G | 2 0 / 1 0 | 1 |
| GG / A | 2 0 / 0 1 | 2.236 |
| AG / G | 1 1 / 1 0 | 1 |
| G / G | 1 0 / 1 0 | 0 |
| G / A | 1 0 / 0 1 | 1.414 |
     
So all of these have distance 0:
  * GG/GG
  * AG/AG
  * G/G
  
These all have distance 1:
  * GG/G
  * AG/G 
  
These have distance 1.414:
  * GG/AG
  * G/A
  
These have distance 2.236:
  * GG/A
  
These have distance 2.828:
  * GG/AA
  
This is not intuitive. Why would GG/G that has no mismatched alleles have the same distance as AG/G that does have a mismatched allele? I am staying with the default coding where haploids are treated as homozygous diploids. 
