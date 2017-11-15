---
title: VPGsim troubleshooting
date: 2011-10-28T13:13:31+00:00
layout: post
categories:
  - science ed vpgsim
---
Are the high cpu values related to the difference between the MONO\_THREADS\_PER_CPU settings on cordate (100) and transcriptome(2000)?

I shutdown all regions, closed all screen sessions, lowered the setting on transcriptome, verified that it was really changed and restarted all 16 regions.  On flat terrain with default parameters, I started populations on region 2, 3, 6, 12, 14, and demo.  I only started plots/logs on 2, 6, 12, and demo.  3 & 14 still have student data in the plots/logs and I don't want to overwrite it.

If any of these regions drive massive cpu load then I know the problem is not related to MONO\_THREADS\_PER_CPU settings.
