---
title: Next steps Crepidomanes GBS
date: 2015-03-04T15:08:30+00:00
layout: post
categories:
  - t. intricatum gbs
---
  * Next steps Crepidomanes GBS - finish running proportion plots on Lycaeides data
    * I don't have the cutadapt command I've been using anywhere in my notes - but I had it in an email I sent Don Hauber and it is in the cutadapt.log I've saved from each run. Here it is for future reference

      ~~~
      cutadapt -a TTACAGATCGGAAGAGC fastqfile.fastq > cutadaptOUT.fastq
      ~~~

    * Same for the sort.pl script:

      ~~~
      ./sort.pl F2.fasta -length -r > F2-sorted.fasta
      ~~~

    * The proportion plots for 3 different Lycaeides samples have a peak in the exact same place as it is in Salvinia and Crepidomanes. Lycaeides IS diploid (are triploid butterflies even possible?!) so does this mean Salvinia and Crepidomanes are also diploid? Or is there something else that causes this peak to show up above 0.5 regardless of ploidy level? If there were no sampling error or sequencing error, all proportions should be exactly at 1.0 or 0.5 in a diploid. With sampling error, the 1.0s should stay exactly where they are and the 0.5s should shift up (they can't shift down cause that would make the other allele the most common and it would be above 0.5). With sequencing error, the peaks for both should shift down as some reads move from the most common into their own unique read. This peak above 0.5 in diploids seem to suggest that sampling error plays a bigger role in where the final peak lies than does sequencing error. But the fact that the 1.0 peak is shifted downward suggests sequencing error still plays a big role. I need a KNOWN triploid to compare!
