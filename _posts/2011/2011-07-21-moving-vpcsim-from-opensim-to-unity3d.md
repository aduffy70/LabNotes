---
title: Moving VPCsim from OpenSim to Unity3D
date: 2011-07-21T23:58:39+00:00
layout: post
categories:
  - science ed drk12
---
<div>
  Experiments to figure out the best way to implement the simulations currently working in OpenSim (with a Google AppEngine Webform for controlling it) into Unity3D:
</div>

<div>
  <ul>
    <li>
      The tools for creating a GUI are much more advanced than attaching a scripted prim as a HUD.  Any script in the scene can add elements to the GUI. I should be able to eliminate 'chat' controls and replace them with GUI elements. <ul>
        <li>
          To change which time step is viewed, use a combination of a slider for approximate changes, +1/-1, +10/-10, +100/-100, and +1000/-1000 buttons, and a text box to enter a specific step number.
        </li>
        <li>
          I can also use GUI elements to create the HUD display.
        </li>
      </ul>
    </li>

    <li>
      I need movement controls that do not involve the mouse (or it becomes impossible to use GUI buttons without moving the camera view around wildly).  I think I can accomplish what is needed with 3 or 4 controls <ul>
        <li>
          Up/Down arrow should control forward and backward movement
        </li>
        <li>
          Left/Right arrows should control rotation left and right (always around the world's vertical axis - even if the local vertical axis is tilted because the camera is angled up or down)
        </li>
        <li>
          Need key combinations to rotate the camera view up and down
        </li>
        <li>
          Possibly a key combination to increase/decrease movement speed
        </li>
      </ul>
    </li>
  </ul>
</div>
