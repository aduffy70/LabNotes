---
title:  Retiring cordate server
date:  2017-11-07
layout: post
categories:
---
Cordate died. I think the motherboard is dead. It wouldn't restart consistently and would hang up before booting with a "CMOS checksum" error. After replacing the battery (with old batteries from other machines and a newly purchased one) it won't even start BIOS. I tried resetting BIOS, reseating all connections, reseating the CPU, and disconnecting everything non-essential for a basic BIOS startup and it still fails. The fans spin, but nothing else happens.

How should I handle each of the systems that were on that machine?

  * www.aduffy70.org - Professional website
    - Already duplicated on GitHub. Point my CNAME there?
  * vpcsim.usu.edu - VPCsim site
    - Move to crozier and have the university CNAME reassigned?
  * lab.aduffy70.org - these lab notes
    - Move to crozier? Move to GitHub? The "last update" date module won't work if I put it on GitHub (but I could handle that like I do with my Protocol site--link to the github history). Will my search page work if I host it on GitHub?
  * vpgsim.usu.edu - VPGsim support pages
    - Don't restore.
  * cyberlearning.usu.edu - ISIT site
    - Don't restore
  * fernseed.usu.edu
    - rampcalc.html - ramp calculator for ISTI module 2
      - Don't restore
    - reader.html - my rawdog page
      - Don't restore
    - turkeycam.html
      - Don't restore
    - vpcsim.html - backup link for vpcsim
      - Don't restore

Only 2 websites transferred over:
  * vpcsim.usu.edu - WORKING. On cordate it was under the vpcsim user. I moved it back to my userspace.
  * lab.aduffy70.org - Website is working. Still need to install jekyll tools to be able to build it from the repo and update my working repo to point to the new location.
