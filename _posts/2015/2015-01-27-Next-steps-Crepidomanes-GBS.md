---
title: Next steps Crepidomanes GBS
date: 2015-01-27T14:56:14+00:00
layout: post
categories:
  - t. intricatum gbs
---
Next steps Crepidomanes GBS

  * The cd-hit-est run has only processed 2 million of 184 million reads in 24 hours (so it should finish in 3 months?!) so I stopped it. Trying again using the largest recommended word size (10) and having it NOT store the sequences in memory - this is recommended for "huge datasets". We will see if these changes speed things up:

    ~~~
    cd-hit-est -i sort_plOUT-cintricatum.fasta -o cdhitOUT_1.0-cintricatum -c 1.0 -n 10 -r 0 -T 0 -M 0 -B 1
    ~~~

  * With these settings it does seem to be going faster, but will still take 15-30 days to complete. There is another script, cd-hit-dup that is designed for finding duplicated illumina reads but it won't compile using current versions of gcc. cd-hit-454 isn't specifically made for illumina data but it does require reads to start at the same 5' which maybe more what I want than the standard cd-hit-est. Trying that:

    ~~~
    cd-hit-454 -i sort_plOUT-cintricatum.fasta -o cdhit454OUT_1.0-cintricatum -c 1.0 -n 10 -T 0 -M 0 -B 1 -D 2
    ~~~
