---
title:  mirna-seq reanalysis
date:  2018-08-03
layout: post
categories:
  - gsta mirna
---

While working on the turkey miRNA-seq GWAS manuscript, I was finding that the number of novel miRNAs I am finding is far in excess of similar projects. After reading more about best practices for identifying miRNAs from small RNA reads, I realize I need to do some additional filtering up front to reduce the number of false positives.

# Process

## Preprocessing
  * Trimmed adapters, removed end bases with quality <20, and removed reads <18bp with cutadapt.
  * Collapsed identical reads and converted from fastq to fasta with fastx_collapser
  * Looked at read length distribution.
  * Removed reads >35bp
  * Concatenated individual samples into a single read file (all_samples.fa)
  * Mapped concatenated reads (for mirdeep) and the individual sample reads (for miRExpress) to a turkey cds and noncoding RNA database and kept only reads that do NOT map (all_samples-not_cds_or_ncrna.fa).
    - Made the database by downloading the cds and ncrna sequence fasta files from Turkey Ensembl 93. Searched for sequences in the ncrna file labeled as miRNAs and removed them. Concatenated the non-miRNA ncrna file to the cds file and built a bowtie index from it.
    - I may go back and figure out how many of the mapping reads I discarded matched to each type of sequence. It would make a good figure for the paper and give some info about what else is in the small RNA library.
    - Compared length distribution of discarded mapped sequences and kept non-mapping sequences. The two sets have very different distributions. The non-mapping reads have mostly 22bp reads while the mapping reads have the most 18bp reads and decrease with length.

## Identifying miRNAs
  * Align reads to Turkey5.0 genome with mirdeep2. Don't give any known turkey precursors or mature miRNAs. Do give avian, mouse, and human miRNAs as other species to compare (from mirbase22):
    - Anas platyrhynchos (4 precursors, 8 mature) [BGI_duck_1.0]
    - Columba livia (248 precursors, 420 mature) [CLiv1.0]
    - Gallus gallus (882 precursors, 1232 mature) [Gallus_gallus-5.0]
    - Taeniopygia guttata (247 precursors, 334 mature) [taeGlu3.2.4]
    - Mus musculus (1234 precursors, 1978 mature) [GRCm38]
    - Homo sapiens (1917 precursors, 2654 mature) [GRCh38]
  * mirdeep2 identified 600 miRNAs with mirdeep score >= 0
    - 2 have hits to Rfam
    - 430 have seed similarity to avian, mouse, or human miRNAs from mirbase.
  * Started with the mirdeep result.csv. Removed the top section with incomplete signal to noise info (it doesn't get calculated if you don't provide mirbase miRNAs for your species). Used the "location" column to generated separate contig, start, end, and strand columns in Excel. Use Excel to convert this to a 600_novel_precursors.txt and 1200_novel_mature_mirnas.txt for input to miRExpress.

## Get expression data
  * Convert the trimmed, collapsed, length filtered, not-cds or ncrna reads to the format needed for miRExpress (tab-delimited readcount and read sequence instead of fasta) using my custom script (convert_fasta_to_miRExpress_input.py).
  Run the alignmentSIMD and analysis steps of miRExpress using the converted reads, the 600 precursor miRNAs and 1200 mature miRNAs. We don't need to run the other steps since our data are alread collapsed, filtered, and in the format required.
  * Reformat the miRExpress output to make combining the individual tables into a single table easier, using my custom script (reformat_mirexpress_expression_for_easier_comparison_between_samples.py), and combine them into a single table in Excel for filtering.
  * Calculate reads per million mapped reads (PMMR) and filter out putative miRNAs with PMMR<5.0.
    - 299 mature miRNAs from 218 precursors (81 with 5p & 3p expression, 137 with only 5p)

## Compare precursors to known miRNAs to identify
  * Get fasta sequences for the 218 precursors (using my BioinformaticScraps filterfasta.py)
  * Build blast db of predicted Ensembl and RNACentral turkey miRNAs and mirbase22 avian, mouse, and human miRNAs
  * Blast 218 PMMR5 precursors against the db and non-matching against ALL mirbase22 precursors for all species. Then, for all without matches that allow assigning to a family, use Turkey BLAT to look for annotations for that position in the genome and Blastn against nr to look for similarity to DNA/RNA from any organism
    - 163 assigned to family (full length alignments--most are exact--and escore <1e20).
    - 37 don't have evidence that they are NOT miRNAs - possible novel turkey miRNAs.
    - 18 are likely repeat elements, mtRNAs, mRNAs, other ncRNA.
  * 200 (163+37) likely precursor miRNAs continuing on to further analysis

## Differential expression analysis
  * Filter miRExpress table to just the mature miRNAs for the 200 likely precursors
