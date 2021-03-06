---
title:  Sphagnum subsecunda biogeography project regroup
date:  2019-05-13
layout: post
categories:
  - sphagnum subsecunda biogeography
---

# _Sphagnum lescurii_

Analyses:
  * Structure - DONE (previously)
  * Structure including Norwegian _S. auriculatum_ - DONE
  * PCA but it was done by state. Redo by cluster. - DONE
  * Isolation by distance (IBD) - DONE
    - All North American lescurii
    - K2 clusters (Northern and Southern) separately
    - K3 clusters (Northern, Southern, and Midatlantic) separately
  * Population diversity statistics - DONE
    - Molecular variation within/among populations
    - Sample Size, Number of Alleles, Number of Effective Alleles, Information Index, Observed Heterozygosity, Expected Heterozygosity

# _Sphagnum carolinianum_

Analyses:
  * Structure - DONE (previously)
  * PCA - DONE
  * IBD - DONE
  * Population diversity statistics - DONE
    - Molecular variation within/among populations - DONE (previously)
    - Sample Size, Number of Alleles, Number of Effective Alleles, Information Index, Observed Heterozygosity, Expected Heterozygosity

# _Sphagnum macrophyllum_

Analyses:
  * Maximum likelihood phylogeny (macrophyllum, cribrosum, cyclophyllum, pylaesii, microcarpum, guwassenense) - DONE
  * Structure - DONE
  * PCA - DONE
  * IBD - DONE
  * Population diversity statistics - DONE
    - Molecular variation within/among populations - DONE (previously)
    - Sample Size, Number of Alleles, Number of Effective Alleles, Information Index, Observed Heterozygosity, Expected Heterozygosity

# Figures and Tables for Manuscript

The text will address each species separately but we are combining figures and tables from all species:

## Figures

  * Figure 1 - Maps (3 down, full page height and width)
    - K3 for _S. lescurii_
    - K2 for _S. carolinianum_
    - K2 for _S. macrophyllum_
    - Used R (PBSmapping package) to make svg format maps. Rotated, cropped, manually applied a border, combined, and manually added a legend in Inkscape. There are functions in the latest version of PBSmapping to rotate map data, but it requires R version >3.5 and Ubuntu 16.04 is on version 3.4.4. Doing it manually worked out ok. It just took some trial and error to find the size and x-y limits for the plot that would allow me to rotate and crop out the section I wanted.
  * Figure 2 - Structure plots (3 down, full page height and width)
    - K3 for _S. lescurii_
    - K2 for _S. carolinianum_
    - K2 for _S. macrophyllum_
    - Used R to make svg format plots with no labels for each species separately. Combined and labeled them and drew arrows in Inkscape.
  * Figure 3 - Isolation by distance (IBD) (3 down, full-page height, half-page width)
    - K3 for _S. lescurii_
    - K2 for _S. carolinianum_
    - K2 for _S. macrophyllum_
    - Showed the data with just line plots rather than scatter plots because we have so many points in such a small place the figures became unreadable.
    - Reran the analysis using log10 km for distance rather than km because this is what is recommended for distances in 2D space and is consistent with past Shaw Lab papers.
    - Used R to make a svg format plot for each species separately with just axis labels and no axis titles other titles, or legend. Combined and labeled them in Inkscape. Made another plot from R with a legend just so I could cut out the legend symbols in Inkscape and manually add a legend to the combined figure.
  * Figure 4 - PCA plots (3 acrossed, full page width, about half page height)
    - K3 for _S. lescurii_
    - K2 for _S. carolinianum_
    - K2 for _S. macrophyllum_
    - Used R to make a svg format plot for each species separately and used the IBD plot as a template (including the legend since I used the same symbols) for the final combined figure.
    - I also converted my old R code to R markdown for better reports and to remove unnecessary Pearson moment tests and other exploratory analyses. It is easier to find the mantel test results now, but the old original code and output are saved in a labeled (OLD) folder.
  * Figure 5 - Cartoon ML phylogeny for _S. macrophyllum_ (full page width, about half page height)
    - Opened RAxML_bipartitions.mac-reduced-vouchered in FigTree, collapsed the clades, hid the bootstrap and tip labels, and saved as svg file. Opened svg in Inkscape, set page size, reduced tree to fit on page, manually added bootstrap and tip labels, repositioned the scale bar, resized/formatted the scale bar text, and saved as svg and pdf.
  * Supplemental Figure 1 - Full ML phylogeny for _S. macrophyllum_ (Made it big enough to display clearly onscreen and didn't worry about page size since it is supplemental)
    - Opened RAxML_bipartitions.mac-reduced-vouchered in FigTree, resized/formatted bootstrap and tip text, zoomed and expanded to allow space between tip text and to make the tree deeper, and saved as svg. Opened svg in Inkscape, set page size, manually removed bootstrap values under 50 and on branches too short to be seen or labeled, resized/formatted all text, shifted bootstrap labels closer to the nodes and fixed overlapping text, renamed the "combined" samples (changed underscores to commas), and saved as svg and pdf.


## Tables

  * Table 1 - Vouchers (Blanka is working on it)
  * Table 2 - Diversity stats
    - I fought too long to get comparable numbers from R to the old analysis numbers from GENALEX and finally gave up and had Blanka help me run all the diversity stats in GENALEX 6.5 on Excel 2016.
    - For lescurii, the total values were from the GENALEX analysis including the admixed (>10%) samples and the Northern/Southern/Southern2 values were from the analysis omitting admixed samples. Other species didn't have admixture over 10% so it didn't matter.
    - Na - number of alleles +/-SE
      - From GENALEX HFP tab
    - Ne - effective number of alleles +/-SE
      - From GENALEX HFP (HDP in macrophyllum) tab
    - % Polymorphic loci
      - From GENALEX HFP tab (HDP in macrophyllum)
    - % Private alleles
      - Calculated manally after counting total alleles per population from GENALEX AGL tab and private alleles per population from PAS tab.
    - Ho - observed heterozygosity
      - From GENALEX HFP tab (HDP in macrophyllum)
    - He - expected heterozygosity
      - From GENALEX HFP tab (HDP in macrophyllum)
    - I - Shannon's Information Index
      - From GENALEX HFP tab (HDP in macrophyllum)
  * Table 3 - Pairwise Fst and uNei of clusters (from the analyis w/out admixed samples)
      - Fst from GENALEX FstP tab (R hierfstat for macrophyllum since GENALEX doesn't report Fst for haploids)
      - unbiased Nei from GENALEX uNeiP tab
