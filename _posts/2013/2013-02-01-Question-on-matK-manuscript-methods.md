---
title: Question on matK manuscript methods
date: 2013-02-01T23:59:40+00:00
layout: post
categories:

---
  * Responded to Bo Wang's question about how we got the average dN and dS values shown in table 1 of <http://doi.org/10.1007/s11103-010-9706-4>.  They are just averages of the separate branch dN and dS values.  Nothing more.  In this example mlc file from PAML we averaged the yellow highlighted dN and dS values to get seedplant averages, and the blue one to get fern averages.  As you go down the rows of this file, you can tell which branches are outgroup, seedplant, and fern because each subgroup shares a common dN/dS ratio. My mlcminer.py script automated calculating the averages.

![Relative Rates Example]( {{site.image_path}}wp-content/uploads/2013/02/RelativeRatesExample.jpg)
