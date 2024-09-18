# ROS2 Setup Guide

## Install ROS2

The following guide will help you install ROS2 on your machine.
It diverges in two parts, depending on your operating system and on the type of installation you want to perform.

- [ROS2 Setup Guide](#ros2-setup-guide)
  - [Install ROS2](#install-ros2)
  - [Windows Dual boot Ubuntu](#dual-boot-ubuntu)
  - [Windows WSL2 Ubuntu](#wsl2-ubuntu)
  - [Mac M1/M2 (experimental)](#mac-m1m2-experimental)

The guide proceed with the installation of:

- Docker (Ubuntu) / Docker Desktop (Windows)
- Nvidia Docker (optional)
- VSCode and VSCode extensions
- ROS2 Humble dev container

## Dual boot Ubuntu

If you want to install Ubuntu on your machine, follow the setup guide for Ubuntu in dual boot.

- [Dual boot Ubuntu setup guide](./dual_boot/dual_boot_guide.md)
- [VSCode installation and extensions](./dual_boot/vscode_docker.md)
- [Docker installation](./dual_boot/docker_installation.md) (optional not needed if you have installed ROS2 on your machine)
- [Nvidia Docker installation](./dual_boot/nvidia_docker.md) (optional not needed if you have installed ROS2 on your machine)
- [ROS2 Humble dev container](./dual_boot/ros2_dev_container.md) (optional not needed if you have installed ROS2 on your machine)

## WSL2 Ubuntu

In alternative, you can use install Ubuntu on WSL2.

- [WSL2 Ubuntu setup guide](./wsl2/wsl2_setup_guide.md)
- [ROS2 installation](./wsl2/ros2_installation.md)
- [VSCode installation and extensions](./wsl2/vscode_docker.md)
- [Docker Desktop installation](./wsl2/docker_installation.md) (optional not needed if you have installed ROS2 on your machine)
- [ROS2 Humble dev container](./wsl2/ros2_dev_container.md) (optional not needed if you have installed ROS2 on your machine)

## Mac M1/M2 (experimental)

***Please note that this is an experimental setup and it is not tested***.

If you have a Mac M1/M2, you can install Ubuntu on a virtual machine using UTM.

- [Mac M1/M2 setup guide](./mac_m1/setup_guide.md)
- [Docker installation](./dual_boot/docker_installation.md)
- [VSCode installation and extensions](./dual_boot/vscode_docker.md)
- [ROS2 Humble dev container](./dual_boot/ros2_dev_container.md)
