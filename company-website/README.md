# 某某科技有限公司官网（静态版）

这是一个无需构建的静态官网模板，包含首页、关于我们、解决方案与联系页面。默认中文内容，样式现代、响应式，支持深色模式。

## 目录结构

```
company-website/
├── index.html        # 首页
├── about.html        # 关于我们
├── services.html     # 解决方案
├── contact.html      # 联系我们（带前端校验表单）
├── styles.css        # 全站样式
├── script.js         # 交互脚本（导航/表单）
└── assets/
    └── logo.svg      # 简洁Logo
```

## 本地预览

无需安装任何依赖，直接用浏览器打开 `index.html` 即可。

也可以在项目目录启动一个本地静态服务器（任选其一）：

- Python: `python3 -m http.server 5173` 然后访问 `http://localhost:5173/company-website/index.html`
- Node (若已安装): `npx serve -l 5173` 然后访问 `http://localhost:5173/index.html`

## 自定义

- 品牌色：修改 `styles.css` 顶部的 `--brand` 与 `--brand-600`
- Logo：替换 `assets/logo.svg`
- 文案：直接编辑各页面 HTML 文本
- 导航：在每个页面的 `<nav>` 内维护链接，已内置移动端菜单

## 表单说明

目前为前端演示，提交后显示“已收到”提示，不会发送到后端。
如果需要真正收集线索，可用以下方式：

- 使用第三方表单服务（如 Formspree），在 `script.js` 中把提交逻辑替换为 `fetch('你的端点', {...})`
- 自建后端（如 Node/Express + 邮件发送），将 `contact.html` 的 `<form>` 指向你的接口，并在 `script.js` 做对应处理

## 部署

因为是纯静态文件，任何静态托管平台都可以：
- Nginx/Apache 静态站点
- GitHub Pages / Gitee Pages
- Netlify / Vercel / Cloudflare Pages

把整个 `company-website` 目录上传或发布即可。

## 许可

你可以自由使用和二次开发本模板。