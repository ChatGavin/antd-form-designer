import { Modal } from "antd";
import styles from "./index.module.css";

const App = ({ open, onCancel }) => {
  return (
    <Modal
      title="AI 模型配置说明"
      open={open}
      onCancel={onCancel}
      footer={null}
    >
      <div className={styles.content}>
        <h3>模型说明</h3>
        <p>当前使用的是 DeepSeek R1 模型，这是一个强大的 AI 助手。</p>

        <h3>使用说明</h3>
        <ul>
          <li>可以询问任何设计相关的问题</li>
          <li>支持中英文对话</li>
          <li>可以帮助解决常见问题</li>
        </ul>
      </div>
    </Modal>
  );
};

export default App;
