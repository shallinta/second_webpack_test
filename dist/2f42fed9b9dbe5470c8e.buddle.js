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

	'use strict';

	__webpack_require__(1);

	__webpack_require__(2);

	var _homepage = __webpack_require__(3);

	var _homepage2 = _interopRequireDefault(_homepage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_homepage2.default.init();
	console.log(101);

/***/ },
/* 1 */
/***/ function(module, exports) {

	
	module.exports = "assets/index.html"

/***/ },
/* 2 */
/***/ function(module, exports) {

	
	module.exports = "assets/a/help.html"

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	__webpack_require__(1);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	'use strict';

	var Homepage = (_temp = _class = function () {
		function Me() {
			_classCallCheck(this, Me);

			this.visitors = 0;
		}

		_createClass(Me, [{
			key: 'init',
			value: function init() {
				document.write(this.visitors);
			}
		}], [{
			key: 'getInstance',
			value: function getInstance() {
				if (!Me.instance) {
					Me.instance = new Me();
				}
				Me.instance.visitors++;
				return Me.instance;
			}
		}]);

		return Me;
	}(), _class.instance = null, _temp);

	exports.default = function () {

		return Homepage.getInstance();
	}();

/***/ }
/******/ ]);