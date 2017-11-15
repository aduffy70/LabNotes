---
title: "Kent Reed's liver gene presence/absence data"
date: 2015-12-01T14:42:48+00:00
layout: post
categories:
  - gsta expression
---
From the RNA-seq data they compiled presence/absence information for all genes in all treatments:

![ Venn- liver gene presence absence1 ]( {{site.image_path}}wp-content/uploads/2015/12/Venn-liver_gene_presence-absence1.png )

(Bold numbers are gene counts, gray numbers are to reference specific cells of the venn diagram.)

  * Genes whose presence/absence could explain the AFB sensitivity in domestic vs wild turkeys are:
      * present in EWA but absent in DomA - 1,5,10,14 (281 genes), or
      *  absent in EWA but present in DomA - 3,6,8,13 (250 genes).
      * Total: 531 genes
  * Not all of those 531 are equally likely
      * Most likely (respond to AFB in Wild but not in Dom)
          * 1 (189 genes) - Switch on with AFB in Wild, Stay off in Dom
          * 13 (31 genes) - Switch off with AFB in Wild, Stay on in Dom
          * Total: 220 genes
      * Less likely (respond to AFB in Wild but have the opposite response in Dom)
          * 5 (10 genes) - Switch on with AFB in Wild, Switch off in Dom
          * 8 (10 genes) - Switch off with AFB in Wild, Switch on in Dom
          * Total: 20 genes
      * Even less likely (Don't respond to AFB in Wild but do in domestic. So, some gene that is normally always absent in Wild gets switched on with AFB treatment in Domestic, interfering with AFB response or vice versa.)
          * 14 (60 genes) - Always present in Wild, Switched off with AFB in Dom
          * 3 (192 genes) - Always absent in Wild, Switched on with AFB in Dom
          * Total: 252 genes
      * And finally even more unlikely (Don't respond to AFB in either type but the types are different. These are just genes that are always different between Wild and Dom regardless of AFB treatment)
          * 6 (17 genes) - Always absent in wild, Always present in Dom
          * 10 (22 genes) - Always present in wild, Always absent in Dom
  * Note- this considers only genes whose **presence/absence** could be responsible for the differences in AFB-susceptibility.  We still need to do the same sort of thing looking at differences in expression level (the vast majority of the genes - 12507 - are expressed in all treatment groups).
