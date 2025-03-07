import Tabs from "./tabs/index.jsx";
import TabContent from "./tabContent/index.jsx";
//
import styles from "./index.module.css";
import Sider from "antd/es/layout/Sider";

const App = () => {
  return (
    <Sider className={styles.layout} width={300}>
      <Tabs />
      <TabContent />
    </Sider>
  );
};

export default App;
