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

  * Map to the genome to identify mapping and nonmapping loci
  * Blast nonmapping loci to the genome to identify loci that probably are Sphagnum loci but failed to map for technicalities vs nonmapping/nonblasting loci
    * I considered query length when evaluating these blast results. A 50bp locus that aligns exactly will have the same e-value as a 75 bp locus with 50bp in the middle that align exactly but doesn't align at all at the ends. I required a high e-value AND an alignment length >85% of the query length.  
  * Blast nonmapping/nonblasting loci against Genbank (nt) to identify likely non-Sphagnum loci.
    * Determine what proportion of the top blast hits represent likely contaminants of Sphagnum samples.
    * I considered blasting to the whole genome sequence database (wgs) but online blasts with short locus sequences were failing and downloading the database for local blast would require terrabytes of disk space (and might still fail with short sequences).
    * Build an ML tree from these loci to see whether contaminate loci are contributing phylogenetic signal or just adding noise.
  * Remaining "unknown" loci are of uncertain origin. They might be Sphagnum loci with enough error or untrimmed adapter sequence to keep them from mapping/blasting. They might be non-Sphagnum loci where the organism isn't represented in Genbank.
    * Build an ML tree from these loci to see whether these unknown loci are providing phylogenetic signal or noise.

## Results

|     | High coverage loci (<=46/56 samples) | Low coverage loci (>=4/56 samples) |
| --- | ------------------------------------ | ---------------------------------- |
| Total loci | 3053 | 193324 |
| Map or Blast to S. mag genome | 3016 (2968+48) | 139385 (131089+8296) |
| Blast to Genbank (contaminates) | 4 | 347 |
| "Unknown" loci | 33 | 53592 |

Inference: Using high coverage loci is good--99% of them map to the genome. This makes sense...it is unlikely that a particular contaminant would be present in most or all samples.

Inference: Using low coverage loci (like we might be tempted to do for Dstats or other methods not hampered by missing data) is risky--almost 30% of the loci are contaminant or of uncertain origin.

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

Making a tree using just mapping loci doesn't give a tree noticeably different from the tree we have from before I started trying to map and categorize loci.

The tree from just contaminate loci has very low bootstrap values. The only interesting thing is that the Southeastern US samples still form a clade (though with weak support).

The tree from just the unknown loci has the same major, well-supported clades as the tree from mapping loci with somewhat longer branch-lengths and a bit lower support. So at least some of the unknown loci seem to have Sphagnum phylogenetic signal... supporting the idea that many of these may be Sphagnum loci with errors or adapter sequence preventing them from mapping correctly. 

# 2) Digest the genome sequence in silico to generate a virtual RADseq sample and include it in our analyses

This will let us see which clade the genome sample is a part of (it is probably divinum, but which clade of divinum?)

# 3) Compare the results of using ipyrad to identify loci by denovo clustering vs aligning to the genome.

This will let also let us see how genetic distance between individual samples and the genome affect results. Do more distant S. magellanicum samples and the outgroup samples have drastically lowered numbers of loci when we find loci by aligning to the genome? Is the difference minor enough that we could try using the S. magellanicum or S. fallax genomes to identify loci in RADseq studies of other Sphagnum groups?
