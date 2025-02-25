import { Layout } from "antd";
import styles from "./index.module.css";

const { Sider } = Layout;

const App = () => {
  return (
    <Sider className={styles.layout} width={300}>
      右侧面板
    </Sider>
  );
};

export default App;
