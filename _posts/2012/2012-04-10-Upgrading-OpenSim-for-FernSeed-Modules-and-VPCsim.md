---
title: Upgrading OpenSim for FernSeed Modules and VPCsim Demo
date: 2012-04-10T14:09:35+00:00
layout: post
categories:
  - science ed vpcsim
---
  * Upgraded OpenSim to master on FernSeed Region Modules region in ScienceSim.
    * There was a slight problem getting the region modules to run.  They complained about ScenePresence.Firstname no longer being available.  It looks like there is a commented line in ScenePresence.cs that is being interpreted as the start of a long comment when it should not be. 

    ~~~
    //***************************************
    ~~~

    * The line has been there since 2008 and the line being interpreted as the end of the long comment has been there since 2009 so I don't know why this is just starting to be a problem now.  Perhaps an update in the version of nant is making the difference.  In any case, simply adding a space after the forward slashes solved the problem.  Otherwise the region modules appear to be working correctly and the avatar attachment problems I'd been having on the region went away with this update.
  * Tried updating VPCsim Demo on Opensim to master (haven't updated since May 2011!) but it fails to compile because of changes in SceneObjectGroup (no more GetChildPart?).  I'm not going to try to fix it, since this project has been moved to Unity anyway.  Eventually I may want to rework this module into a tree planting tool (the problems relate to the HUD, which would not even be needed for that use-case), but for now I will let the code rot.  I reloaded the old version onto the region for now since I have links to this region on other regions.
