import { Layout } from "antd";
import { observer } from "mobx-react-lite";
import rootStore from "@/stores/index.js";
import { useEffect } from "react";
import React from "react";
import styles from "./index.module.css";
import classNames from "classnames";
import SideMenu from "./SideMenu/index.jsx";
import SideContent from "./SideContent/index.jsx";

const { Sider } = Layout;

const DesignerSider = observer(() => {
  const { designerStore } = rootStore;
  const { sidebarStore } = designerStore;

  // 记录拖拽起始位置
  const startRef = React.useRef({ x: 0, width: 0 });

  const handleMouseDown = (e) => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      width: sidebarStore.width,
    };
    sidebarStore.setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!sidebarStore.isDragging) return;

    // 计算位移差值
    const diff = e.clientX - startRef.current.x;
    // 基于初始宽度计算新宽度
    const newWidth = startRef.current.width + diff;

    // 使用 requestAnimationFrame 优化性能
    requestAnimationFrame(() => {
      sidebarStore.setWidth(newWidth);
    });
  };

  const handleMouseUp = () => {
    sidebarStore.setIsDragging(false);
  };

  useEffect(() => {
    if (sidebarStore.isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [sidebarStore.isDragging]);

  return (
    <>
      <Sider width={sidebarStore.width} theme="light" className={styles.sider}>
        <div className={styles.siderContent}>
          <SideMenu />
          <SideContent />
        </div>
      </Sider>
      <div
        className={classNames(
          styles.resizeHandle,
          sidebarStore.isDragging
            ? styles.resizeHandleDragging
            : styles.resizeHandleIdle
        )}
        style={{
          left: sidebarStore.width - 2,
        }}
        onMouseDown={handleMouseDown}
        onMouseEnter={(e) => {
          if (!sidebarStore.isDragging) {
            e.target.className = classNames(
              styles.resizeHandle,
              styles.resizeHandleDragging
            );
          }
        }}
        onMouseLeave={(e) => {
          if (!sidebarStore.isDragging) {
            e.target.className = classNames(
              styles.resizeHandle,
              styles.resizeHandleIdle
            );
          }
        }}
      />
    </>
  );
});

export default DesignerSider;
