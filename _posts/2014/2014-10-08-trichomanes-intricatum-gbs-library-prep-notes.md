---
title: Trichomanes intricatum GBS Library prep notes
date: 2014-10-08T17:27:32+00:00
layout: post
categories:
  - t. intricatum gbs
---
Preparing a new library for the same 54 Trichomanes intricatum samples I ran before, but this time making the library using Zach Gompert's protocol and primers rather than the Elshire/Buckler ones. Worked along side Zach (with Don Hauber, Carol Rowe, and Zach Valois observing) as he made a library for one of his projects.

  * Zach provided all reagents and equipment except I used the Wolf lab's 0-10uL multipipetter and the Bernhardt lab's 200uL multipipetter.
  * Adapters had already been annealed and PCR primer working solutions made so we started at step 3 of the protocol.
  * The protocol recommends 20ng/uL dilutions but after discussing with Zach I used my 10ng/uL dilutions from my previous library prep.  Some of my extractions are less than 20ng/uL anyway so I could not have used that concentration for all of them and having similar concentrations is important - the 20ng/uL was an arbitrary recommendation, not based on testing or actual comparisons.
  * The setup for the restriction digest would have gone much faster if I had diluted my extractions into a tray or striptubes instead of using individual tubes. This protocol uses trays efficiently.
  * Used protocol [ version 2.6b October 2014 of Amplified restriction fragments for genomic enrichment ][1].
  * Adjusted volumes of master mixes since they are designed for 96 samples:


# Restriction digest master mix (80X for 54 samples):

  * 10x CutSmart Buffer - 80
  * 1M NaCl - 41.6
  * Water - 58.4
  * MseI - 8
  * EcoRI - 20

#  Restriction-Ligation master mix (70X for 54 samples):

  * MseI adapter - 70
  * 10X T4 buffer - 22.54
  * 1M NaCl - 3.5
  * T4 DNA Ligase - 11.73

#  PCR reagents (75X for 54 samples):

  * Water - 780
  * 5X Iproof buffer - 300
  * dNTP (10mM) - 30
  * MgCl2 (50mM) - 30
  * Premixed PCR Primers, 5uM - 97.5
  * Iproof Taq - 15
  * DMSO - 22.5

# Extra PCR step (75X for 54 samples):

  * 5X Iproof buffer - 31.2
  * dNTP (10mM) - 30
  * Premixed PCR primers, 5uM - 97.5

I saved (in the -20 freezer) the extra Restriction Ligation product (we used only 3uL of each 200uL) and the extra PCR product (we pooled only 10uL out of each 20uL reaction.

For barcodes, I used the first 6 columns and part of a 7th column of the Gompert EcoRI plate 1-2

| .   |  1  |  2  |  3  |  4  |  5  |  6  |  7  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| A   | 1   | 9   | 17  | 25  | 33  | 41  | 49  |
| B   | 2   | 10  | 18  | 26  | 34  | 42  | 50  |
| C   | 3   | 11  | 19  | 27  | 35  | 43  | 51  |
| D   | 4   | 12  | 20  | 28  | 36  | 44  | 52  |
| E   | 5   | 13  | 21  | 29  | 37  | 45  | 53  |
| F   | 6   | 14  | 22  | 30  | 38  | 46  | 54  |
| G   | 7   | 15  | 23  | 31  | 39  | 47  |     |
| H   | 8   | 16  | 24  | 32  | 40  | 48  |     |


  * In the PCR step I combined 2 samples in each reaction (1.5uL of each sample for a total of 3uL template) and ran 2 replicates of each reaction. Running 2 replicates of every reaction should help balance out any stochastic variation in the library due to differential amplification early on in the PCR reactions.  Combining 2 samples in each PCR keeps from doubling the number of reactions that have to be run, and the assumption is that any stochastic variation leading to one of the 2 samples being overrepresented at the end of the PCR will also be minimized because we ran it twice.  It doesn't really matter which 2 were combined in each reaction since they are all barcoded by that point and are pooled after PCR anyway, but just in case I am curious later.... I combined them by flipping the multipipetter\* for each column of the tray so I combined 1&8, 2&7, 3&6, 4&5 and so on.  \*Draw template, dispense into PCR plate, change tips, draw template, flip micropipetter 180 degrees, dispense into PCR plate, change tips, repeat for each column in the plate, only use 6 of 8 tips on the last column.
  * We ran 15uL of the pooled PCR products on an EtBr gel to check for amplification. The well partially collapsed in the gel because we pulled the comb a bit soon so my lane (4) is not as well defined as the others but there is DNA in the expected lengths. It appears that restriction digest, ligation, and pcr were successful. [ Original gel image in google docs ][2]

    ![Gel image Screen shot 2014-10-09 at 9.39.34 AM ][image1]

  * Used the BluePippin in the CIB (working with Aaron Thomas) to size select fragments from 250-350bp long. We used 3 lanes of the BluePippin with 25uL of pooled PCR product in each lane and combined the eluted DNA for a total of 75uL in the final library.
  * About 5uL of the library was used for the BioAnalyzer (also in the CIB with Aaron Thomas). [ Bioanalyzer results (in google docs) ][3] look ok. My sample (lane D1) has about half the concentration of Zach's but has a much cleaner peak at the desired fragment lengths than the library I made using the Elshire/Buckler protocol.

    ![ Bioanalyzer_B_10-10-14 results part B ][image2]

    ![ Biolanalyzer_A_10-10-14 results part A ][image3]

  * Labeled and wrapped (to avoid evaporation) the tube with the remaining 70uL of library and stored it in the -20 freezer along with the remaining ~450uL of pooled pcr product, the 10uL of each pcr product still in the 96 well plate and the ~190uL of each Restriction/Ligation product in their 96 well plate.
  * This library is ready for sequencing.

[1]: https://drive.google.com/file/d/0B0DnkQIRAeIIUWRQbjUxVlZDenlLZG51TVZ4NEdySVFCRXhj/view?usp=sharing
[2]: https://drive.google.com/?usp=chrome_app#folders/0B0DnkQIRAeIIOXVzanRnY2ZSN1k
[3]: https://drive.google.com/file/d/0B0DnkQIRAeIIMk40Vzd6U1V2Wlk/view?usp=sharing
[image1]: {{site.image_path}}wp-content/uploads/2014/10/Screen-shot-2014-10-09-at-9.39.34-AM.png
[image2]: {{site.image_path}}wp-content/uploads/2014/10/Bioanalyzer_B_10-10-14.png
[image3]: {{site.image_path}}wp-content/uploads/2014/10/Bioanalyzer_A_10-10-14.png
