import { Layout } from "antd";
import DesignerHeader from "./header/index.jsx";
import DesignerSider from "./sider/index.jsx";
import DesignerContent from "./content/index.jsx";
// 使用 mobx 观察者
import { observer } from "mobx-react-lite";
import styles from "./index.module.css";

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
