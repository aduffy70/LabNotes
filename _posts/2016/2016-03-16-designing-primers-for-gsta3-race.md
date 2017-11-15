---
title: Designing primers for GSTA3 RACE
date: 2016-03-16T11:21:28+00:00
layout: post
categories:
  - gsta alt splicing
---
# UTR5:

  * I designed primers to amplify just version C, versions B+C, and versions A+B+C
      * The existing RACE primers from Kim 2010 should already amplify A+B+C but one closer to the ends may give better results and allow better resolution of bands with similar lengths.
      * I can't amplify B alone, B and C differ in length by over 200bp so I should be able to distinguish them.
      * Based on RNAseq data, C is the least common, and since it is also longest I am more likely to find it by amplifying it separate from the other two.
  * Primer recommendations from the SMART-RACE protocol:
      * 23-28nt (Kim2010 primers are 26-31)
      * 50-70% GC (Kim2010 are 41.9-53.8)
      * Tm>65 (Kim2010 are 64.6-68.8)
      * The Kim2010 primers also have some possible dimer and hairpin issues according to Primer3, but they work, so if my new primers are at least as good I should be ok.
  * For A+B+C I designed one primer in the 5' end of the cds.
  * The B+C primer had the fewest options - the 3' end needs to anchor in the 14 bases that are not in A. The primers available in that area were not great so I ordered 4.
  * For C I ordered 2 primers, one poor primer that overlaps with the A & B exon 2 sequence so I can capture as much of C as possible and one farther upstream where I could get a better primer.

# UTR3:

  * I designed primers to amplify the short (A) and long (B) versions together and to amplify just the B version.
      * It isn't clear where the A version actually ends so:
          * I designed one B version primer ~50bp downstream of the first 2 polyadentylation signals (AATAAA at bp 118 and 135). This is just beyond where the read depth drops drastically.
          * I designed one B version primer ~500bp further downstream which puts it beyond the end of the shortest UTR3 (N_Ctrl).
      * For A+B I designed one primer in the 3' end of the cds.

# Ordered from IDT 2016-03-16:

~~~
>G3-U5abc-R
GACTCCATTCGCCCTCTTCCATTGAT
>G3-U5bc-1R
CCCCGTGCCTTGAAAAATATTAAGCTGA
>G3-U5bc-2R
CCCCGTGCCTTGAAAAATATTAAGCTGAAA
>G3-U5bc-3R
CCGTGCCTTGAAAAATATTAAGCTGAAAACAAAG
>G3-U5bc-4R
CGTGCCTTGAAAAATATTAAGCTGAAAACAAAGATC
>G3-U5c-1R
AGCTGAAAACAAAGATCTCATAAAGCA
>G3-U5c-2R
TCTCACTACATCTGCTGCAAGTGTACA
>G3-U3ab-F
CCCAAGAAAACCCCCACCAGATGAAA
>G3-U3b-1F
TTAGGTGTCTAACGCTTTGCAGCACA
>G3-U3b-2F
CATGGTCTCCCAGGCAGCAGAATATG
~~~

Primer3 scores for the primers I considered are in GSTA\_RACE-Mar\_2016/Primer3\_evaluation\_of\_RACE\_primers.txt

# Estimated band lengths using these primers:


| Name | Amplified length | Est. length A | Est. length B | Est. length C |
| ---- | ---------------- | ----------- | ----------- | ----------- |
| G3-U5abc-R | 53 + UTR5 + UPM | EW_Cntrl 211<br /> EW_AFB 215<br /> N_Cntrl 188<br /> N_AFB 189 | EW_Cntrl 194<br /> EW_AFB 197<br /> N_Cntrl 167<br /> N_AFB 166 | EW_Cntrl 319<br /> EW_AFB 809<br /> N_Cntrl 338<br /> N_AFB 809 |
| G3-U5bc-1R | -12 + UTR5 + UPM | | EW_Cntrl 129<br /> EW_AFB 132<br /> N_Cntrl 102<br /> N_AFB 101 | EW_Cntrl 254<br /> EW_AFB 744<br /> N_Cntrl 273<br /> N_AFB 744 |
| G3-U5bc-2R | -12 + UTR5 + UPM | | EW_Cntrl 129<br /> EW_AFB 132<br /> N_Cntrl 102<br /> N_AFB 101 | EW_Cntrl 254<br /> EW_AFB 744<br /> N_Cntrl 273<br /> N_AFB 744 |
| G3-U5bc-3R | -14 + UTR5 + UPM | | EW_Cntrl 127<br /> EW_AFB 130<br /> N_Cntrl 100<br /> N_AFB 99 | EW_Cntrl 252<br /> EW_AFB 742<br /> N_Cntrl 271<br /> N_AFB 742 |
| G3-U5bc-4R | -15 + UTR5 + UPM | | EW_Cntrl 126<br /> EW_AFB 129<br /> N_Cntrl 99<br /> N_AFB 98 | EW_Cntrl 251<br /> EW_AFB 741<br /> N_Cntrl 270<br /> N_AFB 741 |
| G3-U5c-1R | -34 + UTR5 + UPM | | | EW_Cntrl 232<br /> EW_AFB 722<br /> N_Cntrl 251<br /> N_AFB 722 |
| G3-U5c-2R | -108 + UTR5 + UPM | | | EW_Cntrl 158<br /> EW_AFB 648<br /> N_Cntrl 177<br /> N_AFB 648 |

UPM = 52bp (45bp for the primer, plus the SMART II A Oligo that it binds to extends 7 bases downstream before the start of the mRNA - so all my estimates before 2016-04-20 were 52bp shorter than they should have been. Explains why all my PCR products seemed a bit long.)

| Name | Length of amplified sequence | Est. length A | Est. length B |
| ---- | ---------------------------- | ------------- | ------------- |
| G3-U3ab-F | 68 + UTR3 + UPM | 280 | 2280 |
| G3-U3b-1F | -182 + UTR3 + UPM | | 2030 |
| G3-U3b-2F | -722 + UTR3 + UPM | | 1490 |

UPM = 77bp (45bp for the primer plus the 3' RACE CDS Primer A that it binds to extends 32 bases downstream before the 3' end of the mRNA (the base where the poly-A tail begins) - so all my estimates were 77 shorter than they should have been)
