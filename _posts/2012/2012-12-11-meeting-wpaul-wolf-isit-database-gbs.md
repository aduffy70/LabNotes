---
title: 'Meeting w/Paul Wolf (iSIT database & GBS)'
date: 2012-12-11T11:14:47+00:00
layout: post
categories:
  - science ed drk12
  - t. intricatum gbs
---
  * iSIT database
      * For the iSIT database, should we:
          * include the demographic questions in the instrument responses table of the db - even though we have that data stored elsewhere
          * remove the demographic questions manually before importing the data
          * filter out the demographic questions with the script as we import the data
      * Will these questions ever change or will the number of them change?  If so that could make removing them automatically a fragile process.
  * GBS pipeline (for the Aspen data currently, but it will have implications for my Trichomanes intricatum analysis too)- I have two concerns about our filtering process that I shared with Paul:
      * Our filtering process is biased against heterozygous loci.  If we have 2 loci, each with 6 sequences, a homozygous locus would pass our filters because there is one allele with 6 reads but a heterozygous locus would likely be thrown out (or one of the alleles would be thrown out) for having 4 or fewer reads of each allele.  So all else equal, we are more likely to discard a heterozygous locus than a homozygous locus.  How will this affect population genetic measures that compare levels of heterozygosity?  Paul suggested that a check for this would be to check for deviations from Hardy-Weinberg equilibrium.
      * Our method of filtering does not take into account what we know about that locus from other individuals.  If we have a 3T:5A locus in one individual we would throw out the T's as sequencing error (less than 4 reads).  But would we think differently about it if we knew that many other individuals also had T:A heterozygosity at that locus?  It seems if we have knowledge about the alleles that are common at a locus in our entire sample of individuals, we should incorporate that into decisions about what data to filter from each individual.  Paul suggested we could incorporate this information by filtering once, creating our genotypes table, and then going back and re-analyzing the data we threw out based on what is in the genotypes table.
