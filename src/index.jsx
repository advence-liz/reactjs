import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Tree ,{Node} from './component/tree';
let node = new Node();
node.children.push(new Node());
node.children.push(new Node());
node.children.push(new Node());
node.children.push(new Node());
node.children.push(new Node());
let childNode = new Node();
childNode.children.push(new Node());
childNode.children.push(new Node());
childNode.children.push(new Node());
childNode.children.push(new Node());
childNode.children.push(new Node());
node.children.push(childNode);
ReactDOM.render((
  <div>
     <h1>Hello, world!!</h1>
     <Tree root={node} />
  </div>
 
), document.getElementById('root'));

