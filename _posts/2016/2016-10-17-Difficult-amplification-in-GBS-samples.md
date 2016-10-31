---
title:  Difficult amplification in GBS samples
date:  2016-10-17
layout: post
categories:
  - t. intricatum gbs
---
Discussion with Paul Wolf:

I'm having trouble amplifying most markers from the filmy fern samples I used in my GBS run. I have a marker (atpB-rbcL spacer) I think I can use to sort them by species, but it would be good to also be able to amplify some sequence from each of my species, compare it to Genbank sequence, and confirm that the species are all what we think they are.

rbcL would be best, but it is not working on the Didymoglossum or "mystery fourth species".

Can I use the sequences that are available to design primers that will amplify a small (less likely to be degraded) section of rbcL, which still has sufficient variability to see where these fall in the filmy phylogeny?

  * There are not Didymoglossum petersii (or Trichomanes petersii) or Vandenboschia boschiana (or Trichomanes boschianum) rbcL sequences in genbank
    * D. petersii is in Didymoglossum subgenus Didymoglossum. Other examples of this subgenus (according to [Ebihara et al 2006][1]) that DO have rbcL sequences in genbank:
      * D. tahitense
      * D. motleyi
      * D. krausii
      * D. barklyanum (barklianum)
      * D. lorencei
      * D. hildebrandtii
      * T. reptans
      * T. punctatum
      * T. liberiense
      * T. hymenoides
      * T. pinnatinervium
      * T. membranaceum
      * T. gourlianum
    * V. boschiana is in Vandenboschia subgenus Vandenboschia. Others w/rbcL in genbank:
      * V. radicans
      * V. maxima
      * V. birmanica
      * V. davalliodes
      * V. liukiuensis
      * V. collariata
      * V. speciosa (very different from others)
      * V. cyrtotheca
      * V. gigantea
      * T. maximum
      * C. birmanicum
      * T. johnstonense
      * T. radicans
    * C. intricatum is in Crepidomanes subgenus Crepidomanes section Crepidomanes. Others w/rbcL in genbank:
      * C. schmidianum (schmidtianum)
      * C. makinoi
      * C. latealatum
      * C. kurzii
      * C. bipunctatum
      * C. acuto-obtusum
      * C. mettenii
      * C. africanum
      * C. melanotrichum
      * C. inopinatum (inopinata)
      * C. fallax
      * C. intramarginale
      * C. frappieri
      * C. clarenceanum
      * C. chevalieri
      * C. melanotrichum
      * C. christii
      * C. vitiense
      * C. latealatum
      * C. latemarginale
      * T. walleri


How do the rbcL primers align to each of these two groups?

~~~
>F1F
ATGTCACCACAAACAGAAACTAAAGCAAGT
>1379R
TCACAAGCAGCAGCTAGTTCAGGACTC
>26F
ATGTCACCACAAACAGAGACTAAAGC
>H1F1
TCTCAACCATTCATGCGTTGG
>H1R1
CTTCACATGTACCTGCAGTAGC
>rbcL-TKT-F1
ACCCAWGTCACCACAAACRGAG
>rbcL-TKT-R3N-3 (Ebihara calls this R3N-2... my typo when ordering? Sequence is correct)
CAAGCGGCAGCCRAYTCAG
~~~

Most of the sequences in Genbank are too short to show the primer locations (they were amplified using those primers) but there is one long Crepidomanes-Crepidomanes and one long Vandenboschia-Vandenboschia. The only longer Didymoglossum sequence is only longer at the 3' end.

You can see why the F1F, F26, and F1379R primers struggle in my samples. It looks like the TKT-F1 and TKT-R3N-3 pair should work better. I looked through my records and it doesn't look like I ever tried to amplify using those--though I did test them as sequencing primers. The H1F1/H1R1 internal sequencing primers are in conserved sequence.

![Forward primers aligned to long filmy rbcL sequences][image1]

  * Note: the majority of rbcL reads in genbank start at bp751 in this alignment.

![Reverse primers aligned to long filmy rbcL sequences][image2]

  * Note: most rbcL reads end at bp1955 in this alignment.

I looked through my records and it doesn't look like I ever tried to amplify using those--though I did test them as sequencing primers.

Let's try amplifying each species with the TKT primers.
  * In the 2003 paper they used fairly normal PCR: 35 cycles- 94C for 45s, 48-52C for 45s, 72C for 75s
  * In the 2008 paper they used unusual settings (or there is a typo): 50 cycles- 94C for 5s, 52C for 1s, and 72C for 10s
  * I'm curious to try the 2008 settings and see if anything amplifies.

[1]: http://dx.doi.org/10.3767/000651906X622210
[image1]: {{site.image_path}}rbcL_forward_primers_aligned.png
[image2]: {{site.image_path}}rbcL_reverse_primers_aligned.png
