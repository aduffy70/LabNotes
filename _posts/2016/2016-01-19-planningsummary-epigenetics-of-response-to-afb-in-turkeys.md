---
title: 'Planning/Summary: Epigenetics of response to AFB in turkeys'
date: 2016-01-19T14:53:44+00:00
layout: post
categories:
  - gsta methylation
  - gsta mirna
  - gsta alt splicing
  - gsta other
---
# Methylation:

## Do patterns of methylation in the promoter (and UTRs? Coding regions?) of GSTA genes differ between wild and domestic turkeys?

  * Questions/Challenges:
    * Looking at methylation in GSTA promoters rather than genome-wide ignores the possibility that methylation of other genes in AFB-response pathways may be what is really driving differences in GSTA expression.
    * We don't know the exact locations of promoters for these genes. They should be immediately upstream of the transcription start sites, but we don't know the full extents of the mRNAs.
    * There is a possibility of alternative promoters/transcription start sites. We need information on alternative splicing and mRNA variants.
    * Should we be looking only for differences in the promoter, or are differences in the UTRs and cds potentially meaningful as well? __(Search the literature)__
    * Do we suspect there may be dynamic changes in methylation with AFB exposure, or is it sufficient to look at just wild and domestic birds without AFB exposure? __(Search the literature)__
  * Methods:
    * Once we know the location of the promoter(s) for each gene we can do targeted bisulfite DNA sequencing and compare the bisulfite-treated sequence to the untreated DNA sequence to identify specific methylated nucleotides. Ideally this should be a comparison between bisulfite treated and untreated DNA sequence from the same bird, since SNPs between birds of the same type introduce noise when inferring methylation.
      * If we can identify a single promoter, if we only look at promoter-region methylation differences, and if we only compare wild and domestic birds without AFB exposure, we need to sequence:
        * 1 region per bird,
        * per gene
        * X 10 (minimum) bisulfite-treated clones per sample (more gives better ability to detect quantitative differences)
        * + 1 non-bisulfite treated as the comparison sequence
        * This is JUST manageable with Sanger sequencing (~88 sequences to compare 4 birds of each type with 10 clones from each bird).
      * Looking at multiple promoters, a larger region, or AFB-treated birds will rapidly expand the required sequencing to justify high throughput sequencing - but this introduces issues relating to sequence assembly and error detection/correction. It will require:
        * 1 library per bird,
        * per gene or promoter or region (unless we assume we can correctly assemble sequences from multiple genes or regions. Clay Isom combined the regions from each sample in his study, but are ours different enough?)
        * It probably makes sense to just Sanger sequence for the non-bisulfite sequence since we don't need the same depth as we do for the bisulfite sequences and it gives us a solid reference to align the sequences from each library against. It also cuts the number of libraries in half which will double the depth of coverage for the remaining libraries. If we use the same birds that Carol/Deepika or Kent Reed's group used to look for SNPs we already have the sequence data we need.
    * Alternatively, or perhaps as a preliminary scan for differences, could we use COBRA or another restriction enzyme-based method? These work if we know the CpGs in the region of interest so we can predict fragment lengths with and without methylation, which we should be able to do from the Sanger sequence data we already have.

# miRNA regulation:

## Which miRNAs are involved in regulation of translation of GSTA mRNAs and do their levels of activity differ between wild and domestic turkeys?

  * Questions/Challenges:
    * Looking at miRNA regulation of GSTA mRNAs rather than genome-wide ignores the possibility that miRNA regulation of other genes in the AFB-response pathways may be what really makes the difference in GSTA expression.
    * The primary turkey liver cells we need to experimentally confirm miRNA-mRNA interactions aren't ready yet.
  * Methods:
    * My attempt to identify the subset of 13 likely-looking miRNAs so we can test for interactions using anti-AGO RIP:
      * I have concerns about normalization and the methods I used to measure read depth. I think it might be better to do a more traditional read assembly against a reference (concatenated precursor mRNA sequences) and measure depth/normalize using standard pipelines.
      * Using precursors rather than mature miRNAs assumes there is a positive correlation between the amount of precursor miRNA and the amount of mature miRNA, which may not be a reasonable assumption. There may actually be an inverse relationship between the amount of precursor miRNA and mature miRNA in the cell if precursors get depleted when they are being processed or build up when they are not.
      * There are likely miRNAs in turkey that are not included in the set of known and predicted miRNAs. In particular, any that are new and found in domestic birds but not wild birds would be interesting candidates that my method will miss. My method also misses any miRNAs with changes in domestic birds that lead to stronger interaction with GSTA mRNAs.
      * I think there is a flaw in the logic of the second part of my method where I look at putative GSTA-involved miRNAs that have predicted interactions at SNPs between wild and domestic birds. It assumes that a nucleotide change that occurred in domestic birds since they diverged from wild makes the interaction stronger, when in fact, most changes in the sequence should make interactions weaker.
    * A new attempt (discussed at PAG) to identify miRNAs with expression suggesting GSTA interactions using small RNAseq:
      * Can identify previously unknown turkey miRNAs or miRNAs with changes between wild and domestic.
      * Avoids assumptions about precursor:mature miRNA levels by looking directly at the mature miRNAs
      * Allows us to look for correlations of miRNA expression with AFB-response genes other than just GSTA
      * We don't know if it will reduce the field of putative GSTA-interacting miRNAs to a size that can tested in the lab. Other small RNAseq studies have identified many more miRNAs that were predicted from genome sequences so we will be starting with a larger pool.
    * Confirming bioinformatic predictions experimentally:
      * Anti-AGO RIP - __besides primary cells, what do we need?__

