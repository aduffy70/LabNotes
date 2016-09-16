---
title: Analyzing lung Affymetrix data
date: 2015-02-19T14:57:03+00:00
layout: post
categories:
  - pm2.5
---
  * Worked with Jake Weston on the Affymetrix Lung data. It looks like limiting the genes to just those that have fairly similar values in the three control replicates reduces the number of significantly differently regulated genes that only show up when a single control is used but doesn't affect the list of genes that show up when different combinations of controls are used... giving us some confidence that that list of genes really is upregulated. We are likely throwing out a lot of up and downregulated genes, but the ones we are keeping should be real and not just noise.  I hope.
