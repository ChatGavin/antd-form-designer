import styles from "./index.module.css";
import Tabs from "./Tabs/index.jsx";
import TabContent from "./TabContent/index.jsx";
//
import Changelog from "./Changelog/index.jsx";
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
