---
title:  Troubleshooting VPGsim on the workstation
date:  2016-09-14
layout: post
categories:
  - science ed vpgsim
---
Something about the environment supporting mono/OpenSimulator/VPGsim on the workstation changed when we reinstalled Ubuntu 14.04 on a new disk.

I have logs for region VPGsim0 going back to 2012. On startup, the region reports the operating system version (kernel number). I looked for changes in that version over time:

| Date_range | Kernel | worked? | notes |
| ---------- | ------ | ------- | ----- |
| 2012/09/06 to 2012/10/03 | 2.6.35.31   | Y | Kernel for Ubuntu 10.10 |
| 2014/09/02 to 2014/09/10 | 3.6.0.30600 | Y | This kernel never shipped with Ubuntu. Was this 12.04 with the kernel manually upgraded from 3.2 or 14.04 with the kernel manually downgraded from 3.13? |
| 2016/09/06 to 2016/09/11 | 3.6.0.30600 | Y | This was definitely Ubuntu 14.04 but the kernel had never been upgraded in the previous 2 years. If 3.6 was installed manually, maybe it was locked on that version. That would explain why Martin Schilling mentioned never having seen messages about kernel packages being kept back by apt-get. |
| 2016/09/12 to 2016/09/12 | 4.4.0.31    | N | This is the default kernel when we reinstalled Ubuntu 14.04.5 on the new hardrive. When we ran updates, kernel updates were kept back and we didn't install them til I saw there were issues. |
| 2016/09/13 to 2016/09/14 | 4.4.0.36    | N | This is after I installed the kernel updates that were kept back. It is the very latest kernel shipped with Ubuntu 14.04.5 |

  * It looks like things were working on Ubuntu 14.04 with kernel 3.6. I don't know how, when, or why that kernel was installed, but there were no kernel updates on the workstation for at least 2 years.
  * When you google the stack-trace I was getting, other mono-based projects also report apparent incompatibilities between versions of mono and particular kernels.
  * It seems likely that changing to recent kernels broke mono/OpenSimulator/VPGsim. I don't know if it is a bug in recent kernels, in mono, or in how OpenSimulator uses mono, or something specific to the workstation hardware, but on the workstation, Opensimulator + mono 3.2.8 works with kernel 3.6 but not with kernel 4.4.

So to run VPGsim in an environment where it has worked before, I need either:
  * Ubuntu 12.04 with default mono 2.10.8, but upgraded to kernel 3.6.0.30600, or
  * Ubuntu 14.04 with default mono 3.2.8, but downgraded to kernel 3.6.0.30600
