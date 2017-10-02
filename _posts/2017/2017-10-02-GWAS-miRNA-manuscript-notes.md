---
title:  GWAS miRNA manuscript notes
date:  2017-10-02
layout: post
categories:
  - gsta mirna
---
Focusing on control birds and comparing types. Leaving AFB treatment out entirely for this analysis.

Analyses to consider (including items from Kent Reed's turkey mRNA analyses and Jocelyn Cuthbert's bovine miRNA analysis):
  * Table of expression for all miRNAs. Separate table for just differentially expressed miRNAs, corrected p-values and Log2FC's. Looks like Kent has been doing this as pairwise comparisons rather than with 2-way ANOVA.
  * Panther overrepresentation tests. Shows GO processes that are enriched (number of DE genes divided by number of expected DE genes). We can't do this directly for miRNAs but could do it for the genes the miRNAs/families have known interactions with in other organisms?
  * Jocelyn used metascape and DAVID (Database for Annotation, Visualization, and Integrated Discovery) to analyze over/under represented GO terms, KEGG pathways, and Reactome pathways.
  * Table of mean quality-trimmed miRNA-seq read counts for all miRNAs. Highlight those below the cutoff for the presence/absence venns
  * PCA plot
  * Presence absence venn. Include percentages as well as miRNA counts. Is my one sample with>=10 reads = presence reasonable?
  * Kent has a figure that combines presence/absence counts with updown-regulated info? https://drive.google.com/file/d/0Bx6Jssfhb5yrYXdIcXh5cU1VWFE/view?ts=599d9d28 (Fig 2 and 3). Jocelyn limited the plot to miRNAs with a total of >100 reads ()
  * Heatmaps (samples in columns, miRNAs in rows) with tree showing relationships between samples. Looks like Kent used just 2 colors for up vs down regulated. Maybe better to use 2 colors with 2 shades to show approximate Log2FC?
  * Scatterplot of log2FC for wild vs log2FC for domestic.
  * Plot of reads and quality-filtered reads per sample. Barplot means by type-treatment and include error bars for ranges.
  * We know the mRNAs expressed in wild and domestic turkey livers and we know the miRNAs. We can predict miRNA-mRNA interactions. How can we visualize these interactions? Jocelyn used MirNET networks to do this?
  * quality-filtering info. Distribution of read lengths. Proportions filtered at various steps. Jocelyn shows proportions of the longer reads that fell into various categories, but we aren't currently doing anything with reads that weren't processed as miRNAs.
  * What proportion of reads mapped to something that we decided was a precursor miRNA? What proportion of known turkey miRNAs were present in our data?
  * What miRNAs can be assigned to known miRNA families? How many are novel?
  * Where in the genome do the miRNAs map?
  * MA plots

Completed figures/tables:
  * Venn diagrams. Presence = at least one sample in the type-treatment has 10 or more reads.
    - By type - control birds only
    - By type X treatment - all birds
  * Pairwise Differential Expression tables
    - for all miRNAs - Control birds, Domestic vs Wild
    - for just significantly DE miRNAs - Control birds, Domestic vs Wild
  * MA plot - Control birds, Domestic vs Wild
  * PCA plots
    - By type - Control birds
    - By type X treatment - all birds

Todo:
