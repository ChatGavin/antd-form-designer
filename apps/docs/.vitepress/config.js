export default {
  base: "/docs/", // 在 vite.config.js 中配置的 base 会被覆盖, 最终以这份为准
  title: "Antd Form Designer",
  description: "表单设计器文档",
  // 日期格式化配置
  lastUpdated: {
    formatOptions: {
      dateStyle: "full",
      timeStyle: "medium",
    },
  },
  // 配置 favicon 和其他头部标签
  head: [
    ["link", { rel: "icon", href: "/docs/img/logo/docs.png" }],
    // 你也可以添加其他头部标签，如 Apple Touch Icon
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "/docs/icon/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
  ],
  // 主题配置
  themeConfig: {
    // 设置 logo
    logo: "/img/logo/docs.png",
    // 启用最后更新时间
    lastUpdated: true,
    // 自定义最后更新时间的文本
    lastUpdatedText: "最后更新",
    // 配置日期格式
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    // 其他主题配置...
    nav: [
      { text: "首页", link: "/" },
      { text: "更新日志", link: "/changelog/v0" },
    ],
    // 社交链接
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/ChatGavin/antd-form-designer",
      },
    ],
    // 页脚配置
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2025-present Gavin Lin",
    },
    // 右侧目录配置
    outlineTitle: "目录",
    // 左侧目录配置
    sidebar: {
      "/changelog/": [
        {
          text: "更新日志",
          items: [{ text: "0.x", link: "/changelog/v0" }],
        },
      ],
    },
  },
};
