import { makeAutoObservable } from "mobx";
import { TabNavStore } from "./leftPanel";

class DesignerStore {
  tabNavStore;

  constructor() {
    this.tabNavStore = new TabNavStore();
    makeAutoObservable(this, {
      tabNavStore: false, // 标记为非观察对象，因为它本身就是一个 observable
    });
  }
}

export default DesignerStore;
