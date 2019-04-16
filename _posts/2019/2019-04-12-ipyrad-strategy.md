---
title:  ipyrad strategy
date:  2019-04-12
layout: post
categories:

---
# My RADseq analysis strategy using ipyrad

1. Run FastQC. Look for problems with the run.
1. Run ipyrad step 1. Look for problems with barcodes.
1. Merge multiple plates if needed.
1. Run ipyrad step 2. Look for problems with read trimming/filtering. Rerun FastQC to make sure the illumina adapters were removed. Use grep to make sure reads have cutsites present or absent as expected.
1. Run ipyrad steps 3-7. Do not make any branches before this is complete--ipyrad bug! Look for problems.
1. Make branches for cluster thresholds from 0.999[^1] to 0.8ish and run ipyrad steps 3-7 on all of them. Plot number of variable and parsimony informative loci from each run to identify "best" cluster threshold (look for the peak).
1. On "best" cluster threshold branch, look at locus sample coverage to decide what minimum coverage to use. Balance # of loci against level of missing data.
1. Branch "best" cluster threshold branch and run ipyrad step 7 with chosen minimum coverage. Identify bad samples with "excessive" missing data.
1. Branch "best" cluster threshold branch, filtering to remove bad samples and run ipyrad step 7 with chosen minimum coverage (adjusted?[^2]).
1. Use the output files to do downstream analyses.

If you want to sleep at night after all the arbitrary decisions you just made:

1. Also do downstream analyses on branches with higher and lower cluster thresholds to see how robust results are to over/under clustering.
1. Also do downstream analyses on branches with different minimum coverages to see how robust results are to the balance between missing data and number of loci.

# ipyrad gotchas:

* Step 3 makes deduplicated read files in the step 2 folder, uses them to make the clusters and then deletes them. That means if you branch after step 2 to cluster at several different levels you can only run ONE step 3 at a time. If you try to run more than one run in parallel, the first will create the deduplicated read files, the second will recreate and overwrite them with the same names in the same location (weird but not a problem) but when the first run ends it deletes the deduplicated read files while the second run is still trying to use them. Crash (big problem).
* Step 4 puts the stats file in the same folder as the previous step. That means if you make branches, the stats files from different branches will overwrite each other. Be sure to copy your stats files to another folder before running branches.
* Step 6 on 384 samples takes a long time (after 28hours it was only 23%) on the building database step. Apparently this part has to run in serial so throwing multiple cpus at it doesn't help, but it is also memory hungry so if you try to run on a single cpu with only 2Gb memory it will bog down and crash.

Note:

[^1]: Cluster threshold 1.0 doesn't work.
[^2]: Removing samples will affect the number of loci, which will affect the amount of missing data in the samples remaining. Don't go nuts over this.
