---
title: Prep for VPGsim activity in BIOL3065
date: 2012-09-06T13:55:29+00:00
layout: post
categories:
  - science ed vpgsim
---
  * 22 students in groups of 3 or 4  and a demo region = 7 regions
  * Created a folder on transcriptome to hold them-  GenLabActivity2012/
  * Notified Mic Bowman that I'll have students using my guest accounts in ScienceSim over the next month
  * Upgrade regions to latest stable OpenSim release (0.7.4)
      * I have changes to my custom modules on GenLabActivity2011/vpgsimdemo that I need to grab as a patch
      * <del>I need to start with ss-vpgsim02OLD on cordate since none of the repos on transcriptome have links back to my master repo.  Get the patch applied there, then upgrade to latest opensim and fight through any changes, finally copy that to transcriptome and set up regions for the activity. </del>
      * That got messy trying to upgrade opensim.  Line ending issues were killing me.  Clone a new opensim repo.  Apply my modules on top of it (including manually patching a couple of opensim files) and start from there.  It means I lose my git history, but it is a royal mess anyway.  Long-term solution is to get to where I don't have to patch opensim files so i can just maintain my modules in a separate repo.
          * All of this is on transcriptome...
          * Set global git settings to not change line endings (git -global config core.autocrlf false)
          * Clone opensim repo
          * Checkout latest stable release - git checkout 0.7.4 - into a new branch
          * Prebuild and compile - no errors
          * Copy over OpenSim.ini from last year
          * Copy over Regions/Region.ini from last year
          * Copy FlotsamCache.ini.example to FlotsamCache.ini (no other changes)
          * Copy over GridCommon.ini from last year
          * Run the region and verify that I can log in.  I already own the estate and region (using same EstateDB from last year) so no manual database changes are needed.
          * Add my region modules, interfaces and supporting files and then patch core opensim files
              * cp -r ../../../GenLabActivity2011/vpgsimdemo/addon-modules/vpg* ./
              * cp ../../GenLabActivity2011/vpgsimdemo/OpenSim/Region/Framework/Interfaces/Ivpg* OpenSim/Region/Framework/Interfaces/
              * cp -r ../../GenLabActivity2011/vpgsimdemo/bin/terrain bin/
              * cp -r ../../GenLabActivity2011/vpgsimdemo/bin/vpgsimdefault.oar bin/
              * cp -r ../../GenLabActivity2011/vpgsimdemo/bin/startup_commands.txt bin/
              * cp -r ../../GenLabActivity2011/vpgsimdemo/bin/addon-modules/vpgsim bin/addon-modules/
              * Copy over vpg functions in OpenSim/Region/ScriptEngine/Shared/Api/Implementation/OSSL_Api.cs (insert at line 404, just before OSSLDeprecated)
              * Copy over vpg functions in /home/aduffy/GenLabActivity2012/vpgsimdemo/OpenSim/Region/ScriptEngine/Shared/Api/Interface/IOSSL_Api.cs (insert at line 119 right before //OpenSim Functions)
              * Copy over vpg functions in /home/aduffy/GenLabActivity2012/vpgsimdemo/OpenSim/Region/ScriptEngine/Shared/Api/Runtime/OSSL_Stub.cs (insert at line 64 before osSetRegionWaterHeight)
              * Update vpgVisualizationModule to use UpdateTextureEntry(tex.GetBytes()); instead of UpdateTexture(tex); (This is due to a change in opensim that I already had to fix on the Sierpinski Tree module back in December 2011)
              * Compile (success!) and start running simulations to look for other issues...
