---
title:  GWAS miRNA manuscript notes
date:  2017-10-02
layout: post
categories:
  - gsta mirna
---
Focusing on control birds and comparing types. Leaving AFB treatment out entirely for this analysis.

Analyses to consider (including items from Kent Reed's turkey mRNA analyses and Jocelyn Cuthbert's bovine miRNA analysis):
  * Panther overrepresentation tests. Shows GO processes that are enriched (number of DE genes divided by number of expected DE genes). We can't do this directly for miRNAs but could do it for the genes the miRNAs/families have known interactions with in other organisms?
  * Jocelyn used metascape and DAVID (Database for Annotation, Visualization, and Integrated Discovery) to analyze over/under represented GO terms, KEGG pathways, and Reactome pathways.
  * Table of mean quality-trimmed miRNA-seq read counts for all miRNAs. Highlight those below the cutoff for the presence/absence venns
  * Plot of reads and quality-filtered reads per sample. Barplot means by type-treatment and include error bars for ranges.
  * We know the mRNAs expressed in wild and domestic turkey livers and we know the miRNAs. We can predict miRNA-mRNA interactions. How can we visualize these interactions? Jocelyn used MirNET networks to do this?
  * quality-filtering info. Distribution of read lengths. Proportions filtered at various steps. Jocelyn shows proportions of the longer reads that fell into various categories, but we aren't currently doing anything with reads that weren't processed as miRNAs.
  * What proportion of reads mapped to something that we decided was a precursor miRNA? What proportion of known turkey miRNAs were present in our data?
  * What miRNAs can be assigned to known miRNA families? How many are novel?
  * Where in the genome do the miRNAs map?

Completed figures/tables (All based on control birds only):
  * Venn diagram by type. Presence = at least one sample in the type-treatment has 10 or more reads.
  * Pairwise Differential Expression tables - Domestic vs Wild
    - All miRNAs
    - 60 DE miRNAs
  * MA plot - Domestic vs Wild
  * PCA plots by type
    - rlog transformed
    - normal transformed
  * Heatmaps
    - Pairwise sample distance
      - rlog transformed
      - normal transformed
    - Expression by sample compared to wild mean
      - All miRNAs
        - normal transformed
        - rlog transformed
      - 60 DE miRNAs
        - normal transformed
        - rlog transformed
  * Boxplots by type for 60 DE miRNAs (2 pages)


Quality Control and mirdeep2 plots:
  * How many reads per sample before and after trimming?
  * Length distribution of unique reads and total reads? I have this with separate traces for each sample, but perhaps combine into one plot with 2 traces: unique read count and total read count.
  * How many reads mapped to the genome?


# Methods
Generating a list of "known" turkey miRNAs:
  * Compiled a list of 609 known or predicted precursor miRNA sequences for turkey from RNACentral (179 sequences) and Ensembl (430 sequences) and filtered for duplicates (identical or nested), resulting in 480 unique precursor miRNA sequences.
  * Used MatureBayes Online to predict mature miRNAs in the unique precursor miRNAs (2 each = 960 mature miRNA sequences), and filtered duplicates, resulting in 880 unique mature miRNA sequences.

Trimming miRNA-seq reads:
  * mapper.pl (from mirdeep2) and fastx_clipper/fastx_collapser gave similar results. Used mapper.pl:
    - Trimmed Illumina adapter sequences from the 3' end of reads and discarded reads <18bp.

Identifying miRNAs in the miRNA-seq data:
  * Used mirdeep2 and mirExpress
    - mirdeep2 attempts to identify known and novel miRNAs in miRNA-seq data and provides expression data (in some cases).
      - inputs:
        - trimmed miRNAseq dataset (all_samples.fasta)
        - a genome for the study species (GCA_000146605.3_Turkey_5.0_genomic_no_spaces.fna)
        - a file of known mature miRNAs for the study species (my 880 unique "known" turkey mature miRNAs - unique_mature_turkey_miRNAs_from_unique_hairpins.fa)
        - a file of known precursor miRNAs for the study species (my 480 "known" turkey precursor miRNAs - unique_precursor_turkey_miRNA_hairpins.fa)
        - a file of known mature miRNAs from related species (chicken - mirbase_21_data/gga_mirna_no_spaces.fa)
      - mirdeep2 process:
        1. Align trimmed reads to the genome.
        1. Look for stacks of aligned reads.
        1. Extract the genomic sequence surrounding each stack and attempt to fold it into a precursor miRNA hairpin structure.
        1.  hairpins are checked to see if they match one of the "known" turkey miRNAs
