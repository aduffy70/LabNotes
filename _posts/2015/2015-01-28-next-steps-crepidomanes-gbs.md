---
title: Next steps Crepidomanes GBS
date: 2015-01-28T14:59:55+00:00
layout: post
categories:
  - t. intricatum gbs
---
  * cd-hit-454 finished in under 24 hours - 32,880,920 clusters
  * it gives 2 output files:
    * a fasta file with the seed sequence from each cluster
    * a cluster file listing the clusters and which sequences are in each.
      * The names it uses for the sequences get cut off at the first space so it doesn't include the sample name or barcode. I need to change my read names to put the sample name and barcode first, then rerun.
      * Once that is redone, on this first 100% identity run I'll be able to parse the cluster file to see which clusters contain reads from which barcodes. If I use this non-redundant list of clusters as the input for subsequent clustering runs I won't be able to do that for those. Is that important enough to be worth the extra time it will take to do that clustering on the entire dataset each time?
        * put the samplename/barcode up front where it will be reported in the cluster file and rerun the 100% identity clustering.
        * Rename the reads in the seeds fasta file output with just the cluster number
        * Use that file as input for clustering at other identities. That way the cluster file output from those will list which cluster numbers from the 100% run are in each cluster in other runs and I can write a script to do lookups of which sample names are in each cluster if I need that later, while still getting the significant speed advantage of doing the clustering with just the non-redundant sequences.
