---
title:  Adjusting eLab Notes for Dropbox changes
date:  2017-03-03
layout: post
categories:

---
# Problem

Dropbox is dropping support for the Public folder on March 15, 2017. I currently store all the image files for my jekyll-based lab notebook, so I need to find another way to serve these files.

I originally kept them out of the jekyll git repo because I was worried that image files would bloat the repository, but since they rarely if ever change this should not be an issue. Six years of images is only 14Mb so it will not have a major impact on the size of the repo.

# Solution

I moved the files to a new "assets" folder in the jekyll repo. I changed the image_path in my \_configs.yml file to point to the new location. No other change were needed. When I pushed the commit to the server images work and are pulling from the new location rather than Dropbox.

I deleted the old copies of the files in the Dropbox public folder.

This actually simplifies the system--everything is now in one place--and might even speed up page loads slightly since everything now comes from my server directly instead of being pulled from Dropbox. It didn't noticably change the build time for the site.
