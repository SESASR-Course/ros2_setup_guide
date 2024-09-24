# [ROS 2 Setup Guide](#ros-2-setup-guide)

__Table of Contents__
* TOC
{:toc}

This guide will help you install ROS 2 on your machine. 

At the end of each page of this tutorial there is a section named "_Next steps_" that will guide you through all the process.

Choose the guide that fit best your needs from the three available below.

## [1. Dual boot Ubuntu](#1-dual-boot-ubuntu)

Install Ubuntu alongside Windows on your hard drive. You will be prompted at each boot with the choise of the operating system to run. If you want to install Ubuntu on your machine, follow the setup guide for Ubuntu in dual boot.

> This operation must be performed really carefully and may be disruptive. Please, before proceeding read carefully the guide. If any part of the guide is not clear, ask someone before proceeding with the installation.

1. [Dual boot Ubuntu setup guide](./dual_boot/dual_boot_guide.md)
1. [ROS2 installation](./dual_boot/ros2_installation.md)

## [2. WSL2 Ubuntu](#2-wsl2-ubuntu)

Run Ubuntu inside Windows using a functionality called Windows Subsystem for Linux (WSL). This option is not reccommended for PCs with low performances. The suggested __minimum requirements__ are 16 GB of RAM and an i5-8th generation processor or equivalent.

1. [WSL2 Ubuntu setup guide](./wsl2/wsl2_setup_guide.md)
1. [ROS2 installation](./wsl2/ros2_installation.md)

## [3. Mac M1/M2 (experimental)](#3-mac-m1m2-experimental)

***Please note that this is an experimental setup and it is not tested***.

Run Ubuntu inside a UTM virtual machine on a Mac equipped with M1/M2 processors. If you have a Mac with an Intel processor you can install Ubuntu in dual boot mode folowing [this instructions](https://www.youtube.com/watch?v=KIgxEEzT9ek&ab_channel=KskRoyal).

1. [Mac M1/M2 setup guide](./mac_m1/setup_guide.md)
1. [ROS2 installation](./mac_m1/ros2_installation.md)
