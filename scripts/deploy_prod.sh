#!/usr/bin/env sh

set -e

BRANCH="$(git rev-parse --abbrev-ref HEAD)"
if [ "$BRANCH" != "main" ]; then
    echo 'You are on the wrong branch! Switch to main branch and try again.';
    exit 1;
fi

rm -rf dist
npm run build
cd dist

echo 'www.dollarbeale.com' > CNAME

git init
git checkout -b main
git add -A
git commit -m 'deploy to production environment'

git push -f git@github.com:dollarbeale/dollarbeale.github.io.git main

cd -