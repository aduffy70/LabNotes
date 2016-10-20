---
title:  Retrogen sequencing process
date:  2016-10-18
layout: post
categories:
---
It's been awhile, so documenting the process for sending samples to Retrogen for sequencing...

For each reaction send:
  * 5uL PCR purified sample at 20ng/uL
  * 10uL primer at 10ng/uL
  * [Google Spreadsheet][1] to simplify the calculations

Enter order [online][2]
  * login name/password on the Tox drive Vendor info spreadsheet
  * Pay w/Pcard info

Ship Fedex overnight to:

~~~
Retrogen, Inc.
Sequencing Department
6645 Nancy Ridge Dr.
San Diego, CA 92121
~~~

# Processing without Sequencher:

When the data are ready, download all formats but only unzip and process the AB1 chromatogram files:
  * Open the file in finchtv
  * Inspect, trim, and edit. I edit in lowercase so I know which bases changed.
  * Export as fasta
  * Save the chromatogram, adding \_edits to the end of the filename
  * 'cat' all the fasta files for a single contig into one file and open in Abiview.
  * Align manually or with Abiview's alignment tools, and edit further.
  * Save the fasta file of the edited alignment.
  * Abiview doesn't generate a consensus sequence so cut-and-paste one manually and save in a fasta file.

[1]: https://docs.google.com/spreadsheets/d/19hSRidBUdqwhi9UYkcB23_dI-l5YArFiabIIQsuWbvs/edit?usp=sharing
[2]: http://sequencing.retrogen.com/cgi-bin/dna/seqreq2N.cgi?username=52212413,7198
