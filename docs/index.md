# [ROS 2 Setup Guide](#ros-2-setup-guide)

__Table of Contents__
* TOC
{:toc}

This guide will help you install ROS 2 on your machine. 

At the end of each page of this tutorial there is a section named "_Next steps_" that will guide you through all the process.

The first part of this tutorial will guide you through the installation of _Ubuntu 22.04_. It diverges in three parts, depending on your operating system and on the type of installation you want to perform.

- The [_first_](#1-dual-boot-ubuntu) one explains how to install Ubuntu alongside Windows on your hard drive. You will be prompted at each boot with the choise of the operating system to run.

- The [_second_](#2-wsl2-ubuntu) one explains how to run Ubuntu inside Windows using a functionality called Windows Subsystem for Linux (WSL). This option is not reccommended for PCs with low performances. The suggested __minimum requirements__ are 16 GB of RAM and an i5-8th generation processor or equivalent.

- The [_third_](#3-mac-m1m2-experimental) one is for users with Mac equipped with M1/M2 processors and shows how to run Ubuntu inside a UTM virtual machine. If you have a Mac with an Intel processor you can install Ubuntu in dual boot mode folowing [this instructions](https://www.youtube.com/watch?v=KIgxEEzT9ek&ab_channel=KskRoyal).

Once you have an Ubuntu installation running, the guide proceed with the installation of:

- Docker (Ubuntu) / Docker Desktop (Windows)
- Nvidia Docker (optional)
- VSCode and VSCode extensions
- ROS 2 Humble dev container

## [1. Dual boot Ubuntu](#1-dual-boot-ubuntu)

If you want to install Ubuntu on your machine, follow the setup guide for Ubuntu in dual boot.

1. [Dual boot Ubuntu setup guide](./dual_boot/dual_boot_guide.md)
1. [ROS2 installation](./dual_boot/ros2_installation.md)

<!--
1. [Docker installation](./dual_boot/docker_installation.md)
1. [Nvidia Docker installation](./dual_boot/nvidia_docker.md) (optional)
1. [VSCode installation and extensions](./dual_boot/vscode_docker.md)
1. [ROS 2 Humble dev container](./dual_boot/ros2_dev_container.md) 
-->

## [2. WSL2 Ubuntu](#2-wsl2-ubuntu)

In alternative, you can use install Ubuntu on WSL2.

1. [WSL2 Ubuntu setup guide](./wsl2/wsl2_setup_guide.md)
1. [ROS2 installation](./wsl2/ros2_installation.md)

<!-- 
1. [Docker Desktop installation](./wsl2/docker_installation.md)
1. [VSCode installation and extensions](./wsl2/vscode_docker.md)
1. [ROS 2 Humble dev container](./wsl2/ros2_dev_container.md) 
-->

## [3. Mac M1/M2 (experimental)](#3-mac-m1m2-experimental)

***Please note that this is an experimental setup and it is not tested***.

If you have a Mac M1/M2, you can install Ubuntu on a virtual machine using UTM.

1. [Mac M1/M2 setup guide](./mac_m1/setup_guide.md)
1. [ROS2 installation](./mac_m1/ros2_installation.md)

<!--
1. [Docker installation](./mac_m1/docker_installation.md)
1. [VSCode installation and extensions](./mac_m1/vscode_docker.md)
1. [ROS 2 Humble dev container](./mac_m1/ros2_dev_container.md) 
-->