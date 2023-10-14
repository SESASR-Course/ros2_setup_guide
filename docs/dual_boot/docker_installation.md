---

title: "Docker Installation (Ubuntu 22.04)"
layout: default

---

[Home](../index.md)


# [Docker installation (Ubuntu 22.04)](#docker-installation-ubuntu-2204)

__Table of Contents__
* TOC
{:toc}

Docker Engine is an open source containerization technology for building and containerizing your applications.
Here it is a brief guide to install Docker Engine on Ubuntu 22.04.

## [Prerequisites](#prerequisites)

- Ubuntu 22.04 **64-bit**

## [1. Install using the Apt repository](#1-install-using-the-apt-repository)

Before you install Docker Engine for the first time on a new host machine, you need to set up the Docker repository. Afterward, you can install and update Docker from the repository.

Set up Docker's Apt repository.

### [1.1. Add Docker's official GPG key](#11-add-dockers-official-gpg-key)
  
```bash
sudo apt-get update
sudo apt-get install ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
```

### [1.2. Add the repository to Apt sources](#12-add-the-repository-to-apt-sources)
  
  ```bash
echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```

### [1.3. Install Docker Engine](#13-install-docker-engine)

To install the latest version, run:

```bash
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

Verify that the Docker Engine installation is successful by running the hello-world image.

```bash
sudo docker run hello-world
```

This command downloads a test image and runs it in a container. When the container runs, it prints a confirmation message and exits.

You have now successfully installed and started Docker Engine.

## [2. Linux post-installation steps for Docker Engine](#2-linux-post-installation-steps-for-docker-engine)

These are some optional steps to take after installing Docker Engine on Ubuntu 22.04.

### [2.1. Manage Docker as a non-root user](#21-manage-docker-as-a-non-root-user)

To run Docker commands without sudo, create a Unix group called docker and add users to it.

To create the docker group and add your user:

```bash
sudo groupadd docker
sudo usermod -aG docker $USER
```

To apply the new group membership, log out of the server and back in, or type the following:

```bash
newgrp docker
```

Verify that you can run docker commands without sudo.

```bash
docker run hello-world
```

## [3. Next steps](#3-next-steps)

If you have an Nvidia GPU, you can install Nvidia Docker to use your GPU with Docker, follow the [instructions](./nvidia_docker.md)

Otherwise, you follow the next steps to install VS Code and the Remote - Containers extension to use Docker with VS Code, follow the [instructions](./vscode_docker.md)

## [4. References](#4-references)

- [Docker Engine overview](https://docs.docker.com/engine/)
- [Install Docker Engine on Ubuntu](https://docs.docker.com/engine/install/ubuntu/)
- [Post-installation steps for Linux](https://docs.docker.com/engine/install/linux-postinstall/)

  