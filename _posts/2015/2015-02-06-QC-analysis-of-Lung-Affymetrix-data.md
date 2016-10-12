---
title: QC analysis of Lung Affymetrix data
date: 2015-02-06T14:59:57+00:00
layout: post
categories:
  - pm2.5
---
  * Used the tools at arrayanalysis.org to run QC analysis on the Lung Affymetrix data using all 4 of the possible normalization algorithms (PLIER, RMA, GC-RMA, and none). There is no one best algorithm - which is best depends on your particular experiment and array signal qualities, so by running them all we can compare to see if the apparent issue with control chips is corrected by any of them.
    * Useful info for interpreting QC plots:
      * [https://genevestigator.com/userdocs/manual/qc.html](https://genevestigator.com/userdocs/manual/qc.html)
      * [http://www.arrayanalysis.org/main/moduleDesc.php](http://www.arrayanalysis.org/main/moduleDesc.php)
      * [http://www3.it.nuigalway.ie/agolden/bioconductor/version1/MicroArrayAnalysis.pdf](http://www3.it.nuigalway.ie/agolden/bioconductor/version1/MicroArrayAnalysis.pdf)
    * RNA degradation plot - every example I can find online shows this as parallel upward slopes from 5' to 3' since RNA typically degrades from the 5' end, and a line with a different slope would suggest a higher level of RNA degradation on that chip. Our lines are 'parallel' irregular humps. The scale of these plots are very small - if I put these curves on the same scale as other examples of this kind of plot they would be nearly flat lines. I think this is ok and actually indicates very good RNA quality.
    * Positive and negative border elements
      * Negatives are all close to zero as expected but C1 is higher and has greater variation than everything else. Indicates high background. D1-2 is a little higher than the rest and has somewhat more variation.
      * Positive and negatives should be in separate intensity ranges. In the examples, the positives are in the 5-15000 range. Ours are 3-600. Does this indicate low overall intensities on the chips?
    * Boxplots of log intensity - C1 is not fully corrected in RMA normalization. Everything looks identical after PLIER. Our raw data log-intensities are just below the lowest of any example I can find online (~6 where everyone else is closer to 8 or higher). Another indication of overall low intensity levels?
    * Density histogram of intensity. C1 & C2 stand out in the raw data. After RMA, C1 still stands out. PLIER makes everything identical.
    * MA Plots - In the raw data, problems with all controls (especially C1), as well as several other chips are clear. After RMA, C1 is still bad. C2, D1-2, P1-3, may also still show small amounts of bias. After PLIER, everything is messed up. We've lost all the high values along the x axis and the loess(?) lines look as bad, or worse than the raw data.
    * Spatial positive and negative border elements comparison - the clustering isn't great, but they are within the acceptable limits (so not a lot of spatial bias in hybridization on the chips).
    * PLM images - D1-2 (and to a lesser degree, D1-1) has uneven coloration (higher intensity) at the edges. C-3 almost appears to have a gradient down the middle with high intensity towards the bottom and along both sides.
    * NUSE & RLE plots- C1 has a much broader range than the others on the RLE and all 3 controls have a broader range and are higher the rest on the NUSE, though they are below 1.1.
    * Correlation plot- before normalization, there is no logical order to the clustering other than C1 & C3 clustering together far from everything else. After RMA, Ds form a cluster, Ps form a cluster - except that C2 is closer to the other Ps than P1-1 is, and C3 and then C1 are separate from the rest - C1 is farthest. After PLIER, Ps, Ds, and C2 are all tangled up, with P1-1 again to the outside of the cluster. C3/C1 are clustered together separately. Note- the clustering relationships shown on this plot differ from the separate Cluster dendrogram, though in all cases, C1 is farthest from everything, with C3 either joined to it or just slightly closer to the rest.
    * PCA- The three controls have much more variation between them than all the others combined before and after normalization.
    * Conclusions:
      * We need to use RMA rather than PLIER
      * C1 need to be eliminated.
      * D1-2 might need to go, but wait to see how it looks after removing C1 and rerunning RMA.
