---
title:  Setting up for GBS analysis on U of U cluster
date:  2017-07-12
layout: post
categories:
  - t. intricatum gbs
---
  * Copied over my screen, nano, and git config files. My .bashrc and .bash_aliases were already there.
  * Reorganized the files on my wolf-group1 folder so raw data will be separate from analyses.
  * Install miniconda (version 4.3.22) and ipyrad (version 0.6.15) in my user space following [these instructions][1].
    * I initially installed the latest ipyrad version (0.7.1) but it has libc version dependencies that aren't met on the U of U cluster (CentOS7) and can't be installed in user-space (as far as I can tell). Though somehow Jenessa has 0.7.1 installed and working?
    * According to Carol Rowe this isn't necessary as ipyrad is installed on the CHPC, but I don't see it using `which ipyrad` until I install it (and it looks like Carol and Jenessa both have ipyrad installed in their user-space and in their PATH to use the local installation).
    * 0.6.15 matches Carol's installation.

# Test-run of ipyrad using all samples (all 3 species)
  * params-all_samples.txt
  * all_samples_SLURM.sh
  * barcodes_ipyrad-all_samples.txt
  * s1-demultiplex (sorting by barcodes)
    * Tried it allowing 1 mismatch and 2 mismatches to compare. Using the 2 mismatch data.
    * Tried it using just the cutsite by the barcode (CAATTC) and using both cutsites because I was curious if the second cutsite (TTACAG) is used at this step--it shouldn't be and it isn't. Results are exactly the same either way.
    * Total reads: 277914244
    * Cutsite found: 277913446 (99.9%)
    * Matched exact: 188940488 (68%)
    * Matched <=1 mismatches: 236389987 (85%)
    * Matched <=2 mismatches: 236413224 (85%)
  * s2-rawedit (filtering/cleaning)
    * trimmed adapter sequences, and used defaults for quality filtering and minimum length after trimming.
  * s3-clustering
    * Starting with the default 0.85
    *

# Questions

  * Why does Jenessa's ipyrad 0.7.1 work but I get libc errors if I upgrade?
    * See [this page][2] for a solution (can't try it now cause ipyrad is running)
  * On ipyrad s1, why are ALL the counts for mismatched barcodes even numbers?
  * Why does my pipeline return different numbers of exact matching barcodes (77% vs 68% for ipyrad)? My script includes the cutsite as part of the barcode so if anything my numbers should look lower than ipyrad's. Numbers with <=2 mismatches are comparable (85% and 88%)
  *

[1]: http://ipyrad.readthedocs.io/installation.html
[2]: https://patricksnape.github.io/2015/conda_glibc/
