---
title: Scape meeting
date: 2013-01-30T23:59:42+00:00
layout: post
categories:
  - science ed drk12
---
  * Meeting with Brett Shelton, Dave Manoa, and Jeff Olsen to talk about the data backend for S'cape
      * Atul built something hosted on Heroku but no one is able to access it and he is not responding, so Dave started something new built on Grails - something similar to Django but built in java instead of python.
      * They want me to take this over and expand it into a working system as soon as possible but understand that I can't put any time into it until I defend.
      * I registered an account on bitbucket.org where Dave's repos are hosted and he gave me admin access to the projects.
      * They want a system that accepts data from the quizzes in S'cape and that has a web interface the teachers (or we) can use to access the data.
      * The data being passed from S'cape needs to have a username and teacher name associated with it so that the teachers can view just their data.
      * We talked about different ways of adding teachers to a dropdown list in S'cape and decided that for the ultimate flexibility it should not be a dropdown and the teachers need to take responsibility for having their students enter a consistent teacher name/code into the field.  The teachers should have incentive to make sure students do this correctly because otherwise they won't be able to see the student's data.  And they can give the students incentive to get it right by only giving credit to students whose data makes it into the db.
