---
title:  atom settings
date:  2016-09-01
layout: post
categories:
---
[Atom editor]( http://atom.io ) is becoming integral to my workflow. Time to document some settings:

# Community packages installed

  * language-fasta (mine, on Github)
  * language-r (lee-dohm)
  * markdown-writer (zhuochun)


# Community themes installed

  * monokai (kevinsawicki)
  * github-atom-light-syntax (primer)  


# init.coffee

~~~
# Your init script
#
# Atom will evaluate this file each time a new window is opened. It is run
# after packages are loaded/activated and after the previous editor state
# has been restored.

process.nextTick ->
  atom.workspace.getPaneItems().forEach ->
    atom.workspace.destroyActivePaneItem()
~~~


# config.cson

~~~
"*":
  core:
    disabledPackages: [
      "spell-check"
      "exception-reporting"
      "fuzzy-finder"
      "metrics"
      "open-on-github"
      "welcome"
      "archive-view"
      "autoflow"
      "deprecation-cop"
      "encoding-selector"
      "package-generator"
      "about"
      "autocomplete-css"
      "background-tips"
      "dev-live-reload"
      "language-c"
      "language-clojure"
      "language-git"
      "language-go"
      "language-hyperlink"
      "language-java"
      "language-less"
      "language-make"
      "language-mustache"
      "language-objective-c"
      "language-property-list"
      "language-source"
      "language-todo"
      "language-toml"
      "link"
      "snippets"
      "styleguide"
      "symbols-view"
      "timecop"
      "wrap-guide"
    ]
    ignoredNames: [
      ".git"
      ".hg"
      ".svn"
      ".DS_Store"
      "._*"
      ".RData"
    ]
    projectHome: "/home/aduffy/Dropbox"
    themes: [
      "one-light-ui"
      "github-atom-light-syntax"
    ]
  editor:
    fontFamily: "droid sans mono"
    fontSize: 10
    invisibles: {}
    lineHeight: 1.3
    showInvisibles: false
    softWrap: true
    tabLength: 4
    tabType: "soft"
  "grammar-token-limit": {}
  "markdown-preview": {}
  "markdown-writer": {}
  "spell-check": {}
  "status-bar": {}
  "tree-view":
    hideIgnoredNames: true
  welcome:
    showOnStartup: false
".basic.html.text":
  editor:
    tabLength: 2
".coffee.source":
  editor:
    tabLength: 2
".css.source":
  editor:
    tabLength: 2
".gfm.source":
  editor:
    tabLength: 2
".json.source":
  editor:
    tabLength: 2
".sass.source":
  editor:
    tabLength: 2
~~~
