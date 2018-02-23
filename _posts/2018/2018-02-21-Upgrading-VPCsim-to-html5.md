---
title:  Upgrading VPCsim to html5
date:  2018-02-21
layout: post
categories:
  - science ed vpcsim
---
# Problem

VPCsim uses a Unity plugin that is no longer supported by Chrome or Firefox. I think the only browser still working is Safari. Unity has depreciated the webapp and are no longer supporting it.

# Ideas

Unity now has WebGL/html5 options (though only supported as a "preview"?) that should be supported by all browsers. See what is required to update to use that.

  * I have a Unity 5 development environment on spore2.
  * The ~/Dev/VPCsim-Unity folder on spore2 contains ALL the assets needed to build VPCsim--the GitHub repo only includes files I created.
  * Made a copy of the VPCsim-Unity folder (~/Dev/VPCsim-Unity-Update) on spore2 so I can test things without breaking the original.
  * Try converting the existing project? Make a new project and copy my files into it? Either way, my files are using APIs that no longer exist and will need to be changed.

## Converting the existing project:
  * When I open the project it automatically tries to convert things. Afterwards it won't run because of errors:

~~~
Warning: Assets/Standard Assets/Scripts/General Scripts/ActivateTrigger.cs(43,58): warning CS0618: UnityEngine.GameObject.active is obsolete: GameObject.active is obsolete. Use GameObject.SetActive(), GameObject.activeSelf or GameObject.activeInHierarchy.
Warning: Assets/Standard Assets/Scripts/General Scripts/ActivateTrigger.cs(53,58): warning CS0618: UnityEngine.GameObject.active is obsolete: GameObject.active is obsolete. Use GameObject.SetActive(), GameObject.activeSelf or GameObject.activeInHierarchy.
Error: Assets/Standard Assets/Scripts/Utility Scripts/MeshCombineUtility.cs(27,74): error CS1061: Type UnityEngine.Mesh does not contain a definition for GetTriangleStrip and no extension method GetTriangleStrip of type UnityEngine.Mesh could be found (are you missing a using directive or an assembly reference?)
Error: Assets/Standard Assets/Scripts/Utility Scripts/MeshCombineUtility.cs(130,73): error CS1061: Type UnityEngine.Mesh does not contain a definition for GetTriangleStrip and no extension method GetTriangleStrip of type UnityEngine.Mesh could be found (are you missing a using directive or an assembly reference?)
Error: Assets/Standard Assets/Scripts/Utility Scripts/MeshCombineUtility.cs(177,30): error CS1061: Type UnityEngine.Mesh does not contain a definition for SetTriangleStrip and no extension method SetTriangleStrip of type UnityEngine.Mesh could be found (are you missing a using directive or an assembly reference?)
Warning: Assets/Standard Assets/Character Controllers/Sources/Scripts/ThirdPersonController.js(193,54): UCW0003: WARNING: Bitwise operation | on boolean values won't shortcut. Did you mean ||?
~~~

  * These are all scripts built in to Unity--not my custom scripts--so better to start a new project and move my files into it.

## Starting a new WebGL/html5 project:
  * ~/Dev/VPCsim-Unity-html5
  * Testing the html5 builds:
    - Loaded just my character controller script into an object and built the scene.
    - If I build for the webplayer it works in Firefox and Safari, but Chrome won't allow any WebPlayer plugin.
    - If I build for WebGL html5 it throws an error in FF, and Chrome, but works in Safari:

~~~
Uncaught TypeError: WEBAudio.audioContext.listener.setVelocity is not a function
~~~

  * It appears this is due to changes in WebGL's API that Unity's player has not kept up with. The recommendations were to try updating to the latest Unity environment and build again, and to accept that keeping a Unity-based WebGL game working in all browsers will take ongoing maintenance. WebGL is not stable, browsers implement it inconsistently, and Unity doesn't fully support it. So even if I get it working today, it will likely break again.

# Solution

I think the most stable option is to convert VPCsim as a downloadable app for osx and windows.
  * I should still be able to make it communicate with the settings webapp and open browser windows for the setup form and plots.
  * Instead of launching the simulations from a web page, students would download the app from the web page and then run it on their machine. Instead of launching the simulation in multiple browser windows or tabs to compare multiple simulations, they would run multiple instances of the app on their machine.
  * Because they will only download an app once (per student or per computer?) instead of downloading a webplayer file multiple times, the server bandwidth requirements might even drop to a level compatible with standard web-hosting services.
  * Converting the existing project will still have the problems listed above so I will start a new project and move my files to it.

## Starting a new standalone app project:
  * Renamed the html5 project I started above as ~/Dev/VPCsim-Unity-app, initiated a git repo and pushed it to GitHub.
  * Testing the standalone builds:
    - The basic version with just a character controller script builds and runs fine on OSX.
    - Need to test opening browser windows and sending data to/from the setup webapp before I spend time remaking the entire simulation system in this new project.
