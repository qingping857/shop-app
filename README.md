# Shop App - React 组件通信练习项目

这是一个用于练习 React 组件树和三种组件通信方式的商城项目。

## 项目目标

练习并掌握 React 的三种组件通信方式：
1. Props 传递（父子组件通信）
2. Context（跨层级组件通信）
3. 状态管理（全局状态管理）

## 技术栈

- Next.js 14
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui 组件库

## 项目结构

```
shop_app/
├── src/
│   ├── app/                    # Next.js 应用主目录
│   │   ├── layout.tsx         # 全局布局
│   │   └── page.tsx          # 首页
│   ├── components/            # 组件目录
│   │   ├── ui/               # UI基础组件（shadcn）
│   │   ├── layout/           # 布局组件
│   │   └── business/         # 业务组件
│   ├── lib/                   # 工具函数
│   ├── types/                 # TypeScript 类型定义
│   └── context/              # React Context 目录
└── public/                    # 静态资源
```

## 功能规划

### 已完成的开发
- [x] 项目初始化
- [x] 基础环境配置
- [x] shadcn 组件库集成

### 进行中的开发
- [ ] 商城首页布局
- [ ] 商品列表组件
- [ ] 购物车组件
- [ ] 用户信息组件

### 待完成的开发
- [ ] Props 传递示例：商品列表 -> 商品卡片
- [ ] Context 示例：用户信息、主题切换
- [ ] 状态管理示例：购物车功能

## 组件通信示例

### 1. Props 传递
- 商品列表向商品卡片传递商品信息
- 商品卡片向父组件传递"加入购物车"事件

### 2. Context 通信
- 用户信息在整个应用中共享
- 主题设置在全局共享

### 3. 状态管理
- 购物车数据的全局管理
- 商品筛选条件的状态管理
