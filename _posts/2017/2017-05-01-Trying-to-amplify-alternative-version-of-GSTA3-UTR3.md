---
title:  Trying to amplify alternative version of GSTA3 UTR3
date:  2017-05-01
layout: post
categories:
  - gsta alt splicing
---
# Problem

None of my attempts to amplify the suspected longer (b) version of the GSTA3 UTR3 have worked.

# Hypothesis

This could be because that version is just an artifact of the mRNA dataset and it doesn't really exist, or it could be because all the fragments we are trying to amplify are 1500-2300bp long. I haven't had success amplifying other fragments over 1000bp, even when I've tried to optimize PCR conditions for longer fragments.

All attempts to amplify version b have used a forward primer with the Universal RACE primer (UPM) that should be at the 3' end of all the RACE fragments. There is plenty of room to design reverse primers that will amplify shorter fragments and avoid some of the problems that come with using a primer that anneals to every molecule of DNA in the reaction.

# Solution

  * Design a new forward primer ~500bp from the suspected UPM location.
  * Design reverse primers ~500bp upstream of each of the forward primers.
  * Use these new primers to try to amplify several smaller pieces of the suspected UTR version b.

Ordered 4 primers:

~~~
>G3-U3b-3F
GGCAGCACTATTTCTGATACACGCCA
>G3-U3-1R
GATCTCTCCACCTTACACACACAGGA
>G3-U3-2R
GAGGTTGTGACAAGGTGGGGATCAAC
>G3-U3-3R
CTCCTGCAATGAAGAGGGACATCTACA
~~~

![GSTA3 UTR3 primer locations][image1]

These work but I can't be certain that they are amplifying RACE cDNAs and not genomic DNA contamination in the RACE cDNA tubes. I can amplify an expected length fragment from G3-U3b-3F to the UPM but it has weak multiple bands. If I design internal sequencing primers I should be able to sequence just the desired band. Ordered 2 forward primers within this section:

~~~
>G3-U3b-4F
AGATGGCTGTTGACTAATATCCCTAG
>G3-U3b-5F
CAATCCAGCCTGTATAGATCAAATATGC
~~~

[image1]: {{ site.baseurl }}/assets/UTR3_primer_locations.png
