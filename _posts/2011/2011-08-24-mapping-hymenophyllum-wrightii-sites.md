---
title: Mapping Hymenophyllum wrightii sites
date: 2011-08-24T23:58:44+00:00
layout: post
categories:
  - h. wrightii
---
I need a map figure showing the known Hymenophyllum wrightii sites in SE Alaska, British Columbia, and on the Olympic Peninsula.

  * Google Maps/Earth won't output a vector drawing and generating one from their images violates the terms of service
  * Kristal Watrous used iMap for her thesis figures but the license is $150 and it is an OSX only application
  * ircmarkers is a linux utility that plots locations on a base image if I provide the vector map for the base image and the lats/longs of the edges of the image.  This will work if I can find/create the vector maps
  * GMT - generic mapping tools (<http://gmt.soest.hawaii.edu/>): opensource set of linux utilities (available in the Ubuntu repos), includes data to generate coast maps

  1. Installed GMT on crozier using Synaptic (pulled in dependencies plus tutorial data and the low res coast data)
  2. Ubuntu doesn't include high or full resolution maps so I downloaded the appropriate version (2.01) of the GSHHS files from ftp://ftp.iris.washington.edu/pub/gmt/  (These old versions are no longer available on the main GMT site).  Extracted them and copied them into /usr/share/gmt/coast/ with the other cdf files. If you try the wrong version of the GSHHS files GMT won't recognize them, but once you get the correct versions GMT automatically recognizes that they are there.
  3. Worked through the GMT tutorial and looked at the example scripts and man pages to write shell scripts to generate the plots I need.  I was able to do everything with the pscoast and psxy utilities included in GMT.  Made 1 map (figure1.sh) of SE Alaska, another (figure2.sh) of Vancouver Island and the Puget Sound, and one (I likely won't use, figure3.sh) of the entire NW coast.
