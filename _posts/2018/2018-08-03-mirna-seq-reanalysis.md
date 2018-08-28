---
title:  mirna-seq reanalysis
date:  2018-08-03
layout: post
categories:
  - gsta mirna
---

While working on the turkey miRNA-seq GWAS manuscript, I was finding that the number of novel miRNAs I identified is far in excess of similar projects. After reading more about best practices for identifying miRNAs from small RNA reads, I realize I need to do some additional filtering of reads before attempting to identify miRNAs and filter potential miRNAs that are likely not really miRNAs to reduce the number of false positives.

# Process

## Preprocessing
  * Trimmed adapters, removed end bases with quality <20, and removed reads <18bp with cutadapt.
  * Collapsed identical reads and converted from fastq to fasta with fastx_collapser
  * Looked at read length distribution.
  * Removed reads >35bp
  * Concatenated individual samples into a single read file (all_samples.fa)
  * Mapped concatenated reads (for mirdeep2) and the individual sample reads (for miRExpress) to a turkey cds and noncoding RNA database and kept only reads that do NOT map (all_samples-not_cds_or_ncrna.fa).
    - Made the database by downloading the cds and ncrna sequence fasta files from Turkey Ensembl 93. Searched for sequences in the ncrna file labeled as miRNAs and removed them. Concatenated the non-miRNA ncrna file to the cds file and built a bowtie index from it.
    - I may go back and figure out how many of the mapping reads I discarded matched to each type of sequence. It would make a good figure for the paper and give some info about what else is in the small RNA library.
    - Compared length distribution of discarded mapped sequences and kept non-mapping sequences. The two sets have very different distributions. The non-mapping reads have mostly 22bp reads while the mapping reads have the most 18bp reads and readcounts decrease with length.

## Identifying miRNAs
  * Align reads to Turkey5.0 genome with mirdeep2. Don't give any known turkey precursors or mature miRNAs. Do give avian, mouse, and human miRNAs as other species to compare (from mirbase22):
    - Anas platyrhynchos (4 precursors, 8 mature) [BGI_duck_1.0]
    - Columba livia (248 precursors, 420 mature) [CLiv1.0]
    - Gallus gallus (882 precursors, 1232 mature) [Gallus_gallus-5.0]
    - Taeniopygia guttata (247 precursors, 334 mature) [taeGlu3.2.4]
    - Mus musculus (1234 precursors, 1978 mature) [GRCm38]
    - Homo sapiens (1917 precursors, 2654 mature) [GRCh38]
  * mirdeep2 identified 600 miRNAs with mirdeep score >= 0
    - 2 have hits to Rfam - discard as likely not miRNAs
    - 430 (>70%) have seed similarity to avian, mouse, or human miRNAs from mirbase. This is reassuring.
  * Started with the mirdeep result.csv. Removed the top section with incomplete signal to noise info (it doesn't get calculated if you don't provide mirbase miRNAs for your species). Used the "location" column to generated separate contig, start, end, and strand columns in Excel. Use Excel to convert this to a 600_novel_precursors.txt and 1200_novel_mature_mirnas.txt for input to miRExpress.

## Get expression data
  * Convert the trimmed, collapsed, length filtered, not-cds or ncrna reads to the format needed for miRExpress (tab-delimited readcount and read sequence instead of fasta) using my custom script (convert_fasta_to_miRExpress_input.py).
  * Run the alignmentSIMD and analysis steps of miRExpress using the converted reads, the 600 precursor miRNAs and 1200 mature miRNAs. We don't need to run the other steps since our data are already collapsed, filtered, and in the format required.
  * Reformat the miRExpress output to make combining the individual tables into a single table easier, using my custom script (reformat_mirexpress_expression_for_easier_comparison_between_samples.py), and combine them into a single table in Excel for filtering.
  * Calculate reads per million mapped reads (PMMR) and filter out putative miRNAs that don't have PMMR>=5.0 in at least 2 samples (PMMR5x2).
    - How I decided on PMMR5 as the cutoff:
      - PMMR5 corresponds to 7 raw reads in my lowest readcount sample and 20 raw reads in my highest readcount sample.
      - Others have filtered as high as PMMR15, so PMMR5 is not too high of a cutoff. PMMR15 corresponds to 20-59 raw reads, and not accepting 58 reads as evidence of expression feels overly strict and eliminates an additional 60 miRNAs.
      - I also considered PMMR3 (4-12 raw reads) but accepting only 4 raw reads as evidence of expression feels insufficient and only keeps ~30 additional miRNAs.
  * With PMMR5x2 cutoff: 299 mature miRNAs from 218 precursors (81 with 5p & 3p expression, 137 with only 5p)

