---
title: Tracking VPGsim issues
date: 2011-10-17T12:24:24+00:00
layout: post
categories:
  - science ed vpgsim
---
After students started running their experiments Wednesday afternoon, I kept track of which regions were crashing (i.e., skyrocketing cpu load so much that the entire machine got bogged down):

  * Thursday 8pm- 2, 4, & 6.  I made a single continuous timer instead of having the timer stop and restart each time.  Recompiled and restarted. (I'll use R&R to indicate other regions where I did this same thing)
  * Friday 4:30 - Region 12 wasn't crashed, but it wouldn't let anyone log in.  I restarted it and told them to let me know if it happened again.
  * Friday 6pm - 13 - Before the cpu shot up, their population was growing very quickly, they logging in, ran a visualization and immediately logged out.
  * I sat and watched region 12 on 'top' and on the opensim console for a couple hours.  The cpu load went really high (500-2000) several times but always came back down.  It went up everytime they ran a visualization.  Also, it looks like they were hitting the button on the HUD to get an immediate summary over and over (like 10 times in 2-3 seconds).  This also caused spikes in the cpu load but it came back down after 30-90 seconds.
  * Saturday 9am - 3 regions:
      * 13 - Same as last time.
      * 14 - It was a midsized population and had only been running 90 generations.  It looked like the plots had reached equilibrium so the data should be useable. R&R.
      * 15 - This was a midsized pop (3k plants) that had been running a long time (500 generations). R&R.
      * PID 11390 is consistently at ~400% cpu but seems to be ok.  I think this is vpgsim10.  It is a huge (9k plants) pop that had 70 generations plotted on saturday morning.  I'm just going to let it run unless they complain or the cpu gets higher.
  * Saturday 1:30pm - Got another email from group 12 saying their region crashed.  I could still log into it fine, and it had not been shut down.  I suspect they may have not tried logging into it since I restarted it Friday evening and thought it had crashed since.  I don't know.  In any case, I told them they could start using region 3 if they want since it is not assigned to a group.
  * Saturday evening group 14 told me they were done with their experiments so I shut the region down.
  * Sunday - I had a shell open running top all day and there were no problems.  A watched pot never boils!
  * Monday 6am - 2 regions:
      * 2 - huge pop at 75 generations
      * 13 - midsized pop but 400+generations
  * Monday 11:30am - I decided to try to log into vpgsim10 to make sure the 400% cpu wasn't actually causing some problem.  I couldn't log in - timed out - so I shutdown the region.  Surprise - vpgsim10 wasn't PID11390!  But as soon as I shut vpgsim10 down, PID11390 dropped to below 200% cpu and stayed around 150%.  Clearly the load on 11390 was somehow related to vpgsim10 but vpgsim10 was not PID11390.  How are these mono processes for entirely separate regions interacting?  And which region is PID11390? R&R.
  * Monday 9:50 - I left a top ssh shell attached at work thinking perhaps that had some positive effect but two regions maxed out cpu anyway:
      * 2 - huge population at only 25 generations
      * 5 - they weren't logging so I don't know how large it was
