---
title:  External drives on transcriptome workstation
date:  2017-01-20
layout: post
categories:

---
External drives have been fouled up twice on transcriptome since we changed admins. Here are the important drives:

  * 6GB drive (Disk identifier: 0x00027a6e) currently at /dev/sdh1 should be mounted to /media/skinosian/arxive
    * This is where my ~/ExtDrive shortcut points and it also contains the folder pointed to by ~/salvinia
  * 2G drive (Disk identifier: 0x000081a7) currently at /dev/sdf1 should be mounted to /media/skinosian/BigDisc
    * This is my ~/BigDisc

I have no files on the other external drives.

# Improvements?

  * Add these to the fstab so they automount on reboot
  * Why are these mounting to a user's space on /media (previously mschilling, now skinosian)? Can I mount them to a neutral space so they are more generally available without 777 permissions? At a minimum, can I mount BigDisc to MY user space so I can give myself full access while limiting other's ability to write/delete/cause problems?
