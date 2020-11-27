exports.routes = [
  {
    path: '/',
    exact: false,
    component: '../layouts/index',
    routes: [
      {
        path: '/',
        component: '../pages/index',
        routes: [
          // 一级路由菜单
          {
            path: '/goods',
            name: '商品模块',
            icon: 'bank',
            component: '../pages/content/index.js',
            routes: [
              {
                path: '/goods/goodsManagement',
                name: '商品管理',
                component: '../pages/goods/goodsManagement.jsx',
              },
              {
                path: '/goods/brandManagement',
                name: '品牌管理',
                component: '../pages/goods/brandManagement.jsx',
              },
            ],
          },
        ],
      },
    ],
  },
];
