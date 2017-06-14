---
title:  qPCR strategy for GSTA3 UTR alternative splicing
date:  2017-06-14
layout: post
categories:
  - gsta alt splicing
---
# Problem

I have confirmed (PCR and sequencing) 3 versions of the GSTA3 5'UTR and 4 versions of the 3'UTR. Now I want to know how the relative levels of these different versions of the mRNA differ in Wild and Domestic turkeys with and without AFB treatment.

# Strategy

Design primer pairs that selectively amplify a single version. Use qPCR on cDNAs from Wild and Domestic turkeys with and without AFB treatment to compare expression levels.

1. Design and order primers (with compatible Tms).
2. Confirm that each primer pair amplifies a single band under the qPCR conditions.
3. Perform qPCR and analyze results.

# Questions

How do I normalize the data? Use housekeeping genes? Use GSTA3 coding sequence (cds)? Both?
  * Using housekeeping genes shows more directly how the expression of each changes, but we already know that GSTA3 expression in general changes so we might not be able to detect smaller changes in individual versions.
  * Using cds will show how expression of different versions changes as a proportion of total GSTA3 expression.

Can I make valid comparisons between things amplified with different primer sets?
  * In one type-treatment, if version A amplifies better than version B, does that mean it has higher expression or could it just be that one primer set is better optimized to the PCR conditions?
  * Will I be able to make statements about the relative expression of the different versions or only about how the expression of each version changes between type-treatments?

# Primers

## UTR5
Rules:
  * To ensure we are only amplifying the correct version: At least one of the primers must be anchored in sequence unique to the version. If the 3' end can also anneal to another version (or to genomic DNA contamination), the Tm of that part must be drastically lower (20+ degrees C).  
  * To ensure we are amplifying cDNA and not genomic DNA contamination: The amplified fragment must cross an exon splice point (where an intron would be present making a much larger fragment in genomic DNA.

Version A

Version B

Version C

## UTR3
Rules, to ensure we are only amplifying the correct version and not genomic DNA contamination:
  * Reverse primer must span the point where the polyA tail starts. The 3'end of the primer (the part annealing to cDNA sequence and not to the polyA tail) must have a drastically lower Tm than the whole primer (20+ degrees lower).  This is going to make primer design a little challenging since polyT's in a primer don't add much to the Tm. Primers will need to be long.

Version A (short)

Version B (longest)

Version C (long)

Version D (longer)
