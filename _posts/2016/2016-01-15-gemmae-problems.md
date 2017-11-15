---
title: Webserver problems (gemmae)
date: 2016-01-15T12:51:38+00:00
layout: post
categories:


---
While I was in San Diego for PAG my eLabs site (and all other sites on gemmae) stopped responding for 2 days, then started working again. I couldn't access it through ssh, though it responded to pings. I tried accessing it using the direct IP address as well as other domain names to rule out DNS problems. When I came back Thursday morning it stopped responding again (no webpages, no ssh, good ping). When I plugged a monitor into it there were a number of error messages saying: "INFO: task apache2 blocked for more than 120 seconds". I tried logging in on alternate terminals but it froze after the username and wouldn't prompt for a password. Rebooting manually got things working normally again.

Googling suggests apache is hanging due to a failing harddrive. So:

  * I made a backup of everything I need from this machine, including things I don't normally, like rawdog config files, all old wordpress databases and the apache sites-enabled files, and (after emailing him) Martin's wordpress mysql database and home directory with the files for his wordpress site. Torrey Roberts also has an account on the machine but there was nothing in his home folder and no mysql databases so I didn't save anything for him.
  * I replaced the harddrive with the one from plastid. It booted but could not find the network since the the eth0 on the drive didn't match the MAC/IP of the box, so I deleted /etc/udev/rules.d/70-persistent-net.rules and rebooted to wipe the old eth0 and autogenerate a new, correct one.
  * I deleted all old icecast2/ezstream files (12GB of old-time radio shows!) and opensim files (several GB of files for regions going back to 0.69 version Opensim), uninstalled icecast, owncloud, and minetest, and installed software updates.
  * Martin already had an account on plastid so I didn't need to add him as a user, but I did add him to sudoers.
  * I copied over all my public\_html folders, my .rawdog folder, all the /etc/apache2/sites-available files for our websites (and enabled them), and Martin's public\_html folder (and chown'd it to his user).
  * I deleted all old opensim mysql databases and installed the ones I backed up from the old drive. I only installed the active ones, since there were databases for owncloud, social.net, deleted wordpress sites and my old drupal site:
      * aduffy70wp = this eLab site
      * schimarwp = Martin's eLab site
      * cyberwp = the cyberlearning.usu.edu site
      * mysql = user logins and passwords
  * When I tested the wordpress sites I got an Unable to access database error, which I fixed by flushing privileges in mysql. All sites seem to work as they did before.
  * To reactivate rawdog I had to install it (available from Ubuntu package repos) and add a line to my user crontab to run it every 6 hours:

<pre>0 */6 * * * /usr/bin/rawdog -uw</pre>

  * I didn't transfer over any of our dot-files since we both had working accounts on plastid already. No need to introduce possible errors or incompatibilities.
  * The old drive is still in the server in case we discover we need something else saved from it, but it is unplugged to avoid possible issues.

<del>After the 3-day weekend everything is still working so it seems the harddrive was indeed the problem. Swapping to the new drive took us from 80GB to 40GB but we are only utilizing 10% anyway.</del>

It froze up again 1/25/16 (less than an hour after I backed it up!) so I moved everything over to cordate and asked IT to transfer the 5 cnames from gemmae to cordate. Still waiting for that to happen, but changed the anames for my domain names at godaddy to point to the new machine and everything seems to work for those sites. I'm going to take gemmae offline and consider mixing pieces from plastid to get a scratch/play server running again.

&nbsp;
