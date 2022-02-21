---
title:  Crepidomanes RADseq regroup
date:  2022-02-21
layout: post
categories:
  - t. intricatum gbs
  - ideas
---

Re-analyzing my independent gametophyte RADseq data.

Things to do differently:

  * Only allow one barcode error--previously I allowed two but ipyrad now points out that some barcodes with two errors cannot be unambiguously assigned and it has been assigning the reads to the first sample (alphanumerically?).
  * No modifications from default settings to try to squeeze out more loci by allowing higher error rates or shorter reads.
  * Include collection year in sample names to highlight the old, likely lower quality samples.
  * Don't remove the second cutsite so we remove more of the illumina adapter contamination. Run fastqc on the filtered-trimmed reads to check.
  * Filter datasets for structure so the snps included REALLY have the expected minimum sampling coverage--we know structure does weird things with high missing data.
  * Compare structure to admixture since they behave differently with missing data.
  * Run PCAs since the clonality in my samples is likely violating model assumptions of structure.

Things to try:

  * Keep vcf output. It shows the uncertainty in genotype calls and may allow me to do analyses treating the reads as population samples rather than individual samples.
  * Randomly resample reads from samples to make a "pseudo-clone" dataset to explore how different I might expect true clones to be. Try making pseudo-clones of different read-counts?
  * Mix reads from different species to see how a true mixed population sample would behave.

Things not to forget:

  * I have PCR band-length data for some samples. Compare that to species assignments from RADseq to see if it matches.
  * Morphology. Once I have samples identified to species can I detect morphological patterns that separate them? I have a guide to algae in the data folder. See what kinds of characters they use to differentiate species of filamentous algae.
