import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Letter from 'Letter';
function click(){
  console.log("eeeeeeeee");
}

var child1 = React.createElement('li', {onClick:click}, 'First Text Content');
var child2 = React.createElement('li', null, 'Second Text Content');
var child3 = React.createElement('li', null, 'Third Text Content');
var Root = React.createElement('ul', { className: 'my-list' }, child1, child2, child3);
newFunction();
class Liz extends React.Component{
  render(){
    return (<Letter>liz</Letter>);
  } 
}

ReactDOM.render(Root, document.getElementById('root'));

function newFunction() {
  window.React = React;
}

