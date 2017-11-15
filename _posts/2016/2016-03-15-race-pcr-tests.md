---
title: RACE PCR tests
date: 2016-03-15T08:57:40+00:00
layout: post
categories:
  - gsta alt splicing
---
PCR0208

  * Testing reagents and June Kim's RACE-ready cDNAs
  * Amplifying 5' UTR from EW and CT (Nicholas Commercial Turkey) RACE-ready 5'-CDS
  * Amplifying 3' UTR from EW and CT RACE-ready 3'CDS
  * Using Clontech Advantage2 PCR kit as described in the SMART-RACE protocol
  * Results:
      * PCR worked at least weakly for all but EW 5'CDS. Retry this sample (I think it is the only EW 5'CDS I have).
      * Band lengths are approximately what was expected for version A of UTR5 and UTR3.
      * I don't see the double or triple bands I hoped to find, so I need to design primers to specifically try to capture the other hypothesized UTR versions.

PCR0209

  * Test primers designed to capture specific UTR3 versions
  * Try all 3 UTR3 primers on both EW & CT
  * Use UPM 3A3-2 on EW as positive control (it worked on PCR0208)
  * Results:
      * Weak short band (but no longer band) on EW with the 'ab' primer.
      * No long band on either of the 'b' primers.
      * Weak band on the EW positive control - this exact reaction gave a strong band on PCR0208, where the only difference was the annealing/extending temp.
      * Nothing on the CT positive control - this gave a weak band on PCR0208.
      * Retry using same reagents but tweak thermocycle parameters?

PCR0210

  * Retrying same setup as PCR0209 but tweaking thermocycle parameters. Try to optimize for longer products.
      * Increase denaturing time to 0:30. This is what is recommended in both the Advantage2 protocol and the SMART RACE protocol, but I used 0:15 since that is what June used.
      * Return annealing/extending temp to 68. I lowered it to 65 on PCR0209 because my primers have slightly lower Tm than Junes, but it is only 1.5 lower and I think lowering it may cause issues since that is not just an annealing step but also an extending step.
      * Increase annealing/extending time and final extending time to something between that recommended for medium (1-5kb) and large (5-9kb)target sizes. I am most interested in possible longer products so let's give them lots of time to extend completely.
  * Results:
      * Not all templates had bands, though all had smears. Some unexpected bands, probably non-specific primer binding.
      * I need to regroup and make sure I can get bands with known-good primers on all templates or I can't be sure whether a lack of product is because of bad/insufficient template or something meaningful.

PCR0212 & PCR0213

  * Using June's primers that worked, test all templates at 50%, 100%, and 200% concentration to try to optimize yield.
      * I set up the 3'CDS and 5'CDS reactions as two separate PCR runs so each master mix includes everything but the template. This reduces the effect of variables other than template concentration. To further reduce variability, I made the two master mixes side-by-side, ran both sets of reactions in the same thermocycler run, and visualized them on the same gel.
      * Even if there was no variation in the process to generate the RACE-ready cDNAs, I expect to need more template for the CT than EW birds since there should be fewer copies of the GSTA3 mRNA in the CT. I may need to use even more for the B & C version amplifications since RNAseq data suggest those are present at lower quantities than the A version.
      * I considered mixing all the tubes of each type of cDNA so I only have to do this optimization once, but did not, since it isn't clear why June made multiple tubes. I don't want to risk contaminating good cDNA with bad, so I will need to repeat this experiment each time I start into a new tube of cDNA.
      * I have been using thermocycle settings based on combinations of June's settings, the Advantage2 protocol, and the SMART RACE protocol. For this run, I based the settings on the SMART RACE protocol, program 2. I'll optimize thermocycle settings separately once I finish with the template optimization.
  * Results:
      * Only EW - 3'CDS gave results and they suggest more template is better.
      * EW - 5'CDS failure isn't surprising based on PCR0208, but I hoped to get something from both of the CT's cDNAs. Perhaps the shorter annealing/extension time in this reaction compared to PCR0208 is the difference? As a quick check of whether that is the case, I put all reactions back in the thermalcycler using the settings from PCR0208. If that works it will tell me something about what I need to be doing cycle-wise. If it doesn't it could just mean the reagents are spent and I'll need to set everything up and try again.
          * Re-cycling gave results for EW-3'CDS and CT-3'CDS, and weak multiple bands for CT-5'CDS. EW-5'CDS is still a failure for everything I've tried so far - and it is the one template for which I don't have multiple tubes.
          * Clearly the cycle parameters I am using are not optimal. The Tm's of the gene-specific primers are a couple degrees cooler than the 68 degree annealing/extending temperature of the 2-step PCR. Decreasing it to get better annealing will reduce the efficiency of the extending (I already tried this unsuccessfully on PCR0209) so I will try a 3-step PCR with lower annealing temp.

