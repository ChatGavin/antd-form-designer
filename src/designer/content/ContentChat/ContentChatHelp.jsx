import React from "react";
import { Modal } from "antd";
import styles from "./contentChat.module.css";

const ContentChatHelp = ({ open, onCancel }) => {
  return (
    <Modal
      title="AI 助手说明"
      open={open}
      onCancel={onCancel}
      footer={null}
      width={600}
    >
      <div className={styles.helpContent}>
        <h3>支持本地模型</h3>
        <p>1. 本地运行 Ollama, 模型无限制, 默认端口 11434</p>
        <p>2. 下载 Ollama 地址, https://ollama.com/download</p>
      </div>
    </Modal>
  );
};

export default ContentChatHelp;
