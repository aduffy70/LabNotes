---
title: Random GBS data QA- conclusions
date: 2014-12-05T13:25:54+00:00
layout: post
categories:
  - t. intricatum gbs
---
  * The GBS QA for the randomly generated dataset finally finished (almost 48 hours!). Added it to the QA summary spreadsheet and sent copies to Don Hauber and Paul Wolf, explaining what I think it means.
      * I think we should not use the indels method of calculating distance between barcodes and reads - it introduces too much error.
      * Don has so many exact matching reads that he probably does not need to use any of the mismatch reads. I have enough 1-step mismatch reads that I am tempted to include them but I have so few 2-step mismatches that I don't think they are worth risking added error by including them.
      * Don has a handful of barcodes where the extraction or library prep likely failed - they have fewer reads assigned to them than some unused barcodes did due to error. All my barcodes have substantially more reads assigned to them than we expect due to errors, so it appears all my extractions worked.
