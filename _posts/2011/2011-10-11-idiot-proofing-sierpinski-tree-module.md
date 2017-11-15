---
title: "'Idiot-proofing' Sierpinski-Tree module"
date: 2011-10-11T12:43:16+00:00
layout: post
categories:

---
  * Made the maximum # of steps that the pyramid can be advanced a configurable option so I can prevent visitors from crashing the region by generating a pyramid with 390k+ prims:
      * 1=5 prims,
      * 2=25 prims,
      * 3=125 prims,
      * 4=625 prims,
      * 5=3125 prims, (this is what I am using on the FernSeed Region Modules region in ScienceSim)
      * 6=15625 prims, (this is the module default - any region on decent hardware should be able to handle it)
      * 7=78125 prims,
      * 8=390625 prims, etc...
  * If you attempt to advance the pyramid beyond the maximum, it will start over with a single prim.
  * Added a check to make sure users can't enter a command before the previous one has completed.  This could be a problem if they started a new pyramid while one was being deleted.  Both commands would be trying to modify the same list of prims at the same time.
  * These changes have been implemented on my ScienceSim demo region and pushed to GitHub.
