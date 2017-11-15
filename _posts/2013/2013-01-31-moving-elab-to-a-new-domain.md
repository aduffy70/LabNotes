---
title: Moving elab to a new domain
date: 2013-01-31T13:16:19+00:00
layout: post
categories:
---
To move elab from seedfree.usu.edu to elab.aduffy70.org:

  * Setup the cname on my domain provider
  * copy the old apache server site file and change the url
  * enable the new site in apache
  * manually edit the wp-config.php file with the new url
  * Follow the <a href="http://www.mydigitallife.info/how-to-move-wordpress-blog-to-new-domain-or-location/" target="_blank">instructions on this page</a> to change all hard coded urls in the database
  * clear the cache in the browser (critical!)
  * test the new url
  * disable the old apache site
