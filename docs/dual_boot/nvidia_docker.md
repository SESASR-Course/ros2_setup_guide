[Home](../index.md)

# Installing the NVIDIA Container Toolkit

This section describes how to install the NVIDIA Container Toolkit on Linux which enables users to build and run GPU-accelerated containers.

## Steps

- [Installing the NVIDIA Container Toolkit](#installing-the-nvidia-container-toolkit)
  - [Steps](#steps)
  - [Prerequisites](#prerequisites)
  - [1. Installing with Apt](#1-installing-with-apt)
  - [2. Configuration](#2-configuration)
    - [2.1. Configuring Docker](#21-configuring-docker)
    - [2.2 Running a Sample Workload with Docker](#22-running-a-sample-workload-with-docker)
  - [3. Next Steps](#3-next-steps)
  - [4. References](#4-references)

## Prerequisites

- A compatible NVIDIA GPU
- Nvidia GPU drivers
- Ubuntu 22.04 (installed previously)
- Docker (installed previously)

## 1. Installing with Apt

Configure the repository:

```bash
curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg \
  && curl -s -L https://nvidia.github.io/libnvidia-container/stable/deb/nvidia-container-toolkit.list | \
    sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' | \
    sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list \
  && \
    sudo apt-get update
```

Install the NVIDIA Container Toolkit packages:

```bash
sudo apt-get install -y nvidia-container-toolkit
```

## 2. Configuration

After installing the NVIDIA Container Toolkit, you need to configure the runtime.

### 2.1. Configuring Docker

Configure the container runtime by using the nvidia-ctk command:

```bash
sudo nvidia-ctk runtime configure --runtime=docker
```

The nvidia-ctk command modifies the /etc/docker/daemon.json file on the host. The file is updated so that Docker can use the NVIDIA Container Runtime.

Restart the Docker daemon:

```bash
sudo systemctl restart docker
```

### 2.2 Running a Sample Workload with Docker

Run a sample CUDA container:

```bash
sudo docker run --rm --runtime=nvidia --gpus all ubuntu nvidia-smi
```

The output should be similar to this:

``` bash
+-----------------------------------------------------------------------------+
| NVIDIA-SMI 535.86.10    Driver Version: 535.86.10    CUDA Version: 12.2     |
|-------------------------------+----------------------+----------------------+
| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
|                               |                      |               MIG M. |
|===============================+======================+======================|
|   0  Tesla T4            On   | 00000000:00:1E.0 Off |                    0 |
| N/A   34C    P8     9W /  70W |      0MiB / 15109MiB |      0%      Default |
|                               |                      |                  N/A |
+-------------------------------+----------------------+----------------------+

+-----------------------------------------------------------------------------+
| Processes:                                                                  |
|  GPU   GI   CI        PID   Type   Process name                  GPU Memory |
|        ID   ID                                                   Usage      |
|=============================================================================|
|  No running processes found                                                 |
+-----------------------------------------------------------------------------+
```

## 3. Next Steps

Install VS Code and the Remote - Containers extension to use Docker with VS Code, follow the [instructions](/dual_boot/vscode_docker.md)

## 4. References

- [NVIDIA Container Toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html#docker)
- [NVIDIA Sample Workloads](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/sample-workload.html)
  