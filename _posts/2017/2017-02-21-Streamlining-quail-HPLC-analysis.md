---
title:  Streamlining quail HPLC analysis
date:  2017-02-21
layout: post
categories:
  - gsta assays

---
Working with Fran Bhushan and Sean Moody to streamline data handling for HPLC analysis.

extract_hplc_data.py - Takes the multiple output files from an HPLC run and extracts the pieces needed for analysis. Did a version that puts the data in the same table format Fran was using (saved that version in the git repo) but realized a single table format could be processed faster.
  * Use the script to generate the table
  * Determine which timepoints you want to save
  * Sort the table by timepoints
  * Delete everything above and below the timepoints you want
  * Sort everything by Order column to put them back in the sample order we want
  * 
