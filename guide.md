---
layout: page
title: eLab Guide
permalink: /guide/
---
  * ‘Just Enough’ info
  * Store images and static files in Dropbox/Public/elab/ and link to them with \{\{site.image_path\}\}\<file_name\>
  * Link to google docs for dynamic files
  * Link to papers and sources
  * Record who attended meetings
  * Provide step-by-step code in code blocks
  * Plan ahead for efficient searches:
    * One topic per post
    * Categorize posts
    * Use first and last names the first time in every post
    * Use full genus-species names the first time in every post
    * When using abbreviations, spell things out the first time in every post
  * Write as if these records will become public
  * Several bite-sized posts are better than one long updated post  
  * Use Pages for things that aren't project-specific and that will be referenced often

# Adding a new project/category:
  * Create a new page for the category in ~/.labnotes/projects/
  * Add a link to the new page on the Projects page:
    ~~~
    atom ~/.labnotes/projects/index.md
    ~~~
  * Add the category to the categories file:
    ~~~
    atom ~/.labnotes/_tools/categories.txt
    ~~~
