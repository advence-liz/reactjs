
"use strict";


var _createClass = function () {
    function defineProperties(target, props) 
  
    { 
      for (var i = 0; i < props.length; i++) 
      { 
        var descriptor = props[i]; 
        descriptor.enumerable = descriptor.enumerable || false;
         descriptor.configurable = true; 
         if ("value" in descriptor) descriptor.writable = true; 
         Object.defineProperty(target, descriptor.key, descriptor);
         } 
    } 
    return function (Constructor, protoProps, staticProps)
     {
        if (protoProps) 
        defineProperties(Constructor.prototype, protoProps); 
      if (staticProps)
       defineProperties(Constructor, staticProps); 
      return Constructor; }; 
    }();
  
  

var _react = __webpack_require__(85);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(186);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Letter = __webpack_require__(272);

var _Letter2 = _interopRequireDefault(_Letter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) 
{ if (!self) 
    { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } 
    return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass)
 { if (typeof superClass !== "function" && superClass !== null) 
 { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); 
  if (superClass) 
  Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
 }

function click() {
  console.log("eeeeeeeee");
}

var child1 = _react2.default.createElement('li', { onClick: click }, 'First Text Content');
var child2 = _react2.default.createElement('li', null, 'Second Text Content');
var child3 = _react2.default.createElement('li', null, 'Third Text Content');
var Root = _react2.default.createElement('ul', { className: 'my-list' }, child1, child2, child3);

var Liz = function (_React$Component) {
  _inherits(Liz, _React$Component);

  function Liz() {
    _classCallCheck(this, Liz);

    return _possibleConstructorReturn(this, (Liz.__proto__ || Object.getPrototypeOf(Liz)).apply(this, arguments));
  }

  _createClass(Liz, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Letter2.default,
        null,
        'liz'
      );
    }
  }]);

  return Liz;
}(_react2.default.Component);

_reactDom2.default.render(Root, document.getElementById('root'));
