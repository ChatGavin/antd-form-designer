const isDev = import.meta.env.DEV;

const config = {
  // 应用URL配置
  URLS: {
    editor: isDev
      ? "http://localhost:8010"
      : "https://designer.gavin.chat/editor",
    docs: isDev ? "http://localhost:9000" : "https://designer.gavin.chat/docs",
  },

  // 基础配置
  BASE_CONFIG: {
    title: "表单管理系统",
    domain: "designer.gavin.chat",
  },
};

export default config;
