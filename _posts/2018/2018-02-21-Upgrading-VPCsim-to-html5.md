---
title:  Upgrading VPCsim to html5
date:  2018-02-21
layout: post
categories:
  - science ed vpcsim
---
# Problem

VPCsim uses a Unity plugin that is no longer supported by Chrome or Firefox. I think the only browser still working is Safari.

# Solution

Unity now has WebGL/html5 options (though only supported as a "preview"?) that should be supported by all browsers. See what is required to update VPCsim to use that.

  * I have a Unity development environment on spore2.
  * The ~/Dev/VPCsim-Unity folder on spore2 contains ALL the assets needed to build VPCsim--the GitHub repo only includes files I created.
  * Made a copy of the VPCsim-Unity folder (~/Dev/VPCsim-Unity-Update) on spore2 so I can test things without breaking the original.
  * Try converting the existing project? Make a new project and copy my files into it? Either way, my files are using APIs that no longer exist and will need to be changed.

Converting:
  * When I open the project it automatically tries to convert things. Afterwards it won't run because of errors:

~~~
Warning: Assets/Standard Assets/Scripts/General Scripts/ActivateTrigger.cs(43,58): warning CS0618: UnityEngine.GameObject.active is obsolete: GameObject.active is obsolete. Use GameObject.SetActive(), GameObject.activeSelf or GameObject.activeInHierarchy.

Warning: Assets/Standard Assets/Scripts/General Scripts/ActivateTrigger.cs(53,58): warning CS0618: UnityEngine.GameObject.active is obsolete: GameObject.active is obsolete. Use GameObject.SetActive(), GameObject.activeSelf or GameObject.activeInHierarchy.

Error: Assets/Standard Assets/Scripts/Utility Scripts/MeshCombineUtility.cs(27,74): error CS1061: Type UnityEngine.Mesh does not contain a definition for GetTriangleStrip and no extension method GetTriangleStrip of type UnityEngine.Mesh could be found (are you missing a using directive or an assembly reference?)

Error: Assets/Standard Assets/Scripts/Utility Scripts/MeshCombineUtility.cs(130,73): error CS1061: Type UnityEngine.Mesh does not contain a definition for GetTriangleStrip and no extension method GetTriangleStrip of type UnityEngine.Mesh could be found (are you missing a using directive or an assembly reference?)

Error: Assets/Standard Assets/Scripts/Utility Scripts/MeshCombineUtility.cs(177,30): error CS1061: Type UnityEngine.Mesh does not contain a definition for SetTriangleStrip and no extension method SetTriangleStrip of type UnityEngine.Mesh could be found (are you missing a using directive or an assembly reference?)

Warning: Assets/Standard Assets/Character Controllers/Sources/Scripts/ThirdPersonController.js(193,54): UCW0003: WARNING: Bitwise operation | on boolean values won't shortcut. Did you mean ||?
~~~

  * These are all scripts built in to Unity--not my custom scripts--so I think it may be better to start a new project and move my files into it.

Starting a new project:
  * ~/Dev/VPCsim-Unity-html5
  * Testing the html5 builds...
    - Loaded just my character controller script into an object and built it.
    - If I build for the webplayer it works in Firefox and Safari, but Chrome won't allow even the latest WebPlayer plugin.
    - If I build for WebGL html5 it throws an error in FF, and Chrome, but works in Safari:

~~~
Uncaught TypeError: WEBAudio.audioContext.listener.setVelocity is not a function
~~~

    - It looks like this is due to changes in WebGL's API that Unity's player has not kept up with. The recommendations were to update the app to use an even newer version of Unity and to accept that keeping a Unity-based WebGL game working in all browsers will take ongoing maintenance. So even if I get it working today, it may break again tomorrow...
