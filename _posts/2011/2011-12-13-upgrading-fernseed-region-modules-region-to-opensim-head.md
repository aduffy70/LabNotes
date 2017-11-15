---
title: Upgrading Fernseed Region Modules region to Opensim head
date: 2011-12-13T23:58:17+00:00
layout: post
categories:

---
This upgrade broke all of my region modules except for the Chat-Logger:

  * Visit-Logger module broke because Justin Clark-Casey removed the public delegate OnMakeRootAgentDelegate from EventManager.cs.  That means code like this will no longer compile:
    <pre>m_scene.EventManager.OnMakeRootAgent += new EventManager.OnMakeRootAgentDelegate(OnVisit);</pre>

    I asked about it at the OpenSim developer's meeting on OSGrid and according to Justin, the change was intentional because the delegate is no longer needed.  The same result can be accomplished using a different (and preferred method):

    <pre>m_scene.EventManager.OnMakeRootAgent += OnVisit;</pre>

  * CellularAutomata, ConwayGOL, and Sierpinski-Tree modules all broke because the UpdateTexture(TextureEntry tex) method was removed from SceneObjectPart.cs.  This method was just a wrapper that called UpdateTextureEntry(byte[] textureEntry) so I was able to fix things by replacing
    <pre>sog.RootPart.UpdateTexture(tex);</pre>

    with

    <pre>sog.RootPart.UpdateTextureEntry(tex.GetBytes());</pre>

  * I made all these changes on the copies of the modules running on the Fernseed Region Module region on plastid but I haven't pushed any of them back to the GitHub repositories.  This will require updating all the readme's to show which versions of OpenSim work with the updated modules and which require the old modules.  Alpha software challenges!
