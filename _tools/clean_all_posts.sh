#! /bin/bash

# clean_all_posts.sh
# Runs my cleaning script on all .md posts in the current folder.

for filename in ./*.md ; do
    echo $filename ;
    ./clean_post_from_wordpress.py $filename > ./cleaned/$filename ;
done
