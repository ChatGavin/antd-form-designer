import { makeAutoObservable } from "mobx";
import SidebarStore from "./sidebarStore";
import SideMenuStore from "./sideMenuStore";

class DesignerStore {
  sidebarStore;
  sideMenuStore;

  constructor() {
    this.sidebarStore = new SidebarStore();
    this.sideMenuStore = new SideMenuStore();
    makeAutoObservable(this, {
      sidebarStore: false, // 标记为非观察对象，因为它本身就是一个 observable
      sideMenuStore: false, // 标记为非观察对象，因为它本身就是一个 observable
    });
  }
}

export default DesignerStore;
