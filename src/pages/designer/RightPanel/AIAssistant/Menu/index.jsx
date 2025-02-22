import { FloatButton } from "antd";
import { Bot, BotMessageSquare, X, Settings } from "lucide-react";

const App = ({ onHelpClick, onChatClick }) => {
  const chatItems = [
    {
      id: "help",
      icon: <Settings size={20} />,
      tooltip: "模型配置",
      onClick: onHelpClick,
    },
    {
      id: "chat",
      icon: <BotMessageSquare size={20} />,
      tooltip: "AI 助手",
      onClick: onChatClick,
    },
  ];

  return (
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
  );
};

export default App;
