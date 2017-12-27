!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Pillow=t():e.Pillow=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=11)}([function(e,t,n){"use strict";n(1)},function(e,t,n){var i=n(2);"string"==typeof i&&(i=[[e.i,i,""]]);var o={};o.transform=void 0;n(4)(i,o);i.locals&&(e.exports=i.locals)},function(e,t,n){t=e.exports=n(3)(void 0),t.push([e.i,".pillow-instance {\n  display: inline-block;\n  position: relative;\n  width: 100%;\n  height: auto;\n  float: left;\n  overflow: hidden; }\n  .pillow-instance .pillow-instance-header {\n    display: inline-block;\n    position: relative;\n    float: left;\n    width: 100%;\n    height: auto;\n    background: #f5f5f5;\n    box-sizing: border-box;\n    border: 1px solid silver;\n    border-bottom: none;\n    box-shadow: 0 0 6px rgba(0, 0, 0, 0.1); }\n    .pillow-instance .pillow-instance-header .pillow-header-content {\n      display: inline-block;\n      position: relative;\n      float: left;\n      width: 100%;\n      height: 36px;\n      line-height: 36px;\n      box-sizing: border-box;\n      padding: 0 12px;\n      font-size: .9rem; }\n      .pillow-instance .pillow-instance-header .pillow-header-content .pillow-header-text-link {\n        display: inline-block;\n        position: relative;\n        width: auto;\n        height: 100%; }\n        .pillow-instance .pillow-instance-header .pillow-header-content .pillow-header-text-link[href] {\n          cursor: pointer;\n          color: black;\n          text-decoration: none; }\n          .pillow-instance .pillow-instance-header .pillow-header-content .pillow-header-text-link[href]:hover {\n            text-decoration: underline; }\n      .pillow-instance .pillow-instance-header .pillow-header-content .pillow-header-collapse {\n        display: inline-block;\n        position: relative;\n        width: auto;\n        height: 100%;\n        float: right;\n        font-size: .75rem;\n        border: none;\n        outline: none;\n        cursor: pointer;\n        background: url("+n(16)+") right center no-repeat;\n        background-size: 20px;\n        padding-right: 24px; }\n        .pillow-instance .pillow-instance-header .pillow-header-content .pillow-header-collapse:hover {\n          text-decoration: underline; }\n\n.pillow-hidden {\n  display: none !important; }\n",""])},function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=i(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([r]).join("\n")}return[n].join("\n")}function i(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var i=n(t,e);return t[2]?"@media "+t[2]+"{"+i+"}":i}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(i[r]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){function i(e,t){for(var n=0;n<e.length;n++){var i=e[n],o=h[i.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](i.parts[r]);for(;r<i.parts.length;r++)o.parts.push(u(i.parts[r],t))}else{for(var s=[],r=0;r<i.parts.length;r++)s.push(u(i.parts[r],t));h[i.id]={id:i.id,refs:1,parts:s}}}}function o(e,t){for(var n=[],i={},o=0;o<e.length;o++){var r=e[o],s=t.base?r[0]+t.base:r[0],a=r[1],l=r[2],c=r[3],u={css:a,media:l,sourceMap:c};i[s]?i[s].parts.push(u):n.push(i[s]={id:s,parts:[u]})}return n}function r(e,t){var n=w(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=b[b.length-1];if("top"===e.insertAt)i?i.nextSibling?n.insertBefore(t,i.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),b.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function s(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function a(e){var t=document.createElement("style");return e.attrs.type="text/css",c(t,e.attrs),r(e,t),t}function l(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",c(t,e.attrs),r(e,t),t}function c(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function u(e,t){var n,i,o,r;if(t.transform&&e.css){if(!(r=t.transform(e.css)))return function(){};e.css=r}if(t.singleton){var c=y++;n=g||(g=a(t)),i=f.bind(null,n,c,!1),o=f.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),i=p.bind(null,n,t),o=function(){s(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(t),i=d.bind(null,n),o=function(){s(n)});return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}function f(e,t,n,i){var o=n?"":i.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var r=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function d(e,t){var n=t.css,i=t.media;if(i&&e.setAttribute("media",i),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t,n){var i=n.css,o=n.sourceMap,r=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||r)&&(i=m(i)),o&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([i],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}var h={},v=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),w=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e.call(this,n)),t[n]}}(function(e){return document.querySelector(e)}),g=null,y=0,b=[],m=n(5);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=v()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=o(e,t);return i(n,t),function(e){for(var r=[],s=0;s<n.length;s++){var a=n[s],l=h[a.id];l.refs--,r.push(l)}if(e){i(o(e,t),t)}for(var s=0;s<r.length;s++){var l=r[s];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete h[l.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,i=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return e;var r;return r=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:i+o.replace(/^\.\//,""),"url("+JSON.stringify(r)+")"})}},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(7),s=function(e){return e&&e.__esModule?e:{default:e}}(r);e.exports=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i(this,e),s.default.saveSettings(t),s.default.dispatch(),this}return o(e,[{key:"setData",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return s.default.setData(e),this}},{key:"addData",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return s.default.addData(e),this}},{key:"setAPI",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return s.default.setAPI(e),this}},{key:"refresh",value:function(){}},{key:"showPage",value:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]}},{key:"sortBy",value:function(e){!(arguments.length>1&&void 0!==arguments[1])||arguments[1]}},{key:"destroy",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return s.default.destroy(e),this}}]),e}()},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(8),r=i(o),s=n(9),a=i(s);t.default={settings:null,instances:[],saveSettings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.settings?this.settings.updateData(e):this.settings=new r.default(e)},dispatch:function(){var e=this,t=document.querySelectorAll(this.settings.element);if(!t)return!1;t.forEach(function(t){return e.createInstance(t)})},createInstance:function(e){this.instances.push(new a.default(this,e))},destroy:function(e){this.instances.forEach(function(e){return e.destroy()}),e&&this.dispatch()}}},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,e);var o=Object.keys(n);this.setDefaults(),o.forEach(function(e){return t[e]=n[e]})}return o(e,[{key:"updateData",value:function(e){var t=this;Object.keys(e).forEach(function(n){return t[n]=e[n]})}},{key:"setDefaults",value:function(){this.locale={"pillow-collapse":"Collapse","pillow-collapse.open":"Expand","pillow-collapse-text":"Hide content","pillow-collapse-text.open":"Show content","pillow-filters-empty":"No filters specified","pillow-filters-clear":"Reset filters","pillow-filters-collapse":"Collapse filters","pillow-filters-collapse.open":"Expand filters","pillow-filter-collapse-text":"Hide filters","pillow-filter-collapse-text.open":"Show filters"},this.element="pillow-listing",this.instanceAttributes={},this.autoRefresh=!0,this.search=!0,this.indexing=!0,this.indexAllText=!0,this.indexAttributes=[],this.typeToFind=!0,this.autoReindex=!0,this.filter=!0,this.filterIndexing=!0,this.filterProperties=[],this.sortBy=!1,this.showHeader=!1,this.instanceName="pillow",this.headerUrl=!1,this.enableCollapse=!1,this.itemTemplate=!1,this.data={},this.addLinks=!1,this.mapData={item:{pairs:!0,link:!0}},this.paginate=!0,this.itemsNumber=10,this.showPages=5,this.api=!1,this.apiUrl="",this.apiKey="",this.apiMethod="GET",this.apiData={},this.apiParameters={},this.apiProcess=!0,this.apiParseResponse=function(){},this.onRefresh=function(){},this.onCreate=function(){},this.onFilter=function(){},this.onDestroy=function(){},this.onSearch=function(){},this.onAPICall=function(){},this.onSort=function(){},this.onClick=function(){},this.onAdd=function(){},this.onRemove=function(){},this.onChange=function(){},this.onHover=function(){}}}]),e}();t.default=r},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(13),s=function(e){return e&&e.__esModule?e:{default:e}}(r),a=function(){function e(t,n){i(this,e),this.Core=t,this.Settings=t.settings,this.Element=n,this.Layout=null,this.createLayout()}return o(e,[{key:"_createTorso",value:function(){this.Layout=s.default.createHTML(n(10),this.Settings.instanceAttributes)}},{key:"_createHeader",value:function(){this.Settings.showHeader||this.Layout.children[0].classList.add("pillow-hidden");var e=s.default.createHTML(n(15));this.Settings.headerUrl&&(e.children[0].setAttribute("href",this.Settings.headerUrl),e.children[0].setAttribute("target","_blank"),e.children[0].setAttribute("rel","noopener")),e.children[0].children[0].textContent=this.Settings.instanceName,this.Settings.enableCollapse||e.children[1].classList.add("pillow-hidden"),this.Layout.children[0].appendChild(e)}},{key:"createLayout",value:function(){this._createTorso(),this._createHeader(),this.Element.parentNode.replaceChild(this.Layout,this.Element)}},{key:"setAPI",value:function(e){}},{key:"refresh",value:function(){}},{key:"showPage",value:function(e){}},{key:"destroy",value:function(e){}}]),e}();t.default=a},function(e,t){e.exports='<div class="pillow-instance"><div class="pillow-instance-header"></div><div class="pillow-instance-content"></div><div class="pillow-instance-pagination"></div></div>'},function(e,t,n){"use strict";n(0),e.exports=n(6)},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={createHTML:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(new DOMParser).parseFromString(e,"text/xml").children[0];return Object.keys(t).forEach(function(e){n.setAttribute(e,n.hasAttribute(e)?n.getAttribute(e)+" "+t[e]:t[e])}),n}}},,function(e,t){e.exports='<div class="pillow-header-content"><a class="pillow-header-text-link"><p class="pillow-header-text"></p></a><button class="pillow-header-collapse" data-locale="pillow-collapse">Collapse</button></div>'},function(e,t){e.exports="\"data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8' standalone='no'?%3E %3Csvg xmlns:dc='http://purl.org/dc/elements/1.1/' xmlns:cc='http://creativecommons.org/ns%23' xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23' xmlns:svg='http://www.w3.org/2000/svg' xmlns='http://www.w3.org/2000/svg' xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd' xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape' width='24' height='24' viewBox='0 0 24 24' id='svg2' version='1.1' inkscape:version='0.91 r13725' sodipodi:docname='collapse.svg'%3E %3Cmetadata id='metadata10'%3E %3Crdf:RDF%3E %3Ccc:Work rdf:about=''%3E %3Cdc:format%3Eimage/svg+xml%3C/dc:format%3E %3Cdc:type rdf:resource='http://purl.org/dc/dcmitype/StillImage' /%3E %3C/cc:Work%3E %3C/rdf:RDF%3E %3C/metadata%3E %3Cdefs id='defs8' /%3E %3Csodipodi:namedview pagecolor='%23ffffff' bordercolor='%23666666' borderopacity='1' objecttolerance='10' gridtolerance='10' guidetolerance='10' inkscape:pageopacity='0' inkscape:pageshadow='2' inkscape:window-width='764' inkscape:window-height='480' id='namedview6' showgrid='false' inkscape:zoom='9.8333333' inkscape:cx='12' inkscape:cy='12' inkscape:window-x='49' inkscape:window-y='24' inkscape:window-maximized='0' inkscape:current-layer='svg2' /%3E %3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z' id='path4' style='fill:%234d4d4d' /%3E %3C/svg%3E\""}])});