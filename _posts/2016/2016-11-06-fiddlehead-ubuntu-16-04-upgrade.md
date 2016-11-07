---
title:  fiddlehead ubuntu 16.04 upgrade
date:  2016-11-06
layout: post
categories:
---

Updating fiddlehead to Ubuntu 16.04 and setting it up to replace crozier as my main work machine. With 6 cores and 16Gb RAM it is my best machine and is underused at home.

  * Moved personal files to spore and verified updated my music library and photo library on spore
  * Installed 16.04 from usb drive with default partitioning. Ran updates. Tweaked settings.
  * Installed chrome, dropbox, synaptic, atom, gimp, ubuntu tweak (for fonts), java8, Aliview, R,
  * Set up ufw, openssh-server, my .bash_aliases and .bashrc, nanorc, terminal profile
  * The versions on jekyll and several of the dependent gems have changed so I had to update everything on my other machines as well to keep my labnotes from breaking. I just had to rerun the same set of commands I used to install jekyll and its associated gems and then do a bundle update--on everything but spore2. Spore2 had problems installing the gem nokogiri, but it was just a problem with not having accepted the terms and conditions for Xcode. No idea why this didn't come up when I initially installed it.
  * Next: install files from my backup drive, then bring the machine into work and finish the change-over.
