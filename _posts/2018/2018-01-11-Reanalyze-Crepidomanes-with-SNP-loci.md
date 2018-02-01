---
title:  Re-analyze Crepidomanes with SNP loci
date:  2018-01-11
layout: post
categories:
  - t. intricatum gbs
---
# Problem

When ipyrad filters loci by sample coverage it does it for the whole locus, which may have multiple SNPs. Because read lengths differ, not all SNPs will have the same sample coverage as the whole locus so when we randomly pick one SNP for the ustr output, we end up with some SNP loci that don't meet the sample coverage cutoff we requested. That means our dataset contains more missing data than expected.

For example, my c85_dip_s27 dataset has 123 loci, but ~45% of them don't actually have coverage in 27 samples. ~10% of them have coverage in less than 13 samples!

Further complicating things, because ipyrad randomly picks one SNP per locus for the ustr dataset, when you do multiple ipyrad runs you aren't getting the same SNP loci. So my c85_dip_s27 dataset isn't actually a subset of my c85_dip_s18 dataset.

# Solution
If I start with an ipyrad dataset with a low cutoff, I can use a script to filter SNP loci that don't actually meet that specified cutoff--or any higher cutoff. By using the same ipyrad dataset and filtering for different cutoffs, I can get datasets that are actually subsets of each other. My resulting datasets will have fewer loci, but the loci they have will be better and should contain more signal with less noise.

# Re-analysis

Started with c85_dip_s6.stru from ipyrad.
  * I don't plan to make any datasets with coverage in <6 samples so this is a good starting point.
  * I didn't use s4 because it has many more loci and so takes longer to process.
  * Also, when I filter them down to high coverage SNP loci, the s6 yields a few more SNP loci than the s4 (because a few more of the SNPs chosen by random happen to have higher coverage in the s6).
  * The ideal would be to modify ipyrad to generate a ustr with the SNP with highest coverage for each locus rather than a randomly selected SNP for each locus, but I doubt the few extra loci I'd keep are worth the time it would take. It isn't as simple as just parsing the str file, because there is nothing in the str file to indicate which SNP loci come from the same ipyrad locus.

## Filter ipyrad loci to SNP loci

I made 4 filtered datasets:
  * snp6 (30242 loci)
  * snp18 (33% coverage - 578 loci)
  * snp27 (50% coverage - 69 loci)
  * snp36 (66% coverage - 14 loci)

## Identify likely mixed samples:

Structure
  * For each dataset, find the optimal K. Tested K=1 to 20, with 5 reps each. 100K burnin/250K MCMC.
  * For each dataset, do 100 runs at K3 to check for consistency of species assignment.
    - snp18
      - best 1-27 (Ln>-8565): crep = c1+c3. van+did = c2.
      - 28-84 (Ln>8741): crep = c1. van = c2. did = c3.
      - 85 (Ln>8745): crep = c1. van = c2. did = c2 + c3.
      - 86-99 (Ln>8786): crep = c1. van = c2. did = c3.
      - 100 (Ln>8911): Did sporophyte assigned to all three clusters.
    - snp27
      - best 1-91 (Ln>-707): crep = c1. van = c2. did = c3.
      - 92-100 Did sporophyte assigned to all three clusters.
    - snp36
      - best 1-66 (Ln>-112) : crep = c1. van = c2. did = c3.
      - 67-91 (Ln>-182): crep = c1+c3. van+did = c2.
      - 92-100 (Ln>-674): Did sporophyte assigned to all three clusters.
  * Combine runs to get a mean (and min/max) probability of assignment to crepidomanes for each run.
    * Non-Crep (always <10% Crep)- 13 samples: S02, 11, 18, 23, 26, 29, 30, 31, 50, 51, 52, 53, 54
    * Mixed-mostly-Crep (50-90% Crep) - 9 samples: S05, 14, 17, 22, 28, 34, 36, 37, 39
    * Mixed - 10 samples: S01, 07, 12, 13, 19, 20, 21, 25, 32, 49
    * Crep (>90% crep)- 22 samples: S03, 04, 06, 08, 09, 10, 15, 16, 24, 27, 33, 35, 38, 40, 41, 42, 43, 44, 45, 46, 47, 48


Neighbor joining trees and heatmaps
  * Plot structure assignments above onto NJS trees
  * Heatmaps of distance
  * Heatmaps of distance by allele presence/absence
  * NJS trees of distance by allele presence/absence

Generate 4 datasets (start with snp6.stru):
  * Crep_unfiltered: 22 Crep samples with all loci present in 50% (11 samples)
    - Remove Mixed-mostly-Crep, Mixed, and Non-Crep samples from snp6.stru
    - Filter for loci present in 11+ samples
    - 22 samples, 2176 loci
  * Crep_filtered: 22 Crep samples with Crep-only loci present in 50% (11 samples)
    - Remove loci present in Non-Crep samples from snp6.stru
    - Remove Mixed-mostly-Crep, Mixed, and Non-Crep samples
    - Filter for loci present in 11+ samples
    - 22 samples, 2050 loci
  * Mostly_Crep_filtered: 22 Crep + 9 Mixed-mostly Crep with Crep-only loci present in 50% (16 samples)
    - Remove loci present in Non-Crep samples from snp6.stru
    - Remove Mixed, and Non-Crep samples
    - Filter for loci present in 16+ samples
    - 31 samples, 242 loci
  * All_filtered: 22 Crep + 9 Mixed-mostly Crep + 10 Mixed with Crep-only loci present in 50% (21 samples)
    - Remove loci present in Non-Crep samples from snp6.stru
    - Remove Non-Crep samples
    - Filter for loci present in 21+ samples
    - 41 samples, 173 loci
