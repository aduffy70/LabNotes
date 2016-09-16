---
title: Clustering Crepidomanes GBS
date: 2015-01-29T14:47:05+00:00
layout: post
categories:
  - t. intricatum gbs
---
  * Next steps Crepidomanes GBS
      * Finished rerunning the cintricatum_1.0 cluster with the renamed fasta reads (sample name and barcode at the start of the name). Same results as the first run, but with better sample names. (~32million clusters)
      * Renamed clusters with the cluster numbers and read counts so in subsequent assemblies I'll be able to see what clusters were joined and how many reads are involved
      * Started cintricatum_0.99 cluster using the renamed 1.0 clusters as the input. Even thought there are only 32million reads to cluster, it is taking longer because at 0.99, each read will be its own cluster - it is impossible to have a mismatch with a distance over 0.99 (86/87 < 0.99). Really this cluster run won't do anything, but I am running it anyway just to be sure things are working the way I think they should.
