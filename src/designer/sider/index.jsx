import { Layout } from "antd";

const { Sider } = Layout;

const DesignerSider = ({ width }) => {
  return (
    <Sider
      width={width}
      theme="light"
      style={{
        borderRight: "1px solid #f0f0f0",
        transition: "none",
      }}
    >
      左侧工作台
    </Sider>
  );
};

export default DesignerSider;
