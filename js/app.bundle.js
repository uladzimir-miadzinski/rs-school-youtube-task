/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search */ \"./src/search/index.js\");\n/* harmony import */ var _drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawer */ \"./src/drawer/index.js\");\n\r\n\r\n\r\nconst init = () => {\r\n  Object(_drawer__WEBPACK_IMPORTED_MODULE_1__[\"drawSearchComponent\"])();\r\n  Object(_search__WEBPACK_IMPORTED_MODULE_0__[\"bindSearchComponentEvents\"])();\r\n};\r\n\r\ninit();\r\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/drawer/index.js":
/*!*****************************!*\
  !*** ./src/drawer/index.js ***!
  \*****************************/
/*! exports provided: getContainer, getRow, getColumn, drawSearchComponent, getSnippet, drawSnippets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getContainer\", function() { return getContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRow\", function() { return getRow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getColumn\", function() { return getColumn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawSearchComponent\", function() { return drawSearchComponent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSnippet\", function() { return getSnippet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawSnippets\", function() { return drawSnippets; });\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../search */ \"./src/search/index.js\");\n\r\n\r\nconst getContainer = () => {\r\n  const container = document.createElement('div');\r\n\r\n  container.classList.add('container-fluid');\r\n\r\n  return container;\r\n};\r\n\r\nconst getRow = () => {\r\n  const row = document.createElement('div');\r\n\r\n  row.classList.add('row');\r\n\r\n  return row;\r\n};\r\n\r\nconst getColumn = (size) => {\r\n  const col = document.createElement('div');\r\n  const colClass = size\r\n    ? `col-${size}`\r\n    : 'col';\r\n\r\n  col.classList.add(colClass);\r\n\r\n  return col;\r\n};\r\n\r\nconst drawSearchComponent = () => {\r\n  const root = document.querySelector('body');\r\n  const container = root.appendChild(getContainer());\r\n  const row = container.appendChild(getRow());\r\n\r\n  const firstCol = row.appendChild(getColumn(10));\r\n  const secondCol = row.appendChild(getColumn(2));\r\n\r\n  firstCol.appendChild(Object(_search__WEBPACK_IMPORTED_MODULE_0__[\"getSearchLine\"])());\r\n  secondCol.appendChild(Object(_search__WEBPACK_IMPORTED_MODULE_0__[\"getSearchBtn\"])());\r\n\r\n  root.style.paddingTop = '15px';\r\n};\r\n\r\nconst getSnippet = (item) => {\r\n  const {\r\n    snippet: {\r\n      channelTitle,\r\n      description,\r\n      title,\r\n      thumbnails\r\n    },\r\n    id: { videoId }\r\n  } = item;\r\n\r\n  const card = document.createElement('div');\r\n  card.classList.add('card');\r\n\r\n  const img = document.createElement('img');\r\n  img.src = thumbnails.high.url;\r\n\r\n  const cardBody = document.createElement('div');\r\n  cardBody.classList.add('card-body');\r\n\r\n  const cardBodyTitle = document.createElement('h5');\r\n  cardBodyTitle.classList.add('card-title');\r\n  cardBodyTitle.innerText = title;\r\n\r\n  const cardBodyDescription = document.createElement('p');\r\n  cardBodyDescription.classList.add('card-text');\r\n  cardBodyDescription.innerText = description;\r\n\r\n  const linkToVideo = document.createElement('a');\r\n  linkToVideo.classList.add('btn', 'btn-secondary');\r\n  linkToVideo.innerText = `Link to ${channelTitle}`;\r\n  linkToVideo.setAttribute('href', `https://www.youtube.com/watch?v=${videoId}`);\r\n  linkToVideo.setAttribute('target', '_blank');\r\n\r\n  cardBody.appendChild(cardBodyTitle);\r\n  cardBody.appendChild(cardBodyDescription);\r\n  cardBody.appendChild(linkToVideo);\r\n  card.appendChild(img);\r\n  card.appendChild(cardBody);\r\n  card.classList.add('m-1');\r\n\r\n  return card;\r\n};\r\n\r\nconst drawSnippets = (items) => {\r\n  const container = document.querySelector('body > div.container-fluid');\r\n  const searchSnippets = document.querySelector('[data-container=\"search-snippets\"]');\r\n\r\n  const row = getRow();\r\n  row.dataset.container = 'search-snippets';\r\n  row.classList.add('mt-2');\r\n\r\n  items.forEach(item => {\r\n    const col = getColumn(3);\r\n\r\n    col.appendChild(getSnippet(item));\r\n    row.appendChild(col);\r\n  });\r\n\r\n  if (searchSnippets) {\r\n    container.replaceChild(row, searchSnippets);\r\n  } else {\r\n    container.appendChild(row);\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/drawer/index.js?");

/***/ }),

/***/ "./src/search/component.js":
/*!*********************************!*\
  !*** ./src/search/component.js ***!
  \*********************************/
/*! exports provided: getSearchLine, getSearchBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSearchLine\", function() { return getSearchLine; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSearchBtn\", function() { return getSearchBtn; });\nconst getSearchLine = () => {\r\n  const input = document.createElement('input');\r\n\r\n  input.dataset.component = 'search-line';\r\n  input.classList.add('form-control');\r\n  input.placeholder = 'Enter query';\r\n\r\n  return input;\r\n};\r\n\r\nconst getSearchBtn = (btnText = 'Search') => {\r\n  const btn = document.createElement('button');\r\n\r\n  btn.dataset.component = 'search-btn';\r\n  btn.classList.add('btn', 'btn-primary', 'btn-block');\r\n  btn.innerText = btnText;\r\n\r\n  return btn;\r\n};\r\n\n\n//# sourceURL=webpack:///./src/search/component.js?");

/***/ }),

/***/ "./src/search/engine.js":
/*!******************************!*\
  !*** ./src/search/engine.js ***!
  \******************************/
/*! exports provided: searchLineSelector, searchBtnSelector, youtubeApiKey, search, searchAndDraw, searchLineKeypressHandler, searchBtnClickHandler, bindSearchComponentEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchLineSelector\", function() { return searchLineSelector; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchBtnSelector\", function() { return searchBtnSelector; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"youtubeApiKey\", function() { return youtubeApiKey; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"search\", function() { return search; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchAndDraw\", function() { return searchAndDraw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchLineKeypressHandler\", function() { return searchLineKeypressHandler; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchBtnClickHandler\", function() { return searchBtnClickHandler; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bindSearchComponentEvents\", function() { return bindSearchComponentEvents; });\n/* harmony import */ var _drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../drawer */ \"./src/drawer/index.js\");\n\r\n\r\nconst searchLineSelector = '[data-component=\"search-line\"]';\r\nconst searchBtnSelector = '[data-component=\"search-btn\"]';\r\nconst youtubeApiKey = 'AIzaSyArb00ECe-Wj0_B1YQrfunFGjQ4DKatpNU';\r\n\r\nconst search = query => {\r\n  const fetchResults = fetch(`https://www.googleapis.com/youtube/v3/search?key=${youtubeApiKey}&type=video&part=snippet&maxResults=15&q=${query}`);\r\n\r\n  return fetchResults.then(res => res.json());\r\n};\r\n\r\nconst searchAndDraw = async (query) => Object(_drawer__WEBPACK_IMPORTED_MODULE_0__[\"drawSnippets\"])((await search(query)).items);\r\n\r\nconst searchLineKeypressHandler = async (event) => {\r\n  if (event.code === 'Enter') {\r\n    event.preventDefault();\r\n    await searchAndDraw(event.target.value);\r\n  }\r\n};\r\n\r\nconst searchBtnClickHandler = async (event) => {\r\n  const searchLine = document.querySelector(searchLineSelector);\r\n\r\n  event.preventDefault();\r\n  await searchAndDraw(searchLine.value);\r\n};\r\n\r\nconst bindSearchComponentEvents = () => {\r\n  const searchLine = document.querySelector(searchLineSelector);\r\n  const searchBtn = document.querySelector(searchBtnSelector);\r\n\r\n  searchBtn.addEventListener('click', searchBtnClickHandler);\r\n  searchLine.addEventListener('keypress', searchLineKeypressHandler);\r\n};\r\n\n\n//# sourceURL=webpack:///./src/search/engine.js?");

/***/ }),

/***/ "./src/search/index.js":
/*!*****************************!*\
  !*** ./src/search/index.js ***!
  \*****************************/
/*! exports provided: search, bindSearchComponentEvents, getSearchLine, getSearchBtn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine */ \"./src/search/engine.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"search\", function() { return _engine__WEBPACK_IMPORTED_MODULE_0__[\"search\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"bindSearchComponentEvents\", function() { return _engine__WEBPACK_IMPORTED_MODULE_0__[\"bindSearchComponentEvents\"]; });\n\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ \"./src/search/component.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getSearchLine\", function() { return _component__WEBPACK_IMPORTED_MODULE_1__[\"getSearchLine\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getSearchBtn\", function() { return _component__WEBPACK_IMPORTED_MODULE_1__[\"getSearchBtn\"]; });\n\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/search/index.js?");

/***/ })

/******/ });