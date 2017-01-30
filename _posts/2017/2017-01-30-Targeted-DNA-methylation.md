---
title:  Targeted DNA methylation (TDM)
date:  2017-01-30
layout: post
categories:
  - gsta methylation

---
There is [a method that can be used to methylate a target section of DNA in the genome of living cells][1].  The basic steps are:
  1. PCR amplify the section of DNA you want to have methylated--the promoter region (in our case, a differentially methylated region we have identified).
  2. Methylate the PCR product by incubating with CpG methytransferase and S-adenosylmethionine.
  3. Transfect methylated PCR products into living cells using Invitrogen's DMRIE-C kit (made for mammals but it been [successfully tested][2] to transfect DNA into chicken primary hepatocytes) at day 1, 3, and 5. The methylated PCR product drives the cellular machinery to methylate the corresponding section of the genome during DNA replication.
  4. Verify that methylation of the genomic DNA occured with methylation-sensitive PCR.
  5. Look for phenotypic differences between cells transfected with methylated PCR product and cells transfected with non-methylated PCR product.

# Challenges/Questions/Differences from our system:
  * For their in vivo work, they use skin cells and a gene where methylation leads to tumors. So they can inject the transfection cocktail into skin of live animals and visible tumors will develop. To work in live animals we would need to inject the transfection cocktail into the liver of a living turkey and only the cells in the area injected would be expected to change--the rest of the liver would be working normally.
  * They are using somatic stem cells, not primary cells.
    * Changing the methylation requires "cell passages": this means that the cell you transfect doesn't get methylated... its "offspring" do? Our primary cells don't divide?
    * They were transfecting at days 1, 3, and 5. Will our primary cells survive that long?


[1]: http://doi.org/10.1158/0008-5472.CAN-10-3418
[2]: https://www.thermofisher.com/us/en/home/references/protocols/cell-culture/transfection-protocol/cells-transfected-successfully.html
