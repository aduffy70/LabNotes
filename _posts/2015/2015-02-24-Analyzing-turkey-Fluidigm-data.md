---
title: Analyzing turkey Fluidigm data
date: 2015-02-24T10:52:32+00:00
layout: post
categories:
  - gsta expression
---
  * Run 2-way ANOVA on N17 normalized values for Deepika Gaddam
      * The data aren't anywhere close to normally distributed. There are many outliers, and the values within types and treatments vary so much that even with outliers removed and transforming the data I can't get an approximately normal distribution. I think N17 normalization is not the solution. Deepika will try normalizing using the average of the N's rather than a single N bird and we will do this again.
