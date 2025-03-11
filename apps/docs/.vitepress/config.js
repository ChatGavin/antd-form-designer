export default {
  base: "/docs/", // 在 vite.config.js 中配置的 base 会被覆盖, 最终以这份为准
  title: "Antd Form Designer",
  description: "表单设计器文档",
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
    // 你也可以设置深色模式下的 logo
    // logoDark: "/icon/doc-dark.png",

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
