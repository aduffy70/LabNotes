---
title:  External drives on transcriptome workstation
date:  2017-01-20
layout: post
categories:

---
# Restoring access to drives

External drives have been fouled up twice on transcriptome since we changed admins. Here are the important drives:

  * 6GB ext4 drive (Disk identifier: 0x00027a6e) currently at /dev/sdh1 should be mounted to /media/skinosian/arxive
    * This is where my ~/ExtDrive shortcut points and it also contains the folder pointed to by ~/salvinia
    * Added it to fstab to automount and restarted machine to test.
    * /media/skinosian and /media/skinosian/arxive have 777 permissions so anyone can use this drive
  * 2G ext4 drive(Disk identifier: 0x000081a7) currently at /dev/sdf1 should be mounted to /media/aduffy/BigDisc (used to be /media/skinosian/BigDisc)
    * This is my ~/BigDisc
    * Added it to fstab to automount and restarted machine to test.
    * /media/aduffy is owned by root and 755 (the defaults).
    * /media/aduffy/BigDisc is owned by me and 700 so only I can use this disk

I have no files on the other external drives.

# Reorganizing files

Some of my files on transcriptome have no backup.
  * The raw data files are ok--they are also on fiddlehead and its backup drive.
  * Other data analysis files aren't backed up on any other machines.
  * Files on my home drive aren't backed up and are at high risk of being deleted by well-meaning admins trying to clear space.
  * Files on my external drive (BigDisc) or the public external drive (arxive) aren't backed up.

Solution:
  * I think I have enough space to copy everything on my home to both BigDisc and arxive. Files that aren't currently needed can be deleted from home, freeing space, while still leaving at least two copies of all analyses on at least 2 different drives.
  * Organize things the same way with the same name on all three drives.
  * Use rsync to copy from home to the other drives to keep file dates the same and make later updates easier. (I can't trust file sizes. For some reason when I copy folders from home to this other drive, large folder sizes do not exactly match.)
  * Things in home:
    * BioinformaticScraps, gbs-tools, mirna-seq-tools: GitHub repo clones. No backup needed.
    * GenLabActivity2016: copy to external drives and delete from home. DONE
    * ncbi-blast-2.2.23+, ncbi-blast-2.2.31+: my local blast installs (2.2.31 has issues creating databases for large datasets, so I have 2.2.23 in my path). No backup needed.
    * perl5, R: local modules. No backup needed.
    * turkey_mirna-seq: analysis files. Copy to external drives and delete from home. DONE
    * GBS_2014-11-24: analysis files (BySample and structureruns): Move them with the rest of the GBS analysis files in ExtDrive/gomp002_files. I think this puts them all in one place so we can then copy them where needed. DONE
