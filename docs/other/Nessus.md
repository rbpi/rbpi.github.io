---
layout: doc
title: Nessus
date: 2020-08-13
---
# Nessus

(Linux/Unix)

Nessus Plugins Update: Failed

```
/opt/nessus/sbin/nessuscli fetch --challenge
```



### Generate a license

https://plugins.nessus.org/v2/offline.php

```
/opt/nessus/sbin/nessuscli fetch --register-offline nessus.license
/opt/nessus/sbin/nessuscli update all-2.0.tar.gz
systemctl restart nessusd.service
```

