# webpack 编译后的代码
---
```
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.log = undefined;

var _react = __webpack_require__(82);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(98); //import ReactDOM, { render } from 'react-dom';    _reactDom 引入对象实例  esModel default 用_reactDom2.default 代表

var _reactDom2 = _interopRequireDefault(_reactDom);

var _log = __webpack_require__(184);

var _log2 = _interopRequireDefault(_log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// require("prop-types");
//require("babel-polyfill");
(0, _log.log)();
console.log(_log2.default);
(0, _reactDom.render)(_react2.default.createElement(
  'h1',
  null,
  'Hello, world!!'
), document.getElementById('root'));

_reactDom2.default.render(_react2.default.createElement(
  'h1',
  null,
  'Hello, world!!'
), document.getElementById('root'));

exports.log = _log.log;

/***/ }),
```

## 编译前
```
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
```