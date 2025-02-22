import { makeAutoObservable } from "mobx";
import { PanelResizeStore, TabNavStore } from "./leftPanel";

class DesignerStore {
  panelResizeStore;
  tabNavStore;

  constructor() {
    this.panelResizeStore = new PanelResizeStore();
    this.tabNavStore = new TabNavStore();
    makeAutoObservable(this, {
      panelResizeStore: false, // 标记为非观察对象，因为它本身就是一个 observable
      tabNavStore: false, // 标记为非观察对象，因为它本身就是一个 observable
    });
  }
}

export default DesignerStore;
