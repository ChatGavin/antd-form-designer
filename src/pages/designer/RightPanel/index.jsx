import { Layout } from "antd";
import styles from "./index.module.css";

const { Sider } = Layout;

const App = () => {
  return (
    <Sider className={styles.sider} width={300} theme="light">
      右侧面板
    </Sider>
  );
};

export default App;
