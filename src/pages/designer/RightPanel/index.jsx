import Toolbar from "./Toolbar/index.jsx";
import ToolbarContent from "./ToolbarContent/index.jsx";
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
