---
title:  Ubuntu 20.04 to Fedora 43 to Ubuntu 24.04
date:  2026-02-12
layout: post
categories:
---
Since moving my desktop I no longer have ethernet access to the router so I installed my old wireless card but it is not compatible with the kernel used in Ubuntu 20.04. That version is outside its normal support window anyway so I decided to upgrade. 

I've been considering a move to Fedora 43:
  * I tested a live usb and my wireless card worked so I proceeded with the switch.
  * After the installation I found that installing software from the Fedora software center was slow and buggy. 
  * The equivalent of Synaptic would not work consistently and had failures and system freezes.
  * I quickly got the system to a point where it would no longer boot.

So I installed Ubuntu 24.04.
  * The wireless kind of works. It connects but drops repeatedly. I don't know if it is a problem with driver compatibility, a problem with the card failing, or simply that the wireless antenna is at the farthest point in the house from the wireless router with walls, furniture, and the computer case inbetween.
  * I am able to use USB tethering to share the wireless connection from my phone to the computer. It is not ideal but will work until I can try replacing the wireless card with one that isn't 15+ years old.
  * My graphics card (also 15+ years old) is not supported by current drivers. The best I could get was black bars surrounding all 4 sides of the screen.
  * Removing the graphics card and using the onboard graphics (and a single monitor) is better, but doing that with a DVI cable connection to my 20" monitor is not compatible with the BIOS--nothing appears until the operating system loads. It means if the system has any problem starting or if I want to access BIOS I have to plug in the smaller Dell monitor to do it. Not ideal, but it works. I need to try plugging in the 20" monitor through a dsub connector to see if it fixes the problem without noticable quality loss. Long-term, a modern graphics card is needed.
  * I revised my file storage plan since Duke Biology is moving from Dropbox to Box and I will no longer have unlimited storage. I learned that it is important to place the Dropbox folder correctly when installing Dropbox on an updated system. I tried to move it after installing, broke the installation, and ended up restarting the Ubuntu 24.04 install to solve the mess.
  * Also, always install software before restoring huge directories of files. I installed files first, then broke the system in the process of getting software packages setup and working, and had to do it all over again.
  
  


