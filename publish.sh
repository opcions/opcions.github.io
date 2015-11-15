#!/bin/bash

if [ $# -ne 1 ]; then
    echo "usage: ./publish.sh \"commit message\""
    exit 1;
fi

npm run build:prod

git stash
git checkout master

cp -RL output_prod/* .
rm -rf output_*

git add -A .
git commit -m "$1"
git push origin --all

git checkout drafts -f
git stash pop
