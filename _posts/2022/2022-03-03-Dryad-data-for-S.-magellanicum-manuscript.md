---
title:  Dryad data for S. magellanicum manuscript
date:  2022-03-03
layout: post
categories:
  - sphagnum magellanicum
---
I need to submit datasets from the Sphagnum magellanicum group project to Dryad so we can get a doi to reference in the manuscript.

To include:
  * Demultiplexed RADseq reads for real and in silico samples
  * Aligned plastid sequences from resequenced genomes. Alternatively, the plastid sequences could go in Genbank but they would have to be fully annotated first.

Things I considered but am not going to include:
  * 70%, 80%, and 90% phy format RADseq alignments. We give the raw reads and tell them how we ran ipyrad. These are just the result of that.
  * The 80% phy format RADseq alignments for each chromosome. This is just the above alignment split up based on the chromosome labels.
  * 80% str files for the overall group: Anyone repeating this would get different results because of the random nature of how the snps were selected but that is the whole point. They are supposed to be a randomly selected snp from each locus. And there is already a column in the voucher table specifying which samples were not included over clonality.
  * 80% str files from the subset analyses of each species. We didn't use these results in the manuscript so no need to include the datasets.
  * resequenced genome vcf format files--Bryan Piatkowski suggests we already say how we generated these from the resequencing data so we don't need them here.

Things that might be included but perhaps would be better suited for the SRA:
  * Diversity and Dimensions project resequenced genome contig assemblies? I think the Dimensions project ones are already going here, but what about the Diversity ones? And which are even which??

Next steps:
  * Upload the zipped files of demultiplexed RADseq and in silico reads (waiting on Dropbox upload).
  * Fix the temporary description of how the data were generated. I used the methods from the paper but strip it to essentials
  * Generate a README file.
  * Make sure I have the complete cp alignment and upload
  * What about the genome resequencing assemblies?
