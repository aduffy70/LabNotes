---
title: Recovering logs and plots from VPGsim activity
date: 2011-10-03T21:08:52+00:00
layout: post
categories:
  - science ed vpgsim
---
  * The demographics logs have rows where the previous summary was not cleared so the next line in the log has the same time step number and the new summary data added to the old.  In some cases there are dozens of rows where it just kept adding to the previous.
  * Wrote a script to fix the time step numbers and to subtract out the old data leaving just the new summary on each row. (fix\_vpgsim\_demographics_log.py)
  * The hwe logs have rows with the same step numbers but the allele frequency and heterozygosity data seems ok (or if it isn't there is no way to tell).
  * Wrote a script to fix the time step numbers. (fix\_vpgsim\_hwe_log.py)
  * Discovered that my script to generate plots with Google Charts API doesn't handle the hwe data with NA's (where there are no sporophytes.  Had to adjust the script to replace the NA's with '\_' to indicate missing data. (vpgsim\_make\_chart\_urls.py)
  * Ran the script to generate plots for all the salvaged logs and posted them to the class website.
  * I need to decide where to store these scripts... though they are not likely to be needed again.
  * I also need to decide where to store the Google AppEngine vpgsimplots tool... a separate GitHub repo?
