import styles from "./index.module.css";
import { observer } from "mobx-react-lite";
import rootStore from "@/stores/index.js";
import classNames from "classnames";
import { Tooltip } from "antd";

const App = observer(() => {
  const { designerStore } = rootStore;
  const { sideMenuStore } = designerStore;

  const handleLinkClick = (url) => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.menuList}>
        {sideMenuStore.menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Tooltip
              key={item.id}
              title={item.title}
              placement="right"
              mouseEnterDelay={0.5}
              destroyTooltipOnHide
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
      <div className={styles.bottomLinks}>
        {sideMenuStore.bottomLinks.map((link) => {
          const Icon = link.icon;
          return (
            <Tooltip
              key={link.id}
              title={link.title}
              placement="right"
              mouseEnterDelay={0.5}
              destroyTooltipOnHide
            >
              <div
                onClick={() => handleLinkClick(link.url)}
                className={styles.menuItem}
              >
                <div className={styles.iconWrapper}>
                  <Icon />
                </div>
              </div>
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
});

export default App;
