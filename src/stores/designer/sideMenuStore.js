import { makeAutoObservable } from "mobx";
import {
  AppstoreOutlined,
  PictureOutlined,
  FormOutlined,
  TableOutlined,
  BarChartOutlined,
  GithubOutlined,
  BookOutlined,
} from "@ant-design/icons";

class SideMenuStore {
  // 菜单列表
  menuItems = [
    {
      id: 1,
      title: "组件库",
      icon: AppstoreOutlined,
      description: "常用组件集合",
    },
    {
      id: 2,
      title: "图片素材",
      icon: PictureOutlined,
      description: "图片资源管理",
    },
    {
      id: 3,
      title: "表单控件",
      icon: FormOutlined,
      description: "表单相关组件",
    },
    {
      id: 4,
      title: "数据表格",
      icon: TableOutlined,
      description: "表格相关组件",
    },
    {
      id: 5,
      title: "图表组件",
      icon: BarChartOutlined,
      description: "数据可视化组件",
    },
  ];

  // 底部链接
  bottomLinks = [
    {
      id: "docs",
      title: "产品文档",
      icon: BookOutlined,
      url: "https://j37q60tldv.feishu.cn/docx/V9d9d9GqBo52cAxlvHccrcjanFb?from=from_copylink", // 文档地址
    },
    {
      id: "github",
      title: "GitHub",
      icon: GithubOutlined,
      url: "https://github.com/ChatGavin/antd-form-designer", // GitHub 地址
    },
  ];

  // 当前选中的菜单项，默认选中第一项
  activeId = 1;

  constructor() {
    makeAutoObservable(this);
  }

  setActiveId(id) {
    this.activeId = id;
  }
}

export default SideMenuStore;
