import { Layout } from "antd";
import styles from "./index.module.css";

const { Content } = Layout;

const App = () => {
  return (
    <Content className={styles.content}>
      <div className={styles.mainContent}>
        <div className={styles.workspace}>中间工作区域</div>
      </div>
    </Content>
  );
};

export default App;
