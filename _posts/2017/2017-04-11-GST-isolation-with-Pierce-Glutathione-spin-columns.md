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
    * Using 4 tubes of cytosol (~750uL each) with a total protein concentration of approximately 25mg/mL (so about 75mg total protein for each sample). Note- this 25mg/mL estimate is based on the average concentration of a different set of cytosols. We don't have exact concentrations for these specific cytosols.
  * The last step is to remove the reduced glutathione from the isolated proteins. Is this necessary for what we are doing? Will it affect the mass spectronomy?
  * Verifying that we successfully extracted GSTs (and little else)? Western blots? SDS-PAGE?
    * On the absorbance checks of the wash step we reduced the absorbance by about 5 times (to about 0.1). Was that low enough to remove the other proteins or should we continue washes to get even lower absorbance?

# Nanodrop results

Nanodrop measurements of protein concentration in each elution (first should have highest concentration, third the least as GSTs get flushed from the column. Based on our mRNA studies and protein assays we would expect more GST proteins in the AFB treated sample (EW9) than in the control)

| Sample | protein concentration | volume | total protein |
| --- | --- | --- | --- |
| EW9-1 | 0.415 mg/mL | 5 mL | 2.075 mg |
| EW9-2 | 0.300 mg/mL | 5 mL | 1.500 mg |
| EW9-3 | 0.154 mg/mL | 5 mL | 0.770 mg |
| EW9 Total | | 15 mL | 4.345 mg |
| EW1-1 | 0.595 mg/mL | 5 mL | 2.975 mg |
| EW1-2 | 0.423 mg/mL | 5 mL | 2.115 mg |
| EW1-3 | 0.190 mg/mL | 5 mL | 0.950 mg |
| EW1 Total | | 15 mL | 6.040 mg |

With a (very roughly) estimated 75mg total starting protein in each sample, this means GSTs account for ~6% of the proteins in EW9 and ~8% of the proteins in EW1. In rat, GSTs make up 4% of the cytosolic proteins ([Hayes et al. 1987][3]), so these values aren't impossibly high.

# SDS-PAGE results:

Checking for a clean ~26kDa band and little else to show that the GSTs were captured and other proteins were removed...

![SDS results image][image1]

We have bands at 26kDa indicating we DID capture GSTs and less background than the recombinant GSTA3 sample indicating we cleaned out non-GST proteins. Band brightness on the image isn't useful--we didn't put precise volumes on the gel (~10-15uL varying because we were trying to chip a bit of the frozen sample from each tube without having to put the tubes through a freeze-thaw cycle.)

[1]: https://drive.google.com/file/d/0B0DnkQIRAeIINWhaXzIzN2hkTFE/view?usp=sharing
[2]: https://drive.google.com/open?id=1G8fhYLR94R9xw4rQQ-DeS5o0aTYLqgB8tXIOPKq6_vs
[3]: http://www.biochemsoctrans.org/content/ppbiost/15/4/721.full.pdf
[image1]: {{site.url }}/assets/GST_extraction_SDS-PAGE_2017-04-21edit.JPG