## Compare precursors to known miRNAs to identify miRNA families
  * Get fasta sequences for the 218 precursors (using my BioinformaticScraps filterfasta.py)
  * Build blast db of predicted Ensembl and RNACentral turkey miRNAs and mirbase22 avian, mouse, and human miRNAs
  * Blast 218 PMMR5x2 precursors against the db and non-matching against ALL mirbase22 precursors for all species. Then, for all without matches that allow assigning to a family, use Turkey BLAT to look for annotations for that position in the genome and Blastn against nr to look for similarity to DNA/RNA from any organism
    - 163 assigned to family (full length alignments--most are exact--and escore <1e20). Keep
    - 18 are likely repeat elements, mtRNAs, mRNAs, other ncRNA. Discard
    - 24 have only weak mirdeep2 support (mirdeep score<10) and are likely mirdeep false positives. Discard
    - 13 don't have evidence that they are NOT miRNAs and have higher mirdeep2 support (mirdeep scores>75) - possible novel turkey miRNAs. Keep with miRNA family assigned as "Novel-1"  through "Novel-13"
  * 176 likely precursor miRNAs continuing on to further analysis (163 assigned to a miRNA family + 13 possibly novel to turkey)

## Differential expression analysis
  * Filter miRExpress table to just the mature miRNAs for the 176 likely precursors and export table for R (Expression_data_forR.csv)
    - 256 mature miRNAs from 176 precursors.
      - 80 precursors with 5p & 3p mature miRNA expression, 96 precursors with just 5p mature miRNA expression (at PMMR5x2 level).
      - 242 mature miRNAs with an assigned miRNA family, 14 unknown (potentially novel turkey miRNAs)
  * Differential expression with DESEQ in R (Expression_Analysis.R)
    - BH adjusted significance cutoff = 0.05
    - Analyzing with an ANOVA-like model so we can look for effects of treatment, type, and type-treatment interactions: design \~ treatment \* type
    - Type: 16 miRNAs significantly differentially expressed (SDE) AND Log2 Fold Change (LFC)>=1 in domestic vs wild
      - 12 down, 4 up (1 novel)
    - Treatment: 11 SDE and LFC>1 in AFB vs control
      - 1 down, 10 up
    - 0 SDE interaction effects
  * PCA - the separation between groups isn't drastic or complete but...
    - PC1 separates Domestic vs Wild with 31% of the variance. The range of variation along this axis is much larger for Wild than for Domestic.
    - PC2 separates AFB vs Control with 22% of the variance. Range of variation along this axis is just a bit larger for AFB than control.
  * Heatmaps. Rethink this. See what others are doing. I don't get a clear picture because even the SDE miRNAs have fairly small expression differences between type and treatment--especially compared to the differences in expression between different miRNAs is general.

## Predict mRNA targets of DE miRNAs with Targetscan
  * Targetscan7.2, using chicken miRNA data, search for predicted miRNA targets for each of the DE miRNAs and download all tables.
    - Using chicken (rather than making direct predictions against annotated turkey UTRs) because:
      - It is the most similar species in the Targetscan database
      - The UTRs of chicken mRNAs are better annotated than turkey mRNAs
      - A major part of the scoring process for determining likely miRNA-mRNA interactions is whether the interaction is conserved. So the most likely interactions for chicken in the database are those that are conserved in mammals--and likely conserved in turkey as well.
  * Filter for only targets with Cumulative weighted context++ score <=-0.5 using my parse_targetscan_output.py script. Keep the gene name, description, and which miRNA(s) were predicted to target it.
  - This cutoff (-0.5) is high enough that we keep at least the best target for every miRNA while only keeping at most the top 25% of predicted targets for any miRNA. We are likely missing some true targets but are minimizing the number of false positives.
  - When I tried -0.7 several miRNAs had no targets that passed the filter. I found papers going as low as -0.4 so -0.5 is not extreme.
  - Cutoff at -0.4 is high enough to keep at least the best 2 targets for each miRNA and keep at most the best third of predicted targets for any miRNA.
  - Other studies have found that the chances of being able to detect miRNA effects experimentally goes down as the context score increases, so by using the lowest ones we minimize false positives.
  * Further filter gene target list to remove genes not present in the turkey liver mRNAseq data (present = mean readcount per sample > 1). If an mRNA is not present at detectable levels in turkey liver (in any of our type-treatments) then any predicted miRNA-mRNA interactions involving that mRNA are probably not occurring or biologically relevant in turkey liver.
    - Type: 223 gene targets, 139 have mRNAs present in turkey liver
    - Treatment: 136 gene targets, 97 have mRNAs present in turkey liver

## DAVID GO/KEGG analysis
