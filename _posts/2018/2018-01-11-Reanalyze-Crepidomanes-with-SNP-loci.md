---
title:  Re-analyze Crepidomanes with SNP loci
date:  2018-01-11
layout: post
categories:
  - t. intricatum gbs
---
# Problem

When ipyrad filters loci by sample coverage it does it for the whole locus, which may have multiple SNPs. Because read lengths differ, not all SNPs will have the same sample coverage as the whole locus so when we randomly pick one SNP for the ustr output, we end up with some SNP loci that don't meet the sample coverage cutoff we requested. That means our dataset contains more missing data than expected.

For example, my c85_dip_s27 dataset has 123 loci, but ~45% of them don't actually have coverage in 27 samples. ~10% of them have coverage in less than 13 samples!

Further complicating things, because ipyrad randomly picks one SNP per locus for the ustr dataset, when you do multiple ipyrad runs you aren't getting the same SNP loci. So my c85_dip_s27 dataset isn't actually a subset of my c85_dip_s18 dataset.

# Solution
If I start with an ipyrad dataset with a low cutoff, I can use a script to filter SNP loci that don't actually meet that specified cutoff--or any higher cutoff. By using the same ipyrad dataset and filtering for different cutoffs, I can get datasets that are actually subsets of each other. My resulting datasets will have fewer loci, but the loci they have will be better and should contain more signal with less noise.

# Re-analysis

Started with c85_dip_s6.stru from ipyrad.
  * I don't plan to make any datasets with coverage in <6 samples so this is a good starting point.
  * I didn't use s4 because it has many more loci and so takes longer to process.
  * Also, when I filter them down to high coverage SNP loci, the s6 yields a few more SNP loci than the s4 (because a few more of the SNPs chosen by random happen to have higher coverage in the s6).
  * The ideal would be to modify ipyrad to generate a ustr with the SNP with highest coverage for each locus rather than a randomly selected SNP for each locus, but I doubt the few extra loci I'd keep are worth the time it would take. It isn't as simple as just parsing the str file, because there is nothing in the str file to indicate which SNP loci come from the same ipyrad locus.

## Filter ipyrad loci to SNP loci

I made 4 filtered datasets:
  * snp6 (30242 loci)
  * snp18 (33% coverage - 578 loci)
  * snp27 (50% coverage - 69 loci)
  * snp36 (66% coverage - 14 loci)

## Identify likely mixed samples - "multiple run variation method"

Structure
  * For each dataset, find the optimal K. Tested K=1 to 20, with 5 reps each. 100K burnin/250K MCMC. K values plateau at 3-4. Using 3 since we are expecting 3 species.
  * For each dataset, do 100 runs at K3 to check for consistency of species assignment.
    - snp18
      - best 1-27 (Ln>-8565): crep = c1+c3. van+did = c2.
      - 28-84 (Ln>8741): crep = c1. van = c2. did = c3.
      - 85 (Ln>8745): crep = c1. van = c2. did = c2 + c3.
      - 86-99 (Ln>8786): crep = c1. van = c2. did = c3.
      - 100 (Ln>8911): Did sporophyte assigned to all three clusters.
    - snp27
      - best 1-91 (Ln>-707): crep = c1. van = c2. did = c3.
      - 92-100 Did sporophyte assigned to all three clusters.
    - snp36
      - best 1-66 (Ln>-112) : crep = c1. van = c2. did = c3.
      - 67-91 (Ln>-182): crep = c1+c3. van+did = c2.
      - 92-100 (Ln>-674): Did sporophyte assigned to all three clusters.
  * Combine runs to get a mean (and min/max) probability of assignment to crepidomanes for each run.
    * Non-Crep (always <10% Crep)- 13 samples: S02, 11, 18, 23, 26, 29, 30, 31, 50, 51, 52, 53, 54
    * Mixed/Uncertain - 19 samples: S01, S05, 07, 12, 13, 14, 17, 19, 20, 21, 22, 25, 28, 32, 34, 36, 37, 39, 49
    * Crep (>90% crep)- 22 samples: S03, 04, 06, 08, 09, 10, 15, 16, 24, 27, 33, 35, 38, 40, 41, 42, 43, 44, 45, 46, 47, 48
  * If I remove all of the loci present in the 13 non-Crep samples, those 13 samples drop out of the dataset, but 7 others are left with <10% of the total loci.
    - Possible explanations:
      1. These could be entirely Crepidomanes samples that just have low locus coverage, and these loci are Crepidomanes-specific loci.
      2. These 7 samples could be mixed samples but mostly non-Crepidomanes so they just don't have many loci left after removing the non-Crepidomanes signal. But these few loci left are  Crepidomanes-specific loci.
      3. But it is also possible that these are mostly or entirely non-Crepidomanes samples and the few remaining loci are non-Crepidomanes loci that happened not to be present in the 13 non-Crep samples. Leaving these samples and their loci in for further analysis results in these samples tending to be grouped together on longer than normal branches, suggesting this is the case.
    - I am going to remove these samples and all their loci too. This is the more conservative choice if I am trying to remove all non-Crepidomanes signal from my dataset. If I am wrong and these are really Crepidomanes samples/loci, I've lost 7 samples but they wouldn't have placed reliably anyway due to their low locus counts and I'm only losing a few loci since they have so few to start with. Dropping these samples with the lowest locus coverage will reduce the missing data in my dataset making my overall analysis more robust.

