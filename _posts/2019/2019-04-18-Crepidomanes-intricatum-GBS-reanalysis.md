---
title:  Crepidomanes intricatum GBS reanalysis
date:  2019-04-18
layout: post
categories:
  - t. intricatum gbs
---
Based on my recent experiences analyzing RADseq datasets with ipyrad, Structure, and RAxML, I want to go back and try to reanalyze the C. intricatum GBS dataset and see if I can get better results using a simpler, less customized, more streamlined process that will be easier to explain in the methods of the paper.

# Things to do differently

  * Closely inspect the ipyrad output at step 2 to ensure I am getting rid of all the Illumina adapter sequence.
    - There was still ~0.5% of reads with adapter sequence so I dropped the second cutsite from the params file. Also extended the minimum sequence length to 41 (a 35bp sequence with both cutsites would only really be 25bp of meaningful sequence. Now it is at least 31).
  * Only run things as diploid--don't complicate things with haploid runs. I didn't end up using anything from them in the analyses I reported anyway.
  * Use the variable loci/parsimony informative loci method of identifying the optimal clustering level and pick a value that is less likely to overcluster.
    - The peak is REALLY high (0.97 as opposed to ~0.9 in all the Sphagnum datasets) and drops off very quickly. I think I was massively overclustering at 0.85. I'm using 0.97 for the species-determination analyses and 0.95 for the Crepidomanes-only analyses.
    - I thought this might be driven by the very different species included in the dataset, but the peak is similar when I only use the Crepidomanes samples. It might suggest that there are just very few variable loci so we quickly start losing them as paralogs get combined.
  * After I identify the non-Crepidomanes samples, don't remove them by just deleting them from the ustr file. Actually go back and rerun ipyrad step 7 with them removed. I will likely pick up loci that weren't present in the all-samples data and some of those loci might be important for resolving relationships within the Crepidomanes samples. The optimal clustering level for the Crepidomanes-only samples seemed to be a bit lower than for all samples (0.95 vs 0.97) so O went all the way back and reclustered.
  * Save disk space and time by only producing the output formats I need: ustr for Structure, full locus phy for RAxML, and nex for svdquartets. Also delete even those for the many runs I do just to find the best clustering level. From those, I just need the stats file with numbers of variable/parsimony-informative loci.
  * Rather than comparing analysis results at multiple minimum coverage levels, stressing about how to handle the samples that are inconsistently assigned at different coverages, and eventually dropping them from the Crepidomanes-only analysis because they waffle and have low reads/loci, I just dropped the six samples with lowest readcounts and loci before doing any post-ipyrad analysis.  It is the same samples that waffled before and without them the analysis is so much cleaner and everything is consistently assigned at different minimum coverage levels.
    - S01 (low reads and sample loci)
    - S19 (low reads and assembled/filtered loci)
    - S22 (low assembled/filtered loci)
    - S27 (low reads and sample loci)
    - S32 (low reads and assembled/filtered loci)
    - S45 (low reads and assembled/filtered loci)
  * The way I used Structure was confusing and non-standard and I was just doing it because the including the confidence intervals helped me spot the low read/loci waffling samples. Those aren't in the analysis anymore so I can just use the standard StructureHarvester/CLUMPP method to combine the multiple runs and then call samples with >5% admixture from the Didymoglossum or Vandenboschia as Non-Crepidomanes samples. There aren't any ambiguous samples anymore. Everything is clearly Crepidomanes, clearly not Crepidomanes or clearly showing admixed signal.
  * Don't do any of the stuff to try to bioinformatically remove non-Crepidomanes signal from "mixed" samples. It distracts from the real story and didn't work anyway. In fact, don't make a big deal about the "mixed" samples. Keep the focus on the idea that we ONLY included samples in the population genetics analysis if they were clearly Crepidomanes samples. The others might be mixed or low genetic signal, but it isn't important--they just aren't unambiguously Crepidomanes so we didn't include them. Speculate on mixed-species populations, but briefly.
  * Since I know the Didymoglossum and Vandenboschia samples have fewer loci, rather than using a cutoff based on sample coverage, use loci present in at least X samples AND in one of the sporophytes. That will reduce the bias against non-Crepidomanes loci and allow me to use a lower sample coverage level without also introducing many (many many) low-coverage Crepidomanes-specific loci that don't tell me anything about the species relationships. That should maximize information about relatedness between all samples and the sporophytes, which is what I really need for the species identification part of the analysis. It also balances the number of loci better between samples from different species (before my Crepidomanes samples had thousands of loci while the non-Crepidomanes samples had tens of loci)
    * Why this matters: In my original analysis, I ran at three coverage levels--33%, 50%, and 66%) to see how things differed at different levels of missing data and number of loci. But even at the levels with less missing data, I still had a lot of missing data about the relationships to the sporophytes that I really care about. So I had lots of information but almost none of it was about the relationships I was interested in:

