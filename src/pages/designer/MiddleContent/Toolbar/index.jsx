import styles from "./index.module.css";

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menuItem}>
        <span>页面属性</span>
      </div>
      <div className={styles.menuItem}>
        <span>表单属性</span>
      </div>
      <div className={styles.menuItem}>
        <span>数据源</span>
      </div>
    </div>
  );
};

export default App;
