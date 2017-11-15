---
layout: post
title:  "Jekyll installation"
date:   2016-08-23
categories:

---
For jekyll 3.2.1 and its dependencies, we need ruby >2.2 so we need to upgrade from the default version on OSX or Ubuntu.

# Upgrade ruby on OSX El Capitan #

  * Install homebrew
  * Install rbenv and use it to install ruby 2.2.5 and set it as the default:

    ~~~
    brew install rbenv ruby-build
    echo 'if which rbenv > /dev/null; then eval "$(rbenv init -)"; fi' >> ~/.bash_profile
    source ~/.bash_profile
    rbenv install 2.2.5
    rbenv global 2.2.5
    ruby -v # Should be 2.2.5
    gem -v  # Should be 2.4.5.1
    ~~~


# Upgrade ruby on Ubuntu 14.04 #

  * Install a ppa for ruby and use it to install a more recent version than is in the Ubuntu repository:

    ~~~
    sudo apt-add-repository ppa:brightbox/ruby-ng
    sudo apt-get update
    sudo apt-get install ruby2.2
    sudo apt-get install ruby2.2-dev
    ruby -v  # Should be 2.2.5
    ~~~


# Install jekyll (either operating system) #

  * Install jekyll and associated gems

    ~~~
    sudo gem install jekyll
    sudo gem install bundler
    sudo gem install github-pages
    sudo gem install jekyll-paginate
    jekyll -v  # Should be 3.2.1
    ~~~

  * From within a jekyll site, you can build and serve on <http://localhost:4000> with:

    ~~~
    jekyll serve
    ~~~

  * To clone the lab notebook to a new machine:

    ~~~
    git clone ssh://YOUKNOWTHEUSERNAME@YOUKNOWWHICHIP:YOUKNOWWHICHPORT/~/elab_git_repo .labnotes
    ln -s .labnotes/_posts Posts
    ~~~
