---
title: 'VPGsim Debugging: things to try'
date: 2011-10-17T12:24:07+00:00
layout: post
categories:
  - science ed vpgsim
---
  * Run 2 'identical' regions, 1 on cordate, 1 on transcriptome.  Make them big to exacerbate issues and check for differences related to the 2 environments (10.04 vs 10.10, mono 2.6.1 vs 2.6.7).
  * Verify that all regions on transcriptome are pointed to the correct files and I don't have log files or ports crossed somewhere.
  * Run comparison of mysql and null region storage.  Is null storage creating issues?
  * Run multiple regions disabling modules one at a time (where possible).
  * <del>Run multiple regions with an open top session on a remote shell.  Does watching really keep things from crashing?  If so, does a ping session (like I use on plastid and cordate) accomplish the same thing?</del> - No, having an open ssh session or a ping job running does not stop the problem.
  * At one point I was able to get 2+ days out of 16 regions.  Now regions are sometimes crashing after as little as 4-6 hours.  Is that because people are running larger (or faster growing pops than I was at first) or are things really getting worse over time.  Try setting up the initial experiments on all 15 regions again and see what happens.  Try again after restarting the entire machine.
  * <del>On cordate I am using $MONO_THREADS_PER_CPU=100 but it is 2000 on transcriptome.  Could trying to manage all those additional threads be causing problems?  What happens if I raise this value on cordate or lower it on transcriptome? What is the default value if I don't declare it in my .bashrc?  Am I reducing or raising it from the default?</del> - No, changing the setting on transcriptome to match that on cordate did not stop the problem.
