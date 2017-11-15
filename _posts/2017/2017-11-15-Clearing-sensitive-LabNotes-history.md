---
title:  Clearing sensitive LabNotes history
date:  2017-11-15
layout: post
categories:

---
When I first set up these jekyll-based labnotes, I imported everything from the old wordpress-based system and removed sensitive info from posts. Because I was doing all that within a git repository everything I "deleted" was still available through git. Now that this is in a public repo, I need to remove all traces of that from the history.

I truncated the repository to remove that part of the history:

~~~
git checkout --orphan temp 1808430363802f19bf897d091e23342b8f02cf1f
git commit -m "Truncated history from setting up this system,transferring data from old wordpress-based notes system, and removing sensitive info from posts."
git rebase --onto temp 1808430363802f19bf897d091e23342b8f02cf1f master
git branch -D temp
git prune --progress
git gc --aggressive
git push origin --force --all
~~~
