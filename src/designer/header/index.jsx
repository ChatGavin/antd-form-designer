import { Layout } from "antd";
import styles from "./header.module.css";

const { Header } = Layout;

const DesignerHeader = () => {
  return <Header className={styles.header}>表单设计器</Header>;
};

export default DesignerHeader;
