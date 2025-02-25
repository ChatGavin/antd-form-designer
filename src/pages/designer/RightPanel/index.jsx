import { Layout } from "antd";
import styles from "./index.module.css";
import { Toolbar, ToolbarContent } from "./index";

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
