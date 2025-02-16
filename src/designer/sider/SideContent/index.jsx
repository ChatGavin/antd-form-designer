import React from "react";
import styles from "./sideContent.module.css";
import { observer } from "mobx-react-lite";
import rootStore from "@/stores";

const SideContent = observer(() => {
  const { designerStore } = rootStore;
  const { sideMenuStore } = designerStore;

  if (!sideMenuStore.activeId) {
    return <div className={styles.container}>请选择左侧菜单</div>;
  }

  return (
    <div className={styles.container}>
      当前选中的是：菜单{sideMenuStore.activeId}
    </div>
  );
});

export default SideContent;
