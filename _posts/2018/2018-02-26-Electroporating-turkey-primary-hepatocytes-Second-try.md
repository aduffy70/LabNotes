---
title:  Electroporating turkey primary hepatocytes - Second try
date:  2018-02-26
layout: post
categories:
  - gsta mirna
  - gsta other
---
On our first attempt we were not using the microscope correctly to visualize whether the vector was taken up and the protein expressed. We now know how so let's set up a new experiment:
  * Test high and low voltage
  * Test high and low capacitance
  * Test high and low vector concentration

| Sample number | Voltage (V) | Capacitance (uF) | Vector (ug per 750uL sample volume) |
| ------------- | ----------- | ---------------- | ----------------------------------- |
| 1 | 220 | 400 | 1 |
| 2 | 220 | 400 | 10 |
| 3 | 220 | 950 | 1 |
| 4 | 220 | 950 | 10 |
| 5 | 400 | 400 | 1 |
| 6 | 400 | 400 | 10 |
| 7 | 400 | 950 | 1 |
| 8 | 400 | 950 | 10 |
| Control 1 | None | None | None |
| Control 2 | None | None | 1 |
| Control 3 | None | None | 10 |

Constants:
  * Cells were kept @37C before electroporation.
  * 4mm plate distance electroporation cuvettes (stored in EtOH) were rinsed 3 times with mqWater and drained on a paper towel prior to use.
  * 750uL of cells in Supplemented media @ 3200 cells/uL (~2400000 cells) were added to the cuvette.
  * Vector (pEGFP-C1) was added and gently pipette mixed.
  * Samples were electroporated in the GenePulser XCell using an exponential cycle program.
  * Samples were incubated on ice ~10 minutes after electroporation.
  * Samples were gently pipette mixed in the cuvette and 100uL (~320000 cells) was plated with 200uL Supplemented media in a 48 well plate. In triplicate.
  * To confirm that vectors are not entering the cells spontaneously, three control samples were not electroporated but otherwise received the same treatment as the electroporated samples:
    - Control 1 - No Vector
    - Control 2 - Low Vector
    - Control 3 - High Vector
  * Plated cells were incubated @37C overnight, media was changed to Definitive media (to remove dead cells and debris) and inspected under the microscope.

# Results

No cells expressed the protein in the Control reactions--good.

Higher vector concentrations worked better than lower.

Higher voltage worked better than lower

Higher capacitance worked better than lower

The high/high/high samples had hundreds of bright glowing points against a weakly glowing background. ~40% of cells were brightly glowing:

Normal view:

![Electroporation sample 8 normal view][image1]

GFP view:

![Electroporation sample 8 GFP view][image2]

# Next step - find optimal vector concentration

Determine where the point of diminishing returns is for vector concentration. Will adding even more vector lead to even more cells expressing the vector or is 10ug/750uL already more than is required to maximize uptake?

Use just the high voltage (400V)/high capacitance (950uF) settings with a range of vector concentrations.

  * Three concentrations of vector (5ug, 10ug or 20ug in 750uL media with 2400000 cells). We would have liked to have gone higher but we didn't have enough vector. This will at least tell us if we are already beyond the optimum or if we still need to go higher.
  * Included a no vector/no electroporation control again but did not include a vector/no electroporation control this time since we already demonstrated that the cells will not take up and express the vector spontaneously with no electroporation.
  * Process was identical to the last experiment (see "constants" above)

| Sample number | Voltage (V) | Capacitance (uF) | Vector (ug per 750uL sample volume) |
| ------------- | ----------- | ---------------- | ----------------------------------- |
| Control  | None | None | None |
| 1 | 400 | 950 | 5 |
| 2 | 400 | 950 | 10 |
| 3 | 400 | 950 | 20 |

## Results

Only a few (5 or less per well) cells expressed the vector, even at the highest concentration. We were expecting the 10ug level on this run to be comparable to the 10ug level on the previous run and it was much lower so something clearly went wrong. We only had a few ug of the vector we had been using so we mixed it with another tube Sean found. We think it is the same vector, but perhaps it was not stored properly and is degraded. We need to get more of the original vector and retry this experiment.

[image1]: {{site.image_path}}Electroporation_Sample_8_normal_view.jpg
[image2]: {{site.image_path}}Electroporation_Sample_8_GFP_view.jpg
