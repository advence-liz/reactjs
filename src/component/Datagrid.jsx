

/**
 * 使用Datagrid需要自定义航模版类，该类继承R.DatagridRow
 */
class DeleteContentRow extends R.DatagridRow {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div data-part="row">
                <div data-part="cell">{this.props.rowData.ID}</div>
                <div data-part="cell">{this.props.rowData.Name}</div>
                <div data-part="cell">{this.props.rowData.Name}</div>
            </div>
        )
    }
}



class DeleteContent extends React.Component {
    constructor(props) {
        super(props)
        let items = [];
        for (let i = 0; i < 10; i++) {
            items.push({
                Name: `file${i}`,
                ID: i
            })
        }
        this.state = {
            items: items
        }

        this.columns = [
            {
                header: 'ID',
                width: 30
            },
            {
                header: 'File Name',
                width: 30
            },
            {
                header: '',
                width: 40
            }
        ];
        this.onPageClick
    }
    render() {
        return (
            <div>
                <R.Datagrid
                    //需要设置id，用于刷新datagrid
                    id="delete-content-datagrid"
                    horizontal={$$.datagrid('horizontal').percent}
                    width={100}
                    items={this.state.items}
                    //复杂的参数，建议抽取一个方法进行处理
                    columns={this.columns}
                    //传递的是class名，示例中为ProductRow
                    rowTemplate={DeleteContentRow}
                />
                <R.Pager
                    pageSize={15}
                    pageCount={1}
                    pageIndex={1}
                    onClick={this.onPageClick}
                />
            </div>


        )
    }
}
export default DeleteContent