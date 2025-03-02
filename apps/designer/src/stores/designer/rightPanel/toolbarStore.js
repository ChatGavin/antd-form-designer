import { makeAutoObservable } from "mobx";
import { Settings2, Bot } from "lucide-react";

class ToolbarStore {
  tabs = [
    {
      id: "props",
      title: "属性面板",
      icon: Settings2,
    },
    {
      id: "ai",
      title: "AI 助手",
      icon: Bot,
    },
  ];

  activeId = "props";

  constructor() {
    makeAutoObservable(this);
  }

  switchTab(id) {
    this.activeId = id;
  }
}

export default ToolbarStore;
