<h2 align="center">
Maverick的个人博客
</h2><br>

<pre align="center">
 该框架使用的是 愧怍 魔改过的Docusaurus框架，感兴趣的可以去他博客看看👉 <a href="https://kuizuo.cn/">愧怍的个人博客</a> 
</pre>


<p align="center">
<br>
<a href="https://kuizuo.cn">🖥 Online Preview</a>
<br><br> 
<a href="https://vercel.com/new/clone?repository-url=https://github.com/kuizuo/blog/tree/main&project-name=blog&repo-name=blog" rel="nofollow"><img src="https://vercel.com/button"></a>
<a href="https://app.netlify.com/start/deploy?repository=https://github.com/kuizuo/blog" rel="nofollow"><img src="https://www.netlify.com/img/deploy/button.svg"></a>
<a href="https://stackblitz.com/github/kuizuo/blog" rel="nofollow"><img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg"></a>
</p>

## 👋 Introduction

在这里我会分享在学习过程中遇到的问题以及解决方案、学习笔记以及生活记录。

如果你想要搭建一个类似的站点，可直接 [Fork](https://github.com/kuizuo/blog/fork) 本仓库使用，或者通过 [StackBlitz](https://stackblitz.com/github/kuizuo/blog) 在线运行本项目，或通过 [Vercel](https://vercel.com/new/clone?repository-url=https://github.com/kuizuo/blog/tree/main&project-name=blog&repo-name=blog) 一键部署。

## ✨ Features

- ✍️ **Markdown** - 写作方便
- 🎨 **Beautiful** - 整洁，美观
- 🖥️ **PWA** - 支持 PWA，可安装，离线可用
- 🏞️ **i18n** - 支持国际化
- 💯 **SEO** - 搜索引擎优化，易于收录
- 📊 **谷歌分析** - 支持 Google Analytics
- 🔎 **全文搜索** - 支持 [Algolia DocSearch](https://github.com/algolia/docsearch)
- 🗃️ **博文视图** - 不同的博文视图，列表、宫格、卡片
- 🌈 **资源导航** - 收集并分享有用、有意思的资源
- 📦 **项目展示** - 展示你的项目，可用作于作品集

我的修改：[Docusaurus 主题魔改](https://kuizuo.cn/docs/docusaurus-guides)

## 📊 Catalogue

```bash
├── blog                           # 博客
│   ├── first-blog.md
├── docs                           # 文档/笔记
│   └── doc.md
├── data                           # 项目/导航/友链数据
│   ├── friend.ts                  # 友链
│   ├── project.ts                 # 项目
│   └── resource.ts                # 资源导航
├── i18n                           # 国际化
├── src
│   ├── components                 # 组件
│   ├── css                        # 自定义CSS
│   ├── pages                      # 自定义页面
│   ├── plugin                     # 自定义插件
│   └── theme                      # 自定义主题组件
├── static                         # 静态资源文件
│   └── img                        # 静态图片
├── docusaurus.config.js           # 站点的配置信息
├── sidebars.js                    # 文档的侧边栏
├── package.json
├── tsconfig.json
└── yarn.lock
```

## 📥 Start

```sh
git clone https://github.com/kuizuo/blog.git
cd blog
yarn
yarn start
```

Build

```sh
yarn run build
```

## 📝License

[MIT](./LICENSE)
