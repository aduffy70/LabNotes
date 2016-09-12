---
title:  VPGsim activity prep
date:  2016-09-06
layout: post
categories:
  - science ed vpgsim
---
Setting up for the VPGsim activity in Paul Wolf's Genetics lab BIOL3065:

  * We start on Wed 14th/ Thurs 15th.
  * 12 and 19 students = 4 and 7 regions (groups of 3 or 2).
  * Marley Haupt is the TA.
  * Emailed Martin Schilling about minimizing restarts on the workstation.
    * He says the workstation may be having problems but he will avoid restarts. It feels sluggish and he says it acts like it is out of RAM when it clearly is not.
  * Emailed Max Longhurst about borrowing a box of laptops from the DRK12 project.
    * No problem, I just need to turn them on and run upgrades since they haven't been used in months.
    * 10 computers: 1, 4, 6, 7, 8, 10, 11, 13, 14, 15
    * Verified that imprudence is installed on all, the settings are correct, I can log in, and each has a chrome bookmark to the activity webpage. I also removed unnecessary desktop links and chrome bookmarks.
    * They haven't had windows updates since October 2015 or earlier. They hang up Checking For Updates, and the ones that already have updates hang up on Downloading or Installing. [This link][1] might be helpful--it only worked about half the time and I gave up after getting only 3 computers only partially updated.
  * Copied 17 region files from BigDisc/GenLabActivity2014 (vpgsim00-vpgsim16). Regions started up no problem.
  * I need ports 9000-9017 open, but ufw isn't even running so they are open already.
  * Enabled vpgsim.conf in apache so the logs and plot page will be served.
  * Started a population and started the logging system (/3 start) to verify that logging/plotting works. Plots are generated correctly (the google app still works!)
  * Logged all accounts in to their home region, reset the region and checked that the av looks appropriate.
  * Imprudence was crashing on OSX yosemite, but works on El Capitan. It warns about missing sky files but I dismissed them and didn't notice any difference.


# Todo

  * Print handouts (1 per group)
  * Start sample populations on each region
  * Find my week 1 lecture notes
  * Put imprudence on thumbdrives

[1]: http://www.sevenforums.com/windows-updates-activation/382249-windows-update-never-stops-checking-updates-7.html
