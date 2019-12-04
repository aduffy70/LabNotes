---
title:  Sphagnum magellanicum RADseq- Incorporating the genome
date:  2019-12-03
layout: post
categories:
  - sphagnum subsecunda biogeography
  - sphagnum other
---

Since we have the Sphagnum magellanicum reference genome assembly, we can do some things with the S. magellanicum RADseq dataset that we can't on other datasets:

# 1) Map the ipyrad loci back to the genome and to other databases to identify Sphagnum vs contaminate loci.

This will let us see approximately what proportion of the loci in a Sphagnum RADseq project are Sphagnum vs contaminant DNA, and see how much of an effect including contaminant loci has on our inferences.

## Process

  * Map to the genome to identify mapping and nonmapping loci.
    * Mapped allowing 7 mismatches to approximate ipyrad's 90% clustering of ~70bp loci
  * Blast nonmapping loci to the genome to identify loci that probably are Sphagnum loci but failed to map for technicalities vs nonmapping/nonblasting loci
    * I considered query length when evaluating these blast results. A 50bp locus that aligns exactly will have the same e-value as a 75 bp locus with 50bp in the middle that align exactly but doesn't align at all at the ends. I required a high e-value AND an alignment length >85% of the query length.  
    * Build an ML tree from these loci to see if it differs from the tree using all loci.
  * Blast nonmapping/nonblasting loci against Genbank (nt) to identify likely non-Sphagnum loci (again accounting for query length).
    * Determine what proportion of the top blast hits represent likely contaminants of Sphagnum samples.
    * I considered blasting to the whole genome sequence database (wgs) but online blasts with short locus sequences were failing and downloading the database for local blast would require terrabytes of disk space (and might still fail with short sequences).
    * Build an ML tree from these loci to see whether contaminate loci are contributing phylogenetic signal or just adding noise.
  * Remaining "unknown" loci are of uncertain origin. They might be Sphagnum loci with enough error or untrimmed adapter sequence to keep them from mapping/blasting. They might be non-Sphagnum loci where the organism isn't represented in Genbank.
    * Build an ML tree from these loci to see whether these unknown loci are providing phylogenetic signal or noise.

## Results

|     | High-coverage loci (46/56 samples) | Low-coverage loci (4/56 samples) |
| --- | ------------------------------------ | ---------------------------------- |
| Total loci | 3053 | 193324 |
| Map or Blast to S. mag genome | 3016 (2968+48) | 139385 (131089+8296) |
| Blast to Genbank (contaminates) | 4 | 347 |
| "Unknown" loci | 33 | 53592 |

__Inference:__ Using high-coverage loci is good--99% of them map to the genome. This makes sense...it is unlikely that a particular contaminant would be present in most or all samples.

__Inference:__ Using low-coverage loci (like we might be tempted to do for Dstats or other methods not hampered by missing data) is risky--almost 30% of the loci are contaminant or of uncertain origin.

### What are the contaminates?

Most of the contaminates have top blast hits in organisms we expect to see growing in, on, or with Sphagnum:

| Category | Count | %   |
| -------- | ----- | --- |
| Cyanobacteria	| 153	| 44.1 |
| Bacteria	| 59	| 17.0 |
| Fungus	| 39	| 11.2 |
| Green algae	| 25	| 7.2 |
| Arthropod	| 12	| 3.5 |
| Rotifer	| 12	| 3.5 |
| Protozoan	| 11	| 3.2 |
| Nematode	| 5	| 1.4 |
| Uncultured eukaryote	| 5	| 1.4 |
| Angiosperm	| 2	| 0.6 |
| Fish	| 2	| 0.6 |
| Mollusk	| 2	| 0.6 |
| Non-green algae	| 2	| 0.6 |
| Slime molds	| 2	| 0.6 |
| Liverwort	| 1	| 0.3 |
| Highly conserved? PhiX?	| 15	| 4.3 |

### Do the contaminate or unknown loci affect the ML tree?

  * Making a tree using just mapping loci doesn't give a tree noticeably different from the tree we have from before I started trying to map and categorize loci.
  * The tree from just contaminate loci has very low bootstrap values. The only interesting thing is that the Southeastern US samples still form a clade (though with weak support). These loci are just adding noise.
  * The tree from just the unknown loci has the same major, well-supported clades as the tree from mapping loci with somewhat longer branch-lengths and a bit lower support. So at least some of the unknown loci seem be contributing Sphagnum phylogenetic signal... supporting the idea that many of these may be Sphagnum loci with errors or adapter sequence preventing them from mapping correctly.

