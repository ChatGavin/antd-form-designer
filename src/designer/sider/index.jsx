import { Layout } from "antd";
import { observer } from "mobx-react-lite";
import rootStore from "@/stores";
import { useEffect } from "react";

const { Sider } = Layout;

const DesignerSider = observer(() => {
  const { designerStore } = rootStore;

  const handleMouseDown = (e) => {
    e.preventDefault();
    designerStore.setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!designerStore.isDragging) return;
    designerStore.setSiderWidth(e.clientX);
  };

  const handleMouseUp = () => {
    designerStore.setIsDragging(false);
  };

  useEffect(() => {
    if (designerStore.isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [designerStore.isDragging]);

  return (
    <>
      <Sider
        width={designerStore.siderWidth}
        theme="light"
        style={{
          borderRight: "1px solid #f0f0f0",
          transition: "none",
        }}
      >
        左侧工作台
      </Sider>
      <div
        style={{
          width: "5px",
          cursor: "col-resize",
          background: designerStore.isDragging ? "#1890ff" : "transparent",
          transition: "background 0.3s",
          zIndex: 100,
        }}
        onMouseDown={handleMouseDown}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#e6f7ff";
        }}
        onMouseLeave={(e) => {
          if (!designerStore.isDragging) {
            e.currentTarget.style.background = "transparent";
          }
        }}
      />
    </>
  );
});

export default DesignerSider;
