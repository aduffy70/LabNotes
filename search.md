---
layout: page
title: Search
permalink: /search/
---
<div class="super-search" id="js-super-search">
  <input type="text" placeholder="Search..." class="super-search__input" id="js-super-search__input" autofocus>
</div>
<div class="super-search__results" id="js-super-search__results"></div>
<script src="{{ site.baseurl | append: '/super-search.js' }}"></script>
<script>superSearch({ searchFile: '{{ site.baseurl }}/feed.xml' });</script>
