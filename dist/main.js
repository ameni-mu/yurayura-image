/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/apps/furikake.js":
/*!******************************!*\
  !*** ./src/apps/furikake.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Furikake)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Furikake = ///////////////////////////\n/// constructor\n////////////////////////////\nfunction Furikake(x, degree, img) {\n  _classCallCheck(this, Furikake);\n\n  var radian = degree * (Math.PI / 180);\n  var radius = Math.floor(Math.random() * 10) + 5;\n  this.radius = radius;\n  this.degree = degree;\n  this.radian = radian;\n  this.x = x;\n  this.y = -Math.floor(Math.random() * 300) - 70;\n  this.dir = Math.floor(Math.random() * 3);\n  this.speedX = (Math.random() * 5 + 1) / 200;\n  this.speedY = (Math.floor(Math.random() * 8) + 2) / 10;\n  this.range = Math.floor(Math.random() * 10) + 2;\n  this.img = img;\n};\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/apps/furikake.js?");

/***/ }),

/***/ "./src/apps/motion.js":
/*!****************************!*\
  !*** ./src/apps/motion.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Motion)\n/* harmony export */ });\n/* harmony import */ var _furikake_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./furikake.js */ \"./src/apps/furikake.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar stage;\nvar ctx;\nvar dpr;\nvar furikakeNum = 15;\nvar furikakeArr = [];\nvar objW = 65;\nvar images = ['../img/bird.png', '../img/dog.png'];\nvar imgArr = [];\n\nvar Motion = /*#__PURE__*/function () {\n  ///////////////////////////\n  /// constructor\n  ////////////////////////////\n  function Motion() {\n    _classCallCheck(this, Motion);\n\n    this.initCanvas();\n  } ///////////////////////////\n  ////////////////////////////\n\n\n  _createClass(Motion, [{\n    key: \"initCanvas\",\n    value: function initCanvas() {\n      stage = document.getElementById('stage');\n      if (!stage || !stage.getContext) return false;\n      ctx = stage.getContext('2d');\n      dpr = window.devicePixelRatio || 1;\n      stage.width = window.innerWidth * dpr;\n      stage.height = window.innerHeight * dpr;\n      ctx.scale(dpr, dpr);\n      stage.style.width = window.innerWidth + 'px';\n      stage.style.height = window.innerHeight + 'px';\n      var num = 0;\n\n      for (var i = 0; i < images.length; i++) {\n        var img = new Image();\n        img.src = images[i];\n        imgArr.push(img);\n      }\n\n      for (var _i = 0; _i < furikakeNum; _i++) {\n        num++;\n        if (num >= images.length) num = 0;\n        var degree = Math.floor(Math.random() * 360);\n        var x = Math.floor(stage.width / furikakeNum) * _i + objW / 2 + 20;\n        var furikake = new _furikake_js__WEBPACK_IMPORTED_MODULE_0__.default(x, degree, imgArr[num]);\n        furikakeArr.push(furikake);\n      }\n\n      setTimeout(function () {\n        for (var _i2 = 0; _i2 < furikakeNum; _i2++) {\n          num++;\n          if (num >= images.length) num = 0;\n\n          var _degree = Math.floor(Math.random() * 360);\n\n          var _x = Math.floor(stage.width / furikakeNum) * _i2 + objW / 2 + 20;\n\n          var _furikake = new _furikake_js__WEBPACK_IMPORTED_MODULE_0__.default(_x, _degree, imgArr[num]);\n\n          furikakeArr.push(_furikake);\n        }\n      }, 10000);\n      this.renderFurikake();\n    } ///////////////////////////\n    /// renderFurikake\n    ////////////////////////////\n\n  }, {\n    key: \"renderFurikake\",\n    value: function renderFurikake() {\n      window.requestAnimationFrame(this.renderFurikake.bind(this));\n      ctx.clearRect(0, 0, stage.width, stage.height);\n      ctx.fillStyle = 'rgba(125,201,239,1)';\n\n      for (var i = 0, len = furikakeArr.length; i < len; i++) {\n        var furikake = furikakeArr[i];\n\n        if (furikake.dir == 1) {\n          furikake.dy = Math.floor(Math.cos(furikake.radius) * 30);\n        } else if (furikake.dir == 2) {\n          furikake.dy = Math.floor(Math.sin(furikake.radius) * 30);\n        } else {\n          furikake.dy = Math.floor(Math.cos(furikake.radius) * 30);\n        }\n\n        furikake.radius += furikake.speedX;\n        var x = furikake.x + furikake.dy;\n        furikake.y = furikake.y + furikake.speedY;\n        var y = furikake.y;\n\n        if (furikake.y > stage.height + objW) {\n          furikake.y = -objW;\n        }\n\n        ctx.drawImage(furikakeArr[i].img, x, y);\n      }\n    }\n  }]);\n\n  return Motion;\n}();\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/apps/motion.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _apps_motion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apps/motion.js */ \"./src/apps/motion.js\");\n/* harmony import */ var _scss_reset_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/reset.scss */ \"./scss/reset.scss\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/style.scss */ \"./scss/style.scss\");\n\n\n\n\nwindow.onload = function () {\n  var motion = new _apps_motion_js__WEBPACK_IMPORTED_MODULE_0__.default();\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./scss/reset.scss":
/*!*************************!*\
  !*** ./scss/reset.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./scss/reset.scss?");

/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./scss/style.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;