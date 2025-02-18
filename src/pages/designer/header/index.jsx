import { Layout } from "antd";
import styles from "./header.module.css";

const { Header } = Layout;

const DesignerHeader = () => {
  return <Header className={styles.header}>Antd Form Designer</Header>;
};

export default DesignerHeader;
