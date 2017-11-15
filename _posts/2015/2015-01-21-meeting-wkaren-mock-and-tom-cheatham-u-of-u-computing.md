---
title: Meeting w/Karen Mock and Tom Cheatham (U of U computing)
date: 2015-01-21T11:42:10+00:00
layout: post
categories:



---
USU and U of U are working on combining their research computing centers and Karen Mock was asked to try out their system to see how it meets our needs. She asked me to sit in on the meeting with Tom Cheatham to talk about our needs.

Computationally, we aren't doing anything extreme. Any cluster with cpu and memory comparable to our workstation (24 cpu, 32 Gb RAM) is adequate but we have large datasets and our analyses generate large intermediate files. On the workstation we have been running out of disk space and have to keep deleting intermediate files that would have been nice to keep at least until the analysis is complete. They can offer us home drive space of ~3Gb (double the home drive on our workstation) and we can store intermediate files in temporary "scratch space" that is maintained for 30 days from the last time the file was touched. Additional space can be purchased in 1TB blocks for 5years at a time ($210). Data is backed up quarterly or on request. All drives are RAID systems.

Tom is sending Karen paperwork to enroll in their system and she will enroll herself, Martin Schilling and me so we can thoroughly test the system. One thing I am not sure of is the multithreading side of using a cluster vs a single workstation as we have been doing. For the gbs processing scripts I have been writing and using it makes no difference since they are not multithreaded but some of the clustering software is.

They have a 24 hour job limit but longer jobs can be scheduled by phone or email. Also, on the Lone Peak cluster there may not be job limits (but you are limited to a single node?)

We can install software packages ourselves within our user space or work with their help desk to get things installed more globally. Tom says they have multiple clusters and so if we want to run something on more than one cluster it needs to be installed on each. Does that mean we have separate user space on each cluster? I'm not sure that makes sense, but we can try installing some things and see how it works. Now is the time to figure things out - before we are all locked into a new system.
