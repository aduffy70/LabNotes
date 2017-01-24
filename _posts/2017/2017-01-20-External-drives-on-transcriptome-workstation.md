---
title:  External drives on transcriptome workstation
date:  2017-01-20
layout: post
categories:

---
External drives have been fouled up twice on transcriptome since we changed admins. Here are the important drives:

  * 6GB drive (Disk identifier: 0x00027a6e) currently at /dev/sdh1 should be mounted to /media/skinosian/arxive
    * This is where my ~/ExtDrive shortcut points and it also contains the folder pointed to by ~/salvinia
    * Added it to fstab to automount and restarted machine to test.
    * /media/skinosian and /media/skinosian/arxive have 777 permissions so anyone can use this drive
  * 2G drive (Disk identifier: 0x000081a7) currently at /dev/sdf1 should be mounted to /media/aduffy/BigDisc (used to be /media/skinosian/BigDisc)
    * This is my ~/BigDisc
    * Added it to fstab to automount and restarted machine to test.
    * /media/aduffy is owned by root and 755 (the defaults).
    * /media/aduffy/BigDisc is owned by me and 700 so only I can use this disk

I have no files on the other external drives.
