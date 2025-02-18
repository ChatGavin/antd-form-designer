import React from "react";
import styles from "./contentMenu.module.css";

const ContentMenu = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menuItem}>
        <span>页面属性</span>
      </div>
      <div className={styles.menuItem}>
        <span>表单属性</span>
      </div>
      <div className={styles.menuItem}>
        <span>数据源</span>
      </div>
    </div>
  );
};

export default ContentMenu;
