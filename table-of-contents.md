---
layout: page
title: Table of Contents
permalink: /table-of-contents/
---

<ul class="post-list">
  {% for post in site.posts %}
    <li>
      <span class="post-meta">{{ post.date | date: "%Y-%m-%d" }}</span> &nbsp;
      <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title | escape }}</a> &nbsp;
      <span class="post-meta">{{ post.categories | join: ', ' }}</span>
    </li>
  {% endfor %}
</ul>
