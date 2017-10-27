---
title:  notes on DAVID Bioinformatic Resources
date:  2017-10-24
layout: post
categories:
  - gsta mirna

---
[DAVID Functional Annotation Tool][1]:

Not all genes are in the database for all taxa. Does it matter if we use the record for a gene from a different taxa?

  * For the over-representation tests (Functional Annotation Charts) and Functional Annotation Clustering, taxon matters. If you use the gene from taxon 1 against the background for taxon 2, you get NO result. Also, if you use a group of genes from one taxon 1 using that taxon 1 as the background and then use the exact same genes from a taxon 2 agaist taxon 2 as the background, you get different results.
    - Example: I used 35 genes that are present in the database for Gallus gallus, Homo sapiens, and Meleagris gallopavo. Looking at the Functional Annotation Chart output using different backgrounds:
      - Gallus vs Gallus background: 5 results
      - Gallus vs Homo background: 0 results
      - Gallus vs Meleagris background: 0 results
      - Homo vs Gallus background: 0 results
      - Homo vs Homo background: 26 results
      - Homo vs Meleagris background: 0 results
      - Meleagris vs Gallus background: 0 results
      - Meleagris vs Homo background: 0 results
      - Meleagris vs Meleagris background: 6 results (4 of them are the same as the terms as in Gallus vs Gallus but with different scores)
    - Looking at the Functional Annotation Clustering:
      - Gallus vs Gallus background: 1 cluster with 4 terms
      - Gallus vs Homo background: 0 results
      - Gallus vs Meleagris background: 0 results
      - Homo vs Gallus background: 0 results
      - Homo vs Homo background: 7 clusters
      - Homo vs Meleagris background: 0 results
      - Meleagris vs Gallus background: 0 clusters
      - Meleagris vs Homo background: 0 clusters
      - Meleagris vs Meleagris background: 1 cluster with 4 terms (same terms as Gallus vs Gallus but w/different scores)
  * For the Functional Annotation table, the background doesn't matter since it is just listing all annotations, not comparing them to anything. But the same gene has different annotations in different taxa.
    - Human is better annotated than either chicken or turkey. For these 35 genes:
      - 31 have GO annotation in Homo
      - 23 have GO annotation in Gallus
      - 17 have GO annotation in Meleagris

Which annotations to use?
  * 1-5 are specific GO Term levels
  * All includes everything in 1-5
  * FAT filters out some of the higher levels
  * Direct only includes the level that was actually annotated in the db and not the higher levels that it belongs to.

When I use Direct very few genes get included in the analysis. FAT includes more and All includes the most. I am going to use ALL.

[1]: https://david.ncifcrf.gov
