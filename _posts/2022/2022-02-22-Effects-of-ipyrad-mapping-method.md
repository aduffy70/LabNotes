---
title:  Effects of ipyrad mapping method
date:  2022-02-22
layout: post
categories:
  - sphagnum genus-wide
---
## Problem

We are trying to do a genus-wide analysis of _Sphagnum_ RADseq samples and we don't know how our choice of mapping method in ipyrad affects results. We have two genomes to choose from or we could assemble loci _de novo_. Does the fact that some samples are more similar to one genome than the other bias results? We might expect that we would identify more loci in samples more closely related to a genome sample, leading to higher levels of missing data in more distantly related samples. Is this the case, and if so, does it affect downstream analyses?

## Process

  * Run ipyrad 3 ways:
    * Map to _Sphagnum magellanicum_ genome
    * Map to _Sphagnum angustifolium_ genome
    * Assemble _de novo_
  * Compare distributions of:
    * % of reads mapped
    * Number of consensus reads
    * % of loci present in the final dataset (missing data)
  * Compare topology of ML trees resulting from the 3 methods
  
## Results
