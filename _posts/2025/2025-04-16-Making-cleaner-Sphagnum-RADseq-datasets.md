---
title:  Making cleaner Sphagnum RADseq datasets
date:  2025-04-16
layout: post
categories:
  - sphagnum other
  - ideas
---

# Problem

When I include the same DNA extraction twice in a RADseq run the resulting RADseq samples should have identical genotypes at every locus, but they do not. There are several sources of noise in the RADseq process including multiple loci collapsing into single loci, problems with how ipyrad calls haploid genotypes (it always uses majority rule for haploids), and allele dropout with low coverage. I also see non-autosomal chromosome loci overrepresented in loci that differ between clones--the sex chromosomes and extra contigs in the reference genome don't seem to be as well assembled as the autosomes. 

These sources of noise make clones look different from each other but they are also affecting all other samples. So if we can reduce these noise sources enough to make clones have actually identical genotypes it should decrease the level of noise in all samples. 

# Solution

We can take 3 steps to get cleaner data than if we took raw ipyrad output:
  * We have two reference genomes and a large number of re-sequenced genome sequences that have all been *in silico* processed into pseudo-RADseq sequences with identical read depths at each locus. These can help us spot loci that are being collapsed into single loci. If a locus gets collapsed in any of these samples (it has more than the expected read depth) it is likely happening to other samples as well, so we can drop those loci from all samples.  
  * Because we are mapping to the genome we know the chromosome or contig of each locus so we can drop all loci not on the 19 autosomes.
  * We can have ipyrad process all samples as diploid even if they are haploid. Ipyrad uses its statistical method to identify genotypes, and then can recode to make homozygotes into haploids and call heterozygotes as unknown/missing. If ipyrad determined that the underlying readcounts can't be differentiated from 50:50, then the readcounts are too close to call a haploid genotype. In practice this almost exclusively affects loci with low readcounts. For example, if the readcounts are 4 As and 3 Gs ipyrad would call it as heterozygous and we would call it unknown/missing. The error level is just too high to make an accurate call.
  
When we perform these 3 steps post-ipyrad, the vast majority of duplicated samples have identical genotypes at all loci and tip branches are shorter in our trees. 
  
