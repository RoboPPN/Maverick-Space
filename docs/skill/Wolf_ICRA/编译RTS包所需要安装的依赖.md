---
sidebar_position: 2
---

# 编译RTS包所需要安装的依赖

```shell
sudo apt install -y ros-${ROS_DISTRO}-cv-bridge             \
                    ros-${ROS_DISTRO}-image-transport       \
                    ros-${ROS_DISTRO}-stage-ros             \
                    ros-${ROS_DISTRO}-map-server            \
                    ros-${ROS_DISTRO}-laser-geometry        \
                    ros-${ROS_DISTRO}-interactive-markers   \
                    ros-${ROS_DISTRO}-tf                    \
                    ros-${ROS_DISTRO}-pcl*                  \
                    ros-${ROS_DISTRO}-libg2o                \
                    ros-${ROS_DISTRO}-rplidar-ros           \
                    ros-${ROS_DISTRO}-rviz                  \
                    protobuf-compiler                       \
                    libprotobuf-dev                         \
                    libsuitesparse-dev                      \
                    libgoogle-glog-dev                      
```
