import { Layout } from "antd";

const { Header } = Layout;

const DesignerHeader = () => {
  return (
    <Header
      style={{
        background: "#fff",
        padding: "0 16px",
        borderBottom: "1px solid #f0f0f0",
      }}
    >
      表单设计器
    </Header>
  );
};

export default DesignerHeader;
