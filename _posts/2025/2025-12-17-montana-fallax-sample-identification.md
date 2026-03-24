---
title:  Montana Sphagnum fallax sample identification
date:  2025-12-17
layout: post
categories:
  - sphagnum other
  - for others
---
Sean Robinson provided Cuspidata subgenus samples from Montana for RADseq analysis and identification.

In a Cuspidata-wide tree (one or two representatives of each species from the genus-wide tree), the Montana samples fell with _Sphagnum annulatum_ (1 sample) or sister to _Sphagnum fallax_ (2 samples). Sean thinks the _S. annulatum_ placement makes sense based on morphology, but the _S. fallax_ placement is unexpected.

Run a tree including:
  * the two _Sphagnum fallax_-sister MT samples
  * samples representing the genetic and geographic range of both _S. fallax_ subclades (North American _S. fallax_ and European _S. fallax_, "Sphagnum isoviita", and "Sphagnum brevifolium") from the Recurvum project tree.
  * minimal samples of "Sphagnum pseudopacificum" and _Sphagnum pacificum_, and use _Sphagnum balticum_ as root

This will tell us if his MT samples are in or sister to one of the 2 _S. fallax_ clades or sister to both.

```
                                    <50
                                 ------- fallax NA
                            100 |                       
                         -------|
                     95 |       |   100
                 -------|        ------- fallax/iso/brev Eu
            100 |       |
         -------|        --------------- pseudopacificum
    100 |       |
 -------|        ----------------------- pacificum
        |
         ------------------------------- balticum
```

This is the simplified topology from the Recurvum Project ML tree. Bootstraps are from RaxML. Topology is consistent with the genus-wide tree, but that tree didn't include representatives of the European _S. fallax_ clade and only included 2 samples from the NA clade. 
