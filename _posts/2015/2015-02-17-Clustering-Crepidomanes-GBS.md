---
title: Clustering Crepidomanes GBS
date: 2015-02-17T14:56:45+00:00
layout: post
categories:
  - t. intricatum gbs
---
  * Gave Paul Wolf an update on Crepidomanes GBS. There are no clear peaks at 50, 66, or 75% in individually clustered samples from C. intricatum, D. petersii, or T. boschianum so either they are all true haploids or my method of detecting ploidy isn't effective. Don Hauber's Salvinia dataset is from sporophytes so they should be diploid (at least) so I can use a couple of his samples as a control for the method. Also, realized that since one of my most common reads is from trnS-rps4 I can look for that fragment in all of my samples to check that the cpgenome is from the expected species (or at least closely related species from Ebihara's filmy fern phylogenetic work - I don't see T. boschianum or D. petersii sequences in genbank, unless the names have changed).
  * Continuing clustering Crepidomanes GBS at different stringencies. 0.87, 0.86, and 0.85 finished on the DoRC cluster but 0.84 and 0.83 ran out of wall time (96 hours). Restarted them, plus 0.82, with an 8 day (192 hour) wall time and 32 cpus instead of 24. If this doesn't finish I don't know what to do next. Though with the plot of cluster counts flattening out and no sign of a second dip at 0.85 this plot also seems to support the idea that I don't have polyploid taxa (or at least if I do, the subgenomes are very closely related).
