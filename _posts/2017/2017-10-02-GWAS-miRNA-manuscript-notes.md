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

Completed figures/tables:
  * Venn diagrams. Presence = at least one sample in the type-treatment has 10 or more reads.
    - By type - Control birds only
    - By type X treatment - All birds
  * Pairwise Differential Expression tables - Domestic vs Wild - Control birds only
    - All miRNAs
    - 60 DE miRNAs
  * MA plot - Domestic vs Wild - Control birds only
  * PCA plots
    - By type - Control birds
    - By type X treatment - All birds
  * Heatmaps
    - Pairwise sample distance - Control birds only
      - rlog transformed
      - normal transformed
    - Expression by sample vs wild mean - Control birds only
      - All miRNAs - normal transformed
      - All miRNAs - rlog transformed
      - 60 DE miRNAs - normal transformed
      - 60 DE miRNAs - rlog transformed
  * Boxplots by type for 60 Differentially Expressed miRNAs - Control birds only


Todo:
