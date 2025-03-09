import DesignerStore from "./designer";

class RootStore {
  constructor() {
    this.designerStore = new DesignerStore();
  }
}

const rootStore = new RootStore();

export default rootStore;
