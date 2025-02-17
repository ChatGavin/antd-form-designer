import React, { useState } from "react";
import { FloatButton, Modal } from "antd";
import {
  OpenAIOutlined,
  MessageOutlined,
  CloseOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import styles from "./contentChat.module.css";

const ContentChat = () => {
  const [helpModalOpen, setHelpModalOpen] = useState(false);

  const chatItems = [
    {
      id: "help",
      icon: <QuestionCircleOutlined />,
      tooltip: "AI 助手说明",
      onClick: () => setHelpModalOpen(true),
    },
    {
      id: "chat",
      icon: <MessageOutlined />,
      tooltip: "AI 助手",
    },
  ];

  return (
    <>
      <FloatButton.Group
        trigger="hover"
        type="default"
        style={{
          right: 340,
          bottom: 40,
        }}
        icon={<OpenAIOutlined />}
        closeIcon={<CloseOutlined />}
      >
        {chatItems.map((item) => (
          <FloatButton
            key={item.id}
            icon={item.icon}
            tooltip={item.tooltip}
            onClick={item.onClick}
          />
        ))}
      </FloatButton.Group>

      <Modal
        title="AI 助手说明"
        open={helpModalOpen}
        onCancel={() => setHelpModalOpen(false)}
        footer={null}
        width={600}
      >
        <div className={styles.helpContent}>
          <h3>支持本地模型</h3>
          <p>1. 本地运行 Ollama, 模型无限制, 默认端口 11434</p>
          <p>2. 下载 Ollama 地址, https://ollama.com/download</p>
        </div>
      </Modal>
    </>
  );
};

export default ContentChat;
