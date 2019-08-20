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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nclass FormList {\r\n    constructor(form) {\r\n        this.form_list_filter = this._filter(form.children);\r\n        this._init(this.form_list_filter);\r\n    }\r\n    _filter(form_children) {\r\n        const form_list = [];\r\n        Array.from(form_children).forEach(el => {\r\n            if ((el.localName == 'input') || (el.localName == 'textarea')) {\r\n                form_list.push(el);\r\n            }\r\n        });\r\n        return form_list;\r\n    }\r\n    _init(form_list_filter) {\r\n        const class_list = {\r\n            'name': FormName,\r\n            'mail': FormMail,\r\n            'number': FormNumber,\r\n            'text': FormText,\r\n            'submit_btn': FormSubmit,\r\n        };\r\n        const new_class_list = [];\r\n        form_list_filter.forEach((el, i, list) => {\r\n            const element = new class_list[el.classList[0]](el, list);\r\n            new_class_list.push(element);\r\n        });\r\n    }\r\n}\r\n\r\nclass FormElement {\r\n    constructor(element, list) {\r\n        this.element = element;\r\n        this.list = list\r\n        this._createEvent();\r\n    }\r\n    _createEvent() {\r\n        return false;\r\n    }\r\n    _checkEvent(pattern) {\r\n        if (pattern.test(this.element.value)) { \r\n            if (!(this.element.value.match(pattern)[0] == this.element.value)) {\r\n                this.element.classList.add('error');\r\n            } else if (this.element.classList.contains('error') && pattern.test(this.element.value)) {\r\n                this.element.classList.remove('error');\r\n            }\r\n        } else {\r\n            this.element.classList.add('error');\r\n        }\r\n    }\r\n}\r\n\r\nclass FormName extends FormElement {\r\n    _createEvent() {\r\n        this.element.addEventListener('change', event => {\r\n            const pattern = /[А-ЯA-Zа-яa-z]+/\r\n            this._checkEvent(pattern);\r\n        });\r\n    }\r\n}\r\n\r\nclass FormMail extends FormElement {\r\n    _createEvent() {\r\n        this.element.addEventListener('change', event => {\r\n            const pattern = /[a-z0-9_\\.-]+@[a-z0-9_\\.-]+\\.[a-z\\.]+/g\r\n            this._checkEvent(pattern);\r\n        });\r\n    }\r\n}\r\n\r\nclass FormNumber extends FormElement {\r\n    _createEvent() {\r\n        this.element.addEventListener('change', event => {\r\n            const pattern = /\\+7\\([0-9]{3}\\)[0-9]{3}-[0-9]{4}/g\r\n            this._checkEvent(pattern);\r\n        });\r\n    }\r\n}\r\n\r\nclass FormText extends FormElement {\r\n}\r\n\r\nclass FormSubmit extends FormElement {\r\n    _createEvent() {\r\n        this.element.addEventListener('click', event => {\r\n            const error_list = this.list.filter(el => el.classList.contains('error'));\r\n            const value_list = this.list.filter(el => (el.value == '') && (el.type != 'submit'))\r\n            if ((error_list.length != 0) || (value_list.length != 0)) {\r\n                alert('Вы ввели неверные данные.');\r\n            } else {\r\n                alert('Сообщение отправлено.');\r\n            }\r\n        });\r\n    }\r\n}\r\n\r\nconst form = document.querySelector('.feedback');\r\nlet feedback = new FormList(form);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });