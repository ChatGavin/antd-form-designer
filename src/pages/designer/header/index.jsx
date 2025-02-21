import { Layout } from "antd";
import styles from "./index.module.css";
import { Brand } from "./index.js";

const { Header } = Layout;

const App = () => {
  return (
    <Header className={styles.header}>
      <Brand />
    </Header>
  );
};

export default App;
