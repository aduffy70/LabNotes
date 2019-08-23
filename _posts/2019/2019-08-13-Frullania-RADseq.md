---
title:  Frullania RADseq
date:  2019-08-13
layout: post
categories:
---
Two files of Frullania data from Blanka Aguero. There seems to be a problem with the barcodes (many reads without an exact barcode match) and she wants to know if these data can be salvaged.

The 2 files are just the results of a single Illumina run that has been split in half for easier transfer. Only one barcode file is needed. I am combining them into a single fastq.gz file before processing in ipyrad.
  * L001 = 137362236 reads
  * L002 = 139411418 reads
  * Combined = 276773654 reads

# Problems

According to FastQC, the raw data have fairly low quality overall, and particularly low quality at a few bases right where the barcode and cutsite are expected.
  * of 276 million reads, 200 million (72%) start with 8 characters and an exact cutsite.
  * Only ~1 million (0.3%) seem to be missing a base in the barcode (there are 7 bases and then an exact cutsite)
  * About 20 million (7%) seem to have an error or N in the cutsite, and 16 million of these are at the 4th base of the cutsite. This is one of the two sites in the barcode and cutsite that FastQC identifies as having worst quality.
