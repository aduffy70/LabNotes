---
title:  New tool to identify miRNA targets
date:  2016-09-22
layout: post
categories:
  - gsta mirna
---
[Ding et al.][1] present a new tool (TarPmiR) to predict miRNA target sites. It uses the criteria used by previous tools (like StarMir), but they've identified new predictors as well. They developed it using mouse and human datasets where crosslinked miRNAs and mRNAs were both sequenced, so they had a better training set of "true" target sites than others.

They compared it to miRanda, TargetScan, and Mirmap (but not StarMir) and it predicted true sites that none of the other tools could identify. Unfortunately they don't compare performance with StarMir, but I can see if it identifies additional target sites that StarMir rejects.

It is [distributed as a python module][2].

Will it work with my list of miRNAs and the GSTA mRNA sequences? How does the output compare with StarMir?

# Installation on crozier (Ubuntu 14.04)

  * Installed dependent packages:
    * tkinter (81008) and scipy (0.13.3) from ubuntu repos
    * scikit-learn (version 0.17.1) from pip - the version 0.14 in the ubuntu repos doesn't work with TarPmiR (The program dies with a stack trace about cint having the wrong number of positional arguments)
    * viennaRNA (2.2.4-1~trusty) from the viennaRNA developers' repository
    * numpy (1.8.2) was already installed
  * The setup script doesn't actually install TarPmiR, it just checks for the dependent packages and tries to install them if needed.
  * I put the TarPmiR folder in /usr/local/bin with symbolic links to the two python scripts so they will be in my PATH.
    * Had to chmod the GUI version from 711 to 755 or it failed with a permissions error. Non-GUI version was already 755.
    * I can't find a version number, but the last update in TarPmiR.py is 02/02/2016.

# Running TarPmiR

  * It requires:
    * mature miRNA sequences in fasta format
    * mRNA sequences in fasta format
    * A model (they've only developed the one so far /usr/local/bin/TarPmiR_Linux/Human.pkl)
    * A probability cutoff (I used 0.7 with StarMir, which is one of the values they suggest here)
  * The output is very similar to StarMir... a list of potential sites for each miRNA with values for each predictor in the model, and a probablility score.  Output doesn't include column headings but they are in the TarPmiR manual:
    ~~~
    miRNA  mRNA  binding_site  binding_probability  energy  seed  accessibility  AU_content  PhyloP_Stem  PyloP_Flanking  m/e  number_of_pairings  binding_region_length  longest_consecutive_pairings  position_of_longest_consecutive_pairings  pairings_in_3prime_end  difference_of_pairings_between_seed_and_3prime_end
    ~~~
  * Unlike StarMir, it doesn't process 5'UTR, cds, and 3'UTR targets separately but if I need them separated I can do that easily. Raises the question: How does StarMir handle target positions near or straddling the UTR/cds boundaries?
  * TarPmiR-test run (note the -a rather than -i. The examples in the manual are wrong):
    ~~~
    TarPmiR.py -a DA_expressed.fasta -b Estimated_mRNAs.fasta -m Human.pkl -p 0
    ~~~


[1]: http://doi.org/10.1093/bioinformatics/btw318
[2]: http://hulab.ucf.edu/research/projects/miRNA/TarPmiR/