__Inference:__ Even though there are many loci that we can't be positive represent Sphagnum DNA, those loci probably won't have a large affect on the results of downstream analyses. Removing loci that don't map to the genome is probably a good thing to do since we can, but not being able to do it for taxa without reference genomes doesn't worry me as much after seeing these results.

# 2) Digest the genome sequence in silico to generate a virtual RADseq sample and include it in our analyses

This will let us see which clade the genome sample is a part of (it is probably divinum, but which clade of divinum?)

## Process

  * Identify all the EcoRI and MseI cutsites in the nuclear, chloroplast, and mitochondrial genome assembly sequences with emboss restrict.
  * Parse the table of cutsites to find everyplace where an EcoRI site is adjacent to an MseI site and they are separated by 40-2000bases. If the EcoRI site is first, grab the genome sequence between the two sites. If the MseI site is first, grab the genome reverse-complement genome sequence between the two sites.
  * This results in sequences all starting with AATTC and ending with TTA. Our library prep process results in sequences starting with CAATTC and ending with TTAC (once barcodes and Illumina adapters are trimmed) so add a "C" to the beginning and end of each sequence to make it look like our real sequencing results.
  * Make a fastq file one of two ways (I tried both):
    1. Inclusively: Include 10 copies of each sequence (so every locus will pass ipyrad's read depth cutoff). This ensures every locus will be in the analysis.
    1. Randomly: Randomly sample with replacement from the sequences to make a fastq file with a similar number of reads to a real RADseq sample (I used 3 million). This more closely replicates what happens in a real RADseq dataset. Loci will vary in read depth and some may not be present.
  * Zip the fastq file and use it as a demultiplexed input file for ipyrad. I ran it through the first 5 steps by itself and then merged it into a my previous ipyrad assembly at step 6--where the consensus sequences from all the samples are clustered into loci.
  * Perform downstream analyses. I built ML trees in RAxML.

## Results

### Where does the genome sample fall in the tree?

The in silico digested S. magellanicum reference genome RADseq sample is placed within the "upper" divinum clade (NOT the "middle magni-sister" divinum clade or the "lower I-bet-$50-this-is-medium" divinum clade). It is sister (with bootstrap=85) to a SCH Quebec sample, and those two are sister (weakly, bootstrap=45) to a pair of New Hampshire "forest" samples.

### Does this in silico method of generating a RADseq sample really seem to approximate the actual library prep and sequencing process?

My final filtered dataset had 3959 loci present in at least 46/57 samples. The genome sample had 3893/3959 (98.3%). Since ~2% of high-coverage loci don't map to the genome, that makes sense. We are recovering the same high-coverage loci with an in silico digest as we do in the actual RADseq library prep and sequencing process.

### Something scary I observed in this exercise:

There are ~184,767 potential RADseq loci in the in silico digested S. magellanicum genome. But after clustering the reads (at 0.90 similarity), there were only ~152,261 loci (82%). This suggests as many as 20% of loci may actually be combined paralogs, not unique loci! Some are likely filtered out in later ipyrad steps... so maybe it doesn't matter:
  * In haploids, if the minor allele frequency for a SNP seems too high to be error, the base is converted to N in the consensus sequence. And if there are too many N's in a consensus it is dropped entirely.
  * In diploids, if too many samples end up being heterozygous, the locus is dropped.

Whether most of them get filtered or not, it is a reality of the de novo clustering process. I knew choosing a clustering level represented a tradeoff between not pulling alleles into a single locus vs pulling paralog loci together. I just didn't realize it was pulling THAT many paralogs together--and we are using a higher clustering level than many that just use the ipyrad default.

 Using a genome sequence rather than clustering de novo probably helps with this, by dropping reads that map at too many locations, but that process has other drawbacks.

# 3) Compare the results of using ipyrad to identify loci by denovo clustering vs aligning to the genome.

This will let also let us see how genetic distance between individual samples and the genome affect results. Do more distant S. magellanicum samples and the outgroup samples have drastically lowered numbers of loci when we find loci by aligning to the genome? Is the difference minor enough that we could try using the S. magellanicum or S. fallax genomes to identify loci in RADseq studies of other Sphagnum groups?
