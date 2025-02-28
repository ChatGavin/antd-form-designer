import Steps from "./Steps/index.jsx";
import Workspace from "./Workspace/index.jsx";
import Footer from "./Footer/index.jsx";
//
import { Layout } from "antd";
import styles from "./index.module.css";

const { Content } = Layout;

const App = () => {
  return (
    <Content className={styles.content}>
      <Steps />
      <Workspace />
      <Footer />
    </Content>
  );
};

export default App;
