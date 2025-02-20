import { Layout } from "antd";
import styles from "./header.module.css";
import Logo from "./Logo";

const { Header } = Layout;

const DesignerHeader = () => {
  return (
    <Header className={styles.header}>
      <Logo />
    </Header>
  );
};

export default DesignerHeader;
