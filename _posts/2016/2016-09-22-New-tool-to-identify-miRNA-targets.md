---
title:  New tool to identify miRNA targets
date:  2016-09-22
layout: post
categories:
  - gsta mirna
---
[Ding et al.][1] present a new tool (TarPmiR) to predict miRNA target sites. It uses the criteria used by previous tools (like StarMir), but they've identified new predictors as well. They developed it using mouse and human datasets where crosslinked miRNAs and mRNAs were both sequenced, so they had a better training set of "true" target sites than others.

They compared it to miRanda, TargetScan, and Mirmap (but not StarMir) and it predicted true sites that none of the other tools could identify.

It is distributed as a python module.

Will it work with my list of miRNAs and the GSTA mRNA sequences? How does the output compare with StarMir?

[1]: http://doi.org/10.1093/bioinformatics/btw318
