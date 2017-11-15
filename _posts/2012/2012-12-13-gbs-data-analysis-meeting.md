---
title: GBS data analysis meeting
date: 2012-12-13T11:01:47+00:00
layout: post
categories:
  - t. intricatum gbs
---
Attending: Martin, Hardeep, Paul, Karen, Mark

  * Attempting to resolve our bias against heterozygotes: To be called a heterozygote, we need 4 reads of each allele, so to call a homozygote we need 2X4 reads.  But to keep from throwing out tons of data we can mark one allele as unknown.  So 8A reads would be called as AA, 7A reads would be called as A-, 7A and 1T would also be called as A-.  This loses some data but more equally represents our uncertainty for both homo and heterozygotes.
