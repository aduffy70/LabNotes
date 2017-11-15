---
title: Turkey GSTA Blast database
date: 2015-03-11T14:39:10+00:00
layout: post
categories:
  - gsta other
---
Contents:

  * BAC37H15 complete sequence (covers GCLC to TMEM14A) GenBank: GQ254850.1
  * All genes annotated in the BAC (exons + introns)
    * GCLC, ELOVL5, GCM, FBX09, ICK, GSTA4, GSTA3, GSTA1.1, GSTA1.3, GSTA1.2, GSTA2, TMEM14A
  * All coding sequences annotated in the BAC (concatenated exons)
    * All of the above, plus ADD65338.1 and ADD65340.1
  * Items shown on the Genbank graphic for the BAC but (oddly?) not included in the annotations that can be downloaded
    * non-coding RNA 7SK

Format for the fasta sequence descriptions: 

~~~
>Genus_species:Source:type_name:length [location]
~~~

  * Genus_species - 4 letter code (in case I later add chicken or other taxa)
  * Source - BAC, Tu2.01, Tu5.0, Ch4.0, etc.
  * Type - gene (exons + introns), cds (coding sequence), complete, etc.
  * name - gene name, etc.
  * length - because it is nice to be able to see how much of the length a blast hit covers
  * location - won't show up in the blast output but if the info is available, let's at least keep it in the sequence files.

Map of the items included in the database (generated using DrawGenesOnSequence.R):

![BAC Gene Locations Plot]( {{site.image_path}}wp-content/uploads/2015/03/BACGeneLocationsPlot.png )
