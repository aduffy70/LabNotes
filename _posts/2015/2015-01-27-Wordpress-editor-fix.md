---
title: Wordpress editor fix
date: 2015-01-27T14:56:14+00:00
layout: post
categories:
---
Fixed the huge editor window font in wordpress 4.1:

  * In the suffusion theme root directory, created custom-editor-style.css:

    ~~~
    body {
      font-size: 13px;
      font-family: Arial, Arial, Helvetica, sans-serif;
    }
    ~~~

  * Added to the bottom of functions.php in the same folder:

    ~~~
    //Fix the crazy huge fonts in the editor window in wordpress 4.1
    function my_theme_add_editor_styles() {
      add_editor_style( 'custom-editor-style.css' );
    }
    add_action( 'init', 'my_theme_add_editor_styles' );
    ~~~

  * These will both need to be redone on every upgrade - added to my wordpress upgrade instructions.
