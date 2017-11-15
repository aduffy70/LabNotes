---
title: 32 to 64 bit Ubuntu upgrade
date: 2016-01-28T10:12:23+00:00
layout: post
categories:
---
Google Chrome is dropping support for 32 bit Linux in March 2016 so I need to upgrade crozier to 64bit. When I originally set it up on 10.10, 64 bit Ubuntu wasn't stable so I used 32 even though the hardware is capable of 64. It is time to upgrade:

  * I tested with a 64 bit startup USB and it works. I couldn't switch to Nvidia video card drivers but <del>I don't know if</del> this is a limitation of the startup disk <del>or a real issue</del>. The opensource driver worked with no visible difference and I no longer do anything graphically intensive (opensim) on this machine anyway.
  * I can't just upgrade the OS - I have to do a clean install, so I need a full backup:
    * Applications, Desktop, Downloads, fontconfig, Music, Public, R, and Templates folders are not needed.
    * Backups, Dev, Documents, and Dropbox are already on CAMEL as weeklybackups (which I will update just before upgrading)
    * I manually copied Pictures and Videos to CAMEL.
    * Data is too big to copy to CAMEL but it is on BACKUP and ExtDrive (attached to transcriptome)
    * Other things saved:
      * .bashrc
      * contents of sudo crontab (nothing in my user crontab)
      * .screenrc
      * .thunderbird
      * .nanorc
      * capturecam.sh, make\_backup.sh, make\_timelapse_gif.sh, and weeklybackupnew.sh from /usr/local/bin
      * .config/fontconfig (to make calibri and other Microsoft fonts display correctly)
      * .config/sublime-text (to restore my sublime settings).
  * Things reinstalled after upgrade:
    * ufw - set to deny all by default and allow tcp on 36022
    * openssh-server - edit sshd_config to listen on 36022, shorten timeouts, and not allow root logins.
    * synaptic
    * Chrome
    * Atom, Sublime
    * R, blast
    * Aliview
    * Calibri and other MS fonts (copied from ~/Library/Fonts on spore2)
    * gimp
    * ubuntu tweak - I also installed Unity tweak but it causes freeze-ups when you change default fonts.
  * Things to avoid this time - let's keep things as default, trim, and secure as possible:
    * Unipro Ugene?
    * mysql
    * apache
    * Google Earth
    * Skype
  * In the end, everything I needed to transfer over was on BACKPACK, so saving everything to CAMEL wasn't necessary but provided peace of mind. Now I know that the rsync of my homefolder to BACKPACK really is something I can restore from in an emergency.
  * Made a new rsync folder on BACKPACK so I can start mirroring my home folder again without overwriting the previous backup (in case there is something there I've forgotten that I need). I did delete the Data folder from the old backup to clear space on the drive (86Gb) and since I am sure I have everything from that copied over to the maindrive already. Updated my user crontab to start mirroring to BACKPACK again.
