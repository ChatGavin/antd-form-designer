import { makeAutoObservable } from "mobx";

class SiderStore {
  // 左侧栏宽度
  width = 200;
  // 是否正在拖拽
  isDragging = false;
  // 记录上一次的有效宽度，用于边界处理
  lastValidWidth = 200;

  constructor() {
    makeAutoObservable(this);
  }

  // 设置左侧栏宽度
  setWidth(width) {
    // 先记录当前的有效值
    if (width >= 200 && width <= 500) {
      this.lastValidWidth = width;
    }

    // 使用 clamp 函数来处理边界，保证拖拽的连续性
    this.width = Math.max(200, Math.min(500, width));
  }

  // 设置拖拽状态
  setIsDragging(dragging) {
    this.isDragging = dragging;
    document.body.style.cursor = dragging ? "col-resize" : "default";

    // 开始拖拽时记录初始宽度
    if (dragging) {
      this.lastValidWidth = this.width;
    }
  }
}

export default SiderStore;
