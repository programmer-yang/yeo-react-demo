## 项目结构

<pre>
build                   // 编译目录
config                  // webpack配置
public                  // 公共文件 可以放一些第三方字体 样式库等
scripts                 // 启动脚本
src
  |-- asset             // 静态资源
  |-- components        // 组件
  |-- models            // 公共model存放位置
    |-- index.js        // model 入口文件，所有的业务model都需要在这里登记太可以使用
  |-- pages             // 容器组件
    |-- demo            // 业务容器
      |-- DemoPage.jsx  // 业务入口 我们约定入口文件后都带一个“Page”字样
      |-- DemoPage.less // 业务样式
      |-- demoModel.js  // 业务Model 如果当前业务需要拆分成多个业务可以创建一个models文件夹在统一存放
      |-- demoApi.js    // 业务api 如果当前业务需要拆分成多个业务可以创建一个services文件夹在统一存放
  |-- services          // 公共api存放
  |-- utils             // 工具
  |-- global.less       // 样式变量 方法
  |-- index.js          // 入口文件
  |-- index.less        // 全局样式 覆盖样式
  |-- router.js         // 基础路由
.eslintignore          // eslint过滤文件清单
.eslintrc.js            // eslint配置
.gitignore
package.json  
README.md  
</pre>

## 准备工作

1.  请使用 vscode 作为开发此项目的 IDE
2.  请安装 ESLint Prettier 插件
3.  请在 vscode 配置文件中添加：

```json
{
  "editor.formatOnSave": true
}
```

## TODO

- [x] 基础脚手架
- [x] eslint
- [x] 基础结构
- [x] mobx 支持
- [x] mobx 基础使用
- [x] fetch
- [x] mobx 异步 demo
- [x] mock
- [x] 异常统一处理
