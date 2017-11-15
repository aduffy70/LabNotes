---
title: GBS Library Prep process summary
date: 2014-02-18T10:54:21+00:00
layout: post
categories:
  - t. intricatum gbs
---
Basic GBS library preparation process (<span style="color: #ff0000;">Red</span> indicates changes made based on Hardeep Rai's notes from 2011):

  1. <span style="line-height: 13px;">Assemble adapters with barcodes (this was done by Hardeep Rai in 2011)</span>
  2. Assemble common adapter (done by Hardeep 2011)
  3. Mix each barcoded adapter with common adapter in exact 1:1 working mixes (done by Hardeep 2011)
  4. <del>Put one adapter working mix in each plate well and dry down</del>
  5. Quantify DNA samples on Qubit
  6. Dilute DNA samples to 10ng/uL
  7. Put one 100ng DNA sample (10ul of 10ng/uL) in each plate well (strip tubes actually).  I put the 54 samples in in numerical order starting with 1A, 1B, 1C, ... 1H, 2A, 2B.... and so on.
  8. <span style="color: #ff0000;">Spin to the bottom (as needed using the salad spinner) and <span style="color: #000000;">dry down</span></span> <span style="color: #ff0000;">(looks like he didn't dry them down on 03May run but did on 09Nov. I am drying down in the Wolf Lab speed vac with the rotor removed. Tape the tray with the strip tubes off to the side to be certain it doesn't shift and hit the spinning center pivot.)</span>
  9. Digestion:
      1. Make a digest master mix (reagents in the yellow & white Scienceware cold box in the Mock freezer (with the taq stocks)
      2.                              <span style="text-decoration: underline;">Per sample</span>      <span style="text-decoration: underline;">56 X (54 samples +2 for pipette loss)</span>
      3.     NEB Buffer 3     2uL                112uL
      4.     ApeKI                  1uL                 56uL
      5.     ddH2O               <span style="text-decoration: underline;"> 17uL</span>              <span style="text-decoration: underline;">952uL</span>
      6.     Total                    20uL             1120uL
      7. Add 20uL master mix to each plate well. Capped tubes, vortexed briefly and spun back down with the salad spinner to try to get any DNA that crept up the sides of the tubes in the drying process.  If I was to do this again, I think I would NOT dry down the DNA, and just use 10uL less water in each reaction to adjust.  Using the speed vac without spinning in tiny tubes like these is a problem because the liquid doesn't always stay all the way in the bottom of the tube as it dries. I expect some of the DNA is on the sides of the tubes too.
      8. Digest 2hrs @ <span style="color: #000000;">75 C</span> then hold at 4C (used the GA_WOLF Applied Biosystems thermalcycler in the Mock lab. Program name: apeki digest under user wolf.
      9. <span style="color: #ff0000;">Bioanalyze a subset of the results to verify digestion was complete. Contact Ninglin @ the CIB. Do 11 samples on one plate of Bio-Rad Experion with a 12K_DNA chip.  Requires 3uL of each sample, but they ask for enough to rerun in case of technical issues.  I sent 6uL of 1A-H and 7A-C. $80/chip and same day results.  I billed to A27493 per email from Paul Wolf (2/25/14 subject: GBS).</span>
     10. The virtual gel image from the bioanalyzer doesn't have nearly as many dark bands in the 2000-5000bp range as Hardeep's did, so after discussing it with Paul, I added 1uL of ApeKI to each tube, vortexed, spun down, and digested for another 2 hours at 75C to let it them digest further.  There ARE darker bands in this region indicating that there was digestion, just not complete, so I will not run a second bioanalyzer run after this step.
 10. Ligation:
      1. Make ligation master mix:
          1.                                           <span style="text-decoration: underline;">Per sample</span>       <span style="text-decoration: underline;">55X (54 +1 for pipette loss)</span>
          2. 10X T4 Ligase buffer      5uL                      275uL
          3. T4 Ligase                          1.6uL                   88uL
          4. ddh2O                               <span style="text-decoration: underline;">22.2uL                 1221uL</span>
          5. Total                                  28.8uL                1584uL
          6. and 1.2uL of 3ng/uL adapters (combined apeKI barcoded and common adapters)
      2. Add master mix  and adapter to each plate well, vortex, spin down
      3. Ligate 1hr @ 22C then 30min @65C then hold at 4C
 11. Pool samples (5uL from each well) into 1350uL (54 samples \*  5uL \*5) PB binding buffer from the Qiagen PCR cleanup kit (Hardeep's 11 May 2o11 kit)
 12. Cleanup with Qiagen PCR cleanup kit (one column needed) into one 50uL EB solution for all samples combined. I was worried that it looked more orange than yellow when the PB buffer and samples were combined, so I added 10uL 3M sodium acetate per the kit instructions. It made it more yellow-looking.
 13. PCR:
      1. Taq DNA polymerase w/standard taq buffer (Biolabs M0273S)
      2. Make a PCR master mix:
      3.    10X buffer                      5uL
      4.   Primer 1 (5uM)              2.5uL
      5.   Primer 2 (5uM)              2.5uL
      6.   dNTPs  (1.25uM each   8uL
      7.   Taq                                    2uL
      8.   ddH2O                             28uL
      9.  Sample DNA                   <span style="text-decoration: underline;">2uL</span>
     10. Total                                  50uL
     11. Use master mix and "primer 1" and primer 2" and 2uL of the pooled DNA in a 50uL reaction
     12. Amplify 5min @ 72C, 30s @ 98C, 18 cycles of (10s @98 then 30s @65C then 30s @72C), 5min @72C, hold at 4C
     13. Ran a gel, there is a faint smear at about 1000bp and shorter.
     14. [<img class="aligncenter  wp-image-2006" alt="TintGBSPostPCR022714-edit" src="{{site.image_path}}wp-content/uploads/2014/02/TintGBSPostPCR022714-edit.jpg" width="352" height="161" />]({{site.image_path}}wp-content/uploads/2014/02/TintGBSPostPCR022714-edit.jpg)
 14. Cleanup with Qiaquick PCR purification kit (one column needed) into 40uL of EB
 15. Sent one of the raw digestion/ligations (2A), pre-pcr pooled/cleaned sample, and post-pcr pooled/cleaned sample to Ninglin for bioanalyzing - same settings as before.
 16. Retry PCR (this time with multiple reactions to be combined at cleanup and 2 with higher DNA concentration). After comparing the M0273 taq and M0270 Taq master mix descriptions, the previous reactions had way more taq than if I'd used the master mix version and also way more (8X) than is recommended for the non-master mix version:
      1. Taq DNA polymerase w/standard taq buffer (Biolabs M0273S)
      2. Make a PCR master mix (3 reactions with 2uL DNA and 3 reactions with 4uL DNA):
      3.                                             <span style="text-decoration: underline;">1X</span>              <span style="text-decoration: underline;">3X</span>                   <span style="text-decoration: underline;">1X</span>             <span style="text-decoration: underline;">3X</span>
      4.    10X buffer                      5uL           15uL
      5.   Primer 1 (5uM)              2.5uL         7.5uL
      6.   Primer 2 (5uM)              2.5uL         7.5uL
      7.   dNTPs  (1.25uM each) 8uL           24uL
      8.   Taq                                    0.25uL    0.75uL
      9.   ddH2O                             29.75uL   89.25uL        27.75uL  83.25uL
     10.  Sample DNA                   2uL           6uL                 4uL         12uL
     11. Total                                  50uL        150uL
     12. Use master mix and "primer 1" and primer 2" and 2uL of the pooled DNA in a 50uL reaction
     13. Amplify 5min @ 72C, 30s @ 98C, 18 cycles of (10s @98 then 30s @65C then 30s @72C), 5min @72C, hold at 4C
     14. Gel image has clearer bands for all reactions
     15. [<img class="aligncenter  wp-image-2009" alt="TintGBSPostPCR030314-edit" src="{{site.image_path}}wp-content/uploads/2014/02/TintGBSPostPCR030314-edit.jpg" width="442" height="345" />]({{site.image_path}}wp-content/uploads/2014/02/TintGBSPostPCR030314-edit.jpg)
     16. Cleaned using QiaQuick kit, combining the three 2uL reactions into one 40uL elution and the three 4uL reactions into another 40uL elution in hopes of increasing the DNA concentration even further.
 17. Another bioanalyzer run, this time hopefully better designed to show where I am going wrong if my post-PCR samples don't look like Hardeep's:
      1. Compare pre-digested DNA to post digested/ligated DNA - AT THE SAME CONCENTRATION OF 100ng/uL.  If these look the same my digest didn't work.
      2. Compare pooled pre-pcr DNA to the first PCR run (again) and to the 2uL and 4uL PCR runs.  I already know my first PCR run doesn't have nearly as much DNA in the short lengths as Hardeep's but I am including it again to have it on the same image as the new PCR runs for direct comparison.
      3. Here is what I am sending to Ninglin:
          1. 1B pre-digest (2uL of 10ng/uL + 8uL ddH2O = 2ng/uL since the post-digest/ligation samples are 100ng DNA in 50uL total)
          2. 1B post-digest/ligation
          3. 2B pre-digest
          4. 2B post-digest/ligation
          5. 3B pre-digest
          6. 3B post-digest/ligation
          7. 4B post-digest (no room for another pre/post comparison but I wanted to fill the 11 slots on the bioanalyzer chip)
          8. pre-pcr pooled/cleaned library
          9. 1st pcr cleaned results
         10. 2uL pcr cleaned results
         11. 4uL pcr cleaned results
      4. Bioanalyzer results:
      5.   1. Pre and post do look different.  I don't have the dark 3kb digested band that Hardeep had, but I am working with older, likely degraded DNA and I DO have more, darker short bands after digestion than before.
          2. My 2nd round of PCR looks much better than the first.  I have a stronger, broader band centered around 300bp and the longer bands have been attenuated. Hardeeps band goes into shorter lengths than mine, but that may actually make my sample better, since the adapter dimers are about 128 bp so anything less than that can't possible have sample DNA ligated into it.  I do have a tight thin band about where the adapter dimers would be expected.  I have no way to tell whether this is lighter or darker than Hardeeps since this band is buried in dark smear on his gels.
          3. Discussed with Paul and agreed this sample is ready for sequencing.
      6. Quantified samples using the Qubit:
          1. PCR with 2uL starting DNA: 31.0ng/uL
          2. PCR with 4uL starting DNA: 35.7ng/uL
 18. This is the library

Reagents needed:

  * DNA: 10uL of 10ng/uL
  * common adapter/barcoded adapter working mixes
  * Digestion master mix:
      * NEB buffer3
      * ApeKI
  * Ligation master mix:
      * T4 Ligase buffer
      * T4 Ligase
  * NEB Taq master mix
  * Primer 1
  * Primer 2
  * Qiaquick PCR purification kit (two columns)
