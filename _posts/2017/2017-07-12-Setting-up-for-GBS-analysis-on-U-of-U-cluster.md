---
title:  Setting up for GBS analysis on U of U cluster
date:  2017-07-12
layout: post
categories:
  - t. intricatum gbs
---
  * Copied over my screen, nano, and git config files. My .bashrc and .bash_aliases were already there.
  * Reorganized the files on my wolf-group1 folder so raw data will be separate from analyses.
  * Install miniconda (version 4.3.22) and ipyrad (version 0.6.10) in my user space following [these instructions][1].
    * Installed to ~/.miniconda2 instead of the default miniconda2 so it won't be visible in my home folder.
    * I initially installed the latest ipyrad version (0.7.1) but it has libc version dependencies that aren't met on the U of U cluster (CentOS7) and can't be installed in user-space (as far as I can tell).
    * According to Carol this isn't necessary as ipyrad is installed on the CHPC, but I don't see it using ~~~which ipyrad~~~ until I install it. 
[1] http://ipyrad.readthedocs.io/installation.html
