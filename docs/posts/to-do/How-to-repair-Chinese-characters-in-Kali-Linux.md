---
title: How to repair Chinese characters in Kali Linux
tags: Kali
abbrlink: adbe8765
date: 2020-04-15 18:18:00
---

更新软件源

```shell
apt-get update
```



安装中文字体

```shell
apt-get install xfonts-intl-chinese ttf-wqy-microhei ttf-wqy-zenhei xfonts-wqy
```



软件包：xfonts-intl-chinese

X 系统国际化字体 -- 中文

这个软件包包括了一些 GB2312、GB8565-88、BIG5 (ETen)、和 SiSheng 中文字体。 如果您要用中文浏览、打印或创作文档和使用以上几种编码方式，将需要使用这些字体。这些字体用于 X Window 系统。

