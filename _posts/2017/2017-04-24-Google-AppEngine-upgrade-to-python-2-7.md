---
title:  Google AppEngine upgrade to python 2.7
date:  2017-04-24
layout: post
categories:
  - science ed drk12
  - science ed vpcsim
  - science ed vpgsim
---
Google has deprecated python 2.5 for Google AppEngine, so all my tools will be shut down 2017-05-16 unless I upgrade to python 2.7. This requires some fairly significant changes so I am only upgrading projects I really need:

  * my tasklist and notelist tools - Unused. Shut them down.
  * vpgsimplots - vpgsim is broken on current Ubuntu versions. Shut it down.
  * vpcsim - VPCsim is still being used by teachers. Upgrade it.
  * diversitydb - No new data since 2014-09. Shut it down.
  * visitloggerga-hrd - Unused. Shut it down.

# Upgrading VPCsim App

It wasn't nearly involved as I was afraid it would be:
  * In the app.yaml file I changed the runtime to python27, added a threadsafe:false flag and a section to specify the webapp2 version.
  * In my main script I changed all references to webapp to webapp2 and added a version number to the webpage names so I can quickly see whether the new version is being served.
  * Tested locally on spore2 using the GoogleAppEngineLauncher.
  * Deployed from the Launcher.
  * Used the "Dashboard" button on the Launcher to get to the admin console. Migrated traffic from version 1 to version 2. It shows there as using the correct python 2.7 runtime.
  * Tested from within VPCsim. It is bringing up the new version (v2 in the page name) and seems to function correctly.
  * Merged all changes from my working git branch to master and pushed to GitHub.
