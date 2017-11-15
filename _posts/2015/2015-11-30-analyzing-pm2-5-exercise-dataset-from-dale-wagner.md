---
title: Analyzing PM2.5 exercise dataset from Dale Wagner
date: 2015-11-30T15:13:15+00:00
layout: post
categories:
  - pm2.5
---
  * 16 subjects (Dale skipped subject 29 because the PM2.5 on their low and high days were very similar (straddling the cutoff)
  * High and low PM2.5 days (low: 2.1-8.4; high:9.6-17.7)
  * Measurements taken at "baseline", after 20 minutes rest, and after 20 minutes exercise (BRE data):
    * FVC, FEV, eNO
  * Additional measurement taken at "baseline", after 20 minutes exercise, and 24 hours post exercise (CRP data):
    * CRP
  * Other measurements taken a single time for each PM2.5 level:
    * km, temp
  * Other measurements taken a single time:
    * age(20-53), sex (11:5), htcm, wtkg, loadkg
  * Dale analyzed it as a paired measures two-way ANOVA. When I run the analysis the same way I get slightly different P-values for some effects. Is this a Type I vs Type III SOS difference ? I'd like to make sure I can get the same numbers he did before I start changing things in the analysis.  The difference is that he uses the GG corrections for departure from Sphericity.
    * I can match his results using the Anova command from the car library (instead of aov) with type III SOS and using the GG corrections.
  * Questions/Concerns:
    * Rest represents measurements taken after 20 minutes resting outside exposed to pollution, Exercise is after 20 minutes exercising outside but what do Baseline and Post really represent? What were they doing? Inside, outside, running across campus, sitting waiting for the measurements to start, smoking next to an idling diesel truck? What did they do in the 24 hours leading to the post measurement? Were they inside, outside, active, sedentary, what was the pollution level during that time? There is a lot of variation possible and perhaps not surprisingly the correlation between high and low measurements for each subject are lower for Baseline than for Rest or Exercise - there is more variance in the Baseline measurements. Do the Post measurements have that same pattern? How does leaving Baseline and Post out of the analysis affect things?
    * Generally measurements within a subject are more similar than measurements between subjects. FVC and FEV have good correlation between Rest and Exercise measurements for each individual at Rest and Exercise, but not for eNO. There is a lot of variation within some individuals for this measurement. Dale noted that eNO is affected by illness. Should some of these measurements be tossed or is the eNO data even worth analyzing?
    * Do we have to analyze this with PM2.5 as a categorical variable (High, Low). The high/low cutoff is arbitrary and some subjects' high values are very close to other subjects' low values. If there is a way to do it, it might be better to treat PM2.5 as a continuous variable. What would that model look like? Perhaps something looking at the correlation between difference in PM2.5 and difference in measurement? In this case, subject 29 wouldn't need to be thrown out.
    * Is the regression between PM & the measurements different between Baseline, Resting, and Exercise?
