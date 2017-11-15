---
title: VPCsim development notes
date: 2012-06-08T23:59:47+00:00
layout: post
categories:
  - science ed vpcsim
---
Transferred from other note files to my lab records (better late than never!)

**Todo:**

  * DONE- Additional data types: % biomass by species
  * DONE- Reduce size of land area and matrix to 1km x 1km and 100X100 plants instead of 2km x 2km and 150X150 plants (This will decrease waiting times, make visualizing the entire area easier - particularly for small plants, and increase the density of plants a bit.)
  * DONE- Redo the map selection tool on the last page of the form using javascript.  The html version is slow and only really works well on google chrome.
  * DONE- Rename plants to represent local plant species and set appropriate plant parameters:
      * "Alder" = Alder - Alnus tenuifolia
      * "Bamboo" = Aspen - Populus tremuloides
      * "Grass" = Starthistle - Centaurea solstitialis
      * "Banyan" = Juniper - Juniperus scopulorum
      * "Bush1" = Serviceberry - Amelanchier utahensis
      * "Bush2" = Sagebrush - Artemesia tridentata
      * "Bush3" = Sumac - Rhus glabra
      * "Bush4" = DELETE
      * "Bush5" = DELETE
      * "Bush5a" = DELETE
      * "Bush6" = DELETE
      * "Bush6a" = DELETE
      * "Bush7" = Wildrose - Rosa woodsii
      * "Fern" = Fern - Pteridium aquilinum
      * "Maple" = Maple - Acer grandidentatum
      * "Mimosa" = Elderberry - Sambucus nigra
      * "Palm" = DELETE
      * "CotsPine" = Pine - Pinus ponderosa
      * "Sycamore" = Cottonwood - Populus trichocarpa
      * "Willow" = Willow - Salix fragilis

**Feedback from the teacher leader mtg:**

  * DONE- Help screen with movement instructions
  * DONE- Fix timestamp - Harrison and I ended up with the same timestamp.
  * DONE- Put simulation ID on plots and plot type in window title
  * DONE- Use 'year' not 'step'.
  * DONE- Cap HAT at 150.
  * DONE- We don't need to be able to change the terrain.
  * DONE- Remove the obsolete trees and adjust sizes of the tree parameter matrices to match.
  * DONE- Make the default tree choices on the webform match the default tree choices inworld.
  * DONE- Decrease the size of the world and number of plants to improve speed, but reduce them disproportionally so we end up with a higher density of plants.
  * DONE- Make position relate to real-world coordinates?  Added N and W to the coordinates.  I think anything beyond this (converting to lat/long for example) would just make them confusing.
  * DONE- Lose the grass - have a dirt/rock or plain tan background.
  * DONE- Make units explicit everywhere.
  * DONE- Make a terrain map for the webform (the 3rd page) that represents the terrain we are actually using in Unity.
  * DONE- Clean up GUI layout to make it clear what the various subsections are for.
  * DONE- Popups to let you know it is thinking or at least error popups.
  * DONE- Add a Compass or minimap?
  * DONE- Plot buttons give no feedback if a simulation isn't loaded.
  * DONE- Get Biomass plots working!
  * DONE- Which happens least often?  Update() or onGUI()?  Move the compass calculations to the one that happens least. Answer: Update()
  * DONE- Help window and log windows interfere with each other.  Need to assign different window ID #s?
  * DONE- Can we have fewer than 5 species? It would be nice to do things like run with 4 species and then add a 5th to compare.
  * DONE- Resize plants
  * DONE- If the default sim is loaded and you press the load button, have it reload the default sim instead of complaining about an invalid sim id.
  * DONE- Draw the map showing starting community on the Show Parameters page.
  * DONE- Problems loading parameters on Windows machines 'unpack fail'.
  * DONE- Problems displaying plots on non-Firefox viewers.
  * DONE- On Windows only the first plot we ask for opens, then nothing happens if we push a plot button again (This is a bug in Chrome/webkit but there was a workaround.
  * DONE- Problems with page 3 (now page 2) of webform on non-Firefox browsers.
  * DONE- Define the plant characteristics and tune the model.
