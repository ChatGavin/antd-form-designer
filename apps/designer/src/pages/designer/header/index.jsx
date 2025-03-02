import Brand from "./brand/index.jsx";
//
import { Layout } from "antd";
import styles from "./index.module.css";

const { Header } = Layout;

const App = () => {
  return (
    <Header className={styles.header}>
      <Brand />
    </Header>
  );
};

export default App;
