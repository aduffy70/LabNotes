---
title: ScienceSim senate mtg
date: 2011-06-21T09:21:54+00:00
layout: post
categories:

---
First meeting after switching to Tuesdays so little to discuss.

Bullet Physics provides drastic improvements over ODE.  Mic will be testing on plazas. Doesn't really affect my work though it opens up possibility of using physics rather than avoiding it.

Before the meeting I got a 'serverless grid' setup working using Diva distribution of opensim.  Once I had one instance working normally I copied the entire folder, changed the names, ports, locations, and uuids in the Regions file and the http listener port in the MyWorld.ini (Diva's equivalent of the OpenSim.ini file) and started it up.  Both instances appeared on the map and I could teleport between them.  I haven't tried placing them adjacent so I don't know if you can see/walk between the instances.  I think now that I understand how to do this with the Diva distro I could do the same thing with regular opensim standalones. The Wifi interface for managing users also worked out-of-the-box.
