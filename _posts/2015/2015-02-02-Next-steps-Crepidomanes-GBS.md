---
title: Next steps Crepidomanes GBS
date: 2015-02-02T15:01:54+00:00
layout: post
categories:
  - t. intricatum gbs
---
  * Next steps Crepidomanes GBS
      * 0.99 cluster finished. I had expected that nothing should cluster at this stringency level but 32880921 clusters @ 1.0 shrunk down to 32718508 @ 0.99 - 162413 (0.49%) clustered. Looks like they are all shorter sequences that join with a longer sequence by opening a single base indel, so it looks like it is just a quirk of how cd-hit scores alignments with indels.
      * Started the 0.98 cluster over the weekend (Sunday morning?). It finished between 3 and 4pm Monday.
      * The naming convention I used for the 1.0 cluster worked out nicely in the output of the 0.99 cluster. In the cluster file it is easy to see which 1.0 clusters joined together and how many reads were involved, and it should be readily parsed if I need to write a script to summarize any of it.
      * It would be interesting to see a histogram of reads/cluster at each stringency to see how the distribution of cluster sizes shifts as I relax stringency. I can do this using plot_len1.pl (from the cd-hit package) for the 1.0 cluster I wrote plotclustercounts.py for subsequent clusters. My expectation is that the number of singletons or small clusters should drop rapidly at first as I join sequence errors with the correct reads. Large clusters representing different alleles at a locus should also join early on, though how long that takes will depend on how differentiated the alleles are from each other (ploidy and possible hybrid origins would effect this). Eventually, huge clusters representing distantly related loci should join.
