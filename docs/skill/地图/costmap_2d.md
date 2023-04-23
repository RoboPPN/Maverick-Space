功能包概述：该功能包它接收传感器数据，构建2D的占用网格，并基于占用网格和用户指定的膨胀半径，实现一个2D代价地图。

该包还支持基于map_server的代价映射初始化、基于滚动窗口的代价映射以及基于参数的传感器主题订阅和配置。

costmap使用静态地图的传感器数据信息，通过`costmap_2d::Costmap2DROS`对象存储和更新有关现实世界中障碍物信息。

`costmap_2d::Costmap2DROS`对象提供了一个纯粹的二维界面，说白了该包是在帮助平面空间中进行规划的。


### Costmap2DROS
所述costmap_2d::Costmap2DROS对象是包装为costmap_2d::Costmap2D作为一个功能对象C++包装ROS，它在初始化时指定的ROS命名空间内运行。

指定`my_costmap`命名空间的`costmap_2d::Costmap2DROS`对象的示例创建：

```cpp
#include <tf/transform_listener.h>
#include <costmap_2d/costmap_2d_ros.h>

...

tf::TransformListener tf(ros::Duration(10));
costmap_2d::Costmap2DROS costmap("my_costmap", tf);
```

如果rosrun或roslaunch的costmap_2d节点直接将它运行costmap命名空间，在这种情况下，下面所有对name的引用都应该替换为costmap。

常见的情况是通过启动move_base节点来运行完整的导航堆栈。这将创建2个成本地图，每个都有自己的命名空间：`local_costmap`和`global_costmap1`，这可能需要将一些相关参数设置两次，每个代价地图一次。


### 标记和清除
costmap通过ROS自动订阅传感器数据话题并更新自身信息。每个传感器用于标记（将障碍信息插入代价地图中）、清除（从代价地图中删除障碍信息），或者是集标记和清除于一身。

标记操作只是数组的索引以更改单元格的成本。但是，清除操作包括针对每次对传感器数据的观察结果从传感器原点向外通过网格进行光线跟踪。

如果使用三维结构来存储障碍物信息，则障碍物信息在放入代价地图时都会自顶向下层层绘出物体的点云信息（就像三维扫描仪一样）。



### 已占用空间、空闲空间、未知空间
想必大家都看过或者动手操作过rviz建图，虽然代价地图中每个单元格数值都有可能是255个值的其中之一，但它可以划分为`占用空间`、`空闲空间`、`未知空间`三大空间。

这可在你设置的地图参数中设置这三大空间，例如高于某一个值则视为占用，低于则视为空闲，在中间的视为未知。

### tf
为了将来自传感器的数据插入到成本图中,`costmap_2d::Costmap2DROS`对象广泛使用了tf。

它假设global_frame1参数、robot_base_frame参数和传感器源指定的坐标系之间的所有变换都已连接且是最新的。

transform_tolerance参数设置这些变换之间的延时的最大值，如果tf树没有以这个预期的速率更新，导航堆栈就会停止工作。



### 两种初始化costmap_2d::Costmap2DROS对象方法

#### 使用静态地图
在这种情况下，costmap被初始化为静态地图提供的宽度、高度和障碍物信息。这种配置通常与`amcl`之类的定位系统结合使用，该系统允许机器人在地图框中注册障碍物信息，并在它在环境中行驶时根据传感器数据更新其代价地图 。

####  给定地图大小，将rolling_window参数设置为true
给地图设置一个宽度和高度，并将rolling_window参数设置为true。

当机器人在世界范围内移动时，rolling_window参数将机器人保持在成本图的中心，当机器人移动到距离给定区域太远时，就会从地图中删除障碍物信息。

这种类型的配置最常用于里程坐标系，其中机器人只关心局部区域内的障碍物。


### 所需的tf转换
`global_frame`--->`robot_base_frame`

通常由负责里程计或定位节点提供，例如amcl。
