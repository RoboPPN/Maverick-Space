C++ 库提供了 clock()函数来获得该时刻的时间

```cpp
int main() {
    
    clock_t start, end;
  
    start = clock();    //获取该时刻的时间，单位/ms
  
    //省略。。。。
  
    end = clock();      //获取该时刻的时间，单位/ms

    cout<<"Run time: "<<(double)(end - start) / CLOCKS_PER_SEC<<"S"<<endl;  //使用 end 后获得的时间减去 start 开始时获得的时间 / CLOCKS_PER_SEC

    return 0;
    }
```
