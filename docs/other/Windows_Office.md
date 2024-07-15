# Office Tool Plus

Office Tool Plus 是一个用于下载、安装、激活 Office 的小工具，基于 Office 部署工具制作。借助 Office Tool Plus，你可以高速下载 Office，自定义安装 Office，对 Office 进行激活配置等。从下载到激活一站式服务。

官方网站：https://otp.landian.vip/zh-cn/

Office LTSC 专业增强版 2021

打开 Office Tool Plus 后，转到部署页面。

在部署页面，从上往下，依次做以下事情：

体系结构：可选 64 位或 32 位，都可以。
更新通道：选择 Office 2024 企业长期版。
下载后再部署：最好打开，以免网络不好安装卡住。当然自信的靓仔可以不开。
产品：点击添加产品，添加 2024 的产品，目前仅推荐选择 ProPlus2024Volume，如果需要 Visio 或者 Project 可以选择 VisioPro2024Volume 或 ProjectPro2024Volume。选择其他 Office 2024 产品需要自行处理激活问题，微软并没有公开其他 Office 2024 产品的临时激活密钥。
语言：点击添加并选择……应该都是加简体中文吧？不要把【部署为校对工具】打开，说了多少遍了还是不听。
ProPlus2024Volume

## 激活

kms.03k.org

使用 Office Tool Plus 自动激活 Office
确保自己使用的是最新版的 Office Tool Plus，按下快捷键 Ctrl + Shift + P，打开命令框，按需复制下面的命令，粘贴后回车 Enter 以执行操作。
```
ospp /inslicid MondoVolume /sethst:kms.03k.org /setprt:1688 /act
```


使用 Office Tool Plus 手动激活 Office
> [!TIP] 请优先使用自动激活，避免你遇到问题又不会解决。

手动激活步骤：

安装 Office 批量许可证 (Volume)，无论如何，这里你都要选批量许可证。
设置一个 KMS 主机地址并保存设置。
点击激活按钮，等待激活完成。