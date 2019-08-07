---
title:  Installing Ubuntu 19.04 on 2012 macbookpro
date:  2019-07-17
layout: post
categories:

---
Installed Ubuntu 18.04 instead--I tried to replace my Ubuntu 16.04 Gnome edition install with Ubuntu 19.04 on my 2012 Macbook Pro but discovered RStudio does not support it and likely will not be upgraded to support any new versions until the next Long-Term Release.

  * Downloaded iso and created startup usb.
  * Installed a minimal install over the top of 16.04.
  * Followed [instructions here][1] to get wired and wireless connections working.
~~~
# After connecting to ethernet and turning on the proprietary driver on the Additional Drivers tab of Software and Updates:
sudo apt purge bcmwl-kernel-source
sudo apt install firmware-b43-installer
# Then reboot and things should just work.
~~~
  * Joined DukeBlue and Eduroam following the manual setup instructions on the Duke IT website.
  * Made minimal appearance/settings tweaks--I'm trying to go with the defaults where possible but I can't do natural scrolling! Also, changing the audio output settings to surround sound turns off the red light in the headphone jack.
  * Installed with apt:
    * synaptic
    * screen
    * lm-sensors and macfanctld for better fan control
    * ubuntu-restricted-extras for handling proprietary filetypes
  * Installed from synaptic:
    * Gnome Tweak and changed:
      * size of icons in side bar
      * removed home and trash icons from desktop
    * Libreoffice
    * gimp
    * r-base
    * figtree
      * manually created a launcher and copied the app icon from fiddlehead
  * Installed from their websites:
    * Google Chrome
    * Dropbox
      * Connected to my Duke Bio account and set selective sync to not pull down everything from the shared lab files or my Data folder. Plugged into wired connection while Dropbox files downloaded so it wouldn't take 3 days.
    * Atom.io
      * Kept more default settings than I have before.
    * Rstudio  
    * Skype
      * Audio input needed to be turned up in system settings.
      * My camera didn't work initially but the camera was listed twice in the skype camera dropdown list and the second one just worked.
    * Aliview for DNA alignment edits
    * Wepa for printing on the department printers
  * Copied finchtv from /usr/local/bin/ on fiddlehead (software is no longer available) for viewing chromatogram (abi) files and manually created a launcher.
  * Adjusted bashrc, bash_aliases, nanorc, screenrc, git/config, git_ignore, ssh/config
  * Copied newpost script for labnotes system to /usr/local/bin
  * Generated a keypair and setup the public key on Github.
  * Set ufw default to deny and enabled.
  * Deleted system folders I don't use: Pictures, Templates, Videos, Music, Documents. This cleans up the sidebar in Nautilus too.

[1]: https://ubuntuforums.org/showthread.php?t=2391053&page=2&s=4c29e32a6c3e5f2d82f4ed6c53f8208a
