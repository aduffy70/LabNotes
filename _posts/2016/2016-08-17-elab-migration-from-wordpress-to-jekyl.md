---
title: eLab migration from wordpress to jekyll
date: 2016-08-17T11:26:12+00:00
layout: post
categories:
---
Drawbacks to using a wordpress site for my eLab Notebook:

  * Overkill/complexity
  * Difficult upgrades/security risks
  * Backups aren't automated
  * Data loss due to the web interface
  * Limitations/frustrations of wordpress post editor

Benefits of moving to a jekyll-based site:

  * Simple static site = faster page loads
  * No server-side scripting = much less security risk
  * Backup through git = files exist in at least 2 locations
  * Images served through dropbox = files exist on all my devices
  * Text files rather than a web interface

Drawbacks to jekyll-based site:

  * Search?
  * Transferring old posts - Exported using the wordpress to jekyll plugin and cleaned up the posts with a custom script.
  * Bibliography links - I replaced the ones in existing posts with doi.org links. That is probably the easiest thing to use going forward.
  * Markdown rather than WYSIWYG

The setup:

  * Site exists on cordate as a bare git repo and an elab_html folder served by apache at lab.aduffy70.org
  * Anytime I push to the cordate repo it automatically builds the site into the html folder through a post-receive hook script
  * Image files are not included in the repo, they are stored in Dropbox/Public/elab/ and can be linked to with {{site.image_path}}name_of_file
  * Access is restricted with htaccess/htpasswd - can add guest logins to the htpasswd file as needed
  * Posts are written as local markdown text files
      * Write them directly in the repo?
          * Good: Latest formatted version always ready to view
          * Bad: Need to remember to commit often so I can switch between machines. Not accessible from ipad?
      * Write them in dropbox until complete and then move them to the repo?
          * Good: Easier to move between machines and accessible anywhere I can access dropbox.
          * Bad: Won't have a formatted version to show until it is all done and means switching between 2 locations depending on whether I'm updating something that I thought was complete or working on something new. Lose ability to roll back changes (unless I manage them in another git repo

Tools to assist:

  * To build and serve locally (doesn't require being within the repo):

~~~
alias eserve='jekyll serve --source ~/Dropbox/LabNotes --destination ~/eLab_html'
~~~

  * Shell script newpost.sh to create new posts with the yaml header and full list of categories (the latest version of this is in the \_tools folder of the jekyll repo):

Feature wishlist:

  * The path to the post file at the top of the post so I can quickly cut and paste to open it for editing on the local repo clone
  * Project pages with links to all posts for a project
  * Original post date and last updated date

Editing past entries:

  * I created new project categories and modified old category tags
  * I deleted "todo list" type info that was simply listing tasks completed or needing to be completed but with no further useful info (e.g., text about watering cultures that didn't include anything about the status of the cultures, or text about monthly/weekly updates that didn't include other info)
  * I deleted passwords, sensitive financial info, and personal information.
  * I manually reformatted tables, links, and images that didn't convert well from wordpress to markdown format.
  * Last update dates are based on the git log, so all these changes are reflected in the last update date. All documents have a last update date reflecting the change from wordpress to jekyll (I think Sept 1, 2016) is the oldest because that is when I organized the posts into folders by year. Created dates still reflect when the post was originally created on the old wordpress site.
