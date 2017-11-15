---
title: Prep for VPGsim activity in Biol3065
date: 2012-09-10T13:51:08+00:00
layout: post
categories:
  - science ed vpgsim
---
  * vpgsim demo ran over the weekend with only 5 repeating errors.  They hit every 5 hours and seem to be a problem with the cache not finding assets for the objects in the default oar?
  * Make copies of the demo folder and update for each to be a numbered region:
      * cp -r vpgsimdemo vpgsim01 &
      * cp ../GenLabActivity2011/vpgsim1/bin/OpenSim.ini vpgsim01/bin/
      * cp ../GenLabActivity2011/vpgsim1/bin/Regions/Regions.ini vpgsim01/bin/Regions/
      * cp -r ../GenLabActivity2011/vpgsim1/bin/addon-modules/vpgsim vpgsim01/bin/addon-modules/
      * For each region, change the population_limit in vpgsim.ini to 5000 (was 8000).
      * Start each region in a screen session and test
  * Tested VPGsim Guest1 - VPGsim Guest8 accounts (one extra).  Made sure avatar was inoffensive, set to the correct home region, and wearing a working hud.
  * Updated resource page at https://sites.google.com/site/usubiol3065/vpgsim
  * Updated cheatsheet to include the newest terrain that was added during last year's exercise
  * Turned the Intro to ScienceSim and VPGsim handout into a Google Doc (why was it not already?) and linked it to the class resource page.  Also updated the part talking about plots and logs
  * Restarted my webserver on transcriptome so we can access plots and graphs
  * Started the summary tracking on all regions to test whether it is working correctly.
  * Tested loading new parameters
