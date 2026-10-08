---
title: "Connect VS Code to a Remote"
layout: default
---

[Home](../index.md)

# Connect VS Code to a Remote

* TOC
{:toc}

## Connect to WSL 2

![Remote](./images/remote_wsl.png)

## Connect to UTM using SSH

Install OpenSSH server on Ubuntu.

```bash
sudo apt update
sudo apt install openssh-server
```

Click on the symbol <img src="./images/remote_icon.png" alt="icona" width="20" height="20"> in the bottom left corner. Then select `SSH`.

![Remote](./images/remote_ssh.png)


VS Code will automatically install the needed extension. Then click again on the symbol and select `Connect to Host...`.

![Remote](./images/remote_ssh2.png)

In the drop down menu, select the option `Add New SSH Host...`

![Remote](./images/remote_ssh3.png)

In the input prompt type `ssh username@hostname.local`. **Substitute `username@hostname` with what you see in your Ubuntu terminal written in green.**

Follow the instruction in the VS Code window and press enter to confirm. 

![Remote](./images/remote_ssh4.png)

Now, select the Remote Explorer tab and the connection you just added shall be in the list. Click on the icons near the name you added to open the connection in the same window or in a new window.

![Remote](./images/remote_ssh5.png)



