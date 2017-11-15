---
title: Crepidomanes intricatum analysis as a diploid
date: 2015-06-09T10:38:40+00:00
layout: post
categories:
  - t. intricatum gbs
---
  * Using existing clusters, look into why I have multiple rps4-trnS and rbcL clusters.
  * Which samples have rps4-trnS or rbcL reads? Do they all most closely match the Genbank C. intricatum/schmidtianum? What do the T. boschianum and D. petersii samples match? Are there any samples that seem to be misassigned to species?
  * Make a new pseudo-reference genome with vsearch instead of cd-hit (fewer missed matches or settling for worse matches):
      * cluster less stringently (Zach Gompert uses 0.8 at this step
      * cluster within samples first, then combine the centroids from each sample?
      * sort reads by quantity first? Does this matter if I use vsearch instead of cd-hit?
