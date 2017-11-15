---
title: Backup problem?
date: 2016-03-02T09:16:35+00:00
layout: post
categories:

---
When I checked to make sure the 4-hour automatic backups on crozier were working I found that folders/files in Dropbox that have been there for a couple weeks were not on in the backup on BACKPACK.  When I first tried to view the contents of BACKPACK through the terminal the drive did not appear. After I opened it from Nautilus it appeared in terminal as well.

  * I ran the backup script automatically and it worked, but maybe it isn't working through cron.
      * I made a test folder and will see if it appears in BACKPACK after 4 hours. - It did, so cron isn't the issue
  * Maybe there is a problem with BACKPACK automounting after a system restart.
      * Shutdown and restart and see if BACKPACK can be accessed through terminal - It can't be seen or accessed in Terminal until I open it in Nautilus or mount it manually. It isn't automounting.
      * Solution: I added the following lines to /etc/fstab to mount the drive on startup:
        <pre>#mount BACKPACK at boot
UUID=33141ed8-7b0e-4fe7-8f58-846805b6bf7b       /media/aduffy/BACKPACK  ext4    defaults 0      2</pre>

      * Verification:
          * Reboot machine and ensure I can access it through the terminal - I can.
          * Make sure I can still access it through Nautilus - I can
          * Make sure I can write to it - I can
          * Create a testfile on the main drive and make sure it appears in the rsync backup after 4 hours or so. Added at 8:45am - The new test file was on BACKPACK at 12:10pm.
  * SUCCESS! Problem solved.
