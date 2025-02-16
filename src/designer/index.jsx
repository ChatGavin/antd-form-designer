import { Layout } from "antd";
import DesignerHeader from "./header";
import DesignerSider from "./sider";
import DesignerContent from "./content";
// 使用 mobx 观察者
import { observer } from "mobx-react-lite";
import styles from "./designer.module.css";

const FormDesigner = observer(() => {
  return (
    <Layout className={styles.layout}>
      <DesignerHeader />
      <Layout>
        <DesignerSider />
        <DesignerContent />
      </Layout>
    </Layout>
  );
});

export default FormDesigner;
