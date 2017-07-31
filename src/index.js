import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
function App(props) {
  return <h1>Hello,App</h1>;
}
function Repos(props) {
  return <h1>Hello, Repos</h1>;
}
function About(props) {
  return <h1>Hello, {props.name}</h1>;
}

ReactDOM.render((
  <Router history={hashHistory}>
  <Route path="/" component={App}/>
  <Route path="/repos" component={Repos}/>
  <Route path="/about" component={About} name="About"/>
  </Router>
), document.getElementById('root'));