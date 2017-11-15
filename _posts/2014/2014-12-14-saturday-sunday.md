---
title: Saturday, Sunday
date: 2014-12-14T23:59:43+00:00
layout: post
categories:
  - t. intricatum gbs
---
<span style="line-height: 13px;">Working on GBS data analysis with Don Hauber, Karen Mock, Carol Rowe, and Paul Wolf:</span>

  * <span style="line-height: 13px;">Setup accounts on the workstation for Carol, Karen, and Don. Note- use adduser when setting up new accounts, not useradd. The latter does not automatically create home folders.</span>
  * Installed Fastx-tools on the workstation so it is accessible to all users
  * Installed Ugene (similar to Genious?) on my macbook, crozier, and fiddlehead. It is crossplatform with versions for 32 and 64 bit machines, though it looks like the 64 bit version has more features.
  * Ran out of space on the /home drive but Paul had some people who are no longer using the system remove their files and I cleared several gigabytes by removing things I no longer need:
      * I deleted my copies of Zach's data that I used in my dissertation analysis. I kept the files resulting from the analysis.
      * I deleted the files from when I tried to run Checkout on my dissertation dataset. I started running it before I started writing my own pipeline and never went back to look at the results (over 300GB of files!)
      * I deleted the files from the first 2 times I ran the VPGsim activity (~40Gb of files) and just kept the most recent (7Gb). I also copied the most recent ones to cordate as a backup.
  * I'm preparing my data to use uclust to try to cluster the reads. Using my pipeline, I've sorted out just the unambigous d<=1 reads, replaced the d=1 16mers with the corrected barcode, cut off the barcode sequence and the associated quality scores, and stored the barcode in the description of each read. Cutadapt is running to take off the 2nd illumina adapter. What about the sticky end from the other RE?? Need to cut that out too. Then I need to do some quality filtering (using Fastx tools?) and then it is ready for uclust. If uclust 32 bit can't handle the filesize, I may need to use parts of Stacks, or Uneak to cluster my reads.
      * I had a question on what adapter sequence to look for using cutadapt, but Zach was able to explain it:
      * Question: Based on the info Illumina has online and from the documentation for the tool I'm trying to use (cutadapt), the adapter sequence should start with GATCGGAAGAGC or AGATCGGAAGAGC. The perl script you sent me for parsing barcodes looks for a similar sequence, but with additional bases at the start: TTACAGATCGGAAGAG. Are those starting bases something to do with the MseI cutsite
      * Answer: Yes, the TTA should match the MseI cut site and the C should be the protector base added to prevent recreating the cut-site (we used to cut and ligate in a single reaction).
      * So the adapter to search for is TTACAGATCGGAAGAG. The actual adapter is longer than that, but when it finds the adapter it cuts off everything after it too, so just the starting part is enough as long as it is long enough not to occur frequently by chance (this is one in 4 billion). Re-running cutadapt using this new adapter sequence (cutadaptOUT2.fastq)

&nbsp;