# Alternative splicing:

  * Questions/Challenges:
    * Based on RNAseq data there maybe differently spliced UTR5's, possibly with different starting positions in the different type treatments and UTR3's with different lengths but there are many ways RNAseq data could mislead:
      * Poor depth of coverage leads to assembly gaps and the appearance of different start/end points
      * DNA contamination, lncRNAs (etc.), or just similar sequence from elsewhere in the transcriptome could make it look like there are versions of the mRNA that aren't really there
    * There isn't enough sequence length around the possible different UTR5 versions to design primers but RACES can amplify from within the known sequence, out toward the ends. Challenge:
      * RACES doesn't consistently get the very ends of the mRNA, especially the 5'end. They recommend sequencing multiple clones to get as much as possible.
        * So, not finding the same start/ends points could be due to real differences, or it could be chance, mRNA quality differences, or even due to sequence differences that cause 2D folding and inhibit PCR/sequencing.
      * Do we assume the 3 differently spliced versions inferred from RNAseq data are all that there are and design primers just to test for them? Or use primers farther back to try to identify additional UTR versions (or even further back and look for alternative splicing within the cds)?
      * How deeply do we clone? If there are 2 alternate versions in equal quantities we need 5 clones to have <0.05 probability of only getting one by chance. If they are not in equal quantities or there are more than 2 versions, we need many more clones.
      * How many birds do we include? This could quickly become a lot of sequencing.
  * Methods:

# Other:

## Are there transposon/LTR differences in the GSTA region between wild and domestic turkeys?

  * Questions/Challenges:
    * Transposons/LTRs can lead to up or down-regulation of nearby genes, but there aren't any indels between the GSTA regions of wild and domestic turkeys that are large enough to be an inserted or deleted transposon/LTR.
    * There ARE predicted transposons in the region. Is it possible a transposon in the region that is helping to regulate GSTA in wild turkeys (and likely chickens and other related organisms) has a change in it's promoter sequence in domestic turkeys that changes the expression?
    * We have transposon/LTR predictions for domestic turkey and chicken (and other birds) but not for wild turkeys.
    * Transposon/LTR predictions were run on the Turkey2.0 assembly, not the BAC, which could lead to differences in what repeats are predicted.
  * Methods:
    * Run repeat prediction software (repeatMasker __or others?__) on the wild turkey GSTA region sequence and the domestic BAC sequence and see if there are differences in the predictions between wild and domestic. We are particularly interested in LTRs present in wild turkey/chicken that are not predicted in domestic turkey due to SNPs.
    * Even if an LTR is present in predicted in both wild and domestic, if it contains SNPs can we determine whether those SNPs might affect function as a promoter? __(Search the literature)__
    * Are there differences between wild and domestic in expression of the genes surrounding the GSTA region (FBX09, ICK-201, 7SK, TMEM14A, AGPAT5)? It would be interesting to know if the lower expression in the GSTAs in domesticated turkeys is shared by surrounding genes, since LTRs can affect multiple genes. I should be able to get this from Kent Reed’s liver AFB-challenge data.

