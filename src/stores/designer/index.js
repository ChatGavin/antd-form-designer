import { makeAutoObservable } from "mobx";
import SiderStore from "./siderStore";

class DesignerStore {
  siderStore;

  constructor() {
    this.siderStore = new SiderStore();
    makeAutoObservable(this, {
      siderStore: false, // 标记为非观察对象，因为它本身就是一个 observable
    });
  }
}

export default DesignerStore;
