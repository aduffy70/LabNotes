---
title:  GWAS miRNA-seq analysis
date:  2016-09-14
layout: post
categories:
  - gsta mirna
---
The miRNA-seq analysis has been very GSTA focused, but the dataset contains information about general miRNA expression in domestic and wild turkeys with and without AFB exposure. Do we have enough for a general turkey miRNA or Genome Wide Association Study-type manuscript?

# Things to show/questions to answer:

  * Venn of presence/absence of miRNAs in each type-treatment group (check previous papers for appropriate read count cutoff)
  * Lists of significantly up/down regulated miRNAs (2-way ANOVA):
    * domestic vs wild
    * AFB vs control
    * interaction effects
  * How do the differentially expressed miRNAs relate to miRNAs in other taxa?
  * What mRNA interactions are known for the expressed miRNAs in other taxa and what processes are those mRNAs involved in?
  * How are the differentially expressed miRNAs distributed in the genome? Are they randomly distributed or clustered on particular chromosomes?
  * What are the most highly expressed miRNAs? Are they the same in each type-treatment? What processes are they associated with in other taxa?
  * Distribution of readcounts by miRNA (or histogram of read counts?)

# Process

## Generate a cleaned expression table

  * Started with the expression data from mirdeep_run1
    * Rather than starting over at the raw expression data, I used the data that had already:
      * been 5,2,2 filtered (I checked to make sure that filter didn't remove anything that would have passed a "10 reads in at least one sample" filter)
      * had the novel miRNA expression from miRExpress included
      * had the expression for miRNAs "not found by mirdeep" checked and corrected.
  * Filtered out miRNAs with readcounts below 10 in all samples. This is the "base" dataset.
    * 387 miRNAs (341 unique)

## Presence/Absence Venn

  * From the base dataset, generate a presence/absence table of each miRNA in each type-treatment.
    * An miRNA is present in a type-treatment if it is has at least 10 reads in at least one sample
  * Generate 4-way Venn showing counts of miRNAs present in each type-treatment:
    ![miRNA Presence-Absence venn plot][image1]

## Differential expression

  * From the base dataset, generate a tab-delimited input file for DESeq2
    * Using non-normalized data since DESeq2 normalizes for us.
  * Run DESeq2 using settings for 2-way ANOVA at adjusted p<0.1:
    * 0 miRNAs with significant interaction effects
    * 60 miRNAs significantly DE in Domestic vs Wild (22 up-regulated, 38 down)
    * 28 miRNAs significantly DE in AFB vs Control (28 up, 10 down)

## Link to known miRNAs in other taxa

  To which known gene families do the DE miRNAs belong?

  What genes/pathways do they interact with in other taxa?




[image1]: {{ site.image_path }}presence-absence_vennplot_2016-09-19.jpg
