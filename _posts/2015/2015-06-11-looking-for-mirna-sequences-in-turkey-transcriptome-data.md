---
title: Looking for miRNA sequences in Turkey transcriptome data
date: 2015-06-11T09:12:08+00:00
layout: post
categories:
  - gsta expression
  - gsta mirna
---
# Exploration of data provided by Kent Reed: 2009\_domestic\_challenge_study
  * Raw Liver RNA-seq Reads (Mayo) - 50bp reads. All domestic birds. Pooled RNA from each group (Cntrl, Probiotic treated, AFB challenged, Probiotic + AFB) and 4 libraries from each pooled group were sequenced on separate Illumina lanes.

| Readcount | Filename |
| --------- | -------- |
| 18281285 | SRR1334841\_CNTL\_lane1_read1.fastq |
| 19223967 | SRR1334841\_CNTL\_lane2_read1.fastq |
| 19045997 | SRR1334841\_CNTL\_lane3_read1.fastq |
| 18675049 | SRR1334841\_CNTL\_lane4_read1.fastq |
| 16791179 | SRR1335088\_AFB\_lane5_read1.fastq |
| 16655071 | SRR1335088\_AFB\_lane6_read1.fastq |
| 16220626 | SRR1335088\_AFB\_lane7_read1.fastq |
| 15132047 | SRR1335088\_AFB\_lane8_read1.fastq |
| 26826065 | SRR1335730\_PB\_lane1_read1.fastq |
| 27918269 | SRR1335730\_PB\_lane2_read1.fastq |
| 28374010 | SRR1335730\_PB\_lane3_read1.fastq |
| 28177515 | SRR1335730\_PB\_lane4_read1.fastq |
| 23999641 | SRR1335734\_PBAFB\_lane5_read1.fastq |
| 26789693 | SRR1335734\_PBAFB\_lane6_read1.fastq |
| 26560728 | SRR1335734\_PBAFB\_lane7_read1.fastq |
| 24808919 | SRR1335734\_PBAFB\_lane8_read1.fastq |
| 356472561 | Total reads |

  * Filtered Liver RNA-seq Reads - 101bp paired-end reads. Domestic (Nicholas) and WIld (Eastern Wild) birds. Each type has 4 control and 4 afb treated birds.

| Readcount | Filename |
| --------- | -------- |
| 14641781 | EW10L\_GTCCGC\_L003\_R2\_001.fastq |
| 11740806 | EW12L\_TTAGGC\_L002\_R2\_001.fastq |
| 12466171 | EW13L\_TGACCA\_L002\_R2\_001.fastq |
| 11719049 | EW1L\_ACTGAT\_L002\_R2\_001.fastq |
| 12615195 | EW2L\_ATTCCT\_L002\_R2\_001.fastq |
| 12625962 | EW3L\_ATCACG\_L002\_R2\_001.fastq |
| 12468136 | EW4L\_CGATGT\_L002\_R2\_001.fastq |
| 12148654 | EW9L\_CCGTCC\_L003\_R2\_001.fastq |
| 12448496 | N11L\_AGTCAA\_L003\_R2\_001.fastq |
| 12857795 | N12L\_AGTTCC\_L003\_R2\_001.fastq |
| 11417338 | N13L\_GATCAG\_L001\_R2\_001.fastq |
| 12099335 | N14L\_ATGTCA\_L003\_R2\_001.fastq |
| 11388753 | N1L\_ACAGTG\_L001\_R2\_001.fastq |
| 12827964 | N2L\_GCCAAT\_L001\_R2\_001.fastq |
| 10821683 | N3L\_CAGATC\_L001\_R2\_001.fastq |
| 11144371 | N4L\_ACTTGA\_L001\_R2\_001.fastq |

 (There are actually 2 files for each sample but they have the same number of reads.... paired-ends)

  * Make a blast database for one of the fastq files and blast the turkey miRNA sequences against it. (This has taken over 2 hours for one of the smaller files. It might be worth filtering duplicate reads first)

    ~~~
    fastq_to_fasta -n -i ../BigDisc/Reed_Lab_RNAseq/2009_domestic_challenge_study/some_raw_fastqfile -o 2009_cntl_1.fasta
    fastx_collapser -i 2009_cntl_1.fasta -o 2009_cntl_1-no_dups.fasta # remove duplicates
    makeblastdb -in 2009_cntl_1-no_dups.fasta -out 2009_cntl_1-no_dups-latest -dbtype nucl -hash_index
    ./renameprecursormiRNAs.py All_mature_miRNAs.fasta &gt; All_mature_miRNAs-renamed.fasta #Rename the miRNA sequences for the query because otherwise the blast output cuts off the useful part of the name
    blastn -db 2009_cntl_1-no_dups-faster -query All_mature_miRNAs.fasta -out All_mature_miRNAs_blastout.txt -task "blastn-short" -ungapped -evalue 0.0001
    #blastn-short because otherwise you get no hits with short queries. Ungapped because we expect few indel-type errors in Illumina data. Evalue 0.0001 because we are interested only in very close matches.
    ~~~

  * Creating the database ran for several days without finishing. There is a problem with the blast version installed on the workstation (version 2.2.24). It is known to take thousands of time longer than previous versions to generate large databases. I installed 2.2.23 in my home folder and it finished in 485 seconds. I installed the latest version 2.2.31 and after two days it still hadn't completed. My path is set to use the 2.23 version now.
