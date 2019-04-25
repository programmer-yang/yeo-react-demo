## 项目结构

<pre>
public                  // 公共文件 可以放一些第三方字体 样式库等
mock                    // mock文件
src
  |-- components        // 公共组件目录 当业务需要拆分组件的时候，可以在对应的业务文件夹下单独创建一个components文件夹
  |-- layouts           // 项目结构文件
  |-- locales           // 规划文件
  |-- models            // 公共model存放位置
    |-- public.js       // 公共model文件 可以多个
  |-- services          // 公共api存放
  |-- pages             // 容器组件
    |-- demo            // 业务容器 相对路由/demo ***不可以有任何大写字母
      |-- index.js      // 业务入口 入口文件只识别index.js 后缀必须是js
      |-- index.less    // 业务样式
      |-- modules       // 业务model目录
        |-- demo.js     // 业务model文件 可以有多个 自动加载
      |-- service       // 业务api目录
        |-- demo.js     // 业务api文件 可以有多个
  |-- utils             // 工具
  |-- theme             
    |-- cofnig.js       // 覆盖antd样式文件
    |-- vars.less       // 全局变量
  |-- global.less       // 公共样式 覆盖样式
.eslintignore           // eslint过滤文件清单
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
  "editor.tabSize": 2,
  "editor.formatOnSave": true
}
```
