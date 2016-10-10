---
title: Identifying inter-GSTA region SNPs with Sequencher
date: 2015-05-05T12:57:48+00:00
layout: post
categories:
  - gsta mirna
---
  * GSTA intergenic SNPs - process for cleaning/assembling in Sequencher:
      * Create new sequencher project
      * Import sequences (use the ab1 files, not the seq files so you have the chromatograms)
      * Select all the imported sequences and export as sequencher subproject. Close the project and open the subproject (this gets around a bug where new projects can't save. You can save normally once you've opened the subproject)
      * Delete all 5bp (trash) sequences
      * Use the Trim Ends tool to trim:
          * 5' end
              * Trimming no more than 25% trim until the first 25 bases contain less than 3 ambiguities
              * Always trim at least 20 bases from the 5' end
          * 3' end
              * Trim from the 3' end until the last 25 bases contain less than 3 ambiguities
              * Trim from the 3' end until the last 25 bases contain less than 10 bases with confidences below 25
          * Post fix
              * Remove leading and trailing ambiguous bases
      * Remove reads under 300bp or under 90% quality after trimming (or 95% if there are lots of high quality reads)
      * Assemble with default parameters except us the Dirty Data algorithm instead of the Clean Data algorithm
      * Manually verify locations with possible SNPs
