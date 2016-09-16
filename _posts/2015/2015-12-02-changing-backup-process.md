---
title: Changing backup process
date: 2015-12-02T14:03:49+00:00
layout: post
categories:
---
  * Weekly and monthly backups. Adjusted the instructions since we now use CAMEL instead of CATACOMBS. This process still takes much longer than it needs to and requires more disk space than necessary. I'm making monthly zip files where the vast majority of the content hasn't changed since the last zip file. What if instead of one big zip, I zip subfolders. The only parts that change regularly are Dropbox, Downloads, and Desktop. Backups never really changes, I just add to it and it is mostly zipped folders that won't condense much further anyway. So there is no advantage to zipping the rsync of that. If I haven't changed Dev, Documents, or Videos in the last month there is no reason to zip them.
