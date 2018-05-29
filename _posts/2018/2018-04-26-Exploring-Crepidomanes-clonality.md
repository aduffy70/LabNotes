---
title:  Exploring Crepidomanes clonality
date:  2018-04-26
layout: post
categories:
  - t. intricatum gbs
---
# Problem

In my Crepidomanes intricatum GBS dataset I'd initially assumed collections were most likely single clones and that multiple samples from a single collection should be genetically identical. But samples from within the same clone have genetic distance from each other. I don't know if this distance is because the collection contains more than one clone so the two samples really are genetically different, or if the distance is due to PCR/sequencing error, allele sampling differences, and missing data. If I had true replicates (the same DNA extraction run as multiple barcodes) I would know what amount of variability is expected between two samples that are really genetically identical, but I don't have any true replicates.

Original distances between samples from the same collection:
~~~
.    S05
S06 33.516

.    S09
S10 26.812

.    S16
S17 45.808

.    S38
S39 41.856

.    S43    S44    S46    S47
S44 34.249                     
S46 26.162 30.073              
S47 33.255 37.276 26.255       
S48 32.776 35.844 24.759 34.504
~~~

# Solution

I am going to try to bioinformatically generate replicates. I pooled the cleaned-filtered reads in each set of presumed clones and then randomly sampled from that pool to generate new re-sampled cleaned-filtered readsets with the same number of reads as the originals. I ran them through the rest of the ipyrad process to see how distances were affected in the results. Differences between resampled "clones" should be entirely due to differences in PCR/sequencing errors (an error read could be in one sample but not another), allele sampling (if only one allele got sampled, the samples could differ in inferred genotype at a locus), and amount of missing data.

Distances between re-sampled "clones":
~~~
.    S05
S06 29.387

.    S09
S10 28.373

.    S16
S17 29.44

.    S38
S39 26.172

.    S43    S44    S46    S47
S44 26.811                     
S46 26.019 23.208              
S47 28.551 27.255 24.662       
S48 28.703 27.069 23.084 28.393
~~~

The resampled distances are generally smaller, though not near zero and some are similar to the original distances. Because there are different numbers of loci in the ipyrad outputs for the original and resampled data distances are not directly comparable so I plotted the distances against the background distributions of pairwise distances for the non-within-collection samples (which should not have changed much since the reads for those samples did not get touched):

![Distribution_of_clonal_pairwise_distances][image1]

Plot "a" is the original data and plot "b" is the resampled data. As expected, the curves for the background distributions of non-within-collection sample differences are similar. The difference where the within-clone distances fall relative to the background distributions suggest several things:

  * Several of the within-collection samples are almost certainly not clones
  * The range of distances in the resampled data where the distances should theoretically all be equal suggest we can't be certain that two pairwise distance just a few distance units (5-6?) apart can't be differentiated from each other.
  * The values of the distance (that should theoretically all be zero) suggest there is noise in the data and values as high as 26-29 distance units can't be differentiated from zero. So some of the within-collection samples are either clones or so similar we can't differentiate them from clones.
  * Because the resampled values do cluster at the lower end of distance values I have some confidence that ALL the variation I am seeing is not due to noise. There is signal.


[image1]: {{site.image_path}}Distribution_of_clonal_pairwise_distances.png
