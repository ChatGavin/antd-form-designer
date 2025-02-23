import { Layout } from "antd";
import styles from "./index.module.css";
import { Toolbar } from "./index.js";
import { Workspace } from "./index.js";
import { Footer } from "./index.js";

const { Content } = Layout;

const App = () => {
  return (
    <Content className={styles.content}>
      <Toolbar />
      <Workspace />
      <Footer />
    </Content>
  );
};

export default App;
