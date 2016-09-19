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

# Process

## Generate a cleaned expression table

  * Start with raw data from mirdeep_run1 (from before the 5,2,2 filtering step)
  * Add in the expression data from mirexpress for the novel miRNAs
  * Normalize the read counts
  * Filter out readcounts below minimum cutoff of ???
  * This is the "base" dataset for subsequent analyses

## Presence/Absence Venn

  * From the base dataset, generate a presence/absence table of each miRNA in each type-treatment
    * An miRNA is present in a type-treatment if it is expressed in at least one sample
  * Generate 4-way Venn showing counts of miRNAs present in each type-treatment 
