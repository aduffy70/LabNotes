---
title: Conference call for WinterSim paper
date: 2012-05-07T13:09:09+00:00
layout: post
categories:
  - science ed vpgsim
---
Attending: Mic Bowman, Kitty Liu, Jerry Talton, Warren Hunt

  * We are limiting the focus of the paper to not emphasize creating geometries or content.  Instead we are focusing on generalizing the tools for creating behaviors to make them applicable beyond a single application.
  * I shared a schematic of the VPGsim system in the same format as the general schematic in the intro to the paper.  Looking at this it is clear that the Fern Simulation-Specific modules could have been created more generically to allow their reuse for other simulation types.  I'm not sure that the web forms could have been more generic.  The plotting system could have been - in VPCsim I just used an existing plotting library.  The scripted ferns kind of have to be specific but perhaps the script could be more modular so pieces could be recycled or some of the hard coded settings and pathways could have been made configurable.

    ![ FernLand Schematic ]( {{site.image_path}}wp-content/uploads/2012/05/FernLandSchematic.png )

  * I need to write (or rehash from my previous writings):
    * A description of what the system does
    * A description of the current architecture (to go with the schematic)
    * A summary of the problems encountered, or lessons learned by doing it this way
    * Speculation on how it could be converted to a more generalized, reusable architecture.
    * Talk about related simulation work (in or out of VW's) and how this could apply there.
