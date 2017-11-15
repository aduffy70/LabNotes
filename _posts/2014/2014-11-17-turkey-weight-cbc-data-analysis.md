---
title: 'Turkey weight & CBC data analysis'
date: 2014-11-17T14:52:25+00:00
layout: post
categories:
  - gsta cbc weight
---
  * statistical test assumptions met?
  * Tests performed appropriate for the experimental design?
  * Other things we can pull from the data?
  * Experimental design:
      * 2 treatments:
          * control
          * AFB
      * 4 varieties nested in 2 types:
          * Wild types:
              * Eastern
              * Rio Grande
          * Domestic types:
              * Nicholas
              * BB white
      * 7-9 birds per variety(type) x treatment
      * dependent variables
          * 9 CBC measurements taken once
          * 10 liver profile measurements taken once
          * weight measured at 11 ages
          * liver weight measured once (and liver mass as a % of final bird mass measured once)
  * Tests already performed:
      * CBC spreadsheet (All calculations with outliers removed)
          * AFB vs control - Separately for each variety, tested whether measurements differ between AFB treatments (ANOVA)
          * all groups+posthoc - Separately for the control and AFB treatment, tested whether measurements differ between the 4 varieties in general (ANOVA) and with specific pairwise comparisons of varieties (posthoc Fisher's LSD)
          * domestic vs wild - Separately for the control and AFB treatment, tested whether measurements differ between the 2 types (ANOVA)
      * Liver Profiles spreadsheet (All calculations with outliers removed)
          * Control vs Treatment - Separately for each variety, tested whether measurements differ between AFB treatments (ANOVA)
          * All Groups - Separately for the control and AFB treatment, tested whether measurements differ between the 4 varieties in general (ANOVA) and with specific pairwise comparisons of varieties (posthoc Fisher's LSD)
          * Domestic vs Wild - Separately for the control and AFB treatment, tested whether measurements differ between the 2 types (ANOVA)
          * All group comparison - For both AFB treatments lumped together(??), tested whether measurements differ between the 4 varieties in general (ANOVA)
      * Turkey weight spreadsheet
          * Raw data - Separately for each variety, plotted time series of the average bird mass and average percent of growth for control and AFB treatment (including outliers). No statistical tests
          * Statistics - Separately for each variety, tested whether measurements (final liver mass & liver% of bird mass) differ between AFB treatments (t-test)
          * Outliers removed - Separately for each variety, plotted time series of the average bird mass and average percent of growth for control and AFB treatment (with outliers removed). No statistical tests
  * So it was almost all done with ANOVA, but really most of the statistical analyses so far were just comparisons of 2 means that could have been done with a t-test. I think we could analyze this as a crossed-nested factorial design, where variety is crossed with AFB treatment, type is crossed with AFB treatment, and variety is nested in type. I think that makes all 3 factors fixed rather than random factors (type and AFB exposure because they each have only 2 levels and variety because we are interested in these 4 specific varieties).
      * A model:
          * Type: 2 levels, fixed
          * Variety: 4 levels, fixed and nested in Type
          * AFB Treatment: 2 levels, fixed and crossed with Type and Variety
          * Bird: 7-9 per AFB Treatment and Variety, these are the experimental units and contribute to the error term
          * Is this unbalanced since the bird #s differ? And does it become even more unbalanced as we drop outliers?
      * If I just think about Variety and AFB treatment or about Type and AFB Treatment it becomes a two-way ANOVA I can do in R. Working on how to automate 38 ANOVAs.
