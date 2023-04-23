## 导航包move_base框架
![导航包move_base框架图](https://img-blog.csdnimg.cn/22866c65da7249ea896c1b0e40779476.png)

这里有两个代价地图模块：
- 全局代价地图：提供给全局规划器使用；
- 局部代价地图：提供给局部规划器使用；

两个模块调用的是同一功能包的代码，通过配置不同参数实例化成两个代价地图。


## Costmap简介
Costmap(代价地图) Costmap是机器人收集传感器信息建立和更新的二维或三维地图。

![请添加图片描述](https://img-blog.csdnimg.cn/30e010dc87bb4a4491ed27302b4616b7.png)

上图中，红色部分代表costmap中的障碍物，蓝色部分表示通过机器人内切圆半径膨胀出的障碍，红色多边形是footprint(机器人投影到二维地图上的轮廓)。

机器人避障规则：footprint不应该和红色部分有交叉，机器人中心不应该与蓝色部分有交叉。

costmap由三层地图来组成：
- Static Layer（静态地图层）：接收/map话题信息，加载地图信息。
- Obstacle Layer（障碍物层）：接收传感器信息，实时检测环境障碍物。传感器信息有"PointCloud","PointCloud2","LaserScan"。
- Inflation Layer（膨胀层）：根据膨胀半径来设置膨胀障碍物。

## Costmap继承关系

![请添加图片描述](https://img-blog.csdnimg.cn/bd80b280e85043578fd538dbc35c86a6.png)

Costmap的ObstacleLayer和StaticLayer都继承于CostmapLayer和Costmap2D,因为它们都有自己的地图，Costmap2D为它们提供存储地图的父类，CostmapLayer为它们提供一些对地图的操作方法。而inflationLayer因为没有维护真正的地图所以只和CostmapLayer一起继承于Layer，Layer提供了操作master map的途径。 LayerdCostmap为Costmap2DROS（用户接口）提供了加载地图层的插件机制，每个插件（即地图层）都是Layer类型的。


## costmap更新
costmap的更新在mapUpdate线程中实现，此线程分为两个阶段：

- 阶段一UpdateBounds：这个阶段会更新每个Layer的更新区域，这样在每个运行周期内减少了数据拷贝操作时间。StaticLayer的Static map只在第一次更新，Bounds范围是整张map的大小，而且在UpdateBounds过程中没有对Static Map层的数据做过任何的更新。ObstacleLayer在这个阶段主要的操作是更新ObstaclesMap层的数据，然后更新Bounds。InflationLayer则保持上一次的Bounds。
- 阶段二UpdateCosts:这个阶段将各层数据逐一拷贝到Master Map，可通过下图观察Master Map的生成流程。

总的来说就是：updateBounds各层自己更新；updateCosts反映到master layer上。


![请添加图片描述](https://img-blog.csdnimg.cn/97db0f09e3fa438ca2d98f839374348c.png)

在（a）中，初始有三个Layer和Master costmap,Static Layer和Obstacles Layer维护它们自己的栅格地图，而inflation Layer并没有。为了更新costmap,算法首先在各层上调用自己的UpdateBounds方法（b）。为了决定新的bounds,Obstacles Layer利用新的传感器数据更新它的costmap。然后每个层轮流用UpdateCosts方法更新Master costmap的某个区域,从Static Layer开始（c），然后是Obstacles Layer(d)，最后是inflation Layer(e)。