## Are there differences in hormone levels between wild and domestic turkeys that affect GSTA expression/activity?

  * Questions/Challenges:
    * GSTA in mice is negatively regulated by thyroid hormones [ doi:10.1113/expphysiol.2011.058172 ]( http://doi.org/10.1113/expphysiol.2011.058172 ). Reducing mouse thyroid hormone levels from normal (hypothyroidism) increases GSTA expression (based on both mRNA levels in rtPCR and protein levels on western blots). A mutation in the hormone receptor protein (Thra) also leads to higher expression of GSTA .
    * Increasing thyroid hormone levels from normal (hyperthyroidism) doesn't affect GSTA expression in mice but in rat livers hyperthyroidism (increased T<sub>3</sub> triiodothyronine) decreases GSTA (not mu) activity and mRNA levels [ doi:10.1677/joe.0.1660363 ]( http://doi.org/10.1677/joe.0.1660363 ). The hormone receptors are transcriptional regulation factors, probably interacting with enhancer elements in the 5'UTR "including the xenobiotic-responsive element (XRE), the antioxidantresponsive element (ARE), the glucocorticoid-responsive element (GRE) and the barbiturate-responsive element (Barbie box)".
    * Example T<sub>3 </sub>levels (ng/mL in plasma/serum) from the literature:
      * 6 - healthy domestic turkey poults
      * 3.1 - "flip-over" turkey poults (which have small hearts and metabolic problems) [ doi:10.3923/ijps.2003.7.14 ]( http://doi.org/10.3923/ijps.2003.7.14 )
      * 2.6 - Eastern Wild turkey (pen-reared)
      * ~1.5 - Eastern Wild turkeys (trapped or hunted) [ doi:10.2307/3799985 ]( http://doi.org/10.2307/3799985 )
      * ~2.5  - chicken [ doi:10.1016/0016-6480(78)90029-1 ]( http://doi.org/10.1016/0016-6480(78)90029-1 ).
      * 1.8  - mouse
      * 4  - hyperthyroid mouse (experimentally induced) [ doi:10.3389/fneur.2010.00143 ]( http://doi.org/10.3389/fneur.2010.00143 )
      * 1.2  - rat [ Sawaya & Lunn, 1984 ](http://journals.cambridge.org/download.php?file=%2FBJN%2FBJN53_01%2FS000711458500188Xa.pdf&code=fdbd423f34a2eed67ed3eff3d6c22b2f )
      * 2.2  - human
      * 7.5  - hyperthyroid human (thyrotoxicosis) [ doi:10.1172/JCI106072 ]( http://doi.org/10.1172/JCI106072 )
      * Caveat: These weren't measured using the same assays or under the same conditions and span 40+ years. [ Another study ]( http://www.ncbi.nlm.nih.gov/pubmed/8454391 ) supports the high value for domestic turkeys but [ another ]( http://naldc.nal.usda.gov/download/3857/PDF ) reports much lower values. We need to remeasure.
    * So perhaps we selected for larger turkeys, which require larger hearts and higher metabolic rates AND have higher thyroid hormone levels (cause or effect?). So, we simultaneously selected for higher T<sub>3 </sub>levels, which leads to reduced GSTA function. Predictions:
      * T<sub>3</sub> levels in domestic turkey >> wild turkey = chicken/mouse (under similar conditions)
      * Flip-over domestic turkeys have GSTA activity similar to wild turkeys
      * Increasing T<sub>3</sub> levels in wild turkeys will decrease GSTA activity
      * Blocking T<sub>3</sub> production or absorption in domestic turkey livers will increase GSTA activity but may also result in flip-over problems
  * Methods:
    * Measure T<sub>3</sub> levels in wild and domestic turkeys raised under identical conditions __(and flip-over domestic turkeys if we can get them)__. Assays are commercially available.
    * Confirm that T<sub>3</sub> levels negatively regulate GSTA expression/activity in turkey __(using primary cells)__
    * In vivo test of whether increasing T<sub>3</sub> levels in wild turkeys decreases GSTA expression/activity __(injections or diet?)__
    * In vivo test of whether locking T<sub>3</sub> production/absorption increases GSTA in domestic __(anti-thyroid drugs - methimazole in drinking water?)__
    * What are the relative expression levels of the hormone receptor protein associated with T<sub>3</sub>? If we know what they are we can try to find them in the RNAseq data. __(Search the literature)__
      * THRAP3
      * type III monodeiodinase (degrades T<sub>3</sub>. Lower expression -> lower T<sub>3</sub> catabolism in chicken)
    * What do we know about the genes controlling T<sub>3</sub> production and what are their relative expression levels in the RNAseq data? __(Search the literature)__
    * How can we identify the mechanism of GSTA regulation by T<sub>3</sub>?