Non-Crep (13 samples):
  * always <10% Crep:
    - S02, 11, 18, 23, 26, 29, 30, 31, 50, 51, 52, 53, 54
  * Low-loci (7 samples)
    - <10% of loci after filtering:
      - S01, 19, 22, 27, 32, 45, 49
Mixed/uncertain (14 samples):
  * S05, 07, 12, 13, 14, 17, 20, 21, 25, 28, 34, 36, 37, 39
Crep (20 samples):
  * S03, 04, 06, 08, 09, 10, 15, 16, 24, 33, 35, 38, 40, 41, 42, 43, 44, 46, 47, 48

Generate 4 datasets (start with snp6.stru):
  * Crep_unfiltered: 20 Crep samples with all loci present in 50% (10 samples)
    - Remove Mixed/Non-Crep/Low-loci samples from snp6.stru, Filter for loci present in 10+ samples, Filter for variable loci
    - 20 samples, 2505 loci
  * Crep_filtered: 20 Crep samples with Crep-only loci present in 50% (10 samples)
    - Remove loci present in Non-Crep/Low-loci samples from snp6.stru, Remove Mixed/Non-Crep/Low-loci samples, Filter for loci present in 10+ samples, Filter for variable loci
    - 20 samples, 1954 loci
  * All_unfiltered: 20 Crep + 14 Mixed/uncertain with all loci present in 50% (17 samples)
    - Remove Non-Crep/Low-loci samples from snp6.stru, Filter for loci present in 17+ samples, Filter for variable loci
    - 34 samples, 632 loci  
  * All_filtered: 20 Crep + 14 Mixed/uncertain with Crep-only loci present in 50% (17 samples)
    - Remove loci present in Non-Crep/Low-loci samples from snp6.stru, Remove Non-Crep/Low-loci samples, Filter for loci present in 17+ samples, Filter for variable loci
    - 34 samples, 516 loci

