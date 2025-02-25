import { Layout } from "antd";
import styles from "./index.module.css";
import Toolbar from "./Toolbar";

const { Sider } = Layout;

const App = () => {
  return (
    <Sider className={styles.layout} width={300}>
      <Toolbar />
    </Sider>
  );
};

export default App;
