---
title: Git Basics with Hexo
tags:
  - Git
  - Hexo
abbrlink: f497dc94
date: 2020-08-13 05:31:38
---

## 推送源码到远程仓库

```
git add .
git commit -m "Update"
git push -u origin master
```



## 拉取远程仓库到本地

```
# 查看远程仓库信息
git remote -v

# 拉取远程仓库
git fetch origin master

# 比较仓库差异
git log -p master.. origin/master

# 合并代码
git merge origin/master
```



## 更换 Hexo 环境之后重新初始化环境

```
git clone git@github.com:RBPi/BLog.git
cd Blog
npm install
npm install hexo
npm install hexo-deployer-git --save
git submodule update --init
```

