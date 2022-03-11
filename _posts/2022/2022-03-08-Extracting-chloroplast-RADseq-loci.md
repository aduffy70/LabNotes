---
title:  Extracting chloroplast RADseq loci
date:  2022-03-08
layout: post
categories:
  - sphagnum genus-wide
  - for others
  - ideas
---
# Problem

We want to analyze chloroplast RADseq loci separately from nuclear loci. There are not many of them--the cpgenome is small so there are few cutsites--but it would be cool to see what phylogenetic signal exists. I want to do this on the _Sphagnum_ Genus-Wide dataset and for Juan Jaramillo-Chico's _Sphagnum subnitens_/_subfulvum_/_incundum_ data.

There are different ways this could be done:

  * Map RADseq loci to a _Sphagnum_ chloroplast genome and keep the ones that map at some minimum level.
    * I did this for Marta's _Sphagnum majus_ dataset by mapping to _Sphagnum fallax_ cp genome. We found 8 loci.
    * Only works on RADseq loci generated using _de novo_ assembly (like Marta's _majus_ loci) or by mapping to a genome that includes the cpgenome (normally it would not but I have sometimes added the chloroplast and mitochondrial contigs to the reference genome contigs).
    * Won't work for _in silico_ RADseq samples because those are made from only nuclear genome contigs.
  * Use a _Sphagnum_ cpgenome as the reference genome in ipyrad.
    * Won't work for the _in silico_ RADseq samples. But if I take the cpgenome assemblies for the Dimensions/Diversity samples and digest them _in silico_ I can generate a set of chloroplast _in silico_ digested RADseq samples.

# Process

  1. Generate _in silico_ digested chloroplast RADseq reads from the partial chloroplast genomes I assembled from the Dimensions/Diversity resequencing data. Note- some of these have large gaps (hundreds to 10's of thousands of bases) marked by strings of 50 Ns. I need to be sure I don't include reads that span one of these gaps. 
  2. Run ipyrad on the chloroplast _in silico_ RADseq samples and on the real RADseq samples using the _Sphagnum fallax_ chloroplast genome as the reference.

I don't expect this to find many loci, but it is worth a try, and the _in silico_ digested chloroplasts can be used on other projects as well.

# Caveat

In the real RADseq samples, is possible that this will identify "chloroplast-like" loci from the nuclear genome or may combine reads from chloroplast-like loci with reads from true chloroplast loci. Those sorts of error are expected in RADseq analyses but normally we can assume the effects of errors are small compared to the true signal. With very few loci, that may not be a safe assumption.

# Result

209 _in silico_ digested chloroplast RADseq samples are now available in ShawLab Dropbox with the nuclear _in silico_ digested RADseq samples. This includes all of the chloroplast genomes I have for the Dimensions/Diversity projects and the _S. magellanicum_ and _S. fallax_ reference genomes.
