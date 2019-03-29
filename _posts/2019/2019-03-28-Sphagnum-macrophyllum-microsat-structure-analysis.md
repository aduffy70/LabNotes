---
title:  Sphagnum macrophyllum microsat structure analysis
date:  2019-03-28
layout: post
categories:
  - sphagnum
---

# Problem

We have evidence for (Northern NJ/DE to Newfoundland) and Southern (DE/VA to FL/TX) groups of S. macrophyllum and want to see how they fit in with each other and related species. Note- only a subset of these appear to be the same samples used in the S. macrophyllum DNA sequence analysis.

# Data
  * Original "rawdata" spreadsheet with microsat data was in ShawLab/Aaron/Subsegunda_geography_diploids and Blanka Aguero added georeference data.
  * My files are in ShawLab/Aaron/Active/S_macrophyllum_biogeography/structure_output-from_microsats. I removed samples from the dataset that have no vouchers available or no accession info.
    - 223 samples remain (5 removed)
    - 16 loci

# Analysis

  * Mapped the georeference lat/long on Google maps [(available here)][1] to get the state/province for each sample.
  * Ran structure on the Duke Computing Cluster with all 223 samples and 16 loci, evaluated Kmeans and Evanno deltaK with StructureHarvester, and combined runs with CLUMPP, and visualized in R.
    - 10 replicates each at K1-K10
    - Best K=2
  * Some of the NC samples have the wrong county name in the samplename. The georeferenced locations are not in the counties included in the names, but in the spreadsheet of Herbarium info, the samples have the correct county listed for the georeference location. So, I changed the sample names to include the correct county on the ones that were incorrect:

| Sample | Co. in samplename | Co. in Herbarium info | Co. of coordinates |
| ------ | ----------------- | --------------------- | ------------------ |
| Z63 | Brunswick | Brunswick | Brunswick (Cape Fear River) |
| Z64 | Scotland | Brunswick | Brunswick (Green Swamp) |
| Z65 | Brunswick | Scotland | Scotland (Camerons Lake) |
| Z66 | Brunswick | Brunswick | Brunswick (Green Swamp) |    
| Z67 | Craven | Brunswick | Brunswick (Orton Pond) |
| Z68 | Craven | Craven | Craven (Croatan NF) |
| Z70 | Richmond | Brunswick | Brunswick (Orton Pond) |

# Result

  * At K=2 we have a split between Southern (TX, MS, FL, GA, SC, NC, VA, MD) and Northern (DE, NS, NF) with 3 of 20 DE samples grouped with Southern. NJ is split--the southernmost(!) 3 sites in Northern and sites 5-6 in Southern, and site 4 apparently admixed (80%N:20%S). Few other samples show any admixture and those are Southern with <5% Northern signal.
  * At K=3 MD becomes it's own group and the NJ that previously grouped with Southern appear admixed between MD and Southern. The NJ sample that was admixed N/S at K=2 is still admixed 80%N:20%S. A few Southern samples still show low levels of N admixture and a few now show MD admixture.
  * At higher levels the big pattern from K=3 holds and Southern samples all become admixed at varying levels between three sources with only weak geographic patterns to the genetic structure. 

[1]: https://drive.google.com/open?id=1DBN0Ub_KafXjANs2qlDufeXC6snAH43B&usp=sharing
