require("./main.less");
function Row(props) {
    let rowStyle ={
      //  borderTop: `1px solid #ddd`
    }
    let rowClassName = "da-row"
    return (<div className={rowClassName} style = {rowStyle}>
        {props.children}
    </div>);
}
function Col(props) {
    let colStyle ={

    }
    let title = props.title;
    let desc = props.desc;
    return (<div style = {colStyle}>
        {title&&<h5>{title}</h5>}
        {desc&&<p>{props.desc}</p>}
        {props.children}
    </div>);
}
export {Row,Col};