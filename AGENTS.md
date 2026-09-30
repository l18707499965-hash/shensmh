# 项目上下文

### 版本技术栈

- **Framework**: Next.js 16 (App Router)
- **Core**: React 19
- **Language**: TypeScript 5
- **UI 组件**: shadcn/ui (基于 Radix UI)
- **Styling**: Tailwind CSS 4

## 目录结构

```
├── public/                 # 静态资源
├── scripts/                # 构建与启动脚本
│   ├── build.sh            # 构建脚本
│   ├── dev.sh              # 开发环境启动脚本
│   ├── prepare.sh          # 预处理脚本
│   └── start.sh            # 生产环境启动脚本
├── src/
│   ├── app/                # 页面路由与布局
│   ├── components/ui/      # Shadcn UI 组件库
│   ├── hooks/              # 自定义 Hooks
│   ├── lib/                # 工具库
│   │   └── utils.ts        # 通用工具函数 (cn)
│   └── server.ts           # 自定义服务端入口
├── next.config.ts          # Next.js 配置
├── package.json            # 项目依赖管理
└── tsconfig.json           # TypeScript 配置
```

- 项目文件（如 app 目录、pages 目录、components 等）默认初始化到 `src/` 目录下。

## 包管理规范

**仅允许使用 pnpm** 作为包管理器，**严禁使用 npm 或 yarn**。
**常用命令**：
- 安装依赖：`pnpm add <package>`
- 安装开发依赖：`pnpm add -D <package>`
- 安装所有依赖：`pnpm install`
- 移除依赖：`pnpm remove <package>`

## 开发规范

### 编码规范

- 默认按 TypeScript `strict` 心智写代码；优先复用当前作用域已声明的变量、函数、类型和导入，禁止引用未声明标识符或拼错变量名。
- 禁止隐式 `any` 和 `as any`；函数参数、返回值、解构项、事件对象、`catch` 错误在使用前应有明确类型或先完成类型收窄，并清理未使用的变量和导入。

### next.config 配置规范

- 配置的路径不要写死绝对路径，必须使用 path.resolve(__dirname, ...)、import.meta.dirname 或 process.cwd() 动态拼接。

### Hydration 问题防范

1. 严禁在 JSX 渲染逻辑中直接使用 typeof window、Date.now()、Math.random() 等动态数据。**必须使用 'use client' 并配合 useEffect + useState 确保动态内容仅在客户端挂载后渲染**；同时严禁非法 HTML 嵌套（如 <p> 嵌套 <div>）。
2. **禁止使用 head 标签**，优先使用 metadata，详见文档：https://nextjs.org/docs/app/api-reference/functions/generate-metadata
   1. 三方 CSS、字体等资源可在 `globals.css` 中顶部通过 `@import` 引入或使用 next/font
   2. preload, preconnect, dns-prefetch 通过 ReactDOM 的 preload、preconnect、dns-prefetch 方法引入
   3. json-ld 可阅读 https://nextjs.org/docs/app/guides/json-ld

## UI 设计与组件规范 (UI & Styling Standards)

- 模板默认预装核心组件库 `shadcn/ui`，位于`src/components/ui/`目录下
- Next.js 项目**必须默认**采用 shadcn/ui 组件、风格和规范，**除非用户指定用其他的组件和规范。**

## 项目专属说明（绅士漫画官网）

### 页面清单（多页面着陆站）
| 路由 | 文件 | 说明 |
| --- | --- | --- |
| `/` | `src/app/page.tsx` | 首页：Hero / 亮点 / 功能 / 场景 / FAQ / CTA |
| `/features` | `src/app/features/page.tsx` | 产品功能全览 |
| `/download` | `src/app/download/page.tsx` | APK 下载地址与四步安装教程 |
| `/faq` | `src/app/faq/page.tsx` | 常见问题（FAQPage 结构化数据） |

### SEO 与站点配置
- 站点常量集中在 `src/lib/site.ts`：品牌名、APK 下载地址、百度统计 ID、`getSiteUrl()`。
- `getSiteUrl()` 优先读 `NEXT_PUBLIC_SITE_URL`（绑定自有域名时配置），否则回退到 `COZE_PROJECT_DOMAIN_DEFAULT`。
- 标题规范：全站标题品牌词"绅士漫画"前置（layout 中 `title.template = '绅士漫画_%s'`），改标题时不要破坏此前缀。
- `/robots.txt` 由 `src/app/robots.ts` 生成；`/sitemap.xml` 由 `src/app/sitemap.ts` 生成，新增页面后需同步加入 sitemap。
- JSON-LD：layout 注入 Organization / WebSite；首页注入 SoftwareApplication + FAQPage + BreadcrumbList；下载页注入 SoftwareApplication；各子页均有 BreadcrumbList。
- OG 分享图由 `src/app/opengraph-image.tsx`（edge runtime，ImageResponse + 内联 SVG logo）生成。
- 百度统计组件 `src/components/baidu-analytics.tsx` 仅在 `NODE_ENV=production` 时注入 hm.js。

### 转化按钮规范
- 全站唯一转化动作组件：`src/components/download-button.tsx`，文案固定"获取下载地址"，外链 APK 直链。
- 导航链接不属于 CTA；如需调整下载地址，只改 `src/lib/site.ts` 中的 `downloadUrl`。

### 共享文案
- 功能特性、FAQ、安装步骤数据统一维护在 `src/lib/content.ts`，被多个页面复用，修改文案优先改此处。
