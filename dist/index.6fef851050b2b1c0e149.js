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

/***/ "./styles.scss":
/*!*********************!*\
  !*** ./styles.scss ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles.scss?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ \"./styles.scss\");\n/* harmony import */ var _img_hero_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/hero.png */ \"./img/hero.png\");\n/* harmony import */ var _img_port1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/port1.jpg */ \"./img/port1.jpg\");\n/* harmony import */ var _img_port2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/port2.jpg */ \"./img/port2.jpg\");\n/* harmony import */ var _img_port3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/port3.jpg */ \"./img/port3.jpg\");\n/* harmony import */ var _img_port4_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/port4.jpg */ \"./img/port4.jpg\");\n/* harmony import */ var _img_port5_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/port5.jpg */ \"./img/port5.jpg\");\n/* harmony import */ var _img_port6_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/port6.jpg */ \"./img/port6.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(function () {\r\n  [...document.querySelectorAll(\".control\")].forEach((button) => {\r\n    button.addEventListener(\"click\", function () {\r\n      document.querySelector(\".active-btn\").classList.remove(\"active-btn\");\r\n      this.classList.add(\"active-btn\");\r\n      document.querySelector(\".active\").classList.remove(\"active\");\r\n      document.getElementById(button.dataset.id).classList.add(\"active\");\r\n    });\r\n  });\r\n})();\r\n//\r\n//підрахунок візитів на сайт\r\nfunction showVisits() {\r\n  // Отримуємо поточний лічильник відвідувань з локального сховища\r\n  let visitCount = localStorage.getItem(\"visitCount\");\r\n  // Якщо лічильник не існує в локальному сховищі, ініціалізуємо його зі значенням 1\r\n  if (!visitCount) {\r\n    visitCount = 1;\r\n  } else {\r\n    // Якщо лічильник існує, збільшуємо його значення на 1\r\n    visitCount = parseInt(visitCount) + 1;\r\n  }\r\n  // Зберігаємо нове значення лічильника в локальному сховищі\r\n  localStorage.setItem(\"visitCount\", visitCount);\r\n\r\n  // Виводимо кількість відвідувань на сайті\r\n  console.log(`Кількість відвідувань: ${visitCount}`);\r\n}\r\n// час перебування на сайті\r\n// Отримуємо поточний час при завантаженні сторінки\r\nlet startTime = new Date().getTime();\r\n// Функція, яка розраховує час перебування та загальний час на сайті\r\nfunction showCalculateTimeSpent() {\r\n  let timeOnPage = +localStorage.getItem(\"timeOnPage\");\r\n  let lastSession = +localStorage.getItem(\"timeSpent\");\r\n  let totalTimeOnPage = timeOnPage + lastSession;\r\n  localStorage.setItem(\"timeOnPage\", totalTimeOnPage);\r\n  console.log(`Користувач перебував на сайті ${lastSession.toFixed(2)} секунд`);\r\n  console.log(\r\n    `Загальний час перебування користувача на сайті ${totalTimeOnPage.toFixed(\r\n      2\r\n    )} секунд`\r\n  );\r\n}\r\n// Розраховуємо час перебування на сайті\r\nwindow.addEventListener(\"beforeunload\", () => {\r\n  let closeTime = new Date().getTime();\r\n  let timeSpent = (closeTime - startTime) / 1000;\r\n  localStorage.setItem(\"timeSpent\", timeSpent);\r\n});\r\n\r\n//середній час перебування на сайті\r\nfunction showAverageTimeOnSite() {\r\n  let totalTimeOnPage = +localStorage.getItem(\"timeOnPage\");\r\n  let visitOnPage = +localStorage.getItem(\"visitCount\");\r\n  let averageTime = totalTimeOnPage / visitOnPage;\r\n  console.log(`Середній час на сайті ${averageTime.toFixed(2)} секунд`);\r\n}\r\nshowVisits();\r\nshowCalculateTimeSpent();\r\nshowAverageTimeOnSite();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./img/hero.png":
/*!**********************!*\
  !*** ./img/hero.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/hero.png\";\n\n//# sourceURL=webpack:///./img/hero.png?");

/***/ }),

/***/ "./img/port1.jpg":
/*!***********************!*\
  !*** ./img/port1.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/port1.jpg\";\n\n//# sourceURL=webpack:///./img/port1.jpg?");

/***/ }),

/***/ "./img/port2.jpg":
/*!***********************!*\
  !*** ./img/port2.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/port2.jpg\";\n\n//# sourceURL=webpack:///./img/port2.jpg?");

/***/ }),

/***/ "./img/port3.jpg":
/*!***********************!*\
  !*** ./img/port3.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/port3.jpg\";\n\n//# sourceURL=webpack:///./img/port3.jpg?");

/***/ }),

/***/ "./img/port4.jpg":
/*!***********************!*\
  !*** ./img/port4.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/port4.jpg\";\n\n//# sourceURL=webpack:///./img/port4.jpg?");

/***/ }),

/***/ "./img/port5.jpg":
/*!***********************!*\
  !*** ./img/port5.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/port5.jpg\";\n\n//# sourceURL=webpack:///./img/port5.jpg?");

/***/ }),

/***/ "./img/port6.jpg":
/*!***********************!*\
  !*** ./img/port6.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/port6.jpg\";\n\n//# sourceURL=webpack:///./img/port6.jpg?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;