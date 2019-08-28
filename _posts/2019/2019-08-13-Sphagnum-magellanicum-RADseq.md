---
title:  Sphagnum magellanicum RADseq
date:  2019-08-13
layout: post
categories:
  - sphagnum other
---
# The plan

Three plates of Sphagnum magellanicum samples, including:
  * all of the samples from Brian Piatkowski's decomposition experiment
  * North American, South American, and European, and Asian samples, including samples from many of the same collections used in previous S. magellanicum studies.
  * Forest, bog, and edge samples from several sites
  * Multiple samples from some collections
  * Replicates (within and between plates) to determine expected distance between genetically identical samples (clones). I am going to run one random sample on each plate in two wells, and one random sample from plate 1 will also run on the other two plates, so I only give up a total of 5 wells to get this information.
  * There was another run of 96 S. magellanicum samples from 2 New York sites (St. Regis Lake and Franklin Bog?) that Nico ran but it never went anywhere. That library was created using the same protocol so I could potentially combine that data with the data from these 3 plates. Brian shared the data on Dropbox.

Differences from previous RADseq runs:
  * I am going to change the ligation thermocycle settings to include an enzyme deactivation step. The Gompert protocol includes one but we haven't been. Perhaps that explains the S. recurvum plate that had Illumina adapters ligated to reads without the cutsite?
  * I am going to run duplicate PCR reactions with two samples per reaction as specified in the current Gompert protocol. The older version our protocol was based on had duplicate PCR with only one sample, which doubles the reagents required. To save reagents, we were doing a single PCR. The new protocol gets the advantages of duplicate PCR without doubling the reagents.

# Preparation

  * Verified that we have reagents for 3 plates. Ordered MseI enzyme, T4 ligase enzyme, dNTPs, and iProof polymerase.
  * Need to make new dNTP dilutions
  * Need to make new MseI adapters--we have the oligos from IDT in the freezer
  * Need to make new PCR premix--we have the oligos from IDT in the freezer
  * Need to make 80% EtOH
  * Changed the order of samples to avoid correlation between which plate a sample is on and its geographic site (while keeping as many tube strips as possible intact for simplicity).
