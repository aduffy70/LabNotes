---
layout: default
title: Project-None
---
<h1>Project: None</h1>
{% for post in site.posts %}
  {% assign noproject = true %}
  {% if post.categories contains 'sphagnum magellanicum' %}
    {% assign noproject = false %}
  {% endif %}
  {% if post.categories contains 'sphagnum subsecunda biogeography' %}
    {% assign noproject = false %}
  {% endif %}
  {% if post.categories contains 'sphagnum other' %}
    {% assign noproject = false %}
  {% endif %}
  {% if post.categories contains 'gsta alt splicing' %}
    {% assign noproject = false %}
  {% endif %}
  {% if post.categories contains 'gsta assays' %}
    {% assign noproject = false %}
  {% endif %}
  {% if post.categories contains 'gsta cbc weight' %}
    {% assign noproject = false %}
  {% endif %}
  {% if post.categories contains 'gsta expression' %}
    {% assign noproject = false %}
  {% endif %}
  {% if post.categories contains 'gsta isoforms' %}
    {% assign noproject = false %}
  {% endif %}
  {% if post.categories contains 'gsta methylation' %}
    {% assign noproject = false %}
  {% endif %}
  {% if post.categories contains 'gsta mirna' %}
    {% assign noproject = false %}
  {% endif %}
  {% if post.categories contains 'gsta other' %}
    {% assign noproject = false %}
  {% endif %}
  {% if post.categories contains 'pm2.5' %}
    {% assign noproject = false %}
  {% endif %}
  {% if post.categories contains 't. intricatum gbs' %}
    {% assign noproject = false %}
  {% endif %}
  {% if post.categories contains 'h. wrightii' %}
    {% assign noproject = false %}
  {% endif %}
  {% if post.categories contains 'science ed drk12' %}
    {% assign noproject = false %}
  {% endif %}
  {% if post.categories contains 'science ed vpcsim' %}
    {% assign noproject = false %}
  {% endif %}
  {% if post.categories contains 'science ed vpgsim' %}
    {% assign noproject = false %}
  {% endif %}
  {% if post.categories contains 'conference-travel' %}
    {% assign noproject = false %}
  {% endif %}
  {% if post.categories contains 'ideas' %}
    {% assign noproject = false %}
  {% endif %}
  {% if noproject == true %}
  <article class="post" itemscope itemtype="http://schema.org/BlogPosting">
    <header class="post-header">
      <h1 class="post-title" itemprop="name headline">
        <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title | escape }}</a>
      </h1>
      <p class="post-meta-path">atom ~/Dropbox/LabNotes/{{ post.path }}</p>
      <p class="post-meta"> <a href="{{ post.path | prepend: 'https://github.com/aduffy70/LabNotes/commits/master/' }}">Revision history on GitHub</a> &nbsp;&nbsp; Created: <time datetime="{{ post.date | date_to_xmlschema }}" itemprop="datePublished">{{ post.date | date: "%b %-d, %Y" }}</time></p>
    </header>
    <div class="post-content" itemprop="articleBody">
      {{ post.content }}
    </div>
  </article>
  {% endif %}
{% endfor %}
