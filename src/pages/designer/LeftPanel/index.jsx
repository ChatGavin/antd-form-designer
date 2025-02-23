import styles from "./index.module.css";
import { TabNav, TabContent } from "./index.js";

const App = () => {
  return (
    <div className={styles.layout}>
      <TabNav />
      <TabContent />
    </div>
  );
};

export default App;
