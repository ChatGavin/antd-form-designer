import { Menu, Chat, Help } from "./index.js";
import styles from "./index.module.css";
import { useState } from "react";

const App = () => {
  const [helpOpen, setHelpOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Menu
        onHelpClick={() => setHelpOpen(true)}
        onChatClick={() => setChatOpen(true)}
      />
      <Chat open={chatOpen} onCancel={() => setChatOpen(false)} />
      <Help open={helpOpen} onCancel={() => setHelpOpen(false)} />
    </div>
  );
};

export default App;
