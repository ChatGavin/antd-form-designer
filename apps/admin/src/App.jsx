import "./App.css";
import config from "./config";

function App() {
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

  // 导航到子应用
  const navigateTo = (path) => {
    window.location.href = config.URLS[path];
  };

  // 打开文档
  const openDocs = () => {
    window.open(config.URLS.docs, "_blank");
  };

  return (
    <div className="main-container">
      {/* 头部导航 */}
      <header className="main-header">
        <h1 onClick={() => (window.location.href = "/")}>表单管理系统</h1>
        <div className="nav-container">
          <button style={linkStyle} onClick={() => navigateTo("editor")}>
            表单编辑器
          </button>
          <button style={linkStyle} onClick={openDocs}>
            文档中心
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
