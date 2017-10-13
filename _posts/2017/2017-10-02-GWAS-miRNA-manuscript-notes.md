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
  * mapper.pl (from mirdeep2) and fastx_clipper/fastx_collapser gave similar results. Used mapper.pl since it returned slightly higher unique and total readcounts:
    - Trimmed Illumina adapter sequences from the 3' end of reads and discarded reads <18bp.

Identifying miRNAs in the miRNA-seq data and generating expression data:

  * We used both mirdeep2 and miRExpress to identify miRNAs and generate expression data because each program uses different methods to identify miRNAs and each is better suited to identifying miRNAs under different conditions. miRExpress aligns miRNA-seq reads to known precursor miRNAs and any reads that align within ~6 bp of the position of the known mature miRNAs in the precursor sequence are counted. If the "known" mature miRNAs we predicted from the RNACentral and Ensembl precursor miRNAs are not correct, miRExpress will underestimate expression or fail to find expressed miRNAs, and novel miRNAs will not be identified at all. mirdeep2 aligns miRNA-seq reads to the genome, looks for stacks of aligned reads, attempts to fold the sequence surrounding each stack into a precursor miRNA hairpin structure, and checks whether the hairpin sequence matches one of the known precursor sequences. It is able to identify novel miRNAs, but doesn't provide easily extractable expression data for them, and fails to recognize stacks of aligned reads under some circumstances. When both tools correctly identify the same miRNA, expression values are identical, so we analyzed the data using both, and manually inspected the results, keeping the best data from each.

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

How does all this compare to the mirdeep2 run where I did not provide any information about "known" miRNAs? I'm worried that giving wrong information about miRNAs may be affecting how potential miRNAs are being scored and may result in underestimates of expression. mirdeep2 allows more "slop" than miRExpress in how stacks are aligned to the expected mature miRNAs but it does still have limits to what it will accept. Using the 513 novel miRNAs identified in all_data_run4 (with no "known" precursors or mature miRNAs) will give results that are unbiased by the process used to generate "known" miRNA sequences.

  * Take the 513 novel precursors and their mature and star sequences from mirdeep2 and get expression data from miRExpress expression data from miRExpress
    - files are in BigDisc/Analyses/turkey_mirna-seq/mirdeep2_analysis/all_data_run4/mirna_results_31_05_2016_t_12_00_05
      - precursors: novel_pres_31_05_2016_t_12_00_05_score-50_to_na.fa
      - 5p mature: novel_mature_31_05_2016_t_12_00_05_score-50_to_na.fa
      - 3p mature: novel_star_31_05_2016_t_12_00_05_score-50_to_na.fa
    - These
  * Compare to previous run. How many of these are the same miRNAs and how do the expression results compare?
  * miRExpress results for the 513 novel precursors:
    - Expressed at any level: 332 have -5p and -3p, 181 have only -5p (845 mature miRNAs
    total)
  * Use DESeq2 to get normalized counts. We'll use those to filter for presence/absence venns.
  * Presence/absence Venns
    - Filter for miRNAs with at least one sample with >=10 reads, and use 10 reads as the cutoff for presence/absence
    - 364 miRNAs pass 1_with_10 filter
  * Differential Expression
    - Use full dataset (845 mature miRNAs). Let DESeq2 do the filtering of low expression miRNAs
    - Type-treatment analysis:
      - 56 DE miRNAs in Domestic vs Wild: 20 up, 36 down
      - 26 DE miRNAs in AFB vs Control: 18 up, 8 down
      - 0 significant interaction effects
    - Domestic vs Wild, Control birds only
      - 61 DE miRNAs: 25 up, 36 down
  * How do the 513 novel miRNAs compare to the "known" turkey miRNAs?
   - Compared precursors for 513 novel miRNAs to known precursors. Of the 513 novel precursor miRNAs, 169 are nested in or contain one or more previously known turkey miRNAs (283 of the 590 unique known precursors)
  * How do the 513 novel miRNAs compare to human, mouse, and chicken miRNAs?
    - Built a blast database from all hsa, msu, and gga miRNA hairpin sequences in mirbase21 ```makeblastdb -in hsa_mmu_gga_hairpins-mirbase21.fa -out hsa_mmu_gga_hairpins-mirbase21 -dbtype nucl -hash_index```
    - Blast each novel miRNA against the hsa_msu_gga_hairpins ```blastn -outfmt "7 std gaps" -query 513_novel_precursors_from_mirdeep_run4.fa -db blastdb/hsa_mmu_gga_hairpins-mirbase21 -out blastout.txt```
      -
  * Predict targets
  * Where are they located in the genome? How are they spread acrossed the chromosomes? What proportion are in intergenic regions, and of those in genes, how many are in intron, exon?
  *
