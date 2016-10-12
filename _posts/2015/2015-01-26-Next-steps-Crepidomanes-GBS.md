---
title: Next steps Crepidomanes GBS
date: 2015-01-26T14:57:35+00:00
layout: post
categories:
  - t. intricatum gbs
---
  * Next steps Crepidomanes GBS
    * Didn't end up needing to split the fasta file to sort it by length. The sort.pl script worked on the second try without crashing when it was the only job running on the workstation (the output file size exactly matches the input file size and it appears to be sorted by decreasing read length).
    * After all that messing around with file formats and sorting, the usearch -cluster_smallmem won't work because the file size is too big for the 32 bit version. Switching to cd-hit!
    * Using cd-hit-est (compiled with multithreading option), starting at sequence identity of 1, maximizing memory use and processor use, only comparing strands in one direction and using the word length recommended for >90% sequence identity:
    ~~~
    cd-hit-est -i sort_plOUT-cintricatum.fasta -o cdhitOUT_1.0-cintricatum -c 1.0 -n 8 -r 0 -T 0 -M 0
    ~~~
    * Started at 11:45am.  It looks like it compares sequences in batches. The first batch took just a few minutes but the second has taken 2 hours to get to the 50% mark. There is a flag to store some things on disk rather than in memory, which they recommend for "huge" files. I should try that on the next run and see if it makes a difference. Also, I'm maxing out the cpus on the cluster. Limiting it to 20 of the 24 cpus on future runs would be more considerate if others are using the workstation too.
    * Checking out dDocent as another analysis option
  
