/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';

	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	var _path = __webpack_require__(2);

	var _path2 = _interopRequireDefault(_path);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _public = __webpack_require__(4);

	var _public2 = _interopRequireDefault(_public);

	var _Mailing = __webpack_require__(23);

	var _Mailing2 = _interopRequireDefault(_Mailing);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var app = (0, _express2.default)(); /**
	                                     * Created by programer on 2/3/17.
	                                     */


	app.use(_express2.default.static(_path2.default.join(__dirname + 'public')));
	app.set('view engine', 'ejs');
	app.set('views', _path2.default.join(__dirname + 'views'));

	app.use('/', _public2.default);

	app.use('/mail', _Mailing2.default);

	app.listen(3000);
	/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(5);

	var _server2 = _interopRequireDefault(_server);

	var _reactRouter = __webpack_require__(6);

	var _MainComponent = __webpack_require__(7);

	var _MainComponent2 = _interopRequireDefault(_MainComponent);

	var _HomeComponent = __webpack_require__(9);

	var _HomeComponent2 = _interopRequireDefault(_HomeComponent);

	var _ProfileComponent = __webpack_require__(13);

	var _ProfileComponent2 = _interopRequireDefault(_ProfileComponent);

	var _PestsComponent = __webpack_require__(14);

	var _PestsComponent2 = _interopRequireDefault(_PestsComponent);

	var _ServiceComponent = __webpack_require__(16);

	var _ServiceComponent2 = _interopRequireDefault(_ServiceComponent);

	var _ContactComponent = __webpack_require__(17);

	var _ContactComponent2 = _interopRequireDefault(_ContactComponent);

	var _PestComponent = __webpack_require__(18);

	var _PestComponent2 = _interopRequireDefault(_PestComponent);

	var _reactRedux = __webpack_require__(15);

	var _redux = __webpack_require__(19);

	var _index = __webpack_require__(20);

	var _index2 = _interopRequireDefault(_index);

	var _ReactRoutes = __webpack_require__(22);

	var _ReactRoutes2 = _interopRequireDefault(_ReactRoutes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by programer on 4/6/17.
	 */

	var Router = _express2.default.Router();

	Router.get("*", function (req, res) {

	    (0, _reactRouter.match)({ routes: _ReactRoutes2.default, location: req.url }, function (err, redirect, props) {

	        if (props) {
	            var store = (0, _redux.createStore)(_index2.default);

	            var preloadedState = store.getState();

	            var html = _server2.default.renderToString(_react2.default.createElement(
	                _reactRedux.Provider,
	                { store: store },
	                _react2.default.createElement(_reactRouter.RouterContext, props)
	            ));
	            res.render('index', { app: html, preloadedState: preloadedState });
	        } else {
	            res.status(404).send("Not found");
	        }
	    });
	});

	module.exports = Router;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _NavigationComponent = __webpack_require__(8);

	var _NavigationComponent2 = _interopRequireDefault(_NavigationComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MainComponent = function (_React$Component) {
	    _inherits(MainComponent, _React$Component);

	    function MainComponent() {
	        _classCallCheck(this, MainComponent);

	        return _possibleConstructorReturn(this, (MainComponent.__proto__ || Object.getPrototypeOf(MainComponent)).call(this));
	    }

	    _createClass(MainComponent, [{
	        key: 'render',
	        value: function render() {

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    { className: 'main' },
	                    _react2.default.createElement(
	                        'section',
	                        { className: 'body' },
	                        _react2.default.createElement(_NavigationComponent2.default, null),
	                        _react2.default.createElement(
	                            'section',
	                            null,
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'container' },
	                                this.props.children
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return MainComponent;
	}(_react2.default.Component);

	exports.default = MainComponent;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by programer on 3/31/17.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var NavigationComponent = function (_React$Component) {
	    _inherits(NavigationComponent, _React$Component);

	    function NavigationComponent() {
	        _classCallCheck(this, NavigationComponent);

	        return _possibleConstructorReturn(this, (NavigationComponent.__proto__ || Object.getPrototypeOf(NavigationComponent)).call(this));
	    }

	    _createClass(NavigationComponent, [{
	        key: 'render',
	        value: function render() {

	            return _react2.default.createElement(
	                'nav',
	                { className: 'navbar fixed-bottom navbar-toggleable-md navbar-inverse bg-inverse' },
	                _react2.default.createElement(
	                    'button',
	                    { className: 'navbar-toggler navbar-toggler-right', type: 'button', 'data-toggle': 'collapse', 'data-target': '#navbarExample', 'aria-controls': 'navbarExample', 'aria-expanded': 'false', 'aria-label': 'Toggle navigation' },
	                    _react2.default.createElement('span', { className: 'navbar-toggler-icon' })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'container' },
	                    _react2.default.createElement(
	                        'a',
	                        { className: 'navbar-brand', href: '#' },
	                        'AJ Investment'
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'collapse navbar-collapse', id: 'navbarExample' },
	                        _react2.default.createElement(
	                            'ul',
	                            { className: 'navbar-nav ml-auto' },
	                            _react2.default.createElement(
	                                _reactRouter.Link,
	                                { to: '/', className: 'nav-item active' },
	                                _react2.default.createElement(
	                                    'span',
	                                    { className: 'nav-link', href: '#' },
	                                    'Home ',
	                                    _react2.default.createElement(
	                                        'span',
	                                        { className: 'sr-only' },
	                                        '(current)'
	                                    )
	                                )
	                            ),
	                            _react2.default.createElement(
	                                _reactRouter.Link,
	                                { to: '/about', className: 'nav-item' },
	                                _react2.default.createElement(
	                                    'span',
	                                    { className: 'nav-link', href: '#' },
	                                    'About'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                _reactRouter.Link,
	                                { to: '/pests', className: 'nav-item' },
	                                _react2.default.createElement(
	                                    'span',
	                                    { className: 'nav-link', href: '#' },
	                                    'Pests'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                _reactRouter.Link,
	                                { to: '/services', className: 'nav-item' },
	                                _react2.default.createElement(
	                                    'span',
	                                    { className: 'nav-link', href: '#' },
	                                    'Services'
	                                )
	                            ),
	                            _react2.default.createElement(
	                                _reactRouter.Link,
	                                { to: '/contacts', className: 'nav-item' },
	                                _react2.default.createElement(
	                                    'span',
	                                    { className: 'nav-link', href: '#' },
	                                    'Contact'
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return NavigationComponent;
	}(_react2.default.Component);

	exports.default = NavigationComponent;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _PestsSliderComponent = __webpack_require__(10);

	var _PestsSliderComponent2 = _interopRequireDefault(_PestsSliderComponent);

	var _CarouselComponent = __webpack_require__(12);

	var _CarouselComponent2 = _interopRequireDefault(_CarouselComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by programer on 3/31/17.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var HomeComponent = function (_React$Component) {
	    _inherits(HomeComponent, _React$Component);

	    function HomeComponent() {
	        _classCallCheck(this, HomeComponent);

	        return _possibleConstructorReturn(this, (HomeComponent.__proto__ || Object.getPrototypeOf(HomeComponent)).call(this));
	    }

	    _createClass(HomeComponent, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {}
	    }, {
	        key: 'render',
	        value: function render() {

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-lg-6', style: { color: '#ffffff' } },
	                        _react2.default.createElement(
	                            'a',
	                            { className: 'navbar-brand', href: '#' },
	                            _react2.default.createElement('img', { src: 'images/logo.png', width: 94, height: 88 })
	                        ),
	                        _react2.default.createElement(
	                            'h1',
	                            { className: 'mt-5' },
	                            _react2.default.createElement(
	                                'span',
	                                { className: 'firstcharacter' },
	                                'AJ.M'
	                            ),
	                            ' Investment & General Pest Control LTD'
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            { className: 'text-center' },
	                            'Pest control treatment against cockroaches, rodents, bees, flies, mosquitoes, snakes, bed bugs and ticks Sale of public health pesticides and agrochemicals Sale of personal protective/safety equipment and application equipment'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-lg-6' },
	                        _react2.default.createElement(_CarouselComponent2.default, null)
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-lg-12' },
	                        _react2.default.createElement(_PestsSliderComponent2.default, null)
	                    )
	                )
	            );
	        }
	    }]);

	    return HomeComponent;
	}(_react2.default.Component);

	exports.default = HomeComponent;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactSlick = __webpack_require__(11);

	var _reactSlick2 = _interopRequireDefault(_reactSlick);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by programer on 4/1/17.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var PestsSliderComponent = function (_React$Component) {
	    _inherits(PestsSliderComponent, _React$Component);

	    function PestsSliderComponent() {
	        _classCallCheck(this, PestsSliderComponent);

	        return _possibleConstructorReturn(this, (PestsSliderComponent.__proto__ || Object.getPrototypeOf(PestsSliderComponent)).call(this));
	    }

	    _createClass(PestsSliderComponent, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'row pestsSlider' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'container' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'row pestsheader' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'col-12 dd text-center' },
	                            _react2.default.createElement(
	                                'span',
	                                { className: '' },
	                                'Some Destructive Pests We deal With'
	                            )
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col' },
	                        _react2.default.createElement('img', { src: 'images/pest1.png' }),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'caption' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'txt1' },
	                                'wasps'
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'txt2' },
	                                'A wasp is any insect of the order Hymenoptera and suborder Apocrita.'
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col' },
	                        _react2.default.createElement('img', { src: 'images/pest2.png' }),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'caption' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'txt1' },
	                                'Flies'
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'txt2' },
	                                'True flies are insects of the order Diptera'
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col' },
	                        _react2.default.createElement('img', { src: 'images/pest3.png' }),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'caption' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'txt1' },
	                                'cockroaches'
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'txt2' },
	                                'Cockroaches are insects of the order Blattodea'
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col' },
	                        _react2.default.createElement('img', { src: 'images/pest4.png' }),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'caption' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'txt1' },
	                                'fleas'
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'txt2' },
	                                'Fleas are small flightless insects that form the order Siphonaptera'
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col' },
	                        _react2.default.createElement('img', { src: 'images/pest5.png' }),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'caption' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'txt1' },
	                                'spiders'
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'txt2' },
	                                'Spiders (order Araneae) are air-breathing arthropods'
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col' },
	                        _react2.default.createElement('img', { src: 'images/pest6.png' }),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'caption' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'txt1' },
	                                'rats'
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'txt2' },
	                                'Rats are various medium-sized, long-tailed rodents of the superfamily Muroidea.'
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return PestsSliderComponent;
	}(_react2.default.Component);

	exports.default = PestsSliderComponent;

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("react-slick");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by programer on 3/31/17.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var CarouselComponent = function (_React$Component) {
	    _inherits(CarouselComponent, _React$Component);

	    function CarouselComponent() {
	        _classCallCheck(this, CarouselComponent);

	        return _possibleConstructorReturn(this, (CarouselComponent.__proto__ || Object.getPrototypeOf(CarouselComponent)).call(this));
	    }

	    _createClass(CarouselComponent, [{
	        key: "render",
	        value: function render() {

	            return _react2.default.createElement(
	                "div",
	                { id: "carousel", className: "carousel slide", "data-ride": "carousel" },
	                _react2.default.createElement(
	                    "ol",
	                    { className: "carousel-indicators" },
	                    _react2.default.createElement("li", { "data-target": "#carousel-example-generic", "data-slide-to": 0, className: "active" }),
	                    _react2.default.createElement("li", { "data-target": "#carousel-example-generic", "data-slide-to": 1 }),
	                    _react2.default.createElement("li", { "data-target": "#carousel-example-generic", "data-slide-to": 2 })
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { className: "carousel-inner", role: "listbox" },
	                    _react2.default.createElement(
	                        "div",
	                        { className: "carousel-item active" },
	                        _react2.default.createElement("img", { src: "images/danaus-1188361_1280compressed.jpg", alt: "First slide", height: 300, width: 700 }),
	                        _react2.default.createElement(
	                            "div",
	                            { className: "carousel-caption d-none d-md-block" },
	                            _react2.default.createElement(
	                                "h3",
	                                null,
	                                "Larvae one of the destcructive plant pests that we deal with"
	                            ),
	                            _react2.default.createElement(
	                                "p",
	                                null,
	                                "Call us and lets clear your problem"
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { className: "carousel-item" },
	                        _react2.default.createElement("img", { src: "images/fruit-flies-520905_1280compressed.jpg", alt: "Second slide", height: 300, width: 700 }),
	                        _react2.default.createElement(
	                            "div",
	                            { className: "carousel-caption d-none d-md-block" },
	                            _react2.default.createElement(
	                                "h3",
	                                null,
	                                "FruitFlies Destroying Plant fruit  "
	                            ),
	                            _react2.default.createElement(
	                                "p",
	                                null,
	                                "With us there this problem will be a thing of the past"
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { className: "carousel-item" },
	                        _react2.default.createElement("img", { src: "images/housefly-1122462_1280compressed.jpg", alt: "Third slide", height: 300, width: 700 }),
	                        _react2.default.createElement(
	                            "div",
	                            { className: "carousel-caption d-none d-md-block" },
	                            _react2.default.createElement(
	                                "h3",
	                                null,
	                                "Tsetse Flies Are Both harmful to humans and livestock"
	                            ),
	                            _react2.default.createElement(
	                                "p",
	                                null,
	                                "No worries we deal with these too"
	                            )
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    "a",
	                    { className: "left carousel-control", href: "#carousel-example-generic", role: "button", "data-slide": "prev" },
	                    _react2.default.createElement("span", { className: "icon-prev", "aria-hidden": "true" }),
	                    _react2.default.createElement(
	                        "span",
	                        { className: "sr-only" },
	                        "Previous"
	                    )
	                ),
	                _react2.default.createElement(
	                    "a",
	                    { className: "right carousel-control", href: "#carousel-example-generic", role: "button", "data-slide": "next" },
	                    _react2.default.createElement("span", { className: "icon-next", "aria-hidden": "true" }),
	                    _react2.default.createElement(
	                        "span",
	                        { className: "sr-only" },
	                        "Next"
	                    )
	                )
	            );
	        }
	    }]);

	    return CarouselComponent;
	}(_react2.default.Component);

	exports.default = CarouselComponent;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ProfileComponent = function (_React$Component) {
	    _inherits(ProfileComponent, _React$Component);

	    function ProfileComponent() {
	        _classCallCheck(this, ProfileComponent);

	        return _possibleConstructorReturn(this, (ProfileComponent.__proto__ || Object.getPrototypeOf(ProfileComponent)).call(this));
	    }

	    _createClass(ProfileComponent, [{
	        key: "render",
	        value: function render() {

	            return _react2.default.createElement(
	                "div",
	                null,
	                _react2.default.createElement(
	                    "div",
	                    { className: "row" },
	                    _react2.default.createElement(
	                        "div",
	                        { className: "col" },
	                        _react2.default.createElement(
	                            "div",
	                            { className: "row" },
	                            _react2.default.createElement(
	                                "div",
	                                { className: "col-lg-12" },
	                                _react2.default.createElement(
	                                    "a",
	                                    { className: "navbar-brand", href: "#" },
	                                    _react2.default.createElement("img", { src: "images/logo.png", width: 94, height: 88 })
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            { className: "row prevention" },
	                            _react2.default.createElement(
	                                "div",
	                                { className: "col-lg-12" },
	                                _react2.default.createElement("img", { src: "images/prevention.jpg", className: "img-thumbnail" })
	                            )
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { className: "col about" },
	                        _react2.default.createElement(
	                            "p",
	                            null,
	                            "AJ MABAO INVESTMENT & GENERAL PEST CONTROL LTD is a registered company in the United Republic of Tanzania. We deal with malaria vectors and other pests control and related services. We are a progressive dynamic company that always seeks to improve and progress. We constantly adapt and realign to;"
	                        ),
	                        _react2.default.createElement(
	                            "ul",
	                            null,
	                            _react2.default.createElement(
	                                "li",
	                                null,
	                                "Your current and future needs"
	                            ),
	                            _react2.default.createElement(
	                                "li",
	                                null,
	                                "New chemical and environmental protocols, laws and regulations"
	                            ),
	                            _react2.default.createElement(
	                                "li",
	                                null,
	                                "Technology and chemicals innovation"
	                            ),
	                            _react2.default.createElement(
	                                "li",
	                                null,
	                                "Market needs and market players"
	                            )
	                        ),
	                        _react2.default.createElement(
	                            "p",
	                            null,
	                            "We hope that through self regulation, we will pioneer high professionalism in this industry. This will increase confidence and better perception from the public. To us, customer service delivery entails careful design and execution of a whole system of activities that include good organization, advanced technology and highly trained staff."
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return ProfileComponent;
	}(_react2.default.Component);

	exports.default = ProfileComponent;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(15);

	var _reactRouter = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by programer on 4/2/17.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var PestsComponent = function (_React$Component) {
	    _inherits(PestsComponent, _React$Component);

	    function PestsComponent() {
	        _classCallCheck(this, PestsComponent);

	        var _this = _possibleConstructorReturn(this, (PestsComponent.__proto__ || Object.getPrototypeOf(PestsComponent)).call(this));

	        _this.getPests = _this.getPests.bind(_this);
	        return _this;
	    }

	    _createClass(PestsComponent, [{
	        key: 'getPests',
	        value: function getPests() {
	            var _this2 = this;

	            return this.props.pests.map(function (x, index) {
	                console.log(index == _this2.props.params.id);
	                return _react2.default.createElement(
	                    'div',
	                    { key: x.pest, className: 'col-lg-3 pestimage' + ('' + (index == _this2.props.params.id ? ' hideElement' : '')) },
	                    _react2.default.createElement(
	                        _reactRouter.Link,
	                        { to: '/pests/' + index + '/' },
	                        _react2.default.createElement('img', { src: '/images/' + x.url })
	                    )
	                );
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {

	            var mobiledata = this.props.pests.map(function (x, index) {

	                return _react2.default.createElement(
	                    'div',
	                    { className: 'row hidden-md-up', key: x.pest },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-lg-12' },
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            'Pests are any harmful agents of biotic nature. Pests eat & contaminate our food, destroy our properties, spread disease and destruct our precious environment'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-xs-4 col-sm-4 col-md-4 pestimage' },
	                        _react2.default.createElement(
	                            'h2',
	                            null,
	                            x.pest
	                        ),
	                        _react2.default.createElement('img', { src: 'images/' + x.url })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-xs-4 col-sm-4 col-md-4' },
	                        _react2.default.createElement(
	                            'p',
	                            { className: 'pestDescription' },
	                            x.description
	                        )
	                    )
	                );
	            });

	            return _react2.default.createElement(
	                'div',
	                { className: 'pests2' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row hidden-md-down' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-lg-7' },
	                        _react2.default.createElement(
	                            'p',
	                            null,
	                            'Pests are any harmful agents of biotic nature. Pests eat & contaminate our food, destroy our properties, spread disease and destruct our precious environment'
	                        )
	                    ),
	                    this.props.children
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row hidden-md-down' },
	                    this.getPests()
	                ),
	                mobiledata
	            );
	        }
	    }]);

	    return PestsComponent;
	}(_react2.default.Component);

	function mapStateToProps(state) {

	    return {
	        pests: state.pests
	    };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(PestsComponent);

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by programer on 4/2/17.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var ServiceComponent = function (_React$Component) {
	    _inherits(ServiceComponent, _React$Component);

	    function ServiceComponent() {
	        _classCallCheck(this, ServiceComponent);

	        return _possibleConstructorReturn(this, (ServiceComponent.__proto__ || Object.getPrototypeOf(ServiceComponent)).call(this));
	    }

	    _createClass(ServiceComponent, [{
	        key: "render",
	        value: function render() {

	            return _react2.default.createElement(
	                "div",
	                { className: "pests" },
	                _react2.default.createElement(
	                    "div",
	                    { className: "row serviceDescription" },
	                    _react2.default.createElement(
	                        "div",
	                        { className: "col-lg-6 col-sm-12 col-xs-12" },
	                        _react2.default.createElement(
	                            "h3",
	                            null,
	                            "Services"
	                        ),
	                        _react2.default.createElement(
	                            "ul",
	                            null,
	                            _react2.default.createElement(
	                                "li",
	                                null,
	                                "Malaria Vector Control especially elimination of mosquitoes transmission of malaria"
	                            ),
	                            _react2.default.createElement(
	                                "li",
	                                null,
	                                "We control mosquitoes in stage of larva and we ensure that mosquito population density is reduced"
	                            ),
	                            _react2.default.createElement(
	                                "li",
	                                null,
	                                "Bees removal in unwanted areas"
	                            ),
	                            _react2.default.createElement(
	                                "li",
	                                null,
	                                "Pest control treatment against cockroaches, rodents, bees, flies, mosquitoes, snakes, bed bugs and ticks"
	                            ),
	                            _react2.default.createElement(
	                                "li",
	                                null,
	                                "Sale of public health pesticides and agrochemicals"
	                            ),
	                            _react2.default.createElement(
	                                "li",
	                                null,
	                                "Sale of personal protective/safety equipment and application equipment"
	                            ),
	                            _react2.default.createElement(
	                                "li",
	                                null,
	                                "Soil sterilization services to control termites"
	                            ),
	                            _react2.default.createElement(
	                                "li",
	                                null,
	                                "Pests control consultancy and training"
	                            ),
	                            _react2.default.createElement(
	                                "li",
	                                null,
	                                "Pre and post harvest crop protection"
	                            )
	                        ),
	                        _react2.default.createElement(
	                            "h4",
	                            null,
	                            "SERVICE DELIVERY & AFTER TREATMENT SERVICE"
	                        ),
	                        _react2.default.createElement(
	                            "p",
	                            null,
	                            "Communication is a vital component of our value chain.  Once with us, we will explain everything starting with how you should prepare to make the job a success, how long to vacate the premises; what to do with non target species; the procedures we will use; type of chemicals, precautions to take, what can realistically be expected from our treatment and what can not Our technicians will be making routine visits to reinforce control measures. We will respond immediately to emergency call outs. We will provide you our client's hotline number, This number is reachable from 7 am to 10 pm everyday Our company has the capacity to provide value added advice on other preventive measures such as advice on proofing, housekeeping, storage, waste disposal, cleaning and detection and monitoring of pest populations"
	                        )
	                    ),
	                    _react2.default.createElement(
	                        "div",
	                        { className: "co-4 offset-2 hidden-sm-down" },
	                        _react2.default.createElement(
	                            "div",
	                            { className: "col-4" },
	                            _react2.default.createElement("img", { src: "images/work4.jpg", className: "", width: 300, height: 250 })
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            { className: "col-4" },
	                            _react2.default.createElement("img", { src: "images/work1.jpg", className: "", width: 300, height: 250 })
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            { className: "col-4" },
	                            _react2.default.createElement("img", { src: "images/work2.jpg", className: "", width: 300, height: 250 })
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            { className: "col-2" },
	                            _react2.default.createElement("img", { src: "images/bees3.jpg", className: "", width: 300, height: 250 })
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return ServiceComponent;
	}(_react2.default.Component);

	exports.default = ServiceComponent;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by programer on 4/2/17.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var ContactComponent = function (_React$Component) {
	    _inherits(ContactComponent, _React$Component);

	    function ContactComponent() {
	        _classCallCheck(this, ContactComponent);

	        return _possibleConstructorReturn(this, (ContactComponent.__proto__ || Object.getPrototypeOf(ContactComponent)).call(this));
	    }

	    _createClass(ContactComponent, [{
	        key: "render",
	        value: function render() {

	            return _react2.default.createElement(
	                "div",
	                { className: "pests" },
	                _react2.default.createElement(
	                    "h2",
	                    null,
	                    "Contacts"
	                ),
	                _react2.default.createElement(
	                    "div",
	                    { className: "container" },
	                    _react2.default.createElement(
	                        "div",
	                        { className: "contact" },
	                        _react2.default.createElement(
	                            "div",
	                            { className: "row" },
	                            _react2.default.createElement(
	                                "div",
	                                { className: "col" },
	                                _react2.default.createElement(
	                                    "span",
	                                    null,
	                                    "AJ MABAO INVESTMENT & GENERAL PEST CONTROL LTD"
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            { className: "row" },
	                            _react2.default.createElement(
	                                "div",
	                                { className: "col" },
	                                _react2.default.createElement(
	                                    "span",
	                                    null,
	                                    "Managing Director:Abel Juma Thomas P.O BOX 712",
	                                    _react2.default.createElement("br", null),
	                                    "Clinic Road",
	                                    _react2.default.createElement("br", null),
	                                    "Kahama,Shinyanga"
	                                )
	                            ),
	                            _react2.default.createElement(
	                                "div",
	                                { className: "col" },
	                                "Phone",
	                                _react2.default.createElement("br", null),
	                                "+255754433161",
	                                _react2.default.createElement("br", null),
	                                "+255786433161",
	                                _react2.default.createElement("br", null),
	                                "Email:mabao.investment@gmail.com"
	                            )
	                        ),
	                        _react2.default.createElement(
	                            "div",
	                            { className: "row" },
	                            _react2.default.createElement(
	                                "div",
	                                { className: "col-6" },
	                                _react2.default.createElement(
	                                    "form",
	                                    { method: "post", action: "" },
	                                    _react2.default.createElement(
	                                        "div",
	                                        { className: "form-group" },
	                                        _react2.default.createElement(
	                                            "label",
	                                            { htmlFor: "exampleInputEmail1" },
	                                            "Email address"
	                                        ),
	                                        _react2.default.createElement("input", { type: "email", className: "form-control", id: "exampleInputEmail1", "aria-describedby": "emailHelp", placeholder: "Enter email" })
	                                    ),
	                                    _react2.default.createElement(
	                                        "div",
	                                        { className: "form-group" },
	                                        _react2.default.createElement(
	                                            "label",
	                                            { htmlFor: "exampleTextarea" },
	                                            "Message"
	                                        ),
	                                        _react2.default.createElement("textarea", { className: "form-control", id: "exampleTextarea", rows: 3, defaultValue: "" })
	                                    ),
	                                    _react2.default.createElement(
	                                        "button",
	                                        { type: "submit", className: "btn btn-primary" },
	                                        "Submit"
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return ContactComponent;
	}(_react2.default.Component);

	exports.default = ContactComponent;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by programer on 4/2/17.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var PestComponent = function (_React$Component) {
	    _inherits(PestComponent, _React$Component);

	    function PestComponent() {
	        _classCallCheck(this, PestComponent);

	        return _possibleConstructorReturn(this, (PestComponent.__proto__ || Object.getPrototypeOf(PestComponent)).call(this));
	    }

	    _createClass(PestComponent, [{
	        key: 'render',
	        value: function render() {

	            return _react2.default.createElement(
	                'div',
	                { className: 'col-lg-12' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-lg-6' },
	                        _react2.default.createElement(
	                            'h2',
	                            null,
	                            this.props.pests[this.props.params.id].pest
	                        ),
	                        _react2.default.createElement('img', { src: '/images/' + this.props.pests[this.props.params.id].url })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-lg-6' },
	                        _react2.default.createElement(
	                            'p',
	                            { className: 'pestDescription' },
	                            this.props.pests[this.props.params.id].description
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return PestComponent;
	}(_react2.default.Component);

	function mapStateToProps(state) {

	    return {
	        pests: state.pests
	    };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(PestComponent);

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(19);

	var _reducer_pests = __webpack_require__(21);

	var _reducer_pests2 = _interopRequireDefault(_reducer_pests);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by programer on 4/2/17.
	 */

	var rootReducer = (0, _redux.combineReducers)({
	  pests: _reducer_pests2.default
	});

	exports.default = rootReducer;

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function () {

	    return [{
	        pest: 'Termites',
	        url: 'pests1compressed.jpg',
	        description: "An underground nest contains millions of termites with the queen living up to 15 years and laying 10,000 eggs a day. Termites feed on anything that contains cellulose.Their exploratory habit has made anything to be a possible target.They have more ways to enter your home and office than you do."
	    }, {
	        pest: 'Ants',
	        url: 'pests3compressed.jpg',
	        description: "Some ants dont just enter to forage for food but establish a colony inside your home. These events occur year-round, especially in warmer climates. Ant species that live in homes include Argentine Ants, Crazy Ants, Odorous House Ants, Pavement Ants, Pharaoh Ants, Thief Ants, and Carpenter Ants. All of these ants may infest food products"
	    }, {
	        pest: 'Rodents',
	        url: 'pests6compressed.jpg',
	        description: "In ideal conditions, one pair of rodents can give rise to 1000 offspring in one year.Due to week bladders, they urinate freely while feeding thus contaminating food surfaces and water. In addition, rodents Spread diseases to humans (plague, leptospirosis, etc) and livestock Cause structural damage Create fire hazards by chewing electrical wires Consume and contaminate food and crops"
	    }, {
	        pest: 'Bugs',
	        url: 'pests7compressed.jpg',
	        description: "This particular bug has been known to infest homes in their tens of thousands, (yes you read that right), and is recognised as the most invasive ladybird on earth. Another reason that this particular pest causes a problem is that they may bite you if an alternative food source isn’t available. They are known to harbour within cavities inside the home and vary in colour and pattern."
	    }, {
	        pest: 'Cockroaches',
	        url: 'pests10compressed.jpg',
	        description: "They pose a grave life threat to humans. They spread dysentery, typhoid, etc. Fossil evidence shows that they have existed for more that 250 million years. They live and breed under hostile conditions and have become resistant to conventional insecticides."
	    }, {
	        pest: 'Bees',
	        url: 'pests11compressed.jpg',
	        description: "Honey bees can be very defensive toward anyone approaching their hive. Alarmed workers release substances from glands in the sting apparatus and mouth parts which cause other bees to attack, and thus, mass stinging incidents can occur. Unlike most other stinging insects, a honey bee can only sting once since it loses the stinger imbedded in the victim and subsequently dies, the ultimate sacrifice for the good of the community."
	    }];
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _reactRouter = __webpack_require__(6);

	var _MainComponent = __webpack_require__(7);

	var _MainComponent2 = _interopRequireDefault(_MainComponent);

	var _HomeComponent = __webpack_require__(9);

	var _HomeComponent2 = _interopRequireDefault(_HomeComponent);

	var _ProfileComponent = __webpack_require__(13);

	var _ProfileComponent2 = _interopRequireDefault(_ProfileComponent);

	var _PestsComponent = __webpack_require__(14);

	var _PestsComponent2 = _interopRequireDefault(_PestsComponent);

	var _ServiceComponent = __webpack_require__(16);

	var _ServiceComponent2 = _interopRequireDefault(_ServiceComponent);

	var _ContactComponent = __webpack_require__(17);

	var _ContactComponent2 = _interopRequireDefault(_ContactComponent);

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _PestComponent = __webpack_require__(18);

	var _PestComponent2 = _interopRequireDefault(_PestComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _react2.default.createElement(
	    _reactRouter.Route,
	    { component: _MainComponent2.default },
	    _react2.default.createElement(_reactRouter.Route, { path: '/', component: _HomeComponent2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/about', component: _ProfileComponent2.default }),
	    _react2.default.createElement(
	        _reactRouter.Route,
	        { path: '/pests', component: _PestsComponent2.default },
	        _react2.default.createElement(_reactRouter.Route, { path: '(:id)', component: _PestComponent2.default })
	    ),
	    _react2.default.createElement(_reactRouter.Route, { path: '/services', component: _ServiceComponent2.default }),
	    _react2.default.createElement(_reactRouter.Route, { path: '/contacts', component: _ContactComponent2.default })
	); /**
	    * Created by programer on 2/3/17.
	    */

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var nodemailer = __webpack_require__(24);
	var mg = __webpack_require__(25);

	module.exports = function (req, res, next) {

	    var api_key = 'key-55ab8c16339ee0a9932d9a51e8e156e1';
	    var host = 'smtp.mailgun.org';
	    var nodemailerMailgun = nodemailer.createTransport(mg(auth));

	    var auth = {
	        auth: {
	            api_key: 'key-1234123412341234',
	            domain: 'mabao-investment.com'
	        }
	    };

	    nodemailerMailgun.sendMail({
	        from: 'myemail@example.com',
	        to: 'deomwilanga@gmail.com', // An array if you have multiple recipients.
	        subject: 'Hey you, awesome!',
	        text: 'Mailgun rocks, pow pow!'
	    }, function (err, info) {
	        if (err) {
	            console.log('Error: ' + err);
	        } else {
	            console.log('Response: ' + info);
	        }
	    });
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = require("nodemailer");

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = require("nodemailer-mailgun-transport");

/***/ }
/******/ ]);