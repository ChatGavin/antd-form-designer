export default {
  base: "/docs/", // 在 vite.config.js 中配置的 base 会被覆盖, 最终以这份为准
  title: "Antd Form Designer",
  description: "表单设计器文档",
  // 配置 favicon 和其他头部标签
  head: [
    ["link", { rel: "icon", href: "/docs/img/logo/docs.png" }],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "/docs/icon/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
  ],
  themeConfig: {
    // 设置 logo
    logo: "/img/logo/docs.png",
    // 启用最后更新时间
    lastUpdated: true,
    // 自定义最后更新时间的文本
    lastUpdatedText: "最后更新于",
    // 配置日期格式
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    nav: [
      { text: "首页", link: "/" },
      { text: "AI 技术", link: "/aiTech/" },
      {
        text: "更新日志",
        link: "https://github.com/ChatGavin/antd-form-designer/releases",
      },
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
      message: "Released under the MIT License",
      copyright: "Copyright © 2025-present Gavin Lin",
    },
    // 右侧目录配置
    outlineTitle: "目录",
    // 左侧目录配置
    sidebar: {
      "/aiTech/": [
        {
          text: "AI 技术",
          link: "/aiTech/",
        },
      ],
    },
    // 添加 Algolia 搜索配置
    algolia: {
      appId: "BY3PPJ4B38",
      apiKey: "58414decdc73fcf81475dfab24620d22",
      indexName: "antd-form-designer",
    },
  },
};
