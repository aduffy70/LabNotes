---
title:  Using demographics to tell if two groups have diverged
date:  2024-09-27
layout: post
categories:
  - sphagnum magellanicum
  - ideas
---

# Problem

I am not entirely convinced that S. diabolicum and S. magniae are two separate entities, rather than just being a single species that varies acrossed its range.  Could we test those competing hypotheses using demographic modelling?

# Solution

We can't compare models where one model has two species diverged from an ancestor and one model has a single species because the group assignments in the two models would be different and thus would require different SFSs. But what if we did the following model comparison instead?

Model one:

Two groups diverging from an ancestor with Tdiv generations since divergence. We could estimate Tdiv, the ancestral pop size and the diverged pop sizes. A standard two-species model setup.

Model two:

Two groups diverging from an ancestor but with Tdiv fixed at zero--essentially modelling the condition where they have not diverged, but we have separated out some samples and assigned them to two populations. We could still estimate the ancestral pop size and even the current "diverged" pop sizes so the only difference from model one is that we fixed Tdiv at zero.

If model two has higher likelihood than model one would that suggest that they are not actually two separate entities?

