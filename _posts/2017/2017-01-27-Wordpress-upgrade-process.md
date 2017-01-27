---
title:  Wordpress upgrade process
date:  2017-01-27
layout: post
categories:

---
I removed these instructions when I switched from Wordpress to jekyll, but I still need them to maintain the ISIT site ([cyberlearning.usu.edu][1]):

  1. Verify that the site is up and working.
  2. Remove old zip folder and old backup and then backup the current site--now referred to as the "old site".
~~~
cd ~/public_html2
rm -rf OLDwordpress/
mv wordpress OLDwordpress
~~~
  3. Download and unzip latest version--the "new site".
~~~
wget https://wordpress.org/latest.tar.gz
tar xvzf latest.tar.gz
~~~
  4. Copy files from old site to the new site.
~~~
cp -r OLDwordpress/wp-content/uploads wordpress/wp-content/
cp OLDwordpress/wp-config.php wordpress/
cp OLDwordpress/.htaccess wordpress/
cp -r OLDwordpress/wp-content/themes/graphene wordpress/wp-content/themes/
cp -r OLDwordpress/wp-content/plugins/wp-google-analytics wordpress/wp-content/plugins/
~~~
  5. Login to the [admin dashboard][2] and check whether the [Graphene theme][3] or [WP Google Analytics][4] plugin have available updates. Get the download links and update if needed.
~~~
cd ~/public_html2/wordpress/wp-content/themes/
wget <link to latest Graphene version>
rm -rf graphene
unzip <zip file you just downloaded>
cd ~/public_html2/wordpress/wp-content/plugins/
wget <link to latest WP Google Analytics version>
rm -rf wp-google-analytics
unzip <zip file you just downloaded>
~~~
  6. Verify that the admin dashboard doesn't show updates needed and that the updated site is up and working


[1]: http://cyberlearning.usu.edu
[2]: http://cyberlearning.usu.edu/admin
[3]: https://wordpress.org/themes/graphene/
[4]: https://wordpress.org/plugins/wp-google-analytics/
