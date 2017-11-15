---
title: 'PAG2016- Plant and Animal Genomes Conference'
date: 2016-01-14T23:59:16+00:00
layout: post
categories:
  - conference-travel
---
San Diego, CA - January 8-13, 2016

  * Methods to check out:
      * 3' mRNAseq - rather than sequencing the entire RNA, it just sequences the 100bp at the 3' end - sort of like ESTs but with RNAseq. Allows you to spot alternative polyadenylation sites and to more readily compare depth of coverage between loci, but requires a well annotated genome and there is the possibility you won't be able to differentiate between some loci.
      * COBRA - for looking at methylation differences over a specific sequence without sequencing the entire thing. Perhaps as a 1st pass to look at GSTA region methylation?
      * MeDIP for looking at methylation in a specific region?
      * MASP for looking at methylation with restriction enzymes
      * qAce quantitative amplification of cleaved ends - Quantifies how much mRNA is being cleaved (i.e., not making it to translation) by amplifying just the 3' part of cleaved pieces. [http://doi.org/10.12688/f1000research.5266.1][1]
        * This method is based on the mRNA, not the miRNA, but it still requires you to know the cleavage site. The 5'primer includes the transition from the ligated adapter to the mRNA sequence just downstream of the cleavage site. But they suggest the possibility of using a gene specific primer at the other end instead if you know the 3' end of the mRNA instead.
      * CRISPR/CAS9?! Saw people using this to introduce genome changes, up-regulate, and knock-out genes. I'm still not clear on how it is being applied in animals. In plants they use tissue culture, so I think it could be used in primary liver cells that Sean is working on. What about living birds? I know it has been done in fish, so it must be possible. Need to investigate further...
  * Software to check out:
      * Tuxedo suite: Cufflinks, tophat, etc. - For RNAseq transcriptome assembly and differential expression analysis. [http://doi.org/10.1038/nprot.2012.016][2]
      * Hub zero - A content management system for creating websites to collect or share scientific data. "WordPress for science"
      * Targetscan - for predicting miRNA targets - I saw a couple presentations where they used this to predict targets for their mRNAs. I looked into it last year when I was figuring out how to narrow down putative GSTA-related miRNAs and did not use it since it ONLY looks for seed-pairing interactions, while StarMir looks for seed-pairing and non-seed-paired interactions.
      * miranda - for identifying miRNA targets. Like StarMir, this also includes non-seed-paired interactions. What is different? Need to look into this one further..
      * Sailfish for RNAseq analysis. In simulated RNAseq data it outperformed htseq and cufflinks for correctly identifying read depth.
      * IPA for looking at gene regulation in networks- Kent has a site license?
      * Splicegrapher - for looking at alternative splicing using RNAseq data [http://doi.org/10.1186/gb-2012-13-1-r4][3]
      * WGCNA - an R package for finding clusters of genes with highly clustered expression. Could be useful for inferring gene-gene or miRNA-mRNA interactions? [http://doi.org/10.1186/1471-2105-9-559][4]
  * Educational stuff to check out:
      * Modified Moore Method - students learn through teaching each other. Teacher provides a set of challenging problems to be completed outside of class and recommended resources to use to figure out how to solve them. In class time is spent having students teach each other how to work through them. It comes from math/physics instruction so is probably best suited to problem solving courses rather than content-heavy courses. At Iowa State it was being used in an undergraduate bioinformatics course.
      * Bioextract server - for tying together basic bioinformatic analyses into reproducable pipelines without having to install programs locally. Has potential for classroom activities where you want to keep the focus on analyzing the data rather than leaning to work with linux.
  * Other/misc:
      * Chickspress database for chicken protein expression. University of Arizona's chicken genome browser. It contains data from over 150 protein, mRNA, miRNA, and QTL experiments. Could be useful for making comparisons to turkey.
      * "If you make a cell the size of a house, the genome would be the thickness of a ramen noodle and would stretch from New York to Chicago." - Erez Lieberman Aiden (Baylor College of Medicine. From his plenary lecture on Reading and Writing Genomes in 3D.)
      * Met with Kent Reed. He is looking into what it would cost to do miRNA seq on the AFB-challenge turkeys (Wild and Domestic).
      * Met Melissa Monson at the poster session (Did her PhD with Kent, including the RNAseq work on turkey eggs, now at Iowa State working on chicken epigenetics)

[1]: http://doi.org/10.12688/f1000research.5266.1
[2]: http://doi.org/10.1038/nprot.2012.016
[3]: http://doi.org/10.1186/gb-2012-13-1-r4
[4]: http://doi.org/10.1186/1471-2105-9-559
