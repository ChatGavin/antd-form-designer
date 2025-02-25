import styles from "./index.module.css";
import Tabs from "./Tabs";
import TabContent from "./TabContent";
//
import Changelog from "./Changelog";
import Sider from "antd/es/layout/Sider";

const App = () => {
  return (
    <Sider className={styles.layout} width={300}>
      <Tabs />
      <TabContent />
      {/* */}
      <Changelog />
    </Sider>
  );
};

export default App;
