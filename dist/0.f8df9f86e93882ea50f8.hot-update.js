webpackHotUpdate(0,{

/***/ 255:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; };\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () {\n\tfunction defineProperties(target, props) {\n\t\tfor (var i = 0; i < props.length; i++) {\n\t\t\tvar descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);\n\t\t}\n\t}return function (Constructor, protoProps, staticProps) {\n\t\tif (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;\n\t};\n}();\n\nvar _class;\n\nvar _react = __webpack_require__(77);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _redux = __webpack_require__(240);\n\nvar _reactRedux = __webpack_require__(234);\n\nvar _List = __webpack_require__(256);\n\nvar _List2 = _interopRequireDefault(_List);\n\nvar _AddItem = __webpack_require__(305);\n\nvar _AddItem2 = _interopRequireDefault(_AddItem);\n\nvar _todoActions = __webpack_require__(306);\n\nvar TodoActions = _interopRequireWildcard(_todoActions);\n\nvar _radium = __webpack_require__(258);\n\nvar _radium2 = _interopRequireDefault(_radium);\n\nfunction _interopRequireWildcard(obj) {\n\tif (obj && obj.__esModule) {\n\t\treturn obj;\n\t} else {\n\t\tvar newObj = {};if (obj != null) {\n\t\t\tfor (var key in obj) {\n\t\t\t\tif (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];\n\t\t\t}\n\t\t}newObj.default = obj;return newObj;\n\t}\n}\n\nfunction _interopRequireDefault(obj) {\n\treturn obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _classCallCheck(instance, Constructor) {\n\tif (!(instance instanceof Constructor)) {\n\t\tthrow new TypeError(\"Cannot call a class as a function\");\n\t}\n}\n\nfunction _possibleConstructorReturn(self, call) {\n\tif (!self) {\n\t\tthrow new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n\t}return call && ((typeof call === \"undefined\" ? \"undefined\" : _typeof(call)) === \"object\" || typeof call === \"function\") ? call : self;\n}\n\nfunction _inherits(subClass, superClass) {\n\tif (typeof superClass !== \"function\" && superClass !== null) {\n\t\tthrow new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : _typeof(superClass)));\n\t}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n}\n\nvar styles = {\n\tcontainer: {\n\t\tpadding: 0,\n\t\tmargin: 0,\n\t\twidth: '100%'\n\t},\n\tlinkContainer: {\n\t\tdisplay: 'inline-block',\n\t\tverticalAlign: 'middle',\n\t\tfontSize: '12px',\n\t\tfontStyle: 'italic',\n\t\tfloat: 'right',\n\t\tmargin: 0,\n\t\tpadding: 0\n\t},\n\theader: {\n\t\tmargin: 0,\n\t\twidth: '100%',\n\t\theight: '50vh',\n\t\tminHeight: '500px',\n\t\tbackground: '#03A9F4',\n\t\tcolor: '#B3E5FC',\n\t\ttextAlign: 'center',\n\t\tjustifyContent: 'middle'\n\t},\n\ttitle: {\n\t\tfontsize: '85px',\n\t\tpadding: '20px',\n\t\tcolor: '#FBFBFB'\n\t},\n\tdiggit: {\n\t\tbackground: '#FF4081',\n\t\tborderRadius: '50%',\n\t\tfontSize: '80px',\n\t\tpadding: '10px',\n\t\tverticalAlign: 'middle',\n\t\tcolor: '#FBFBFB',\n\t\tmargin: 0,\n\t\tborder: '5px solid #028DD1'\n\t},\n\tdivider: {\n\t\twidth: '100%',\n\t\theight: '15px',\n\t\tbackground: '#0288D1'\n\t},\n\ttodoAdd: {\n\t\tpadding: '20px',\n\t\talignItems: 'center'\n\t},\n\ttodoList: {\n\t\tpadding: '25px',\n\t\tmargin: '0 auto',\n\t\twidth: '100%',\n\t\tminWidth: '250px'\n\t},\n\tfooter: {\n\t\tbottom: 0,\n\t\tposition: 'fixed',\n\t\theight: '25px',\n\t\tbackground: '#FBFBFB'\n\t},\n\tfooterLink: {\n\t\tcolor: '#0288D1',\n\t\tfontSize: '12px',\n\t\tpadding: '15px'\n\t}\n};\n\nvar App = (0, _radium2.default)(_class = function (_Component) {\n\t_inherits(App, _Component);\n\n\tfunction App() {\n\t\t_classCallCheck(this, App);\n\n\t\treturn _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));\n\t}\n\n\t_createClass(App, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar _props = this.props;\n\t\t\tvar todos = _props.todos;\n\t\t\tvar actions = _props.actions;\n\n\t\t\treturn _react2.default.createElement('div', { style: styles.container }, _react2.default.createElement('div', { style: styles.header }, _react2.default.createElement('h1', { style: styles.title }, 'DIGG-IT'), _react2.default.createElement('i', { className: 'fa fa-check', style: styles.diggit }), _react2.default.createElement('div', { style: styles.todoAdd }, _react2.default.createElement('h3', null, 'Will your TODO earn a DIGG-IT?'), _react2.default.createElement('h3', null, 'Add one to find out'), _react2.default.createElement(_AddItem2.default, { add: actions.addItem }))), _react2.default.createElement('div', { style: styles.divider }), _react2.default.createElement('div', { style: styles.todoList }, _react2.default.createElement(_List2.default, { items: todos, remove: actions.removeItem })), _react2.default.createElement('div', { style: styles.footer }, _react2.default.createElement('a', { style: styles.footerLink, href: 'https://www.amoderndev.com' }, '© ali ayoub 2016')));\n\t\t}\n\t}]);\n\n\treturn App;\n}(_react.Component)) || _class;\n\nApp.propTypes = {\n\ttodos: _react.PropTypes.array.isRequired,\n\tactions: _react.PropTypes.object.isRequired\n};\n\nfunction mapStateToProps(state) {\n\treturn {\n\t\ttodos: state.todos\n\t};\n}\n\nfunction mapDispatchToProps(dispatch) {\n\treturn {\n\t\tactions: (0, _redux.bindActionCreators)(TodoActions, dispatch)\n\t};\n}\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);\n\n/*****************\n ** WEBPACK FOOTER\n ** ./diggs_it_todos/containers/App.js\n ** module id = 255\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./diggs_it_todos/containers/App.js?");

/***/ }

})