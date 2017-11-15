---
title: Syntax highlighting for fasta files in nano and atom
date: 2016-06-14T11:08:56+00:00
layout: post
categories:

---
I wanted to be able to have colored nucleotides when I view fasta files so I created a fasta.nanorc and a package for atom. They work ok for files with short line lengths but if the sequence is all on one line it kills performance. I disabled it completely for nano and set it to only work on short lines for atom. For future reference, the code I used was:

## .fasta.nanorc

~~~
## Color coding for fasta files.
syntax "fasta" "\.fasta$"
icolor red "T|t"
icolor blue "C|c"
icolor green "A|a"
icolor cyan "G|g"
icolor brightyellow "R|r|K|k|S|s|W|w|M|m|Y|y|D|d|V|v|B|b|H|h|N|n"
icolor brightwhite ">.*$"
~~~

This needs to be enabled in .nanorc. I've disabled it for now. If I could figure out how to only highlight if the line length is short, I could use it.

## .atom/packages/language-fasta/grammars/fasta.cson

~~~
'scopeName': 'source.fasta'
'name': 'FASTA'
'fileTypes': ['fasta', 'fa']

'patterns': [
  {
    'match': 'C|c'
    'name': 'constant.numeric.r'
  },
  {
    'match': 'A|a'
    'name': 'entity.name.function.r'
  },
  {
    'match': 'G|g'
    'name': 'comment.line.pragma-mark.r'
  },
  {
    'match': 'T|t'
    'name': 'keyword.operator.assignment.r'
  },
  {
    'match': 'N|n|R|r|K|k|S|s|W|w|M|m|Y|y|D|d|V|v|B|b|H|h'
    'name': 'string.quoted.single.r'
  }
  {
    'match': '>.*$'
    'name': 'my.header.text'
  }
]
~~~

The names used were just chosen to get the colors I wanted without having to create new CSS entries. I took them from the language-r package. By default, syntax highlighting in atom will only highlight 100 items on a single line-to avoid the very performance problem I found-but it can be overriden with the grammar-token-limit package. I've disabled that package but left my syntax highlighting package enabled so highlighting works on fasta files with short lines.

[This was a helpful site](https://www.sitepoint.com/how-to-write-a-syntax-highlighting-package-for-atom/) for creating packages and syntax highlighting grammars in atom.
