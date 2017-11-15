---
title: Nrf2 comparisons for Sean Moody
date: 2015-11-20T23:59:05+00:00
layout: post
categories:
  - gsta other
---
Sean wants to check whether the domains of Nrf2 described in a review paper are conserved in turkeys too. So I pulled Nrf2 amino acid sequences from NCBI for human, mouse, chicken and turkey, and aligned them for him:

  * In chicken, Nrf2 is annotated as ECH. In turkey it is annotated as NFE2L2. Googling confirms they are different names for the same thing.
  * Turkey has 5 predicted splice variants for Nrf2, but 4 are identical and one has 50 extra amino acids at the beginning. I included all 5 in the alignment (because I didn't know they were identical til I aligned them).
  * I aligned the sequences in AliView (uses muscle with unknown parameters - probably default?). The alignment looks reasonable - I didn't make any manual changes.
    * Alignment is 644 positions long
    * Only difference between the turkey sequences are the extra 50 AA at the start of variant X1.
    * Turkey differs from chicken at 26 AA (not counting the extra 50)
    * Turkey differs from mouse and human at ~250 AA
    * It looks like the section shown in the paper he wants to compare against are conserved ([ [ www.ncbi.nlm.nih.gov/pubmed/9887101 ](http://www.ncbi.nlm.nih.gov/pubmed/9887101" ) fig1). Their alignment is the first 73 bases of human, chicken, and that section of turkey has only 1 difference from chicken. He can use this new alignment to see whether other sequences referred to in the paper are conserved.
  * I emailed Sean the alignment file in fasta format and a link to an online alignment viewer [ http://toolkit.tuebingen.mpg.de/alnviz ](http://toolkit.tuebingen.mpg.de/alnviz ). In hindsight, I should have sent it in clustal format (like the version below) so he could view it in any text editor. Oh well, using an alignment viewer will display it in color which makes it much easier to spot conserved and non-conserved areas.
  * The alignment (I removed 3 of the 4 identical turkey sequences):

    ~~~
    Human_nrf2_0            --------------------------------------------------MDLIDILWRQ
    Mus_musculus_nrf2_1     ----------------------------------MMDLELPPPGLQSQQDMDLIDILWRQ
    Gallus_gallus_ECH_(n_2  --------------------------------------------------MNLIDILWRQ
    Meleagris_gallopavo__3  MGSAPLWRLRRSLLCGPGRLLRYLLWSCLTACCCSGPAAAVSVRAVVEKDMNLIDILWRQ
    Meleagris_gallopavo__4  --------------------------------------------------MNLIDILWRQ

    Human_nrf2_0            DIDLGVSREVFDFSQRRKEYELEKQKKLEKERQEQLQKEQEKAFFTQLQLDEETGEFLPI
    Mus_musculus_nrf2_1     DIDLGVSREVFDFSQRQKDYELEKQKKLEKERQEQLQKEQEKAFFAQFQLDEETGEFLPI
    Gallus_gallus_ECH_(n_2  DIDLGARREVFDFSQRQKEYELEKQKKLEKERQEQLQKEREKALLAQLVLDEETGEFVPA
    Meleagris_gallopavo__3  DIDLGARREVFDFSQRQKEYELEKQKKLEKERQEQLQKEREKALLAQLVLDEETGEFVPP
    Meleagris_gallopavo__4  DIDLGARREVFDFSQRQKEYELEKQKKLEKERQEQLQKEREKALLAQLVLDEETGEFVPP

    Human_nrf2_0            QPAQHTQSETSGSA-NYSQVAHIPK-SDALYFDDCMQLLAQTFPFVDDNEVSSATFQSLV
    Mus_musculus_nrf2_1     QPAQHIQTDTSGSA-SYSQVAHIPK-QDALYFEDCMQLLAETFPFVDDHE-------SLA
    Gallus_gallus_ECH_(n_2  QPAQRVQSENAEPPISFSQSTDTSKPEEALSFDDCMQLLAEAFPFIDDNEASPAAFQSLV
    Meleagris_gallopavo__3  QPAQHIQSENAEPPISFSQSTDTSKPEEALSFDDCMQLLAEAFPFIDDNEASPAAFQSLV
    Meleagris_gallopavo__4  QPAQHIQSENAEPPISFSQSTDTSKPEEALSFDDCMQLLAEAFPFIDDNEASPAAFQSLV

    Human_nrf2_0            PDIPGHIES-PVFIATNQAQSPETSVAQVAPVDLDGMQQDIEQVWEELLSIPELQCLNIE
    Mus_musculus_nrf2_1     LDIPSHAES-SVFTAPHQAQSLNSS-LEAAMTDLSSIEQDMEQVWQELFSIPELQCLNTE
    Gallus_gallus_ECH_(n_2  PD---QIDSDPVFISANQTQPPSSP-GIVPLTDAENM-QNIEQVWEELLSLPELQCLNIE
    Meleagris_gallopavo__3  PD---QIDSDPVFISSNQTQPPNSP-GIVPLTDAENM-QNIEQVWEELLSLPELQCLNIE
    Meleagris_gallopavo__4  PD---QIDSDPVFISSNQTQPPNSP-GIVPLTDAENM-QNIEQVWEELLSLPELQCLNIE

    Human_nrf2_0            NDKLVETTMVPSPEAKLTEVDN-YHFYSSIPSMEKEVGNCSPHFLNAFEDSFSSILSTED
    Mus_musculus_nrf2_1     NKQLADTTAVPSPEATLTEMDSNYHFYSSISSLEKEVGNCGPHFLHGFEDSFSSILSTDD
    Gallus_gallus_ECH_(n_2  NDNLAEVSTITSPETKPAEMHNSYDYYNSLPIMRKDV-NCGPDFLENIEGPFSSILQPDD
    Meleagris_gallopavo__3  NDNLAEVSTIMSPETKPAEMHNSYNYYNSLPIMKKDV-NCGPDFLENIEGSFSSILQPED
    Meleagris_gallopavo__4  NDNLAEVSTIMSPETKPAEMHNSYNYYNSLPIMKKDV-NCGPDFLENIEGSFSSILQPED

    Human_nrf2_0            PNQLTVNSLNSDATVNTDFGDEFYSAFIAEPSISNSMPSPATLSHSLSELLNGPIDVSDL
    Mus_musculus_nrf2_1     ASQLT--SLDSNPTLNTDFGDEFYSAFIAEPSDGGSMPSSAAISQSLSELLDGTIEGCDL
    Gallus_gallus_ECH_(n_2  SSQLNVNSLNNSLTLSSDFCEDFYTNFICAKGDGDTG-TTNTISQSLADILSEPIDLSDF
    Meleagris_gallopavo__3  SSQLNVNSLNNTLTSSPDFCEDFYTSFICAKGDSDTV-TTNTISQSLADILSEPIDLSDF
    Meleagris_gallopavo__4  SSQLNVNSLNNTLTSSPDFCEDFYTSFICAKGDSDTV-TTNTISQSLADILSEPIDLSDF

    Human_nrf2_0            SLCKAFNQNHPESTAEFNDSDSGISLNTSPSVASPEHSVESSSYGDTLLGLSDSEVEELD
    Mus_musculus_nrf2_1     SLCKAFNPKHAEGTMEFNDSDSGISLNTSPSRASPEHSVESSIYGDPPPGFSDSEMEELD
    Gallus_gallus_ECH_(n_2  PLWRAFNDDHSGTVPECNDSDSGISLNANSSIASPEHSVESSTCGDKTFGCSDSEMEDMD
    Meleagris_gallopavo__3  PLWRAFNDDHSGTVPECNDSDSGISLNANSSVASPEHSVESSTCGDKTFGCSDSEMEDTD
    Meleagris_gallopavo__4  PLWRAFNDDHSGTVPECNDSDSGISLNANSSVASPEHSVESSTCGDKTFGCSDSEMEDTD

    Human_nrf2_0            SAPGSVKQNGPKT-PVHSSGDMVQPLSPSQGQSTHVHDAQCENTPEKELPVSPGHRKTPF
    Mus_musculus_nrf2_1     SAPGSVKQNGPKAQPAHSPGDTVQPLSPAQGHSAPMRESQCENTTKKEVPVSPGHQKAPF
    Gallus_gallus_ECH_(n_2  SSPGSVPQGNASVYSSRFPDQVLPSVEP--GTQTP--SLQRMNTPKKDPPAGPGHPKAPF
    Meleagris_gallopavo__3  SSPGSVPQSNASMYSLQFPDQILPSVEP--GTQTP--SLQHMNTPKKDPPAGPGHPKAPF
    Meleagris_gallopavo__4  SSPGSVPQSNASMYSLQFPDQILPSVEP--GTQTP--SLQHMNTPKKDPPAGPGHPKAPF

    Human_nrf2_0            TKDKHSSRLEAHLTRDELRAKALHIPFPVEKIINLPVVDFNEMMSKEQFNEAQLALIRDI
    Mus_musculus_nrf2_1     TKDKHSSRLEAHLTRDELRAKALHIPFPVEKIINLPVDDFNEMMSKEQFNEAQLALIRDI
    Gallus_gallus_ECH_(n_2  TKDKPSGRLEAHLTRDEQRAKALQIPFPVEKIINLPVDDFNEMMSKEQFSEAQLALIRDI
    Meleagris_gallopavo__3  TKDKPSGRLEAHLTRDEQRAKALQIPFPVEKIINLPVDDFNEMMSKEQFSEAQLALIRDI
    Meleagris_gallopavo__4  TKDKPSGRLEAHLTRDEQRAKALQIPFPVEKIINLPVDDFNEMMSKEQFSEAQLALIRDI

    Human_nrf2_0            RRRGKNKVAAQNCRKRKLENIVELEQDLDHLKDEKEKLLKEKGENDKSLHLLKKQLSTLY
    Mus_musculus_nrf2_1     RRRGKNKVAAQNCRKRKLENIVELEQDLGHLKDEREKLLREKGENDRNLHLLKRRLSTLY
    Gallus_gallus_ECH_(n_2  RRRGKNKVAAQNCRKRKLENIVELEQDLSHLKDEREKLLKEKGENDKSLRQMKKQLTTLY
    Meleagris_gallopavo__3  RRRGKNKVAAQNCRKRKLENIVELEQDLSHLKDEREKLLKEKGENDKSLRQMKKQLTTLY
    Meleagris_gallopavo__4  RRRGKNKVAAQNCRKRKLENIVELEQDLSHLKDEREKLLKEKGENDKSLRQMKKQLTTLY

    Human_nrf2_0            LEVFSMLRDEDGKPYSPSEYSLQQTRDGNVFLVPKSKKPDVKKN
    Mus_musculus_nrf2_1     LEVFSMLRDEDGKPYSPSEYSLQQTRDGNVFLVPKSKKPDTKKN
    Gallus_gallus_ECH_(n_2  IEVFSMLRDEDGKSYSPSEYSLQQTRDGNIFLVPKSRKAETKL-
    Meleagris_gallopavo__3  VEVFSMLRDEDGKSYSPSEYSLQQTRDGSIFLVPKSRKAETKL-
    Meleagris_gallopavo__4  VEVFSMLRDEDGKSYSPSEYSLQQTRDGSIFLVPKSRKAETKL-
    ~~~