| sample coverage cutoff | loci in original analysis | loci that include a sporophyte |
| ---------------------- | ------------------------- | ------------------------------ |
| s36 - 66% | 14 | 13 |
| s27 - 50% | 69 | 24 |
| s18 - 33% | 578 | 55 |
| s6 - 11% | 30242 | 1970 |

  * After running structure to identify possible non-Crepidomanes samples, remove the possibly admixed ones before making distance, ML, and coalescent trees. The mixed samples want to fall in two places in the tree and end up "dragging" along samples that are closely related to part of their ancestry. Removing the clearly admixed samples allows things to fall in the expected locations on the tree. Low readcount/locus samples are especially susceptible to being "dragged" around... further argument for trying to balance the number of loci so locus counts aren't so horribly biased by species.
  * Try Maximum Likelihood and/or svdquartets in addition to Neighbor-joining trees? This gets a little challenging because the locus filtering method I use now (loci present in a sporophyte AND in X samples) is done through a script on the ustr file. I'll need to do it to the vcf with vcftools and then convert to nexus and phy formats or do it to those files directly.
  * PCA. I'm violating assumptions of Structure and probably ML and coalescence too, so showing that samples group by species under methods with no evolutionary assumptions is a good thing.

# The Process

## QA, data cleaning, and genotyping

  * Inspected with FastQC.
  * Demultiplexed and trimmed/filtered reads in ipyrad.
  * Clustered reads, called genotypes and assembled loci using ipyrad.
    * Clustered at a range of clustering levels and inspected the numbers of variable and parsimony informative loci to determine the appropriate level. Peak at 0.98. I used 0.97 for further analyses--below the peak but still above 0.95 where locus counts "level off."
    * Removed 6 samples with low reads and locus counts, leaving 48 samples in the dataset.
    * Used a minimum sample coverage cutoff of 4 samples in ipyrad but filtered for loci present in 16 samples (33%) AND at least one sporophyte sample (using custom script). This yielded 52 loci. To ensure species inferences were robust to number of loci and level of missing data I also tried cutoffs of 24 samples (50%, 28 loci), 12 samples (25%, 90 loci), and 10 samples (20%, 180 loci). Inferences regarding species assignments were consistent in all datasets so I will only report the 16-sample 33% results.
      - I also did this from the loci format output, converting it to phy so I can run RAxML. It gave different numbers of loci because the stru output only includes variable loci (and one SNP per locus) while phy output is supposed to include the non-variable loci as well. I started with the loci output instead of the phy output because the loci output is MUCH easier to parse to determine coverage levels and converting to phy was simple.

