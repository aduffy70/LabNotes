---
title: Script to match GBS records with the barcode names
date: 2011-08-22T13:30:17+00:00
layout: post
categories:
  - t. intricatum gbs
---
Wrote a python script for Hardeep Rai to match his Genotypic By Sequencing records to the names of the barcodes.

<pre>hardeep.py
Aaron M. Duffy
aduffy70@gmail.com
Aug 2011
For Hardeep Rai

Quick and dirty script to match barcodes in one file with their long names in another.
Complicated slightly by the fact that in one file the barcodes also have a 4 character
cut-site sequence that needs to be removed before we can match them up with the
barcodes in the other file.  I split most steps into distinct lines and over-documented so
Hardeep can have a plain language (rather than pythonese) record of what the code
does.</pre>

The script, input and output files are stored in WolfLab/Hardeep\_GBS\_BarcodeFix/
