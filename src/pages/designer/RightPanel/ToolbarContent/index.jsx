import styles from "./index.module.css";
import { observer } from "mobx-react-lite";

const ToolbarContent = observer(() => {
  return <div className={styles.container}>内容</div>;
});

export default ToolbarContent;
