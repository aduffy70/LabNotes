---
title:  cDNA samples for qPCR
date:  2017-06-20
layout: post
categories:
  - gsta alt splicing
---

We have cDNA samples and dilutions from Deepika Gaddam's qPCR/Fluidigm runs.

Tiny amounts (1-5uL?) of undiluted samples and larger amounts (>50uL) of 1:10 and 1:20 dilutions.

12 tubes of each of 4 types. Tubes are labeled:
  * R (Rio Grande?) 1,3,4,5,6,7,10,11,12,13,14,17
  * B (BB White) (2,3,4,5,8,9-AFB),(10,11,12,14,16,17-Control)
  * N (Nicholas) 1,2,3,5,8,9,11,12,14,15,17,18
  * E (Eastern Wild) (1,2,3,4,5,8-AFB),(9,10,11,14,15,16-Control)

I want to Eastern Wild and BB White since these are the same birds we used on the fluidigm analysis of GSTA expression levels.

Nanodrop the 1:20 samples (from 1/5/15 -- these are the most clearly labeled) to see what range of concentrations we have:

| Sample | Sample concentration (ng/uL) | uL Sample for dilution | uL Water for dilution | 25ng/uL Dilution volume (uL) |
| ------ | ---------------------------- | ---------------------- | --------------------- | ---------------------------  |
| B2 | 120.0 | 10 | 38.0 | 48.0 |
| B3 | 41.7 | 25 | 16.7 | 41.7 |
| B4 | 76.0 | 15 | 30.6 | 45.6 | 
| B5 | 73.2 | 15 | 28.9  | 43.9 |
| B8 | 49.6 | 20 | 19.7 | 39.7 |
| B9 | 65.5 | 15 | 24.3 | 39.3 |
| B10 | 59.0 | 20 | 27.2 | 47.2 |
| B11 | 86.2 | 15 | 36.7 | 51.7 |
| B12 | 96.4 | 10 | 28.6 | 38.6 |
| B14 | 70.0 | 15 | 27.0 | 42.0 |
| B16 | 171.9 | 10 | 58.8 | 68.8 |
| B17 | 121.4 | 10 | 38.6 | 48.6 |
| E1 | 87.2 | 15 | 37.3 | 52.3 |
| E2 | 225.7 | 5  | 40.1 | 45.1 |
| E3 | 178.8 | 10 | 61.5 | 71.5 |
| E4 | 137.0 | 10  | 44.8 | 54.8 |
| E5 | 66.7 | 15 | 25.0 | 40.0 |
| E8 | 90.4 | 10 | 26.2 | 36.2 |
| E9 | 70.3 | 15 | 27.2 | 42.2 |
| E10 | 146.2 | 10 | 48.5 | 58.5 |
| E11 | 102.7 | 10 | 31.1 | 41.1 |
| E15 | 183.2 | 5 | 33.0 | 48.0 |
| E14 | 80.0 | 15 | 31.6 |  36.6 |
| E16 | 59.3 | 20 | 27.4 | 47.4 |

It doesn't matter if the concentrations of samples used in qPCR are identical--normalization takes care of that. But, for each sample, it is critical that the dilution used for the normalization primerpairs is exactly the same as the dilution used for all other primerpairs--otherwise normalization won't work. To ensure that is the case, I made enough 25ng/uL dilution of each sample to do all the expected primerpairs with replicates:
  * 1uL X 2 replicates X (3 UTR5 primerpairs + 4 UTR3 primerpairs + 2 housekeeping gene primerpairs) = 18uL total
  * Just to be safe, I doubled this and made >36uL of each sample at 25ng/uL.
