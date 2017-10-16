# reactjs
for react [教程](https://advence-liz.github.io/reactjs/out/index.html)

并且采用每个branch 一个单独的解决方案的方式（master branch 并不是这样的算是历史问题因为那时git 玩的不溜）
## REF
- [react-router](https://reacttraining.com/react-router/web/example/basic)
## branch list
- master (留下纪念青涩的岁月吧哈哈)
- AMD&require （很久之前写了个利用requirejs 的AMD 打包DEMO）
- dev （之后构建其它分支的模板）
- remarked （一开始我只是想封装react componet 在其中中直接写markdown 语法方便书写DEMO，后来发现了 react-markdown 和 codeMorri 一不小心搞出个在线编辑预览 html 的DEMO）

 
## tip
- npm 升级后运行 npm install 或删除多余安装包好烦 这样切换branch 就得重新下载依赖了
- 我发现 npm publish 会自动将项目中的 .gitignore 转为 .npmignore
- page.json 中的 dependencs 会被自动下载到 node_modules,而 devDependences不会下载
- page.json 配置bin 字段然后全局安装就是开发命令行工具了



## TODO
-[ ] 做一个命令行工具可以可以自动编译less 压缩 css 压缩 js 运行 webpack 

