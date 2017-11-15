---
title: Locating GSTA3 UTR boundaries with RNA-seq data
date: 2015-10-23T12:45:45+00:00
layout: post
categories:
  - gsta alt splicing
---
  * Using Kent Reed's 2014 RNA-seq dataset
  * I used blast to align reads from EW_Cntrl birds to the BAC sequence upstream from GSTA3 cds (BAC bp162715/162716 is the boundary between UTR/cds)
      * -outfmt 4 (shows reads aligned against the backbone of the BAC sequence)
      * -num_threads 20 (finishes in seconds on the workstation)
      * -dust "no" (we don't want to mask repetitive or low-complexity in the database because we know this region of the turkey genome has both. We are only going to be accepting full-length (101bp) matches so it will be ok)
      *  I experimented with different evalues but because I was worried about missing reads because of difference to the BAC I used the default (10). In some cases that allowed small sections of reads and poorly matched reads to align but I manually removed those.
      * When I got to suspected end-points in the alignment I cut the sequence into smaller chunks to ensure that I wasn't missing matching reads because of the blast limit on number of matches (if there are over 250 matching reads we only get the 250 best so a section of BAC with SNPs to our sequence could get no matches because some other section had many.).
  * I also included enough of the cds to ensure that the assembled reads were actually anchored to the cds.
  * I manually removed reads where the entire length of the read did not align (likely sections of replicated DNA) and reads with multiple mismatched bases (mismatched to the other reads in the alignment - mismatches to the BAC are expected since there will be SNPs between the BAC sequence and the birds used in the RNA-seq study).
  * By looking for locations where many reads stop aligning to the BAC and searching for the non-aligning sections upstream, I was able to connect 2 exons that look like the annotated UTR.
  * I also found what appear to be 2 other alternative versions of the UTR:
    * A: 159962-160030, 162679-162715
    * B: 159993-160030, 162665-162715
    * C: 162502-162715
  * I then repeated the alignment using reads from the other type-treatments. There is evidence for all 3 versions of the UTR in all 4 type-treatments, but the start-positions differ:

| Type-Treatment | Version A | Version B | Version C |
| -------------- | --------- | --------- | --------- |
| EW-Cntrl | 148 (159962) | 179 (159993) | 2688 (162502) |
| EW-AFB   | 144 (159958) | 176 (159990) | 2198 (162012) |
| N-Cntrl  | 171 (159985) | 206 (160020) | 2669 (162483) |
| N-AFB    | 170 (159984) | 207 (160021) | 2198 (162012) |

  * Numbers in parenthesis are the BAC positions. The other number is the position within the section where I ended up focusing my attention (159815-162715).
  * For A and B, the two types seem to have different start-sites.
  * For C the two treatments have different start-sites.
  * If this is real, both situations have potentially interesting implications for gene regulation. However, the differences in start-sites could be a quirk of the RNA-seq datasets and not represent actual differences in the mRNAs of the birds, so I need to find a way to verify this experimentally.
  * (Blast output files supporting this are with the 2014 RNA-seq data blast databases on the workstation.)

![ GSTA UTR5 plot ]({{ site.image_path }}wp-content/uploads/2015/10/GSTA_UTR5_plot.png )

  * To find the UTR3 boundary downstream in EW Control birds, I blasted the BAC sequence for the annotated UTR + some downstream BAC sequence against the RNA-seq reads and looked for where the reads stopped aligning. Blasted the sequence surrounding the suspected endpoint with much lower stringency (evalue=10) and cleaned the resulting alignment to pinpoint it exactly. There were no signs of introns or alternative splicing in UTR3 (none are annotated either).
  * To find the endpoint in the other type treatments, I blasted the BAC sequence for this new UTR3 region at high stringency (evalue=1e-40) which gave an alignment that was easy to clean but had gaps (usually where the sequence contains SNPs from the BAC) and then blasted the area around each gap (+/-200bp) at low stringency (evalue=10) and cleaned the alignment to determine whether the gap was a real endpoint or whether it could be filled. The furthest downstream end of each alignment was also blasted at low stringency to pinpoint the exact endpoint. I also blasted the 3' end of the cds and the upstream end of the UTR3 to make sure that they are actually attached.
  * The endpoints differ quite a bit between the type-treatments:
    * EW_Cntrl: 2032 (172744)
    * EW_AFB: 2161 (172873)
    * N_Cntrl: 613 (171325) - four different gaps keep me from being able to extend this further
    * N_AFB: 2190 (172902)
    * Are these endpoints real or just the result of sections of missing sequence?
  * In the BAC sequence there are 3 polyadenylation hexanucleotide sequences (AATAAA) in the region downstream of GSTA (looking all the way down to the start codon of GSTA1.1) and all 3 are within the region covered by the continuous UTR3 sequences I assembled
      * AATAAA sequences at bp 118 (170830), 135 (170847), and 2135 (172847)
      * Do the SNPs in the assembled UTR3 sequences affect any of these sites or add additional ones?
      * Focus in on the area surrounding the gaps in the shorter UTR3s. Am I positive there is no evidence for spicing? I blasted just the region around the first big gap in N_Cntrl (614-748) and see nothing suggesting a exon/intron boundary.
      * The depth of coverage drops a few bases after the first 2 AATAAA sequences and 2 of the datasets have their first breakpoint right after the 3rd. One ends a bit before it and the 4th has fragments up to it. If there were actually 2 lengths of UTR, with one ending after the first AATAAAs and one ending after the 3rd, the data would look like this.

![ GSTA3 UTR3 plot.png ]( {{site.image_path}}wp-content/uploads/2015/10/GSTA3_UTR3_plot.png )
