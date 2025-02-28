import Header from "./Header/index.jsx";
import LeftPanel from "./LeftPanel/index.jsx";
import MiddleContent from "./MiddleContent/index.jsx";
import RightPanel from "./RightPanel/index.jsx";
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
