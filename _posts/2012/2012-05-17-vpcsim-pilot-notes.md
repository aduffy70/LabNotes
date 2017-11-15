---
title: VPCsim Pilot notes
date: 2012-05-17T23:59:51+00:00
layout: post
categories:
  - science ed vpcsim
  - science ed drk12
---
Piloted in Jana Barrow's classes at West Point Jr High.

  * Use 'elevation', not 'altitude' for the plant descriptions and anywhere else in the GUI.  It would be good to fix this in the code too... - FIXED (in GUI and code)
  * Altitude health calculations were broken - FIXED
  * Home position slides back from 500,500 to 499, 499 - FIXED
  * Make the map page optional, so they don't see it unless they ask for it. - DONE
  * Add a version number to the display so we can spot problems with cached versions. - DONE (v1.0.  We will roll the revision everytime we upload a new version to the website.  We will tag those commits in git to match.)
  * Hide the debug button. - NO, leave it there through the Professional Development, just in case.
  * Add top view photos to the plant descriptions - NO, this will increase the front end time usage on google appengine.  It isn't hard to fly around and figure out what each plant looks like from above.
  * How can we minimize the front end time on the google app to make sure we don't overrun the free quotas? WAIT, watch what happens with the quotas during the PD and discuss with Max and Todd.
  * What if we make temp and elevation have a more natural interaction?  Instead of having temp directly affect fitness like water and light do, have it shift the optimal elevation up or down, with the consequence that too large a shift in temp will push the optimal elevation outside of what is available on our terrain.  This should be easy to implement and will lead to plant-environment interactions that more closely reflect reality. - MAYBE after the PD?
  * Add user tracking to the main VPCsim page so we can see who is using it and where. - DONE (used Google Analytics on both the home page and the simulation page)
