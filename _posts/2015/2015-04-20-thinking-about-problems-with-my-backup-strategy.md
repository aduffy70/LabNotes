---
title: Thinking about problems with my backup strategy
date: 2015-04-20T11:42:15+00:00
layout: post
categories:
---
## Problems:

  * Backups are time-consuming and take excessive space
      * Some files are unnecessarily being stored multiple times (old project folders that haven't changed and likely won't and I am making backups of backups (of backups of backups))
      * Raw data files intermingled in project folders get backed up repeatedly
      * Dot files in my home folder contain both important configuration info (that I need to backup) and unimportant cache info (that I don't need and adds excessive time to the backup process).
  * My current backup plan does not protect all my data from all of the most likely scenarios (i.e., accidental deletion/file corruption, harddrive failure, computer loss/destruction, building-level disaster, local-level disaster)

## What data do I have and where?

  * Desktop files
      * Active, Archive, Data
  * Server files
      * Active, Archive (there is no Data)
  * Workstation files
      * Active, Archive (any Data is just a working copy of data from Desktop. This Archive should probably be combined with my Desktop Archive but do I have space?)
  * DoRC cluster files
      * Active (I can't store Archive analyses here and any Data is just a working copy of data from Desktop)
  * Cloud files (emails, contact info, GoogleDocs)

## What is currently protected?

  * Accidental deletion or data corruption
      * Desktop Active files protected realtime (Dropbox, secondary, and external drives). Archive and Data files protected realtime (secondary and external drives)
      * Server files Active protected weekly-monthly (Desktop). <span style="color: #ff9900;">Not all Archive protected?</span>
      * <span style="color: #ff0000;">Workstation is unprotected</span>
      * <span style="color: #ff9900;">DoRC and Cloud are protected through their backups?</span>
  * Harddrive failure
      * Desktop Active files protected realtime (Dropbox, secondary, and external drives). Archive and Data files protected realtime (secondary and external drives)
      * Server files Active protected weekly-monthly (Desktop). <span style="color: #ff9900;">Not all Archive protected?</span>
      * <span style="color: #ff9900;">Workstation is partly protected (RAID)</span>
      * <span style="color: #ff9900;">DoRC and Cloud are protected through their backups?</span>
  * Computer loss / destruction
      * Desktop Active files protected realtime (Dropbox and external drives). Archive files protected weekly (external drives). Data files protected manually (external drives).
      * Server files Active protected weekly-monthly (Desktop). <span style="color: #ff9900;">Not all Archive protected?</span>
      * <span style="color: #ff0000;">Workstation is unprotected</span>
      * <span style="color: #ff9900;">DoRC and Cloud are protected through their backups?</span>
  * Building-level disaster
      * Desktop Active files protected realtime (Dropbox). <span style="color: #ff0000;">Archive and Data files unprotected</span>
      * Server files Active protected weekly-monthly (Desktop). <span style="color: #ff9900;">Not all Archive protected?</span>
      * <span style="color: #ff0000;">Workstation is unprotected</span>
      * <span style="color: #ff9900;">DoRC and Cloud are protected through their backups?</span>
  * Local-level disaster
      * Desktop Active files protected realtime (Dropbox). <span style="color: #ff0000;">Archive and Data files unprotected</span>
      * <span style="color: #ff0000;">Server files unprotected</span>
      * <span style="color: #ff0000;">Workstation is unprotected</span>
      * <span style="color: #ff9900;">DoRC and Cloud are protected through their backups?</span>

&nbsp;
