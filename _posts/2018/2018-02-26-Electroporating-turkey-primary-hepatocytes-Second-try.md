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

![Electroporation sample 8 normal view][image1]
![Electroporation sample 8 GFP view][image2]

# Next steps

Determine where the point of diminishing returns for vector concentration. Will adding even more vector lead to even more cells expressing the vector or is 10ug/750uL already more than is required to maximize uptake?

Use just the high voltage/high capacitance settings with a range of vector concentrations.

[image1]: {{site.image_path}}Electroporation_Sample_8_normal_view.jpg
[image2]: {{site.image_path}}Electroporation_Sample_8_GFP_view.jpg
