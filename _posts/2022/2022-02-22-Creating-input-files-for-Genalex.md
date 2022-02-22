---
title:  Creating input files for Genalex
date:  2022-02-22
layout: post
categories:
  - sphagnum other
---
How I generate input files for Genalex from ipyrad ustr files:

  * Change 0's to 4's and -9's to 0's in atom. Genalex expects missing data as 0 but ipyrad uses 0-3 for alleles and -9 for missing. We are making it 1-4 for alleles and 0 for missing.
  * Use my Rmd code (Filter_uninformative_loci.Rmd) to convert to a csv format and filter any uninformative loci.
  * Manually add header rows and sort by species in Libreoffice. Note- this limits us to <1024 loci because of the column limits in Libreoffice. Use Excel if you need more--or maybe consider that Genalex isn't the best tool for big datasets.
  * Use my python code (identify_loci_missing_in_a_species.py) to find columns missing all data for any species. Once you have the list of columns from the script, use it to manually remove those columns in Libreoffice. If I were doing this often I would automate that step. And maybe the last one too to avoid the column limits. Missing data in all samples of a species will throw an error in Genalex.

  