PCR0214 & PCR0215

  * Repeat PCR0212 and PCR0213 with a 3-step PCR cycle.
      * I thought I had a second tube of  EW-5'CDS I could try (since nothing using that template has worked yet) but I only have one tube of EW-5'CDS and two tubes of EW-3'CDS.
      * Changed all my primer dilutions from 10mM to the 5mM I've always used in the past. At 10mM each 25uL reaction only gets 0.5uL which I worry I can't pipette consistently (Updated the Google Docs template to match). Did this for all of my primers so I don't have a mix of 10uM and 5uM primers hanging around.
  * Results
      * EW-5'CDS failed. No surprise.
      * CT-5'CDS Gave very weak bands, imperceptible at normal viewing brightness. When I enhance the image with longer exposure the 200% band is better than the 100% band and no 50% band. There are no extra/non-specific bands so further increasing the template concentration may work.

PCR0216

  * Try my 3' RACE primers with the higher template concentration, 5uM primers, and 3-step PCR cycle that seem to be working.
  * Results
      * Positive controls failed?! My controls were the 3A3-2 reactions that worked so well on EW-3'CDS on PCR213 & 215, but it failed completely here. Why?
      * The A primer game an expected ~200bp band in both EW and CT (along with weaker non-specific bands) but not an expected weaker ~2200bp band.
      * The B primer that should have given a ~1900bp band gave a smear of non-specific bands but nothing within ~500bp of the correct length.
      * The B primer that should have given a ~1500bp band gave a ~150bp band and several non-specific bands but nothing within 500bp of the correct length.
      * The lack of positive control bands worries me. What went wrong in that reaction? I'm confident that I used the correct primer and template and everything else was in the master mix. I'm going to try rerunning this but I also want to try the amplitaq Gold 360 polymerase we have in the freezer. It is supposed to be better at amplifying through homopolymer runs (which I know I have in the longer versions) and GC rich regions (which I may have).

PCR0217

  * My 3'RACE primers with the higher template concentration, 5uM primers, 3-step PCR, and <del>Amplitaq Gold 360</del> regular Taq polymerase. The tube of Amplitaq I found didn't have enough left, even after spinning down.
  * Results
      * Failed completely. I don't know if it was bad regular Taq or the mismatch between Amplitaq gold primers and regular Taq, but for now I will just stick with the Advantage2 Polymerase.
      * Discarded products.

PCR0218

  * Try my 5' RACE primers. Used high (400%) template concentration since I've had only weak results on CT-5'CDS and didn't bother with EW-5'CDS since nothing has worked with that template in any of my tests. 3-step PCR with shortened extension time since expected bands are <1kb. Back to the Advantage2 Polymerase since that has been working and my test with regular Taq failed.
  * Results:
      * Many unexpected non-specific bands - there are some very weak bands at about the expected lengths but also brighter bands at unexpected lengths. I'm expecting the mRNAs I am interested in to be rare, so it is possible that a primer could anneal weakly to a more common transcript resulting in a brighter band than from the primer annealing well to the correct target. The Advantage2 polymerase is designed to be heat-activated so it should be approximating a hot-start PCR, but I can try manually hot-starting and also use a touchdown profile to try to reduce or eliminate non-specific binding.

