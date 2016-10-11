---
title: miRNA data exploration
date: 2015-02-24T10:52:32+00:00
layout: post
categories:
  - gsta mirna
---
  * miRNA data exploration
      * RNAcentral does not make it easy to download the sequences associated with search results. The API doesn't let you filter for the same things as the search tool and the search tool looks in fields that aren't included in the fasta descriptions so you can't just download the entire database and do the search on that (Pulling reads with Meleagris gallopavo and microRNA only returns 103). To get the 179 sequences that the search tool finds for Meleagris gallopavo (taxonomy:9103) and microRNA (rna_type:miRNA) I used the following process:
          * Downloaded the entire fasta database
          * Cut and pasted the search results into a text file (after hitting the "More" button about 50 times to get them all displayed on the webpage at once!)
          * Ran getURS.py to extract the 179 URS numbers from the pasted text
          * Ran getURSfromlist.py to pull the fasta reads associated with those 179 reads from the fasta database
          * Ended up with a file of 179 reads. Verified that they all have unique sequences using verifyuniqueseqs.py
