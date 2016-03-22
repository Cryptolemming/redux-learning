webpackHotUpdate(0,{

/***/ 76:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(77);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(233);\n\nvar _redux = __webpack_require__(234);\n\nvar _reactRedux = __webpack_require__(244);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar low = function low() {\n\tvar state = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];\n\tvar action = arguments[1];\n\n\tif (action.type === 'UP') {\n\t\treturn state + 1;\n\t}\n\treturn state;\n};\n\nvar high = function high() {\n\tvar state = arguments.length <= 0 || arguments[0] === undefined ? 9 : arguments[0];\n\tvar action = arguments[1];\n\n\tif (action.type === 'DOWN') {\n\t\treturn state - 1;\n\t}\n\treturn state;\n};\n\nvar Basement = function (_React$Component) {\n\t_inherits(Basement, _React$Component);\n\n\tfunction Basement() {\n\t\t_classCallCheck(this, Basement);\n\n\t\treturn _possibleConstructorReturn(this, Object.getPrototypeOf(Basement).apply(this, arguments));\n\t}\n\n\t_createClass(Basement, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar store = this.context.store;\n\t\t\tvar state = store.getState().high;\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\t'basement! ',\n\t\t\t\tstate,\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'button',\n\t\t\t\t\t{ onClick: function onClick() {\n\t\t\t\t\t\t\tstore.dispatch({ type: 'DOWN' });\n\t\t\t\t\t\t} },\n\t\t\t\t\t'DOWN'\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn Basement;\n}(_react2.default.Component);\n\nBasement.contextTypes = {\n\tstore: _react2.default.PropTypes.object\n};\n\nvar Middle = function (_React$Component2) {\n\t_inherits(Middle, _React$Component2);\n\n\tfunction Middle() {\n\t\t_classCallCheck(this, Middle);\n\n\t\treturn _possibleConstructorReturn(this, Object.getPrototypeOf(Middle).apply(this, arguments));\n\t}\n\n\t_createClass(Middle, [{\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\t'middle! ',\n\t\t\t\t_react2.default.createElement(Basement, null)\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn Middle;\n}(_react2.default.Component);\n\nvar TopLevel = function (_React$Component3) {\n\t_inherits(TopLevel, _React$Component3);\n\n\tfunction TopLevel() {\n\t\t_classCallCheck(this, TopLevel);\n\n\t\treturn _possibleConstructorReturn(this, Object.getPrototypeOf(TopLevel).apply(this, arguments));\n\t}\n\n\t_createClass(TopLevel, [{\n\t\tkey: 'componentDidMount',\n\t\tvalue: function componentDidMount() {\n\t\t\tvar _this4 = this;\n\n\t\t\tvar store = this.context.store;\n\t\t\tstore.subscribe(function () {\n\t\t\t\t_this4.forceUpdate();\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar store = this.context.store;\n\t\t\tvar state = store.getState().low;\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\t'top! ',\n\t\t\t\tstate,\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'button',\n\t\t\t\t\t{ onClick: function onClick() {\n\t\t\t\t\t\t\tstore.dispatch({ type: 'UP' });\n\t\t\t\t\t\t} },\n\t\t\t\t\t'UP'\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(Middle, { store: store })\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn TopLevel;\n}(_react2.default.Component);\n\n;\n\nTopLevel.contextTypes = {\n\tstore: _react2.default.PropTypes.object\n};\n\n(0, _reactDom.render)(_react2.default.createElement(\n\t_reactRedux.Provider,\n\t{ store: (0, _redux.createStore)((0, _redux.combineReducers)({ low: low, high: high })) },\n\t_react2.default.createElement(TopLevel, null)\n), document.getElementById('container'));\n\n/*****************\n ** WEBPACK FOOTER\n ** ./index.js\n ** module id = 76\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./index.js?");

/***/ },

/***/ 244:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nexports.__esModule = true;\nexports.connect = exports.Provider = undefined;\n\nvar _Provider = __webpack_require__(245);\n\nvar _Provider2 = _interopRequireDefault(_Provider);\n\nvar _connect = __webpack_require__(247);\n\nvar _connect2 = _interopRequireDefault(_connect);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nexports.Provider = _Provider2[\"default\"];\nexports.connect = _connect2[\"default\"];\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-redux/lib/index.js\n ** module id = 244\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-redux/lib/index.js?");

/***/ },

/***/ 245:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(process) {'use strict';\n\nexports.__esModule = true;\nexports[\"default\"] = undefined;\n\nvar _react = __webpack_require__(77);\n\nvar _storeShape = __webpack_require__(246);\n\nvar _storeShape2 = _interopRequireDefault(_storeShape);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar didWarnAboutReceivingStore = false;\nfunction warnAboutReceivingStore() {\n  if (didWarnAboutReceivingStore) {\n    return;\n  }\n  didWarnAboutReceivingStore = true;\n\n  /* eslint-disable no-console */\n  if (typeof console !== 'undefined' && typeof console.error === 'function') {\n    console.error('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/rackt/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');\n  }\n  /* eslint-disable no-console */\n}\n\nvar Provider = function (_Component) {\n  _inherits(Provider, _Component);\n\n  Provider.prototype.getChildContext = function getChildContext() {\n    return { store: this.store };\n  };\n\n  function Provider(props, context) {\n    _classCallCheck(this, Provider);\n\n    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));\n\n    _this.store = props.store;\n    return _this;\n  }\n\n  Provider.prototype.render = function render() {\n    var children = this.props.children;\n\n    return _react.Children.only(children);\n  };\n\n  return Provider;\n}(_react.Component);\n\nexports[\"default\"] = Provider;\n\nif (process.env.NODE_ENV !== 'production') {\n  Provider.prototype.componentWillReceiveProps = function (nextProps) {\n    var store = this.store;\n    var nextStore = nextProps.store;\n\n    if (store !== nextStore) {\n      warnAboutReceivingStore();\n    }\n  };\n}\n\nProvider.propTypes = {\n  store: _storeShape2[\"default\"].isRequired,\n  children: _react.PropTypes.element.isRequired\n};\nProvider.childContextTypes = {\n  store: _storeShape2[\"default\"].isRequired\n};\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-redux/lib/components/Provider.js\n ** module id = 245\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-redux/lib/components/Provider.js?");

/***/ },

/***/ 246:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nexports.__esModule = true;\n\nvar _react = __webpack_require__(77);\n\nexports[\"default\"] = _react.PropTypes.shape({\n  subscribe: _react.PropTypes.func.isRequired,\n  dispatch: _react.PropTypes.func.isRequired,\n  getState: _react.PropTypes.func.isRequired\n});\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-redux/lib/utils/storeShape.js\n ** module id = 246\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-redux/lib/utils/storeShape.js?");

/***/ },

/***/ 247:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(process) {'use strict';\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nexports.__esModule = true;\nexports[\"default\"] = connect;\n\nvar _react = __webpack_require__(77);\n\nvar _storeShape = __webpack_require__(246);\n\nvar _storeShape2 = _interopRequireDefault(_storeShape);\n\nvar _shallowEqual = __webpack_require__(248);\n\nvar _shallowEqual2 = _interopRequireDefault(_shallowEqual);\n\nvar _wrapActionCreators = __webpack_require__(249);\n\nvar _wrapActionCreators2 = _interopRequireDefault(_wrapActionCreators);\n\nvar _isPlainObject = __webpack_require__(250);\n\nvar _isPlainObject2 = _interopRequireDefault(_isPlainObject);\n\nvar _hoistNonReactStatics = __webpack_require__(253);\n\nvar _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);\n\nvar _invariant = __webpack_require__(254);\n\nvar _invariant2 = _interopRequireDefault(_invariant);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar defaultMapStateToProps = function defaultMapStateToProps(state) {\n  return {};\n}; // eslint-disable-line no-unused-vars\nvar defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {\n  return { dispatch: dispatch };\n};\nvar defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {\n  return _extends({}, parentProps, stateProps, dispatchProps);\n};\n\nfunction getDisplayName(WrappedComponent) {\n  return WrappedComponent.displayName || WrappedComponent.name || 'Component';\n}\n\nfunction checkStateShape(stateProps, dispatch) {\n  (0, _invariant2[\"default\"])((0, _isPlainObject2[\"default\"])(stateProps), '`%sToProps` must return an object. Instead received %s.', dispatch ? 'mapDispatch' : 'mapState', stateProps);\n  return stateProps;\n}\n\n// Helps track hot reloading.\nvar nextVersion = 0;\n\nfunction connect(mapStateToProps, mapDispatchToProps, mergeProps) {\n  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];\n\n  var shouldSubscribe = Boolean(mapStateToProps);\n  var mapState = mapStateToProps || defaultMapStateToProps;\n  var mapDispatch = (0, _isPlainObject2[\"default\"])(mapDispatchToProps) ? (0, _wrapActionCreators2[\"default\"])(mapDispatchToProps) : mapDispatchToProps || defaultMapDispatchToProps;\n\n  var finalMergeProps = mergeProps || defaultMergeProps;\n  var checkMergedEquals = finalMergeProps !== defaultMergeProps;\n  var _options$pure = options.pure;\n  var pure = _options$pure === undefined ? true : _options$pure;\n  var _options$withRef = options.withRef;\n  var withRef = _options$withRef === undefined ? false : _options$withRef;\n\n  // Helps track hot reloading.\n\n  var version = nextVersion++;\n\n  function computeMergedProps(stateProps, dispatchProps, parentProps) {\n    var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);\n    (0, _invariant2[\"default\"])((0, _isPlainObject2[\"default\"])(mergedProps), '`mergeProps` must return an object. Instead received %s.', mergedProps);\n    return mergedProps;\n  }\n\n  return function wrapWithConnect(WrappedComponent) {\n    var Connect = function (_Component) {\n      _inherits(Connect, _Component);\n\n      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {\n        return !pure || this.haveOwnPropsChanged || this.hasStoreStateChanged;\n      };\n\n      function Connect(props, context) {\n        _classCallCheck(this, Connect);\n\n        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));\n\n        _this.version = version;\n        _this.store = props.store || context.store;\n\n        (0, _invariant2[\"default\"])(_this.store, 'Could not find \"store\" in either the context or ' + ('props of \"' + _this.constructor.displayName + '\". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass \"store\" as a prop to \"' + _this.constructor.displayName + '\".'));\n\n        var storeState = _this.store.getState();\n        _this.state = { storeState: storeState };\n        _this.clearCache();\n        return _this;\n      }\n\n      Connect.prototype.computeStateProps = function computeStateProps(store, props) {\n        if (!this.finalMapStateToProps) {\n          return this.configureFinalMapState(store, props);\n        }\n\n        var state = store.getState();\n        var stateProps = this.doStatePropsDependOnOwnProps ? this.finalMapStateToProps(state, props) : this.finalMapStateToProps(state);\n\n        return checkStateShape(stateProps);\n      };\n\n      Connect.prototype.configureFinalMapState = function configureFinalMapState(store, props) {\n        var mappedState = mapState(store.getState(), props);\n        var isFactory = typeof mappedState === 'function';\n\n        this.finalMapStateToProps = isFactory ? mappedState : mapState;\n        this.doStatePropsDependOnOwnProps = this.finalMapStateToProps.length !== 1;\n\n        return isFactory ? this.computeStateProps(store, props) : checkStateShape(mappedState);\n      };\n\n      Connect.prototype.computeDispatchProps = function computeDispatchProps(store, props) {\n        if (!this.finalMapDispatchToProps) {\n          return this.configureFinalMapDispatch(store, props);\n        }\n\n        var dispatch = store.dispatch;\n\n        var dispatchProps = this.doDispatchPropsDependOnOwnProps ? this.finalMapDispatchToProps(dispatch, props) : this.finalMapDispatchToProps(dispatch);\n\n        return checkStateShape(dispatchProps, true);\n      };\n\n      Connect.prototype.configureFinalMapDispatch = function configureFinalMapDispatch(store, props) {\n        var mappedDispatch = mapDispatch(store.dispatch, props);\n        var isFactory = typeof mappedDispatch === 'function';\n\n        this.finalMapDispatchToProps = isFactory ? mappedDispatch : mapDispatch;\n        this.doDispatchPropsDependOnOwnProps = this.finalMapDispatchToProps.length !== 1;\n\n        return isFactory ? this.computeDispatchProps(store, props) : checkStateShape(mappedDispatch, true);\n      };\n\n      Connect.prototype.updateStatePropsIfNeeded = function updateStatePropsIfNeeded() {\n        var nextStateProps = this.computeStateProps(this.store, this.props);\n        if (this.stateProps && (0, _shallowEqual2[\"default\"])(nextStateProps, this.stateProps)) {\n          return false;\n        }\n\n        this.stateProps = nextStateProps;\n        return true;\n      };\n\n      Connect.prototype.updateDispatchPropsIfNeeded = function updateDispatchPropsIfNeeded() {\n        var nextDispatchProps = this.computeDispatchProps(this.store, this.props);\n        if (this.dispatchProps && (0, _shallowEqual2[\"default\"])(nextDispatchProps, this.dispatchProps)) {\n          return false;\n        }\n\n        this.dispatchProps = nextDispatchProps;\n        return true;\n      };\n\n      Connect.prototype.updateMergedPropsIfNeeded = function updateMergedPropsIfNeeded() {\n        var nextMergedProps = computeMergedProps(this.stateProps, this.dispatchProps, this.props);\n        if (this.mergedProps && checkMergedEquals && (0, _shallowEqual2[\"default\"])(nextMergedProps, this.mergedProps)) {\n          return false;\n        }\n\n        this.mergedProps = nextMergedProps;\n        return true;\n      };\n\n      Connect.prototype.isSubscribed = function isSubscribed() {\n        return typeof this.unsubscribe === 'function';\n      };\n\n      Connect.prototype.trySubscribe = function trySubscribe() {\n        if (shouldSubscribe && !this.unsubscribe) {\n          this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));\n          this.handleChange();\n        }\n      };\n\n      Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {\n        if (this.unsubscribe) {\n          this.unsubscribe();\n          this.unsubscribe = null;\n        }\n      };\n\n      Connect.prototype.componentDidMount = function componentDidMount() {\n        this.trySubscribe();\n      };\n\n      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {\n        if (!pure || !(0, _shallowEqual2[\"default\"])(nextProps, this.props)) {\n          this.haveOwnPropsChanged = true;\n        }\n      };\n\n      Connect.prototype.componentWillUnmount = function componentWillUnmount() {\n        this.tryUnsubscribe();\n        this.clearCache();\n      };\n\n      Connect.prototype.clearCache = function clearCache() {\n        this.dispatchProps = null;\n        this.stateProps = null;\n        this.mergedProps = null;\n        this.haveOwnPropsChanged = true;\n        this.hasStoreStateChanged = true;\n        this.renderedElement = null;\n        this.finalMapDispatchToProps = null;\n        this.finalMapStateToProps = null;\n      };\n\n      Connect.prototype.handleChange = function handleChange() {\n        if (!this.unsubscribe) {\n          return;\n        }\n\n        var prevStoreState = this.state.storeState;\n        var storeState = this.store.getState();\n\n        if (!pure || prevStoreState !== storeState) {\n          this.hasStoreStateChanged = true;\n          this.setState({ storeState: storeState });\n        }\n      };\n\n      Connect.prototype.getWrappedInstance = function getWrappedInstance() {\n        (0, _invariant2[\"default\"])(withRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the fourth argument of the connect() call.');\n\n        return this.refs.wrappedInstance;\n      };\n\n      Connect.prototype.render = function render() {\n        var haveOwnPropsChanged = this.haveOwnPropsChanged;\n        var hasStoreStateChanged = this.hasStoreStateChanged;\n        var renderedElement = this.renderedElement;\n\n        this.haveOwnPropsChanged = false;\n        this.hasStoreStateChanged = false;\n\n        var shouldUpdateStateProps = true;\n        var shouldUpdateDispatchProps = true;\n        if (pure && renderedElement) {\n          shouldUpdateStateProps = hasStoreStateChanged || haveOwnPropsChanged && this.doStatePropsDependOnOwnProps;\n          shouldUpdateDispatchProps = haveOwnPropsChanged && this.doDispatchPropsDependOnOwnProps;\n        }\n\n        var haveStatePropsChanged = false;\n        var haveDispatchPropsChanged = false;\n        if (shouldUpdateStateProps) {\n          haveStatePropsChanged = this.updateStatePropsIfNeeded();\n        }\n        if (shouldUpdateDispatchProps) {\n          haveDispatchPropsChanged = this.updateDispatchPropsIfNeeded();\n        }\n\n        var haveMergedPropsChanged = true;\n        if (haveStatePropsChanged || haveDispatchPropsChanged || haveOwnPropsChanged) {\n          haveMergedPropsChanged = this.updateMergedPropsIfNeeded();\n        } else {\n          haveMergedPropsChanged = false;\n        }\n\n        if (!haveMergedPropsChanged && renderedElement) {\n          return renderedElement;\n        }\n\n        if (withRef) {\n          this.renderedElement = (0, _react.createElement)(WrappedComponent, _extends({}, this.mergedProps, {\n            ref: 'wrappedInstance'\n          }));\n        } else {\n          this.renderedElement = (0, _react.createElement)(WrappedComponent, this.mergedProps);\n        }\n\n        return this.renderedElement;\n      };\n\n      return Connect;\n    }(_react.Component);\n\n    Connect.displayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';\n    Connect.WrappedComponent = WrappedComponent;\n    Connect.contextTypes = {\n      store: _storeShape2[\"default\"]\n    };\n    Connect.propTypes = {\n      store: _storeShape2[\"default\"]\n    };\n\n    if (process.env.NODE_ENV !== 'production') {\n      Connect.prototype.componentWillUpdate = function componentWillUpdate() {\n        if (this.version === version) {\n          return;\n        }\n\n        // We are hot reloading!\n        this.version = version;\n        this.trySubscribe();\n        this.clearCache();\n      };\n    }\n\n    return (0, _hoistNonReactStatics2[\"default\"])(Connect, WrappedComponent);\n  };\n}\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-redux/lib/components/connect.js\n ** module id = 247\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-redux/lib/components/connect.js?");

/***/ },

/***/ 248:
/***/ function(module, exports) {

	eval("\"use strict\";\n\nexports.__esModule = true;\nexports[\"default\"] = shallowEqual;\nfunction shallowEqual(objA, objB) {\n  if (objA === objB) {\n    return true;\n  }\n\n  var keysA = Object.keys(objA);\n  var keysB = Object.keys(objB);\n\n  if (keysA.length !== keysB.length) {\n    return false;\n  }\n\n  // Test for A's keys different from B.\n  var hasOwn = Object.prototype.hasOwnProperty;\n  for (var i = 0; i < keysA.length; i++) {\n    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {\n      return false;\n    }\n  }\n\n  return true;\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-redux/lib/utils/shallowEqual.js\n ** module id = 248\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-redux/lib/utils/shallowEqual.js?");

/***/ },

/***/ 249:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nexports.__esModule = true;\nexports[\"default\"] = wrapActionCreators;\n\nvar _redux = __webpack_require__(234);\n\nfunction wrapActionCreators(actionCreators) {\n  return function (dispatch) {\n    return (0, _redux.bindActionCreators)(actionCreators, dispatch);\n  };\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-redux/lib/utils/wrapActionCreators.js\n ** module id = 249\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-redux/lib/utils/wrapActionCreators.js?");

/***/ },

/***/ 250:
/***/ function(module, exports, __webpack_require__) {

	eval("var isHostObject = __webpack_require__(251),\n    isObjectLike = __webpack_require__(252);\n\n/** `Object#toString` result references. */\nvar objectTag = '[object Object]';\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to resolve the decompiled source of functions. */\nvar funcToString = Function.prototype.toString;\n\n/** Used to infer the `Object` constructor. */\nvar objectCtorString = funcToString.call(Object);\n\n/**\n * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar objectToString = objectProto.toString;\n\n/** Built-in value references. */\nvar getPrototypeOf = Object.getPrototypeOf;\n\n/**\n * Checks if `value` is a plain object, that is, an object created by the\n * `Object` constructor or one with a `[[Prototype]]` of `null`.\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.\n * @example\n *\n * function Foo() {\n *   this.a = 1;\n * }\n *\n * _.isPlainObject(new Foo);\n * // => false\n *\n * _.isPlainObject([1, 2, 3]);\n * // => false\n *\n * _.isPlainObject({ 'x': 0, 'y': 0 });\n * // => true\n *\n * _.isPlainObject(Object.create(null));\n * // => true\n */\nfunction isPlainObject(value) {\n  if (!isObjectLike(value) ||\n      objectToString.call(value) != objectTag || isHostObject(value)) {\n    return false;\n  }\n  var proto = getPrototypeOf(value);\n  if (proto === null) {\n    return true;\n  }\n  var Ctor = proto.constructor;\n  return (typeof Ctor == 'function' &&\n    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);\n}\n\nmodule.exports = isPlainObject;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-redux/~/lodash/isPlainObject.js\n ** module id = 250\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-redux/~/lodash/isPlainObject.js?");

/***/ },

/***/ 251:
/***/ function(module, exports) {

	eval("/**\n * Checks if `value` is a host object in IE < 9.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a host object, else `false`.\n */\nfunction isHostObject(value) {\n  // Many host objects are `Object` objects that can coerce to strings\n  // despite having improperly defined `toString` methods.\n  var result = false;\n  if (value != null && typeof value.toString != 'function') {\n    try {\n      result = !!(value + '');\n    } catch (e) {}\n  }\n  return result;\n}\n\nmodule.exports = isHostObject;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-redux/~/lodash/_isHostObject.js\n ** module id = 251\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-redux/~/lodash/_isHostObject.js?");

/***/ },

/***/ 252:
/***/ function(module, exports) {

	eval("/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return !!value && typeof value == 'object';\n}\n\nmodule.exports = isObjectLike;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-redux/~/lodash/isObjectLike.js\n ** module id = 252\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-redux/~/lodash/isObjectLike.js?");

/***/ },

/***/ 253:
/***/ function(module, exports) {

	eval("/**\n * Copyright 2015, Yahoo! Inc.\n * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.\n */\n'use strict';\n\nvar REACT_STATICS = {\n    childContextTypes: true,\n    contextTypes: true,\n    defaultProps: true,\n    displayName: true,\n    getDefaultProps: true,\n    mixins: true,\n    propTypes: true,\n    type: true\n};\n\nvar KNOWN_STATICS = {\n    name: true,\n    length: true,\n    prototype: true,\n    caller: true,\n    arguments: true,\n    arity: true\n};\n\nmodule.exports = function hoistNonReactStatics(targetComponent, sourceComponent) {\n    var keys = Object.getOwnPropertyNames(sourceComponent);\n    for (var i=0; i<keys.length; ++i) {\n        if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]]) {\n            try {\n                targetComponent[keys[i]] = sourceComponent[keys[i]];\n            } catch (error) {\n\n            }\n        }\n    }\n\n    return targetComponent;\n};\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-redux/~/hoist-non-react-statics/index.js\n ** module id = 253\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-redux/~/hoist-non-react-statics/index.js?");

/***/ },

/***/ 254:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(process) {/**\n * Copyright 2013-2015, Facebook, Inc.\n * All rights reserved.\n *\n * This source code is licensed under the BSD-style license found in the\n * LICENSE file in the root directory of this source tree. An additional grant\n * of patent rights can be found in the PATENTS file in the same directory.\n */\n\n'use strict';\n\n/**\n * Use invariant() to assert state which your program assumes to be true.\n *\n * Provide sprintf-style format (only %s is supported) and arguments\n * to provide information about what broke and what you were\n * expecting.\n *\n * The invariant message will be stripped in production, but the invariant\n * will remain to ensure logic does not differ in production.\n */\n\nvar invariant = function(condition, format, a, b, c, d, e, f) {\n  if (process.env.NODE_ENV !== 'production') {\n    if (format === undefined) {\n      throw new Error('invariant requires an error message argument');\n    }\n  }\n\n  if (!condition) {\n    var error;\n    if (format === undefined) {\n      error = new Error(\n        'Minified exception occurred; use the non-minified dev environment ' +\n        'for the full error message and additional helpful warnings.'\n      );\n    } else {\n      var args = [a, b, c, d, e, f];\n      var argIndex = 0;\n      error = new Error(\n        format.replace(/%s/g, function() { return args[argIndex++]; })\n      );\n      error.name = 'Invariant Violation';\n    }\n\n    error.framesToPop = 1; // we don't care about invariant's own frame\n    throw error;\n  }\n};\n\nmodule.exports = invariant;\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/react-redux/~/invariant/browser.js\n ** module id = 254\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/react-redux/~/invariant/browser.js?");

/***/ }

})