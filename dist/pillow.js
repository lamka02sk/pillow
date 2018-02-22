(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Pillow"] = factory();
	else
		root["Pillow"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    createHTML: function createHTML(template) {
        var attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


        var element = document.querySelector('pillow-renderer');

        if (!element) {
            element = document.createElement('pillow-renderer');
            element.classList.add('pillow-hidden');
        }

        element.innerHTML = template;

        Object.keys(attributes).forEach(function (attribute) {
            element.setAttribute(attribute, element.hasAttribute(attribute) ? element.getAttribute(attribute) + ' ' + attributes[attribute] : attributes[attribute]);
        });

        return element.children[0];
    },
    translate: function translate(element) {
        var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


        Object.keys(locale).forEach(function (key) {

            var localeElements = document.querySelectorAll('[data-locale="' + key + '"]') || [];
            var placeholderElements = document.querySelectorAll('[data-placeholder="' + key + '"]') || [];
            var titleElements = document.querySelectorAll('[data-title="' + key + '"]') || [];

            localeElements.forEach(function (element) {
                return element.innerText = locale[key];
            });
            placeholderElements.forEach(function (element) {
                return element.placeholder = locale[key];
            });
            titleElements.forEach(function (element) {
                return element.title = locale[key];
            });
        });
    }
};

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Core = __webpack_require__(11);

var _Core2 = _interopRequireDefault(_Core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
    function _class() {
        var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, _class);

        _Core2.default.saveSettings(settings);
        _Core2.default.dispatch();

        return this;
    }

    _createClass(_class, [{
        key: "setData",
        value: function setData() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


            _Core2.default.setData(data);
            return this;
        }
    }, {
        key: "addData",
        value: function addData() {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


            _Core2.default.addData(data);
            return this;
        }
    }, {
        key: "setAPI",
        value: function setAPI() {
            var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


            _Core2.default.setAPI(settings);
            return this;
        }
    }, {
        key: "refresh",
        value: function refresh() {}
    }, {
        key: "showPage",
        value: function showPage() {
            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        }
    }, {
        key: "sortBy",
        value: function sortBy(parameter) {
            var asc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        }
    }, {
        key: "destroy",
        value: function destroy() {
            var reinitialize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;


            _Core2.default.destroy(reinitialize);
            return this;
        }
    }]);

    return _class;
}();

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Settings = __webpack_require__(12);

var _Settings2 = _interopRequireDefault(_Settings);

var _Instance = __webpack_require__(13);

var _Instance2 = _interopRequireDefault(_Instance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * How does this work in a nutshell:
 * ---------------------------------------------------------------------------------------------------------------------
 * 1. Firstly public API class saves Settings with saveSettings() method in this dispatcher
 * 2. Settings instance is saved
 * 3. Then public API class call method dispatch(), which creates instance for each element found
 * 4. Instance class is taking care of anything else under the hood
 * 5. If user changes settings, dispatcher class saves them into current settings instance and call proper hooks
 */

exports.default = {

    settings: null,
    instances: [],

    /**
     * Save or update settings
     * @param settings
     */
    saveSettings: function saveSettings() {
        var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


        this.settings ? this.settings.updateData(settings) : this.settings = new _Settings2.default(settings);
    },


    /**
     * Dispatch instances for each element found
     * @returns {boolean}
     */
    dispatch: function dispatch() {
        var _this = this;

        var elements = document.querySelectorAll(this.settings.element);

        if (!elements) return false;

        elements.forEach(function (element) {
            return _this.createInstance(element);
        });
    },


    /**
     * Create instance for given element and save it
     * @param element
     */
    createInstance: function createInstance(element) {

        this.instances.push(new _Instance2.default(this, element));
    },


    /**
     * Destroys each instance created and reinitialize if needed
     * @param reinitialize
     */
    destroy: function destroy(reinitialize) {

        this.instances.forEach(function (instance) {
            return instance.destroy();
        });

        if (reinitialize) this.dispatch();
    }
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
    function _class() {
        var _this = this;

        var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, _class);

        var keys = Object.keys(settings);
        this.setDefaults();

        keys.forEach(function (key) {
            return _this[key] = settings[key];
        });
    }

    _createClass(_class, [{
        key: 'updateData',
        value: function updateData(settings) {
            var _this2 = this;

            Object.keys(settings).forEach(function (key) {
                return _this2[key] = settings[key];
            });
        }
    }, {
        key: 'setDefaults',
        value: function setDefaults() {

            this.locale = {
                'pillow-collapse': 'Collapse',
                'pillow-collapse.open': 'Expand',
                'pillow-filters-empty': 'No filters active',
                'pillow-filters-clear': 'Reset filters',
                'pillow-filters-collapse': 'Filters',
                'pillow-filters-collapse.open': 'Expand filters',
                'pillow-filters-search': 'Find',
                'pillow-filters-none': 'There are no filters',
                'pillow-filters-title': 'Filter results by'
            };

            this.element = 'pillow-listing';
            this.instanceAttributes = {};

            this.search = true;
            this.searchAttributes = [];

            this.filter = true;
            this.filterProperties = []; // Array []
            this.sortBy = [null, false]; // Property, Asc

            this.showHeader = false;
            this.instanceName = 'pillow';
            this.headerUrl = false;
            this.enableCollapse = false;

            // Items and data
            this.itemTemplate = false;
            this.data = {};
            this.addLinks = false;
            this.mapData = {
                item: {
                    pairs: true,
                    link: true
                }
            };

            // Pagination
            this.paginate = true;
            this.itemsNumber = 10;
            this.showPages = 5;

            // API
            this.api = false;
            this.apiUrl = '';
            this.apiKey = '';
            this.apiMethod = 'GET';
            this.apiData = {};
            this.apiParameters = {};
            this.apiProcess = true;
            this.apiParseResponse = function () {};

            // Events
            this.onRefresh = function () {};
            this.onCreate = function () {};
            this.onFilter = function () {};
            this.onDestroy = function () {};
            this.onSearch = function () {};
            this.onAPIResponse = function () {};
            this.onSort = function () {};
            this.onClick = function () {};
            this.onAdd = function () {};
            this.onRemove = function () {};
            this.onChange = function () {};
            this.onHover = function () {};
        }
    }]);

    return _class;
}();

