---
title:  Python3 upgrade showstoppers
date:  2016-10-27
layout: post
categories:
---
What stands in the way of switching entirely to python3?
  * HTseq [won't work on python3 yet][1] - 2016-10-27
  * What other python modules do I rely on and are they available for python3?
  * What is up with the tab key when running python3 in interactive mode? It is a controversial autocomplete feature. Two ways to override it [here][2] but it will go away on its own in future versions (<del>I'm on 3.4.3 now 2016-10-28 and it is still there</del> Fixed with v3.5.2 installed with Ubuntu 16.04). Typing spaces (only 2 are required) will work for indenting in the interactive terminal for now.
  * python3 isn't installed by default on osx... but I installed it on spore2 with homebrew (v3.5.1). 


[1]: http://www-huber.embl.de/HTSeq/doc/install.html#install
[2]: http://stackoverflow.com/questions/19737454/cant-use-tab-in-python-shell
