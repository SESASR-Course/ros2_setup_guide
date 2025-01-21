# [ROS 2 Setup Guide](#ros-2-setup-guide)

__Table of Contents__
* TOC
{:toc}

This guide will help you install ROS 2 on your machine. 

In this page there is an overview for each of the proposed methods and than a link that will guide you throught the installation process. 

At the end of each page of this tutorial there is a section named "_Next step_" that will guide you through all the process.

Choose the guide that fit best your needs from the three available below.

## [1. WSL2 Ubuntu (Suggested)](#2-wsl2-ubuntu)

Windows Subsystem for Linux (WSL) is a functionality of Windows that let you run Ubuntu in a terminal while running Windows. In this way, we can run ROS 2 in the simpliest and most efficient way as we were running Ubuntu on our PC. You will need at least 10 GB of free space.

First of all, you will need to activate the WSL2 functionality, then you will be guided in the installation of ROS 2.

__Start from [WSL2 Ubuntu setup](./wsl2/wsl2_setup_guide.md).__

## [2. Dual boot Ubuntu](#1-dual-boot-ubuntu)

Install Ubuntu alongside Windows on your hard drive. You will be prompted at each boot with the choise of the operating system to run. If you want to install Ubuntu on your machine, follow the setup guide for Ubuntu in dual boot.

> This operation must be performed really carefully and may be disruptive. Please, before proceeding read carefully the guide. If any part of the guide is not clear, ask someone before proceeding with the installation.

__Start from [Dual boot Ubuntu setup](./dual_boot/dual_boot_guide.md).__

## [3. Mac M1/M2 (experimental)](#3-mac-m1m2-experimental)

***Please note that this is an experimental setup and it is not tested***.

Run Ubuntu inside a UTM virtual machine on a Mac equipped with M1/M2 processors. If you have a Mac with an Intel processor you can install Ubuntu in dual boot mode folowing [this instructions](https://www.youtube.com/watch?v=KIgxEEzT9ek&ab_channel=KskRoyal).

__Start from [Mac M1/M2 setup guide](./mac_m1/setup_guide.md).__
