---
title: miRNA-Seq analysis summary
date: 2016-07-19T10:10:44+00:00
layout: post
categories:
  - gsta mirna
---
Four treatment groups with four samples each:

  * Wild-Control
  * Wild-AFB
  * Domestic-Control
  * Domestic-AFB

Preprocessing:

  * Trimmed Illumina adapter sequences and discarded reads \<18bp.
  * Compared mapper.pl and fastx tools and ran early analysis steps using both. Results are very similar but mapper.pl pre-processed data yields a few more expressed miRNAs so I am presenting those results.

"Known" turkey miRNAs as input to the analysis:

  * miRNA-Seq analysis methods give better results if you can provide information on previously known mature and precursor miRNAs-preferably validated miRNAs from miRBase. There are no turkey miRNAs in miRBase, so I used turkey precursor miRNA sequences from RNACentral and Ensembl, and generated predicted mature miRNA sequences from them using MatureBayes. I collapsed identical sequences, renaming to keep original source information.
  * 480 unique precursors
  * 880 unique mature miRNAs

I used two programs to identify miRNAs in the miRNA-Seq data and determine their expression levels: miRExpress and mirDeep2

  * miRExpress aligns reads to known precursor miRNAs.
    * Gives expression data for known miRNAs, but can't identify novel miRNAs
    * Makes it easy to spot and correct major problems with the mature miRNA predictions I generated from the known precursor miRNA sequences
  * mirDeep2 aligns reads to the genome sequence, folds the sequence surrounding aligned reads to identify potential precursor miRNA hairpin structures, and then compares to known miRNAs
    * Gives expression data for known AND novel miRNAs
    * Adjusts for small problems with the mature miRNA predictions, but chokes on major problems.
  * Both programs give similar expression results where they overlap so I used expression data from mirDeep2 and substituted data from miRExpress where there were major problems with the mature miRNA predictions.
  * Result summary:
    * 339 novel precursor miRNAs with mature miRNAs expressed in the dataset
    * 341 known precursor miRNAs with mature miRNAs expressed in the dataset
    * 472 unique mature miRNAs after filtering low expression miRNAs
      * To be included, a miRNA needed at least 5 reads in all samples combined and at least 2 samples that have more than 2 reads.

I used DESeq2 for differential expression analysis:

  * There is disagreement about the best way to normalize miRNA-Seq data. Tam et al. 2015 compared several methods, but the method they recommend as best (TMM) has been questioned by other researchers. DESeq2 uses a method that gives better results than simpler methods (like scaling to the library size) but isn't as controversial as TMM.
  * P-values should really be adjusted because of the large number of statistical tests, but I used the uncorrected p-values. Since the purpose of this exercise is to identify miRNAs most likely involved in GSTA regulation that we will test further in the lab, it is better to risk including miRNAs that lab tests will show are unimportant than to eliminate miRNAs that really are important (i.e., Type I errors will be corrected in the lab, Type II won't).

Identifying possible GSTA-related miRNAs:

  * There are at least three ways that differences in miRNA to GSTA mRNA interactions in Wild and Domestic turkeys could lead to the the observed GSTA expression differences:

# 1) Differences in expression level of a miRNA that interacts with GSTA mRNA ###

  * Identify miRNAs in Wild that have the pattern expected for a miRNA controlling GSTA expression, i.e., miRNAs down-regulated with AFB in Wild,
  * Within that subset, identify miRNAs that are either:
    * NOT down-regulated with AFB in Domestic (pattern 1), or
    * are down-regulated in Domestic but are still more highly expressed than in Wild (pattern 2)
  * I found these by testing for significantly differentially expressed miRNAs where WA\<WC and DA\>WA. (This also returns uninteresting pattern 5, but no miRNAs had that pattern- WA\<AC and DA\>WA and DA\>DC.)

    ![Interesting expression patterns]( {{site.image_path}}wp-content/uploads/2016/07/Plot_interesting_expression_patterns_trimmed.png )

  * 9 miRNAs have interesting patterns 1 or 2 (Significantly WA\<WC and DA\>WA):

| miRNA_id | miRNA name | sequence | precursor |
| -------- | ---------- | -------- | --------- |
| mirna_002 | ENSMGAG00000000187-5p | AAAAGUGCUUACAGUGCAGGUA | ENSMGAG00000000187 |
| mirna_036 | URS646108-5p/ENSMGAG154-5p | AAGUGCUCAUAGUGCAGGUAGC | ENSMGAG00000000154/URS0000646108 |
| mirna_146 | ENSMGAG00000000048-3p_mod | CAGUGCAAUAAUGAAAGGGCGU | ENSMGAG00000000048 |
| mirna_225 | ENSMGAG454-3p/URS710F84-3p | GAAAAAUUGCACGGUAUCCAUC | ENSMGAG00000000454/URS0000710F84 |
| mirna_242 | CM000973.2_20294-3p | GCCGGGGCGGUCGGGCUG | CM000973.2_20294 |
| mirna_270 | CM000965.2_9936-5p | GUUACGUGACUGCUUGGAGGA | CM000965.2_9936 |
| mirna_283 | ENSMGAG00000000598-5p | UAAGGUGCAUCUAGUGCAGUUA | ENSMGAG00000000598 |
| mirna_317 | ENSMGAG245-3p/URS68824F-3p | UAGUGCAAUAUUGCUUAUAGGG | ENSMGAG00000000245/URS000068824F |
| mirna_377 | ENSMGAG00000000218-5p | UGACAAUGUUGCACUACUGUCU | ENSMGAG00000000218 |

![miRNAs with interesting expression patterns]( {{site.image_path}}wp-content/uploads/2016/07/Expression_boxplots-miRNAs_with_interesting_patterns.png )

# 2) Differences in GSTA mRNA sequence that changes a miRNA to GSTA mRNA interaction ###

  * I used the Domestic GSTA3 and GSTA4 mRNA sequences and all known SNPs in Eastern Wild to generate Wild GSTA3 and GSTA4 mRNA sequences.
  * For every miRNA expressed in Domestic AFB, use Starmir to predict interactions with the Domestic and with Wild mRNAs. Starmir looks for seed-based and seedless interactions in the UTRs and cds and returns a probability score for every predicted miRNA-mRNA interaction.
  * Using a probability score cutoff of 0.75, I looked for miRNAs with predicted interactions at SNP positions in Domestic but not Wild.
    * 13 miRNAs have predicted interactions at SNPs in Domestic but not Wild, but in every case either:
      * The difference between the Wild and Domestic probability scores is less than 0.1 (suggesting that the Domestic score just barely passed the 0.75 cutoff while the Wild score barely missed the cutoff), or
      * There are overlapping predicted interactions with even higher probability scores in both Domestic and Wild (suggesting that the miRNA has several predicted interactions in that region of the mRNA and the SNP just effects one that is less likely than others).
  * For each miRNA, I also looked at how the highest probability score at any site along the mRNA (not just at SNPs) differs between DOmestic and Wild.

# 3) Differences in a miRNA sequence that changes a miRNA to GSTA mRNA interaction ###

  * 1 miRNAs with SNPs:
    * miRNA_094    ENSMGAG00000000471-5p_mod

    ~~~
    5....................88659
    CAGGGGTGCTGCAGAGCCTTCAGC   12 (C or nothing in all samples)
    TAGGGGTGCTGCAGAGCCTTCAGC 37   (T in all samples)
    ...................99998
    ~~~

# 4) miRNAs with different predicted interactions with Wild and Domestic GSTA3/4 mRNAs: ###
