---
title:  Crepidomanes intricatum GBS reanalysis
date:  2019-04-18
layout: post
categories:
  - t. intricatum gbs
---
Based on my recent experiences analyzing RADseq datasets with ipyrad, Structure, and RAxML, I want to go back and try to reanalyze the C. intricatum GBS dataset and see if I can get better results using a simpler, more streamlined process that will be less confusing to explain in the methods of the paper.

# Things to do consider doing differently

  * Closely inspect the ipyrad output at step 2 to ensure I am getting rid of all the Illumina adapter sequence.
    - There was still ~0.5% of reads with adapter sequence so I dropped the second cutsite from the params file. Also extended the minimum sequence length to 41 (a 35bp sequence with both cutsites would only really be 25bp of meaningful sequence. Now it is at least 31).
  * Only run things as diploid--don't complicate things with haploid runs.
  * Use the variable loci/parsimony informative loci method of identifying the optimal clustering level and pick a value that is less likely to overcluster.
    - The peak is REALLY high (0.975 as opposed to ~0.9 in all the Sphagnum datasets) and drops off very quickly. I think I was massively overclustering at 0.85. I'm using 0.97 (past the peak but about halfway down to where things seem to level off a bit at 0.95).
    - I wonder how much this is being driven by the very different species included in the dataset. I amd going to redo this process after I filter the non-Crepidomanes samples in case a Crepidomanes-only dataset needs a drastically different clustering level.
  * After I identify the non-Crepidomanes samples, don't remove them by just deleting them from the ustr file. Actually go back and rerun ipyrad step 7 with them removed. I'll likely pick up loci that weren't present in the all-samples data and some of those loci might be important for resolving relationships within the Crepidomanes samples. The way I did it before biased for loci useful for resolving between species, but those loci might not be good for within-species relationships. Maybe even consider going back and reclustering--the optimal clustering level for within-species samples might be different (probably higher?).
  * Save disk space and time by only producing the output formats I need: ustr for Structure, full locus phy for RAxML, and nex for svdquartets.
  * Rather comparing analysis results at 33, 50, and 66% minimum coverage, consider just using 50 and removing samples with less than 50% of loci? If we can drop some of the samples that are likely waffling around due to low genetic signal BEFORE running Structure and building trees, it might make those results cleaner.
  * The way I used Structure was confusing and non-standard. Just use the standard StructureHarvester/CLUMPP method to combine the multiple runs and then call samples with >5% admixture or appearing in the wrong tree clade as Non-Crepidomanes samples.
  * Try Maximum Likelihood and/or svdquartets instead of Neighbor-joining trees.
  * Don't do any of the stuff to try to bioinformatically remove non-Crepidomanes signal from "mixed" samples. It distracts from the real story and didn't work anyway. In fact, don't make a big deal about the "mixed" samples anyway. Keep the focus on the idea that we ONLY included samples in the population genetics analysis if they were clearly Crepidomanes samples. The others might be mixed or low genetic signal, but it isn't important--they just aren't unambiguously Crepidomanes so we didn't include them.
  * Since I know the Didymoglossum and Vandenboschia samples have fewer loci, rather than using a cutoff based on sample coverage, use loci present in at least X samples AND in one of the sporophytes. That will reduce the bias against non-Crepidomanes loci and allow me to use a lower sample coverage level without introducing many low-coverage Crepidomanes-specific loci that don't tell me anything about the species relationships. That should maximize information about relatedness between all samples and the sporophytes, which is what I really need for the species identification part of the analysis. If I do this right it should also balance the number of loci better between samples from different species (currently my Crepidomanes samples tend to have thousands of loci while the Didymoglossum and Vandenboschia samples have ~100 or fewer)
    * Why this matters: In my original analysis, I ran at three coverage levels--33%, 50%, and 66%) to see how things differed at different levels of missing data and number of loci. But even at the levels with less missing data, I still had a lot of missing data about the relationships to the sporophytes that I really care about. So I had lots of information but almost none of it was about the relationships I was interested in:

| sample coverage cutoff | loci in original analysis | loci that include a sporophyte |
| ---------------------- | ------------------------- | ------------------------------ |
| s36 - 66% | 14 | 13 |
| s27 - 50% | 69 | 24 |
| s18 - 33% | 578 | 55 |
| s6 - 11% | 30242 | 1970 |

  * After running structure to identify possible non-Crepidomanes samples, remove the possibly admixed ones before making distance, ML, and coalescent trees. The mixed samples want to fall in two places in the tree and end up "dragging" along samples that are closely related to part of their ancestry. Removing the clearly admixed samples from the old analysis made most of the non-admixed, but low readcount/locus samples fall in the expected locations on the tree. Those low readcount/locus samples are especially susceptible to being "dragged" around... further argument for trying to balance the number of loci so locus counts aren't so horribly biased by species.
  * Before doing any post-ipyrad analyses, drop 6 samples that have lowest cleaned readcounts and/or loci. This gets rid of most of the "unknown" samples before we even start and will make everything cleaner.
    - S01 (low reads and sample loci)
    - S19 (low reads and assembled/filtered loci)
    - S22 (low assembled/filtered loci)
    - S27 (low reads and sample loci)
    - S32 (low reads and assembled/filtered loci)
    - S45 (low reads and assembled/filtered loci)
