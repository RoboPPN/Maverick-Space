本文主要转载自：<https://blog.csdn.net/weixin_38924500/article/details/106261971>

## 通过二进制安装MySQL服务（会安装最新版本）

1. 更新源

    ```bash
    sudo apt update
    ```

2. 通过apt-get安装mysql服务

    ```bash
    sudo apt-get install mysql-server
    ```

3. 初始化配置

    ```bash
    sudo mysql_secure_installation
    ```

​  配置项较多，如下所示：

\#1

    ```bash
        VALIDATE PASSWORD PLUGIN can be used to test passwords...
        Press y|Y for Yes, any other key for No: N (选择N ,不会进行密码的强校验)
    ```

\#2

```python
Please set the password for root here...
New password: (输入密码)
Re-enter new password: (重复输入)
```

到这步我会显示错误：

```bash
 ... Failed! Error: SET PASSWORD has no significance for user 'root'@'localhost' as the authentication method used doesn't store authentication data in the MySQL server. Please consider using ALTER USER instead if you want to change authentication parameters.
```

解决方案：

- 用这个命令进入mysql

  ```bash
  sudo mysql
  ```

- 在sql命令行输入以下命令回车，你就可以把密码改成mynewpassword

  ```bash
  ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password by 'mynewpassword';
  ```

​ - 然后重复第二步输入密码即可。

\#3

```python
By default, a MySQL installation has an anonymous user,
allowing anyone to log into MySQL without having to have
a user account created for them...
Remove anonymous users? (Press y|Y for Yes, any other key for No) : N (选择N，不删除匿名用户)
```

\#4

```python
Normally, root should only be allowed to connect from
'localhost'. This ensures that someone cannot guess at
the root password from the network...
Disallow root login remotely? (Press y|Y for Yes, any other key for No) : N (选择N，允许root远程连接)
```

\#5

```python
By default, MySQL comes with a database named 'test' that
anyone can access...
Remove test database and access to it? (Press y|Y for Yes, any other key for No) : N (选择N，不删除test数据库)
```

\#6

```python
Reloading the privilege tables will ensure that all changes
made so far will take effect immediately.
Reload privilege tables now? (Press y|Y for Yes, any other key for No) : Y (选择Y，修改权限立即生效)
```

\#7检查mysql服务状态

```bash
systemctl status mysql.service
```

## 参考致谢

- [Ubuntu20.04安装Mysql（亲测有效，一定要按步骤来）](https://blog.csdn.net/YM_1111/article/details/107555383)
- [Ubuntu20.04安装Mysql](https://blog.csdn.net/weixin_38924500/article/details/106261971)
