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
.      S05
S06 37.72889

.      S09
S10 29.87556

.      S38
S39 46.14104

.      S43      S44      S45      S46      S47
S44 38.91009
S45 45.49336 44.26083
S46 29.96919 33.93992 44.82541
S47 37.28072 41.09450 42.15290 30.11401
S48 38.28956 41.69165 39.73706 29.50251 39.26715
~~~

# Solution

I am going to try to bioinformatically generate replicates. I currently have 5 samples from one collection (S43--S48) that range from ~200K to 11 million cleaned/filtered reads per sample. I took the 11 million reads from S44 and randomly sampled from them (with replacement) to generate a new readset for each sample (S43--S48) that has the same number of reads as before.

So now each of these samples has reads drawn from the same pool of reads. If I run them through the rest of the ipyrad process I will be able to see how much they differ from each other in the end. That difference is entirely due to differences in PCR/sequencing errors (an error read could be in one sample but not another), allele sampling (if only one allele got sampled, the samples could differ in inferred genotype at a locus), and amount of missing data.

If these samples end up with smaller distances than before, it suggests that my within-collection samples are probably different because they really are genetically different. But if these samples still have large distances, it suggests that even genetically identical samples can end up with large distances in this analysis and I can't rule out the possibility that ALL my Crepidomanes samples are clones of each other and that the variation I see between them is just noise.
