---
title:  Workstation issues during VPGsim activity
date:  2016-09-12
layout: post
categories:
  - science ed vpgsim
---
The workstation stopped responding over the weekend? One small test population was running since 2016-09-06.

From the syslog it looks like the swap disk on the root drive is failing. We loaded 14.04 on a new drive and installed it in place of root and swap. By keeping Hardeep the default account and by copying over the /etc/passwd, shadow, group, and gshadow files we were able to maintain the old user accounts. Since all the home files are on a separate drive, no one lost data.

After the re-install, simulations fail (core dump) after about 10 minutes complaining about not being able to create threads.

Googling suggests this may be due to an incompatible kernel and mono version. I installed the latest mono from Ubuntu (3.2.8) and tried 2 different kernels: the one that installs with a base 14.04 install and the latest version from apt-get dist-upgrade.

I also considered tried recompiling opensimulator using mono 3.2.8 (so it is compiled with the same version it is running) but that just makes it spew errors for every script that tries to start before the core dump.

**Can I reinstall the old drive and see what kernel and mono we were using? Perhaps I installed a version manually or from another repo years ago and we were still running that instead of the latest.**
