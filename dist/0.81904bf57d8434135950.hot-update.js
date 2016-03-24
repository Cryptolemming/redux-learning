webpackHotUpdate(0,{

/***/ 256:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; };\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.default = undefined;\n\nvar _createClass = function () {\n\tfunction defineProperties(target, props) {\n\t\tfor (var i = 0; i < props.length; i++) {\n\t\t\tvar descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);\n\t\t}\n\t}return function (Constructor, protoProps, staticProps) {\n\t\tif (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;\n\t};\n}();\n\nvar _class;\n\nvar _react = __webpack_require__(77);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _DiggIt = __webpack_require__(257);\n\nvar _DiggIt2 = _interopRequireDefault(_DiggIt);\n\nvar _radium = __webpack_require__(258);\n\nvar _radium2 = _interopRequireDefault(_radium);\n\nfunction _interopRequireDefault(obj) {\n\treturn obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _classCallCheck(instance, Constructor) {\n\tif (!(instance instanceof Constructor)) {\n\t\tthrow new TypeError(\"Cannot call a class as a function\");\n\t}\n}\n\nfunction _possibleConstructorReturn(self, call) {\n\tif (!self) {\n\t\tthrow new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n\t}return call && ((typeof call === \"undefined\" ? \"undefined\" : _typeof(call)) === \"object\" || typeof call === \"function\") ? call : self;\n}\n\nfunction _inherits(subClass, superClass) {\n\tif (typeof superClass !== \"function\" && superClass !== null) {\n\t\tthrow new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : _typeof(superClass)));\n\t}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n}\n\nvar styles = {\n\ttodoContainer: {\n\t\tmargin: '50px',\n\t\tcolor: '#727272'\n\t},\n\ttodoText: {\n\t\tfontSize: '32px !important',\n\t\ttextAlign: 'center',\n\t\tfontStyle: 'italic',\n\t\tfontFamily: 'cursive !important'\n\t},\n\tfeatures: {\n\t\twidth: '55vw',\n\n\t\tdisplay: 'block',\n\t\tpadding: 0,\n\t\tmargin: '0 auto',\n\t\talignItems: 'center',\n\t\tbackground: 'orange'\n\t},\n\tremove: {\n\t\tfontSize: '18px',\n\t\tbackground: 'transparent',\n\t\tborder: 0,\n\t\tcolor: '#727272'\n\t},\n\tremoveLi: {\n\t\tdisplay: 'inline-block'\n\t},\n\tdiggitLi: {\n\t\tdisplay: 'inline-block'\n\t}\n\n};\n\nvar List = (0, _radium2.default)(_class = function (_Component) {\n\t_inherits(List, _Component);\n\n\tfunction List(props, context) {\n\t\t_classCallCheck(this, List);\n\n\t\treturn _possibleConstructorReturn(this, Object.getPrototypeOf(List).call(this, props, context));\n\t}\n\n\t_createClass(List, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar _this2 = this;\n\n\t\t\tvar handleListItems = this.props.items.map(function (item, index) {\n\t\t\t\treturn _react2.default.createElement('li', { key: index, style: styles.todoContainer }, _react2.default.createElement('p', { style: styles.todoText }, '\\'', item, '\\''), _react2.default.createElement('ul', { style: styles.features }, _react2.default.createElement('li', { style: styles.removeLi }, _react2.default.createElement('button', { style: styles.remove, onClick: _this2.props.remove.bind(null, index) }, 'completed ?')), _react2.default.createElement('li', { style: styles.diggitLi }, _react2.default.createElement(_DiggIt2.default, { style: styles.diggit, text: item }))));\n\t\t\t});\n\n\t\t\treturn _react2.default.createElement('ul', null, handleListItems);\n\t\t}\n\t}]);\n\n\treturn List;\n}(_react.Component)) || _class;\n\nexports.default = List;\n\nList.propTypes = {\n\titems: _react.PropTypes.array.isRequired,\n\tremove: _react.PropTypes.func.isRequired\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./diggs_it_todos/components/List.js\n ** module id = 256\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./diggs_it_todos/components/List.js?");

/***/ }

})