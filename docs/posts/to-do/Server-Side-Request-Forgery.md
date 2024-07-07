---
title: Server-Side Request Forgery
abbrlink: cec975dd
date: 2020-08-03 14:49:39
tags:
---

# Server-Side Request Forgery (SSRF)

CWE-918

## SSRF 简介

服务端请求伪造

-   利用可以发起网络请求的外部服务当作跳板来攻击内部其他服务
-   比如从指定URL地址获取网页文本内容，加载指定地址的图片

攻击目标

-   从外网无法访问的本地应用和内网系统

成因

-   服务端使用网络请求的方式从其他服务器应用获取数据
-   目标地址用户可控且未对目标地址做过滤与限制
-   网络请求的方法支持HTTP/HTTPS以外的协议且未做过滤和限制

