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

  * 40 _S. magellanicum_ group samples from James (I omitted 4 of his extractions with low qubit concentration).
  * 88 _S. magellanicum_ group samples from Juan (some of which I extracted)
  * 7 Jam Pond Bog and McLean Bog _S. magellanicum_ group samples from Melodie that she wants to identify to species, but could also be included with the samples for this study.
  * 10 'mystery clade' _Sphagnum trinitense_ from Sean--not for this project.
  * 1 Mississipi _S. trinitense_(?) from Blanka--not for this project.
  * 1 Puerto Rican _S. trinitense_ from Amelia--not for this project.
  * 13 of my extracted but never sequenced _S. magellanicum_ group project samples from sites with multiple collections to be included in this study.
  * 8 more of Jon's Jam Pond Bog 2017 _S. magellanicum_ group samples that I extracted to be included in this study.
  * 24 duplicates of _S. magellanicum_ group samples: 8 within plate1, 8 within plate2, and 8 between plates. 6 from James, 1 from Melodie, and 17 from Juan. We need many duplicates to allow us to better explore clonality along these transects. In the past we have used a couple duplicates to give a rough estimate of how different clones can be but I want to do a full statistical analysis for this study.

# Libraries

  * Kenyon #1: 2022-02-18, 2.1ng/uL in ~120uL. I ran it alone.
  * Kenyon #2: 2022-02-24, 1.8ng/uL in ~120uL. Ran with Melodie Najarro observing to learn the process.
    * This library was rejected by the sequencing center for low concentration after their cleaning step. I rePCRd 13 samples with little remaining PCR product and made a new pooled library. I did not bead-clean this new pool--the sequencing center will do it.

# Questions and things to try

  * Analysis of variation within duplicates to allow a statistical test of how likely it is that two samples are clones?
  * Can I make a dataset of simulated siblings or some other way determine the likelihood that two samples are siblings? Can snapclust do this? It classifies samples as parental, F1, or hybrid (Beugin 2018)
