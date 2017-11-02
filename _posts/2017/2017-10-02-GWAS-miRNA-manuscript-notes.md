---
title:  GWAS miRNA manuscript notes
date:  2017-10-02
layout: post
categories:
  - gsta mirna
---
Focusing on control birds and comparing types. Leaving AFB treatment out entirely for this analysis.

## Analyses to consider (including items from Kent Reed's turkey mRNA analyses and Jocelyn Cuthbert's bovine miRNA analysis):

  * Table of mean quality-trimmed miRNA-seq read counts for all miRNAs. Highlight those below the cutoff for the presence/absence venns
  * Plot of reads and quality-filtered reads per sample. Barplot means by type-treatment and include error bars for ranges.
  * We know the mRNAs expressed in wild and domestic turkey livers and we know the miRNAs. We can predict miRNA-mRNA interactions. How can we visualize these interactions? Jocelyn used MirNET networks to do this?
  * quality-filtering info. Distribution of read lengths. Proportions filtered at various steps. Jocelyn shows proportions of the longer reads that fell into various categories, but we aren't currently doing anything with reads that weren't processed as miRNAs.
  * What proportion of reads mapped to something that we decided was a precursor miRNA? What proportion of predicted turkey miRNAs were present in our data?
  * What miRNAs can be assigned to known miRNA families? How many are novel?
  * How do the miRNAs (and especially the differentially expressed miRNAs) relate to miRNAs in other taxa? Blast against miRBase miRNAs
  * What mRNA interactions are known for the expressed miRNAs in other taxa and what processes are those mRNAs involved in? Jocelyn used metascape and DAVID (Database for Annotation, Visualization, and Integrated Discovery) to analyze overrepresented GO terms, KEGG pathways, and Reactome pathways for genes that are predicted targets of DE miRNAs.
  * Where in the genome do the miRNAs map? How are the differentially expressed miRNAs distributed in the genome? Are they randomly distributed or clustered on particular chromosomes? Are they located in intergenic regions? Introns? Exons?
  * What are the most highly expressed miRNAs? Are they the same in each type-treatment? What processes are they associated with in other taxa?
  * Distribution of readcounts by miRNA (or histogram of read counts?)

## Quality Control and mirdeep2 plots:

  * How many reads per sample before and after trimming?
  * Length distribution of unique reads and total reads? I have this with separate traces for each sample, but perhaps combine into one plot with 2 traces: unique read count and total read count.
  * How many reads mapped to the genome?

## Previously predicted turkey miRNAs:

There are no turkey miRNAs in miRBase, the repository for experimentally identified precursor and mature miRNAs but there are predicted precursor miRNAs in Ensembl and RNACentral:
  * Compiled a list of 609 predicted miRNA sequences for turkey from RNACentral (179 sequences) and Ensembl (430 sequences). Many are identical or very similar, but I kept duplicates for this analysis.

## Trimming miRNA-seq reads:

Trimmed Illumina adapter sequences from the 3' end of reads and discarded reads <18bp. Both mapper.pl (from mirdeep2) and fastx_clipper/fastx_collapser gave similar results. Used mapper.pl.

## Identifying miRNAs in the miRNA-seq data:

We used mirdeep2 to identify miRNAs in the dataset. The program identifies miRNAs by aligning trimmed reads to the genome (Turkey 5.0 assembly GCA_000146605.3), finding stacks of aligned reads, extracting the genomic sequence surrounding each stack and attempting to fold it into a precursor miRNA hairpin structure. The potential precursor miRNAs are scored and filtered based on how well the folded sequence conforms to the expected structure, how closely the stacks of reads align to the expected positions of mature 5p or 3p miRNAs within a hairpin structure, and similarity to known miRNAs of other taxa from miRBase. The program can also use known miRNA sequences from the study taxon to help score potential miRNAs, but including the predicted turkey miRNAs from Ensembl and RNACentral did not result in any additional miRNAs being identified.
  * 513 putative precursor miRNAs were identified, each with a putative 5p and 3p mature miRNA sequence.

## Expression analysis

  * Take the 513 putative precursors and their mature and star sequences from mirdeep2 and get expression data from miRExpress
    - files are in BigDisc/Analyses/turkey_mirna-seq/mirdeep2_analysis/all_data_run4/mirna_results_31_05_2016_t_12_00_05
      - precursors: novel_pres_31_05_2016_t_12_00_05_score-50_to_na.fa
      - 5p mature: novel_mature_31_05_2016_t_12_00_05_score-50_to_na.fa
      - 3p mature: novel_star_31_05_2016_t_12_00_05_score-50_to_na.fa
  * miRExpress results for the 513 putative precursors:
    - Expressed at any level: 332 have -5p and -3p, 181 have only -5p (845 mature miRNAs
    total)
  * Use DESeq2 to get normalized counts. We'll use those to filter for presence/absence venns.
    - Normalizes based on total expressed readcounts
    - Independently prefilters data to minimize multiple comparisons
    - Wald tests with Benjamini-Hochberg adjustment (adjusted p<0.1)
    - Shrinkage estimation of log fold changes to minimize tendency of random variation in miRNAs with very low readcounts from overpowering meaningful variation.
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

## Compare putative turkey miRNAs to human, mouse, and chicken miRNAs

  * Built a blast database (on the workstation) from all hsa, msu, and gga miRNA hairpin sequences in mirbase21 and the 590 unique turkey predicted precursors from Ensemble and RNACentral
~~~
makeblastdb -in all_turkey_and_mirbase21_hsa_mmu_gga_precursors.fa -out all_turkey_and_mirbase21_hsa_mmu_gga_precursors -dbtype nucl -hash_index
~~~
  * Blast each putative miRNA against the Ensembl, RNACentral and mirBase21 precursors
