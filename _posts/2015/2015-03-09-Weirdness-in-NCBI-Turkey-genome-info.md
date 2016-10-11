---
title: Weirdness in NCBI Turkey genome info
date: 2015-03-09T14:56:19+00:00
layout: post
categories:
  - gsta other
---
  * Weirdness in the Meleagris genome info in NCBI:
      * The latest sequence for Meleagris chromosome 2 (NC_015012.2) shows ICK - GSTA3 - GSTA4 - GSTA1.1
      * The previous version(s?) (BAC37H15) show ICK - GSTA4 - GSTA3 - GSTA1.1. This is the version Hardeep used for primer design.
      * Blast still only returns hits to the old version, not the new.
      * Trying to align the old with the new gives a very gappy alignment. Does this mean the assembly has actually been rearranged in this area, rather than just the annotations changing?
      * How does this affect the sanger sequence Deepika Gaddam has generated? There are gaps (NNNNNs) in the old sequence that was used to design primers so perhaps any rearrangement in the assembly just rearranged the order of the sections between gaps?
  
