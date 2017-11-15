---
title: Blasting turkey miRNAs against 2014 RNA-seq data
date: 2015-08-31T14:04:29+00:00
layout: post
categories:
  - gsta mirna
---
  * Add the length of the miRNA to the precursor sequence descriptions. We need to know the length to determine whether a blast hit is meaningful. This will put the length in the blast output where it can be parsed. We don't need to do this with the mature RNA sequence descriptions (they are all 22bp) or the RNA-seq reads (they are all 101bp). Used addlengthtofastadescr.py
  * Use blast output format "7 std gaps". This output gives the info we need: query sequence name, subject sequence name, length and positions of alignment, # of mismatches, and # of gaps (rather than the number of gap openings). It also gives extra comment lines we don't need while parsing, but they can easily be ignored in the script and they provide human readable info explaining how this blast output was generated and what the columns mean.
  * Don't limit blast output by e-value. The e-values vary depending on the size of the blastdb. We are going to focus on the number of mismatches and gaps and the length of the alignment.
  * Don't force ungapped alignments. We'll accept an occasional gap since indel errors are possible in Illumina data.
  * Specify the number of threads (10 threads takes 24 seconds vs 150 seconds on a 12 query test file)
  * Don't filter low complexity regions. These are 22 bp sequences and we want to know if there are hits even if they are low complexity hits.

    ~~~
    blastn -db 2014_EW_Cntrl_combined -query ../../All_mature_miRNAs-renamed.fasta -out All_mature_miRNAs-renamed-blastout7.txt -task "blastn-short" -outfmt "7 std gaps" -num_threads 10 -dust "no"
    ~~~

  * Aargh! I've been doing all this with the files of ALL precursor and mature miRNAs when it should have been the unique precursors and unique mature miRNAs. I've done a lot of work to rename all the sequences in the ALL files, so rather than trying to rename the sequences in the UNIQUE files I will filter the renamed files. That way I can also keep info I lost when I did the filtering the first time (rather than keeping just one name for each sequence, keep all the names so I can trace back if needed later).
    * I went back even further. I originally filtered precursor miRNAs for exact duplicates but also for nested subset duplicates. Since I don't know how "subset" sequences effects the mature miRNAs predicted by MatureBayes, I may be throwing away mature miRNAs by not using all of the full length and subset predicted precursors. So I went back and filtered only exact duplicate precursors and ran the larger set of precursors through MatureBayes. It gave me 940 unique mature miRNAs instead of the 875 I had before so it DOES make a difference. I am preceeding with the 940 unique miRNAs.
  * It looks like there are probably NOT large numbers of mature miRNA reads in the RNA-seq data:
    * If a blast hit is actually a mature miRNA read (the 101bp would be the read, the illumina adapter and garbage) then I would expect the position of the blast hit within the illumina reads to be at the first 22bp (+/-) of the 101bp.
    * If a blast hit is actually a precursor miRNA read or random hit in some other RNA then the position of the blast hit could be anywhere along the length of the 101bp.
    * So:
      * if there are no (or relatively few) mature miRNAs in the RNA-seq dataset, the distribution of blast hit starting points (the lesser of subject start and subject end, to account for reversed hits in paired illumina sequences) should be flat.
      * If there are large numbers of mature miRNAs then the first few bases should be overrepresented in the distribution of blast hit starting points.
    * To check this:
      * Import the exact match and single base mismatch blast hits from blasting the Unique mature miRNA sequences against the 2014\_EW\_Cntrl_Combined blast database
      * Extract the lesser of Subject Start and Subject end
      * Plot the number of blast hits starting at each bp along the 101bp reads

        ~~~
        df <- read.csv("Blast_hits_for_R.txt", sep="\t")
        start <- pmin(df$sstart, df$send)
        h <- hist(start, breaks=seq(0,101,by=1))
        ~~~

      * The resulting plot does NOT show overrepresentation in the first few bp, so there are probably NOT large numbers of mature miRNAs in the RNA-seq data.

        ![ Histogram Of Start Positions ]( {{site.image_path}}wp-content/uploads/2015/08/HistogramOfStartPositions.png )
