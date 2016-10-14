---
title: Scape and VPCsim development environments
date: 2013-02-11T12:41:21+00:00
layout: post
categories:
  - science ed drk12
  - science ed vpcsim
  - ideas
---
  * Setup a Grails development environment on crozier to check out Dave Manoa's work on the S'cape database backend.
      * Installing from the PPA's worked smoothly except that I had to manually set the JAVA\_HOME environment setting in my .bashrc:

        ~~~
        export JAVA\_HOME="/usr/lib/jvm/java-6-openjdk-i386"
        ~~~

      * I cloned the projecttracker repo from bitbucket and was able to start it using grails run-app (after upgrading it from v2.1.2 to v2.1.1)
      * It looks like all he has really done so far is define the database storage classes - and they are quite simple - so starting over from scratch using django would not mean giving up much work.  According to comparisons on Stackoverflow, django and grails are comparable webapp development environments and users recommended just using whichever language you are most comfortable with.  django/python is definitely better for me than grails/java since I have zero experience working in java.
      * I need to get the vpcsim backend off of google appengine in order to avoid scaling issues, so perhaps that would be a good test of setting something like this up on django.  Plus, if I can demonstrate that I have actually created a database backend webapp using django, I'll be better able to justify moving the S'cape one from grails to django.
  * Setup a django development environment on crozier from the standard ubuntu repos.
  * Max called to talk about ideas for a public-facing website for the DRK12 iSIT project.  I'll setup something quick and dirty using wordpress that they can modify as they choose.
