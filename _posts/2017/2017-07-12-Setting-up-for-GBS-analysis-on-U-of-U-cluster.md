---
title:  Setting up for GBS analysis on U of U cluster
date:  2017-07-12
layout: post
categories:
  - t. intricatum gbs
---
  * Copied over my screen, nano, and git config files. My .bashrc and .bash_aliases were already there.
  * Reorganized the files on my wolf-group1 folder so raw data will be separate from analyses.
  * Install miniconda (version 4.3.22) and ipyrad (version 0.7.1) in my user space following [these instructions][1] with [these modifications][2].

# Test-run of ipyrad using all samples (all 3 species)

  * params-all_samples.txt
  * all_samples_SLURM.sh
  * barcodes_ipyrad-all_samples.txt
  * s1-demultiplex (sorting by barcodes)
    * Tried it allowing 0, 1, and 2 barcode mismatches to compare. Using the 2 mismatch data. Results are comparable to my pipeline (+/-3%).
    * Tried it using just the cutsite by the barcode (CAATTC) and using both cutsites because I was curious if the second cutsite is used at this step--it shouldn't be and it isn't. Results are exactly the same either way.
    * Total reads: 277914244
    * Cutsite found: 277913446 (99.9%)
    * Matched exact: 212483395 (76%)
    * Matched <=1 mismatches: 236389987 (85%)
    * Matched <=2 mismatches: 236413224 (85%)
  * s2-rawedit (filtering/cleaning)
    * trimmed adapter sequences, and used defaults for quality filtering and minimum length after trimming.
    * Worked with Carol Rowe to determine the correct sequence and orientation for the second cutsite (GTAA) and verified that the cutadapt command ipyrad generates has the same cutsite + adapter sequence that is expected using Zach Gompert's GBS library protocol (TTACAGATCGGAAGAGC).
    * By default ipyrad removes the barcode but leaves the cutsite at the start of every sequence. The cutsite contains no information and may make dissimilar reads appear slightly more similar and affect clustering, so I had ipyrad remove them.
  * s3-clustering
    * Ran on main brance at 0.9
    * Branched and reran at 0.85 and 0.95
  

# Questions

  * On ipyrad s1, why are ALL the counts for mismatched barcodes even numbers? Also, they don't seem to be accurate. Running with 2 ipyrad gave different counts (though the totals were identical). It looks like it isn't actually reporting ALL the mismatched versions.
  *

[1]: http://ipyrad.readthedocs.io/installation.html
[2]: {{ site.base_url }}{% post_url /2017/2017-07-19-ipyrad-version-trouble-on-U-of-U-cluster %}
