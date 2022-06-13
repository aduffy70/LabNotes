---
title:  RADseq adapters vs Illumina sequences
date:  2022-06-13
layout: post
categories:
  - sphagnum other
  - for others
  - ideas
---
The two Kenyon project magellanicum RADseq libraries performed poorly at sequencing. I suspect that is due to bad libraries resulting from old expired AMPure beads and T4 Ligase. But when I was inspecting the sequence data I noticed something weird about the adapter sequences at the ends of the shorter fragments that made me suspect a problem with the adapter sequences we are using.

On most reads containing adapter at the 3 prime end, there is a single bp mismatch between the read and the sequence we expect based on our MseI adapter and reverse PCR primer:

```
Expected: AGATCGGAAGAGCTCGTATGCCGTCTTCTGCTTG
Observed: AGATCGGAAGATCTCGTATGCCGTCTTCTGCTTG
Mismatch:            *
```

This mismatch is there on vast majority of reads and it has been like that for all of the magellanicum plates even though they were sequenced on different platforms:

|   bp   | Smag plate1 | Smag plate2 | Smag plate3 | Smag plate4 | Smag plate5 | Kenyon plate1 | Kenyon plate2 |
| expected G | 8117752 | 2151791 | 1485987 | 840098 | 994246 | 15835 | 54327|
| most common T | 32706526 | 56632196 | 128556472 | 106689160 | 27405217 | 2148646 | 20345064 |
|   A   | 37631 | 29724 | 26678 | 26117 | 13644 | 505 | 9054|
|   C   | 3208 | 677 | 119 | 116 | 119 |   2   |   36   |
| % expected | 19.86 | 3.66 | 1.14 | 0.78 | 3.50 | 0.73 | 0.27 |
| % most common | 80.04 | 96.29 | 98.84 | 99.19 | 96.45 | 99.25 | 99.69 |

This led me down a rabbit-hole where I discovered that our adapters are for an obsolete sequencing method and are not the correct adapters for current Illumina sequencing chemistries like the NovaSeq v1.0 we have been using or the NovaSeq v1.5 used on these Kenyon libraries.

Our sequencing has been working because even though the adapters are wrong, they DO contain the sequences needed to bind to the P5 and P7 oligos on the flowcell that prime the bridge amplification, and the sequence where the Read 1 sequencing primer binds. They do not contain the sequences needed for the Read 2 sequencing primer or for either Index sequencing primer. We only do single-read runs and don't use the index primers so it still works.

![Alignment of critical sequences to our adapters][image1]

The mismatched base we see is because there is one bp difference between our adapters and the P7 flowcell oligo (highlighted column in the alignment picture below). It gets corrected in half of the bridge amplifications so we end up with many more corrected reads (the common T) than incorrect reads (the expected G).

The mismatched base is the 2nd to the last base at the 3' end which seems like it should decrease priming efficiency. I designed new MseI adapters and a new reverse PCR primer so our future libraries can have adapters that exactly match the P7 sequence. Maybe this will result in better clusters, but it is possible it hasn't made that much difference.

The recommended phosphothiolation for the PCR primers and adapters has changed from the 2.3 version of the Parchman, Gompert, Buerkly protocol they were using to the more recent 2.6b version I based my protocol on. I don't know which version of the phosphothiolation our current reagents have, but I am ordering to match the current (2.6b) protocol phosphothiolation.

```
v2.3 MseI-F:   5’  TACAGATCGGAAGAGCTCGTATGCCGTCTTCTGCTTG 3’
v2.6b MseI-F:  5’ T*ACAGATCGGAAGAGCTCGTATGCCGTCTTCTGCTT*G 3’
New MseI-F:    5’ T*ACAGATCGGAAGATCTCGTATGCCGTCTTCTGCTT*G 3’
                                 *

v2.3 MseI-R:   5’ GCAGAAGACGGCATACGAGCTCTTCCGATCTG 3’
v2.6b MseI-R:  5’ GCAGAAGACGGCATACGAGCTCTTCCGATCTG 3’
New MseI-R:    5’ GCAGAAGACGGCATACGAGATCTTCCGATCTG 3’
                                     *

v2.3 Illpcr2:  5’ C*A*AGCAGAAGACGGCATACGAGCTCTTCCGATCTGTAAG 3’
v2.6b Illpcr2: 5’  C*AAGCAGAAGACGGCATACGAGCTCTTCCGATCTGTAA*G 3’
New Illpcr2:   5’  C*AAGCAGAAGACGGCATACGAGATCTTCCGATCTGTAA*G 3’
                                          *
```

[image1]: {{site.image_path}}Illumina_critical_sequences_aligned_to_our_adapters.png
