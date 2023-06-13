## 摄像头为什么要进行内参标定？

摄像头这种精密仪器对光学器件的要求较高，由于摄像头内部与外部的一些原因，生成的物体图像往往会发生畸变，为避免数据源造成的误差，需要针对摄像头的参数进行标定。

为确定空间物体表面某点的三维几何位置与其在图像中对应点之间的相互关系，必须建立相机成像的几何模型，这些几何模型参数就是相机参数。

目的：求出相机的内、外参数，以及畸变参数；提高识别精度。

标定相机后通常是想做两件事：

- 一个是由于每个镜头的畸变程度各不相同，通过相机标定可以校正这种镜头畸变矫正畸变，生成矫正后的图像；
- 另一个是根据获得的图像重构三维场景。

摄像机标定过程，简单的可以简单的描述为：
通过标定板，可以得到n个对应的世界坐标三维点Xi和对应的图像坐标二维点xi，这些三维点到二维点的转换都可以通过上面提到的相机内参K，相机外参R和t，以及畸变参数D，经过一系列的矩阵变换得到。

## 使用ROS对相机进行内参标定过程

安装标定功能包：

```cpp
sudo apt-get install ros-melodic-camera-calibration
```

这个功能包里面封装了对摄像头参数标定的一个通用的算法。

这个功能包使用时需要配合一个棋盘格标定靶一起使用（棋盘格标定靶如下图
![请添加图片描述](https://img-blog.csdnimg.cn/60c361a1014a4efc899bcb400a151a38.png)

标定基本流程：将摄像头看到的标定靶的图像跟真实的正方形的尺寸进行对比，对摄像头的各个硬件参数去做标定。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201118213735642.png)

```cpp
注：square这个参数需根据现实你测量的标定靶的边长而定。
```

打开外接摄像头：

```cpp
roslaunch robot_vision usb_cam.launch
```

启动标定功能包

```cpp
rosrun camera_calibration cameracalibrator.py --size 12x14 --square 0.012 image:=/usb_cam/image_raw camera:=/usb_cam
```

启动标定包后会出现以下界面![在这里插入图片描述](https://img-blog.csdnimg.cn/20201214220353542.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NlbmlvckM=,size_16,color_FFFFFF,t_70)
以下对图中出现的X、Y、Size、Skew进行解释

```cpp
X：标定靶在摄像头视野中左右移动
Y：标定靶在摄像头视野中上下移动
Size：标定靶在摄像头视野中前后移动
Skew：标定靶在摄像头视野中的倾斜转动
```

标定过程直至绿色的CALIBRATE键亮起表明标定标定工作可以结束
然后按下SAVE键将标定的数据保存下来

标定所生成的数据保存在`/home/.ros/camera_info`文件夹中，下次打开摄像头的时候会自动读取里面的内容