## Determining species of gametophyte samples

  * Used Structure to cluster samples.
    - Gametophyte samples that were assigned to a cluster with the Didymoglossum or Vandenboschia sporophytes with less than 5% admixture from other clusters were assumed to be the same species as the sporophyte. Gametophytes with less than 5% admixture from sporophyte clusters were assumed to be Crepidomanes.
  * Generated neighbor-joining trees (in R) and ML trees (in RAxML) two ways:
    * using all 48 samples, and
    * using the 42 samples clearly assigned to a single species in Structure (the no admixture samples).
  * PCA. Ran (in R) both ways: with and without admixed samples.
    * First PC separates Vandenboschia from Crepidomanes. Second PC separates Didymoglossum. Admixed samples fall between the expected "parent" species. Without the admixed samples the species clusters are quite distinct.
    * Results are similar acrossed datasets with lower levels of missing data (sporo24, 16, and 12). At higher levels of missing data, the ability to distinguish the species decreases.
  * Compared heterozygosity and HWE in gametophytes (only) of each species in R.
    * Acrossed datasets with different levels of missing data, Crepidomanes consistently has Hobs ~50% of Didymoglossum and Vandenboschia while the admixed samples have much higher levels of heterozygosity. The difference in the admixed samples is almost always statistically significant but differences between the other groups are not consistently significant in different datasets. The trend is consistent though.
    * Crepidomanes has higher levels of loci out of HWE. Didymoglossum and Vandenboschia have nearly none and the admixed samples are intermediate. TODO: This is based on the loci I used to determine species, which are a very small subset, selected specifically for their ability to differentiate species--not because they are necessarily representative of most loci. Repeat the heterozygozity/HWE analyses using a dataset (or datasets?) designed to maximize the number of loci for each species.

### What can we say about the admixed samples?

There is evidence to support that some of these really do represent either extractions containing a mixture of gametophytes of 2 species or gametophytes with admixed genomes (and aren't just missing data at the loci that differentiate the species):

  * Of 52 loci in rerun-c97-spore16.stru (the dataset with loci present in a sporophyte and 16 samples):
    * 35 alleles can't help us interpret the admixed samples because they are not parsimony informative, the minor allele is rare and only in one group, or because both alleles are present in multiple species.
    * 9 alleles are differentially fixed between Crepidomanes and Vandenboschia.
      * At 7 of these, at least some of the suspected admixed gametophytes are heterozygous.
      * At the other 2 we have missing data for the admixed gametophytes.
    * 8 alleles are differentially fixed between Crepidomanes and Didymoglossum.
      * At 3 of these, at least some of the suspected admixed gametophytes are heterozygous.
      * At 2 of these, the admixed gametophytes have the Crepidomanes allele.
      * At 2 of these the admixed gametophytes have the Didymoglossum allele.
      * At the other 1 we have missing data for the admixed gametophytes.
  * Two of the suspected admixed samples have no direct evidence of admixed genotypes:
    * S23 (suspected Crepidomanes+Vandenboschia) is simply missing data for all of the loci that are differentially fixed in those species. I don't think this is admixed--I think it just has so much missing data we can't tell which species it is--we just know it is NOT Didymoglossum.
    * S21 (suspected Crepidomanes+Didymoglossum) has some of the Crepidomanes-specific alleles and some of the Didymoglossum-specific alleles but none of the differentially fixed loci are heterozygous in this sample. I think this one might still be admixed, but the evidence isn't as strong.
  * All of the other suspected admixed samples are heterozygous for at least one of the differentially fixed loci.

## Crepidomanes population genetics

  * 30 samples, 945 loci present in at least 18 samples (60% sample coverage)
  * Used Structure to cluster samples. Best K=2 clusters but all samples are admixed between both clusters (sample with lowest level of admixture is still about 90%:10%).
  * Isolation-by-distance analysis
  * Similarity networks
  * PCA?
  * Other?

## Exploring clonality

  * For each set of the expected clonal samples, I pooled their trimmed cleaned reads and resampled the original number of reads for each sample from the pool using my randomly_sample_fastq.py (or randomly_sample_fastq-low_mem.py) script. Then I reran ipyrad with the same settings from the crep18 branch with these "pooled clones" in place of the original samples.
  * Used Structure on the resampled dataset. Very similar to before with all samples admixed. The levels of admixture in clones seem to be more similar to each other than they were before but there are still differences.
