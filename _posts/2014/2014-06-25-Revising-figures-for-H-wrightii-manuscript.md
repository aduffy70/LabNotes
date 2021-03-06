---
title: Revising figures for H. wrightii manuscript
date: 2014-06-25T14:25:10+00:00
layout: post
categories:
  - h. wrightii
---
  * Re-submitted figures for the AFJ Hymenophyllum wrightii manuscript. They were 300dpi and needed to be be 1200dpi, grayscale color mode and LZW compression.  They are now all of those things. Here is the process I used:
      * On crozier (12.04 linux desktop), run the 3 \*.sh scripts in Dropbox/HwrightiiManuscript/MapFigures/TryForTiffOutput-1200dpi/
      * Note - I commented out the line that makes a jpg version since I don't need that format and wanted to keep the old jpgs in the folder to compare the new files against. I also modified the tiff line to make a 1200dpi instead of 300dpi file.
      *  Copy the resulting tiff files to the macbookpro. They are huge - over 400Mb each.
      * On the macbookpro, open each in gimp.  Do not change the color profile when prompted.
      * Selected just the part of the file with the useful image, and cropped.
      * Rescaled the image to 5" wide and the proportional height.
      * Changed the color mode to grayscale.
      * Saved to a new name. On save it asks what type of compression to use.  Selected LZW. This shrunk the files significantly - now just over 5Mb each.
      * Emailed the 3 new map files to Warren Hauk. All files are stored in Dropbox.
