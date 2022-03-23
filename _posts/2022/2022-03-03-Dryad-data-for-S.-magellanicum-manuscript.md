---
title:  Dryad data for S. magellanicum manuscript
date:  2022-03-03
layout: post
categories:
  - sphagnum magellanicum
---
DOI:  https://doi.org/10.5061/dryad.1c59zw3xc

Status: 2022-03-23 -- The data are submitted but we have requested keeping it private until the paper is accepted. The DOI link will not work until the manuscript is accepted and we tell Dryad to release the data.

I prepared datasets from the Sphagnum magellanicum group project for submission to Dryad so we can get a doi to reference in the manuscript.

Included:
  * Demultiplexed Illumina reads for RADseq samples
  * The _in silico_ reads from resequenced genome samples
  * Aligned plastid sequences from resequenced genomes. Bryan Piatkowski provided this. Alternatively, the plastid sequences could have gone in Genbank but they would have to be fully annotated first.

Things I considered but we decided not to include:
  * 70%, 80%, and 90% phy format RADseq alignments. We give the raw reads and tell them how we ran ipyrad. These are just the result of that.
  * The 80% phy format RADseq alignments for each chromosome. This is just the above alignment split up based on the chromosome labels.
  * 80% str files for the overall group: Anyone repeating this would get different results because of the random nature of how the snps were selected but that is the whole point. They are supposed to be a randomly selected snp from each locus. And there is already a column in the voucher table specifying which samples were not included over clonality.
  * 80% str files from the subset analyses of each species. We didn't use these results in the manuscript so no need to include the datasets.
  * resequenced genome vcf format files--Bryan Piatkowski suggests we already say how we generated these from the resequencing data so we don't need them here.
  * Diversity and/or Dimensions project resequenced genome contig assemblies. According to Jon Shaw, these things are being placed in the SRA and no further action on my part is needed.

There are several funding sources listed in the manuscript but according to Jon, only the NSF grants apply to these datasets.

Next steps:
  * Once the paper is accepted, set the data to be released.
