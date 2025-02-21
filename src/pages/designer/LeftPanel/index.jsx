import { Layout } from "antd";
import styles from "./index.module.css";
import { TabNav, TabContent } from "./index.js";

const { Sider } = Layout;

const App = () => {
  return (
    <Sider className={styles.sider} width={200} theme="light">
      <TabNav />
      <TabContent />
    </Sider>
  );
};

export default App;
