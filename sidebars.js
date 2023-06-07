/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  skill: [
    'skill/introduction',
    {
      label: 'Docusaurus 主题魔改',
      type: 'category',
      link: {
        type: 'doc',
        id: 'skill/docusaurus/docusaurus-guides'
      },
      items: [
        'skill/docusaurus/docusaurus-config',
        'skill/docusaurus/docusaurus-style',
        'skill/docusaurus/docusaurus-component',
        'skill/docusaurus/docusaurus-plugin',
        'skill/docusaurus/docusaurus-search',
        'skill/docusaurus/docusaurus-comment',
        'skill/docusaurus/docusaurus-deploy',
      ],
    },
    {
      label: 'VSCode问题合集',   //网页导航栏名字
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'skill/VSCode', //本地文件夹名字
        },
      ],
    },
    {
      label: '数据库',
      type: 'category',
      link: {
        // title: '',
        // description: '',
        type: 'generated-index',
        keywords: ['database', 'mysql', 'mongodb', 'redis', 'elasticsearch'],
      },
      items: [
        {
          label: 'Mysql',
          type: 'category',
          link: {
            type: 'doc',
            id: 'skill/database/mysql/mysql-note',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'skill/database/mysql',
            },
          ],
        },
        {
          label: 'MongoDB',
          type: 'category',
          link: {
            type: 'doc',
            id: 'skill/database/mongo/mongodb-note',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'skill/database/mongo',
            },
          ],
        },
        {
          label: 'Redis',
          type: 'category',
          link: {
            type: 'doc',
            id: 'skill/database/redis/redis-note',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'skill/database/redis',
            },
          ],
        },
        {
          label: 'Elasticsearch',
          type: 'category',
          link: {
            type: 'doc',
            id: 'skill/database/elasticsearch/elasticsearch-note',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'skill/database/elasticsearch',
            },
          ],
        },
      ],
    },
    {
      label: 'MoveIt机械臂',   
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'skill/MoveIt机械臂', 
        },
      ],
    },
    {
      label: 'Ubuntu',   
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'skill/Ubuntu', 
        },
      ],
    },
    {
      label: 'ROS',   
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'skill/ROS', 
        },
      ],
    },
    {
      label: 'OpenCV',   
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'skill/OpenCV', 
        },
      ],
    },
    {
      label: 'Math',   
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'skill/Math', 
        },
      ],
    },
    {
      label: 'HTML&CSS',   
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'skill/HTML&CSS', 
        },
      ],
    },
    {
      label: 'ChatGPT',   
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'skill/ChatGPT', 
        },
      ],
    },
    {
      label: 'autoware',   
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'skill/autoware', 
        },
      ],
    },
    {
      label: '有用的小知识',   
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'skill/有用的小知识',
        },
      ],
    },
    {
      label: '机器学习',   
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'skill/机器学习', 
        },
      ],
    },
    {
      label: '环境搭建',   
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'skill/环境搭建', 
        },
      ],
    },
    {
      label: 'Wolf_ICRA',   
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'skill/Wolf_ICRA',
        },
      ],
    },
    {
      label: '规划',   
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'skill/规划', //本地文件夹名字
        },
      ],
    },
    {
      label: '地图',   //网页导航栏名字
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'skill/地图', //本地文件夹名字
        },
      ],
    },
    {
      label: '定位导航',   //网页导航栏名字
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'skill/定位导航', //本地文件夹名字
        },
      ],
    },
    {
      label: '多线程',   //网页导航栏名字
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'skill/多线程', //本地文件夹名字
        },
      ],
    },
    {
      label: 'C++',   //网页导航栏名字
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'skill/C++', //本地文件夹名字
        },
      ],
    },
    {
      label: 'Python',   //网页导航栏名字
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'skill/Python', //本地文件夹名字
        },
      ],
    },
    {
      label: '数据结构',   //网页导航栏名字
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'skill/数据结构', //本地文件夹名字
        },
      ],
    },
    
    {
      label: '传感器',
      type: 'category',
      link: {
        title: '传感器模块',
        description: '传感器学习使用笔记',
        type: 'generated-index',
        keywords: ['sensor', 'LIDAR', 'cameraid', 'IMU', 'GPS'],
      },
      items: [
        {
          label: '激光雷达',
          type: 'category',
          link: {
            type: 'generated-index',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'skill/Sensor/Lidar',
            },
          ],
        },
        {
          label: '深度相机&工业相机',
          type: 'category',
          items: [
            {
              type: 'autogenerated',
              dirName: 'skill/Sensor/Camera',
            },
          ],
        },
        {
          label: 'IMU',
          type: 'category',
          link: {
            type: 'generated-index',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'skill/Sensor/IMU',
            },
          ],
        },
        {
          label: 'GPS',
          type: 'category',
          link: {
            type: 'generated-index',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'skill/Sensor/GPS',
            },
          ],
        },
       
      ],
    },
    
    // {
    //   label: '逆向',
    //   type: 'category',
    //   link: {
    //     title: '逆向笔记',
    //     description: 'Web逆向与安卓逆向笔记',
    //     type: 'generated-index',
    //     keywords: ['reverse', 'web', 'android', 'frida'],
    //   },
    //   items: [
    //     {
    //       label: '安卓',
    //       type: 'category',
    //       link: {
    //         type: 'generated-index',
    //       },
    //       items: [
    //         {
    //           type: 'autogenerated',
    //           dirName: 'skill/reverse/android',
    //         },
    //       ],
    //     },
    //     {
    //       label: 'Web',
    //       type: 'category',
    //       items: [
    //         {
    //           type: 'autogenerated',
    //           dirName: 'skill/reverse/web',
    //         },
    //       ],
    //     },
    //     {
    //       label: '密码学',
    //       type: 'category',
    //       items: [
    //         {
    //           type: 'autogenerated',
    //           dirName: 'skill/reverse/crypto',
    //         },
    //       ],
    //     },
    //   ],
    // },

    // {
    //   label: '数据库',
    //   type: 'category',
    //   link: {
    //     // title: '',
    //     // description: '',
    //     type: 'generated-index',
    //     keywords: ['database', 'mysql', 'mongodb', 'redis', 'elasticsearch'],
    //   },
    //   items: [
    //     {
    //       label: 'Mysql',
    //       type: 'category',
    //       link: {
    //         type: 'doc',
    //         id: 'skill/database/mysql/mysql-note',
    //       },
    //       items: [
    //         {
    //           type: 'autogenerated',
    //           dirName: 'skill/database/mysql',
    //         },
    //       ],
    //     },
    //     {
    //       label: 'MongoDB',
    //       type: 'category',
    //       link: {
    //         type: 'doc',
    //         id: 'skill/database/mongo/mongodb-note',
    //       },
    //       items: [
    //         {
    //           type: 'autogenerated',
    //           dirName: 'skill/database/mongo',
    //         },
    //       ],
    //     },
    //     {
    //       label: 'Redis',
    //       type: 'category',
    //       link: {
    //         type: 'doc',
    //         id: 'skill/database/redis/redis-note',
    //       },
    //       items: [
    //         {
    //           type: 'autogenerated',
    //           dirName: 'skill/database/redis',
    //         },
    //       ],
    //     },
    //     {
    //       label: 'Elasticsearch',
    //       type: 'category',
    //       link: {
    //         type: 'doc',
    //         id: 'skill/database/elasticsearch/elasticsearch-note',
    //       },
    //       items: [
    //         {
    //           type: 'autogenerated',
    //           dirName: 'skill/database/elasticsearch',
    //         },
    //       ],
    //     },
    //   ],
    // },

   
  ],
  tools: [
    'tools/introduction',
    'tools/everything-quick-search-local-files',
    'tools/wappalyzer-recognize-technology',
    'tools/windows-custom-right-click-menu',
    'tools/vscode-config',
    'tools/idea-config',
    'tools/vite-plugin',
    'tools/jetbrains-product-activation-method',
  ]
}

module.exports = sidebars
