---
title: Landscape Genetics Lab Activity Week 3
date: 2012-02-02T14:10:20+00:00
layout: post
categories:

---
  * [Activity instructions][1]
  * [Key and explanation][2]
  * Using the default R on Ubuntu 10.04 (R 2.10) I couldn't load the packages required due to problems with ade4 not having a namespace so I had to upgrade R to 2.14 from the cran repository (I added it as a source in /etc/apt/sources.list and then ran apt-get to update and upgrade all packages).  When I first ran apt-get update it complained about the public key for the new source so I had to add a gpg key too.

    ~~~
    gpg --keyserver keyserver.ubuntu.com --recv-keys 51716619E084DAB9
    gpg --armor --export 51716619E084DAB9 | sudo apt-key add -
    ~~~

  * To get curl-config (a dependency of the RCurl package, I had to install libcurl4-openssl-dev from the Ubuntu repositories.
  * After making these upgrades I was able to successfully install the required packages (gstudio, ecodist, and pegas).  It *only* took 90 minutes of googling to get to this point.  Greg Wilson (Software Carpentry) is dead-on in his complaints about how just setting up a working development environment is one of the biggest hurdles to scientists using computing tools!  The tools can make our work so much easier, but it takes a degree in computer science to get to the point where you can use them...

[1]: {{site.image_path}}R_PopGen.pdf
[2]: {{site.image_path}}R_PopGen_Key.pdf
