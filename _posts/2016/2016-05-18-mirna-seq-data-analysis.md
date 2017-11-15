---
title: miRNA-Seq data analysis
date: 2016-05-18T13:21:48+00:00
layout: post
categories:
  - gsta mirna
---
# Data

  * Kent Reed uploaded to ftpuploader account on transcriptome 2016-05-18
    * Reed\_Project\_012: ~25Gb in 16 fastq files
  * Zip fastq files for smaller backups:
    ~~~
    tar czf Reed_Project_012.tar.gz Reed_Project_012
    ~~~

  * Backed up to:
    * Wolf storage on UofU cluster
    * my external drive on transcriptome
    * Data folder on crozier

# Sample-name to Type-Treatment

Same as previous mRNA-Seq datasets:

| Type     | Treatment | Sample |
| ----     | --------- | ------ |
| Wild     | Control   | EW9L   |
|          |           | EW10L  |
|          |           | EW12L  |
|          |           | EW13L  |
|          | AFB       | EW1L   |
|          |           | EW2L   |
|          |           | EW3L   |
|          |           | EW4L   |
| Domestic | Control   | N11L   |
|          |           | N12L   |
|          |           | N13L   |
|          |           | N14L   |
|          | AFB       | N1L    |
|          |           | N2L    |
|          |           | N3L    |
|          |           | N4L    |


# QC with fastQC (Provided with the data)

  * All samples have 53-55% GC. All of the Domesticated samples have the exact same GC=54.
  * Per base sequence quality and per sequence quality are high and similar for all samples.
  * Per base sequence contents are similar for all but EW9-the variation in base frequencies is much less along the length of the reads, though the general pattern of how each base frequency changes along the length of the reads is similar. Possibly suggests more different sequences in this sample? It is one of the samples with the largest number of reads, though several other samples have similarly high numbers of reads.
  * Almost all samples have two peaks in Per sequence GC content rather than the theoretical normal distribution of GC contents.  EW13 and EW3 have 3 peaks, and EW9 almost has a single peak.
  * Sequence duplication is high for all samples, but that is expected since we expect there to be a relatively small number of different RNAs... coverage should be high. Distribution of number of duplicates is similar for all samples.
  * There are also many overrepresented sequences, but this is expected. The most overrepresented sequence is between 2.5 and 5.7% of the reads of each sample. The same read is the most common in all samples except N13 (where it is second most common and the most common is among the overrepresented sequences for many other samples).
  * Adapter content is high (10-15%) at the 3' end of the reads (which is good since the sequences we are interested in should only be 21-22bp) and the pattern is similar for all samples.
  * There are Kmers overrepresented at some positions, mostly at the 5' end. That is expected since there are relatively few RNAs but I expected adapter Kmers to show up as overrepresented at the 5' end. The Kmers overrepresented in each sample differ, but some Kmers are overrepresented at the same positions in more than one sample.

# Analysis

