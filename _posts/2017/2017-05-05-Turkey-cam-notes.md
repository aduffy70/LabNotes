---
title:  Turkey cam notes
date:  2017-05-05
layout: post
categories:
---

  * Built using a Raspberry Pi Zero running Raspian Jessie.
  * Takes a photo with each camera every 5 minutes and copies it to my webserver (cordate).
  * Every three days at 23:59, photos on the Pi are archived and previously archived photos are deleted (so we always have 3-6 days photo history on the Pi).
  * Every night at 23:56, photos on the webserver are archived to a folder named by date. I'll need to manually delete folders eventually, or create a system to delete them.

Pi crontab settings:

~~~
*/5 * * * * /home/pi/takewebimage.sh >> /home/pi/Pictures/errors.txt
59 23 1-30/3 * * /home/pi/archivewebimages.sh
~~~

cordate crontab settings:

~~~
56 23 * * * /usr/local/bin/dailyturkeycamarchive.sh
~~~

Script on Pi to take photos and copy to cordate (with port numbers and server addresses concealed):

~~~
#! /bin/bash
# takewebimage.sh
# Grabs an image from the webcam and names it with the date and time.

rightnow=$(date +%Y-%m-%d_%H:%M) ;
/usr/bin/fswebcam -d /dev/video0 -r 1280x960 -S 25 -D 1 -q /home/pi/Pictures/Camera1/Cam1_$rightnow.jpg ;
/usr/bin/fswebcam -d /dev/video1 -r 640x480 -S 25 -D 1 -q /home/pi/Pictures/Camera2/Cam2_$rightnow.jpg ;
cp /home/pi/Pictures/Camera1/Cam1_$rightnow.jpg /home/pi/Pictures/latest-camera1.jpg ;
cp /home/pi/Pictures/Camera2/Cam2_$rightnow.jpg /home/pi/Pictures/latest-camera2.jpg ;
scp -P <redactedport> /home/pi/Pictures/Camera1/Cam1_$rightnow.jpg <redactedserver>:public_html6/turkeys/Camera1/ ;
scp -P <redactedport> /home/pi/Pictures/Camera2/Cam2_$rightnow.jpg <redactedserver>:public_html6/turkeys/Camera2/ ;
scp -P <redactedport> /home/pi/Pictures/latest-camera*.jpg <redactedserver>:public_html6/turkeys/ ;
~~~

Script on Pi to archive images:

~~~
#! /bin/bash
# archivewebimages.sh
# Deletes old archived files and moves current files to the archive.

rm -rf /home/pi/Pictures/Archive/Camera1/* ;
rm -rf /home/pi/Pictures/Archive/Camera2/* ;
mv /home/pi/Pictures/Camera1/* /home/pi/Pictures/Archive/Camera1/ ;
mv /home/pi/Pictures/Camera2/* /home/pi/Pictures/Archive/Camera2/ ;
~~~

Script on cordate to archive images:

~~~
#! /bin/bash
# dailyturkeycamarchive.sh
# Moves turkeycam images into a folder for the date. Designed to run after the last image of the day has been captured (after the 11:55pm image).

today=$(date +%Y-%m-%d) ;
mkdir /home/aduffy/public_html6/turkeys/Camera1/Archive/$today ;
mkdir /home/aduffy/public_html6/turkeys/Camera2/Archive/$today ;
mv /home/aduffy/public_html6/turkeys/Camera1/*.jpg /home/aduffy/public_html6/turkeys/Camera1/Archive/$today/ ;
mv /home/aduffy/public_html6/turkeys/Camera2/*.jpg /home/aduffy/public_html6/turkeys/Camera2/Archive/$today/ ;
~~~
