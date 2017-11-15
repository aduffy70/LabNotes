---
title: miRNA process summary
date: 2015-08-27T12:43:56+00:00
layout: post
categories:
  - gsta mirna
---
Summary of the process used to identify potential turkey GSTA-related miRNAs (files are in GSTA\_miRNA-Jan\_2015/Rerun_2015-08-31/):

  1. Compile a list of all known or predicted precursor miRNAs sequences for turkey (**609 total precursor miRNAs**) from RNACentral (179 sequences) and Ensemble (430 sequences).
      1. Output:
          1. Ensemble-430\_Meleagris\_gallopavo_miRNA-CLEAN.fa
          2. rnacentral-179\_turkey\_miRNAsCLEAN.fasta
  2. Convert DNA sequences to RNA (Ensembl data was DNA), and rename sequences for consistency and ease of downstream handling (include length in name and make them "blast-output-proof").
      1. Scripts:
          1. dnatorna-fasta.py
          2. renameprecursormirnas.py
      2. Output:
          1. All_precursors.fasta
  3. Filter for identical precursor miRNA sequences.
      1. Don't filter for sequences that are subsets of another sequence - they may have different predicted mature miRNAs.
      2. Keep the names of identical sequences so we can trace back later.
      3. Reverse-complement the Ensembl sequences and try to filter them again. If this results in many more miRNAs being filtered it would suggest that the Ensembl data was the DNA sequence associated with the RNA, not the actual RNA sequence. That was not the case, so both RNACentral data and Ensemble data seem to be RNA sequence.
      4. Scripts:
          1. findduplicateskeepnames.py
      5. Ouput:
          1. Unique_precursors.fasta (**590 unique precursor miRNAs**)
  4. Use MatureBayes Online [ http://mirna.imbb.forth.gr/MatureBayes.html ]( http://mirna.imbb.forth.gr/MatureBayes.html ) to predict mature miRNAs in the unique precursor miRNAs:
      1. Output:
          1. MatureBayesOutput-Unique_precursors.txt
  5. Parse the MatureBayes output into a fasta file of the mature miRNAs with the gene id and stem (3 or 5) in the description
      1. Scripts:
          1. parsematurebayesoutput.py
      2. Output:
          1. All_matures.fasta (1180 total mature miRNAs)
  6. Filter for identical mature miRNA sequences
      1. All miRNAs are 22bp so subsets aren't an issue... just filter identical sequences.
      2. Keep the names of identical sequences so we can trace back later.
      3. Scripts:
          1. findduplicateskeepnames.py
      4. Output:
          1. Unique_matures.fasta (**950 unique mature miRNAs**)
  7. Rename the unique mature miRNAs. The current name includes the name of all the non-unique miRNAs with the same sequence, so in some cases it will be too long to be displayed in blast tabular output. Give each a unique miRNA# with the original name after a ":" so the blast output will be consistent and we can still trace back to all the precursor miRNAs which might have produced a mature miRNA with this sequence.
      1. Scripts:
          1. renamematuremirnas.py
      2. Output:
          1. Unique_matures-renamed.fasta
  8. Move Unique\_matures-renamed.fasta & Unique\_precursors.fasta to the workstation to use as blast queries.
  9. Determine which mature and precursor miRNA sequences are present in Wild and Domestic turkeys (using Reed's 2014 RNA-seq data)
      1. For the 4 wild and 4 domesticated samples, combine the reads from the 4 samples and filter for duplicates to get lists of unique reads
          1. Scripts:
              1. cat \| fastx_collapser
          2. Output:
              1. 2014\_N\_Cntrl\_combined-no\_dups.fasta
              2. 2014\_EW\_Cntrl\_combined-no\_dups.fasta
              3. 2014\_EW\_AFB\_combined-no\_dups.fasta
              4. 2014\_N\_AFB\_combined-no\_dups.fasta
      2. For each type, generate a blast database from the unique reads.
          1. Scripts:
              1. makeblastdb (from blast v2.2.23 - later versions have a bug, that prevents large dbs from building)
          2. Output:
              1. 2014\_EW\_cntrl_combined.* blastdb files
              2. 2014\_N\_cntrl_combined.* blastdb files
              3. 2014\_EW\_AFB_combined.* blastdb files
              4. 2014\_N-AFB\_combined.* blastdb files
      3. Blast the mature and precursor miRNA sequences against the databases to determine which miRNAs are expressed in each type and how many reads are represented by the valid hits for each miRNA
          1. Rules for accepting a blast hit:
              1. mature miRNA: blast hit with <2 mismatches or gaps in the full length of the mature miRNA sequence, found at the start of a read. Or, if elsewhere in the read, the corresponding precursor miRNA has an acceptable hit in the same read
                  1. I expected there to be some blast hits throughout the length of the reads due to random false-hits and hits in precursor miRNA reads (e-values are too high for comfort - 9e-04 for an exact match and 0.21 with a single mismatch), but there should be an overabundance of hits in the first 22bp of reads if there are mature miRNA reads in the RNAseq data. There is not, so I can't differentiate between hits in the first 22bp that are real and those that are false-hits and it seems likely that most of them are false-hits, so I am not using mature miRNA blast hits. If there are mature miRNA reads in the data, they are not common.
              2. precursor miRNA:  a hit at least 30bp long with length limited by the ends of the query or subject (+/-2 bp) and with <3% mismatches.
                  1. This means the worst e-value I accepted was ~1e-07 and most were much lower.
          2. Scripts:
              1. blastn -db 2014\_XX\_Xxxx\_combined -query ../../Unique\_matures-renamed.fasta -out Unique\_matures-renamed\_blastout7.txt -task "blastn-short" -outfmt "7 std gaps" -num_threads 10 -dust "no"
              2. blastn -db 2014\_XX\_Xxxx\_combined -query ../../Unique\_precursors.fasta -out Unique\_precursors\_blastout7.txt -task "blastn-short" -outfmt "7 std gaps" -num_threads 10 -dust "no"
              3. filtermaturemirnablastresults.py
              4. filterprecursormirnablastresults.py
          3. Output:
              1. 2014\_EW\_Cntrl\_Blastdb/Unique\_precursors\_filtered\_blastout7.txt
              2. 2014\_N\_AFB\_Blastdb/Unique\_precursors\_filtered\_blastout7.txt
              3. 2014\_EW\_Cntrl\_Blastdb/Unique\_precursors\_filtered\_blastout7.txt
              4. 2014\_N\_AFB\_Blastdb/Unique\_precursors\_filtered\_blastout7.txt
      4. Build an expression table showing how many reads were present for each miRNA in each treatment/type:
          1. Scripts:
              1. buildpresenceabsencetable.py
          2. Output:
              1. presence_absence-precursors.txt
      5. Open expression table in Excel and manually filter hits with <5 reads in at least 1 type/treatment (anything with less than that means it was either expressed at VERY low levels in all types/treatments or it is likely random false-hits. But if we have at least 5 reads for a miRNA in at least one of the type/treatments it is worth considering.
          1. Scripts: None
          2. Output:
              1.  RNAseq\_Expression\_Patterns/Precursor\_miRNA\_presence\_absence\_table-f5.csv
      6. Generate heatmaps in R to analyze the expression patterns and identify a subset of miRNAs likely involved in AFB response and interacting with GSTAs
          1. 21 precursor miRNAs have fewer reads in Wild AFB-treated than Wild Control (suggesting they might be involved in GSTA regulation, since less miRNA should lead to more GSTA expression). 15 have over 2 reads and 5% difference. These 15 precursor miRNAs correspond to 24 unique mature miRNAs
              1. ENSMGAG00000000597-87
              2. ENSMGAG00000000085-76
              3. URS0000632C01-74
              4. ENSMGAG00000000365-85
              5. URS0000667D64-91
              6. ENSMGAG00000000072-104
              7. URS000068824F-115
              8. URS0000646248-74
              9. ENSMGAG00000000245-120
             10. ENSMGAG00000000600-77
             11. ENSMGAG00000017395-84
             12. ENSMGAG00000016358-77
             13. ENSMGAG00000000337-91
             14. ENSMGAG00000017293-85
             15. ENSMGAG00000000426-56
          2. Scripts:
              1. Analyze\_presence\_absence_table.R
              2. findduplicateskeepnames.py
          3. Output:
              1. WA\_WC\_downregulated_matures.fasta
              2. WA\_WC\_downregulated_matures-nodups.fasta
          4. 4 of those 15 "down-regulated" miRNAs are NOT down-regulated in Domestic birds (they have either more or the same reads in Domestic AFB-treated vs Domestic Control) making them particularly interesting, since it could explain the lowered GSTA expression in AFB-treated Domestic birds. These 4 precursor miRNAs correspond to 8 unique mature miRNAs
              1. ENSMGAG00000000085
              2. URS0000667D64 (Meleagris gallopavo mir-7 microRNA)
              3. ENSMGAG00000017395
              4. ENSMGAG00000000337
          5. Scripts:
              1. none (manually filtered)
          6. Output:
              1. WA\_WC\_downregulated\_matures\_interesting4-nodups.fasta
      7. For the 15 interesting precursor miRNAs, which have predicted interactions at mRNA sites with known SNPs between Wild and Domestic birds?
          1. Using my StarMir output that predicted miRNA interactions for all 950 predicted mature miRNAs with my predicted mRNA sequences for GSTA3 and GSTA4, and Kent Reed's list of SNP sites (converted from the BAC positions to my miRNA positions), filter for just interactions of the 15 interesting precursors that include a SNP site and have a StarMir predicted probablility of >0.7.
              1. ENSMGAG00000000597_Stem5
              2. ENSMGAG00000000072_Stem5
              3. ENSMGAG00000017395_Stem3
              4. ENSMGAG00000000085_Stem3
              5. ENSMGAG00000016358_Stem5
              6. URS0000632C01_Stem5 (Meleagris gallopavo mir-122 microRNA)
              7. ENSMGAG00000000426_Stem3
          2. Two of these 7 are also on the list above, so we now have a total of 13 interesting mature miRNAs.
          3. Scripts:
              1. filterforinterestingsitesincludingSNPS.py
          4. Output:
              1. GSTA3\_miRNAs\_at\_snps\_0.7.txt
              2. GSTA4\_miRNAs\_at\_snps\_0.7.txt
               
