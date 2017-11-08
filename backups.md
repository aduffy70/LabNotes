---
title: Backups
date: 2011-07-01T11:05:29+00:00
layout: page
---
# Strategy

  * Active files (including my LabNotes) are synced acrossed machines through Dropbox.
  * Less active files and large data files are only on fiddlehead.
  * Every 4 hours, my home drive on fiddlehead (including active files, less active files, backup files, and large data files) is backed up to a second drive in fiddlehead (BACKPACK).
  * Every night, those same files are backed up to a second machine in a different building (crozier).
  * Once a month, my active files, less active files, and backup files on fiddlehead are saved to an external drive (CAMEL) that is only connected during this backup process.
  * Once a month, my emails, contacts, and calendar events on Google, my documents on Google Drive, and my VPCsim files on crozier are backed up on fiddlehead (these are the "backup files" referred to above).
  * Once a month, a copy of all Coulombe Lab-related files (from my active files, less active files, and Google Drive) are placed on the Tox Shares drive to provide easy access for labmates.
  * When Large data files are received they are saved on fiddlehead, and an external drive attached to transcriptome (BIGDISC).  Since they are on this external drive and don't get changed, they don't get saved on CAMEL.

# Backup process

## 4 hour backups and nightly backups

  Performed automatically by a cron job

## Monthly backups

### 1) Verify automatic backups

  * Verify that 4 hour backups are working (confirm a recently created/updated file on BACKPACK).
  * Verify that Nightly backups are working (confirm a recently created/updated file on crozier).

### 2) Backup Google stuff

  * On fiddlehead, download a zip file of all Google Drive documents (select all folders/files, right-click and select Download)

~~~
mv ~/Downloads/drive-download* ~/Backups/GoogleDocs/
~~~

  * Also download a zip file of just Coulombe Lab-related Google Drive documents:
    * Protocols and References folder
    * PCR Sheets & Ligation Sheets folder
    * Assay Setup Sheets folder
    * PCR_Purifications-CoulombeLab
    * MyPrimerList-CoulombeLab

~~~
 mv ~/Downloads/drive-download* ~/Shares/Groups/toxicology/Duffy/
~~~

  * On fiddlehead, download a zip file of Gmail messages, Contacts and Google Calendar events. (Visit <https://takeout.google.com/settings/takeout> )

~~~
mv ~/Downloads/takeout* ~/Backups/Gmail/
~~~

### 3) Backup server stuff

  * Backup VPCsim site on crozier

~~~
tar czf Backups/crozier.$(date +%Y%m%d)/public_html5.tgz public_html5/
~~~

  * From fiddlehead, copy crozier backup to fiddlehead

~~~
scp -r -P port user@ip:Backups/crozier.$(date +%Y%m%d) ~/Backups/
~~~

### 4) Backup local files

  * Backup fiddlehead home directory to CAMEL and check which subfolders have changed and need to be zipped

~~~
weeklybackup
cd /media/aduffy/CAMEL
find fiddleheadBackup-rsync/Dev -exec stat \{} --printf="%y\n" \; | sort -n -r | head -n 1
find fiddleheadBackup-rsync/Documents -exec stat \{} --printf="%y\n" \; | sort -n -r | head -n 1
find fiddleheadBackup-rsync/Dropbox -exec stat \{} --printf="%y\n" \; | sort -n -r | head -n 1
~~~

  * Archive any subfolders that have changed since the last archive (usually just Dropbox)

~~~
cd /media/aduffy/CAMEL
tar -cvpjf fiddleheadBackup-archives/Dev_Backup$(date +%Y%m%d).tar.bz fiddleheadBackup-rsync/Dev
tar -cvpjf fiddleheadBackup-archives/Documents_Backup$(date +%Y%m%d).tar.bz fiddleheadBackup-rsync/Documents
tar -cvpjf fiddleheadBackup-archives/Dropbox_Backup$(date +%Y%m%d).tar.bz fiddleheadBackup-rsync/Dropbox
~~~

### 5) Make stuff available to the lab group

* Make sure fiddlehead is connected to Toxicology Shares (open in Nautilus to connect).
* Sync current Coulombe Lab projects to Toxicology Shares

~~~
 rsync -azv --delete /home/aduffy/Dropbox/Coulombe_Lab/ /home/aduffy/Shares/Groups/toxicology/Duffy/Coulombe_Lab
~~~

* If there were changes in the Documents subfolder, sync archived Coulombe Lab projects to Toxicology Shares

~~~
 rsync -azv --delete /home/aduffy/Documents/Coulombe_Lab_archived/ /home/aduffy/Shares/Groups/toxicology/Duffy/Coulombe_Lab_archived
~~~

# Commands and scripts to support the steps above

  * 4 hour cron job:

~~~
# m h  dom mon dow   command
0 */4 * * * /usr/local/bin/make_backup.sh > /dev/null
~~~

~~~
#! /bin/bash
# make_backup.sh
# Backs up my home folder to my second drive
rsync -qaz --delete --exclude=".gvfs/" --exclude="Box/" --exclude="Shares" /home/aduffy /media/aduffy/BACKPACK/rsyncbackup/ ;
eval "export $(egrep -z DBUS_SESSION_BUS_ADDRESS /proc/$(pgrep -u $LOGNAME gnome-session)/environ)";
notify-send -i stock_new-appointment "Local backup complete..." ;
~~~

  * Nightly backup cronjob on fiddlehead:

~~~
30 2 * * * /usr/local/bin/offsite_backup.sh > /dev/null
~~~

~~~
#! /bin/bash
# offsite_backup.sh
# Backs up critical subfolders of my home folder to a server in another building

# Let's do everything rather than just specific folders
rsync -azq -e "ssh -p port" --delete --exclude=".ssh/" --exclude="Shares" --exclude=".smbcredentials" /home/aduffy/ <user@ip:/home/aduffy/fiddleheadBackup-rsync/ ;

eval "export $(egrep -z DBUS_SESSION_BUS_ADDRESS /proc/$(pgrep -u $LOGNAME gnome-session)/environ)";
notify-send -i stock_new-appointment "Offsite backup complete..." ;
~~~

  * weekly backup command (used in the monthly backup--there is no weekly backup anymore):

~~~
alias weeklybackup='sudo /usr/local/bin/weeklybackupnew.sh'
~~~

~~~
#! /bin/bash
# weeklybackupnew.sh
# Backs up critical subfolders of my home folder to my external drive

rsync -azv --delete /home/aduffy/Backups /media/aduffy/CAMEL/fiddleheadBackup-rsync/ ;
rsync -azv --delete /home/aduffy/Dev /media/aduffy/CAMEL/fiddleheadBackup-rsync/ ;
rsync -azv --delete /home/aduffy/Documents /media/aduffy/CAMEL/fiddleheadBackup-rsync/ ;
rsync -azv --delete /home/aduffy/Dropbox /media/aduffy/CAMEL/fiddleheadBackup-rsync/ ;
rsync -azv --delete /home/aduffy/.thunderbird /media/aduffy/CAMEL/fiddleheadBackup-rsync/ ;
~~~
