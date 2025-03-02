import styles from "./index.module.css";
import { observer } from "mobx-react-lite";

const App = observer(() => {
  return <div className={styles.container}>内容区...</div>;
});

export default App;
