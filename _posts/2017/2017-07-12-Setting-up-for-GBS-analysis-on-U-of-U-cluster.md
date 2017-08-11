---
title:  Setting up for GBS analysis on U of U cluster
date:  2017-07-12
layout: post
categories:
  - t. intricatum gbs
---
  * Copied over my screen, nano, and git config files. My .bashrc and .bash_aliases were already there.
  * Reorganized the files on my wolf-group1 folder so raw data will be separate from analyses.
  * Install miniconda (version 4.3.22) and ipyrad (version 0.7.1) in my user space following [these instructions][1] with [these modifications][2].

# Test-run of ipyrad using all samples (all 3 species)

  * params-all_samples.txt
  * all_samples_SLURM.sh
  * barcodes_ipyrad-all_samples.txt
  * Used the ddrad setting since that is what the "GBS" process we use is actually considered.
  * s1-demultiplex (sorting by barcodes)
    * Tried it allowing 0, 1, and 2 barcode mismatches to compare. Using the 2 mismatch data. Results are comparable to my pipeline (+/-3%).
    * Experimented with using just the cutsite by the barcode (CAATTC) and using both cutsites because I was curious if the second cutsite is used at this step--it shouldn't be and it isn't. Results are exactly the same either way.
    * Total reads: 277914244
    * Cutsite found: 277913446 (99.9%)
    * Matched exact: 212483395 (76%)
    * Matched <=1 mismatches: 236389987 (85%)
    * Matched <=2 mismatches: 236413224 (85%)
  * s2-rawedit (filtering/cleaning)
    * trimmed adapter sequences, and used defaults for quality filtering and minimum length after trimming.
    * Worked with Carol Rowe to determine the correct sequence and orientation for the second cutsite (GTAA) and verified that the cutadapt command ipyrad generates has the same cutsite + adapter sequence that is expected using Zach Gompert's GBS library protocol (TTACAGATCGGAAGAGC).
    * By default ipyrad removes the barcode but leaves the cutsite at the start of every sequence. The cutsite contains no information and may make dissimilar reads appear slightly more similar and affect clustering, so I had ipyrad remove them. __THIS WAS A MISTAKE!__ When you remove the cutsite it allows reads to more easily align with their 5' ends offset, which should not happen. The 5' ends of all reads at a locus should be aligned. Reran, keeping the cutsite.
  * s3-clustering
    * Ran on main branch at 0.9
    * Branched and reran at 0.85 (params-all_samples_c85.txt) and 0.95 (params-all_samples_c95.txt)
  * After this point I ran into problems with how I branched (see "gotchas" below) and had to restart things, but overall I ended up doing complete runs for all combinations of the following:
    * Clustered at 0.80, 0.85, 0.90, and 0.95.
    * Allowing only 1 allele (haploid) and 2 alleles (diploid).
  * I kept all loci with coverage in at least 4 samples. It gives way more missing data than is acceptable but provides me with the info on how many loci have coverage at each level so I can make decisions about where to make the cutoff.
  * I asked for Structure and Phylip-one-SNP-per-locus outputs since I expect I'll be able to use those for my downstream analyses. Rerunning step 7 to get other takes only a few minutes.
  * The ipyrad default settings seemed reasonable for everything else.


# Questions and gotchas

  * On ipyrad s1, why are ALL the counts for mismatched barcodes even numbers? Also, they don't seem to be accurate. Running with 2 ipyrad gave different counts (though the totals were identical). It looks like it isn't actually reporting ALL the mismatched versions. I think the only problem is, that you can't do a run allowing 2 mismatches and use the output to figure out many reads had 1 or no mismatches. If you want those numbers you have to do runs to find out.
  * Be careful about setting up branches. It is tempting to set up branches and subbranches in advance, but if you create a subbranch off a branch before you have actually run that branch it is the exact same as if you had just branched off the main. Run branches past the step of interest before trying to subbranch.
  * Save your stats files along the way. They sometimes get overwritten by branches. For example, if you run through step 4, the s4 stats file gets saved in the s3 folder. So if you branch and run step 4, no new step 3 folder is created for the branch and the new s4 folder is placed in the old s3 folder, overwriting it. Step 4 and 6 and the ones to watch out for since those 2 steps don't create folders to hold their output.
  * Be cautious about drawing inferences from the heterozygosity estimates generated at s4. I think they are only meant to be used to call genotypes in the next step (along with the error rate). They are highly correlated with with that error rate, and thus suspect, since there is no reason the true heterozygosity and error rates would be correlated. I asked about this on the [ipyrad gitter channel][3] but recieved no response.  

[1]: http://ipyrad.readthedocs.io/installation.html
[2]: {{ site.base_url }}{% post_url /2017/2017-07-19-ipyrad-version-trouble-on-U-of-U-cluster %}
[3]: https://gitter.im/dereneaton/ipyrad
