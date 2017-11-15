---
title: Preliminary Crepidomanes GBS population genetics analysis
date: 2015-03-17T15:03:02+00:00
layout: post
categories:
  - t. intricatum gbs
---
Following npGeno pipeline but using my 0.95 cluster instead of forming contigs using minia

Basic process:

  * Generate a pseudogenome
  * Use the pseudogenome in the npGeno pipeline to
      * Align reads for each sample against the pseudogenome
      * Call SNPs and genotypes
  * Use genotype data for population genetics analyses.

Generating the pseudogenome:

  * Wrote makepseudogenome.py
  * I used the 0.95 cdhit clusters to generate pseudogenome (every cluster is a "chromosome", but instead of using the sequence of the cdhit seed sequence, I used the sequence of the most common unique sequence in the cluster. Also, if there was not more than one read in a 0.95 cluster I didn't include it as part of the genome - no point in having "chromosomes" in my genome that no other reads will assemble against. This reduced the size of my genome from the original 9,962,955 clusters to 5,360,246 "chromosomes".

Using the npGeno pipeline:

  * Modifications:
      * Changed the Missing_threshold from 0 to 8 (allows a locus to be missing in about 20% of my samples)
      * <del>Changed SNP_position_threshold from 20 to 1 (allows for SNPs in all but the two very end bases of my reads - I've quality trimmed so I don't need to be as conservative as they were)</del> Can't run this step - see below.
      * Skipped AssembleContig.sh since I am using my pseudogenome, not generating one with minia
      * Changed GTgenerating.sh to specify single-end reads rather than paired reads when using bowtie2.
      * Changed GTgenerating.sh to parallelize calls to bowtie for faster performance. Used 16 cores since I found data suggesting the speedup doesn't change much beyond that.
      * Changed screen\_sampleGT\_from_VCF.pl to not save vcf records where the reference is an N. It was calculating genotypes incorrectly for these (or leaving the genotype blank) and breaking downstream processes. Having an N in the reference should be a rare thing, since each reference sequence was the most common sequence for that cluster and the odds of many reads having an N in the same position after filtering is low. In the case of S01, it threw out about 750 variance records - that is the single locus, not the entire cluster.
      * In sort_GT.pl, the regular expression they use to identify lines to be sorted relies on text that is specific to the way they named the chromosomes in their pseudogenome so I modified the regular expression to work on my data.
      * in find\_GT\_in\_all\_samples.pl the regular expression to get the sample names from the files names is specific to their file naming convention. Modified it to work on mine.
      * The step where they remove SNPs that are close to the ends of reads relies on having the length of the chromosome encoded in it's name within the pseudogenome. My pseudogenome names don't include that info so I am skipping that step (I have also quality filtered and trimmed my data so I don't think this is necessary. All my sequences had the first 13+ bases removed because they were the GBS barcodes and I removed all low quality trailing bases. To skip this step without fouling up downstream processes, I need to copy the file GT\_data\_without\_duplication\_and\_overthreshold\_missing.txt to Clean\_SNP\_Genotypes.txt in the Output_results folder.
      * You can parallelize the first steps by running just the repeating loop in GTgenerating.sh for small batches of samples in separate folders. Then concatenate the align_contigs and names of step4 files, and bringing the various .vcf files back into one folder before continuing with the last 2 steps of GTgenerating and the rest of the pipeline. I ran individual samples through the cluster to burn through lots of small parallel jobs.
      * I don't know if I am really memory limited or if it is just because Martin is running huge jobs on the workstation too, but I couldn't build my genotypes table in memory so I made a sqlite database to do it. Spit the align_contigs file into six pieces and ran them in parallel.

Concerns (keeping in mind this is a preliminary analysis):

  * I'm assuming diploidy based on similar distributions of most common allele frequencies between a handful of my samples and diploid Lycaeides. This method needs to be verified, and if it is valid, repeated for all my samples.
  * My choice of clustering level to generate the pseudogenome is arbitrary.
  * Possible related to the choice of clustering level... I have over half of my reads that bowtie2 reports having more than one alignment equally likely alignment. When this happens it is randomly assigning it. That means I could have reads being assigned to incorrect loci and may also mean I have loci that have been "split" into multiple loci because my clustering stringency wasn't relaxed enough. Or perhaps it suggests I actually do have polyploids. This definitely warrants further investigation.
  * The method npGeno uses to make genotype calls from the VCF data is very primitive. There are potentially better genotype calling methods out there (hey, didn't we publish some?)
