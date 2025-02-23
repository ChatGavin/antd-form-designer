import { makeAutoObservable } from "mobx";
import DialogStore from "./dialog";
import { TabsStore } from "./leftPanel";

class DesignerStore {
  tabsStore;
  dialogStore;

  constructor() {
    this.dialogStore = new DialogStore();
    this.tabsStore = new TabsStore();
    makeAutoObservable(this, {
      dialogStore: false, // 标记为非观察对象，因为它本身就是一个 observable
      tabsStore: false,
    });
  }
}

export default DesignerStore;
