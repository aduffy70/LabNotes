---
title: Backing up new Crepidomanes GBS dataset
date: 2014-11-30T23:59:52+00:00
layout: post
categories:
  - t. intricatum gbs
---
  * Backed up 11/24/2014 GBS data to cordate.
  * Checked md5 sums of the copies of the files on both cordate and transcriptome. The md5 file that got downloaded with the file using the download script was empty, but I got a copy of the md5 file from Zach Gompert's DoRC drive and the files match.
  * Unzipped the Crepidomanes GBS file on transcriptome and ran fastqc.
  * Found the barcode file in Zach's DoRC drive. It does not include the cutsites so I'll need to make a modified version to use with my gbs-tools scripts.
