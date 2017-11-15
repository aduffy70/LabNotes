---
title: Debugging VPGsim summary module
date: 2011-10-07T19:00:35+00:00
layout: post
categories:
  - science ed vpgsim
---
I am wondering if all the different timers in this module are leading to a race condition where the next timer is triggering before everything from the last one has completed.  Combined with the locks on the scene in this and other modules that might cause the incredibly high cpu load that I am seeing after a couple days on the VPGsim exercise in the Genetics Lab (Biol3065).

  * Eliminated everything from the module related to making it work for multiple regions.  That leaves just one 5 minute timer and simplifies the module drastically.
  * Need to look at whether this module can lock the scene just long enough to grab a <span style="text-decoration: underline;">copy</span> of the list of SceneEntity names rather than locking the scene for the entire time it takes to summarize the population.
