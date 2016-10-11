---
title: Turkey Blast database- problems with Turkey5
date: 2015-03-10T15:07:11+00:00
layout: post
categories:
  - gsta other
---
  * There are problems with the Turkey\_5.0 assembly in Genbank. I think the entire section including the GSTAs was flipped, but the direction of the annotations wasn't flipped to match. Then the section including just GSTA4 and GSTA3 was inverted, probably incorrectly. Kent Reed agrees that the more likely correct sequence is the BAC sequence (GenBank: GQ254850.1). It's gene order/orientation matches Turkey 2.1 assembly AND the Gallus gallus\_4.0 assembly (which is more complete). Because this region includes a family of similar genes, assembling the Illumina reads is error prone.
  * I still need a Turkey blast database, but I'll make it based on the BAC sequence and it's annotations.  Made a database with:
      * the full BAC sequence (covers GCLC to TMEM14A)
      * The coding sequences annotated in the BAC
      * The gene features annotated in the BAC
  * Now if I can extract additional features that have been annotated in the Turkey assemblies I can blast them against this database. If they have matches, I can add them to the database as well, so I'll have one blast database with the best possible sequence and all possible annotations. Especially useful would be adding mRNA boundaries .