PCR0219

  * Retry the reactions from PCR0218 with hot-start and touchdown. I started at 70 and dropped 1/cycle to 62 (all the primers have Tm=64-65 except G3-U5c-1R with Tm=60.
  * Results:
      * That eliminated almost all unexpected bands!
      * <span data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;5A3-R5: I think the bright lower band is the A version - the same band June sequenced. Others are non-specific? That increases the estimates of band lengths by about 100bp?\nU5abc-R: Bright middle band is A version? Short band is shorter than expected for B version and long band is longer than expected for C?\nU5bc-1R, -2R, and very weak -4R: I think that is the B version. Can I increase the number of cycles to get more of that product without getting non-specific targets? I only really need it for one of them.\nU5c-1R and -2R: failed?&quot;}" data-sheets-userformat="{&quot;2&quot;:643,&quot;3&quot;:[null,1],&quot;4&quot;:[null,2,15987699],&quot;10&quot;:0,&quot;12&quot;:0}">5A3-R5: I think the bright lower band is the A version - the same band June sequenced. Others are non-specific? That increases the estimates of band lengths by about 100bp?</span>
      * <span data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;5A3-R5: I think the bright lower band is the A version - the same band June sequenced. Others are non-specific? That increases the estimates of band lengths by about 100bp?\nU5abc-R: Bright middle band is A version? Short band is shorter than expected for B version and long band is longer than expected for C?\nU5bc-1R, -2R, and very weak -4R: I think that is the B version. Can I increase the number of cycles to get more of that product without getting non-specific targets? I only really need it for one of them.\nU5c-1R and -2R: failed?&quot;}" data-sheets-userformat="{&quot;2&quot;:643,&quot;3&quot;:[null,1],&quot;4&quot;:[null,2,15987699],&quot;10&quot;:0,&quot;12&quot;:0}">U5abc-R: Bright middle band is A version? Short band is shorter than expected for B version and long band is longer than expected for C?</span>
      * <span data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;5A3-R5: I think the bright lower band is the A version - the same band June sequenced. Others are non-specific? That increases the estimates of band lengths by about 100bp?\nU5abc-R: Bright middle band is A version? Short band is shorter than expected for B version and long band is longer than expected for C?\nU5bc-1R, -2R, and very weak -4R: I think that is the B version. Can I increase the number of cycles to get more of that product without getting non-specific targets? I only really need it for one of them.\nU5c-1R and -2R: failed?&quot;}" data-sheets-userformat="{&quot;2&quot;:643,&quot;3&quot;:[null,1],&quot;4&quot;:[null,2,15987699],&quot;10&quot;:0,&quot;12&quot;:0}">U5bc-1R, -2R, and very weak -4R: I think that is the B version. Can I increase the number of cycles to get more of that product without getting non-specific targets? I only really need it for one of them.</span>
      * <span data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;5A3-R5: I think the bright lower band is the A version - the same band June sequenced. Others are non-specific? That increases the estimates of band lengths by about 100bp?\nU5abc-R: Bright middle band is A version? Short band is shorter than expected for B version and long band is longer than expected for C?\nU5bc-1R, -2R, and very weak -4R: I think that is the B version. Can I increase the number of cycles to get more of that product without getting non-specific targets? I only really need it for one of them.\nU5c-1R and -2R: failed?&quot;}" data-sheets-userformat="{&quot;2&quot;:643,&quot;3&quot;:[null,1],&quot;4&quot;:[null,2,15987699],&quot;10&quot;:0,&quot;12&quot;:0}">U5c-1R and -2R: failed?</span>

PCR0220

  * Retry the weak and failed reactions from PCR0219 with lower annealing temperature on the touchdown and with additional cycles.
  * Results:
      * Version B: U5bc-2R, -3R, and -4R have what I think is version B - just a bit longer than expected.
      * Version C:
          * U5bc-4R also has what could be version C, though 50bp longer than expected.
          * The brightest bands on U5c-1R and -2R are 150bp shorter than expected for Version C but relative to each other they are correct. The longer band on -2R is also 150bp shorter than the possible longer length of version C.
          * Obviously both of these can't be Version C (one is too short and the other is too long so they aren't the same fragment) but one or the other might be. Or not.

PCR0220

  * Amplify the good bands from PCR0219 and PCR0220 to cut bands, gel purify, clone, and sequence
      * 5A3-R5 for version A
      * U5abc-R for version A and a secondary band that might be C (though longer than expected)
      * U5bc-4R for version B and a secondary band that might be C (though shorter than expected)
      * U5c-2R for version C (a bright band that is shorter than expected for the short sub-version and a secondary band that is shorter than expected for the long sub-version.
  * Similar touchdown cycle conditions to PCR0220 but 5 fewer cycles and a longer final extension to try to reduce smearing a bit.
  * 50uL reactions to maximize DNA in gel extractions.
