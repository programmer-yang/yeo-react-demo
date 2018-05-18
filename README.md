## 项目结构

<pre>
.
build             // 编译目录
config            // webpack配置
public            // 公共文件 可以放一些第三方字体 样式库等
scripts           // 启动脚本
src
  |-- asset       // 静态资源
  |-- common      // 工具
  |-- components  // 组件
  |-- models      // mobx model存放位置
  |-- pages       // 容器组件
  |-- services    // api存放位置
  |-- index.js    // 入口文件
  |-- router.js   // 基础路由
  |-- vars.less   // 公共样式存放位置
..eslintignore    // eslint过滤文件清单
.eslintrc.js      // eslint配置
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

* [x] 基础脚手架
* [x] eslint
* [x] 基础结构
* [x] mobx 支持
* [x] mobx 基础使用
* [x] fetch
* [x] mobx 异步 demo
* [x] mock
* [x] chart 支持
* [ ] 异常统一处理
