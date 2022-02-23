---
layout: page
title: eLab Guide
permalink: /guide/
---
  * Write as if these records will become public
  * ‘Just Enough’ info
  * Store images and static files in Dropbox/LabNotes/assets/ and link to them with \{\{site.image_path\}\}\<file_name\>
  * Link to google docs for dynamic files (shared so anyone with the link can view)
  * Link to papers and sources using doi's
  * Record who attended meetings
  * Provide step-by-step code in code blocks
  * Find balance between many bite-sized posts vs one long updated post  
  * Use Pages for things that aren't project-specific and that will be referenced often
  * Plan ahead for efficient searches:
    * One topic per post
    * Categorize posts
    * Use first and last names the first time in every post
    * Use full genus-species names the first time in every post
    * When using abbreviations, spell things out the first time in every post

# Workflows

## Creating a new post:
~~~
newpost Post-title-with-dashes-between-words
git status  # To see the path to the post
git add <path to post>
git commit  # Commit description = "New post"
git push
~~~

## Updating a post:
~~~
git commit -a  # Commit description = "Update post"
git push
~~~

## Adding a new project/category:
  * Create a new page for the category in ~/Dropbox/LabNotes/projects/
  * Add a link to the new page on the Projects page:
    ~~~
    atom ~/Dropbox/LabNotes/projects/index.md
    ~~~
  * Add the category to the categories file:
    ~~~
    atom ~/Dropbox/LabNotes/_tools/categories.txt
    ~~~
  * Add the category to the tests for valid project names on the Projects/None page:
    ~~~
    atom ~/Dropbox/LabNotes/projects/none.md
    ~~~
