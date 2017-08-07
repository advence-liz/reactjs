# R.Pager React
* Author:陈天慧

## React JSX 用法
```html
 <R.Pager 
	pageSize={15}
	pageCount={1}
	pageIndex={1}
	onClick={this.onPageClick}>
 </R.Pager>
```
## 控件参数

参数名|类型|默认值|描述
---|---|---|---
pageSize|Number|15|获取或设置每页显示的记录数。
pageCount|Number|1|获取或设置Pager控件的总页数。
pageIndex|Number|1|获取或设置Pager 控件的当前页数。
onClick|Function|$.noop|pager 发生变化后的回调函数。

