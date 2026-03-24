---
title:  Testing mean pairwise disturbances
date:  2025-05-02
layout: post
categories:
  - sphagnum other
  - for others
---
For the Uppsala Disturbance project, I have a plot of pairwise distances for "disturbed", "natural", and "around" samples. It looks like the mean pairwise distances have this relationship:

```
around vs around < around vs disturbed < disturbed vs disturbed
                   around vs natural     natural vs natural
                                         disturbed vs natural
```

or more specifically:

```
aa << ad < an << dd < dn < nn
```

I want to know if the ones that are different have statistically significant differences and expect that the ones that seem similar are not significantly different.

So I will test the following with permutations expecting a significant difference):
  * ad - aa \> 0
  * an - aa \> 0
  * dd - aa \> 0
  * nn - aa \> 0
  * dn - aa \> 0
  * dd - ad \> 0
  * nn - ad \> 0
  * dn - ad \> 0
  * dd - an \> 0
  * nn - an \> 0
  * dn - an \> 0
  
and the following expecting no difference:
  * \| an - ad \| \> 0
  * \| nn - dd \| \> 0
  * \| dn - dd \| \> 0
  * \| dn - nn \| \> 0
  
Alternatively I could do two category tests:

```
dist vs dist < other vs other < dist vs other
```

