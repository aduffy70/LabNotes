---
title: Final Prep for VPGsim activity in Biol3065
date: 2012-09-13T12:43:35+00:00
layout: post
categories:
  - science ed vpgsim
---
  * Outlined class time - started with outline from last year
  * Tried to pickup extra laptops from Max Longhurst - not in his office?
  * Set up backup regions (vpgsim8, 9, & 10) on cordate - we won't have automatic plots, but if we have to fall back to these regions we can plot manually.
      * Create a mysql database called opensim_estates and give opensim user permissions on it (just need to do this once per machine)
      * Update the listening port in OpenSim.ini and allow access to that port in ufw
      * Update the Regions.ini file with the region name, UUID, location, port, and IP (129.123.16.53)
      * Update the vpgsim.ini file with the region identifier, and path to store logs and plots (can be accessed at vpgsim.usu.edu/fs-logs
      * Run region, login and test to make sure plants grow and logs update.
  * Packup paperwork, laptop with dongle, and thumbdrives with Imprudence files and head over!
