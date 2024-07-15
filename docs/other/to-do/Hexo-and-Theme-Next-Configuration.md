---
title: Hexo and Theme-Next Configuration
tags: Hexo
abbrlink: e06ddb37
date: 2020-08-12 03:36:20
---

# Hexo
## Install Hexo
A fast, simple & powerful blog framework
```
npm install hexo-cli -g
$ hexo init <folder>
$ cd <folder>
$ npm install
```

## Theme

### Install Theme-Next via Submodule
```
cp theme/next/_config.yml _config.next.yml

# Install Theme-Next
git submodule add https://github.com/theme-next/hexo-theme-next themes/next

# Update Theme-Next
git submodule update --remote
```

## Plugins
```
npm install --save hexo-blog-encrypt

# https://github.com/rozbo/hexo-abbrlink
https://github.com/rozbo/hexo-abbrlink
```

## Deploy Website
```
hexo clean && hexo generate && hexo deploy
```

# Git
## Push to Remote Repository
```
git add . && git commit -m "Upload Blog Source Code" && git push origin master
```


