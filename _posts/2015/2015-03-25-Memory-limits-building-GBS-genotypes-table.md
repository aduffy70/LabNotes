---
title: Memory limits building GBS genotypes table
date: 2015-03-25T23:59:34+00:00
layout: post
categories:
  - t. intricatum gbs
---
  * Crepidomanes GBS memory limits! Found [this page that provides useful info on the memory requirements of different python data structures][1]. Based on that, I am much better off storing my genotypes table as a dictionary where each value is a single string of concatenated genotypes rather than a list of 43 genotype strings. Also, when I do something as seemingly harmless as putting the name "Cluster\_" before each of my locus names I am adding 3-5Gb of uninformative data to the size of the dictionary! If I want that in the file I can add it when I write - no need to store it in memory during the script. If I do that and also regenerate the align\_contigs file so it doesn't include loci with coverage so low I can't use them anyway, I should be able to stay within the memory limits of the workstation.
  * Sent Paul Wolf an update on progress so he can include what info I have in his presentation:

> I'm still trying to get a combined genotypes table. I had a talk with Martin yesterday about ways to get there in the least amount of time without hitting memory limits and I have some ideas, but in the meantime the slow-and-steady database method has processed about 5% of my loci so I can make some estimates based on that.I have a total of 409,000,000 potential loci (all positions in my pseudo-reference genome. I have those split up into several groups that are being processed in parallel, and of the ones that have been processed so far, between 1 in 670 to 1 in 1900 are variable. So, I can conservatively estimate that about 215,000 of the total loci in the dataset are variable.I don't yet have a way to estimate how many of those loci are present in all samples or 80% of samples, etc. It is likely a very small proportion, but I don't know how small.

[1]: http://deeplearning.net/software/theano/tutorial/python-memory-management.html