## General strategy:

  * Identify known and novel miRNAs in the dataset using multiple methods that align reads to the genome and to known miRNAs (mirDeep2, miRExpress, miRKey, others?)
  * Map reads to get expression data. (EdgeR and DESeq for normalization?) In [ doi:10.1093/bib/bbv019 ]( http://doi.org/10.1093/bib/bbv019 ) TMM, UQ, DESeq and others were found to give similar results. They recommend TMM, but there is disagreement about TMM in other papers. I'm using DESeq since it seems to give similar quality results and I'm set up for it.
  * Identify miRNAs with expression patterns differing between wild and domestic birds AND with inverse pattern to GSTA expression with AFB treatment AND with predicted interactions with GSTAs (and other genes of interest?)

## miRExpress 2.1.4

  * Process:
    * Generates list of unique reads and counts (ID=100%)
    * Trims adapter
      * Adapter sequence=RA3 adapter extended by the indexed primer for each read.
      * ID=70%.
      * Trimmed reads<15bp are discarded.
      * Reads with adapter in the middle are also discarded, but that isn't an issue for our data since the adapters are longer than the reads.
    * Aligns reads to mature and precursor miRNAs from miRBase 21.0 and assigned to the miRNA with the highest score.
      * I ran it using using chicken (gga) mirbase miRNAs and precursors.
      * Also ran using known turkey precursors and predicted mature miRNAs
        * converted the unique\_precursor\_turkey\_miRNA\_hairpins and unique\_mature\_turkey\_miRNAs\_from\_unique\_hairpins to the mirbase format using convert\_turkey\_miRNAs\_to\_mirbase_format.py
    * Provides expression level (read count) for each sample-but doesn't do any normalization of those numbers.
      * Only known miRNAs are included in the expression levels. If there are any "Other" stacks in the output that I want to investigate as putative novel miRNAs I'll have to manually get the totals - but that's ok since "Others" need to be evaluated individually anyway (most are probably not novel miRNAs.
    * Even though it keeps reads 15bp and longer, reads under 18bp get classified as "Others" (with the default length match requirement of 0.8) so they won't be counted in the expression level, making this output comparable to mirdeep2 where only reads >=18bp are kept. Keeping only the reads 18bp or longer would give cleaner output (fewer Others) but that minimum length can't be specified. Wrote a script to manually remove them (remove\_under\_18bp\_from\_mirExpress_format.py
    * Reads that are more than 6bp offset from the start of the reference mature miRNAs get counted as Others and won't be included in the expression totals. Since my reference mature miRNAs are only predictions the most common reads in the stacks probably more accurately represent the true miRNA position. If I modify the predicted miRNAs based on the stacks and rerun using those modified miRNAs as the reference I'll get better expression data.
    * Including only unique mature reference miRNAs means they only get stacked against one precursor. And since those predictions may be slightly incorrect (see above) it may be that the real mature miRNAs for 2 precursors with the same predicted mature miRNAs may actually be different. But I'll only discover that if I make sure the predicted miRNAs get applied to all of the precursors, not just one. I  "un-collapsed" my mature reference miRNAs with expand\_unique\_mature\_miRNAs\_.py.
    * Requiring identity=1.0 for aligning reads to precursors throws away all reads with errors or SNPs
      * This biases against wild birds-the precursors come from the domestic genome so wild birds are more likely to be different.
      * I used identity=0.94 to allow 1 error or SNP while rejecting 2 errors or SNPs in an 18-33bp read.
    * So the process I want to use is:
      * Preprocess data and remove reads <18bp long.
      * Preliminary run (with combined data from all samples) using expanded turkey predicted mature miRNAs and unique turkey precursor hairpins, allowing alignment identity >=0.94.
      * Use preliminary run output to revise mature miRNA predictions.
        * 480 total precursor miRNAs with 960 predicted mature miRNAs:
          * 353 (37%) had no reads mapping to or near them
          * 127 (13%) had the predicted miRNA supported by the mapped reads
          * 222 (23%) had mapped reads strongly supporting (>4 reads and over 50% of reads) a small change (<6bp shift) to the predicted miRNA
          * 258 (27%) had either weak support or support for a large change (>6bp) so I evaluated them manually. Of those:
            * 219 (23%) didn't have enough evidence to support changing the prediction
            * 39 (4%) had evidence to support changing the prediction
        * So, I made a new, improved set of predicted mature miRNAs:
          * 699 (353+127+219) have no change from the original prediction
          * 261 (222+39) Have been modified from the original prediction.
          * This collapses to a set of 851 unique mature miRNAs
            * 83 mature miRNAs could potentially be derived from more than one precursor.
              * Of these, 53 have the same expression level for all precursors from which they could be derived
              * 30 have different expression levels depending on which precursor is used (this is due to differences in the surrounding sequence of the precursor. A read which is longer than the mature miRNA might map to it in one precursor, but not in another).
          * Running the full dataset (all samples) against these improved predictions gives (out of 960 improved mature miRNAs):
            * 455 not expressed
            * 505 expressed at any level
            * 384 expressed with at least 5 reads
          * Running each sample against these improved predictions to build a table of expression by miRNA and sample
            * 455 not expressed
            * 505 expressed at any level in at least one sample
            * 384 expressed with at least 5 reads total, and at least 2 samples with at least 2 reads
      * Normalize and analyze the expression data with DESeq.

## miRDeep2.0.0.7

  * Process:
    * Aligns reads to both the genome and known miRNAs. Folds genomic sequence surrounding potential novel miRNAs to try to identify precursor structures.
    * Requires fasta (not fastq) format data with a very specific format for the sequence descriptions. I wrote fastq\_tp\_mirdeep2_fasta.py to convert the dataset.
    * Requires the genome as a bwa-build (ebwt format). It is in the NCBI. I built it from GCA\_000146605.3\_Turkey\_5.0\_genomic\_fna and saved it as Turkey\_5.0_asm.\*.ewbt. There can't be any spaces in the names of the sequences. I made a version without the part of the name after the Genbank designator.
    * Optionally requires a list of known mature and precursor miRNAs for the study species - I used the turkey precursors from RNACentral and Ensemble and the matures predicted from them using MatureBayes. I uncollapsed the duplicates in the mature miRNAs so there are 1180 mature miRNAs instead of 941 unique mature miRNAs.
    * Optionally requires known mature miRNAs from related species. I used the mirBase (version 21) miRNAs for Gallus gallus. It doesn't like the spaces in the names so I removed them with the same script I used for the genome.
    * The adapter trimming step in their mapper.pl only uses the first 6 bases of the adapter and looks only for exact matches to those 6 bases. How does this compare (in terms of false positives and negatives) with methods using the entire adapter sequence and allowing for some level of mismatch? I compared mapper.pl with fastx\_clipper/fastx\_collapser, discarding reads less than 18 bases and keeping reads with Ns.
      * both methods give very similar results in both number of unique reads and total read count. I don't expect drastically different results based on preprocessing method but I'm running the analysis using both.
        ![Preprocessing method comparison]({{ site.image_path }}wp-content/uploads/2016/05/Preprocessing_comparison.png)
        ![Length distribution - unique and total]({{ site.image_path }}wp-content/uploads/2016/05/length_distribution-fixed.png)
    * Output is complicated by having duplicate known precursor or mature miRNAs. Several of the precursors from Ensemble and RNACentral have the same hairpin sequence but differ in how far the ends extend. Those ends don't affect mirdeep2's analysis so I am going to collapse them (unique\_precursor\_turkey\_miRNA\_hairpins.fa instead of unique\_precursor\_turkey_miRNAs.fa). When I have both, keep the longer of the two (most of the time that is the Ensemble sequence rather than the RNACentral one).
    * Problems with my "unique miRNA" files:
      * Many of them are actually nested and form the same precursor hairpin. The differences between the mature miRNAs predicted from them are just a couple bases shifted one way or the other but they are really the same and it is fouling up expression results.
      * So, I collapsed precursors that are really the same hairpin (unique\_precursor\_turkey\_miRNA\_hairpins.fa) keeping the longer version unless the longer version led to misformed hairpins - 480 unique hairpins. I then got all predicted mature miRNAs for those hairpins (all\_mature\_turkey\_miRNAs\_from\_unique\_hairpins.fa) - 960 mature miRNAs. And then I collapsed all the identical ones (unique\_mature\_turkey\_miRNAs\_from\_unique\_hairpins.fa) - 880 unique mature miRNAs. I used those to run mirdeep.
    * Test runs on a dataset of 20k unique reads from each sample (the first 10K and last 10k ordered by count so I have lots of high-copy and low-copy reads). These took about 5 hours each:
      * all20k_test1- for reference miRNAs, used all mature and unique precursor miRNAs where they were just filtered for exact duplicates (590 precursor, 1180 mature)
        * novel: 19
        * detected: 139
        * not detected: 32
      * all20k_test2- same as test1 but no mature miRNAs (590 precursor, 0 mature)
        * novel: 150
        * You don't get "detected" or "not detected" without providing mature miRNAs. You also don't get any expression data. (Though you could rerun quantifier using the novel miRNAs as input)
      * all20k_test3- same as test1 but no precursor miRNAs (0 precursor, 1180 mature)
        * novel: 19
        * detected: 139
        * You don't get "not detected" or expression data.
      * all20k_test4- same as test 1 but used unique mature miRNAs (590 precursor, 940 mature)
        * novel: 18
        * detected: 140
        * not detected: 132
        * Expression data is cleaner - fewer miRNAs with multiple reference hits but still just a single stack, but these results are what pointed me to the fact that many of my miRNAs are nested within each other and have the same hairpin
      * all20k_test5- used unique precursor hairpins and unique mature miRNAs from unique hairpins (480 precursor, 880 mature)
        * novel: 17
        * detected: 139
        * not detected: 28
        * Expression data is much cleaner.
    * Runs on full dataset (these took about 20 hours each:
      * all\_data\_run1- used unique precursor hairpins and unique mature miRNAs from unique hairpins (480 precursors, 880 mature) and the mapper.pl preprocessed data.
        * novel: 339
        * detected: 191
        * not detected: 150
      * all\_data\_run2- same as run1 but used the fastx\_clipper + fastx\_collapser preprocessed data.
        * novel: 326
        * detected:191
        * not detected: 150
        * the mapper.pl processed data yields more novel miRNAs so I will not continue to use the fastx processed data.
      * all\_data\_run3- same as run1 but no mature miRNAs provided (480 precursors, 0 mature). This eliminates any problems that may be caused by the method I used to predict mature miRNAs from the known precursors.
        * novel: 511
      * all\_data\_run4- same as run1 but no mature or precursor miRNAs provided (0 precursors, 0 mature). This eliminates any problems that may be caused by whatever methods were used to identify the precursors in Ensemble.
        * novel: 513
      * all\_data\_run5- same as run1 but used unique precursor hairpins and unique improved predicted mature miRNAs (480 precursors, 851 mature)
        * novel: 326
        * detected: 192
        * not detected: 147
    * Used all\_data\_run1, since it maximizes the number of miRNAs identified and the difference between the predicted mature miRNA and improved predictions made little difference. mirdeep allows for some "slop" between the predicted miRNA and the actual stack so it adjusts for it.
      * Started with 1322 expression records for the predicted mature miRNAs (it gives data for every precursor a predicted miRNA aligns against.
      * I Used a 5,2,2 filter. In order to keep expression data for a mature miRNA/precursor combo I required:
        * More than 5 reads in all samples combined, and
        * More than 2 samples with more than 2 reads
        * This keeps more low-expression miRNAs than other common methods (4 or 10 reads required for a sample) but I want to minimize the risk of filtering out miRNAs that might be important to GSTA expression
        * After filtering there were 558 expression records for predicted mature miRNAs.
      * mirdeep gives the list of novel miRNAs, their sequences and precursor sequences but not any expression data. I used miRExpress to get the expression data, used the 5,2,2 filter and added it to the expression data for predicted miRNAs, and filtered duplicates.
      * For the 150 "not detected" miRNAs I inspected the alignment of reads to determine what the problem was.
        * Many failed mirdeep's filter because the miRNA sequence is in repetitive DNA so the reads could align at multiple positions. For these I labeled them as "bad stacks" and kept the expression record that maximized the number of reads.
        * Others failed mirdeep's filters because of clear problems with the predicted miRNAs. In almost all of these cases, the stacks were in a position that made the hairpin structure correct and aligned with the improved predictions I generated from mirExpress. I labeled them as "mod" and updated the consensus sequence and expression values with the data for the improved predicted miRNA.
        * Other seemed to be correct but just failed because the hairpin folding scores were too low. I kept the expression data for these as is.
        * Since this changed the sequence for the "mod" miRNAs I filtered again for duplicates
        * I noticed one more category of "duplicate" miRNAs. When two miRNAs differ by only one or two bases (either nucleotide differences or they align but their start/ends are shifted a base or two) they will have the exact same expression values because we are really seeing the same stacks of reads. There are 14 pairs of miRNAs that fall in this category, but I left them in for now. None ended up in the significantly DE miRNAs that might be involved in GSTA expression.
      * The final dataset for differential expression analysis was 472 unique miRNAs with 537 mature/precursor combinations.

## Have I been asking the wrong question to identify miRNAs that could explain the difference between wild and domestic GSTA expression?

  * I look for miRNAs down-regulated in Wild AFB vs Wild Control since reducing the miRNA level would release more GSTA mRNA to be expressed.
  * Then I look for any of those miRNAs that are NOT down-regulated in Domestic AFB vs Domestic Control, since not being down-regulated could leave GSTA mRNAs blocked when they should be released.
  * But an miRNA that isn't down-regulated in Domestic because it has constant low expression would still allow GSTA expression, and an miRNA that is down-regulated but is still at a high level would still be blocking GSTA. Actually to match the pattern of GSTA3 mRNA expression we expect an miRNA down-regulated in both but the values for Domestic are higher than those for Wild.
  * So I actually should look for miRNAs down-regulated in Wild AND with higher expression in Domestic AFB than Wild AFB... regardless of whether it is down-regulated with AFB in Domestic.

## Differential expression with expected patterns for GSTA-related miRNAs using DESeq2:

  * Wild AFB < Wild Control: 66 miRNAs @p<0.1 (54 @p<0.05)
  * Domestic AFB > Wild AFB: 41 miRNAs @p<0.1 (22 @p<0.05)
  * Overlap between those two: 9 miRNAs @ p<0.1 (6 p<0.05)

| miRNA name | sequence | precursor |
| ---------- | -------- | --------- |
| mirna_002\* | ENSMGAG00000000187-5p | AAAAGUGCUUACAGUGCAGGUA | ENSMGAG00000000187 |
| mirna_036\* | URS646108-5p/ENSMGAG154-5p | AAGUGCUCAUAGUGCAGGUAGC | ENSMGAG00000000154/URS0000646108 |
| mirna_146\* | ENSMGAG00000000048-3p_mod | CAGUGCAAUAAUGAAAGGGCGU | ENSMGAG00000000048 |
| mirna_225 | ENSMGAG454-3p/URS710F84-3p | GAAAAAUUGCACGGUAUCCAUC | ENSMGAG00000000454/URS0000710F84 |
| mirna_242 | CM000973.2_20294-3p | GCCGGGGCGGUCGGGCUG | CM000973.2_20294 |
| mirna_270 | CM000965.2_9936-5p | GUUACGUGACUGCUUGGAGGA | CM000965.2_9936 |
| mirna_283\* | ENSMGAG00000000598-5p | UAAGGUGCAUCUAGUGCAGUUA | ENSMGAG00000000598 |
| mirna_317\* | ENSMGAG245-3p/URS68824F-3p | UAGUGCAAUAUUGCUUAUAGGG | ENSMGAG00000000245/URS000068824F |
| mirna_377\* | ENSMGAG00000000218-5p | UGACAAUGUUGCACUACUGUCU | ENSMGAG00000000218 |

  * \* P<0.05
  * mirna_317 was also identified when I looked for precursor sequences in the mRNA-Seq dataset

## Find miRNAs with predicted interactions at GSTA3 or GSTA4 at SNP sites

  * Run StarMir with the 66 miRNAs downregulated with AFB in Wild. Find all interaction in 5'UTR, cds and 3'UTR for GSTA3 & GSTA4
    * I can't just use the old StarMir output because it doesn't include the novel miRNAs detected by mirdeep.
    * I'm running it using the unique mirna_ids since long miRNA names cause problems in the StarMir output
    * Using the StarMir link for multiple miRNA files: [ http://sfold.wadsworth.org/cgi-bin/starmirtest2.pl ]( http://sfold.wadsworth.org/cgi-bin/starmirtest2.pl )
    * Combine all the output for seed-based and non-seed-based interactions.
    * Settings:
      * Model: VCLIP-based model (human)
      * Species for prediction: Other
  * Run script to filter for interactions at SNP sites.
    * When I ran this before I had limited info on SNPs around GSTA3 and GSTA4. We have better info now so I made new lists of SNP positions using data from USU, UMN and VT.
    * I identified and included the one cds SNP in GSTA3:
      * bp373 in the cds or bp454 in the estimated mRNA (T in N = G in EW)
    * and the two cds SNPs in GSTA4:
      * bp219 in the cds or bp371 in the estimated mRNA (C in N = T in EW)
      * bp507 in the cds or bp659 in the estimated mRNA (A in N = G in EW)
    * Included seed and seedless interactions for UTR5, cds, and UTR3
  * miRNAs downregulated with AFB in Wild AND with predicted interactions at SNPs in GSTA3 or GSTA4:

| mirna_id | interacts with | miRNA name | sequence | precursor |
| -------- | -------------- | ---------- | -------- | --------- |
| mirna_286 | GSTA4 | ENSMGAG00000000580-5p | UAAUCUCAGCUGGCAACUGUGA | ENSMGAG00000000580 |
| mirna_065 | GSTA4 | URS0000650CEB-3p | ACUGGCUCAGUUCAGCAGGAAC | URS0000650CEB |
| mirna_211 | both | ENSMGAG00000000226-3p | CUGGGGGGUGGAUGUUUACUUC | ENSMGAG00000000226 |
| mirna_242 | GSTA3 | CM000973.2_20294-3p | GCCGGGGCGGUCGGGCUG | CM000973.2_20294 |
| mirna_288 | GSTA3 | URS0000663B95-5p | UAAUGCUAAUCGUGAUAGGGGU | URS0000663B95 |

  Some of these aren't even expressed in Domestic-AFB so they clearly don't matter. In the others, the strength of the predicted interaction doesn't change or changes by only a tiny amount between Wild and Domestic GSTA mRNAs. It doesn't seem likely that these are important to the difference in AFB susceptibility.

  * An miRNA could also be interesting if it:
    * has a predicted interaction with the Domestic mRNA but not the Wild mRNA
    * is expressed in Domestic AFB (it may or may not be in the others, it doesn't matter)
    * This category is interesting because a miRNA that interacts with Domestic but not Wild could reduce GSTA expression in Domestic while having no effect on Wild.
    * To look for these:
      * Generate a list of miRNAs expressed in Domestic AFB (require >2 reads in >2 Domestic AFB samples)
      * Run StarMir on this list using the estimated Domestic mRNA
      * Run StarMir on this list using an estimated Wild mRNA (substitute in the SNPs)
      * Run my script to find interactions at SNPs in both and compare the resulting lists. Items on the Domestic list but not on the Wild list are interesting.
    * I looked for things that have likely interactions with Domestic mRNA at SNP sites but not with Wild mRNA at SNP sites. This yields 11 miRNAs but when you look at the actual likelihoods of the predictions they are only changing by tiny amounts (less than 0.1). So they don't meet the 0.75 likelihood cutoff in wild but they only JUST miss the cutoff.
    * Also, in every case there are other places along the mRNA where that same miRNA has predicted interactions, often with higher likelihoods, so it seems unlikely these miRNAs are important to the difference in AFB susceptibility.
    * I also compared the highest predicted interaction in Domestic vs Wild (not just at SNPs). There are no miRNAs where there is a big difference in the highest predicted interaction (over 0.1)

## Comparing previous results based on mRNA-seq to these miRNA-seq results:

### miRNAs that were downregulated w/AFB in Wild but not in Domestic:

| miRNA | miRNA_ids in current project | Status in current project |
| ----- | ---------------------------- | ------------------------- |
| ENSMGAG00000000085-5p | mirna_154 | upregulated in both |
| ENSMGAG00000000085-3p | mirna_440 | not downregulated in wild (WA=WC\>DA=DC) |
| URS0000667D64-5p | mirna_406a-c | downregulated in both (WA=DA) |
| URS0000667D64-3p | NA | failed 5,2,2 filter |
| ENSMGAG00000017395-5p | NA | failed 5,2,2 filter |
| ENSMGAG00000017395-3p | NA | failed 5,2,2 filter |
| ENSMGAG00000000337-5p | mirna_281 | upregulated in both |
| ENSMGAG00000000337-3p | mirna_044 | upregulated in both |

### miRNAs that were downregulated w/AFB in Wild and have predicted interactions at SNPs between Wild and Domestic:

| miRNA | miRNA_id in current project | Status in current project |
| ----- | --------------------------- | ------------------------- |
| ENSMGAG00000000597_Stem5 | NA | failed 5,2,2 filter |
| ENSMGAG00000000072_Stem5 | NA | failed 5,2,2 filter |
| ENSMGAG00000017395_Stem3 | NA | failed 5,2,2 filter |
| ENSMGAG00000000085_Stem3 | mirna_440 | not downregulated in wild (WA=WC\>DA=DC) |
| ENSMGAG00000016358_Stem5 | NA | failed 5,2,2 filter |
| URS0000632C01_Stem5 | mirna_253a & b | upregulated in wild |
| ENSMGAG00000000426_Stem3 | NA | failed 5,2,2 filter |


  * None of the results match up, suggesting that using precursor abundance as a proxy for mature miRNA abundance is not valid. I suppose that makes sense if precursor miRNAs are only present in large numbers when they are not being actively processed into mature miRNAs.


Can I import the bowtie assembly into the Integrated Genome Browser and look at the GSTA region? Anything interesting happening there? Are there miRNAs that are encoded in this region?


What about WGCNA? Can I combine miRNA-Seq and mRNA-Seq data to find clusters of genes/miRNA with similar expression patterns?

## Do the interesting DE miRNAs have similarity to known miRNAs in other organisms?

  * The Ensembl ones are going to take some digging but the RNACentral ones are linked to known miRNA families:

| mirna_id | RNA Central miRNA | similar to |
| -------- | ----------------- | ---------- |
| mirna_36 | URS0000646108 | mir-17 family |
| mirna_225 | URS0000710F84 | mir-363 family |
| mirna_317 | URS000068824F | mir-454 family |
