import { makeAutoObservable } from "mobx";
import SidebarStore from "./sidebarStore";

class DesignerStore {
  sidebarStore;

  constructor() {
    this.sidebarStore = new SidebarStore();
    makeAutoObservable(this, {
      sidebarStore: false, // 标记为非观察对象，因为它本身就是一个 observable
    });
  }
}

export default DesignerStore;
