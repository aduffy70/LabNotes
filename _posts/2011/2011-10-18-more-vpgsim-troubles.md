---
title: More VPGsim troubles
date: 2011-10-18T14:02:09+00:00
layout: post
categories:
  - science ed vpgsim
---
I got an email from group 8 saying they'd been unable to get into their region for several days so they started a simulation on region 5!  Wondering how many other groups might be locked out and not saying anything I attempted teleports to each region.  A couple were locked.

When I tried to shut them down they hung at the 'storing persisted objects' stage so I had to kill them by killing the PID of the screen session.  I wonder if this might be causing problems, since perhaps the mono job doesn't get cleaned up correctly in this case.  To avoid having to do this in the future I shut down everything that didn't have an active population (first the mono job, then the screen session too) and restarted them one at a time recording the PID so I have a PID to region cross-reference table: (KEEP THIS UP-TO-DATE!!!)

1 <del>Unknown 17449</del> 16279 Simulation @1000+ generations but it overloaded cpu as soon as I ran a visualization.

2 <del>15330 25739 4988 26580 24580</del> Moved this group to vpgsim demo1 10/26/11 - Not running

3 <del>Unknown 4269 6611</del> Moved this group to vpgsim demo1 10/20/11 - Not running

4 <del>15657 27328 28273 9864</del> 27494 No simulation. Finished?

5 <del>Unknown 14941 23638 25189 28273</del> 29253 No simulation. Finished?

6 <del>16431 28985</del> 27984 No simulation. Finished?

7 <del>Unknown 18328</del> 22910 Had a simulation but no data being recorded and I couldn't log into it.

8 <del>17081</del> 26121 No simulation. Finished?

9 <del>1 7365 28472 25648</del> 2293 No simulation. Finished?

10 <del>17674</del> 5138 Had a simulation but couldn't log in.

11 <del>18005 4057</del> 30899 No simulation. Finished?

12 <del>18543</del> Moved this group to vpgsim demo1 10/20/11- Not running

13 <del>18737 27617 10968 4010</del> 1054 No simulation. Finished?

14 <del>Not Running 29315</del> Not running. Finished.

15 <del>Unknown 14347 26121</del> 11618 Had a simulation but couldn't log in.

The unknown regions are the ones that had active populations and I could teleport to them so I did not shut them down.  The PIDs of the unknown regions are:

<del>4125</del>

<del>4269</del>

<del>4842</del>

<del>14347</del>

<del>14941</del>
