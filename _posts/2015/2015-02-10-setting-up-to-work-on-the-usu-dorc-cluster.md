---
title: Setting up to work on the USU DoRC cluster
date: 2015-02-10T12:55:37+00:00
layout: post
categories:


---
  * Login node is login.rc.usu.edu, banner login info. Use the -Y or -X tag to enable X forwarding for some useful tools.
  * 2 GB space in my home drive (though I put a 3+ GB file there temporarily and it didn't complain) and 128 GB in my projects drive.  The home drive is backed up by DoRC, the projects drive is not.
  * I put a shortcut to my projects drive in my home directory.
  * Created a bin folder in my home directory for packages I install for myself and added it to my path.
  * Use .my.bashrc instead of .bashrc for aliases, path changes, etc.
  * Created a .nanorc file with my nano settings (softwrap isn't available on this old version).
  * Cloned my gbs-tools repo to my home directory and added it to my path.
  * Useful cluster info at <a href="https://wiki.rc.usu.edu/wiki/GettingStarted" target="_blank">https://wiki.rc.usu.edu/wiki/GettingStarted</a>
  * Created a folder for this project in my projects folder and put the input files I need there. Output will save there as well.
  * Submit jobs with sbatch and a .sh script of #SBATCH settings and shell commands. I don't know if it is necessary but I used the full file paths for everything in the sbatch script to be certain my output files would go to the correct folder for the project.
  * Monitor jobs with sview (requires X forwarding)
