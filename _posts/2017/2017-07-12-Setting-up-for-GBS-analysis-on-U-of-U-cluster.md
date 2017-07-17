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
  * Test-run of ipyrad using all samples (all 3 species)
    * params-all_samples.txt
    * all_samples_SLURM.sh
    * barcodes_ipyrad-all_samples.txt


[1]: http://ipyrad.readthedocs.io/installation.html
