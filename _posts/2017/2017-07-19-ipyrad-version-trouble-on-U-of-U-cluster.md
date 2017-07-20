---
title:  ipyrad version trouble on U of U cluster
date:  2017-07-19
layout: post
categories:
  - t. intricatum gbs
---
# Problem

If you install miniconda and the latest ipyrad (currently 0.7.2) according to the ipyrad documentation, ipyrad will fail with an error ending with:

~~~
File "/uufs/chpc.utah.edu/common/home/u6001629/miniconda2/lib/python2.7/site-packages/pysam/__init__.py", line 5, in <module>
   from pysam.libchtslib import *
ImportError: /lib64/libm.so.6: version `GLIBC_2.23' not found (required by /uufs/chpc.utah.edu/common/home/u6001629/miniconda2/lib/libhts.so.1)
~~~

The problem is that pysam 0.10.0 was compiled on a system with a more recent GLIBC than comes with CentOS7. We can't update GLIBC without updating the entire operating system, so we can't use that pysam. pysam 0.06 is ok.

# Solution(s)

  * ipyrad versions up to 0.6.27 don't require pysam at all so you can install with ```conda install -c ipyrad ipyrad=0.6.27``` and it will work.

  * ipyrad 0.7.1 (and 0.7.0?) can work with pysam 0.6 so you can install with ```conda install -c ipyrad ipyrad=0.7.1``` and then downgrade pysam with ```conda install -c ipyrad pysam=0.6``` and it will work.

  * ipyrad 0.7.2 requires pysam 0.10.0 so we can't run 0.7.2 or later. Potentially we could compile pysam on the cluster to get a version that will work. I tried using conda build but it failed test due to lack of bcftools even when I had bcftools installed. Even if we could get that to work, it would only solve the problem until the next time ipyrad requires a later version of pysam, so I didn't fight it.

I created and saved working conda environments for 0.6.15 (the version Carol Rowe and I were testing on), 0.6.27 (the newest version that can be installed without manually changing things), and 0.7.1 (the newest version we can run on the cluster). My default (root) environment is at 0.7.1.
  * View available environments with ```conda info --envs```.  
  * Switch to alternate environments with ```source activate <env>  # <env> = ipy0.6.15, ipy0.6.27, or ipy0.7.1```.
  * Return to default (root) environment ```source deactivate```.
