---
title:  Extracting DNA from single Sphagnum capsules
date:  2022-07-08
layout: post
categories:
  - sphagnum magellanicum
  - ideas
---
We want to be able to do RADseq analyses on DNA from Sphagnum sporophytes (capsules) but they present some challenges:
  * Tiny size, few cells = little DNA
    * I'm attempting our CTAB protocol but have low hopes. Can we optimize extraction to get the most DNA possible (look into glycogen or dextran in the precipitation step) and then scale down the library prep processes to work with less DNA while still reaching similar final PCR product quantities? People do minimal extractions by breaking down cell walls and membranes and going straight to PCR. Can we do something similar going straight to RAD digestion? How would I test whether that was successful?
  * Tiny size = higher contaminant:target ratio. A few leaves from the wrong plant in a normal gametophyte extraction is not a disaster, but a single leaf has as many cells as a capsule. Contamination from the parental gametophyte will just complicate genotype calling since it will add more copies of one allele. Contamination from other gametophytes will be disastrous. Contamination with spores from other sporophytes from the same or other gametophytes will have to be avoided as well. We will need a clean process for sampling to make sure we avoid contamination of all kinds.
  * The capsule is full of spores which represent many many haplotypes derived from the mother sporophyte's genotype. If the spores are all there, the ratios of alleles for combined spores should be 50:50 for loci that are heterozygous in the mother sporophyte. If many of the spores have dispersed that ratio might be very different, which will complicate genotype calling. Using unopened capsules will avoid this while also giving the largest possible number of cells (tens to hundreds of thousands of spores per capsule).
