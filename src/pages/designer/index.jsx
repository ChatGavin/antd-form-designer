import { Layout } from "antd";
import {
  Header,
  LeftPanel,
  MiddleContent,
  RightPanel,
  AIAssistant,
} from "./index.js";
// 使用 mobx 观察者
import { observer } from "mobx-react-lite";
import styles from "./index.module.css";

const App = observer(() => {
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
});

export default App;
