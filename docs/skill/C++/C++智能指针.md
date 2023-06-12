### 智能指针(shared_ptr)用来解决的问题是？

要确保用 new 动态分配的内存空间在程序的各条执行路径都能被释放是一件麻烦的事情。

C++ 11 模板库的 `memory` 头文件中定义的智能指针，即 `shared _ptr` 模板，就是用来部分解决这个问题的。

### 用法

只要将 new 运算符返回的指针 p 交给一个 shared_ptr 对象“托管”，就不必担心在哪里写delete p 语句——实际上根本不需要编写这条语句，托管 p 的 shared_ptr 对象在消亡时会自动执行delete p 。

而且，该 shared_ptr 对象能像指针 p —样使用，即假设托管 p 的 shared_ptr 对象叫作 ptr，那么 *ptr 就是 p 指向的对象。

通过 shared_ptr 的构造函数，可以让 shared_ptr 对象托管一个 new 运算符返回的指针，写法如下：

```cpp
shared_ptr<T> ptr(new T);  // T 可以是 int、char、类等各种类型
```

此后，ptr 就可以像 T*类型的指针一样使用，即*ptr 就是用 new 动态分配的那个对象。

:::caution 注意
多个 shared_ptr 对象可以共同托管一个指针 p，当所有曾经托管 p 的 shared_ptr 对象都解除了对其的托管时，就会执行delete p 。
:::

### 参考致谢

- [C++11 shared_ptr（智能指针）详解](http://c.biancheng.net/view/430.html)
