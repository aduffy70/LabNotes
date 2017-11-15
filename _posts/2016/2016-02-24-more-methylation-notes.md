---
title: More methylation notes
date: 2016-02-24T09:50:50+00:00
layout: post
categories:
  - gsta methylation
---
Agilent SureSelect Methylation kits:

  * Uses multiple 120bp biotinylated RNA probes to pull down DNA fragments of interest, before applying methylated adapters (so they won't be affected by bisulfite treatment) treating with bisulfite, applying indexed Illumina adapters, PCR amplifying, pooling, and high-throughput sequencing.
  * They have an online tool for designing probe sets, but it doesn't include Meleagris. However they say they can design probes for any taxon upon request.
  * With a kit for 16 reactions we could sequence 2 birds from each of our 4 treatment groups (8 reactions that would run through the whole process and 8 that would skip the bisulfite treatment step so we could have the raw DNA sequence for comparison). With a larger kit we could include more birds from each treatment.
  * The number of regions to include and the size of those regions affects depth of coverage. Could we include the entire region for all GSTA genes (everything from the promoters through the end of the 3'UTRs) and still get reasonable depth of coverage in a single Illumina lane?
      * If we try to capture 10Kb for each of the 5 GSTA genes: 50Kb \* 16 samples \* 20 read-depth = 16Mb needed. If an Illumina HiSeq lane yields ~7.5Gb so we could expect an average depth of coverage of ~9000.
  * Estimated costs to do 16 samples = ~ $10,000:
      * ~$1200 for the reagent kit - which doesn't include the probes for your regions of interest
      * ~$5300 for the probe set - this is the cost for their pre-made human/mouse/rat kits. To get the actual price for what we would want to do, we need to design the experiment and request a quote
      * ~$1000 for Streptavidin beads ($500), purification reagents ($300), bioanalyzer QC runs (3X $?), and bisulfite conversion reagents ($150) not included in the kits
      * ~$2500 for a lane of Illumina HiSeq sequencing
  * [ Agilent kit pricing ]( http://www.genomics.agilent.com/en/SureSelect-Gene-Regulation-/MethylSeq-/?cid=AG-PT-178&tabId=AG-PR-1205 )
  * [ Kit protocol ]( http://www.agilent.com/cs/library/usermanuals/Public/G7530-90002.pdf )
      * Process workflow from the kit protocol:

        ![ SureSelectMethySeqProcess ]( {{site.image_path}}wp-content/uploads/2016/02/SureSelectMethySeqProcess.png )
