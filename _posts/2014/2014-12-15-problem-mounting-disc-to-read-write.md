---
title: Problem mounting disc to read-write
date: 2014-12-15T23:59:56+00:00
layout: post
categories:
---
  * Bigdisc won't mount to read/write?
    * I originally formatted it as hfs+ so that I could use it on both Mac and Linux. I knew hfs+ support was bad on Ubuntu but that was the only format that can be read by both operating systems AND can handle extremely large file sizes. Unfortunately, that hfs+ formatting quickly failed and from what I read online, that is going to be an ongoing problem, so I am forgetting about Mac and just formatting it as ext4. I'll always have some linux machine I can plug it into and scp to any other machine as needed.
    * Even after reformatting as ext4, nautilus wouldn't acknowledge that the drive is r/w, even though I could write to it from a terminal, but I fixed that by deleting ~/.config/nautilus/ and rebooting. Seems to work correctly now, and I copied everything in my ~/Data folder to it. Also copied my first Trichomanes GBS dataset to it (and to ~/Data).
