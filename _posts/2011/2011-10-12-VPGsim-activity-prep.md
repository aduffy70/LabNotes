---
title: VPGsim activity prep
date: 2011-10-12T17:00:22+00:00
layout: post
categories:
  - science ed vpgsim
---
  * Prep for VPGsim activity in Biol3065.  Shutdown all regions, deleted OpenSim.log for all, lowered maximum population size from 10k to 8k for all, restarted regions.
  * Wrote Assignment description for VPGsim activity report and posted it to the course webpage
  * Set up a cron job on transcriptome to write the output of top to a web-accessible file every 10 minutes so I can easily watch for frozen regions.

~~~
# m h  dom mon dow   command
0,10,20,30,40,50 * * * * top -u aduffy -n 1 -b > /home/aduffy/public_html/top
~~~
