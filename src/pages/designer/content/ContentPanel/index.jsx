import React from "react";
import styles from "./contentPanel.module.css";

const ContentPanel = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>属性面板</div>
      <div className={styles.content}>属性内容区域</div>
    </div>
  );
};

export default ContentPanel;
