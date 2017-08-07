# Nav
* Author:李卓

## 创建控件
### HTML代码
```html
 <h2>nav-tabs</h2>
                <div id="root"></div>
                <section>
                    <div id="aui-tab" type="tab"></div>

                    <div class="tab-content" id="tab1">Block one</div>
                    <div class="tab-content" id="tab2">Block two</div>
                    <div class="tab-content" id="tab3">Block three</div>


                </section>
```
### JavaScript代码
```javascript
//控件初始化参数 $$.init_nav 是一个全局的构造方法生成 Nav 所依赖的ArrayList (这个ArrayList是我自己构建的)
  window.tabList = $$.init_nav([
            { title: 'tab1', href: '#tab1' },
            { title: 'tab2', href: '#tab2' },
            { title: 'tab3', href: '#tab3' }
        ]);

        $("#aui-tab").nav({ tabList: tabList });

```
### React
```javascript
class Demo extends React.Component {
    constructor(props) {
        super(props);

            /**
             * @desc options
             * @prop {String} type 决定控件类型
             * @prop {String} theme 决定控件主题
             * @prop {String} disabledList 'all' 全部disabled '1 2 3'字符串中包含的index disabled
             */
            tabList: tabList,
            type: 'nav-tabs',
            selectedIndex: 1,
            disabledList:'1 2',//
            theme:'nav-default'

        this.handleChange = this.handleChange.bind(this);
        this.resetTab = this.resetTab.bind(this);
    }
    selectedIndexChange(e, oldValue, newValue) {
        console.log(oldValue);
    }
    // tabList为$$.Nav.ArrayList的实例 其中每个元素为 $$.Nav.TabsItem 的实例  下文有$$.Nav.ArrayList的源码 大家可以自由组合操作 tabList
    resetTab() {
        tabList.push(new $$.Nav.TabsItem('#tab1', 'tab1'));
        this.setState({ tabList: tabList });
    }
    handleChange(event) {
        this.setState({ selectedIndex: event.target.value });
       // console.dir(this.refs.auinav);
    }

    render() {
        return (

            <div>
                <R.Nav
                    tabList={this.state.tabList}
                    type={this.state.type}
                    selectedIndex={this.state.selectedIndex}
                    selectedIndexChange={this.selectedIndexChange}
                    disabledList={this.state.disabledList}

                />
                <input type="number" min="0" value={this.state.selectedIndex} onChange={this.handleChange} />
                <button onClick={this.resetTab}>resetTab</button>

            </div>
        )
    }
}

ReactDOM.render(
    <Demo></Demo>,
    document.getElementById('root')
);
```
### ArrayList
```js
 /**
     * @class ArrayList
     * @method unshift
     * @method insert
     * @method remove
     * @method clear
     * @method next
     */
    function ArrayList() {
        var data_store = new Array;

        this.cur_pos = 0;
        this.length = 0;
        this.push = function (item) {
            data_store.push(item);
            this.length++;
            return this;
        };
        this.get = function (index) {
            return data_store[index];
        }
        this.unshift = function (item) {
            data_store.unshift(item);
            this.length--;
            return this;
        };
        /**
         * 在指定索引处插入给定元素
         * @method insert
         * @param {TabItems}  represent dom 
         * @param {number}  represent index（索引重零开始）
         * @return{this}
         */
        this.insert = function (item, index) {
            data_store.splice(index, 0, item);
            this.length++;
            return this;
        };
        /**
         *  移除指定索引处的元素（索引重零开始）
         * @method remove
         * @param  {number}
         * @param  {number}
         * @return {this}
         */
        this.remove = function (index, length) {
            length = length || 1;
            data_store.splice(index, length);
            this.length -= length;
            return this;
        };
        this.clear = function () {
            this.data_store.length = 0;
            this.length = 0;
            return this;
        };
        /**
         * 获取 ArrayList 的下一个值
         * @method
         * @return {planObject} 当遍历到末尾时重置 cur_pos 并返回0 相当于 false
         */
        this.next = function () {
            if (this.cur_pos < this.length) {
                return data_store[this.cur_pos++];
            } else {
                return !!(this.cur_pos = 0);
            }
        };
        this.positon = function () {
            return this.cur_pos;
        }
       
        this.toString = function () {
            console.dir(data_store);
        }


    }
```    
## 控件参数

参数名|类型|默认值|描述 
---|---|---|---
tabLIst |ArraryList  |""|nav 数据源
type    |String      |'nav-tabs'|生成的Nav 类型 还有 'nav-pills' 
theme   |String      |'nav-default'|还有 'nav-stacked'
selectedIndex|Number|0|默认选中项
          