~~~
blastn -outfmt "7 std gaps" -query 513_novel_precursors_from_mirdeep_run4.fa -db blastdb/all_turkey_and_mirbase21_hsa_mmu_gga_precursors -out 513_novel_vs_all_turkey_and_mirbase21_hsa_mmu_gga-blastout.txt
~~~
  * Filter out blast hits where the alignment doesn't include 90% of the shorter read. We don't want "end overlaps". All accepted alignments had e-score <= 3E-15.
~~~
Ok: ----------   Ok: ----------   Ok: ----------   Not Ok: ---------  
.   ----------         ------          ----------               ----------
~~~
  * 203 of the 513 miRNAs have high similarity to either a predicted turkey precursor miRNA (from Ensembl or RNACentral) or to a known chicken, human, or mouse precursor miRNA from miRBase (175 of the 307 precursors where at least one of the mature miRNAs has enough expression for DESeq to evaluate).
    - 181 of the 513 miRNAs have high similarity to a chicken, human, or mouse precursor. (160 of the 307 precursors where at least one of the miRNAs has enough expression for DESEQ to evaluate)
    - 183 of the 513 miRNAs have similarity to a predicted turkey Ensembl or RNACentral miRNA. (160 of the 307 precursors where at least one of the miRNAs has enough expression for DESEQ to evaluate)
  * Where there is more than one, the top hit from each taxa are all the same miRNA family. 196 of the 513 miRNAs could be assigned to a miRNA family based on annotations of similar predicted turkey, or known chicken, human, or mouse precursors. (171 of 307 precursors with high enough expression for DESEQ)

## Predict targets of of up/down regulated miRNAs

Predicting targets requires accurately annotated 3'UTRs for all genes in the genome. Rather than directly predicting targets in the turkey genome, get the families for each DE miRNA (where one can be determined) and get the list of interacting mRNAs in chicken from Targetscan. Filter the list for just those with Total context++ score <-0.70 and Aggregate PCT > 0.3 (if PCT is N/A, don't filter based on PCT - we are less concerned with conservation of target than context) and get a list of unique genes that we can use for GO/KEGG analysis. Compare that list to Kent Reed's mRNA data and filter for just the genes that are also present in turkey liver (present = average reads per type-treatment > 1)
  * 523 unique genes for the 61 DE Dom vs Wild miRNA in Control only. 324 present in turkey liver.
  * 488 unique genes for the 56 DE Dom vs Wild in all birds. 295 present in turkey liver.
  * 318 unique genes for the 26 DE AFB vs Control miRNAs in all birds. 161 present in turkey liver.

## DAVID analysis of predicted targets
  * Use the DAVID conversion tool to convert the generic gene names to species-specific Entrez IDs. I converted them to Meleagris, Gallus, and Homo so I can compare since Meleagris annotations aren't as good as other species. Not proceeding with Homo data... it is just too different from turkey and the Gallus annotations are good enough.
  * For the GO/KEGG enrichment analysis, DAVID compares to a background. I used 2 backgrounds:
    * All annotated genes for the taxon (Meleagris for the Meleagris version of the genes and Gallus for the Gallus version)
    * Just genes that expressed in turkey liver (from Kent Reed's mRNA data) after converting their generic gene names to Gallus and Meleagris species-specific Entrez IDs, since DAVID can't use generic gene names for a background.
    * So, the four comparisons made were:
      - Meleagris genes vs Meleagris background
      - Meleagris genes vs genes expressed in turkey liver (converted to Meleagris-specific Entrez IDs)
      - Gallus genes vs Gallus background
      - Gallus genes vs genes expressed in turkey liver (converted to Gallus-specific Entrez IDs)
  * 58 GO/KEGG terms enriched in all 4 comparisons for Dom vs Wild in Control only
  * 61 GO/KEGG terms enriched in all 4 comparisons for Dom vs Wild in all birds
  * 1 GO/KEGG term enriched in all 4 comparisons for AFB vs Control in all birds
  * I have tables showing enriched terms and for which comparisons they were enriched in my DAVID_summary file.

## Where are they located in the genome?

  * How are they spread acrossed the chromosomes?
  * What proportion are in intergenic regions, and of those in genes, how many are in intron, exon?
  * Mapping to chromosomes:
    - Make a conversion table for Genbank accession to refseq accession to chromosome number.
      - The Turkey 5 assembly report has this info but for all 230000 contigs in the assembly. I wrote a script to filter for just the ones where we identified miRNAs (79 contigs including all chromosomes except 18 and W... which is good since we are using male birds which should all be ZZ)
    - Write a script to pull all gene and cds annotations for a turkey chromosome. If an miRNA position (use center nucleotide? both ends?) is not contained in a gene classify as "intergenic". If in a gene but not a cds, classify as "intron". If in a cds, classify as "exon".
      - Can't use gene and cds files from Ensembl--they are for turkey2.01 and I used turkey5 for everything else. Downloaded the annotations for Turkey5 from Genbank and filtered for just protein coding genes and their coding sequences (~18500 genes).
      - For about 30 miRNAs the status (in or out of gene/cds) would be different depending on whether you used the start, center, or end miRNA position. If any part was in, I called it "in".
    - Plotted positions on karyogram, colored by intergenic, intron, or exon.
    - Plotted positions on karyogram, colored by whether they had sufficient expression for DESeQ.
    - The karyotype figures will only include the 455 miRNAs that map to a known position in a chromosome (CM#s), not the 1 that maps to a scaffold with unknown position in chromosome 1 or the 57 that map to scaffolds that haven't been assigned to a chromosome (ADDD and KN#s).
