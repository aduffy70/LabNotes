---
title: From precursor miRNAs to mature miRNAs
date: 2015-04-08T11:09:08+00:00
layout: post
categories:
  - gsta mirna
---
  * Pulled 179 turkey precursor miRNA sequences from RNACentral and 430 from Ensembl. **609 total precursor miRNAs.**
  * Converted DNA sequences to RNA (Ensemble data was DNA) and cleaned up minor fasta formatting issues
      * dnatorna-fasta.py
      * addcaretforfasta.py
  * Compared the two sets for identical (or the shorter contained within the longer) sequences. Also reverse complemented one of the sets and compared them again to make sure I didn't get even more identical sequences (which would have suggested the Ensembl DNA sequences were the original DNA sequence, not the transcribed miRNA sequence). The two datasets appear to be from the same strand.
      * findduplicates-fasta.py
      * fastx\_reverse\_complement
  * Filtered duplicates to get unique precursor miRNAs, keeping the ones with the most informative descriptions. **478 unique precursor miRNAs.**
      * filterfasta.py
  * Used MatureBayes Online (http://mirna.imbb.forth.gr/MatureBayes.html) to find mature miRNAs in the precursur miRNAs
  * Parsed the MatureBayes output into a fasta file of the mature miRNAs with the stem (3 or 5) in the description. **956 total mature miRNAs.**
      * parsematurebayesoutput.py
  * Filtered duplicates until no more identical sequences were found, keeping the ones with most informative descriptions. **875 unique mature miRNAs.**
      * findduplicates-fasta.py
      * filterfasta.py

Next steps... identify seed sequences in the mature miRNAs and search for targets in GSTA UTRs.
