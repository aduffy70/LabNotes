---
title: Trying to verify Crepidomanes GBS samples to species
date: 2015-06-30T08:21:52+00:00
layout: post
categories:
  - t. intricatum gbs
---
My GBS dataset contains fragments of rbcL and trnS-rps4. If I can pull out these sequences from all samples containing them, I can can compare those sequences to see if the species assignments I've used are correct and also to see if there is more than one chloroplast haplotype in my _Crepidomanes intricatum_ samples.

Possible caveats:

  * Some samples might not have these fragments - especially the ones with fewer reads
  * I don't think there is a _Trichomanes boschianum_ or _Didymoglossum petersii_ rbcL or trnS-rps4 sequence in genbank so it isn't clear what sequences from these species will blast against most closely. I may need to try other species than C. intricatum as the query sequence to pull them out.

Process:

  * For each sample, make a blast database of the reads (converted to fasta and with duplicates removed).
  * Blast Crepidomanes intricatum trnS-rps4 and rbcL sequence against each database and extract matching reads. Do this for enough samples (all the non-Crepidomanes and ~15 of the Crepidomanes) to get a list of which sections of the genes are represented. Then extract just those sections and use them as the BLAST queries so that many matches to one section don't prevent another section from showing up in the output.
  * Manually review the output and build a table showing which fragments (and which version of the fragment) is present in each sample.
  * Find patterns that can be used to identify species. Use the T. boschianum and D. petersii sporophyte samples as KNOWN representatives of those species, since the gametophyte samples may be misidentified.

Code:

<pre>fastq_to_fasta -n -i ../S20-tboschianum.fastq | fastx_collapser -o S20-tboschianum-nodups.fasta
makeblastdb -in S20-tboschianum-nodups.fasta -out S20-tboschianum-nodups -dbtype nucl -hash_index
blastn -num_alignments 10 -max_target_seqs 10 -query ShortQuerySequences.fasta -db S20-tboschianum-nodups -out blastout/S20-tboschianum-blastout.txt
</pre>

Results:

  * T. boschianum samples can be identified by a shortened (60bp instead of 85+) fragment at trnS-rps4 bp264-350, and a 67bp fragment with several specific mismatches at rbcL bp616-720r.
  * D. petersii samples can be identified by a shortened (52bp instead of 85+) fragment at rbcL bp350-436.
  * Based on this:
      * Sample - Old - New
      * S01   C   C
      * S02   C   B *
      * S03   C   C
      * S04   C   C
      * S05   C   C
      * S06   C   C
      * S07   C   B
      * S08   C   C
      * S09   C   C
      * S10   C   C
      * S11   C   B *
      * S12   C   C
      * S13   C   B
      * S14   C   C
      * S15   C   C
      * S16   C   C
      * S17   C   C
      * S18   C   B *
      * S19   C   B *
      * S20   B   C
      * S21   C   P
      * S22   C   B *
      * S23   B   ? Not enough info
      * S24   C   B
      * S25   C   B *
      * S26   C   ? Not enough info (Don noted this collection might be different - found on calcareous substrate)
      * S27   C   B *
      * S28   C   C
      * S29   B   B Sporophyte
      * S30   B   B Sporophyte
      * S31   B   ? Not enough info
      * S32   C   B *
      * S33   C   C
      * S34   P   P
      * S35   C   C
      * S36   C   C
      * S37   C   C
      * S38   C   C
      * S39   C   C
      * S40   C   C
      * S41   C   C
      * S42   C   C
      * S43   C   C
      * S44   C   C
      * S45   C   ? Pet or Crep - not enough info to tell them apart
      * S46   C   C
      * S47   C   C
      * S48   C   C
      * S49   C   C
      * S50   P   P
      * S51   B   ? Not enough info
      * S52   B   ? Bosch or Pet - not enough has characteristics of both?
      * S53   P   P Sporophyte
      * S54   B   B Sporophyte
      * Samples marked with * were among the outliers of read count vs. locus count in my initial population analysis (they had fewer loci than expected based on the number of reads), which would be expected if they were a different species. S12, 17, 37, & 39 are also outliers but appear to be assigned to the correct species.
  * Based on this, I am going to Sanger sequence trnS-rps4 for:
      * all samples that seem to be misassigned or that can't be determined,
      * the 4 sporophyte samples (to get a known trnS-rps4 sequence for T. boschianum and D. petersii)
      * the 4 "outliers" that seem to be assigned correctly, just to be sure.
      * 2, 7, 11, 12, 13, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 29, 30, 31, 32, 37, 39, 45, 51, 52, 53, 54  (27 samples)
