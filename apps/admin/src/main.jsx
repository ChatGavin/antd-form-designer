import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  registerMicroApps,
  start,
  initGlobalState,
  setDefaultMountApp,
} from "qiankun";

// 初始化全局状态
const { onGlobalStateChange, setGlobalState } = initGlobalState({
  user: "qiankun-admin",
  theme: "light",
});

// 监听全局状态变化
onGlobalStateChange((value, prev) => {
  console.log("[主应用] 全局状态变更:", value, prev);
});

// 注册微应用
registerMicroApps(
  [
    {
      name: "designer",
      entry: "http://localhost:8010",
      container: "#microapp-container",
      activeRule: "/designer",
      props: {
        setGlobalState,
        onGlobalStateChange,
      },
    },
    {
      name: "docs",
      entry: "http://localhost:8020",
      container: "#microapp-container",
      activeRule: "/docs",
      props: {
        setGlobalState,
        onGlobalStateChange,
      },
    },
  ],
  {
    beforeLoad: [
      (app) => {
        console.log("[主应用] 加载前", app.name);
        return Promise.resolve();
      },
    ],
    beforeMount: [
      (app) => {
        console.log("[主应用] 挂载前", app.name);
        return Promise.resolve();
      },
    ],
    afterUnmount: [
      (app) => {
        console.log("[主应用] 卸载后", app.name);
        return Promise.resolve();
      },
    ],
    // 添加错误处理钩子
    loadError: [
      (err) => {
        console.error("[主应用] 加载失败", err);
        return Promise.reject(err);
      },
    ],
  }
);

// 设置默认进入的子应用
// setDefaultMountApp("/designer");

// 启动 qiankun
start({
  prefetch: "all", // 预加载所有微应用
  sandbox: { strictStyleIsolation: true }, // 开启严格的样式隔离
  singular: true, // 单实例模式
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
