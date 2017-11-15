---
title: Chasing potential bug on VPGsim
date: 2011-08-17T10:28:55+00:00
layout: post
categories:
  - science ed vpgsim
---
After running for a couple of weeks, the cpu load goes way up (10+) and new data stops being logged.  The global results are still getting reported but everything is zero because the local report is not finishing.  The region statistics were showing everything as ok, though the prim count was at exactly 3800 (coincidence that it is a round number?) and hadn't changed for a long time.

Could this be a locking problem with the summary module?  I started a fresh run with things at a higher rate to see if I can get it to fail sooner.

I hadn't cleared my log files since March, so even looking to see what had happened was painful.  Cleared them today.
