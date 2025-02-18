import React, { useState } from "react";
import { Sender } from "@ant-design/x";
import { App } from "antd";
import { X } from "lucide-react";
import styles from "./contentChatAI.module.css";
import { chat } from "@/api/ollama"; // 导入聊天接口

const ContentChatAI = ({ open, onCancel }) => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const { message } = App.useApp();

  if (!open) return null;

  const handleSubmit = async () => {
    if (!value.trim()) return;
    setLoading(true);
    try {
      const response = await chat(value);
      message.success("发送成功");
    } catch (error) {
      message.error("发送失败");
    } finally {
      setLoading(false);
      setValue("");
    }
  };

  const handleCancel = () => {
    setLoading(false);
    onCancel?.();
    message.error("取消发送");
  };

  return (
    <div className={styles.container}>
      <div className={styles.closeButton} onClick={onCancel}>
        <X size={12} />
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
