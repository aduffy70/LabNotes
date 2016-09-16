---
title: Managing files for statistical analyses
date: 2016-02-04T12:09:33+00:00
layout: post
categories:
---
  * Thoughts on managing files for statistical analyses:
      * I've been keeping separate folders in Dropbox for the various statistical analyses I have done for people. The R scripts, input, and output files are jumbled together and are not under version control. I toyed with moving just the scripts to a sandbox folder in ~/Dev that would be a Github repo, but I don't like moving the scripts away from the data and output files. I don't need the repo as a backup tool - my Dropbox folders and more than adequately backed up. I just need it to better track changes in the scripts and I need to be better able to determine which output came from which scripts and inputs. I can do this by making a local git repo in each project folder:
          * The project folder contains scripts (tracked), .Rout files (ignored in .gitignore), and any summary files (tracked) I make based on the analysis.
          * Raw data (tracked) and reformatted versions (tracked) go in an Input folder
          * Script output files and figures go in an Output folder (ignored in .gitignore)
          * Scripts should generate output files that include a date and if I start repeating analyses to the point where it becomes confusing, I can put them in subfolders by date.
