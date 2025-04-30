---
title:  Comparison of good vs bad RADseq libraries
date:  2024-01-25
layout: post
categories:
  - sphagnum other
  - ideas
---
I had two RADseq libraries that I prepared at the same time and were sequenced together but had very different results in terms of data completeness and quality. What made the difference? 

| Library feature | Bad G7 library | Good G8 library |
| --------------- | -------------- | --------------- |
| Low extraction concentration | 55 samples | 3 samples |
| Low template in digestion | 26 samples | 3 samples |
| Average PCR concentration | 15.9 ng/uL | 11.6 ng/uL |
| Min PCR concentration | 11.4 ng/uL | 2.7 ng/uL |
| Max PCR concentration | 20ng/uL | 15.6 ng/uL |
| Average reads | 215K | 5300K |
| Min reads | 2.5K | 0.4K |
| Max reads | 1500K | 20000K |
| Average loci | 3.4K | 42K |
| Min loci | 3 | 2 |
| Max loci | 37K | 100K |
| "Good enough" samples (>500 loci) | 54/96 | 82/96 |
| "Good" samples (>10K loci) | 8/96 | 71/96 |

In the good plate, 14 samples were "bad" (low loci):
  * 4 - I did not include in the library because the PCR concentrations were very low.
  * 7 - I included less than the desired PCR product in the library because the PCR concentration was too low to give enough DNA with the full volume.
  * 3 - I could not have predicted they would be bad--the PCR concentration was fine.
  
Take-aways:
  * I need to listen to my gut.
  * I should have pushed back when I found the extractions provided by Uppsala had mostly low Qubit readings.
  * I should have stopped when the PCR Qubits readings were higher than normal--I redid the PCR and they were still high and I ran with it.
  * I shouldn't have set up a plate with a majority "rerun" samples. If they were bad before, the chance of them being bad again is high and too many bad samples can bring down an entire library.
