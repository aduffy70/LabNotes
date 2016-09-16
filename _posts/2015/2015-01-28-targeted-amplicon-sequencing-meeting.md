---
title: Targeted amplicon sequencing meeting
date: 2015-01-28T14:59:55+00:00
layout: post
categories:
  - gsta methylation
---
  * Met with Paul Wolf, Carol Rowe, Zach Gompert, & Martin Schilling to discuss targeted amplicon sequencing.
      * Carol is moving ahead with a 2-primer pair method, where the first primers amplify the target amplicon and have a 5' end that matches the inner 13 bases of the illumina primers. Then the second set of primers has the entire illumina adapter and indexing sequences. This way you design one primer for the universal illumina adapter and one for each of the secondary adapter+index combinations (they are doing 96). Then you just need to design one primer set for each amplicon. Once they have the 96+1 Illumina primers they can be used for future projects by just designing a new pair of amplicon primers for each amplicon you want to do.
      * I need to figure out the actual costs involved in the targeted bisulfite sequencing I want to do. Does it make more sense to amplify big fragments, shear, and blunt-end ligate the illumina adapters or to amplify smaller fragments with sticky ends to apply the illumina adapters Carol is designing? It will be a tradeoff in pcr reagent costs vs library prep reagent costs.
      * When I start designing primers that will be used with high-fidelity polymerase, I need to be sure to have them phosphorylated at the ends to avoid possible degradation by the polymerase. Zach has seen mis-designed primers still work with hifi polymerase because the error correction activity "corrected" the mis-designed bases. Phosphorylation prevents this.