exports.default = _class;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Helpers = __webpack_require__(0);

var _Helpers2 = _interopRequireDefault(_Helpers);

var _Torso = __webpack_require__(14);

var _Torso2 = _interopRequireDefault(_Torso);

var _Header = __webpack_require__(16);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(18);

var _Filter2 = _interopRequireDefault(_Filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {

    /**
     * @param core instanceof Core
     * @param element
     */
    function _class(core, element) {
        _classCallCheck(this, _class);

        this.Core = core;
        this.Settings = core.settings;
        this.Element = element;
        this.Layout = null;

        this.createLayout();
        _Helpers2.default.translate(this.Element, this.Settings.locale);
    }

    _createClass(_class, [{
        key: "createLayout",
        value: function createLayout() {

            // Compile torso
            this.Layout = new _Torso2.default(this.Settings.instanceAttributes);

            // Compile header
            new _Header2.default(this.Layout, this.Settings);

            // Compile filter
            var filter = new _Filter2.default(this.Layout, this.Settings);
            filter.filtersList();

            // Compile content

            // Compile item

            // Compile pagination

            this.Element.appendChild(this.Layout, this.Element);
        }
    }, {
        key: "setAPI",
        value: function setAPI(settings) {}
    }, {
        key: "refresh",
        value: function refresh() {}
    }, {
        key: "showPage",
        value: function showPage(page) {}
    }, {
        key: "destroy",
        value: function destroy(reinitialize) {}
    }]);

    return _class;
}();

exports.default = _class;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Helpers = __webpack_require__(0);

var _Helpers2 = _interopRequireDefault(_Helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function _class(settings) {
    _classCallCheck(this, _class);

    return _Helpers2.default.createHTML(__webpack_require__(15), settings);
};

exports.default = _class;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "<div class=\"pillow-instance\"><div class=\"pillow-instance-header\"></div><div class=\"pillow-instance-filter\"></div><div class=\"pillow-instance-content\"></div><div class=\"pillow-instance-pagination\"></div></div>"

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Helpers = __webpack_require__(0);

var _Helpers2 = _interopRequireDefault(_Helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function _class(layout, settings) {
    _classCallCheck(this, _class);

    if (!settings.showHeader) layout.children[0].classList.add('pillow-hidden');

    var html = _Helpers2.default.createHTML(__webpack_require__(17));

    if (settings.headerUrl) {
        html.children[0].setAttribute('href', settings.headerUrl);
        html.children[0].setAttribute('target', '_blank');
        html.children[0].setAttribute('rel', 'noopener');
    }

    html.children[0].children[0].textContent = settings.instanceName;

    if (!settings.enableCollapse) html.children[1].classList.add('pillow-hidden');

    layout.children[0].appendChild(html);
};

exports.default = _class;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "<div class=\"pillow-header-content\"><a class=\"pillow-header-text-link\"><p class=\"pillow-header-text\"></p></a><button class=\"pillow-header-collapse\" data-locale=\"pillow-collapse\"></button></div>"

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Helpers = __webpack_require__(0);

var _Helpers2 = _interopRequireDefault(_Helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
    function _class(layout, settings) {
        _classCallCheck(this, _class);

        this.layout = layout;
        this.settings = settings;

        if (!settings.filter) layout.children[1].classList.add('pillow-hidden');

        this.html = _Helpers2.default.createHTML(__webpack_require__(19), {});

        if (!settings.search) this.html.children[0].children[2].classList.add('pillow-hidden');

        layout.children[1].appendChild(this.html);
    }

    _createClass(_class, [{
        key: 'filtersList',
        value: function filtersList() {

            var listElement = _Helpers2.default.createHTML(__webpack_require__(20), {});

            var listWrapper = listElement.querySelector('.pillow-filters-wrapper');
            var itemElement = listWrapper.querySelector('.pillow-filter-item');

            this.settings.filterProperties.forEach(function (property) {

                var clone = itemElement.cloneNode();
                clone.innerText = property.title;
                clone.dataset.property = property.property;

                listWrapper.appendChild(clone);
            });

            listWrapper.removeChild(itemElement);
            this.html.querySelector('.pillow-filters-list').appendChild(listElement);
        }
    }]);

    return _class;
}();

exports.default = _class;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "<div class=\"pillow-content-filter\"><div class=\"pillow-filters-active\"><button class=\"pillow-filters-collapse\" data-locale=\"pillow-filters-collapse\"></button><span class=\"pillow-filters-any\" data-locale=\"pillow-filters-empty\"></span><input class=\"pillow-filters-search\" data-placeholder=\"pillow-filters-search\" type=\"text\"/></div><div class=\"pillow-filters-list\"></div></div>"

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "<div class=\"pillow-filters-items\"><p class=\"pillow-filters-title\" data-locale=\"pillow-filters-title\"></p><div class=\"pillow-filters-wrapper\"><span class=\"pillow-filters-empty\" data-locale=\"pillow-filters-none\"></span><button class=\"pillow-filter-item\" data-property=\"data-property\"></button></div><div class=\"pillow-filters-footer\"><button class=\"pillow-filters-clear\" data-locale=\"pillow-filters-clear\"></button></div></div>"

/***/ })
/******/ ]);
});