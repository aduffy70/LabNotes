---
title: miRNA blocking summary
date: 2015-01-13T12:01:18+00:00
layout: post
categories:
  - gsta mirna
---
At least 3 different (non-exclusive) ways changes in miRNA-mRNA interactions could lead to GSTA expression patterns we see in domesticated vs. wild turkeys:

# 1) Changes in miRNA expression level

A miRNA that was present in very low numbers (or not at all) in wild birds is up-regulated in domesticated birds.

![ miRNA_Exp_Wild ]( {{site.image_path}}wp-content/uploads/2015/01/miRNA_Exp_Wild-150x150.png ) ![ miRNA_Exp_Domest ]( {{site.image_path}}wp-content/uploads/2015/01/miRNA_Exp_Domest-150x150.png )

Expectations:
  * miRNA(s) that interacts with GSTA mRNA in domesticated but not wild, or
  * miRNA(s) that interacts with GSTA mRNA in both but is upregulated in domesticated

# 2) Changes in miRNA seed sequence

A miRNA that was present in wild birds but was not interacting (much) with GSTA does (more) in domesticated birds because of a change in the miRNA seed sequence.

![ miRNA_Seed_Wild ]( {{site.image_path}}wp-content/uploads/2015/01/miRNA_Seed_Wild-150x150.png) ![ miRNA_Seed_Domest ]( {{site.image_path}}wp-content/uploads/2015/01/miRNA_Seed_Domest-150x150.png)

Expectations:
  * miRNA(s) that interact with GSTA in domesticated but that is not found in wild
  * unique miRNA will likely have a very similar seed sequence to one found in wild
  * the original target(s) of the miRNA in wild may be up-regulated in domesticated

# 3) Changes in mRNA target sequence

A miRNA that was present in the wild birds but was not interacting (much) with GSTA does (more) in domesticated birds because of a change in the mRNA target sequence.

![ miRNA_Target_Wild ]( {{site.image_path}}wp-content/uploads/2015/01/miRNA_Target_Wild-150x150.png) ![ miRNA_Target_Wild ]( {{site.image_path}}wp-content/uploads/2015/01/miRNA_Target_Domest-150x150.png)

Expectations:
  * sequence differences in a target sequence in the regulatory region (likely in the UTR?) between domesticated and wild, or
  * an "extra" target sequence in the regulatory region of domesticated
  * the original target(s) of the miRNA in wild should still be blocked in domesticated

# Questions/Notes:

  * Where is the turkey RNA-seq data from Monson et al. 2014 (PLoS One)? It should have domesticated turkey mRNA sequences as well as many miRNA sequences. Manuscript says they had GSTA1.1, GSTA1.2, GSTA2, GSTA3, and GSTA4 but no transcripts matched to GSTA1.3. Requested access from Kent Reed.
  * For chicken, mirBase has 740 miRNA sequences (28 “high confidence”) with both the full hairpin sequence and the mature miRNA sequence.
  * tarBase has experimentally verified targets but not for turkey. I can see what miRNAs target GSTAs in other species and see if those miRNAs are conserved in turkey.
  * RNA-hybrid (Rehmsmeier et al.) finds likely miRNA-mRNA interaction sites based on thermodynamic stability
  * StarMir works with Sfold to include mRNA secondary structure and energy conservation into miRNA target prediction (the two-step model from Long et al. 2007)
  * Aslam et al. 2012 (BMC Genomics) paper sequenced genomic DNA from 11 varieties (3 individuals each) looking for SNPs. This data is in SRA and has coverage of parts of the GSTA regions (~50% of the sequence represented?) SRP012021
  * Targetscan_60 uses seed sequences and an alignment of UTRs to find miRNA targets and determine if they are conserved. Th online version uses the usual human, mouse, chicken, etc., but I can run it locally using turkey (more than one where available), chicken, and zebrafinch.

# Resources:

  * Turkey Ensemble has 430 non-coding RNAs annotated as miRNA (80-100bp long so they are not the "mature miRNA" sequences- downloaded.
  * Turkey Ensemble has cDNA sequences - should contain GSTA cDNAs? - downloaded
  * RNAcentral.org has full hairpin sequences for 179 turkey miRNAs, pulled from several sources. Extracted from their full database. Size range is 57-130bp so they are not "mature miRNA" sequences.

# A strategy?

  * Use available data and miRNA targetting tools to identify miRNAs that potentially interact with domesticated turkey GSTAs.
  * Use wild turkey sequences to look for sequence or structure differences from domestic.
    * If different: suggests target change
      * Use biotinylated miRNAs to try to pull down mRNAs - should work for domesticated and fail for wild
      * Use RNA-seq data to confirm that the miRNA is present in domesticated. How can we show this in wild, too?
    * If not different: suggests miRNA seed change
      * Use biotinylated miRNAs to try to pull down mRNAs - should work for both
      * Use RNA-seq data to confirm miRNA is present in domesticated. How can we show that the changed miRNA is NOT in wild?
