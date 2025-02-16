import { Layout } from "antd";
import { observer } from "mobx-react-lite";
import rootStore from "@/stores";
import { useEffect } from "react";
import React from "react";
import styles from "./sider.module.css";
import classNames from "classnames";

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
      <Sider width={siderStore.width} theme="light" className={styles.sider}>
        左侧工作台
      </Sider>
      <div
        className={classNames(
          styles.resizeHandle,
          siderStore.isDragging
            ? styles.resizeHandleDragging
            : styles.resizeHandleIdle
        )}
        style={{
          left: siderStore.width - 2,
        }}
        onMouseDown={handleMouseDown}
        onMouseEnter={(e) => {
          if (!siderStore.isDragging) {
            e.target.className = classNames(
              styles.resizeHandle,
              styles.resizeHandleDragging
            );
          }
        }}
        onMouseLeave={(e) => {
          if (!siderStore.isDragging) {
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
