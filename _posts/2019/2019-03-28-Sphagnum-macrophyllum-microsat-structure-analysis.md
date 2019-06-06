---
title:  Sphagnum macrophyllum microsat structure analysis
date:  2019-03-28
layout: post
categories:
  - sphagnum subsecunda biogeography
---

# Problem

We have evidence for (Northern NJ/DE to Newfoundland) and Southern (DE/VA to FL/TX) groups of S. macrophyllum and want to see how they fit in with each other and related species. Note- only a subset of these appear to be the same samples used in the S. macrophyllum DNA sequence analysis.

# Data
  * I originally analyzed this using 223 samples (after removing 5 with no vouchers or accession info), but later realized there were many identical genotypes (clones--as far as we can tell). I reanalyzed using 138 individuals after removing all identical clones collected at the same site. A couple genotypes are found at more than one site so I left one of those clones for each site. These analysis results are for the "no_clone" data.
  * Original "rawdata" spreadsheet with microsat data (and Blanka Aguero's added georeference data) was in
  ~~~
  ShawLab/Aaron/Subsecunda_geography_diploids and Blanka Aguero added georeference data.
  ~~~
  * My files are in
  ~~~
  ShawLab/Aaron/Active/S_macrophyllum_biogeography/structure_output-from_microsats
  ~~~
  * I removed samples from the dataset that have no vouchers available or no accession info.
    - 138 samples remain
    - 16 loci
  * Mapped the georeference lat/long on Google maps [(available here)][1] to get the state/province for each sample.
  * Sites in some states (but not all) are numbered and included in the samplename in the raw data. In addition, in my files, I gave each site within each state a number. They are numbered from Southwest to Northeast to provide a way to estimate the relative positions of samples from their samplenames.
  * Some of the NC samples have the wrong county name in the samplename. The georeferenced locations are not in the counties included in the names, but in the spreadsheet of Herbarium info, the samples have the correct county listed for the georeference location. So, I updated my files to include the correct county on the ones that were incorrect:

  | Sample | Co. in samplename | Co. in Herbarium info | Co. of coordinates | Status |
  | ------ | ----------------- | --------------------- | ------------------ | ------ |
  | Z63 | Brunswick | Brunswick | Brunswick (Cape Fear River) | ok |
  | Z64 | Scotland | Brunswick | Brunswick (Green Swamp) | fixed |
  | Z65 | Brunswick | Scotland | Scotland (Camerons Lake) | fixed |
  | Z66 | Brunswick | Brunswick | Brunswick (Green Swamp) | ok |
  | Z67 | Craven | Brunswick | Brunswick (Orton Pond) | fixed |
  | Z68 | Craven | Craven | Craven (Croatan NF) | ok |
  | Z70 | Richmond | Brunswick | Brunswick (Orton Pond) | fixed |

# Analysis

## Structure

  * Ran structure on the Duke Computing Cluster with all 138 samples and 16 loci. Evaluated Kmeans and Evanno deltaK with StructureHarvester, combined replicates at each K with CLUMPP, and visualized in R.
    - 10 replicates each at K1-K10
    - Best K=2

## Isolation by distance:

  * Generated a table of all pairwise combinations of sample coordinates with my coordinatepairs.py script so I can use an online calculator to calculate the distances.
  * Got the distances in km with [online calculator][2] and log10 transformed (appropriate for distances in 2D space).
  * Categorized pairwise comparisons based on whether the two samples are in the same Structure-identified cluster or in different clusters, using my classifycomparisons.py script.
  * Looked for evidence of IBD with Mantel tests (9999 replicates) in R for all samples together and within the groups identified by Structure.

## PCA:

  * Ran PCA and looked at K2 structure clusters and state/province in R (dudi.pca).

# Results

## Structure

  * At K=2 we have a split between Southern (TX, MS, FL, GA, SC, NC, VA, MD) and Northern (NS, NF). DE and NJ samples are split between Northern and Southern.
    - 3 of 4 DE samples group with Southern; the other groups with Northern.
    - The southernmost(!) 4 NJ sites are in Northern and sites 5-6 in Southern.
    - No samples are admixed >5%. The most admixed samples are a NJ sample with 96.9%Northern:3.1%Southern and a SC sample with 97.1%Southern:2.9% Northern.
  * At K=3 and higher the K2 Northern cluster still appears whereas the K2 Southern cluster samples show admixture between multiple sources with only weak geographic patterns to the genetic structure. Two of the NJ samples that were in the K2 Northern cluster start showing admixture (~10%) from one or more of those multiple sources.

## Isolation by Distance

  * There is evidence of isolation by distance when considering all samples together (correlation=0.433, p<1e-04). But things are more interesting when we look at just Northern samples, just Southern samples and comparisons between Northern and Southern:
    - There is evidence of IBD in the Northern samples (correlation 0.581, p<7e-04)
    - There is evidence of IBD in the Southern samples (correlation 0.290, p<1e-04)
    - When comparing Northern and Southern samples, genetic distance and geographic distance are slightly negatively correlated, suggesting there is no IBD (no mantel test can be performed but we would be testing for positive correlation, which this clearly is not).  This is true even if I only include comparisons in the same geographic range as the within-cluster comparisons (0-2000km), so it is NOT an artifact of the greater geographic distances between clusters compared to within clusters.
    - Even though Northern and Southern samples span similar geographic distance ranges (0-2000km) the genetic distances between pairs of Northern samples are generally lower than the genetic distances between pairs of Southern samples (i.e., pairs of Northern samples are more genetically similar to each other than pairs of Southern samples are).
    - Pairwise genetic distances between Northern and Southern samples are higher than within-cluster comparisons (i.e., samples within each cluster are generally more similar to each other than they are to samples in the other cluster--further supporting the clustering assignments made by Structure).

    ![S macrophyllum Pairwise distance plot][image1]

## PCA

  * The first principal component accounts for 14.0% of the variation and clearly separates the Northern and Southern K2 Structure clusters.
  * The second PC separates 2 of the GA samples from the rest of the southern samples, but this second PC only accounts for 5.0% of the variation (which is very close the third PC at 4.7% and other PCs so it probably isn't meaningful).
  * The PCA does not clearly separate states/provinces, though the Northern samples are arranged _somewhat_ geographically along the second PC.

  ![S macrophyllum PCA plot][image2]

# Consistency with DNA sequence analysis

  * There is only partial overlap between the samples used in the microsat dataset and Ping's sequence data, but the samples that are represented in both give consistent results in both analyses.
    * The DE and NJ samples in the Southern cluster are also in the Southern clade and the Northern cluster samples are in the Northern clade.
  * In the ML tree, the branch lengths within the Northern clade are shorter than the branch lengths in the Southern clade, consistent with the smaller pairwise genetic distances in the Northern cluster vs the Southern cluster.

[1]: https://drive.google.com/open?id=1DBN0Ub_KafXjANs2qlDufeXC6snAH43B&usp=sharing
[2]: http://www.stevemorse.org/nearest/distancebatch.html
[image1]: {{site.image_path}}S_macrophyllum_pairwise_distance_plot.png
[image2]: {{site.image_path}}S_macrophyllum_PCA_plot.png
