import React, { useState } from "react";
import { FloatButton } from "antd";
import { Bot, BotMessageSquare, X, Settings } from "lucide-react";
import styles from "./contentChat.module.css";
import ContentChatHelp from "./ContentChatHelp.jsx";
import ContentChatAI from "@/pages/designer/ChatAI/ContentChatAI/index.jsx";

const ContentChat = () => {
  const [helpModalOpen, setHelpModalOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(true);

  const chatItems = [
    {
      id: "help",
      icon: <Settings size={20} />,
      tooltip: "模型配置",
      onClick: () => setHelpModalOpen(true),
    },
    {
      id: "chat",
      icon: <BotMessageSquare size={20} />,
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
        icon={<Bot size={20} />}
        closeIcon={<X size={20} />}
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
