---
title:  Upgrade cordate to Ubuntu 16.04
date:  2017-02-10
layout: post
categories:

---
Support for Ubuntu server 12.04 64 bit ends in April 2017, so I need to upgrade to Ubuntu server 16.04 64 bit.

# Strategy:

  * Keep the home partition intact (sda3) and just install the new operating system to the root partition (sda1).
  * Backup and restore custom files from the root drive: apache sites, crontab settings, usr/local/bin files, etc.
  * Backup but don't restore Martin Schilling's files. He hasn't logged in or made changes in a year.
  * Transfer vpcsim user files back to my user. I moved it so others could maintain it but that never happened.

# Process:

  * I have a nightly backup of my cordate home folder on crozier but it excludes the .ssh folder for security reasons. I ran that backup to include .ssh so I have a copy if something goes wrong.
  * Backed up vpcsim and schimar user folders to crozier.
  * Backed up misc items to crozier:
    * my personal crontab settings (there were no root crontab settings)
    * my backup script from /usr/local/bin (everything else there was installed by the system)
    * my enabled apache site files (got the files from the sites-available folder, not the symbolic links from the sites-enabled folder)
    * files from /etc (fstab and sshd_config) and the output of 'ufw status' and 'fdisk -l'
  * Boot from ubuntu server 16.04.1 install usb
  * When it asked about partitions, chose the option to unmount disks, then told it which partitions to use for /, home and swap. Told it not to erase home or swap.
  * Told it to set up a LAMP server and OpenSSH server in addition to the default installation.
  * Ran updates and restarted
  * Enabled ufw, set default deny and opened ssh and http ports
  * Edited sshd_config with my changes
  * Checked that fstab matched what it was before
  * Restored my apache site files
    * Added "Require all granted" to the /Directory section since it is required for Apache 2.4.
    * Somehow I had global settings to not require .php suffixes when requesting files, but I can't see how to do that again. It only affects a couple of my sites so I added .htaccess files with mod_rewrite rules to those sites.
    * There is a bug in mod_rewrite where if you are using rewrite rules in .htaccess, they fail if Option MultiViews is in the Directory section... deleted it.
    * Site files are now required to end in .conf. Renamed them all.
    * Enabled and tested my websites.
  * Restored my cordatebackup.sh script to /usr/local/bin and tested it
  * Reinstalled rawdog from ubuntu repos and tested
  * Restored my crontab settings.
  * Restored the cyberlearning.usu.edu website:
    * Created a cyberwp database in mysql and restored to it from the last monthly backup
    * Created a cyberwp user and granted permissions on the cyberwp database
    * tested that the site works
  * Got jekyll working:
    * Followed my jekyll installation instructions to install the correct version of ruby and jekyll. Jekyll failed to build with an error about ffi.h which I solved by installing build-essential and gcc with apt-get. Then nokogiri failed with an error about zlib which I solved by apt-getting zlin1g-dev. Then I got errors because the gem versions on this machine are slightly different from the ones in the lock file. I solved that by removing the lock file from the repo so each machine that tries to build the site can generate one based on the gem versions that it has.
  * Moved the vpcsim files to my user space (public_html5), updated the apache files to point to the new location and deleted the vpcsim home directory
  * Moved a copy of Martin's wordpress database into his backup folder on crozier with the wordpress site files to make sure I have a copy of those together and then deleted the schimar home directory.
  * Five days later, things seem to be working correctly. Backups to crozier are working and websites are up and running.

# Remaining issues:

  * Weirdness in the VPGsim parameters form. The form should load with defaults of None for all the radio buttons but they are blank. Difference between php versions? Low priority since the simulations aren't stable on current Ubuntu versions anyway.
