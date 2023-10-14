---
title: "Install Ubuntu (Mac M1/M2)"
layout: default
---

[Home](../index.md)

[https://www.theroboticsspace.com/blog/How-To-Install-ROS-2-in-Ubuntu-22-04-On-M1-Mac/
](https://www.theroboticsspace.com/blog/How-To-Install-ROS-2-in-Ubuntu-22-04-On-M1-Mac/
)

# [How To Install ROS 2 in Ubuntu 22.04 On M1/M2 Mac](#how-to-install-ros-2-in-ubuntu-2204-on-m1m2-mac)

__Table of Contents__
* TOC
{:toc}

The first step is more of a reminder. The Macbooks with M1/M2 Chip are ARM-based platforms compared to older MacBooks and Windows which are AMD/Intel x86-based platforms.
Different virtual desktops are available like Parallels Desktop, Oracle’s Virtual Box, and UTM each having its pros and cons.

In this guide, we will use free UTM virtualization software.
UTM allows Ubuntu to run with OpenGL, Hardware acceleration providing a highly efficient with near-native speed performance.

## [Prerequisites](#prerequisites)

- MacOS 13 or later
- 50GB of free space

## [1. Install UTM](#1-install-utm)

Go to [GetUTM](https://mac.getutm.app/) and click the Download button. A ```UTM.dmg``` file will start downloading.

![UTM Download](https://www.theroboticsspace.com/assets/simg1.png)

Once the download is complete, double click on the ```UTM.dmg``` file to open it. Drag the UTM icon to the Applications folder.

![UTM Install](https://www.theroboticsspace.com/assets/simg3.png)

## [2. Download Ubuntu 22.04](#2-download-ubuntu-2204)

Go to [Ubuntu releases](https://cdimage.ubuntu.com/jammy/daily-live/current/) and download the latest [Ubuntu 22.04 image for ARMv8/AArch64 architecture](https://cdimage.ubuntu.com/jammy/daily-live/current/jammy-desktop-arm64.iso).

![Ubuntu Download](https://www.theroboticsspace.com/assets/simg2.png)

## [3. Create a new virtual machine](#3-create-a-new-virtual-machine)

Open UTM and click on the + icon to **create a new virtual machine**.

![UTM Create VM](https://www.theroboticsspace.com/assets/simg4.png)
![UTM Create VM](https://www.theroboticsspace.com/assets/simg5.png)

## [4. Configure the virtual machine](#4-configure-the-virtual-machine)

Use **Virtualize** to simulate the virtual machine with arm64 CPU architecture.

![UTM Configure VM](https://www.theroboticsspace.com/assets/simg6.png)

Select Linux as the **Guest OS** and then the .iso file downloaded for Ubuntu 22.04.

![UTM Configure VM](https://www.theroboticsspace.com/assets/simg7.png)
![UTM Configure VM](https://www.theroboticsspace.com/assets/simg8.png)

Continue with the default settings for **CPU**, **RAM**, **Storage**, and **Network**.

![UTM Configure VM](https://www.theroboticsspace.com/assets/simg9.png)

## [5. Install Ubuntu 22.04](#5-install-ubuntu-2204)

Click on the **Play** button to start the virtual machine.
Then in the next screen, select **Try or Install Ubuntu**.

![UTM Install Ubuntu](https://www.theroboticsspace.com/assets/simg10.png)

Once the Ubuntu 22.04 screen appears type ```ubuntu``` as the password and press enter.

![UTM Install Ubuntu](https://www.theroboticsspace.com/assets/simg12.png)

Click on the **Install Ubuntu** icon on the desktop to start the installation process.

![UTM Install Ubuntu](https://www.theroboticsspace.com/assets/simg13.png)

Select the **Normal Installation** and ***Install Third Party Software** option and click on the **Continue** button.

![UTM Install Ubuntu](https://www.theroboticsspace.com/assets/simg14.png)

Select the **Erase disk and install Ubuntu** option and click on the **Install Now** button.

![UTM Install Ubuntu](https://www.theroboticsspace.com/assets/simg15.png)

Proceed with the installation process and create your user account.

![UTM Install Ubuntu](https://www.theroboticsspace.com/assets/simg16.png)

Once the installation is complete, close the dialog box power off the system.

![UTM Install Ubuntu](https://www.theroboticsspace.com/assets/simg19.png)

Eject the Ubuntu 22.04 iso file from the virtual machine.

![UTM Install Ubuntu](https://www.theroboticsspace.com/assets/simg20.png)

Restart the virtual machine and login with your user account.

You have successfully installed Ubuntu 22.04 on your M1/M2 Mac.

## [6. Next Steps](#6-next-steps)

If you want to work with a setup identical to the one you will find on the physical robot follow the guide to [install Docker on Ubuntu 22.04](../dual_boot/docker_installation.md).

If you want maximum performance on your Mac skip all the following steps of this guide and proceed with a standard Debian package installation of ROS 2 from [here](https://docs.ros.org/en/humble/Installation/Ubuntu-Install-Debians.html).

## [7. References](#7-references)

- [UTM](https://mac.getutm.app/)
- [Ubuntu releases](https://cdimage.ubuntu.com/jammy/daily-live/current/)
- [How to Install Ubuntu on Mac M1](https://www.theroboticsspace.com/blog/How-To-Install-ROS-2-in-Ubuntu-22-04-On-M1-Mac/)