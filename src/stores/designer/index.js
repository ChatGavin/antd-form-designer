import { makeAutoObservable } from "mobx";
import { TabsStore } from "./leftPanel";

class DesignerStore {
  tabNavStore;

  constructor() {
    this.tabsStore = new TabsStore();
    makeAutoObservable(this, {
      tabsStore: false, // 标记为非观察对象，因为它本身就是一个 observable
    });
  }
}

export default DesignerStore;
