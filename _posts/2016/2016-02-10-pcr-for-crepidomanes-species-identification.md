---
title: PCR for Crepidomanes species identification
date: 2016-02-10T09:20:32+00:00
layout: post
categories:
  - t. intricatum gbs
---
  * The last attempt (PCR0200) failed but I was using old "homemade" cTaq. Trying again with new Taq.
  * All PCR I have done in the Wolf Lab has been using cTaq, so would it be better to start with manufacturer's recommended reagents rather than the methods I used in the past?
      * Recommended Taq concentration from the manufacturer (Thermo Scientific) is 0.025U/uL. This is 1/10 the concentration of the three protocols I've used in the Wolf Lab! Compared to other manufacturers and protocols published by other labs:
          * Qiagen standard and Q-solution protocols: 0.025U/uL
          * Jim Smith's protocol for Gesneriads: 0.05U/uL
          * Barrington lab for Holly fern: 0.025U/uL
          * Li/Quandt protocol for fern gametophytes: 0.03U/uL
      * I've been using ~10X too much Taq since my first PCR reaction in the Wolf lab. I don't know if this was a typo on the PCR setup sheet template, some adjustment for the homemade Taq we were using at the time, or something that was specific to the long PCR we were trying to do back then, but all 3 PCR templates I've used have that higher concentration. It might explain my PCR struggles. I am going to use the manufacturers recommended protocol.
      * Modified my PCR Template on Google Docs:
          * to use 0.025U/uL Taq,
          * to use 2.5mM-each dNTPs instead of 1.25mM-each (since that is how Carol mixes it- my final concentration isn't changing... just using less of a more concentrated stock),
          * to use MgCl since the buffer that comes with Thermo Scientific Taq doesn't include it (1.5mM concentration to match what was in the Qiagen buffer I used to use.
          * I didn't correct the Q-solution version of the template but I did add scary red warnings. All our Q-solution is 6 years past expiration so I don't plan to use it.
  * Setup PCR0201
      * 3 Crepidomanes samples, and Pteridium4 as a positive control
      * Used my existing dilutions of rps4.5 and trnS-GGA primers
      * Made new dilutions of F1F and F1379R (used the "d" stocks since I have past results where they worked well on filmies)
      * Used the new Taq and the buffer and MgCl that came with it.
      * Used my "duffy filmy" thermal profile since it matches things that have worked on rps4.5-trnS and is close to the manufacturer's recommended profile
  * Only the positive control on rps4.5 - trnS-GGA worked on PCR201. Nothing worked for F1F - F1379R
      * Yay! The positive control worked! That is an improvement.
      * Looking through past sequencing results:
          * rps4-trnS has always had weak bands with Crepidomanes
          * Everything I've sequenced in the past are samples I suspect are Crepidomanes, except 07050 which is suspected Boschianum and it didn't amplify as well or sequence as cleanly. Everything on PCR0201 was suspected Boschianum
          * atpB411R - rbcL132R amplified better than anything else in Crepidomanes.
          * F26-F1379R amplified better than F1F-F1379R in Crepidomanes
          * Trichomanes10 was a good positive control for all the various primer pairs I used on Crepidomanes
          * Everything that has amplified has used 0.5X Q-solution and 0.01ug/uL BSA
  * So... PCR0202 has
      * BSA (mixed fresh from powder)
      * 0.5X Qsolution
      * includes a suspected Crepidomanes (at 25ng/uL) that has amplified and sequenced before
      * includes a suspected Boschianum (at 25ng/uL) that has amplified and sequenced before
      * includes the 10ng/uL dilution from the GBS run for each of the 2 samples above so I am running the same low concentration as last run plus a higher concentration of the same sample.
      * includes atpB411R - rbcL132R
      * includes rps4.5 - trnS-GGA again (since it worked for Pteridium last time)
      * Includes Trichomanes10 to see if I can use it as a positive control on future runs
      * Includes Pteridium4 as a positive control since it is the only thing I KNOW works.
  * PCR0202 results:
      * Q-solution and BSA makes things work!
      * rps4-trnS amplified weakly.
      * atpB-rbcL spacer worked better - multiple bands but I'm using really low annealing temp
      * in most cases, lower template concentration worked the same or better
      * Trichomanes10 works as a positive control. Pteridium4 fails on aptB-rbcL.
      * There is a length difference in the bands for atpB-rbcL. Vandenboschia samples have shorter bands than Crepidomanes.
  * So PCR0203:
      * Test whether aptB-rbcL band length difference is consistent in KNOWN Vandenboschia (sporophytes) and see what the band size is on Didymoglossum petersii. If it is different from Crepidomanes too, I can sort samples without sequencing.
      * Included all three Vandenboschia sporophytes and the only Didymoglossum sporophyte, plus one Crepidomanes gametophyte for comparison. Also include the mystery sample S26 to see how it's length compares.
  * PCR0203 results:
      * Mystery gametophyte, S26, the only D. petersii sporophyte, and one of the V. boschiana sporophytes failed. The other two V. boschiana sporophytes have the shorter band size as expected.
      * Problem: I have multiple goals in this sequencing: 1) separate out the non-Crepidomanes samples so I can run GBS analysis on just the one species. and 2) Confirm the V. bosch and D. pet sequences fall where expected in the filmy fern phylogeny, and 3) Determine if S26 is a 4th species and what it is or where it falls in the phylogeny.  aptB-rbcL spacer only solves #1. I need trnS-rps4 or rbcL to do the other 2 things. So I need to keep trying to get rbcL to work...
  * So... PCR0204:
      * Use F1F(d) & F1379R(d) since it is the last thing that worked on Crepidomanes
      * Try F26 & F1379(d) since it worked for sequencing on Crepidomanes
      * Include all three taxa (don't waste more S26 til we have something working)
  * PCR0204 results:
      * F1F & F1379R worked on C. int but barely on V. bos and failed on D. pet and Trich10
      * F26 & F1379R worked on C. int V. bosch, and Trich10 but failed on D. pet
      * Nothing has worked on the D. pet sporophyte so far. I need to play with concentrations and try other suspected D. pet samples to try to determine if it is a problem with that one sporophyte sample or a sequence difference in the species.
  * So... PCR0205:
      * Include all suspected D. pet gametophytes
      * Include the D. pet sporophyte at lower (5ng/uL) and higher (25ng/uL) concentrations
      * We need a C. int and V. bosch as size standards but I didn't waste template amplifying more of those. I'll include PCR products from PCR0203 (203-1-S09 for C.int and 203-3-S29 for V.bosch) when I run the gel.
  * PCR0205 results:
      * Everything failed except the positive control and a very weak band on one of the suspected D. pet gametophytes (S21). I need to find something that works on D.pet. One suspected gametohyte working doesn't give me confidence.
  * So... PCR0206:
      * trnLF-e & trnLF-f amplified and sequenced better than anything else on my first sequencing tests. I can't use it for Genbank comparisons but if it amplifies in everything I can use it to differentiate species. Trying it
      * Include all 3 taxa, including all known or suspected D.pet and the mystery S26.
  * PCR0206 results:
      * trnLF-e & trnLF-f failed on all D. petersii and the mystery S26. Only the C. intricatum and V. boschianum worked and I already knew they would.
      * I have to get SOMETHING to amplify in D. petersii!
  * PCR0207:
    * Try rps4-trnS on all three taxa. D. petersii and S26 aren't amplifying for other markers so ANY marker that will amplify in all taxa would be helpful.
  * PCR0207 results:
    * Total failure- even the positive control. Operator error? Retry...
  * PCR0211:
    * Retrying rps4-trnS on all three taxa. Exact rerun of PCR0207.
  * PCR0211 results:
    * C.int and positive control worked. V.bos may have a weak band. D.pet gametophytes, D.pet sporophyte, and S26 mystery gametophyte all failed.
    * Time to try re-extracting D.pet gametophytes and sporophyte to see if I can get better DNA that will amplify with some marker.

Here is a quick reference for the GBS sample names to original sample names to suspected species for everything I've included on these PCR runs or have sequenced in the past:

  * Sequenced in the past (from PCR146, 147, and 152):
      * S05 = 07020 = Crep gamet
      * S09 = 07032 = Crep gamet
      * NA = 07035 = Crep gamet
      * S12 = 07041 = Crep gamet
      * S16 = 07046 = Crep gamet
      * S18 = 07050 = Bosch gamet

  * On current PCR runs (PCR0201 and on):
      * S02 = 07008 = Bosch gamet
      * S07 = 07030 = Bosch gamet
      * S13 = 07042 = Bosch gamet
      * S18 = 07050 = Bosch gamet
      * S21 = F1172b = Pet gamet
      * S26 = F2002-1  = unknown gamet - this is the one that may be a 4th species
      * S29 = F2006-1 = Bosch sporo
      * S30 = F2006-2 = Bosch sporo
      * S53 = F82-4-28-8 = Pet sporo
      * S54 = F82-4-29-4 = Bosch sporo
