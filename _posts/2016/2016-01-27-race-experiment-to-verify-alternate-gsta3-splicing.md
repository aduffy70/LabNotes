---
title: RACE experiment to verify alternate GSTA3 splicing
date: 2016-01-27T23:59:24+00:00
layout: post
categories:
  - gsta alt splicing
---
![ GSTA3 UTR5 plot ]( {{site.image_path}}wp-content/uploads/2015/10/GSTA_UTR5_plot.png )

![ GSTA3 UTR3 plot ]( {{site.image_path}}wp-content/uploads/2015/10/GSTA3_UTR3_plot.png )

Goals (5'UTR):

Based on RNAseq there may be 3 splice variants of the 5'UTR with start points that differ between type-treatments.

  1. Confirm that 3 splice variants are real (not RNAseq artifacts).
  2. Confirm that type-treatments really do vary in start position.
  3. Identify transcription start site(s)/promoter(s)
  4. Bonus: identify additional 5'UTR variants

Goals (3'UTR):

Based on RNAseq there may be two versions of the 3'UTR - a 2200 bp version and a truncated 600bp version - and the endpoints may differ between type-treatments.

  1. Identify end point(s)/polyadenylation site(s).
  2. Determine whether endpoints differ between type-treatments.
  3. Determine whether multiple endpoints are present within individuals.
  4. Bonus: identify additional 3'UTR variants

Methods:

  * Eastern Wild and Nicholas, with and without AFB-exposure.
      * How many birds from each type-treatment?
  * RNA -> SMART RACE 5/3 kit -> RACE ready cdna? Or do we still have RACE ready cdna from 2010 study?
      * Subcloning to join 5' and 3' RACE products is not needed but if we have cdna that has been joined it will work.
  * 3' UTR:
      * PCR with UPM and cds primer:
          * Purify bands. We expect 2 @600bp (darker?) and 2200bp (lighter?)
              * If we only find the shorter band, PCR with UPM and a nested primer to amplify just mRNAs with the longer 3'UTR.
          * Clone and sequence
              * shorter bands can be sequenced with original primers. 5-10 clones to identify full length.
              * Longer bands will need additional internal sequencing primers. Only the 3'end section needs multiple clones to identify full length.
  * 5'UTR:
      * PCR with UPM and cds primer:
          * Purify bands. What we expect:
              * version A = ~83-110bp
              * version B = ~61-89bp
              * version C = ~220 or ~700bp
          * The two version C's should form bands distinct from each other and everything else, which can be purified, cloned, and sequenced with 5-10 clones to identify full length.
          * Version A & B may not form distinct bands that can be purified separately...
              * Purify them together and sequence many clones in hopes of identifying all versions with enough copies to identify full length?
                  * Version A is expected to be most common, so relatively few clones should capture its full length.
                  * Version B may require an excessive number of clones... so
              * Perhaps additional nested PCR with a reverse primer anchored in the unique section?
                  * This results in sequences with only 5-50 bases between primers. Can I even separate those from primer dimers?

# Predicted UTR5 lengths (based on RNAseq):

| UTR version | Type_Treatment | Exon1 start | Exon1 end | Exon2 start | Exon2 end | Exon1 length | Exon2 length | Total length |
| ----------- | -------------- | ----------- | --------- | ----------- | --------- | ------------ | ------------ | ------------ |
| UTR5-A | EW_Cntrl | 159962 | 160030 | 162679 | 162715 | 69 | 37 | 106 |
| UTR5-A | EW_AFB | 159958 | 160030 | 162679 | 162715 | 73 | 37 | 110 |
| UTR5-A | N_Cntrl | 159985 | 160030 | 162679 | 162715 | 46 | 37 | 83 |
| UTR5-A | N_AFB | 159984 | 160030 | 162679 | 162715 | 47 | 37 | 84 |
| UTR5-B | EW_Cntrl | 159993 | 160030 | 162665 | 162715 | 38 | 51 | 89 |
| UTR5-B | EW_AFB | 159990 | 160030 | 162665 | 162715 | 41 | 51 | 92 |
| UTR5-B | N_Cntrl | 160020 | 160030 | 162665 | 162715 | 11 | 51 | 62 |
| UTR5-B | N_AFB | 160021 | 160030 | 162665 | 162715 | 10 | 51 | 61 |
| UTR5-C | EW_Cntrl | 162502 | 162715 | | | 214 | | 214 |
| UTR5-C | EW_AFB | 162012 | 162715 | | | 704 | | 704 |
| UTR5-C | N_Cntrl | 162483 | 162715 | | | 233 | | 233 |
| UTR5-C | N_AFB | 162012 | 162715 | | | 704 | | 704 |
