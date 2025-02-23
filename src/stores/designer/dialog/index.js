import { makeAutoObservable } from "mobx";

class DialogStore {
  // 管理设计器所有弹窗状态
  states = {
    changelog: false,
  };

  constructor() {
    makeAutoObservable(this);
  }

  show(type) {
    if (type in this.states) {
      this.states[type] = true;
    }
  }

  hide(type) {
    if (type in this.states) {
      this.states[type] = false;
    }
  }

  getState(type) {
    return this.states[type];
  }
}

export default DialogStore;
