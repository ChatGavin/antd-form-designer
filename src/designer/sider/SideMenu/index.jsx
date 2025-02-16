import React from "react";
import styles from "./sideMenu.module.css";
import { observer } from "mobx-react-lite";
import rootStore from "@/stores";
import classNames from "classnames";
import { Tooltip } from "antd";

const SideMenu = observer(() => {
  const { designerStore } = rootStore;
  const { sideMenuStore } = designerStore;

  return (
    <div className={styles.container}>
      {sideMenuStore.menuItems.map((item) => {
        const Icon = item.icon;
        return (
          <Tooltip
            key={item.id}
            title={item.title}
            placement="right"
            mouseEnterDelay={0.5}
            destroyTooltipOnHide
            overlayStyle={{ position: "fixed" }}
          >
            <div
              onClick={() => sideMenuStore.setActiveId(item.id)}
              className={classNames(styles.menuItem, {
                [styles.menuItemActive]: sideMenuStore.activeId === item.id,
              })}
            >
              <div className={styles.iconWrapper}>
                <Icon />
              </div>
            </div>
          </Tooltip>
        );
      })}
    </div>
  );
});

export default SideMenu;
