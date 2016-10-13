---
title:  Nrf2 promoter region primer design
date:  2016-10-13
layout: post
categories:
  - gsta methylation
---
Designing primers to amplify/sequence the section of missing sequence upstream of NRF2 (bp 15274369 to 15275513 on Chromosome 7, Turkey 5.0)

  * Looking 100bp up and downstream of the NNNs
  * Had to drop the minimum allowed Tm for Primer3 to find anything (the best primers were 59C and the default cutoff was 60C)
  * Just like when we were designing primers for promoters we found that there is similar sequence on other chromosomes. At least none of these have other hits all the way to the 3' end.
  * Two sets of primers:

| name | bp start | length | tm  | gc% | seq |
| ---- | -------- | ------ | --- | --- | --- |
| NRF2_promoter1-F | 12 | 23 | 59.19 | 43.48 | TTAGGCAGAACACGAAAAGAAGG |
| NRF2_promoter1-R | 1345 | 21 | 59.45 | 52.38 | TCAAGAAGGAACCGGACTAGC |
| NRF2_promoter2-F | 18 | 23 | 59.37 | 43.48 |  AGAACACGAAAAGAAGGGGAAAC |
| NRF2_promoter2-R | 1291 | 19 | 59.86 | 63.16 | CCTTCGCTACGGACTGACC |

bp1 = bp 15274269 of Chromosome 7
