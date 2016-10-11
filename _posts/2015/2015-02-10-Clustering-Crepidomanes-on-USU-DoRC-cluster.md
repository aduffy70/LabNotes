---
title: Clustering Crepidomanes GBS on USU DoRC cluster
date: 2015-02-10T15:00:36+00:00
layout: post
categories:
  - t. intricatum gbs
---
  * Started running Crepidomanes GBS clustering jobs on the USU DoRC cluster.
      * The cdhit package comes with a version designed for clusters but it only works with cd-hit and cd-hit-est, not cd-hit-454. But the DoRC has nodes with up to 32 cpus and 2TB memory, so if I request a single node with 24 cpus it should work exactly like it does on the workstation.
      * I am rerunning the 0.94 run (which took only 3 hours on the workstation) as a check to make sure I get similar results.
          * Time to finish was very similar on the cluster (29592 vs 289588 cpu seconds on the workstation)
          * Number of clusters found was identical at 9081950.
          * Numbers of clusters in each size category differed very slightly (<0.0015%)
      * I also started jobs for 0.87, 0.86, and 0.85.
      * It seemed like as I started more jobs they slowed down. Suspecting that it might be because they are all reading from the same input file, I made a second copy of the input file and started 0.84 using that job.
      * I have also been running with -B 1 so it stores the reads on disk rather than memory (as recommended for "huge files") which may not be necessary with the additional memory available on the cluster, so I tried -B 0 for 0.84. -This doesn't seem to be running any faster, while 0.94 is still running very quickly, so I think it is just that the lower stringency clusters take longer to do. 0.88 on the workstation isn't running very quickly either.
      * Started 0.83 not specifying the number of cpus in the cd-hit-454 command to see how many it would find and use (since it doesn't report the # of cpus if you specify a number). It found and used 24, as expected.
      * All jobs have a maximum wall time of 96 hours. Assuming these work, I will submit jobs for everything down to 0.75 and finish this clustering project.
