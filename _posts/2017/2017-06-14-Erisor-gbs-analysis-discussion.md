---
title:  Erisor gbs analysis discussion
date:  2017-06-14
layout: post
categories:
  - for others
---
Troubleshooting GBS analysis with Jenessa Lemon...

She has ~250 samples with some replicates. She processed the data with ipyrad and wanted to generate a NJ tree or look at genetic distances to verify that replicates are grouping together as expected. They aren't.

She used all loci with coverage in at least 4 samples. That means most of the genotypes table is missing data. She reran 2 versions using loci with coverage in 50 samples (20%) and 172 samples (70%).
  * 70% yields only 22 loci--no good.
  * 20% yields 1772 loci but still with mostly missing data:
    * The best sample has missing data for 35% of loci
    * 55 samples have missing data for >90% of loci. What is the probability that 2 samples with only 10% of possible loci will share ANY of the same loci? Genetic distance calculations won't have meaning when many samples don't share any loci with each other.

She wants to try changing the cluster threshold (from 0.9 to 0.85) but I suggested first going back to the ipyrad output files to see if there are places where data is being filtered overly aggressively.

Looking at the ipyrad analysis:
  * Only 34% of the data could be assigned to barcodes. No errors were allowed in the barcode but 2/3rds of the reads shouldn't have errors in the barcode. She needs to look into the reads that aren't being assigned to barcodes and try to understand what is happening.
  * Quality filtering on the reads that DO get assigned barcodes doesn't seem excessively strict. Not many reads are being lost in this process.
  * There are >200,000 loci before filtering for how many samples have coverage. A sample has to have 6 reads at the locus to be counted, which means that to have all loci a sample needs at least 6 X 200,000 = 1.2 million reads. Probably many more to account for sampling error. Only 1 sample has that many reads currently (46 samples have less than 100k reads). Reducing the cluster threshold will reduce the number of loci by combining them (and combining the reads from these loci will increase the chance of a sample having over 6 reads), but will the new combined loci just be discarded because they will now exceed the maximum number of SNPs per locus? She can easily test this and see.

Paul suggested that she might need to rerun the library to get more reads. But, there is wide variation in the number of reads per barcode. Will rerunning the same library give a similar distribution? If so, she will get many more reads for samples where she already has many and very few for the samples she needs most. It would make more sense to generate a new library using just the samples with the fewest reads. Depending on how the library was prepared she may not need to start from scratch.

What percentage of raw reads can be assigned with 0, 1, or 2 barcode mismatches? Used the first part of my pipeline:
  * 356024501 raw reads
  * 0 mismatches: 130543504 (37%)
  * 1 mismatch: 5466644 (1.5%)
  * 2 mismatches: 1144122 (0.3%)

That looks reasonable.

Of the reads with the barcode in the first 16 bases, how many have X bp before the cutsite (we expect most to have 8, 9, or 10 since those are the lengths of the barcodes)?

Used grep on the file with counts of unique 16bp starting sequences and then a script to add up the read counts:

| bp before cutsite | count of reads |
| ----------------- | -------------- |
| 0	| 43643 |
| 1	| 31540 |
| 2	| 37071 |
| 3	| 48831 |
| 4	| 40920 |
| 5	| 45591 |
| 6	| 48902 |
| 7	| 181007 |
| 8	| 52817923 |
| 9	| 42855453 |
| 10 | 50700821 |
| 11 | 160903 |

Looks reasonable. This makes a total of ~147 million reads with a cutsite in the first 16 bases. ipyrad found a cutsite in 99.9% of reads, so is it counting cutsites anywhere in the read? Is it counting both cutsites?
