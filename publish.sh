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
rm -rf app
rm -rf source
rm -f sculpin.json
rm -f publish.sh

git add -A .
git commit -m "$1"
git push origin --all

git checkout drafts -f
git stash pop
