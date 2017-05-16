---
title:  More primers to amplify alternative versions of GSTA3 UTR5
date:  2017-05-12
layout: post
categories:

  - gsta alt splicing
---
I'm struggling to consistently amplify suspected alternative versions of GSTA3 UTR5. So, I designed additonal primers in this region so I don't have to rely on just the RACE UPM primer.

Ordered 5 new primers:
~~~
>G3-U5-1F
GGAGCTGCCAAGTTAAACCAGAAGTG
>G3-U5-2F
CACGTAAGCAGTAACTCAGTGGAGAC
>G3-U5-3F
CAGCCTAGCAGTATAACACCTTTTCTTTTCC
>G3-U5-4F
ATGATTGTCACTGAGTAACTGCCTTGAG
>G3-U5-5F
ATGATTCTATAGTCTCTCTTGTCACTAATCCATCTC
~~~

![UTR5 primer locations][image1]

Designed one more forward primer that starts in exon1 but extends into exon2 of version B (the part that is unique to version B). The 5' end of this primer will also bind to version A cDNAs but won't amplify because the 3' end doesn't align anywhere in those cDNAs. The 3' end will also bind to version C cDNAs but won't amplify because the 5' end doesn't align anywhere and the 3' part that aligns has a very low Tm (~35-40C). It also shouldn't amplify genomic DNA since the 5' end will align upstream of the intron and the 3' end will align downstream of the intron (with the same low Tm). So this primer should only amplify version B cDNAs. It can't be used with the G3-U5bc-XR primers because it overlaps with them by a few bases, but if used with G3-U5abc-R or June's cds primers it should only amplify version B.

~~~
>G3-U5b-1F
TGAGTACAGAAGATCTTTGTTTTCAGC
~~~

[image1]: {{site.baseurl}}/assets/GSTA3_UTR5_primer_locations.png
