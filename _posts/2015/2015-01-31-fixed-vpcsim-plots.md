---
title: Fixed VPCsim plots
date: 2015-01-31T22:10:09+00:00
layout: post
categories:
  - science ed vpcsim
---
  * I can make a dygraphs plot directly from the VPCsim.html page, but when I try to make it with the data_string coming from the simulation I get errors like it is trying to parse things as dates or trying to open the string as a webpage. But by just doing a javascript string replace of all the \\n with \n (actually by doing a string replace of \n with n) the appengine tool starts working again. That solution works so I'm not going to put more time into it. Long-term, having the plots generated by the webpage rather than the appengine tool would make the system faster and less fragile, as well as reducing hits on the appengine (which may eventually exceed the limits of a free account).
  * I let Todd Campbell and Max Longhurst know the plots are back and updated the page so there is a notice at the bottom. If people are viewing a cached version they won't see the notice (or have working plots) so it makes for a quick thing to tell them to check.
