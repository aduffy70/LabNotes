---
title: Updating crozier
date: 2013-02-07T12:40:59+00:00
layout: post
categories:

---
  * Finished (I hope?) upgrading crozier.
      * Got backups working again by setting up BACKPACK to automount on startup (in /etc/fstab), copying the make_backup.sh script from the old crozier harddrive to the new /usr/local/bin and setting up the root crontab job.  I made a slight modification to the script - the rsync command was setup to give verbose output but we redirect the output to dev/null, so I changed the script to not be verbose... this may help it run faster.
      * Removed the old crozier harddrive, moved the new one to a more secure mounting location and sealed up the case.
      * Added better icons to the Google Chrome apps for Google Calendar, Gmail (my phone), Tasklist, and Notepad.  The files Chrome creates for these that then get linked to in the Unity Launcher are located in ~/.local/share/applications/.  When you change the icon in the Properties popup, it doesn't look like it worked unless you also change the file permissions from 600 to 700.
