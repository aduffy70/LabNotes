---
title: Crepidomanes intricatum GBS data QA summary
date: 2014-12-02T14:58:58+00:00
layout: post
categories:
  - t. intricatum gbs
---
Summary of the Crepidomanes intricatum GBS dataset from GBS_2014-11-24:

  * <span style="line-height: 13px;">277,914,244 total reads</span>
  * 212,483,395 reads (77%) exactly match one of the expected 54 barcode+cutsites (compare to 2% in the first dataset)
  * 244,180,451 reads (88%) can be unambiguously assigned to a barcode with distance<=2 (compare to 36% in the first dataset)
  * 43 barcodes have over 1 million reads (compare to 16 in the first dataset)
  * Even the barcode with the fewest reads has over 135,000 (compare to 18 barcodes with <6000 reads in the first dataset)

How I arrived at these numbers:

  * Unzipped fastq.gz file (gomp002\_NoIndex\_L004\_R1\_001.fastq.gz)
  * Ran fastqc w/default parameters
  * findunique12mers.py to find unique 16mers and sortbarcodes-wobble.py to assign them to barcodes. (Also used sortbarcodes-indels.py for comparison).
  * Prepared my basic quality report with the same plots I used in my dissertation.
  * Also ran sortbarcodes-wobble.py and sortbarcodes-indels.py using the wrong set of barcodes (plate 3-4) just to see how many reads get assigned when the barcodes are completely incorrect. This should give some indication of what the false-positive assignment rate looks like. If my barcodes with the fewest reads assigned have fewer reads than a "bad" barcode, that would suggest I can't actually trust those low-quantity read assignments. Using the "no indels" method of calculating distance, fewer than 25000 reads get assigned to each barcode. Using the "with indels" method some barcodes had hundreds of thousands to millions of reads assigned. This suggests that using the "with indels" method increases the rate of incorrect barcode assignment to dangerous levels.
