---
title:  Including Sphagnum magellanicum genomes in RADseq dataset
date:  2020-02-07
layout: post
categories:
  - sphagnum magellanicum
---
# Problem
We have many resequenced _Sphagnum magellanicum_ group genomes that we would like to include as _in silico_ samples in the RADseq dataset so we can determine to which ML tree clade they each belong (divinum1, divinum2, magni, medium, South America, Asia, etc). How can we do that most efficiently?

# Process

Note- I initially tried doing this from the vcf files of snps between each resequenced genome and the _Sphagnum fallax_ genome but from a snps vcf there is no way to tell the difference between a base with no information and a base that matches the genome. Fortunately, Adam Healey was able to provide the assembled contigs for each resequenced genome and I could just _in silico_ digest them to get RADseq-like loci.

Inputs:
  * Genome assemblies from the Diversity panel, the Dimensions project, the pedigree samples, and the _S. fallax_ and _S. magellanicum_ genomes. I did ALL of them--not just the S.mag group--so others can use them in their projects as well.

Steps:
  * Use 'restrict' from the Emboss package to _in silico_ digest with MseI and EcoRI.
  * Use my 'script parse_and_filter_restrict_output.py' to filter for just fragments between 40 and 2000 bases long with an MseI cutsite at one end and an EcoRI cutsite at the other. Reverse complement as needed to put the EcoRI cutsite at the beginning.
  * Use my script 'trim_and_get_all_sample_fragments.py' to trim the fragments to 92 bases long (to match what we get from a 100bp Illumina read with the barcode removed) and write 10 copies in fastq format (to pass ipyrad's read depth filter). For the quality line just make all the bases high quality to they will pass ipyrad's quality filter.
  * Zip the fastq file with 'gzip'.
  * Use the resulting _in silico_ "RADseq" data as input to ipyrad as you would any other demultiplexed Illumina reads.
  * Run a ML tree and see where the _in silico_ samples fall in the tree. In cases where we have real RADseq and _in silico_ RADseq for the same collections they fall sister to each other in the tree. Yay!

Concerns:
  * This assumes 100% digestion, which is likely not the case for the real samples, and which sites don't get cut is probably not random.
  * I have a hard cutoff of maximum fragment length (2000bp), while real RADseq fragments don't have a hard cutoff for size and we don't know what the size distribution actually is. It is likely biased toward short fragments though.
  * The genome assembly is almost certainly incomplete and almost certainly contains errors.
  * The genome assembly doesn't include chloroplast or mitochondrial sequences (those separate genomes could be concatenated to the nuclear genome to included them).
  * The scripts I used to do this assumed haploid gametophytes--any ambiguous bases were changed to N's. I believe the genomes were assembled assuming haploidy as well. But if any of these genomes are from samples that were actually diploid, we have lost information about heterozygosity.
