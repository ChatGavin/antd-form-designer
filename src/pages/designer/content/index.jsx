import { Layout } from "antd";
import styles from "./content.module.css";
import ContentMenu from "./ContentMenu/index.jsx";
import ContentPanel from "./ContentPanel/index.jsx";
import ContentChat from "./ContentChat/index.jsx";

const { Content } = Layout;

const DesignerContent = () => {
  return (
    <Content className={styles.content}>
      <ContentMenu />
      <div className={styles.mainContent}>
        <div className={styles.workspace}>中间工作区域</div>
        <ContentPanel />
      </div>
      <ContentChat />
    </Content>
  );
};

export default DesignerContent;
