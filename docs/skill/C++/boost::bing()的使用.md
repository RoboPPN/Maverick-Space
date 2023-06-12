## C++ boost::bing()的使用

定义如下函数：

int f(int a, int b)
{
    return a + b;
}

int g(int a, int b, int c)
{
    return a + b + c;
}

boost::bind(f, 1, 2)可以产生一个无参函数对象，返回f(1, 2)；类似的，boost::bind(g, 1, 2, 3)相当于g(1, 2, 3)
