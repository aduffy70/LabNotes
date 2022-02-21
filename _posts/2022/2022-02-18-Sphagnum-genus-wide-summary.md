---
title:  Sphagnum genus-wide summary
date:  2022-02-18
layout: post
categories:
  - sphagnum genus-wide
---
I have a set of datasets that differ based on:

  * The mapping method used to identify loci (mapped to _Sphagnum magellanicum_, _S. angustifolium_, or _de novo_)
  * The level of sample coverage (66%, the highest level that gives a reasonable number of loci, or 33%, which has way too much missing data but yields enough loci to do things like by-chromosome analyses)
  * haploids only, haploids+diploids, treating all samples as haploid, or treating all samples as diploid

I am not running all possible combinations and not all of the datasets I create will be used for all analyses:

  * GW-Smag-hapdip2-66p: Mapped to S. mag, haploids+diploids, 66% sample coverage. The "main" dataset.
  * GW-Smag-hap2-66p: Mapped to S. mag, haploids only, 66% sample coverage. For analyses where diploids may cause problems.
  * GW-Smag-hapdip2-33p: Mapped to S. mag, haploids+diploids, 33% sample coverage. For by-chromosome analyses.
  * GW-Smag-hap2-33p: Mapped to S. mag, haploids only, 33% sample coverage. For by-chromosome analyses where diploids may cause problems.
  * GW-Sang-hapdip2-66p: Mapped to S. ang, haploids+diploids, 66% sample coverage. To confirm that genome used for mapping does not affect inferences.
  * GW-Sang-hap2-66p: Mapped to S. ang, haploids only, 66% sample coverage. To confirm that genome used for mapping does not affect inferences on analyses where diploids may cause problems.
  * GW-denovo-hapdip2-66p: Mapped denovo, haploids+diploids, 66% sample coverage. To confirm that mapping method does not affect inferences.
  * GW-denovo-hap2-66p: Mapped denovo, haploids only, 66% sample coverage. To confirm that mapping method does not affect inferences on analyses where diploids may cause problems.
  * GW-Smag-as_haploid-66p: Mapped to S. mag, all samples treated as haploid, 66% sample coverage. To look at effect of ploidy choices on inferences.
  * GW-Smag-as_diploid-66p: Mapped to S. mag, all samples treated as diploid, 66% sample coverage. To look at effect of ploidy choices on inferences.

Even this many datasets is excessive and I need to prioritize.

The big problem is going to be ploidy. We have conflicting information for ploidy of some samples so we need to present the best evidence we can for why I chose the ploidy I did, and if possible, demonstrate that those choices don't affect other inferences or be able to note where they do.