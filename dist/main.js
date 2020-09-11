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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/fetchAsync/apiUtils.js":
/*!************************************!*\
  !*** ./src/fetchAsync/apiUtils.js ***!
  \************************************/
/*! exports provided: handleResponse, handleError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleResponse\", function() { return handleResponse; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleError\", function() { return handleError; });\nconst handleResponse = async response => {\n  if (response.ok) return response.json();\n  if (response.status === 400) {\n    const error = await response.text();\n    throw new Error(error);\n  }\n  throw new Error('Network response error');\n};\n\nconst handleError = error => {\n  console.log('API call failed.' + error);\n  throw error;\n};\n\n\n//# sourceURL=webpack:///./src/fetchAsync/apiUtils.js?");

/***/ }),

/***/ "./src/fetchAsync/pokeApi.js":
/*!***********************************!*\
  !*** ./src/fetchAsync/pokeApi.js ***!
  \***********************************/
/*! exports provided: getPokemon, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPokemon\", function() { return getPokemon; });\n/* harmony import */ var _apiUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiUtils */ \"./src/fetchAsync/apiUtils.js\");\n\nconst baseUrl = 'https://pokeapi.co/api/v2/';\n\nconst getPokemonsArray = () => {\n  const max = 200, min = 1;\n  const pokeIdArray = [];\n  let randId;\n  for (let i = 0; i < 10; i++) {\n    randId = Math.floor(Math.random() * (max - 1)) + min;\n    pokeIdArray.push(randId);\n  }\n  return pokeIdArray;\n}\n\nconst getPokemon = async (pokemon) => {\n  try {\n    const response = await fetch(baseUrl + `pokemon/${pokemon}`);\n    return Object(_apiUtils__WEBPACK_IMPORTED_MODULE_0__[\"handleResponse\"])(response);\n  } catch (error) {\n    return Object(_apiUtils__WEBPACK_IMPORTED_MODULE_0__[\"handleError\"])(error);\n  }\n};\n\nconst getPokemons = async () => {\n  return Promise.all(getPokemonsArray().map(pokeId => getPokemon(pokeId)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getPokemons);\n\n\n//# sourceURL=webpack:///./src/fetchAsync/pokeApi.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fetchAsync_pokeApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchAsync/pokeApi */ \"./src/fetchAsync/pokeApi.js\");\n\n\n\nObject(_fetchAsync_pokeApi__WEBPACK_IMPORTED_MODULE_0__[\"getPokemon\"])('132').then(poke => console.log(poke.name));\nObject(_fetchAsync_pokeApi__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(pokemons => pokemons.map(pokemon => console.log(pokemon.name)));\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });