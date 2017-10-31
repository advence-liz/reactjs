import React from 'react';
/**
 * 每个节点都是一个tree 
 */
class Node {
    constructor() {
        this.data = null;
        this.parent = null;
        this.children = [];
    }
    /**
     * 这个递归反向感觉玩不通，反向相当于过个入口
     */
    render() {
        if (this.children.length) {
            return FancyNode(this.children);
        } else {
            return (<li key={Node.index++} >node</li>);
        }

    }
}
Node.index = 0;
/**
 * Node render 和 FancyNode 组成递归调用
 * @param {*} children 
 */
function FancyNode(children) {
    children = children.map((child) => {
        return child.render();
    });
    return (
        <ul key={`ul${FancyNode.index++}`}>
            {children}
        </ul>
    );
    // var reactElement = React.createElement(type, props, children);
    // //等价于下面两行：
    // var div = React.createFactory('div');
    // var reactDivElement = div(props, children);
}
FancyNode.index = 0;

class Tree extends React.PureComponent {
    constructor(props) {
        super(props)
        this.root = this.props.root || new Node();
    }

    render() {
      return this.root.render();
    }
}

// class tree {
//     constructor() {
//         this.root = null;
//         this.current = root;
//     }

//     insert(parent, index) {

//     }
//     postOrder(){
//         while(this.current.children.length){
//             for( let i=0;i<)
//          postOrder(this.current.children)
//         }
//         this.current.parent.components.push(this.current.render());
//     }
// }

export {Tree as default,Node};