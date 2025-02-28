import Steps from "./steps/index.jsx";
import Workspace from "./workspace/index.jsx";
import Footer from "./footer/index.jsx";
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
