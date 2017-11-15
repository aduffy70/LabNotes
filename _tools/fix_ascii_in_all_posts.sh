#! /bin/bash

# fix_ascii_in_all_posts.sh
# Replaces ASCII character codes in posts with the correct character (the
# worpress to jekyll importer replaced apostrophes and emdashes with their
# ascii character codes)

for filename in ./*.md ; do
    echo $filename ;
    sed -i "s/&#8217;/'/g" $filename ;
    sed -i "s/&#8211;/-/g" $filename ;
    sed -i 's/&#8220;/"/g' $filename ;
    sed -i "s/&#8230;/.../g" $filename ;
    sed -i 's/&#8221;/"/g' $filename ;
    sed -i "s/&#8242;/'/g" $filename ;
    sed -i "s/&#8216;/'/g" $filename ;
    sed -i 's/&#8243;/"/g' $filename ;
    sed -i "s/&#8212;/--/g" $filename ;
done
