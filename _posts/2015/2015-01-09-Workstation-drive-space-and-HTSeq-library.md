---
title: Workstation drive space and HTseq library
date: 2015-01-09T12:33:31+00:00
layout: post
categories:


---
  * Talked to Paul Wolf about adding drive space to the workstation. We need a big empty space just for current projects so we have the room to temporarily store intermediate files that will allow us to back up a step or two in a pipeline without starting over. Those files aren't needed once the analysis is done. Currently we are having to delete intermediate files after each step so we only have the raw data and the output from the most recent step in the pipeline in order to avoid filling the /home drive.
  * Found a python library for handling high throughput sequencing data (HTSeq). It provides tools for doing things like stepping through a fastq file much more nicely than the clumsy way I have been doing it in my gbs-tools scripts. I installed it on crozier and the workstation (python-htseq & python-htseq-doc from Ubuntu's repository) and shared info with Paul, Karen Mock, and Martin Schilling. Tutorial at: <http://www-huber.embl.de/users/anders/HTSeq/doc/tour.html>.  It can be called using:

~~~
import HTSeq
~~~
