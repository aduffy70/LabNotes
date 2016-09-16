---
title: Adding a favicon to wordpress
date: 2014-12-19T13:53:04+00:00
layout: post
categories:
---
  * Added a favicon to this elab site so it is easier to spot in Chrome's open tabs and on the shortcut bar. Adding a favicon.ico file to the root directory of the site had no effect (I haven't had any luck with .ico files generated using online tools) but I imported the .ico file using the theme options in the admin panel and it worked. That only works to put the favicon on the site pages though - not on the admin pages. To put it on the site pages I added the following code at the very bottom of wordpress/wp-content/themes/suffusion/functions.php:
    ~~~
    // First, create a function that includes the path to your favicon
    function add_favicon() {
        echo '<link href="http://elab.aduffy70.org/wp-content/uploads/2014/12/favicon.png" rel="shortcut icon" />';
    }

    // Now, just make sure that function runs when you're on the login page and admin pages
    add_action('login_head', 'add_favicon');
    add_action('admin_head', 'add_favicon');
    ~~~

  * This will likely have to be redone after any site or theme updates (thus the code saved here...)
  * Added a favicon to my aduffy70.org site too (manually, using a png file since I can't seem to make a valid .ico file). Also fixed some minor typos on the site pages.
