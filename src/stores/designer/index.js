import { makeAutoObservable } from "mobx";
// dialog
import DialogStore from "./dialog";
// leftPanel
import { TabsStore } from "./leftPanel";
// middleContent
import { StepsStore } from "./middleContent";
// rightPanel
import ToolbarStore from "./rightPanel/toolbarStore";

class DesignerStore {
  tabsStore;
  dialogStore;
  stepsStore;
  toolbarStore;

  constructor() {
    this.dialogStore = new DialogStore();
    this.tabsStore = new TabsStore();
    this.stepsStore = new StepsStore();
    this.toolbarStore = new ToolbarStore();
    makeAutoObservable(this, {
      dialogStore: false, // 标记为非观察对象，因为它本身就是一个 observable
      tabsStore: false,
      stepsStore: false,
      toolbarStore: false,
    });
  }
}

export default DesignerStore;
