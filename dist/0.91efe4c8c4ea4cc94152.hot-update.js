webpackHotUpdate(0,{

/***/ 76:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _redux = __webpack_require__(77);\n\nvar reducer = function reducer() {\n\tvar state = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];\n\n\treturn state;\n};\n\n// 1) create the store\n\nvar store = (0, _redux.createStore)(reducer);\n\n// 2) get the state\n\ndocument.body.innerText = store.getState();\n\n// 3) change the state\n\ndocument.addEventListener('click', function () {\n\tstore.dispatch({ type: 'UP' });\n});\n\n/*****************\n ** WEBPACK FOOTER\n ** ./index.js\n ** module id = 76\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./index.js?");

/***/ }

})