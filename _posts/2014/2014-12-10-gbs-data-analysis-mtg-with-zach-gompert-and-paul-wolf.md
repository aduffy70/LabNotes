---
title: GBS data analysis mtg with Zach Gompert and Paul Wolf
date: 2014-12-10T13:58:34+00:00
layout: post
categories:
  - t. intricatum gbs
---
  * <span style="line-height: 13px;"> Before I can think about population genetics analysis, I have to answer a couple questions:</span>
      * Does it look like my data is mostly fern DNA (as opposed to contaminants)?
          * after making clusters at high stringency (to eliminate duplicate reads), blast against fern and algal chloroplast genomes. I should have a few reads from the chloroplast and they should be present in high numbers. Look for a disturbing proportion of algal vs fern chloroplast reads.
          * Trying to do this same thing with non-chloroplast DNA won't be useful since so much of what I have, and the genomes I'd be blasting against are non-coding and with such short reads I'm very likely to find random matches that will worry me but don't mean anything. -Just cause I might find hits in a zebra genome doesn't mean my samples are contaminated with zebra DNA. Basically I just have to trust that the vast majority of the cells in my extractions were fern and so the majority of my DNA is fern too.
      * Are my loci clearly defined or not? Or in other words, does the potential ploidy of my gametophytes make it unclear what is a locus and what are related loci?
          * I can get at this by clustering at 100% stringency, 99% stringency, 98% stringency... and so on. If look at the number of clusters produced by each of these and plot them, I should start with a high number (the count of unique sequences) and then reads with one, two, three... and so on errors should cluster with their "parent" read. If I have normal ploidy - a locus is clearly a locus - this plot should drop off quickly to a long low tail. If I have lots of loci that are paired because of some relatively recent hybridization or other strange ploidy situation, then the plot will drop, plateau, and then drop again. I hope NOT to see that pattern because it will make it harder to decide what to treat as a locus - though it will be telling me something potentially interesting about the history of these gametophytes.
      * Can I estimate the ploidy level of my gametophytes from the ratios of alleles at each locus?
          * If I have true haploid individuals, then I should expect each individual to have one allele per locus (with some noise from error). If I have diploid individuals I'd expect a roughly 50:50 ratio of alleles per locus in each individual. If they are triploids I'd expect a 2:1 ratio (2 peaks at .33 & .66). I'm not clear how I would look at this yet, but I can't do it til I am sure I have clearly defined loci anyway. This will be complicated a bit, because a sample with multiple haploid individuals would look the same as a sample with a single polyploid individual. Comparing things between multiple samples from a single collection may be informative.
  * Cluster my reads - don't assemble. Assembly programs look to extend reads into contigs, but few if any of my reads should be overlapping.
  * Make sure the clustering tool I use allows for indels when it calculates distance. It may cause error when we do that with short barcode sequences but with longer actual reads the difference in distance caused by a single indel can potentially be huge.
  * Clustering tools: uclust (start here), cdhit
  * Zach usually takes a subset of his reads, clusters them, and then uses that set of clusters as a pseudo reference genome. Then he assembles his reads to this reference (note that at this point it isn't really assembly, since each cluster/locus in the pseudo reference is essentially being treated as a separate chromosome). Doing it this way gives you SAM/BAM formatted output which is easier to use in subsequent steps.
  * Once you have a SAM/BAM file you can use SAM tools or BCF tools (or I may have to use GATK, which is a bit more complicated, since it doesn't assume diploidy).
  * For all this, I think I need to start by pulling out the other species and just focusing on T. intricatum.
