import styles from "./index.module.css";
import { observer } from "mobx-react-lite";
import rootStore from "@/stores/index.js";
import classNames from "classnames";

const App = observer(() => {
  const { designerStore } = rootStore;
  const { toolbarStore } = designerStore;

  return (
    <div className={styles.container}>
      {toolbarStore.tabs.map((tab) => {
        const Icon = tab.icon;
        return (
          <div
            key={tab.id}
            onClick={() => toolbarStore.switchTab(tab.id)}
            className={classNames(styles.tab, {
              [styles.activeTab]: toolbarStore.activeId === tab.id,
            })}
          >
            <span className={styles.title}>
              <Icon size={20} className={styles.icon} />
              {tab.title}
            </span>
          </div>
        );
      })}
    </div>
  );
});

export default App;
