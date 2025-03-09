import styles from "./index.module.css";
import logo from "@/assets/logo/editor.png";

const App = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="logo" />
      <span>Antd Form Designer</span>
    </div>
  );
};

export default App;
