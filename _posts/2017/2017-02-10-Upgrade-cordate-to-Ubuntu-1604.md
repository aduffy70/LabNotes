---
title:  Upgrade cordate to Ubuntu 16.04
date:  2017-02-10
layout: post
categories:

---
Support for Ubuntu 12.04 ends in April 2017, so I need to upgrade.

# Current layout:

# Strategy:

  * Keep the home partition intact (sda3) and just install the new operating system to the root partition (sda1).
  * I'll need to backup custom files from the root drive: apache sites, crontab settings, usr/local/bin files, etc.
  * I'm going to back up Martin's stuff on crozier but not reinstall it. He hasn't logged into the machine in the last year.
  * I think I'm going to move the vpcsim user stuff back to my user. I set that up separately so Martin could manage it when he took over on the ISIT project but there is no need to keep it separate now.

# Process:

  * I already have a nightly rsync of my home folder on cordate to crozier but it excludes the .ssh folder for security reasons. I ran that backup to include .ssh to make sure I have a copy if something goes wrong.
  * Backed up vpcsim and schimar user folders to crozier.
  * Backed up misc items to crozier:
    * my personal crontab settings (there were no custom root crontab settings)
    * my backup script from /usr/local/bin (everything else there was installed by the system... mostly ruby gems for jekyll)
    * my enabled apache site files (got the _files_ from the sites-available folder, not the _symbolic links_ from the sites-enabled folder... that would have been bad)
    * files from /etc/... fstab, sshd_config, the output of 'ufw status', the outpu of 'fdisk -l'
  * Boot from ubuntu server install usb
  * When it asked about partitions, chose the option to unmount disks, then told it which partition to use for /, home and swap. Told it not to erase home or swap.
  * Told it to set up a LAMP server and OpenSSH server in addition to the default installation.
  * Ran updates and restarted
  * Enabled ufw, set default deny and opened ssh and http ports
  * Edited sshd_config with my changes
  * Checked that fstab matched what it was before
  * Restored my apache site files
    * Have to add "Require all granted" to the /Directory section since this is now required for Apache 2.4
    * There is also a bug in mod_rewrite where if you are using rewrite rules in .htaccess, they fail if Option MultiViews is in the Directory section... delete it.
    * Have to add .conf to the end of the files now too.
    * Enabled and tested my websites.
  * Restored my cordatebackup.sh script to /usr/local/bin and tested it
  * Reinstalled rawdog from ubuntu repos and tested
  * Restored my crontab settings.
  * Restored the cyberlearning.usu.edu website:
    * Created a cyberwp database in mysql and restored to it from the last monthly backup
    * Created a cyberwp user and granted permissions on the cyberwp database
    * tested that the site works
  * Get jekyll working:
    * Followed my jekyll installation instructions to install the correct version of ruby and jekyll. Jekyll failed to build with an error about ffi.h which I solved by installing build-essential and gcc with apt-get. Then nokogiri failed with an error about zlib which I solved by apt-getting zlin1g-dev



# Remaining issues:
  * Haven't moved VPCsim files back to my user space. They are in the home folder of a (no longer existing) vpcsim user.
  * Weirdness in the VPGsim parameters form. The form should load with defaults of None for all the radio buttons but they are blank. Difference between php versions? Low priority since the simulations aren't stable on current Ubuntu versions anyway.
  *
