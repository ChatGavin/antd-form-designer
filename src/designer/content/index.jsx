import { Layout } from "antd";
import styles from "./content.module.css";
import ContentMenu from "./ContentMenu";
import ContentPanel from "./ContentPanel";

const { Content } = Layout;

const DesignerContent = () => {
  return (
    <Content className={styles.content}>
      <ContentMenu />
      <div className={styles.mainContent}>
        <div className={styles.workspace}>中间工作区域</div>
        <ContentPanel />
      </div>
    </Content>
  );
};

export default DesignerContent;
