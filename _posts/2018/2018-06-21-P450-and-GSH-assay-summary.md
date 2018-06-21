---
title:  P450 and GSH assay summary
date:  2018-06-21
layout: post
categories:
  - gsta assays
---
# CYP1A2 assay

CYP1A2 corresponds to CYP1A5 in turkeys.

Plated ~150K domestic turkey hepatocyte cells in a 96 well plate.

Background corrected and generated a standard curve to convert Relative Light Units (RLUs) to D-luciferin concentration:

|     | AFB treated (1hr @100nM) | Vehicle control (0.5% DMSO) | Untreated | Red blood cells |
| --- | ------------------------ | --------------------------- | --------- | --------------- |
| Mean RLUs (6 reps) | 160.0 | 154.2 | 134.3 | 0.8 |
| [D-luciferin] in 100uL | 56.7nM | 54.9nM | 48.7nM | 0nM |
| Total D-luciferin | 5.7pmols | 5.5pmols | 4.9pmols | 0pmols |

Is AFB-treated different than vehicle control?
  * No (p=0.4677)

Is AFB-treated different than untreated?
  * Yes (p=0.0065)

Conclusions:

  * Our hepatocytes have CYP1A2 activity.
  * Any effect of AFB treatment cannot be distinguished from effect of DMSO vehicle, so there does not appear to be a difference in CYP1A2 activity with AFB treatment.
  * Turkey red blood cells do not appear to have CYP1A2 activity, so low levels of RBC contamination in our hepatocytes should not affect results.
  * The CYP1A2 in ~150K cells produces ~5pmols of D-luciferin in 1hr.

Open questions:

  * Can this activity level tell us anything about how much CYP1A2 is present in our cells? No, but if we use purified turkey CYP1A5 to generate a standard curve to convert RLUs to amount of CYP we would be able to say that this level of CYP1A2 activity in our ~150K cells is equivalent to the activity of XX pmols of purified turkey CYP1A2. __Running assays to generate this RLU to CYP standard curve__

# CYP3A4 assay

CYP3A4 corresponds to CYP3A37 in turkeys.

Plated ~150K domestic turkey hepatocyte cells in a 96 well plate.

Background corrected and generated RLU to D-luciferin standard curve:

|     | AFB treated (1hr @100nM) | Vehicle control (0.5% DMSO) | Untreated | Red blood cells |
| --- | ------------------------ | --------------------------- | --------- | --------------- |
| Mean RLUs (6 reps) | 111.0 | 103.2 | 140.3 | 5.7 |
| [D-luciferin] in 100uL | 41.4nM | 39.0nM | 50.5nM | 8.6nM |
| Total D-luciferin | 4.1pmols | 3.9pmols | 5.1pmols | 0.9pmols |

Is AFB-treated different than vehicle control?
  * No (p=0.3824)

Is AFB-treated different than untreated?
  * Yes (p=0.0135)

Conclusions:

  * Our hepatocytes have CYP3A4 activity.
  * Any effect of AFB treatment cannot be distinguished from effect of DMSO vehicle, so there does not appear to be a difference in CYP3A4 activity with AFB treatment.
  * Turkey red blood cells have only low levels CYP3A4 activity, so low levels of RBC contamination in our hepatocytes should have little affect on results.
  * The CYP3A4 in ~150K cells produces ~5pmols of D-luciferin in 3hrs.

Open questions:

  * Same as CYP1A2

# GSSG-GSH assay

## Total GSH (GSH + GSSG)

Plated ~150K domestic turkey hepatocyte cells in a 96 well plate.

Background corrected and generated RLU to GSH standard curve:

|     | AFB treated (1hr @100nM) | Vehicle control (0.5% DMSO) | Untreated |
| --- | ------------------------ | --------------------------- | --------- |
| Mean RLUs (6 reps) | 3444.5 | 6145.8 | 5044.5 |
| [GSH] in 100uL | 2038nM | 3676nM | 3008nM |
| Total GSH | 204pmols | 368pmols | 301pmols |

Is AFB-treated different than vehicle control?
  * Yes (p=0.0003)

Is AFB-treated different than untreated?
  * Yes (p=0.0024)

Is DMSO control different than untreated?
  * No (p=0.0337) (using p<0.017 cutoff corrected for multiple tests)

Conclusions:
  * Our hepatocytes contain GSH or GSSG.
  * AFB treatment decreases GSH+GSSG levels
  * The ~150K untreated cells contain ~300 pmols GSH+GSSG whereas the cells after AFB-treatment only contain ~200pmols GSH+GSSG

Open questions:
  * Is the difference with AFB treatment because each cell contains less GSH+GSSG or because there are fewer cells left alive after AFB treatment?

## GSSG only

Initial assay suggest GSSG level = ZERO. Problem with the assay or are levels really that low? __Rerunning__
