---
title:  miRNA analysis notes- overly permissive analysis
date:  2017-10-18
layout: post
categories:
  - gsta mirna
---
While working on the GWAS miRNA manuscript I realized the analysis I used to identify GSTA3-related miRNAs was not going to be usable for a broader genome wide association study. For the GSTA3 analysis, it was critical to find every possible miRNA even if it meant also finding many false positives, but I can't justify that for the GWAS analysis so I started over. These are notes I started compiling about that more permissive analysis. I don't need them mixed in with my GWAS analysis notes, but I also don't want to lose the info, so I am putting them here.

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

Generating a list of “known” turkey miRNAs:

  * Compiled a list of 609 known or predicted precursor miRNA sequences for turkey from RNACentral (179 sequences) and Ensembl (430 sequences) and filtered for duplicates (identical or nested), resulting in 480 unique precursor miRNA sequences.
  * Used MatureBayes Online to predict mature miRNAs in the unique precursor miRNAs (2 each = 960 mature miRNA sequences), and filtered duplicates, resulting in 880 unique mature miRNA sequences.

Trimming miRNA-seq reads:

  * mapper.pl (from mirdeep2) and fastx_clipper/fastx_collapser gave similar results. Used mapper.pl since it returned slightly higher unique and total readcounts:
  * Trimmed Illumina adapter sequences from the 3’ end of reads and discarded reads <18bp.

Identifying miRNAs in the miRNA-seq data:

We used both mirdeep2 and miRExpress to identify miRNAs and generate expression data because each program uses different methods to identify miRNAs and each is better suited to identifying miRNAs under different conditions. miRExpress aligns miRNA-seq reads to known precursor miRNAs and any reads that align within ~6 bp of the position of the known mature miRNAs in the precursor sequence are counted. If the "known" mature miRNAs we predicted from the RNACentral and Ensembl precursor miRNAs are not correct, miRExpress will underestimate expression or fail to find expressed miRNAs, and novel miRNAs will not be identified at all. mirdeep2 aligns miRNA-seq reads to the genome, looks for stacks of aligned reads, attempts to fold the sequence surrounding each stack into a precursor miRNA hairpin structure, and checks whether the hairpin sequence matches one of the known precursor sequences. It is able to identify novel miRNAs, but doesn't provide easily extractable expression data for them, and fails to recognize stacks of aligned reads under some circumstances. When both tools correctly identify the same miRNA, expression values are identical, so we analyzed the data using both, and manually inspected the results, keeping the best data from each.

  * mirdeep2 attempts to identify known and novel miRNAs in miRNA-seq data and provides expression data (in some cases).
    - inputs:
      - trimmed miRNAseq dataset (all_samples.fasta)
      - a genome for the study species (GCA_000146605.3_Turkey_5.0_genomic_no_spaces.fna)
      - a file of known mature miRNAs for the study species (my 880 unique "known" turkey mature miRNAs - unique_mature_turkey_miRNAs_from_unique_hairpins.fa)
      - a file of known precursor miRNAs for the study species (my 480 "known" turkey precursor miRNAs - unique_precursor_turkey_miRNA_hairpins.fa)
      - a file of known mature miRNAs from related species (994 chicken mature miRNAs from mirbase21 - mirbase_21_data/gga_mirna_no_spaces.fa)
    - mirdeep2 process:
      - Align trimmed reads to the genome.
      - Look for stacks of aligned reads.
      - Extract the genomic sequence surrounding each stack and attempt to fold it into a precursor miRNA hairpin structure.
      - hairpins are checked to see if they match one of the "known" turkey miRNAs and similarity to known miRNAs from other taxa is used to help score matches.
      - Returns information about 3 categories of precursor miRNAs:
        - 339 "Novel" - precursor miRNAs with mature miRNAs present in the dataset but that don't match any of the provided precursor miRNAs. mirdeep2 doesn't provide expression data for these, so we used miRExpress to generate readcounts.
        - 191 "Detected" - precursor miRNAs with mature miRNAs present in the dataset and that match one of the provided precursor miRNAs. We used the expression data provided by mirdeep2.
        - 150 "Not detected"  - precursor miRNAs with mature miRNAs present in the dataset, but mirdeep2 detected a problem with the hairpin or the positions of the stacks. These were manually inspected:
          - 97 would not meet minimum expression cutoffs even if they could be fixed so they were
        not included in the data for expression analysis.
          - 38 had reads that didn't align in clear stacks due to repetitive precursor miRNA sequence, but the reads could be realigned to the expected positions. These were manually realigned and counted to generate expression data.
          - 15 had reads that aligned in the position expected based on our predictions of mature miRNAs from RNACentral and Ensembl, but not according to the folding predictions generated by mirdeep2. They correctly aligned in miRExpress so we used the expression data from that program.
        - After filtering for minimum expression requirements (at least one sample with >=10 reads) we have 387 expression profiles for 341 unique mature miRNAs (some unique mature miRNAs could potentially be the product of more than one unique precursor miRNA).

Differential expression:

  * Normalized and analyzed with DESeq2:
    - Normalizes based on total expressed readcounts
    - Independently prefilters data to minimize multiple comparisons
    - Wald tests with Benjamini-Hochberg adjustment (adjusted p<0.1)
    - Shrinkage estimation of log fold changes
    - Two way ANOVA-like model to compare Domestic vs Wild, AFB vs Control, and interaction effects:
      - Result
        - No significant interaction effects
        - 59 significantly DE miRNAs by type: 21 up-regulated, 38 down-regulated in Domestic
        - 27 significantly DE miRNAs by treatment:
      - Tables of test results/adjusted p-values
      - Figures:
        - Quad venn diagram of presence (>=10 reads in one sample of group)
        - Boxplots of expression
          - by type for 59 DE miRNAs
          - by treatment for 27 DE miRNAs
        - MA plots:
          - Domestic vs Wild
          - AFB vs Control
        - PCA Plots by type-treatment
        - Heatmeaps:
          - Pairwise sample distance
          - Expression by sample
            - all miRNAs
            - 59 DE miRNAs by type
            - 27 DE miRNAs by treatment
    - Pairwise model to compare Domestic vs Wild using only Control birds:
    - Result
      - 60 significantly DE miRNAs by type: 21 up-regulated, 39 down-regulated in Domestic
    - Tables of test results/adjusted p-values
    - Figures:
      - Venn diagram of presence (>=10 reads in one sample of group)
      - Boxplot of expression by type for 60 DE miRNAs
      - MA Plot Domestic vs Wild
      - PCA Plot by type
      - Heatmaps:
        - Pairwise sample distance
        - Expression by sample:
          - all miRNAs
          - 60 DE miRNAs
