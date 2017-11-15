---
title: Annotating Hymenophyllum wrightii sequences
date: 2011-08-16T11:24:30+00:00
layout: post
categories:
  - h. wrightii
---
Genbank wants annotations of my rbcL and trns-rps4 sequences:

  1. Blast the longest of the 3 rbcL sequences against nr.  The entire 1301 bp aligns with no gaps against gi\|29467071\|dbj\|AB083277.1 (one of Ebihara's H. wrightii sequences).   My nt 1 = his nt 694.  My nt 1301 = his nt 1994.  So our sequences are in the same orientation.
  2. From the annotation of Ebihara's sequence, rbcL extends from his nt 658 to nt 2085.  So my entire sequence is within rbcL.
  3. Used SeaView to translate my sequences to protein to find whether they are in the correct reading frame.  All three sequences ARE in the correct reading frame - no stop codons and I matched them up with the translation of Ebihara's sequence.
  4. Manually generated the Feature Table:

~~~
>Feature Seq1
<1	>1284	gene
			gene	rbcL
<1	>1284	CDS
			product	ribulose-1,5-bisphosphate carboxylase/oxygenase large subunit
			codon_start	1
>Feature Seq2
<1	>1301	gene
			gene	rbcL
<1	>1301	CDS
			product	ribulose-1,5-bisphosphate carboxylase/oxygenase large subunit
			codon_start	1
>Feature Seq3
<1	>1287	gene
			gene	rbcL
<1	>1287	CDS
			product	ribulose-1,5-bisphosphate carboxylase/oxygenase large subunit
			codon_start	1
~~~

  5. Blast one of the trnS-rps4 sequences (they are all identical) against nr.  All but the first and last few nucleotides align with gi\|29134907\|gb\|AY095122.1 (An Ebihara H. inequale sequence - it is the best match only because it is longer than any of the H. wrightii sequences so it gets a higher blast score even though it has more nucleotide mismatches). My nt 3 = his nt 991.  My nt 995 = his nt 1.  Our sequences are not in the same orientation.
  6. Reverse complemented my sequence to match Ebihara's using SeaView ('Complement' in SeaView actually generates the reverse-complement).  And updated Hwrightii_sequences_for_genbank.fasta.  Now my nt 2 = his nt 1 and my nt 994 = his nt 991.
  7. Ebihara's annotation only says that part of the sequence is 'similar to rps4'.  Another sequence (JF950816) shows the translation of rps4 and I can easily identify the reading frame in my sequences. In my sequence, rps4 starts at nt 76 and ends on nt 582.
  8. Manually generated the Feature Table:

~~~
>Feature Seq4
76	582	gene
			gene	rps4
76	582	CDS
			product	small ribosomal protein 4
			codon_start	1
583	>996	misc_feature
			note	rps4-trnS intergenic spacer
>Feature Seq5
76	582	gene
			gene	rps4
76	582	CDS
			product	small ribosomal protein 4
			codon_start	1
583	>996	misc_feature
			note	rps4-trnS intergenic spacer
>Feature Seq6
76	582	gene
			gene	rps4
76	582	CDS
			product	small ribosomal protein 4
			codon_start	1
583	>996	misc_feature
			note	rps4-trnS intergenic spacer
~~~

  9. Updated ModifierTable.txt to include the UTC voucher numbers.
 10. Resubmitted on BankIt as submission \#1474375.
