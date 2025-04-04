import styles from "./index.module.css";
import { observer } from "mobx-react-lite";
import rootStore from "@/stores/index.js";

const App = observer(() => {
  const { designerStore } = rootStore;
  const { tabsStore } = designerStore;

  if (!tabsStore.activeId) {
    return <div className={styles.container}>请选择左侧菜单</div>;
  }

  return (
    <div className={styles.container}>
      当前选中的是：菜单{tabsStore.activeId}
    </div>
  );
});

export default App;
