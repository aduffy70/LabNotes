---
title: Backups
date: 2011-07-01T11:05:29+00:00
layout: page
---
# Strategy

  * Active files (including my LabNotes) are synced acrossed machines through Dropbox.
  * Less active files and large data files are only on fiddlehead.
  * Every 4 hours, my home drive on fiddlehead (including active files, less active files, backup files, and large data files) is backed up to a second drive in fiddlehead (BACKPACK).
  * Every 4 hours, a copy of all Coulombe Lab-related files (from my active files and less active files are placed on the Tox Shares drive to provide easy access for labmates.
  * Every night, those same files from the 4 hour backups are backed up to a second machine in a different building (crozier).
  * Once a month, my active files, less active files, and backup files on fiddlehead are saved to an external drive (CAMEL) that is stored in my locked cabinet and only connected during this backup process.
  * Once a month, my emails, contacts, and calendar events on Google, my documents on Google Drive, and my VPCsim files on crozier are backed up on fiddlehead (these are the "backup files" referred to above).
  * Once a month, a copy of all Coulombe Lab-related files from Google Drive are placed on the Tox Shares drive to provide easy access for labmates (they can also access the originals on Google Drive).
  * When Large data files (e.g., high-throughput sequencing data) are received they are saved:
    * on fiddlehead or an external drive in my locked cabinet
    * on an external drive attached to transcriptome (BIGDISC)
    * on the wolf-group drive on the University of Utah's CHPC cluster.  
  * Since they never change and are already stored in these multiple locations, they are not included in fiddlehead backups to CAMEL.

# Backup process

## 4 hour backups and nightly backups

  Performed automatically by cron jobs

## Monthly backups

### 1) Verify automatic backups

  * Verify that 4 hour local backups are working (confirm a recently created/updated file on BACKPACK).
  * Verify that 4 hour Shares backups are working (confirm a recently created/updated file on the Tox Shares drive)
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
mkdir Backups/crozier.$(date +%Y%m%d)
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

# Commands and scripts to support the steps above

  * Cron jobs for 4 hour and nightly backups:

~~~
# m h  dom mon dow   command
0 */4 * * * /usr/local/bin/make_backup.sh > /dev/null
1 */4 * * * /usr/local/bin/make_backup-coulombe_lab.sh > /dev/null
30 2 * * * /usr/local/bin/offsite_backup.sh > /dev/null
~~~

~~~
#! /bin/bash
# make_backup.sh
# Backs up my home folder to my second drive
rsync -qaz --delete --exclude=".gvfs/" --exclude="Shares" --exclude=".dbus" --exclude=".cache" /home/aduffy /media/aduffy/BACKPACK/rsyncbackup/ ;
eval "export $(egrep -z DBUS_SESSION_BUS_ADDRESS /proc/$(pgrep -u $LOGNAME gnome-session)/environ)";
notify-send -i stock_new-appointment "Local backup complete..." ;
~~~

~~~
#! /bin/bash
# make_backup-coulombe_lab.sh
# Backs up my Coulombe lab current and archived folders to the Shares drive
# Only writes if I have the Shares drive mounted. Otherwise displays a notification of the failure

if [ -w "/home/aduffy/Shares/Groups/toxicology/Duffy" ] ;
  then
    rsync -qaz --delete /home/aduffy/Dropbox/Coulombe_Lab/ /home/aduffy/Shares/Groups/toxicology/Duffy/Coulombe_Lab ;
    rsync -qaz --delete /home/aduffy/Documents/Coulombe_Lab_archived/ /home/aduffy/Shares/Groups/toxicology/Duffy/Coulombe_Lab_archived ;
    eval "export $(egrep -z DBUS_SESSION_BUS_ADDRESS /proc/$(pgrep -u $LOGNAME gnome-session)/environ)";
    notify-send -i stock_new-appointment "Shares backup complete..." ;
  else
    eval "export $(egrep -z DBUS_SESSION_BUS_ADDRESS /proc/$(pgrep -u $LOGNAME gnome-session)/environ)";
    notify-send -i stock_new-appointment "BACKUP FAILURE - Shares not mounted?" ;
fi
~~~

~~~
#! /bin/bash
# offsite_backup.sh
# Backs up critical subfolders of my home folder to a server in another building

# Let's do everything rather than just specific folders
rsync -azq -e "ssh -p port" --delete --exclude=".ssh/" --exclude="Shares" --exclude=".smbcredentials" --exclude=".dbus" --exclude=".cache" /home/aduffy/ <user@ip:/home/aduffy/fiddleheadBackup-rsync/ ;

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
~~~
