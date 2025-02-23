import styles from "./index.module.css";
import Tabs from "./Tabs";
import TabContent from "./TabContent";
//
import Changelog from "./Changelog";

const LeftPanel = () => {
  return (
    <div className={styles.layout}>
      <Tabs />
      <TabContent />
      {/* */}
      <Changelog />
    </div>
  );
};

export default LeftPanel;
