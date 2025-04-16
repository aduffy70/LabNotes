---
title:  Growth experiment diabolicum vs magniae
date:  2024-08-21
layout: post
categories:
  - sphagnum magellanicum
  - for others
---

Growth experiment comparing *Sphagnum diabolicum* and *Sphagnum magniae* with Marta Nieto-Lugilde.

# Notes

Experimental setup:
  * 2 species: magniae, diabolicum
  * 8 populations per species. The populations for each species are different so pop(species)
  * 2 treatments: warm, cold
  * 6 replicates of every pop(species) X treatment combo randomized over 6 trays


Dependent variable: final dry weight - continuous 

We also have an initial wet weight that would be nice to control for, but that takes us out of ANOVA territory.

Independent variables:
  * Species - categorical
  * Population (nested in species) - categorical
  * Treatment - categorical
  * Tray (nested in treatment) - categorical

One tray (D) from warm treatment was allowed to dry out so we want to analyze the data with and without it.

Two populations are from the same site.  They were mislabeled on the datasheet as being 2 different sites but they are the same. Does this mean they are one population?

Model(?):
Weight ~ species + treatment + species/pop + treatment/tray + speciesXtreatment + speciesXtreatment/tray + treatmentXspecies/pop + species/popXtreatment/tray

