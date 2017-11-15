---
title: Installing Ubuntu on a Macbook Pro
date: 2011-07-26T03:32:13+00:00
layout: post
categories:

---
Installed Ubuntu 11.04 32-bit Desktop to dual boot with OSX on spore (a Macbook Pro 7,1):

Followed instructions at <https://help.ubuntu.com/community/MactelSupportTeam/AppleIntelInstallation>

  1. Created a 67 GB Windows partition using Bootcamp
  2. Installed rEFIt (this makes the Mac startup at a boot menu where I can choose the operating system to use)
  3. Booted from the LiveCD and chose 'Try Ubuntu'
  4. Used gparted partition tool to create a 3GB swap (/dev/sda3) and a 64 GB ext4 partition (/dev/sda4).
  5. Installed Ubuntu using the manual partitioning option
      1. Used /dev/sda4 for root
      2. Placed the grub bootloader on that partition too.
  6. The instructions talk about needing to use rEFIt to sync the partitions.  I did not get the error they said I would and rEFIt said the partitions were already in sync.  Trying to boot to Ubuntu did freeze at the grey Penguin screen the first two times but worked after the 3rd restart.

Followed the instructions at <https://help.ubuntu.com/community/MacBookPro7-1/Natty>

  1. Had to connect to wireless before I could do any of the apt-get commands.  Wireless worked out of the box and I was able to log into my home wireless network.
  2. Loaded the pae kernel to use the full 4 gig of memory
  3. Added the mactel PPAs and installed support for lcd backlight
  4. Changed grub settings so reboot would work properly (though it didn't hang on shutdown like the instructions said it would)
  5. Didn't run the commands to set up airport since wireless was already working
  6. Didn't edit the xorg.conf file for screen brightness settings because there was no xorg.conf file.  Need to look into this.
  7. Adjusted levels in alsamixer so volume was at a higher level

Other miscellaneous changes:

  1. Activated the proprietary nvidia drivers so I can use Unity
  2. Installed ccsm so I can adjust Unity settings
  3. Followed the instructions on this page to install multitouch drivers <https://help.ubuntu.com/community/MacBookPro7-1/Maverick>
  4. There is a missing step to get the backlight controls (F1 & F2) working... Do the steps in the Natty Macbook Pro 7,1 page, but also add mbp-nvidia-bl to the bottom of /etc/modules
  5. To bypass the grub menu (since we are using rEFIt for a bootloader) I edited /etc/default/grub so the timeout section looks like this

<pre dir="ltr">GRUB_DEFAULT=saved
#GRUB_HIDDEN_TIMEOUT=0
#GRUB_HIDDEN_TIMEOUT_QUIET=true
GRUB_TIMEOUT=0</pre>

  1. Added my aliases to .bashrc
  2. Created .nanorc with my nano settings
  3. Installed and configured git
  4. Installed Gnome Do, disabled Alt-Space as a shortcut for the main menu and added it as the Gnome Do trigger. (Super-space will not work because Unity hogs the Super key)
  5. Installed Imprudence
