---
title: GBS discussion with Hardeep Rai
date: 2011-08-11T10:53:27+00:00
layout: post
categories:
  - t. intricatum gbs
---
Talked with Hardeep about the status of his Genotyping By Sequencing project with aspen/cottonwood. They got the sequence data back but there was a problem with the bartagging  (possibly reverse complemented barcodes?) so they weren't able to sort the samples directly using the list of barcodes.  Instead they binned the sequences based on the restriction site sequence and a handful of adjacent nucleotides (which should be the barcode).  This resulted in ~2000 bins rather than the expected 80-90, but 80-90 have high copy numbers while the others are low - the low copy number bins may be due to miscalled sequences or even PCR introduced errors.

Even more strangely, the 80-90 vary drastically in copy number, though the process used was designed to ensure similar number of sequences from each sample.  They adjusted things based on molar amounts though, so if the samples differed drastically in the length of the fragments (due to drastically different numbers of restriction sites) it could lead to drastically different numbers of fragments even though the molar amounts were similar.  Within a taxonomic group you wouldn't expect much variation in number of restriction sites, but they included some sage grouse samples with their aspen/cottonwoods.  Hardeep thinks the top 10 or so bins were all sage grouse, so this may be what is going on.

In any case, they haven't started analyzing the data, so still no word on how well the method produced coverage of the same markers in all samples, or whether they got useful results from the low quality samples they included.  This method could be useful in my independent gametophytes if it can work on lower quality samples in taxa with big genomes.
