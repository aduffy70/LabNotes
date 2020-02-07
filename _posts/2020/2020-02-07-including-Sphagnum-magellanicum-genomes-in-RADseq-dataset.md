---
title:  Including Sphagnum magellanicum genomes in RADseq dataset
date:  2020-02-07
layout: post
categories:
  - sphagnum magellanicum
---
# Problem
We have many resequenced S. magellanicum genomes that we would like to include as _in silico_ samples in the RADseq dataset so we can determine to which ML tree clade they each belong (divinum1, divinum2, magni, medium, South America, Asia, etc). How can we do that most efficiently?

# Process

Inputs:
  * vcf file of snps between samples and the S. fallax reference genome (v1.1) provided by Adam Healey
  * ipyrad loci file with all RADseq loci meeting 80% sample coverage threshold
  * S. fallax reference genome (v1.1).

Steps:
  * Select an example sequence to represent each locus in the ipyrad loci file--I have a script to do this already.
  * Map loci to the S. fallax reference and generate a table with locus, chromosome, start position of locus in chromosome and end position.
  * Step through the vcf file. For each SNP, determine if it is within a locus and generate a sequence for that sample and locus based on the S. fallax sequence with the appropriate SNP applied. Write all the loci generated this way to files for each sample?
  * Use those files along with the original ipyrad loci file to make a phy format file with all the samples--inserting Ns for loci without a sequence for a sample.
  * Consider dropping loci that are present in the RADseq samples but not in any of the genome-based samples so we don't have non-random patterns to the missing data in the dataset?
  * Run a ML tree and see where the genome samples fall in the tree.

Concerns:
  * How does doing all this with the S. fallax reference rather than the S. magellanicum genome affect things? It might be better, since all of the S. magellanicum samples are equally distantly related to the S. fallax genome whereas some would be more or less distant from the S. magellanicum reference genome.
