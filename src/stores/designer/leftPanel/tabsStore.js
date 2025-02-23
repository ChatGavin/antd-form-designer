import { makeAutoObservable } from "mobx";
import { LayoutGrid, FileJson, Route, Github } from "lucide-react";

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
      title: "版本更新",
      icon: Route,
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

  setActiveId(id) {
    this.activeId = id;
  }
}

export default TabsStore;
