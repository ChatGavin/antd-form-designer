import styles from "./index.module.css";
import { Layout } from "antd";
import { Header, LeftPanel, MiddleContent, RightPanel } from "./index.js";

const App = () => {
  return (
    <Layout className={styles.layout}>
      <Header />
      <Layout>
        <LeftPanel />
        <MiddleContent />
        <RightPanel />
      </Layout>
    </Layout>
  );
};

export default App;
