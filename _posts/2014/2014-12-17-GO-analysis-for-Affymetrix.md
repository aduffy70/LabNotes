---
title: GO analysis for Lung Affymetrix
date: 2014-12-17T15:01:36+00:00
layout: post
categories:
  - pm2.5
---
  * Found tool to return descriptions for a list of GO (Gene Ontology) designators for Jake Weston
      * The output file from GoStat already contained the info he needed. I just re-formatted to make it easier to read
      * He has lists of genes that are upregulated in each of his 4 treatments and wants to compare to see which genes are just in one list and which genes are in more than one list. I wrote a script (comparelists.py) to do that. It gives data in a format that should be easily used to generate venn diagrams too.
