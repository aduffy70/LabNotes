---
title: Next steps Crepidomanes GBS
date: 2015-01-22T13:52:01+00:00
layout: post
categories:
  - t. intricatum gbs
---
  * Next steps Crepidomanes GBS
    * convert Crepidomanes intricatum reads to fasta
    * sort by decreasing sequence length (the dataset is too large for usearch -cluster\_fast, and usearch -cluster\_smallmem requires the reads to be presorted). I used [a perl script I found on github][1]. It uses 2 custom modules that have to be located in the same folder as the script and many many others that I installed from CPAN.
      * This ended up not being simple. Sorting a giant file runs out of memory in perl. I think I can sort 2 smaller files and then merge them with a new script (mergesortedfasta.py)
    * cluster w/uclust, starting with 1.0 identity and reducing by 0.01 each time:
      ~~~
      usearch -cluster_fast splitfastqOUT-cintricatum.fasta -id 1.0 -centroids uclustOUT_1.0.fasta -uc uclustOUT_1.0.uc
      ~~~
    * How will clustering at different identity levels be affected by the fact that distance values are stepped? (An 86bp read can only have identify values of 86/86, 85/86, 84/86, etc. A 30bp read can only have values of 30/30, 29/30, 28/30, etc. Since most of my reads are 84-86bp long, the values that can't happen for those lengths may create small plateaus when I plot number of clusters with each identity value. Hopefully those plateaus are smaller and less pronounced than the plateaus I expect to find if there are large numbers of homeologous loci.

[1]: https://github.com/jimhester/fasta_utilities/blob/master/scripts/sort.pl
