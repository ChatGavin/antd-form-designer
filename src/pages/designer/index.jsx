import { Layout } from "antd";
import {
  Header,
  LeftPanel,
  MiddleContent,
  RightPanel,
  AIAssistant,
} from "./index.js";
import styles from "./index.module.css";

const App = () => {
  return (
    <Layout className={styles.layout}>
      <Header />
      <Layout>
        <LeftPanel />
        <MiddleContent />
        <RightPanel />
      </Layout>
      <AIAssistant />
    </Layout>
  );
};

export default App;
