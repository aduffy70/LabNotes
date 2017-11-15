---
title: Solving VPGsim plotting problem
date: 2011-10-02T23:58:32+00:00
layout: post
categories:
  - science ed vpgsim
---
  * Stopped all regions
  * Backed up all logs/plots
  * Disabled plotting in all regions (expected to have to modify code and re-compile but I already had this set up as a configuration option
  * Restarted regions, reset logging/plotting system and started populations on all regions
  * That should fix the problem with excessive processes failing but now I need a way to generate plots on demand
  * Created a Google AppEngine-based app to generate plots
      * User submits a region name to the app url (example: <a href="http://vpgsimplots.appspot.com?region=vpgsimdemo" target="_blank">http://vpgsimplots.appspot.com?region=vpgsimdemo</a>)
      * App checks whether files for the region exist on transcriptome
      * If files don't exist, it loads a page to tell the user
      * If files exist it uses the Google Charts API to generate the plots from the files and loads a page with all three plots
      * Drawbacks and known issues:
          * The webapp is hard coded to use files on transcriptome for now, in the future I'll need to make that flexible
          * I can't plot thousands of points with Google Charts API so we plot all the timepoints if there are less than 50.  If there are 50-100 we plot every other one, if 100-150 every 3rd, etc.  We always plot the most recent point and count back from there (so often the first point plotted is not point 0).
          * The y-scale of the plot is based on the largest value in the data, not the largest value actually plotted so the scale doesn't jump around wildly between plots but this means sometimes the y-scale looks bigger than needed for the data actually plotted.
          * There is no interface to choose the region, it just has to be provided in the app url.  To avoid students having to deal with this, I made a link for each region on the course webpage, so as far as they know they just click a link to see their plots - they don't even need to know the webapp exists.  This solution of links won't scale much beyond the 15 regions I have now.  The app needs an interface to select the region from a dropdown or enter it in a field.
          * Google Charts API has limited formatting/labeling options.  I'd have made better axis labels if I had the choice.
          * The webapp assumes the simulator is producing valid logs.  It doesn't check the data beyond ensuring that a file exists so if the region provides bad data the webapp will not respond gracefully.
  * Need to let things run for a couple days to see if it solved the problem.
  * Still need to salvage the data from the backed up logs
