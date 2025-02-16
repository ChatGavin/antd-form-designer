import { Layout } from "antd";
import { observer } from "mobx-react-lite";
import rootStore from "@/stores";
import { useEffect } from "react";
import React from "react";

const { Sider } = Layout;

const DesignerSider = observer(() => {
  const { designerStore } = rootStore;
  const { siderStore } = designerStore;

  // 记录拖拽起始位置
  const startRef = React.useRef({ x: 0, width: 0 });

  const handleMouseDown = (e) => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      width: siderStore.width,
    };
    siderStore.setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!siderStore.isDragging) return;

    // 计算位移差值
    const diff = e.clientX - startRef.current.x;
    // 基于初始宽度计算新宽度
    const newWidth = startRef.current.width + diff;

    // 使用 requestAnimationFrame 优化性能
    requestAnimationFrame(() => {
      siderStore.setWidth(newWidth);
    });
  };

  const handleMouseUp = () => {
    siderStore.setIsDragging(false);
  };

  useEffect(() => {
    if (siderStore.isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [siderStore.isDragging]);

  return (
    <>
      <Sider
        width={siderStore.width}
        theme="light"
        style={{
          borderRight: "1px solid #f0f0f0",
          transition: "none",
          userSelect: "none",
        }}
      >
        左侧工作台
      </Sider>
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: siderStore.width - 2,
          width: "4px",
          cursor: "col-resize",
          background: siderStore.isDragging ? "#e6e6e6" : "transparent",
          transition: "background 0.3s",
          zIndex: 100,
          userSelect: "none",
          "&:hover": {
            background: "#e6e6e6",
          },
        }}
        onMouseDown={handleMouseDown}
        onMouseEnter={(e) => {
          if (!siderStore.isDragging) {
            e.currentTarget.style.background = "#e6e6e6";
          }
        }}
        onMouseLeave={(e) => {
          if (!siderStore.isDragging) {
            e.currentTarget.style.background = "transparent";
          }
        }}
      />
    </>
  );
});

export default DesignerSider;
