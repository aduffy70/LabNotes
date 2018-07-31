---
title:  La Selva paddle gametophyte reanalysis
date:  2018-07-31
layout: post
categories:
---
In 2008, I used atpB sequence to try to identify the "paddle gametophytes" from La Selva, Costa Rica, and determined they were most likely a species of _Hymenasplenium_.  Robbin Moran, Eddie Watkins, and Don Farrar want to publish a description of these gametophytes since no _Hymenasplenium_ gametophytes have ever been described. In 2008, there were only two _Hymenasplenium_ atpB sequences in Genbank, so I need to reanalyze the sequence using all available Aspleniaceae atpB sequences.

# Methods

  * Downloaded all available Aspleniaceae atpB sequences from Genbank and combined with my paddle gametophyte sequence and an _Athyrium felix-femina_ sequence for an outgroup.
  * Cleaned up sequence names and aligned with Muscle in Aliview. Trimmed the alignment to the length of the paddle gametophyte sequence and removed equivalent sequences (identical over this length).
  * Generated a Maximum Likelihood tree with 100 bootstraps using raxml and visualized the trees in Figtree.
  * I also generated trees using these Aspleniaceae sequences plus Aspleniineae sequences (all available or just a few accessions from each genera) but it made no difference in the placement of the paddle gametophyte and resulted in large, difficult to view trees. I'm just presenting the Aspleniaceae results.

# Results

![ML_tree][image1]

  The La Selva gametophyte falls within the _Hymenasplenium_ clade. It is sister to _A. laetum_ (which Robbin confirms is actually a _Hymenasplenium_) in subclade with _H. hoffmanii_, _H. delitescens_, and _H. triquetrum_. It appears in clades with different combinations of those four species in all bootstrap trees as well.

  According to Robbin and Eddie, A. laetum is not known to be present at La Selva.

![Bootstrapped_relationships][image2]

# Still to do

  * What material do I have left for vouchers? Does anyone have remaining dry material or can we get more?

[image1]: {{ site.image_path }}La_Selva_Aspleniaceae_phylogeny.png
[image2]: {{ site.image_path }}La_Selva_relationships_from_ML_bootstraps.jpg
