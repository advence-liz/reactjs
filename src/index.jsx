import React from 'react';
// require("prop-types");
//require("babel-polyfill");
import ReactDOM, { render } from 'react-dom';
import version,{log} from './log.js';
log();
console.log(version);
render((
  <h1>Hello, world!!</h1>
), document.getElementById('root'));

ReactDOM.render((
  <h1>Hello, world!!</h1>
), document.getElementById('root'));

export { log};