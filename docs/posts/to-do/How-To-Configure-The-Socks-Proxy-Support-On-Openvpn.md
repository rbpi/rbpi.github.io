---
title: How To Configure The Socks Proxy Support On Openvpn
tags: OpenVPN
abbrlink: 1619da96
date: 2020-08-10 23:25:17
---

Edit *.ovpn
```--socks-proxy server [port] [authfile]```
Connect to remote host through a Socks5 proxy at address server and port port (default=1080). authfile (optional) is a file containing a username and password on 2 lines, or "stdin" to prompt from console.
