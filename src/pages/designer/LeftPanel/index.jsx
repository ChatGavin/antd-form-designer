import styles from "./index.module.css";
import { Tabs, TabContent } from "./index.js";

const App = () => {
  return (
    <div className={styles.layout}>
      <Tabs />
      <TabContent />
    </div>
  );
};

export default App;
