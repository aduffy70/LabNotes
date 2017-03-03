---
title:  Questions on ipyrad for Trichomanes intricatum GBS analysis
date:  2017-03-02
layout: post
categories:
    - t. intricatum gbs
---

Questions on the [ipyrad documentation:][1]

Selecting the data type is important. Is our GBS data really "ddrad" data based on their definitions?  We used 2 restriction enzymes (MseI and EcoRI).

> ddrad – This category is very similar data types which select fragments that were digested by two different restriction enzymes which cut the fragment on either end. During assembly this type of data is analyzed differently from the rad data type by more stringent filtering that looks for occurrences of the second (usually more common) cutter. e.g., double-digest RAD-seq.

> gbs – This category includes any data type which selects fragments that were digested by a single enzyme that cuts both ends of DNA fragments. This data type requires reverse-complement clustering because the forward vs reverse adapters can attach to either end of each fragment, and thus when shorter fragments are sequenced from either end the resulting reads often overlap partially or completely. When analyzing GBS data we strongly recommend using a stringent setting for the filters_adapters parameter. e.g., genotyping-by-sequencing (Elshire et al.), EZ-RAD (Toonin et al.).



[1]: http://ipyrad.readthedocs.io
