---
title: VPGsim activity in Genetics BIOL3065
date: 2011-10-09T15:14:12+00:00
layout: post
categories:
  - science ed vpgsim
---
  * Changed the vpgSummary module to only lock the scene long enough to grab a list of the object names and then process those names outside of the lock.  Ran it for over 24 hours on the demo region with 10k+ plants and no issues, so I rolled it out onto all the students' regions.  This required restarting all regions.
  * Started test populations on all regions (that didn't have something running before the restart so I am not overwriting data that groups need).  Placed a notice on the class webpage explaining this.
  * Created a terrain with 4 40x40meter islands in a square separated by 40 meters.  This layout was requested by one of the groups.  Loaded this new terrain option to all the regions as Terrain11.png and placed a notice on the course webpage so they will know it is there and how to access it.
