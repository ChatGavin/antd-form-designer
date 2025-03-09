import { makeAutoObservable } from "mobx";
import { LayoutGrid, FileJson, Book, Github } from "lucide-react";

class TabsStore {
  topTabs = [
    {
      id: "components",
      title: "组件库",
      icon: LayoutGrid,
    },
    {
      id: "schema",
      title: "表单 Schema",
      icon: FileJson,
    },
  ];

  bottomTabs = [
    {
      id: "docs",
      title: "产品文档",
      icon: Book,
      url: "https://designer.gavin.chat/docs",
    },
    {
      id: "github",
      title: "GitHub",
      icon: Github,
      url: "https://github.com/ChatGavin/antd-form-designer",
    },
  ];

  // 当前选中的菜单项，默认选中第一项
  activeId = "components";

  constructor() {
    makeAutoObservable(this);
  }

  // 切换主工具栏状态
  switchMainTool(id) {
    this.activeId = id;
  }

  // 处理快捷工具栏点击
  handleQuickTool(tab) {
    if (tab.url) {
      window.open(tab.url, "_blank");
    }
  }
}

export default TabsStore;
