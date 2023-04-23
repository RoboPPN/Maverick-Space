---
id: vscode-git-config
slug: /vscode-git-config
title: VSCode 请确保已在Git中配置您的"user.name"和"user.email"
authors: PPN
tags: [VSCode,issue]
keywords: [VSCode]
---
重装电脑后，已经重新生成新的key导进了 GitHub 中， git clone 是能用的，但在 VSCode 中对内容进行 push 时，出现了如下错误:

```shell
请确保已在Git中配置您的“user.name”和“user.email”
```

解决方法：
1. 进入该库的路径下，打开终端，输入：
   ```shell
    git config user.name  你的github用户名
    git config user.email 邮箱地址
    ```
2. 重新 push，问题解决

