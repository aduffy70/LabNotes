---
title: Google AppEngine changes
date: 2013-02-12T13:39:59+00:00
layout: post
categories:
---
  * Migrated my Google AppEngine apps from the deprecated Master/Slave datastore to the High-Replication datastore following [these instructions][1].  All of the critical iSIT-related apps were created using the H-R datastore so this only affected my notepad, tasklist, and visitlogger tools.  Some of the old Opensim-based VPCsim tools were using the M/S datastore, but I deleted them from GAE last month when I cleaned up obsolete projects.  If I ever need to use those again they will need to be created as new projects in GAE anyway so they will get created using the correct datastore.
  * Converting VPCsim-parameters webapp to run on django instead of GAE

[1]: https://developers.google.com/appengine/docs/adminconsole/migration
