#! /bin/bash

# fix_ascii_in_all_posts.sh
# Replaces ASCII character codes in posts with the correct character (the
# worpress to jekyll importer replaced apostrophes and emdashes with their
# ascii character codes)

for filename in ./*.md ; do
    echo $filename ;
#    sed -i "s/  - Summary/  - summary/g" $filename ;
#    sed -i "s/  - Bureaucracy//g" $filename ;
#    sed -i "s/  - bureaucracy//g" $filename ;
#    sed -i "s/  - Coursework//g" $filename ;
#    sed -i "s/  - coursework//g" $filename ;
#    sed -i "s/  - Uncategorized//g" $filename ;
#    sed -i "s/  - uncategorized//g" $filename ;
#    sed -i "s/  - Fern chondriomes//g" $filename ;
#    sed -i "s/  - Sciencesim//g" $filename ;
#    sed -i "s/  - sciencesim//g" $filename ;
#    sed -i "s/  - cultures//g" $filename ;
#    sed -i "s/  - Cultures//g" $filename ;
#    sed -i "s/  - reviews//g" $filename ;
#    sed -i "s/  - Team CP//g" $filename ;
#    sed -i "s/  - team cp//g" $filename ;
#    sed -i "s/  - Lab Maintenance//g" $filename ;
#    sed -i "s/  - lab maintenance//g" $filename ;
#    sed -i "s/  - Software-Hardware//g" $filename ;
#    sed -i "s/  - software//g" $filename ;
#    sed -i "s/  - hardware//g" $filename ;
    sed -i "s/  - H. wrightii/  - h. wrightii/g" $filename ;
    sed -i "s/  - t. intricatum/  - t. intricatum gbs/g" $filename ;
    sed -i "s/  - T. intricatum/  - t. intricatum gbs/g" $filename ;
    sed -i "s/  - GBS/  - t. intricatum gbs/g" $filename ;
    sed -i "s/  - gbs/  - t.intricatum gbs/g" $filename ;
    sed -i "s/  - DRK12/  - science ed drk12/g" $filename ;
    sed -i "s/  - drk12/  - science ed drk12/g" $filename ;
    sed -i "s/  - VPGsim/  - science ed vpgsim/g" $filename ;
    sed -i "s/  - vpgsim/  - science ed vpgsim/g" $filename ;
    sed -i "s/  - vpcsim/  - science ed vpcsim/g" $filename ;
    sed -i "s/  - VPCsim/  - science ed vpcsim/g" $filename ;
    sed -i "s/  - Ideas/  - ideas/g" $filename ;
    sed -i "s/  - methylation/  - gsta methylation/g" $filename ;
    sed -i "s/  - mirna/  - gsta mirna/g" $filename ;
    sed -i "s/  - alternate splicing/  - gsta alt splicing/g" $filename ;
    sed -i "s/  - Reading//g" $filename ;
    sed -i "s/  - ScienceSim//g" $filename ;
done
