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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(8)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./main.sass", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./main.sass");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".pillow-instance {\n  display: inline-block;\n  position: relative;\n  width: 100%;\n  height: auto;\n  float: left;\n  box-sizing: border-box;\n  border: 1px solid silver;\n  overflow: hidden; }\n  .pillow-instance * {\n    font-family: sans-serif; }\n  .pillow-instance .pillow-instance-header {\n    display: inline-block;\n    position: relative;\n    float: left;\n    width: 100%;\n    height: auto;\n    background: #f5f5f5;\n    border-bottom: none;\n    z-index: 2; }\n    .pillow-instance .pillow-instance-header .pillow-header-content {\n      display: inline-block;\n      position: relative;\n      float: left;\n      width: 100%;\n      height: 36px;\n      line-height: 36px;\n      box-sizing: border-box;\n      padding: 0 12px;\n      font-size: .9rem; }\n      .pillow-instance .pillow-instance-header .pillow-header-content .pillow-header-text-link {\n        display: inline-block;\n        position: relative;\n        width: auto;\n        height: 100%; }\n        .pillow-instance .pillow-instance-header .pillow-header-content .pillow-header-text-link[href] {\n          cursor: pointer;\n          color: black;\n          text-decoration: none; }\n          .pillow-instance .pillow-instance-header .pillow-header-content .pillow-header-text-link[href]:hover {\n            text-decoration: underline; }\n        .pillow-instance .pillow-instance-header .pillow-header-content .pillow-header-text-link .pillow-header-text {\n          margin: 0; }\n      .pillow-instance .pillow-instance-header .pillow-header-content .pillow-header-collapse {\n        display: inline-block;\n        position: relative;\n        width: auto;\n        height: 100%;\n        float: right;\n        font-size: .75rem;\n        border: none;\n        outline: none;\n        cursor: pointer;\n        background: url(" + __webpack_require__(5) + ") right center no-repeat;\n        background-size: 20px;\n        padding-right: 24px; }\n        .pillow-instance .pillow-instance-header .pillow-header-content .pillow-header-collapse:hover {\n          text-decoration: underline; }\n  .pillow-instance .pillow-instance-filter {\n    display: inline-block;\n    position: relative;\n    float: left;\n    width: 100%;\n    height: auto;\n    background: #f2f2f2;\n    font-size: .72rem; }\n    .pillow-instance .pillow-instance-filter .pillow-filters-active {\n      display: inline-block;\n      position: relative;\n      width: 100%;\n      height: 32px;\n      line-height: 33px;\n      float: left;\n      box-shadow: 0 0 4px rgba(0, 0, 0, 0.05);\n      z-index: 1; }\n      .pillow-instance .pillow-instance-filter .pillow-filters-active .pillow-filters-collapse {\n        display: inline-block;\n        position: relative;\n        float: left;\n        width: auto;\n        height: 24px;\n        margin: 4px 8px;\n        padding: 0 6px 0 28px;\n        cursor: pointer;\n        outline: none;\n        border: none;\n        font-size: .72rem;\n        background: rgba(0, 0, 0, 0.1) url(" + __webpack_require__(6) + ") left 6px center no-repeat;\n        background-size: 18px;\n        line-height: 26px; }\n        .pillow-instance .pillow-instance-filter .pillow-filters-active .pillow-filters-collapse:hover {\n          background-color: rgba(0, 0, 0, 0.15); }\n      .pillow-instance .pillow-instance-filter .pillow-filters-active .pillow-filters-any {\n        display: inline-block;\n        position: relative;\n        float: left;\n        opacity: .7; }\n      .pillow-instance .pillow-instance-filter .pillow-filters-active .pillow-filters-search {\n        display: inline-block;\n        height: 100%;\n        width: 190px;\n        background: white url(" + __webpack_require__(7) + ") left 8px center no-repeat;\n        background-size: 16px;\n        float: right;\n        outline: none;\n        border: none;\n        font-size: .72rem;\n        padding: 0 10px 0 28px;\n        box-sizing: border-box;\n        color: #333;\n        opacity: .8; }\n        .pillow-instance .pillow-instance-filter .pillow-filters-active .pillow-filters-search:focus {\n          opacity: 1; }\n    .pillow-instance .pillow-instance-filter .pillow-filters-list {\n      display: inline-block;\n      position: relative;\n      float: left;\n      width: 100%;\n      padding: 10px;\n      background: #fbfbfb;\n      box-sizing: border-box; }\n      .pillow-instance .pillow-instance-filter .pillow-filters-list .pillow-filters-title {\n        margin: 0 0 6px 0;\n        position: relative;\n        float: left;\n        font-size: 1rem;\n        color: #333;\n        padding: 0 2px; }\n      .pillow-instance .pillow-instance-filter .pillow-filters-list .pillow-filters-wrapper {\n        position: relative;\n        float: left;\n        width: 100%;\n        display: inline-block; }\n        .pillow-instance .pillow-instance-filter .pillow-filters-list .pillow-filters-wrapper .pillow-filters-empty {\n          display: none; }\n        .pillow-instance .pillow-instance-filter .pillow-filters-list .pillow-filters-wrapper:empty .pillow-filters-empty {\n          display: inline-block;\n          position: relative;\n          float: left;\n          width: 100%;\n          text-align: center;\n          margin: 18px 0;\n          font-size: 1.4rem;\n          color: grey; }\n        .pillow-instance .pillow-instance-filter .pillow-filters-list .pillow-filters-wrapper .pillow-filter-item {\n          border: none;\n          outline: none;\n          position: relative;\n          float: left;\n          margin-right: 6px;\n          border-radius: 12px;\n          height: 24px;\n          padding: 0 10px;\n          font-size: .75rem;\n          cursor: pointer;\n          box-sizing: border-box; }\n          .pillow-instance .pillow-instance-filter .pillow-filters-list .pillow-filters-wrapper .pillow-filter-item:hover {\n            background: #dedede; }\n          .pillow-instance .pillow-instance-filter .pillow-filters-list .pillow-filters-wrapper .pillow-filter-item.active {\n            border: 1px solid silver;\n            background: white; }\n      .pillow-instance .pillow-instance-filter .pillow-filters-list .pillow-filters-footer {\n        display: inline-block;\n        position: relative;\n        float: left;\n        width: 100%;\n        margin-top: 8px; }\n        .pillow-instance .pillow-instance-filter .pillow-filters-list .pillow-filters-footer .pillow-filters-clear {\n          border: none;\n          outline: none;\n          height: 24px;\n          background: url(" + __webpack_require__(22) + ") transparent left 4px center no-repeat;\n          background-size: 12px;\n          float: right;\n          position: relative;\n          font-size: .75rem;\n          padding-left: 16px;\n          cursor: pointer; }\n\n.pillow-hidden {\n  display: none !important; }\n", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "\"data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8' standalone='no'?%3E %3Csvg xmlns:dc='http://purl.org/dc/elements/1.1/' xmlns:cc='http://creativecommons.org/ns%23' xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23' xmlns:svg='http://www.w3.org/2000/svg' xmlns='http://www.w3.org/2000/svg' xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd' xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape' width='24' height='24' viewBox='0 0 24 24' id='svg2' version='1.1' inkscape:version='0.91 r13725' sodipodi:docname='collapse.svg'%3E %3Cmetadata id='metadata10'%3E %3Crdf:RDF%3E %3Ccc:Work rdf:about=''%3E %3Cdc:format%3Eimage/svg+xml%3C/dc:format%3E %3Cdc:type rdf:resource='http://purl.org/dc/dcmitype/StillImage' /%3E %3C/cc:Work%3E %3C/rdf:RDF%3E %3C/metadata%3E %3Cdefs id='defs8' /%3E %3Csodipodi:namedview pagecolor='%23ffffff' bordercolor='%23666666' borderopacity='1' objecttolerance='10' gridtolerance='10' guidetolerance='10' inkscape:pageopacity='0' inkscape:pageshadow='2' inkscape:window-width='764' inkscape:window-height='480' id='namedview6' showgrid='false' inkscape:zoom='9.8333333' inkscape:cx='12' inkscape:cy='12' inkscape:window-x='49' inkscape:window-y='24' inkscape:window-maximized='0' inkscape:current-layer='svg2' /%3E %3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z' id='path4' style='fill:%234d4d4d' /%3E %3C/svg%3E\""

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z'/%3E%3C/svg%3E\""

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3C/svg%3E\""

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(9);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
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

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

module.exports = __webpack_require__(10);

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/%3E%3C/svg%3E\""

/***/ })
/******/ ]);
});