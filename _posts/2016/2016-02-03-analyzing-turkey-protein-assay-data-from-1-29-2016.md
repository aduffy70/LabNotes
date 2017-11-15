---
title: Analyzing turkey protein assay data from 1-29-2016
date: 2016-02-03T14:56:33+00:00
layout: post
categories:
  - gsta assays
---
  * 4 turkey Varieties (2 wild, 2 domestic), with and without AFB-exposure, assayed for CDNB, DCNB, CHP, and ECA.
  * 3-5 birds per variety
  * each bird assayed twice (2 Reps)
  * I ran 2-way Anova of Type \* AFB-treatment and Variety \* AFB-treatment
  * I analyzed each Rep separately and combined as an average
  * I analyzed the data with all 4 Varieties and with just EW and BB
  * On the previous dataset (Nov 2015) I used Anova with adjustments for unequal sample sizes because there were twice as many Wild as Domestic, but that was not necessary this time. I used standard Anova.
  * Summary of results:
      * CDNB
          * Similar results for all three Reps.
          * With all varieties, the interactions are significant: Wild decreases with AFB treatment while Domestic increases.

          ![CDNB-all]({{site.image_path}}wp-content/uploads/2016/02/CDNB-all.png)

          * That interaction is mainly driven by N and RG. With just EW-BB only differences between Type/Variety are significant: Domestic/BB is higher.

          ![CNDB-EWBB]({{site.image_path}}wp-content/uploads/2016/02/CNDB-EWBB.png)

      * DCNB
          * Differences between Reps but generally N is much higher than the others, which are all similar and flat in response to AFB.

          ![DCNB-all]({{site.image_path}}wp-content/uploads/2016/02/DCNB-all.png)

      * CHP
          * Differences between Reps but generally, the 2 Varieties within each Type have opposite responses to AFB.

          ![CHP-all]({{site.image_path}}wp-content/uploads/2016/02/CHP-all.png)

          * EW and BB both decrease with AFB and Domestic/BB is higher.

          ![CHP-EWBB]({{site.image_path}}wp-content/uploads/2016/02/CHP-EWBB.png)

      * ECA
          * Similar results for all three Reps
          * N is much higher than the others

          ![ECA-all]({{site.image_path}}wp-content/uploads/2016/02/ECA-all.png)

          * When we focus on EW-BB, both decrease with AFB and EW is higher

          ![ECA-EWBB]({{site.image_path}}wp-content/uploads/2016/02/ECA-EWBB.png)

      * These data seem to suggest that in many cases protein activity decreases with AFB treatment, which is the opposite of what we would expect. I ran t-tests on individual Varieties, testing whether activity is different between Cntrl and AFB. I didn't correct for multiple tests (there are 16 separate t-tests but I just wanted a quick-and-dirty picture of what is going on) but even so there are very few Varieties where the treatments are significantly different and activity is lower in the AFB treatment:
          * CDNB- none (N is significant but it increases with AFB)
          * DCNB- none (N is significant but it increases with AFB)
          * CHP- BB
          * ECA- none (EW is close at p=0.053)
          * So even though it appears that protein activity decreases with AFB, there isn't statistical support.
      * The data also suggest that activity is higher in Domestic than Wild, which also seems backwards from what we hypothesize. EW is higher and the difference is statistically significant in:
          * CDNB
          * CHP
          * ECA
  * Discussed this in lab meeting 2/2/16. It is interesting and strange but not impossible- these assays are not JUST measuring GSTA activity and are specifically NOT measuring GSTA activity against P450/AFB. Deepika is going to do AFB trapping assays and immunoinhibition experiments, which should look at that more directly.
