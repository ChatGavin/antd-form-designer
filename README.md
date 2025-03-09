<div align="center"><a name="readme-top"></a>

<img height="180" src="https://designer.gavin.chat/docs/img/logo/editor.png">

<h1>Antd Form Designer</h1>

Antd Form Designer 是一个基于 Ant Design 的表单设计器, 旨在探索 AI 在表单设计中的应用, 帮助开发者轻松地构建表单.

[![UI - Ant Design](https://img.shields.io/badge/UI-Ant%20Design-1890FF?style=flat-square&logo=ant-design&logoColor=white)](https://ant.design)
[![Build With Vite](https://img.shields.io/badge/Build%20with-Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Deploy](https://img.shields.io/badge/Deploy-GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/features/actions)
[![Docs By VitePress](https://img.shields.io/badge/Docs%20by-VitePress-42b883?style=flat-square&logo=markdown)](https://vitepress.dev)

<div align="center" style="margin: 20px 0">
  <a href="https://qiankun.umijs.org/" target="_blank" style="margin-right: 20px">
    <img src="https://designer.gavin.chat/docs/img/website/qiankun.png" alt="qiankun" width="120" />
  </a>
  <a href="https://turbo.build/" target="_blank" style="margin: 0 20px">
    <img src="https://designer.gavin.chat/docs/img/website/turborepo.svg" alt="Turborepo" width="120" />
  </a>
  <a href="https://pnpm.io/" target="_blank" style="margin-left: 20px">
    <img src="https://designer.gavin.chat/docs/img/website/pnpm.svg" alt="pnpm" width="120" />
  </a>
</div>

预览地址: [https://designer.gavin.chat](https://designer.gavin.chat)

产品文档: [https://j37q60tldv.feishu.cn/docx/V9d9d9GqBo52cAxlvHccrcjanFb?from=from_copylink](https://j37q60tldv.feishu.cn/docx/V9d9d9GqBo52cAxlvHccrcjanFb?from=from_copylink)

问题记录: [https://j37q60tldv.feishu.cn/docx/T1oedmX85oOvwexPrYMcRAjfnvh?from=from_copylink](https://j37q60tldv.feishu.cn/docx/T1oedmX85oOvwexPrYMcRAjfnvh?from=from_copylink)

## 功能特性

- **AI 助手**: 通过 AI 助手来设计配置表单.
- **实时预览**: 在设计过程中实时预览表单效果.
- **拖拽式设计**: 通过拖拽组件来快速构建表单.
- **表单配置项**: 通过配置表单的 schema 来快速构建表单.

## 快速开始

```bash
yarn install
yarn dev
```

## 关于低代码实践

表单设计器的出发点是为了解决大量重复表单的开发, 通过配置表单的 schema 来快速构建表单. 对于低代码平台来说, 表单设计器只是其中的一部分, 我们还会涉及到表单管理、字典管理、元数据管理、流程管理等.

**首先我反对所有的表单都通过表单设计器来开发, 尤其是那种交互复杂样式高度定制的表单, 这种情况下, 表单设计器的作用就非常有限了, 甚至还不如直接写代码来得快, 而且后期维护成本也会非常高.**

表单样式高度定制比较好理解, 对于交互复杂的表单我们通常需要写大量的业务逻辑或通过各种繁琐的配置 (如联动、正则、表达式、校验、变量等组合) 来实现, 这种情况下, 无论是当下的开发还是后期的维护成本都会非常高.

表单设计器适合那种样式简单, 交互简单, 且业务逻辑简单的表单, 这种情况下, 表单设计器可以大大提高开发效率, 也有利于后期的管理与维护. **软件工程没有"银弹"**, 任何工具都有其适用场景, 重要的是我们如何去选择和使用它们.

最后谈谈 AI 编码对表单设计器的影响, 单单从开发效率来看无疑是碾压式的而且还灵活. 但从整个低代码平台来看, 表单设计器只是其中的一部分, 我们还需要考虑到表单管理、字典管理、元数据管理、流程管理等, 这些即是效率工具, 也是工作流, 还是团队需要遵守的开发规范.
