---
title:  Illumina fastq sequencing codes
date:  2025-09-17
layout: post
categories:
  - sphagnum strictum-compactum
  - sphagnum imbricatum
  - sphagnum genus-wide
  - sphagnum magellanicum
  - sphagnum subsecunda biogeography
  - sphagnum other
  - for others
---
I am trying to document (in the master RADseq sample table) which RADseq samples came from which sequencing method/platform. I can link many plates to DUGsim documents that show the method and then use the platform codes in the fastq files for those runs to determine the platform used for the rest of the plates.

| Code in the fastq | Method | Example plates |
| ----------------- | ------ | -------------- |
| \@HWI-ST1293 | HiSeq 2500 | McVay & FB/SRL |
| \@A00257 | NovaSeq 6000 | Kenyon 1 & 2 |
| \@NB501800 | NextSeq 500 | mag 1 & 2 |
| \@A00201R | NovaSeq 6000 | mag 3 & 4 |
| \@LH00373 | NovaSeq X Plus | clon 3 & 4 |

I don't have plate info for Marta Nieto-Lugilde's runs (which samples came from which of her plates), but all of the samples of hers that I have used in my projects (50+ samples) are NovaSeq 6000 so I am assuming all of her plates are that. If that is incorrect, she can update the master table for her samples.

Sample totals:

| Method | Samples | Plates |
| ------ | ------- | ------ |
| HiSeq 2500 | 245 | FB/SRL, McVay, rec1 |
| NextSeq 500 | 555 | rec2, rec3, rec4, mag1, mag2, Karn1, Karn2 |
| NovaSeq 6000 | 2492 | mag3, mag4, mag5, Kenyon1, Kenyon2, symp1, symp2, symp3, symp4, Upp1, Upp2, Upp3, Upp4, Upp5, Upp6, Karn3, Karn4, Juan, Marta1-8? |
| NovaSeq X Plus | 739 | Upp7, Upp8, clon1, clon2, clon3, clon4, imbr1, imbr2, imbr3, imbr4 |

I personally ran 30 libraries in my time here at the Shaw Lab!

