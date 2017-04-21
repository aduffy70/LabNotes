---
title:  GST isolation with Pierce Glutathione spin columns
date:  2017-04-11
layout: post
categories:
  - gsta isoforms

---
First attempt working through the [Pierce Glutathione Spin Column protocol from ThermoScientific][1].

The kit is designed to tag a desired protein in a sample with GSTs, bind the GST-tagged proteins to a column, clean away everything else, flush the GST-tagged proteins from the column, cleave off the GSTs, and collect the desired protein.

We are trying to modify that process to just bind the GSTs that are already present in a sample to the column, clean away everything else, flush the GSTs from the column, and collect them. I documented the [protocol we followed here][2]

  * The first step is to extract proteins from cells as a crude lysate. They suggest several possible methods, including commercial kits or simple freeze/thaw cycles. Our cytosol extractions are essentially a protein extraction that should contain the GSTs so we are starting with those.
  * Samples for this test run... We have lots of Eastern Wild cytosol unambiguously labeled so we can use some of the same birds from the miRNA and mRNA studies. The Domestic cytosols aren't so clear, so we'll wait on those for til we can sort them out and be sure we are using samples from the right birds..
    * EW1 (AFB treated) and EW9 (control)
    * Using 4 tubes of cytosol (~750uL each) with a total protein concentration of approximately 25mg/mL (so about 75mg total protein for each sample).
  * The last step is to remove the reduced glutathione from the isolated proteins. Is this necessary for what we are doing? Will it affect the mass spectronomy?
  * Verifying that we successfully extracted GSTs (and little else)? Western blots? SDS-PAGE?
    * On the absorbance checks of the wash step we reduced the absorbance by about 5 times (to about 0.1). Was that low enough to remove the other proteins or should we continue washes to get even lower absorbance?

# SDS-PAGE results:

Checking for a clean ~26kDa band and little else to show that the GSTs were captured and other proteins were removed...

![SDS results image][image1]

We have bands at 26kDa indicating we DID capture GSTs and less background than the recombinant GSTA3 sample indicating we cleaned out non-GST proteins. Band brightness on the image isn't useful--we didn't put precise volumes on the gel (~10-15uL varying because we were trying to chip a bit of the frozen sample from each tube without having to put the tubes through a freeze-thaw cycle.)

[1]: https://drive.google.com/file/d/0B0DnkQIRAeIINWhaXzIzN2hkTFE/view?usp=sharing
[2]: https://drive.google.com/open?id=1G8fhYLR94R9xw4rQQ-DeS5o0aTYLqgB8tXIOPKq6_vs
[image1]: {{site.url }}/assets/GST_extraction_SDS-PAGE_2017-04-21edit.JPG
