---
title: Replacing Toxicology shares drive with Box.com
date: 2016-04-11T13:51:38+00:00
layout: post
categories:


---
Box.com functionality:

  * Sharing/collaborating a folder also shares all contained files and subfolders
  * Files/folders only count against the quota of the owner - even if someone else creates a file in a folder I own, the file counts against my quota, not the creator's.
  * When folders are shared with collaborators, they don't appear in the collaborator's Box Sync until they go to the website and set the folder to Sync - and they don't have to sync the entire thing - they can Sync just specific files or subfolders.
  * Default notifications when you share a folder will email when a collaborator comments or deletes something. This can be turned off in settings for individual folders or for all folders you own.
  * Giving a collaborator Editor permissions gives them similar abilities to what we all had on the Tox shares: create, edit, rename, delete, download, share, etc. The only things they can't do are restrict sharing and change the folder settings.

Replacing Tox shares with Box.com:

  1. Roger uploads current shares files to a folder in his Box account.
  2. Roger shares the folder with lab members as Collaborators with Editor permissions.
      1. New lab members will need to be added (or removed when they leave), but any existing lab member can do it.
  3. Lab members will immediately have access through the web interface.
  4. Through the web interface, lab members can choose to Sync the entire directory to their computer or just Sync specific sub-directories as they need access.

My process:

  * There is no Box Sync on Linux so I have to access through WebDav, which is slow and unstable.
      * WebDav hates my .git folders - they won't copy or rsync. I can't create folders on WebDav that start with "."
      * rsync chokes on WebDav? Not if I use cp to get the files there in the first place.
      * I could just use cp -uR but it doesn't delete files on the target that have been removed from the source.
  * Best solution I've come up with:
      * Continue working in Dropbox but set up a weekly mirror of my CL-* subfolders to the Tox files on Box.
      * If I keep my Tox subfolder synced to my laptop I can do it from the laptop using rsync and it will save my .git folders too.
      * Putting my files in Box is just for the benefit of the lab - I won't ever actually use that copy. It just provides another layer of backup and gives them access when needed and for when I leave.
