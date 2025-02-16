import { makeAutoObservable } from "mobx";

class SiderStore {
  // 左侧栏宽度
  width = 300;
  // 是否正在拖拽
  isDragging = false;

  constructor() {
    makeAutoObservable(this);
  }

  // 设置左侧栏宽度
  setWidth(width) {
    if (width >= 300 && width <= 600) {
      this.width = width;
    }
  }

  // 设置拖拽状态
  setIsDragging(dragging) {
    this.isDragging = dragging;
    document.body.style.cursor = dragging ? "col-resize" : "default";
  }
}

export default SiderStore;
