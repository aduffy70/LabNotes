---
title:  Dryad data for S. magellanicum manuscript
date:  2022-03-03
layout: post
categories:
  - sphagnum magellanicum
---
DOI:  https://doi.org/10.5061/dryad.1c59zw3xc (not active yet)

I need to submit datasets from the Sphagnum magellanicum group project to Dryad so we can get a doi to reference in the manuscript.

To include:
  * Demultiplexed Illumina reads for RADseq samples
  * THe in silico reads from resequenced genome samples
  * Aligned plastid sequences from resequenced genomes. Bryan Piatkowski provided this. Alternatively, the plastid sequences could have gone in Genbank but they would have to be fully annotated first.

Things I considered but am not going to include:
  * 70%, 80%, and 90% phy format RADseq alignments. We give the raw reads and tell them how we ran ipyrad. These are just the result of that.
  * The 80% phy format RADseq alignments for each chromosome. This is just the above alignment split up based on the chromosome labels.
  * 80% str files for the overall group: Anyone repeating this would get different results because of the random nature of how the snps were selected but that is the whole point. They are supposed to be a randomly selected snp from each locus. And there is already a column in the voucher table specifying which samples were not included over clonality.
  * 80% str files from the subset analyses of each species. We didn't use these results in the manuscript so no need to include the datasets.
  * resequenced genome vcf format files--Bryan Piatkowski suggests we already say how we generated these from the resequencing data so we don't need them here.

According to Jon Shaw, these things are being placed in the SRA (not by me) and no further action is needed:
  * Diversity and Dimensions project resequenced genome contig assemblies? I think the Dimensions project ones are already going here, but what about the Diversity ones? And which are even which??

There are several funding sources listed in the manuscript but according to Jon, only the NSF grants apply to these datasets.

Next steps:
  * Fix the temporary description of how the data were generated. I used the methods from the paper but strip it to essentials
  * Generate a README file.
  * Add the md5sum for the chloroplast assembly to the md5sum file.
  * Update funding sources.
