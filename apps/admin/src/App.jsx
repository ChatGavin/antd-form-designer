import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [microAppName, setMicroAppName] = useState("");
  const [loading, setLoading] = useState(false);

  // 根据当前路径设置微应用名称
  const updateMicroAppName = (path) => {
    if (path.startsWith("/designer")) {
      setMicroAppName("designer");
    } else if (path.startsWith("/docs")) {
      setMicroAppName("docs");
    } else {
      setMicroAppName("");
    }
  };

  // 导航到子应用
  const navigateTo = (path) => {
    setLoading(true); // 开始加载
    history.pushState(null, path, path);
    updateMicroAppName(path);

    // 模拟加载完成
    setTimeout(() => {
      setLoading(false);
    }, 300);
  };

  // 监听浏览器前进/后退操作
  useEffect(() => {
    const handlePopState = () => {
      updateMicroAppName(window.location.pathname);
    };

    // 初始化时根据当前路径设置微应用名称
    updateMicroAppName(window.location.pathname);

    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const linkStyle = {
    display: "inline-block",
    margin: "20px",
    padding: "10px 20px",
    backgroundColor: "#1890ff",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "4px",
    fontSize: "16px",
  };

  return (
    <div className="main-container">
      {/* 头部导航 */}
      <header className="main-header">
        <h1 onClick={() => navigateTo("/")}>微前端主应用</h1>
        <div className="nav-container">
          <button style={linkStyle} onClick={() => navigateTo("/designer")}>
            设计器
          </button>
          <button style={linkStyle} onClick={() => navigateTo("/docs")}>
            文档中心
          </button>
        </div>
      </header>

      {/* 当前应用信息 */}
      {microAppName && (
        <div className="current-app">
          当前应用: {microAppName === "designer" ? "设计器" : "文档中心"}
        </div>
      )}

      {/* 加载状态指示器 */}
      {loading && (
        <div className="loading-container">
          <div className="loading-indicator">加载中...</div>
        </div>
      )}

      {/* 微应用容器 */}
      <div id="microapp-container" className="micro-app-container"></div>
    </div>
  );
}

export default App;
