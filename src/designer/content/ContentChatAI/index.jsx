import React, { useState } from "react";
import { Sender } from "@ant-design/x";
import { App } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import styles from "./contentChatAI.module.css";

const ContentChatAI = ({ open, onCancel }) => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const { message } = App.useApp();

  if (!open) return null;

  const handleSubmit = () => {
    if (!value.trim()) return;
    setLoading(true);
    setValue("");
    message.info("发送消息");
  };

  const handleCancel = () => {
    setLoading(false);
    onCancel?.();
    message.error("取消发送");
  };

  return (
    <div className={styles.container}>
      <div className={styles.closeButton} onClick={onCancel}>
        <CloseOutlined />
      </div>
      <Sender
        loading={loading}
        value={value}
        onChange={setValue}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        placeholder="请输入您的问题..."
      />
    </div>
  );
};

export default ContentChatAI;
