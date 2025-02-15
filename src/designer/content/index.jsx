import { Layout } from "antd";

const { Content } = Layout;

const DesignerContent = () => {
  return (
    <Content
      style={{
        padding: "24px",
        minHeight: 280,
        background: "#fff",
      }}
    >
      中间内容区域
    </Content>
  );
};

export default DesignerContent;
