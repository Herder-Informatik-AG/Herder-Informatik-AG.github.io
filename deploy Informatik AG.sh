#!/usr/bin/env sh

# abort on errors
#set -e

# build
npm run build

# navigate into the build output directory
cd dist

# handle 404 on reload of page by copying index.html into 404.html
cp index.html 404.html

# if you are deploying to a custom domain
# echo 'domain.de' > CNAME

# if you don't want your website listed
echo 'User-agent: * 
Disallow: /' > robots.txt

git init
git add -A
git commit -m 'deploy new version'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:Herder-Informatik-AG/Herder-Informatik-AG.github.io.git main:gh-pages

cd -

sleep 5s