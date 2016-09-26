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

# Installation on crozier

  * installed dependent packages:
    * tkinter and scipy from ubuntu repos
    * installed scikit-learn (version 0.17.1) from pip - the old version 0.14 in the ubuntu repos doesn't work with TarPmiR (The program dies with a stack trace about cint having the wrong number of positional arguments)
    * numpy was already installed
    * installed viennaRNA from the viennaRNA developers' repository
  * The developers' setup script doesn't actually install TarPmiR, it just checks for the dependent packages and installs them if needed.
  * I put the folder in /usr/local/bin and symbolic links to the actual python files in /usr/local/bin so it will be in my PATH. Had to chmod the GUI version from 711 to 755 or it wouldn't execute. Non-GUI version was already 755.

# Running TarPmiR

  * It requires:
    * mature miRNA sequences in fasta format
     * mRNA sequences in fasta format
     * A model (they've only developed the one so far /usr/local/bin/TarPmiR_Linux/Human.pkl)
     * A probability cutoff (I used 0.7 with StarMir, which is one of the values they suggest here)
  * The output is very similar to StarMir... a list of potential sites for each miRNA with values for each predictor in the model, and a probablility score
  * Unlike StarMir, it doesn't take into consideration where in the mRNA the location is (5'UTR, cds, or 3'UTR)
  * TarPmiR-test run:
    ~~~
    TarPmiR.py -a DA_expressed.fasta -b Estimated_mRNAs.fasta -m Human.pkl -p 0
    ~~~
  * output column headings from the TarPmiR manual:
    ~~~
    miRNA mRNA binding_site binding_probability energy seed accessibility AU_content PhyloP_Stem	 PyloP_Flanking m/e number_of_pairings binding_region_length longest_consecutive_pairings position_of_longest_consecutive_pairings pairings_in_3prime_end difference_of_pairings_between_seed_and_3prime_end
    ~~~


[1]: http://doi.org/10.1093/bioinformatics/btw318
[2]: http://hulab.ucf.edu/research/projects/miRNA/TarPmiR/
