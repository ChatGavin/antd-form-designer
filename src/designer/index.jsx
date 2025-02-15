import { Layout } from "antd";
import DesignerHeader from "./header";
import DesignerSider from "./sider";
import DesignerContent from "./content";
import { useState } from "react";

const FormDesigner = () => {
  const [siderWidth, setSiderWidth] = useState(300);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(true);
    document.body.style.cursor = "col-resize";
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const newWidth = e.clientX;
    if (newWidth >= 100 && newWidth <= 800) {
      setSiderWidth(newWidth);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.body.style.cursor = "default";
  };

  return (
    <Layout
      style={{ height: "100vh" }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <DesignerHeader />
      <Layout>
        <DesignerSider width={siderWidth} />
        <div
          style={{
            width: "5px",
            cursor: "col-resize",
            background: isDragging ? "#1890ff" : "transparent",
            transition: "background 0.3s",
          }}
          onMouseDown={handleMouseDown}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#e6f7ff";
          }}
          onMouseLeave={(e) => {
            if (!isDragging) {
              e.currentTarget.style.background = "transparent";
            }
          }}
        />
        <DesignerContent />
      </Layout>
    </Layout>
  );
};

export default FormDesigner;
