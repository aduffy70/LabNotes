---
title:  Crepidomanes RADseq regroup
date:  2022-02-21
layout: post
categories:
  - t. intricatum gbs
  - ideas
---

Re-analyzing my independent gametophyte RADseq data.

# Three species analysis

I am going to run 9 different datasets to cover a range of clustering levels and sample coverages.

Three clustering levels:

  * IG-c96 : 0.96 - At the "peak" in numbers of variable & parsimony informative loci. But beyond the recommended range and likely under-clustered.
  * IG : 0.90 - Partway down the "slope". This is a more normal setting, but may be over-clustered for these data.
  * IG-c80 : 0.80 - In the "flat" range where further reducing clustering level has little effect on numbers of variable & parsimony informative loci. Almost certainly over-clustered. Comparing these 3 datasets will show how possible over or under clustering affects our inferences.

![Effect of clustering level on Crepidomanes ipyrad locus counts][image1]

Those 3 are my "base" datasets. I will use the output files from ipyrad to manually filter to get 3 different samples coverages for each.

Three sample coverages:

  * 50p - 50% sample coverage. This dataset will bias heavily toward Crepidomanes loci and the non-Crepidomanes samples will have high levels of missing data. This is because a locus present in every non-Crepidomanes sample but no Crepidomanes samples will not meet the 50% cutoff, whereas Crepidomanes-only loci can potentially meet the cutoff. We will have loci that are present in only Crepidomanes samples but will never see loci present in only non-Crepidomanes samples.
  * 50sporo - 50% sample coverage AND present in at least one sporophyte sample. This will remove the species bias but will have fewer loci. Comparing this to the 50p dataset will show how species bias and higher missing data in non-Crepidomanes samples affects our inferences.
  * 33sporo - 33% sample coverage AND present in at least one sporophyte sample. This should give a more useful number of loci while still removing the species bias--at the cost of higher missing data. Comparing this to the 50sporo dataset will show how the trade-off of missing data vs locus counts affects our inferences.


# Things to do differently:

  * Only allow one barcode error--previously I allowed two but ipyrad now points out that some barcodes with two errors cannot be unambiguously assigned and it has been assigning the reads to the first sample (alphanumerically?).
  * No modifications from default settings to try to squeeze out more loci by allowing higher error rates or shorter reads.
  * Include collection year in sample names to highlight the old, likely lower quality samples.
  * Don't remove the second cutsite so we remove more of the Illumina adapter contamination. Run fastqc on the filtered-trimmed reads to check.
  * Filter datasets for structure so the snps included REALLY have the expected minimum sampling coverage--we know structure does weird things with high missing data.
  * Compare structure to admixture since they behave differently with missing data.
  * Run PCAs since the clonality in my samples is likely violating model assumptions of structure.

# Things to try:

  * Keep vcf output. It shows the uncertainty in genotype calls and may allow me to do analyses treating the reads as population samples rather than individual samples.
  * Randomly re-sample reads from samples to make a "pseudo-clone" dataset to explore how different I might expect true clones to be. Try making pseudo-clones of different read-counts?
  * Mix reads from different species to see how a true mixed population sample would behave.
  discoSnpRAD gets around the clustering level problem by using a whole other method of identifying SNPs. Try it?

# Things not to forget:

  * I have PCR band-length data for some samples. Based on latest species inferences, there is only one sample where the band-length data contradicts my species assignments!
  * Morphology. Once I have samples identified to species can I detect morphological patterns that separate them? I have a guide to algae in the data folder. See what kinds of characters they use to differentiate species of filamentous algae.
  * Do an analysis of quality vs sample age?

# Questions:

  * What is the optimal clustering level?
  * What are the apparent ploidy levels of my samples? I did ploidy inference on the c90 dataset and the c96 dataset. It gives ambiguous results. Does it make a difference if I do it on the over-clustered dataset?

# Last status:

  * Running iqtree on my 9 Three-species datasets. Some didn't converge and are running additional cycles. Others are ready to download and make trees.
  * Running discoSnpRAD to try to get around finding a cluster value entirely. Finished--need to evaluate.
  * Next: manually filter to get my ustr datasets with different sample coverages...


[image1]: {{site.image_path}}Crepidomanes_loci_by_cluster_level-2022-03-02.png
