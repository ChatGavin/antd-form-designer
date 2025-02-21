import styles from "./loading.module.css";
import logo from "@/assets/icons/logo.png";

const Loading = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo" className={styles.logo} />
    </div>
  );
};

export default Loading;
