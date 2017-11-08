---
title:  Retiring cordate server
date:  2017-11-07
layout: post
categories:
---
Cordate died--bad motherboard. It hung on restart a few times recently with a "CMOS checksum" error. Replaced the CMOS battery and now it won't even start BIOS. I tried resetting BIOS, reseating all connections, reseating the CPU, and disconnecting everything non-essential for a basic BIOS startup and it still fails. The fans spin, but nothing else happens.

How should I handle each of the systems that were on that machine?

  * www.aduffy70.org - Professional website
    - Already duplicated on GitHub Pages. Pointed my CNAME to the version there.
  * vpcsim.usu.edu - VPCsim site
    - Moved to crozier and had IT reassign the CNAME.
  * lab.aduffy70.org - these lab notes
    - Moved to GitHub Pages. The "last update" date module won't work but I replaced it with links to the GitHub history for the page like I did with my Protocols. The javascript-based search still works. I can't make it private, but I blocked robots from indexing the pages in the page heads.
  * vpgsim.usu.edu - VPGsim support pages
    - Don't restore.
  * cyberlearning.usu.edu - ISIT site
    - Don't restore.
  * fernseed.usu.edu
    - rampcalc.html - ramp calculator for ISTI module 2
      - Don't restore.
    - reader.html - my rawdog page
      - Don't restore.
    - turkeycam.html
      - Don't restore.
    - vpcsim.html - backup link for vpcsim
      - Don't restore.

I kept backups of everything I didn't restore. Reducing the number of servers and webtools I maintain should save time and simplify my monthly backups.
