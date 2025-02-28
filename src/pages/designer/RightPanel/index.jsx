import Toolbar from "./toolbar/index.jsx";
import ToolbarContent from "./toolbarContent/index.jsx";
//
import { Layout } from "antd";
import styles from "./index.module.css";

const { Sider } = Layout;

const App = () => {
  return (
    <Sider className={styles.layout} width={300}>
      <Toolbar />
      <ToolbarContent />
    </Sider>
  );
};

export default App;
