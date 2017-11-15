---
title: LTRs and transposons in promoter regions or within the GSTA genes
date: 2015-12-07T15:03:30+00:00
layout: post
categories:
  - gsta other
---
  * Review paper on transposon epigenetics <http://doi.org/10.1038/nrg2072>
    * Type I transposons - LTRs, LINEs, and SINEs - "copy and paste" using RNA intermediate
    * Type II transposons - "cut and paste" as DNA. Less common in humans (and in the turkey GSTA region.
    * Can lead to up- or down-regulation of nearby genes so addition or deletion of a transposon in the GSTA region could lead to down-regulation of GSTAs:
      * Silencing mechanisms "meant" to shut down transposons can shut down nearby genes (e.g., region gets bound up in chromatin or genes that get transcribed along with the LTR get caught up in the dsRNA/RNAi blocking systems)
      * Transposon promoters can lead to transcription of nearby genes (e.g., LTR's can have 'downstream' promoters that cause expression of downstream genes in addition the ones included in the LTR)
    * Closely tied to both transcriptional control mechanisms (methylation and chromatin/histone modification, and translational control mechanisms (RNAi).
  * How do they identify promoter regions? They are upstream of the transcription start site (note- transcription start, not the start codon, so this is even further upstream than the 5'UTR). It might contain a TATA box (TATAAA typically, but it can vary), but only 10-30% of human genes do. And if it does, does that mark the upstream end of the promoter? Most human genes have an Initator element or Initiator motif instead (YYANWYY). Genes with a TATA box don't have an initiator element and vice versa.
  * How are Long Terminal Repeats (LTRs) detected? Ensembl has data tracks for repeats. There are transposons in the GSTA region of turkey, only some of which are shared with chicken. They generated this using RepeatMasker. Maybe worth running it on the BAC sequence rather than Turkey_2.01?
  * Compare transposons in the GSTA region for chicken and turkey. Use other birds (duck? zebrafinch?) to determine polarity of additions/deletions. Are there transposons that have been gained or lost in domesticated turkey? We really need to compare against wild turkey but if we find some that differ between other birds and domesticated turkey we can try to amplify them in wild turkeys to see if they are different there too.
  * Are there differences between wild and domestic in expression of the genes surrounding the GSTA region (FBX09, ICK-201, 7SK, TMEM14A, AGPAT5)? It would be interesting to know if the lower expression in the GSTAs in domesticated turkeys is shared by surrounding genes. I may be able to get this from Kent Reed's liver AFB-challenge data.
