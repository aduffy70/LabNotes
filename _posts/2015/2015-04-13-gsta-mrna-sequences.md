---
title: GSTA mRNA sequences
date: 2015-04-13T15:07:08+00:00
layout: post
categories:
  - gsta alt splicing
  - gsta mirna
---
  * cDNA sequences of mRNAs in Genbank from Kim et al. 2010:
      * GQ228399 - GSTA1.1  5'UTR:1-53, cds:54-716, 3'UTR:717-743
      * GQ228400 - GSTA1.2  5'UTR:1:58, cds:59-724, No 3'UTR sequence
      * GQ228401 - GSTA1.3  cds:1-666, no UTR sequences
      * GQ228402 - GSTA2     5'UTR:1-79, cds: 80-748, 3'UTR:749-840
      * GQ228403 - GSTA3     5'UTR:1-71, cds:72-743, 3'UTR:744-851
      * GQ228403 - GSTA4     5'UTR:1-85, cds:86-775, 3'UTR:776-845
  * Their goal was to amplify the cds so even for the ones with UTR sequence, it is probably NOT the entire UTR. Blasted these 6 sequences against the Turkey transcriptome to see if I can identify transcripts with the rest of the UTR.
      * GSTA1.1, GSTA1.2, GSTA1.3 & GSTA3 cdnas don't have any full length hits. Hits with any length have large numbers of mismatches.
      * GSTA2 cdna doesn't have any full length hits. Locus_2189 may represent the 3' half plus the 3'UTR.
      * GSTA4 cdna falls entirely within Locus\_5\_Transcript\_8204/14044\_Confidence\_0.001\_Length_1694 with 4 mismatched bases
  * Tried blasting Locus_5 against the BAC sequence. It wasn't helpful. I expected that the 5' end of the locus should fall somewhere upstream of GSTA4 and the 3' end should fall downstream, showing me the approximate ends of the UTRs. The 3' end does fall downstream, but the 5' end (bp 1-255) are an exact match within one of the introns. Those loci are the product of an illumina assembly so I don't trust them as much as the BAC. I will just have to use an arbitrary length of upstream and downstream sequence from the BAC as the UTRs.
  * Searched for indicators of the 5' and 3' UTR in the BAC sequence:
      * Kozak consensus sequence wasn't helpful since it is right at the start codon, which I can already identify.
      * UUUUUUAU sequence should be in the 3'UTR within 100bp of the AAUAAA to trigger poly-A tail formation. The UUUUUUAU sequence is NOT found inbetween each of the genes and the AAUAAA is found multiple times between each of the genes. In every case there are a couple fairly close it (within a few hundred bp). If there are more, they are thousands of bp away. The RACE method they used to generate these sequences would not have worked if the 3'UTRs were thousands of bp long, and UTR's in humans are not usually that long, so the ones closer in are likely near the end of the 3'UTR.
  * Despite everything else wrong with the assembly, the annotations of GSTAs in Turkey_5 actually seem to add some useful info.
      * GSTA1.1 - 5'UTR is annotated with an intron that makes sense based on the Kim2010 cdna sequence. 3'UTR extends down to include the AAAUAA. It looks like a long run of T's just downstream of where the Kim2010 3'UTR ends could have caused sequencing to hang (or could have been confused for the polyA tail in RACE?). Other that the first 4 bases (which make no sense based on the BAC either) the Kim2010 cdna nests exactly within the Turkey_5 annotation.
      * GSTA1.2 - Not annotated in Turkey_5.
      * GSTA1.3 - 5'UTR has the same pattern as in GSTA1.1 and GSTA3: a short section immediately upstream of the cds, an intron, and another section way upstream. These same sections are found in the BAC as well. 3'UTR extends down to include the AAAUAA. There are no UTRs in the Kim2010 sequence, but the cds nests within the Turkey_5 annotation with a few SNPs.
      * GSTA2 - Turkey_5 doesn't help with the 3'UTR - the 3' end of the gene is missing from the assembly.
      * GSTA4 - Turkey_5 doesn't help with 5'UTR - it only annotates the ~20 3' bases from the UTR in the Kim2010 sequence. Blasting the whole Kim2010 5'UTR against the BAC locates it farther upstream, with the same pattern as GSTA1.1. 3'UTR extends down to include the AAAUAA.
      * GSTA3 - Turkey_5 doesn't help with 3' UTR. The 3' end of the gene is cut off.
  * Used the info from Turkey_5 to make new estimated mRNAs:
      * GSTA4
          * cds from Kim2010 cdna
          * 3'UTR from BAC sequence corresponding to Turkey_5 annotation (T5 & BAC sequence match 100%, Kim2010 nests 100%).
              * BAC 151105 - 151723
          * 5'UTR from BAC sequence corresponding to Kim2010 5'UTR and continuing upstream as far are there are transcripts with exact matches in TurkeyLiverTranscriptome.
              * BAC 144560-144691 and 145202-145221
          * Final estimate: 1461bp (cds 153-842)
      * GSTA3
          * cds from Kim2010 cdna
          * 3'UTR from BAC sequence corresponding to Kim2010 3'UTR and continuing downstream as far as transcripts exactly match in TurkeyLiverTranscriptome.
              * BAC 170713-170882
          * 5'UTR from BAC sequence corresponding to Kim2010 5'UTR and continuing upstream as far as transcripts exactly match in TurkeyLiverTranscriptome.
              * BAC 159987-160030 and 162679-162715
          * Final estimate:  923bp (cds 82-753)
      * GSTA1.1
          * cds from Kim2010 cdna
          * 5'UTR & 3'UTR are both confusing with transcripts containing repeats that align multiple times to the BAC. THere is no one transcript for either end that clearly aligns correctly to the cds and to the UTR from the Kim2010 cdna, so I will just pick a likely looking endpoint where many transcripts seem to start/end. **I have little confidence in this predicted mRNA.**
              * 3' - BAC 181786-182006
              * 5'- BAC 175507-175749 and 176742-176769
          * Final estimate: 1155bp (cds 272-934)
      * GSTA1.3
          * cds from Kim2010 cdna
          * 5'UTR from BAC sequence matching TurkeyLiverTranscript Locus\_5\_Transcript_8228. This one seems to match closely to the BAC and gives a 2-exon UTR of similar length to GSTA3 & 4. Kim2010 has no 5'UTR for GSTA1.3. I have less confidence in this than GSTA3 & 4 but more than GSTA1.1.
              * 182394-182495 and 183887-183912
          * 3'UTR from BAC sequence matching several TurkeyLiverTranscripts that all end at the same place and include the AAAUAA motif.
              * 188876-189078
          * Final estimate: 997bp (cds 129-794)
      * GSTA1.2
          * cds from Kim2010 cdna
          * 5'UTR from BAC sequence corresponding to Kim2010 5'UTR and continuing upstream as far as transcripts exactly match in TurkeyLiverTranscriptome.
              * 193546-193636 and 195221-195249
          * 3'UTR from BAC sequence matching several TurkeyLiverTranscripts that all end at the same place and include the AAAUAA motif. (Kim2010 has no 3'UTR sequence)
              * 200622-200823
          * Final estimate: 988bp (cds 121-786)
      * GSTA2
          * cds from Kim2010 cdna
          * 5'UTR from BAC sequence corresponding to Kim2010 5'UTR and continuing upstream to where several transcripts start TurkeyLiverTranscriptome. There is a lot of repeat structure in this area and no transcripts seem to correspond exactly to the Kim2010 cdna.
              * 202227-202395 and 205694-205714
          * 3'UTR from BAC sequence matching several TurkeyLiverTranscripts that all end at the same place and include the AAAUAA motif. They don't end here but the mRNA sequence that extends further has no hits in this region of the BAC. This 3'UTR is longer than the others but still has AAAUAA within a few bases of the end. There is an earlier AAAUAA but I didn't see transcripts supporting an endpoint there.
              * 211365-211825
          * Final estimate: 132 bp (cds 191-859)
