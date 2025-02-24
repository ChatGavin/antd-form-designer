import { makeAutoObservable } from "mobx";
// dialog
import DialogStore from "./dialog";
// leftPanel
import { TabsStore } from "./leftPanel";
// middleContent
import { StepsStore } from "./middleContent";

class DesignerStore {
  tabsStore;
  dialogStore;
  stepsStore;

  constructor() {
    this.dialogStore = new DialogStore();
    this.tabsStore = new TabsStore();
    this.stepsStore = new StepsStore();
    makeAutoObservable(this, {
      dialogStore: false, // 标记为非观察对象，因为它本身就是一个 observable
      tabsStore: false,
      stepsStore: false,
    });
  }
}

export default DesignerStore;
