---
title:  NRF2 promoter sequence
date:  2016-10-20
layout: post
categories:
  - gsta mirna
---
# Retrogen sequencing order 2016-10-18

## Sequencing Results:

  * All sequenced and formed contigs cleanly, with minor editing
  * EW1 contig = 670bp
    * first 78 bases blast upstream of the NNNs as expected
    * last 53 bases blast downstream of the NNNs as expected
    * middle section blasts near NRF2 in chicken and japanese quail
  * N1 contig = 717bp
    * identical to EW1 but I didn't have to trim as much off the 3' end. (One EW1 sequence went out that far but I only kept sequence with 2X coverage.)
    * Same blast results as EW1 (with a larger match downstream of the NNNs since the sequence is longer)

## Are the NNNs upstream of NRF2 in Turkey5.0 CpG rich?

  * Yes, over 100 CpGs:

    ![CpGs in EW1 sequence][image1]

  * 25 of the CpG sites detectable by the Zymo qMethyl kit:

    ![CpGs detectable with Zymo kit in N1 sequence][image2]

We need to design/test primers to amplify <350bp sections for the Zymo kit.

[image1]: {{site.image_path}}All_EW1_Consensus_CpGs.png
[image2]: {{site.image_path}}All_N1_Consensus_Zymo_CpGs.png
