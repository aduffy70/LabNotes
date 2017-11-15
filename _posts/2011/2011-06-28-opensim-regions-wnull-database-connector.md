---
title: Opensim regions w/NULL database connector
date: 2011-06-28T23:58:20+00:00
layout: post
categories:

---
I tested running an opensim region attached to ScienceSim with my VPCsim module using the NULL database connector instead of MySQL.

  * Making the change only required changing the db connection section in GridCommon.ini
  * Deleting objects is much faster - Updates sweep across the landscape almost instantaneously
  * The basic region content can be automatically loaded from an OAR file on startup by adding a 'load oar' command to startup_commands.txt
  * Unfortunately, on ScienceSim the region/estate ownership defaults to Master ScienceSim (it does this for any new region, but normally I can change the ownership directly in MySQL). Emailed SciSim-support to ask if this is a problem with my configuration or expected behavior.
      * I have set the Master Avatar name and UUID in my Regions.ini file - verified that the UUID is correct
      * There is a separate estate connection setting, but it is part of the MySQL connector settings so I don't think you can use no database for region storage and a MySQL database for estate storage
