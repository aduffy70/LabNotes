---
title:  Setup local Github Pages builds
date:  2026-03-26
layout: post
categories:
---
# Setup for local builds of Github pages

Having to push changes and wait for the site to rebuild to find problems in my Github Pages when I am troubleshooting is annoying. Let's setup to build locally, so I can test before commiting and pushing updates.

Tested on Ubuntu 24.04 in March 2026

## Once on each machine
  * install ruby through synaptic
  * install other prerequisites:
```
sudo apt-get install ruby-full build-essential zlib1g-dev
```
  * Setup bashrc for recommended gem installation path:
```
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```
  * Install jekyll and bundler through gems:
```
gem install jekyll bundler
```

## Within each repository on the machine
  * In terminal, navigate to the repo. If there is not already a Gemfile create one containing:
```
source 'https://rubygems.org'
gem "github-pages", "~> 232", group: :jekyll_plugins
```
  * Then install the gems in the Gemfile:
```
bundle install
```
  * Run the site locally with `localbuild` alias or:
```
bundle exec jekyll serve --baseurl=""
```
  * View at [localhost:4000](http://localhost:4000)
  * Add `Gemfile.lock` and `_site/` to the .gitignore file so they don't get pushed to the Github repository.
