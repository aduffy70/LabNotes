---
title:  Immunoinhibition assay expectations
date:  2018-03-08
layout: post
categories:
  - gsta assays
---

We want to test whether our GSTA3 or GSTA4 antibodies block GSTA activity in wild turkeys. How do we set up this experiment and what controls are needed?

![General expectations][image1]

If we treat cytosols with a preimmune antibody, we don't expect it to affect the GSTA activity (as measured with trapping assays/HPLC runs). If we treat with an immune antibody we expect GSTA activity to decrease. The difference between the activity of the immune-treated vs the pre-immune treated shows us how much of the total activity is due to enzyme targeted by the antibody. The difference between activity of the immune-treated vs zero activity shows us how much of the total activity is due to enzymes not targeted by the antibody.

So a relationship like this suggests that the target GSTA is not important to AFB response:

![Not important][image2]

And a relationship like this suggests the target GSTA is critical to AFB response:

![Important][image3]

But we need to control for two possibilities:
  1. our antibody does not actually block the target (or doesn't block it well) making it look like the target GSTA isn't important when it really is.
  2. our antibody blocks enzymes other than the target making it look like the target GSTA is important when it really is not.

We can control for possibility 1 by treating purified GSTA3 protein with GSTA3 antibody and purified GSTA4 protein with GSTA4 antibody and doing trapping assays/HPLC runs. We will be able to clearly see how well the antibody blocks the target GSTA.

We can control for possibility 2 by running all of our purified GSTA proteins (GSTA1.1, 1.2, 1.3, 2, 3, and 4) on a Western and checking for binding to each of our two antibodies. If the antibody can't bind to a non-target protein than we can assume it doesn't block it either. It is still possible that our antibody blocks a non-GSTA protein that is important for AFB response, but it is unlikely that an antibody would block the target GSTA, not block any of the very similar non-target GSTAs, but still block a more different non-GSTA enzyme.

Once we have controlled for those two possibilities we can do the experiments with cytosols.

[image1]: {{site.image_path}}Immunoinhibition_expectations-general.png
[image2]: {{site.image_path}}Immunoinhibition_expectations-not_important.png
[image3]: {{site.image_path}}Immunoinhibition_expectations-important.png
