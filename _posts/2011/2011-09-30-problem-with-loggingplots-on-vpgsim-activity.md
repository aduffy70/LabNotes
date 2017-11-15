---
title: Problem with logging/plots on VPGsim activity
date: 2011-09-30T23:58:50+00:00
layout: post
categories:
  - science ed vpgsim
---
  * At about 10 am some of the plots stopped updating.  By 2pm all had stopped
  * Before they stopped the values on the demographics plot spiked several times, in some cases to over 100,000 plants
  * In-world, the simulations appear to be working correctly.  The numbers reported by the HUD match the plots, but there are clearly NOT hundreds of thousands of plants
  * The logs show that when the values spike, the time-step number is not being advanced.  The new summary is running without the numbers from the previous summary being cleared first
  * On the logs, when the values spike, there is an error about a process failing to start and the R script is not running (no output to console).
  * Googling the error message suggests that when starting external processes using c#/mono, there is a 'process leak' that can eventually lead to exceeding the maximum allowed number of simultaneous processes.  It looks like that is what is happening.  All those process requests (6 per region * 15 regions, every 5 minutes) took a couple days to exceed the limit.  This could also explain why single simulations running for several weeks to a month eventually overload the server.
  * I placed a note on the course webpage notifying students that the regions would be going down for repairs over the weekend
  * Backed up all of the logs and plots so I can try to salvage data from the students' experiments
  * Left the simulations running to see if it does end up overloading the server eventually (to see if this is the same problem I see after weeks of continuous running)
