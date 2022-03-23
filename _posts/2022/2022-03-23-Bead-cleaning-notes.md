---
title:  Bead cleaning notes
date:  2022-03-23
layout: post
categories:
  - ideas
---
I have not been confident in our process for the bead-cleaning/size-filtering step of the RADseq protocol. It seemed like what we were doing was backwards based on the information I could find about Ampure XP beads.

It is a two step process:

1. We add one quantity of beads to the sample and the longest DNA fragments bind to the beads. We discard the beads and save the liquid containing the small and medium fragments.
2. We add a smaller quantity of beads to the now larger sample volume and the medium-sized fragments bind to the beads. We discard the liquid containing the small fragments, clean the medium fragments on the beads, and elute them into water.

The problem was, everything I read said larger fragments bind to the beads at higher concentrations of beads. So, we should be using a lower concentration of beads at step one and a higher concentration of beads at step 2, but clearly there are fewer beads in higher volume (lower concentration) at step 2.

It confused me when I looked into it pre-pandemic but in the end, what we were doing was working and changing the size-selection step could make new RADseq datasets incompatible with old ones so I just accepted the process as a black box and moved on.

Fast-forward two years. New management in the sequencing center, confusion over what size-filtering they had been doing for us in the past, and lower and lower yields in my final libraries forced me to try to understand what our process is actually doing:

  * All the documentation talks about "bead concentration" but it isn't really about the concentration of beads. They really mean "concentration of the beads and the liquid the beads are floating in".
  * This is really just a PEG/salt purification process. In just water, the DNA is in solution. Add a little PEG/salt and the largest fragments come out of solution. Add more PEG/salt and the medium-sized fragments come out of solution. Add even more and the small fragments would come out of solution. The beads are just there to grab whatever DNA comes out of solution. And each bead can grab huge amounts of DNA so the amount of beads isn't very important. The concentration of PEG/salt is what matters.

So in our two step process we are really:

1. Adding a quantity of beads _making a low concentration (0.59X) PEG/salt_ so the longest DNA fragments bind to the beads. We discard the beads and save the liquid containing the medium and small fragments _and all the PEG/salt--still at 0.0.59X concentration_.
2. We add a smaller quantity of beads _raising the concentration (to 0.78X) PEG/salt_ so the medium-sized fragments bind to the beads. We discard the liquid containing the small fragments and PEG/salt, clean the medium fragments on the beads, and elute them into water.

Suddenly what we are doing makes perfect sense. And our concentrations are practically the same that the sequencing center uses (0.6X & 0.8X). So we have been size filtering here, and then they have been doing an identical size-filtering there.

So why are the yields declining?

Ampure XP beads have a recommended shelf-life of 18 months. We have been using the same bottle since before I started working here. I don't know how it goes bad with time but perhaps the PEG/salt aren't pushing the DNA fragments out of solution, or the DNA isn't binding to the beads, or the DNA isn't releasing from the beads after cleaning. Any of those would reduce yields.

The sequencing center is going to do the bead-cleaning/size-filtering for us. They do this a lot so their reagents are always fresh.
