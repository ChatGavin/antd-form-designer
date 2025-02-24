import { makeAutoObservable } from "mobx";
import { FileText, Database, History } from "lucide-react";

class StepsStore {
  steps = [
    {
      id: "form",
      icon: FileText,
      title: "表单设计",
    },
    {
      id: "data",
      icon: Database,
      title: "数据源",
    },
    {
      id: "version",
      icon: History,
      title: "版本管理",
    },
  ];

  // 默认激活第一个
  activeId = "form";

  constructor() {
    makeAutoObservable(this);
  }

  switchStep(id) {
    this.activeId = id;
  }
}

export default StepsStore;