When I do structure runs on the 4 datasets I get results that suggest I might do this better another way...
  * Crep_filtered vs Crep_unfiltered gives nearly identical structure assignments. This is good and suggests my Crepidomanes samples really are Crepidomanes, not mixed samples.
  * All_filtered vs All_unfiltered gives very different results. This is expected, since removing the non-Crep loci from mixed samples should make them group differently.
  * Crep_filtered vs All_filtered gives concerning results. In Crep_filtered, the Crep samples get split into 4 groups. In All_filtered, the Crep samples all get lumped into one group and the mixed samples get split between that group and other groups. This suggests that when you add mixed samples the variation in the Crep samples is small compared to the variation among the mixed samples. This would be the expected result if the Crepidomanes part of the mixed samples happened to be more variable than the pure Crepidomanes samples (possible but unlikely), or if we weren't really removing all the Non-Crep loci and the mixed samples are grouping based on the non-Crep signal (more likely).
  * Based on this:
    * using the either the Crep_filtered or Crep_unfiltered dataset should be fine. I'll get similar inferences either way. Crep_filtered is more conservative.
    * I should not use All_unfiltered (I'd never planned to... I just included it to be able to make these comparisons).
    * I should not use All_filtered. There is likely non-Crep signal overriding any variation among the Crepidomanes part of the mixed samples.
    * However, some of the mixed samples DO group with the Crepidomanes samples, suggesting that they may not have the non-Crep signal that the others do. I was very conservative in how I segregated Mixed from Crepidomanes samples (by including results from structure runs with much lower likelihoods than the highest run), and I can redo that in a way that reassigns most of the mixed samples that seem to not have non-Crep signal as Crepidomanes while still assigning the others as mixed samples. Then my Crep_filtered and Crep_unfiltered datasets will have more samples and I focus on them and leave out mixed samples entirely.

## Identify likely mixed samples - "best run confidence interval method"

  * I previously thought I needed to use results from many structure runs to get a feel for the variation in group assignments, so I was combining results from 100 runs with a wide range of likelihoods. As a result, I was overly conservative in deciding which samples were "pure" Crepidomanes. Using the confidence intervals from the best run on each dataset (snp18, snp27, and snp36) will allow me to reassign the mixed samples that grouped with the Crepidomanes samples as Crepidomanes while leaving the ones that grouped separately as Mixed.
  * Reran structure on snp18, snp27, and snp36 with ancdist turned on to get confidence intervals. 20 runs of each and selected the run from each with highest likelihood.
  * Using those 3 best runs, I assigned samples as follows (and added to the sample_attributes_table.csv as less_cons_structure_id):
    - Non-Crepidomanes (13 samples).
      - \>90% assignment to the sporophyte group (<10% assignment to the non-sporophyte group) on all 3 runs.
      - S02, 11, 18, 23, 26, 29, 30, 31, 50, 51, 52, 53, 54
      - Low-loci (7 samples).
        - <10% of total loci after removing loci present in the 13 non-Crepidomanes samples.
        - S01, S19, S22, S27, S32, S45, S49
    - Crepidomanes (28 samples).
      - \>90% assignment to the non-sporophyte group AND the confidence interval includes 100% and doesn't extend below 80% (<10% assignment to the sporophyte group AND confidence interval includes 0% and doesn't extend above 20%) on all 3 runs.
      - S03, S04, (S05), S06, S08, S09, S10, (S14), S15, S16, (S17), S24, (S28), S33, (S34), S35, (S36), (S37), S38, (S39), S40, S41, S42, S43, S44, S46, S47, S48 (samples in parentheses were previously assigned as Mixed)
    - Mixed (6 samples).
      - Don't meet the requirements for the other groups.
      - S07, S12, S13, S20, S21, S25
  * Made 4 new datasets following same process as last time, but with these new assignments:
    - Crep_28_unfiltered: 28 Crep samples with all loci present in 50% (14 samples)
      - Remove Mixed/Non-Crep/Low-loci samples from snp6.stru, Filter for loci present in 14+ samples, Filter for variable loci
      - 28 samples, 1596 loci
    * Crep_28_filtered: 28 Crep samples with Crep-only loci present in 50% (14 samples)
      - Remove loci present in Non-Crep/Low-loci samples from snp6.stru, Remove Mixed/Non-Crep/Low-loci samples, Filter for loci present in 14+ samples, Filter for variable loci
      - 28 samples, 1316 loci
    * All_34_unfiltered: 28 Crep + 6 Mixed/uncertain with all loci present in 50% (17 samples)
      - Remove Non-Crep/Low-loci samples from snp6.stru, Filter for loci present in 17+ samples, Filter for variable loci
      - 34 samples, 632 loci
    * All_34_filtered: 28 Crep + 6 Mixed/uncertain with Crep-only loci present in 50% (17 samples)
      - Remove loci present in Non-Crep/Low-loci samples from snp6.stru, Remove Non-Crep/Low-loci samples, Filter for loci present in 17+ samples, Filter for variable loci
      - 34 samples, 516 loci

