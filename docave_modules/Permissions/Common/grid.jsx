
function Row(props) {
    let rowStyle ={
        borderTop: `1px solid #ddd`
    }
    let rowClassName = "ca-row"
    return (<div className={rowClassName} style = {rowStyle}>
        {props.children}
    </div>);
}
function Col(props) {
    let colStyle ={

    }
    return (<div style = {colStyle}>
        {props.children}
    </div>);
}
export {Row,Col};