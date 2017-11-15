---
title: Upgrading Ubuntu on crozier
date: 2013-02-05T23:59:30+00:00
layout: post
categories:

---
Upgrade from 10.04 to 12.04.  Used a new hard drive so I never risked deleting anything:

  1. Installed new harddrive and disconnected old ones (to avoid risk of accidentally formatting).
  2. Installed Ubuntu 12.04 32-bit from cd using all defaults (including default partitioning scheme)
  3. Ran apt-get update and apt-get upgrade
  4. Enable ufw, set to deny all by default and allow tcp on 36022
  5. Install openssh-server, edit sshd_config to listen on 36022, shorten timeouts, and not allow root logins. Restart ssh.
  6. Reinstall the old disks and copy over files and settings to the new harddrive.  Be sure to get the .ssh folder so keys will still work, and .thunderbird so all my emails are copied over.
  7. Install software:
      1. Dropbox
      2. Gimp
      3. Google Earth
      4. Skype
      5. Geany
      6. Sublime Text 2 (and enter license)
      7. google-talk plugin
      8. biopython
      9. R
     10. git
     11. chrome
  8. Work through system settings menus to get Ubuntu the way I like it
  9. Remove old disk and store as a backup.
 10. Setup my automatic backups to BACKPACK again.
