---
title: Next steps on Crepidomanes GBS analysis
date: 2015-01-14T13:51:27+00:00
layout: post
categories:
  - t. intricatum gbs

---
  * Next steps on Crepidomanes GBS analysis
    * Got final barcode counts and updated my Quality Summary plots in dropbox- after cleaning trimming:
      * my worst barcode has 127K reads
      * my best has 11.5M
      * 12 barcodes have less than 1M reads
      * total reads=237,905,435
      * total bases=18,127,303,327
      * average of 76bases/read
    * ran fastqc on final(?) dataset
      * Average per base quality is flat at >35 along the entire read lengths.
      * Per sequence quality no longer has the minor peak at 2-27
      * Interestingly, the first 2 bases still have a strong bias for A and against G, but base content is fairly flat otherwise and approximately what it was in the raw data.
      * Sequence length distribution now peaks sharply at 85-86 with a low, flat tail down to 30 (I set the quality trimmer to discard sequences less than 30bp).
      * After cleaning I have many more sequences with 10+ copies
      * I have several overrepresented sequences, but fastqc didn't find similarity to common Illumina contaminants (PhiX, adapters, etc). I blasted the top 5 and then a few more at random. Most of them had short, high e-value (0.5 or more) matches to a random variety of genomic sequences and BACs. The few that DID have long, low e-value matches were all fern chloroplast hits. One hit the rpoB area of Crepidomanes radicans, and another hit Ebihara's rps4-trnS sequences for Trichomanes intricatum and Crepidomanes schmidtianum. That is what I hoped to see!
    * Converted to fasta file for uclust
      ~~~
      fastq_to_fasta -n -v -i fastq_quality_trimmerOUT.fastq -o fastq_to_fastaOUT.fasta
      ~~~

    * figure out how to cluster (uclust or ?????)
    * After doing the clustering analysis, Paul Wolf recommended:

    > I was thinking that as a first sweep to purposely use LESS variable data, but in such a way as capture low variable loci where individuals (of C. appalachianum) have only one of the possible alleles. I am trying to find a way to minimize the chances of someone saying that the more variable loci result from duplications WITHIN genomes (or via polyploidy or hybridization).  Maybe your locus filtering will be taking care if this. But I see some advantages to start with a very conservative approach.

  * Picked up bound dissertation from library and gave one to Kami McNeil in Biology Dept. Library kept one copy and the other copy is mine.
