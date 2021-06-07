#!/usr/bin/env sh

# abort on errors
#set -e

# build
npm run build

# navigate into the build output directory
cd dist

# handle 404 on reload of page by copying index.html into 404.html
cp index.html 404.html

# if you don't want your website listed
echo 'User-agent: * 
Disallow: /' > robots.txt