---
title:  ipyrad strategy
date:  2019-04-12
layout: post
categories:

---
# My RADseq analysis strategy using ipyrad

1. Run FastQC. Look for problems with the run.
1. Run ipyrad step 1. Look for problems with barcodes
1. Merge multiple plates if needed.
1. Run ipyrad step 2. Look for problems with read trimming/filtering. Rerun FastQC to make sure the illumina adapters were removed. Use grep to make sure reads have cutsites present or absent as expected.
1. Run ipyrad steps 3-7. Do not make any branches before this is complete--ipyrad bug! Look for problems.
1. Make branches for cluster thresholds from 0.999[^note] to 0.8ish and run ipyrad steps 3-7 on all of them. Plot number of variable and parsimony informative loci from each run to identify "best" cluster threshold (look for the peak).
1. On "best" cluster threshold branch, look at locus sample coverage to decide what minimum coverage to use. Balance # of loci against level of missing data.
1. Branch "best" cluster threshold branch and run ipyrad step 7 with chosen minimum coverage. Identify bad samples with "excessive" missing data.
1. Branch "best" cluster threshold branch filtering to remove bad samples and run ipyrad step 7 with chosen minimum coverage (adjusted?).
1. Use the output files to do downstream analyses.

If you want to sleep at night after all the arbitrary decisions you just made:

1. Also do downstream analyses on branches with higher and lower cluster thresholds to see how robust results are to over/under clustering.
1. Also do downstream analyses on branches with different minimum coverages to see how robust results are to the balance between missing data and number of loci.

[^note]: Cluster threshold 1.0 doesn't work.
