
//测试数据
var
    PRODUCTS = [{
        name: 'p1',
        price: 100,
        selectedFruit: {
            value: 0
        }
    }, {
        name: 'p2',
        price: 200,
        selectedFruit: {
            value: 1
        }
    }, {
        name: 'p3',
        price: 300,
        selectedFruit: {
            value: 2
        }
    }],
    FRUITS = [{
        name: 'apple',
        value: 0
    }, {
        name: 'banana',
        value: 1
    }, {
        name: 'mangosteen',
        value: 2
    }];


/**
 * 使用Datagrid需要自定义航模版类，该类继承R.DatagridRow
 */
class ProductRow extends R.DatagridRow {
    constructor(props) {
        super(props);

        this.state = {
            fruits: FRUITS
        }

        this.setHandlersBind([
            'handlePriceChange'
        ]);
    }

    handlePriceChange(e, args) {
        //rowData是引用传递
        this.props.rowData.price = e.target.value;
        this.setState({});
    }

    render() {
        return (
            //行容器的虚拟dom需要添加 data-part="row"
            <div data-part="row">
                //列单元格的虚拟dom需要添加 data-part="cell"
                <div data-part="cell">{this.props.rowData.name}</div>
                <input
                    data-part="cell"
                    type="text"
                    style={{ padding: 0, height: '24px' }}
                    value={this.props.rowData.price}
                    onChange={this.handlePriceChange}
                />
                <R.Combobox
                    data-part="cell"
                    dataTextField="name"
                    dataValueField="value"
                    items={this.state.fruits}
                    selectedItem={this.props.rowData.selectedFruit}
                />
            </div>
        )
    }
}

export default class Datagrid extends React.Component {

    constructor(props) {
        super(props);

        this.columns = [{
            header: 'Product Name',
            width: 30
        }, {
            header: 'Price',
            width: 30
        }, {
            header: 'Fruit',
            width: 40
        }];

        this.state = {
            products: PRODUCTS
        }
    }

    render() {
        return (
            <div>
                <R.Datagrid
                    //需要设置id，用于刷新datagrid
                    id="percent-datagrid"
                    horizontal={$$.datagrid('horizontal').percent}
                    width={100}
                    items={this.state.products}
                    //复杂的参数，建议抽取一个方法进行处理
                    columns={this.columns}
                    //传递的是class名，示例中为ProductRow
                    rowTemplate={ProductRow}
                />
            </div>
        )
    }
}
