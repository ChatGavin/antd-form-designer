import React, { useState } from "react";
import { FloatButton } from "antd";
import {
  OpenAIOutlined,
  MessageOutlined,
  CloseOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import styles from "./contentChat.module.css";
import ContentChatHelp from "./ContentChatHelp";
import ContentChatAI from "../ContentChatAI";

const ContentChat = () => {
  const [helpModalOpen, setHelpModalOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

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
      onClick: () => setChatOpen(true),
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

      <ContentChatHelp
        open={helpModalOpen}
        onCancel={() => setHelpModalOpen(false)}
      />

      <ContentChatAI open={chatOpen} onCancel={() => setChatOpen(false)} />
    </>
  );
};

export default ContentChat;
