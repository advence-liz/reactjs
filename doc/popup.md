# Popup
* based on [jquery](http://jquery.com/), [jQuery-ui(widget)](http://jqueryui.com/).
* Author:李雪峰

## 创建控件
### JSX代码(非state控制模式)
```javascript
//右键显示示例
showPopup(e){
	if(e.which===3){
		e.stopPropagation();
		e.preventDefault();
		return true;
	}
}
```
```html
<a href="#" id="popup0">show popup</a>
<R.Popup
	of="#popup0"
	triggerEvents="click"
	customTrigger={{contextmenu:this.showPopup.bind(this)}}
>
{任意元素结构}
</R.Popup>
```

### JSX代码(state控制模式)
```javascript
this.state={
	showPopup:{show:false}
}
togglePopup(){
	this.setState({showPopup:{show:!this.state.showPopup.show}});
}
```
```html
//本示例已省略部分参数，适用于在控件外部，额外有控制popup显隐，或必须通过state来控制的情况。
//一般情况不建议使用此方案，需要更新state的，可以按上面的示例，添加shown/hidden回调来控制state。
<button data-close="prevent" onClick={this.togglePopup}></button>
<a href="#" id="popup0">show popup</a>
<R.Popup
	ofElement="#popup0"
	status={this.state.showPopup.bind(this)}
>
{任意元素结构}
</R.Popup>
```

## 控件参数

参数名|类型|默认值|描述 
---|---|---|---
width|Number/String|null|设置popup的宽度。
height|Number/String|null|设置popup的高度。
my|String|"left top"|popup定位参数，参考[jQuery-UI文档](http://www.runoob.com/jqueryui/api-position.html)。
at|String|"left bottom"|popup定位参数，参考[jQuery-UI文档](http://www.runoob.com/jqueryui/api-position.html)。
within|jQuery Element|window|popup定位参数，参考[jQuery-UI文档](http://www.runoob.com/jqueryui/api-position.html)。
of|jQuery sizzle String|""|jQuery sizzle选择器字符串，对应的元素会被设置为popup的toggle触发元素，且默认定位时以此元素为基准，参考[jQuery-UI文档](http://www.runoob.com/jqueryui/api-position.html)。
ofElement|jQuery sizzle String|null|特殊情况下，当设置此参数后，popup定位的基准元素改为为此元素。
status|Object|{show:false}|用于设置/获取popup控件状态(show/hide)。
triggerEvents|String|""|of元素触发popup的toggle事件方式，例如"click"等。
customTrigger|Object{Function}|{}|自定义popup的出发方式，参考示例中的右键触发，对象属性名为触发的事件名称，属性值为function，当此function内return true时，才会触发popup的toggle。
zIndex|Number|null|设置popup的z-index, 除特殊情况外, 不建议设置。
shown/hidden|Function|null|当popup显示/隐藏后的回调。

## 控件公共方法
方法名|参数|参数可选值|描述 
---|---|---|---
setPosition|ofElement|jQuery Element/Event|重新定位Popup。
show|ofElement|同上|显示Popup
hide|无||隐藏Popup
toggle|无||切换Popup的显示/隐藏
