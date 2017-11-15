---
title: VPGsim activity prep
date: 2011-09-27T13:46:09+00:00
layout: post
categories:
  - science ed vpgsim
---
  * Created a vpgTerrain opensim region module to let students change terrain from within the region.  I started with the vMeadow module and stripped out everything not related to changing terrain.  From the client you can now chat /18 <any\_integer> to load a file from bin/terrain/ with the name Terrain<any\_integer>.png.  It handles it gracefully if the file doesn't exist or they put anything other than an integer. To add new terrains, just save them as bin/terrain/Terrain<any_integer>.
    * I set up 10 terrains for the students:
      * Terrain1.png - Flat region just above sea level
        * Terrain2.png - Flat areas at low and high altitude connected by a smooth slope
        * Terrain3.png - 2 round 80meter diameter dots just above sea level
        * Terrain4.png - 25 small, square islands randomly distributed
        * Terrain5.png - 1 large island with the exact same area as the 25 islands in Terrain4.png combined
        * Terrain6.png - My old default fernseed23 archipelago with one large island with a flat top mountain, one medium height and size island, and one small, low island (heavily modified from the Linden Labs terrain set).
        * Terrain7.png - The island with a ring of mountain peaks around a central lake (slightly modified from the Linden Labs terrain set).
        * Terrain8.png - USGS 'Smithfield' .dem data
        * Terrain9.png - Mount Logan and Logan Canyon from USGS data
        * Terrain10.png - Dry Lake (Sardine Canyon) from USGS data
    * I tried unsuccessfully to generate terrain for Green Canyon (at Paul Wolf's request).  In the past I used data from the USGS seamless map viewer but the OSGrid forum entry with a tutorial on how to process those files into terrain no longer exists and I couldn't find it elsewhere.  I can use Diva Canto's Terraingen tool to generate terrain from .dem files, but the .dem data for 'Weston' that includes Green Canyon is not available (404 error).  Every .dem for Cache County is available but that one!
  * Added a kill command to the vpgManager module so students can clear an island between runs or if they make a mistake and need to restart.  I've been doing this from the console but they will not have access.  Other options I considered were:
    * Email me when they need a restart (inconvenient)
    * Change parameters so all plants die (won't refresh things if the population has gotten large). I implemented this as well, and it could be used in conjunction with the kill command in the vpgManager: First load the 'killall' parameter set, wait for the plants to die, finally issue the kill command to remove all the dead plants.
    * Manually delete living plants (won't refresh if there are large numbers of dead plants, difficult or impossible if the population size is large, and potential for unexpected issues if they accidentally delete any of the invisible dead plants)
  * I made a gradient and random soil file to replace the salinity and fertility files.  Kept the patchy drainage soil file.  All 3 are publicly accessible at vpgsim.usu.edu/fs-soil/
    * Gradient\_EW\_Soil.txt
    * DefaultSoilY.txt
    * RandomSoil.txt
  * I set sane(?) defaults for many of the virtual plant parameters that are not related to selection and genetics and hid them on the Parameter Adjustment Form.  I hid:
    * Cycle time (300 seconds)
    * Gametophyte neighborhood (0, 2, 0)
    * Sperm neighborhood (2.5)
    * Sporophyte neighborhood (0, 4, 4)
    * Sporophyte weight (0, 1, 1)
    * Neighbor shape (0, 0.85, 0.85)
    * Dispersal shape (5.71, 5.71)S
  * I changed the plot on the dispersal curve spreadsheet so it can be interpreted as a plot of the probability that a spore will disperse more than a given distance.  Previously it was a plot of the distance that a spore would disperse based on which random number between 0 and 300 was chosen.  Now it looks and feels more like a 'dispersal curve'.
  * I put the three curve calculators (soil fitness, altitude fitness, and dispersal) on a single spreadsheet called FitnessAndDispersalCalculator.xls.  Tried doing this as a Google Spreadsheet but they don't allow you to set the axis min and max values so the plots wouldn't look right (there is a place to set them, but if your data extends beyond it overrides your choice!).
  * Created a cheatsheet of commands for controlling the system in Google Docs called VPGsim Command Cheatsheet
  * Added a page to the course website with links to:
    * Log files (on transcriptome)
    * Plots (on transcriptome)
    * About VPGsim (Google Doc)
    * Parameter adjustment form (on virtualbiology.usu.edu)
    * Planting form (on virtualbiology.usu.edu)
    * FitnessAndDispersalCalculator.xls (download from the course site)
    * VPGsim Command Cheatsheet (Google Doc)
    * VPGsim Tutorial (Google Doc)
  * Setting up 15 regions on transcriptome
    * copied ss-vpgsim02 from cordate to transcriptome
    * deleted OpenSim.log and assetcache
    * created mysql database for the estates (regions are using null database connector)
    * Pointed to the new estate database in GridCommon.ini
    * Copied soil files into the local file structure and pointed to it in vpgsim.ini
    * Started the first region, shut it down, and manually changed the estate owner in the database to my UUID
    * Set the sun to fixed midday in the client Estate settings (thought this would have to be done in each region, but it carried over).
    * For each region:
      * Change port in OpenSim.ini
        * Change region name, location, port, and UUID in Regions.ini
        * Change the instance_tag in vpgsim.ini
        * Change the maturity rating to PG in the client Estate settings
  * Setting up 15 accounts on ScienceSim (VPGsim Guest1 - VPGsim Guest15)
    * 1 - 4 were already created and needed passwords changed and avatars tweaked
    * For each account
      * Create account
      * Login
      * Set home to correct region
      * Get a HUD and wear it
    * VPGsim Guest4 has a problem.  I tried to create it twice and now it can't log in to the grid (though it can log into the admin tool).  Emailed scisim-support.  Password is currently testtest.
    * Created slips with login info to handout
  * Checked with Todd Campbell and removing a question from the Content pre/post quiz is not a problem.
  * Modified the old VPCsim workshop instructions into Handout-IntroToScienceSimAndVPGsim and linked it to the course website
  * Made printouts of activity handouts, pre-assessments and IRB notification sheet
  * Setup Imprudence on 3 of the DRK12 project computers (the other 2 I wanted to use have dead backlights in the screen).
  * Started the sample populations on each island
    * Terrain 4 (25 small scattered islands)
    * Default parameter set (no selection, all neutral markers) /15 1317149842
    * South half of region: 200 spores with 11111 and 200 sporophytes with 11111 11111
    * North half of region: 200 spores with 00000 and 200 sporophytes with 00000 00000


Still TODO:
  * Assignment instructions
