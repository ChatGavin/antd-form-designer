import styles from "./index.module.css";
import { observer } from "mobx-react-lite";
import rootStore from "@/stores/index.js";
import classNames from "classnames";
import { Tooltip } from "antd";

const App = observer(() => {
  const { designerStore } = rootStore;
  const { tabsStore } = designerStore;

  return (
    <div className={styles.container}>
      {/* 顶部菜单 */}
      <div className={styles.topTabs}>
        {tabsStore.topTabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <Tooltip key={tab.id} title={tab.title} placement="right">
              <div
                onClick={() => tabsStore.switchMainTool(tab.id)}
                className={classNames(styles.tab, {
                  [styles.activeTab]: tabsStore.activeId === tab.id,
                })}
              >
                <Icon size={24} />
              </div>
            </Tooltip>
          );
        })}
      </div>

      {/* 底部菜单 */}
      <div className={styles.bottomTabs}>
        {tabsStore.bottomTabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <Tooltip key={tab.id} title={tab.title} placement="right">
              <div
                onClick={() => tabsStore.handleQuickTool(tab)}
                className={styles.tab}
              >
                <Icon size={24} />
              </div>
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
});

export default App;
