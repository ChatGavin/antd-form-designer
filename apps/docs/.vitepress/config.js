export default {
  base: "/docs/", // 在 vite.config.js 中配置的 base 会被覆盖, 最终以这份为准
  title: "表单设计器文档",
  description: "表单设计器文档",
  // 配置 favicon 和其他头部标签
  head: [
    ["link", { rel: "icon", href: "/docs/icon/doc.png" }],
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
    logo: "/icon/doc.png",
    // 你也可以设置深色模式下的 logo
    // logoDark: "/icon/doc-dark.png",

    // 其他主题配置...
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "介绍",
          items: [
            { text: "什么是表单设计器", link: "/guide/what-is" },
            { text: "快速开始", link: "/guide/getting-started" },
          ],
        },
      ],
    },
    // 社交链接
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/ChatGavin/antd-form-designer",
      },
    ],
  },
};