# Other questions/concerns

## Contamination

What about Paul's suggestion that some of the noise in the data could be due to loci from contaminants? BLAST locus consensus sequences? I did this with my npgeno loci. With no fern genomes BLAST is going to find hits in other genomes. How do we decide how much similarity to potential contaminants is too much?

## Isolation by distance  
  * How does distance between samples compare to distance within a sample? For my replicates, what is the distance between each pair? How much of that distance is due to differences that are autapomorphic? How does that compare to the distance between non-replicate pairs? Maybe show some of this by plotting pairwise distances (by what?) and labeling the replicate comparisons.
  * Perhaps the IBD will show a general trend now that the non-Crep signal is gone? Yes... but it disappears when you remove the within-collection pairwise comparisons. Within-collections there is less distance than at larger distance scales. Distances are very similar for within-site, within-region (<100km), and between regions.
  * If there is no IBD trend acrossed the entire landscape, consider whether there is a trend within smaller geographic areas (just within Southern Illinois or just moving around the plateau at Pound's hollow, for example. I have clusters of geographic distances. Does it make sense to look at only the smallest distance cluster comparisons... all comparisons where the geographic distance between 2 samples is less than xx km? Or greater than xx km? How does average genetic distance within a sample compare to within a site compare to within a region?)
  * Now that we have a better idea of Crep vs Mixed vs Non-Crep species assignments for the samples (including considerations of samples with very few loci), go back and see how accurate the PCR-based species ID method worked. Is that something we could propose as a quick species-test for independent gametophytes?

## Subdivide loci by which genotypes are present?
  * In the old npgeno analysis I split my loci 3-ways:
    - Loci with no heterozygosity (only AA and aa genotypes). These are consistent with what would be expected in haploid gametophytes.
    - Loci with the maximum possible heterozygosity (only AA and Aa genotypes). These could occur by chance, especially at low minor allele frequencies, but I have many loci that have the maximum possible heterozygosity even when expected heterozygosity is high (i.e., with large minor allele frequencies). This is consistent with what would be expected if some samples have low-level contaminants of other species.
    - Loci with all 3 genotypes present (AA, Aa, and aa). This is the expected situation, especially when minor allele frequencies are high.
  * The distance trees for each subset looked different on that dataset:
    - The distance tree for all loci looked very much like my current distance tree. The V.bos samples and mixed/uncertain samples are separate on long branches, and the Crepidomanes samples are clustered on short branches.
    - The tree for MaxHet loci looked like a star--all signal is lost.
    - The tree for HObs0 has better defined groups than my current tree. The samples in the groups are similar, but the ratio of internal branch lengths to tip lengths is higher.

## Treat samples as populations rather than individuals

  * I am giving up on this for now:
    - The tools I can find to make distance tables or trees from allele frequency data are designed for microsat or microarray data and don't have a mechanism for handling missing data.
    - The pool-seq tools assume that a known number of individuals are included in each pool, the number of individuals per pool is consistent, and the the amounts of DNA from each individual has been carefully balanced. My experiment violates all three assumptions--I have an unknown number of individuals in each pool, likely different numbers of individuals in each pool, and the amount of DNA from each individual likely varies drastically.
  * Something interesting I could still look at: Do the samples I suspect are mixed have higher estimated error rates than the samples I think are not mixed? A sample mixed at a ratio other than 50:50 would tend to have more loci that don't pass ipyrad's heterozygosity analysis and those minor alleles would then be called as errors.

# Problem with my geographic distances in previous IBD analyses
  * Problem with some Illinois sample coordinates: My longitude values were wrong on my Giant City, Little Grand Canyon, Pomona Bridge, and Piney Creek Ravine locations. They all said -88.xxxx when they should be -89.xxxx. It looks like I switched the 89's for 88s when making the table of locations for my dissertation and then used that same table of locations in the npgeno analysis I presented in Washington, DC and everything since. That explains why my IL samples looked farther east than I expected on the map. 4 of the samples should be shifted west by 1 degree. I am fixing it on the maps I am making now and will use the correct locations for the IBD analysis.
