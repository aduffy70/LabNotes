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

# Preparation

  * Verified that we have reagents for 3 plates. Ordered MseI enzyme, T4 ligase enzyme, dNTPs, and iProof polymerase.
  * Need to make new dNTP dilutions
  * Need to make new MseI adapters--we have the oligos from IDT in the freezer
  * Need to make new PCR premix--we have the oligos from IDT in the freezer
  * Need to make 80% EtOH
  * Changed the order of samples to avoid correlation between which plate a sample is on and its geographic site (while keeping as many tube strips as possible intact for simplicity).

# Libraries

  * Plate 1 (order#5923 submitted 2019-09-10):
    * Final concentration: 6.47 ng/uL in 122.5uL.
    * PCR yields were a bit lower than in the past (mean ~12ng/uL instead of >15) and highly variable (I didn't seal the PCR plate well and it ran overnight so edge samples evaporated a bit, increasing their concentrations) so I ran a second set of PCR reactions and made a "2nd try" library. PCR yields weren't any better (though more consistent since I sealed the plate better and ran it in the morning so it wouldn't sit overnight) and final yield was lower (3.66 ng/uL in 87.5uL) so I used the original library.
  * Plate 2--waiting on results of Plate 1 to proceed...
  * Plate 3
