---
title:  Problem with gradient pcr?
date:  2017-03-22
layout: post
categories:
  - ideas
---
# Problem

When I optimize PCR reactions for temperature using a gradient and then try to do future runs using a temperature that worked and with no other changes, the PCR often fails completely.

# Hypothesis

The actual temperatures of the wells in a temperature gradient does not match the temperatures the machine reports, so when I use the reported temperature I am actually using a different temperature than what worked in the gradient test.

# Prediction

Sean Moody suggested: If I set the same gradient I used in the gradient test, but turn the tube strip sideways to just use the row that has the temperature that worked, my PCR should work. The actual temperature I am using will be unknown, but at least I will have a way to set the machine to get it.
