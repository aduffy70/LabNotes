---
title:  Kenyon collaboration RADseq summary
date:  2022-02-22
layout: post
categories:
  - sphagnum other
  - for others
---
I took this over from Juan Jaramillo-Chico.

Originally the plan was 2 full RADseq plates with samples from transects acrossed hollows and hummocks in _Sphagnum magellanicum_ group sites in Maine and Minnesota so we can look at how species change along the transect and also at genetic variation within species at a site. James Loveland (Karen Hicks' undergraduate student) at Kenyon College was going to extract DNA for one plate, Juan was going to extract for a second plate, and James would come here to learn to create a RADseq library. I am now finishing the extractions and running the libraries and James will be involved in data analysis. James only ended up providing 44 DNA samples, so the 2 plates include:

  * 44 _S. magellanicum_ group samples from James
  * 88 _S. magellanicum_ group samples from Juan (some of which I extracted)
  * 7 Jam Pond Bog and McLean Bog _S. magellanicum_ group samples from Melodie that we want to identify to species.
  * 10 'mystery clade' _Sphagnum trinitense_ from Sean
  * 1 Mississipi _S. trinitense_(?) from Blanka
  * Some of my extracted but never sequenced _S. magellanicum_ group project samples from sites with multiple collections
  * Some more of Jon's Jam Pond Bog 2017 samples that I extracted

I included 8 duplicate samples within each plate and 8 samples from Plate 1 are duplicated on plate 2 (all from James and Juan's samples). We need many duplicates to allow us to better explore clonality along these transects. In the past we have used a couple duplicates to give a rough estimate of how different clones can be but I want to do a full statistical analysis for this study.

# Libraries

  * Kenyon #1: 2022-02-18, 2.1ng/uL in ~120uL. I ran it alone.
  * Kenyon #2: 2022-02-24, 1.8ng/uL in ~120uL. Ran with Melodie Najarro observing to learn the process.

# Questions and things to try

  * Analysis of variation within duplicates to allow a statistical test of how likely it is that two samples are clones?
  * Can I make a dataset of simulated siblings or some other way determine the likelihood that two samples are siblings? Can snapclust do this? It classifies samples as parental, F1, or hybrid (Beugin 2018)
