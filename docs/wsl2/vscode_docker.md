[Home](../index.md)

* TOC
{:toc}

# Visual Studio Code and Dev Containers using WSL2

In this guide, you will learn how to install Visual Studio Code and the Remote - Containers extension to use Docker with VS Code.

## 1. Install Visual Studio Code on Windows

- [Download](https://code.visualstudio.com/download) the Visual Studio Code installer for Windows.
- Once it is downloaded, run the installer and follow the prompts to install VS Code.

## 2. Install extension for remote development

To get started developing apps using Docker with WSL 2, we recommend using VS Code, along with the WSL, Dev Containers, and Docker extensions.

- Install the VS Code [WSL extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl) which enables you to open your Linux project running on WSL in VS Code.

- Install the VS Code [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) which let you to open your project folder or repo inside of a container.

- Install the VS Code [Docker extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker) which adds the functionality to build, manage, and deploy containerized applications from inside VS Code.

## 3. Next steps

Install the ROS 2 development environment in a container, follow the [instructions](./ros2_dev_container.md)

## 4. References

- [Visual Studio Code](https://code.visualstudio.com/)
- [Get started with Docker remote containers on WSL 2](https://learn.microsoft.com/en-us/windows/wsl/tutorials/wsl-containers)
- [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
- [WSL extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl)
