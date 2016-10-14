---
title: Sorting GBS barcodes
date: 2014-12-03T14:47:05+00:00
layout: post
categories:
  - t. intricatum gbs
---
  * Finish updating sortbarcodes_nowobble.py
      * So, I now have 2 versions: one that allows for indels and one that doesn't. I compared the two and allowing indels does lower the distance for many 12mers. The only ones that are most interesting are the ones where allowing indels makes the distance=1. That means that the only difference is the indel, so opening an indel gave an otherwise perfect match. Allowing indels also leads to situations where 12mers that had an unambiguous match with a distance of 1 without indels now have a second match with a distance of 1 with indels making them ambiguously assigned. So I have to decide how likely I think it is that the indels are real. If they are real, then many of my 1 distance matches are actually ambiguous and should not be used, but I'll gain some previously high distance matches that are lower with indels.
      * Checks to make sure I didn't foul something up:
          * On my first GBS dataset, sortbarcodes-wobble.py should give the same results as I got with the original sortbarcodes.py - it does.
          * On the new data, sortbarcodes-wobble.py should give the same results as the original sortbarcodes-zd.py - it does.
          * I wrote a quick script to compare the results of sortbarcodes-wobble.py and sortbarcodes-indels.py and it looks like the differences make sense. Including indels lower some of the distances and on ones where distance =1 they are perfect matches other than a single indel.
