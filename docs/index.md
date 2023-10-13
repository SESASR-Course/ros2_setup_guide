* TOC
{:toc}

# ROS 2 Setup Guide

## Install ROS 2

The following guide will help you install ROS 2 on your machine.
It diverges in two parts, depending on your operating system and on the type of installation you want to perform.

The first one explains how to install Ubuntu alongside Windows on your hard drive. You will be prompted at each boot with the choise of the operating system to run.

The second one explains how to run Ubuntu inside Windows using a functionality called Windows Subsystem for Linux (WSL). This option is not reccommended for PCs with low performances. The suggested minimum requirements are 16 GB of RAM and an i5-8th generation processor or equivalent.

The guide proceed with the installation of:

- Docker (Ubuntu) / Docker Desktop (Windows)
- Nvidia Docker (optional)
- VSCode and VSCode extensions
- ROS 2 Humble dev container

## Dual boot Ubuntu

If you want to install Ubuntu on your machine, follow the setup guide for Ubuntu in dual boot.

- [Dual boot Ubuntu setup guide](./dual_boot/dual_boot_guide.md)
- [Docker installation](./dual_boot/docker_installation.md)
- [Nvidia Docker installation](./dual_boot/nvidia_docker.md) (optional)
- [VSCode installation and extensions](./dual_boot/vscode_docker.md)
- [ROS 2 Humble dev container](./dual_boot/ros2_dev_container.md)

## WSL2 Ubuntu

In alternative, you can use install Ubuntu on WSL2.

- [WSL2 Ubuntu setup guide](./wsl2/wsl2_setup_guide.md)
- [Docker Desktop installation](./wsl2/docker_installation.md)
- [VSCode installation and extensions](./wsl2/vscode_docker.md)
- [ROS 2 Humble dev container](./wsl2/ros2_dev_container.md)

## Mac M1/M2 (experimental)

***Please note that this is an experimental setup and it is not tested***.

If you have a Mac M1/M2, you can install Ubuntu on a virtual machine using UTM.

- [Mac M1/M2 setup guide](./mac_m1/setup_guide.md)
- [Docker installation](./dual_boot/docker_installation.md)
- [VSCode installation and extensions](./dual_boot/vscode_docker.md)
- [ROS 2 Humble dev container](./dual_boot/ros2_dev_container.md)
