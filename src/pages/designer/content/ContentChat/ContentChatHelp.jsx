import React from "react";
import { Modal } from "antd";
import styles from "./contentChat.module.css";

const ContentChatHelp = ({ open, onCancel }) => {
  return (
    <Modal
      title="本地模型"
      open={open}
      onCancel={onCancel}
      footer={null}
      width={600}
    >
      <div className={styles.helpContent}>
        <h3>Ollama 示例</h3>
        <p>1. 下载地址: https://ollama.com/download</p>
        <p>2. 选择模型, ollama pull deepseek-r1</p>
        <p>3. 运行模型, ollama run deepseek-r1</p>
        <p>4. 访问模型, http://localhost:11434</p>
      </div>
    </Modal>
  );
};

export default ContentChatHelp;
