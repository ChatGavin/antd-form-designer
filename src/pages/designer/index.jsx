import Header from "./header/index.jsx";
import LeftPanel from "./leftPanel/index.js";
import MiddleContent from "./middleContent/index.jsx";
import RightPanel from "./rightPanel/index.jsx";
//
import styles from "./index.module.css";
import { Layout } from "antd";

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
