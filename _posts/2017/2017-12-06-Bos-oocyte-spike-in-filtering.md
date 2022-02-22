---
title:  Bos oocyte spike-in filtering
date:  2017-12-06
layout: post
categories:
  - for others
---
Jocelyn Cuthbert has _Bos_ oocyte miRNA-seq data with spike-in sequences that she needs to filter out.

* 21734012 unique reads (collapsed duplicates with counts) in allsamples2.fa
  * name starts with 3 digit sample id integer
  * name ends with count of that sequence in the sample x###
* 52 spike-in sequences in Spike_in_sequences.fa

I wrote a script to process the data:
  * For each read, I compared it to each spike-in sequence. I considered them a match if the shorter of the two was contained within the longer (i.e., length differences are ok, but nucleotide mismatches are not)
  * Reads with no match are written to a fasta file of non-spike-in reads.
  * Reads with matches are printed to a table showing the sequences of the read and its matching spike-in. Useful for troubleshooting but otherwise not needed?
  * Read counts (the count of collapsed duplicates, not unique reads) for each spike-in in each sample were calculated and printed to a table.

After running the script:
  * 4351 unique reads (collapsed duplicates) match a spike-in sequence
  * 21729661 unique reads (collapsed duplicates) do not match a spike-in sequence

The raw input files, script, and output files are in a shared folder on Box.
