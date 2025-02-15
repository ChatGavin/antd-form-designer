import { makeAutoObservable } from "mobx";

class DesignerStore {
  // 左侧栏宽度
  siderWidth = 200;
  // 是否正在拖拽
  isDragging = false;

  constructor() {
    makeAutoObservable(this);
  }

  // 设置左侧栏宽度
  setSiderWidth(width) {
    if (width >= 200 && width <= 600) {
      this.siderWidth = width;
    }
  }

  // 设置拖拽状态
  setIsDragging(dragging) {
    this.isDragging = dragging;
    document.body.style.cursor = dragging ? "col-resize" : "default";
  }
}

export default DesignerStore;
