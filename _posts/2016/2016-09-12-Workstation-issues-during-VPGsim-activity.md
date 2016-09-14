---
title:  Workstation issues during VPGsim activity
date:  2016-09-12
layout: post
categories:
  - science ed vpgsim
---
# Problem: simulations run but workstation stops responding:

The workstation stopped responding over the weekend. One small test population was running since 2016-09-06 (~4 days/1200 "generations").  
From the syslog, it appears the swap disk on the root drive is failing. There are lots of swap write failures, which increase over time. Then there are many swap read failures and system logging stops.

# Attempted solution: reinstalled Ubuntu 14.04 and swap on a new drive:

We loaded 14.04 on a new drive and installed it in place of root and swap.
  * By keeping Hardeep the default account and by copying over the /etc/passwd, shadow, group, and gshadow files we were able to maintain the old user accounts.
  * Since all the home files are on a separate drive, no one lost data and there should have been no effect on the vpgsim files or my opensimulator-specific environment settings.

# New problem: simulations won't run:

After the re-install, simulations fail (core dump)
  * Sometimes immediately after I login to the Region
  * Sometimes when planting new plants
  * Sometimes about 10 minutes after planting when they start to reproduce.
  * A region even crashed when no simulation had been run and no one had logged in for hours.

Three types of crashes:
  * Clean with a stack trace
    ~~~
    Region (VPGsim1) # Stacktrace:
    Native stacktrace:
        mono() [0x4b73d8]
        mono() [0x50f13b]
        mono() [0x423d22]
        /lib/x86_64-linux-gnu/libpthread.so.0(+0x10330) [0x7ff96f81f330]
        [0x2000000]
    Debug info from gdb:
    Could not attach to process.  If your uid matches the uid of the target
    process, check the setting of /proc/sys/kernel/yama/ptrace_scope, or try
    again as the root user.  For more details, see /etc/sysctl.d/10-ptrace.conf
    ptrace: Operation not permitted.
    No threads.
    =================================================================
    Got a SIGSEGV while executing native code. This usually indicates
    a fatal error in the mono runtime or one of the native libraries
    used by your application.
    =================================================================
    Aborted (core dumped)
    ~~~

  * Throwing hundreds of errors and then no stack trace. Example error:
    ~~~
    10:43:50 - [LLUDPSERVER]: OutgoingPacketHandler loop threw an exception: Object reference not set to an instance of an objectSystem.NullReferenceException: Object reference not set to an instance of an object
    at OpenSim.Framework.ClientManager.ForEachSync (System.Action`1 action) [0x00000] in <filename unknown>:0
    at OpenSim.Region.Framework.Scenes.Scene.ForEachClient (System.Action`1 action) [0x00000] in <filename unknown>:0
    at OpenSim.Region.ClientStack.LindenUDP.LLUDPServer.OutgoingPacketHandler () [0x00000] in <filename unknown>:0
    Region (VPGsim1) # Stacktrace:
    Native stacktrace:
    Segmentation fault (core dumped)
    ~~~

  * Throwing a single error and terminating OpenSimulator (this was after 8 hours on a region with no simulation):
    ~~~
    19:53:08 - [APPLICATION]:
    APPLICATION EXCEPTION DETECTED: System.UnhandledExceptionEventArgs
    Exception: System.NullReferenceException: Object reference not set to an instance of an object
      at System.Threading.Timer+Scheduler.SchedulerThread () [0x00000] in <filename unknown>:0
      at System.Threading.Thread.StartInternal () [0x00000] in <filename unknown>:0
    Application is terminating: True
    Region (VPGsim) # [ERROR] FATAL UNHANDLED EXCEPTION: System.NullReferenceException: Object reference not set to an instance of an object
      at System.Threading.Timer+Scheduler.SchedulerThread () [0x00000] in <filename unknown>:0
      at System.Threading.Thread.StartInternal () [0x00000] in <filename unknown>:0
    ~~~


Googling suggests this may be due to an incompatible kernel and mono version.
  * The mono version is the latest from Ubuntu: 3.2.8. This is the same one installed on the old disk (I checked)
  * The kernel was the default one installed with Ubuntu 14.04. We didn't update it after installation. So I updated it with apt-get, restarted, and there was no change with the latest available kernel.
  * Without rebooting the old drive we can't determine which kernel we were using, but the machine wasn't behind on updates.
  * Even if the kernel was different, trying to roll back to an old kernel is more complicated than I'm going to attempt. We just got rid of all the past mess from doing these sorts of things on the workstation.
  * I also tried recompiling opensimulator using mono 3.2.8 (so it is compiled with the same version it is running). No change.
  * Nothing has changed in my vpgsim files. Nothing has changed in the mono environment settings in my .bashrc. Nothing has changed in mono itself. But clearly something in the underlying environment has changed. I can't even be certain it was running correctly before the reinstallation--it ran for 4 days but the machine was running so sluggishly that perhaps a slower pace of creating threads allowed it to function.
  * I originally installed these vpcsim files on the workstation when we were running Ubuntu 10.10, and it had issues that first year. The next year (2012) we had upgraded to 12.04 and it ran smoothly. The third year (2014) also ran smoothly but I don't know if we were running 12.04 or 14.04 at the time, and I don't know which mono versions were used in any of these.
  * Even though they haven't changed, I tried changing the mono environment settings in my .bashrc, increasing the MONO_THREADS_PER_CPU from 100 to 2048 (as used to be suggested by Opensimulator). No change.

# Solution: ???

At this point, VPGsim is dead. I talked to Paul Wolf and Marley Haupt about it. I'm going to continue to look for a solution, but they are looking for another activity to use in BIOL3065 now.  Options for the future:

  1. Let it die. Accept that it was an interesting experiment that has run its course... and move on.
  2. Try to determine what about the environment changed. I'm not sure what else to check, and the old drive is increasingly difficult to mount.
  3. See if simulations can still run on 12.04. This only buys one more year til the release is unsupported, and I can't roll the workstation back to Ubuntu 12.04, but perhaps it could run on virtual machines on the workstation or in the cloud.
  4. Try to get vpgsim working on a current version of Opensimulator. This will require changing viewers too, but Imprudence is suffering bit-rot as well. This option will take a significant time investment with no guarantee of success--and will probably need to be done again every few years.
