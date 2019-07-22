---
title:  Installing Ubuntu 19.04 on 2012 macbookpro
date:  2019-07-17
layout: post
categories:

---
I tried to replace my Ubuntu 16.04 Gnome edition install with Ubuntu 19.04 on my 2012 Macbook Pro but discovered RStudio does not support it and likely will not be upgraded to support any new versions until the next Long-Term Release. So I installed 18.04 instead:

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
  * Installed Chrome with deb from Google.
  * Installed Dropbox from Dropbox.com, connected to my Duke Bio account, and set selective sync to not pull down everything from the shared lab files or my Data folder.
  * Installed atom from atom.io.
  * Made minimal appearance/settings tweaks--I'm trying to just go with the defaults where possible but I can't do natural scrolling!
  * Installed synaptic and screen manually with apt.
  * Installed from synaptic:
    - Gnome Tweak and changed:
      - size of icons in side bar
      - removed home and trash icons from desktop
    - Libreoffice
    - gimp
    - r-base with apt
  * Install RStudio and atom from the website
  * Still to install: aliview, skype, figtree
  * Adjusted bashrc, bash_aliases, nanorc, screenrc, git/config, git_ignore, ssh/config, and atom settings
  * Copied newpost script for labnotes system to /usr/local/bin
  * Plugged into wired connection while Dropbox files downloaded so it wouldn't take 3 days.
  * Generated a keypair and setup the public key on Github.

[1]: https://ubuntuforums.org/showthread.php?t=2391053&page=2&s=4c29e32a6c3e5f2d82f4ed6c53f8208a
