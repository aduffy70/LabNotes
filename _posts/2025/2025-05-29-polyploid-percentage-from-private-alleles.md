---
title:  Polyploid parentage from private alleles
date:  2025-05-29
layout: post
categories:
  - sphagnum imbricatum
  - ideas
---
I want to test the hypotheses of allopolyploid parentage by looking at how often allopolyploids hae heterozygosity at alleles which are differentially fixed in the hypothesized haploid parents.

# Process

* For samples of 2 hypothesized parental haploid species, identify differentially fixed loci ("diagnostic loci")
* Look at each of those loci in samples of the polyploid species and categorize that locus as heterozygous, homozygous, or unknown (RADseq missing data)

Then ask:
  * What proportion of those fixed loci are heterozygous?
  * How does that proportion heterozygous compare when we repeat this using other species than the hypothesized parents?
  * How doe the proportion of those loci compared to the proportion of heterozygous loci overall in the sample?
  
## Script output

```
Diagnostic loci: <integer>
Not diagnostic loci: <integer>

Sample<string>, het_diag<integer>, homozyg_diag<integer>, het_notdiag<integer>, homozyg_notdiag<integer>
```

# Hypothesized parents from STRUCTURE (in decreasing likelihood order):

* _Sphagnum papillosum_: _Sphagnum affine1_, _Sphagnum magellanicum_, _Sphagnum affine2_, _Sphagnum diabolicum_, _Sphagnum perichaetiale_
* _Sphagnum alaskense_: _Sphagnum imbricatum_, _Sphagnum divinum_, _S. magellanicum_, _S. diabolicum_, _S. affine2_, _S. affine1_
* _Sphagnum frahmii_: _S. perichaetiale_, _S. diabolicum_, _S. magellanicum_, _Sphagnum magniae_

