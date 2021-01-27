webpackHotUpdate("main",{

/***/ "./src/shared/CardsList/Card/Menu/Menu.tsx":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/Menu.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar menu_less_1 = __importDefault(__webpack_require__(/*! ./menu.less */ \"./src/shared/CardsList/Card/Menu/menu.less\"));\r\nvar Dropdown_1 = __importDefault(__webpack_require__(/*! ../../../Dropdown */ \"./src/shared/Dropdown/index.ts\"));\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\r\nvar GenericList_1 = __webpack_require__(/*! ../../../../shared/GenericList/GenericList */ \"./src/shared/GenericList/GenericList.tsx\");\r\nvar merge_1 = __webpack_require__(/*! ../../../../utils/js/merge */ \"./src/utils/js/merge.ts\");\r\nvar Icons_1 = __webpack_require__(/*! ../../../Icons */ \"./src/shared/Icons/index.ts\");\r\nvar LIST = [\r\n    { text: 'Скрыть', icon: 'block' },\r\n    { text: 'Пожаловаться', icon: 'warning' },\r\n    { text: 'Закрыть' }\r\n    //].map((item: {value: string})=>({...item, id: generateRandomString()}));\r\n    //].map(assignId);\r\n].map(generateRandomIndex_1.generateId);\r\nfunction CardMenu() {\r\n    var _a = react_1.default.useState(LIST), list = _a[0], setList = _a[1];\r\n    var _b = react_1.default.useState(false), menuOpen = _b[0], setMenuOpen = _b[1];\r\n    var handleItemClick = function (id) {\r\n        console.log(\"clicked\", id);\r\n    };\r\n    var handleButtonClick = function () {\r\n        //setMenuOpen(!menuOpen)\r\n    };\r\n    var button = (react_1.default.createElement(\"button\", { className: menu_less_1.default.menuButton, onClick: handleButtonClick },\r\n        react_1.default.createElement(Icons_1.MenuIcon, null)));\r\n    return (react_1.default.createElement(\"div\", { className: menu_less_1.default.menu },\r\n        react_1.default.createElement(Dropdown_1.default, { onOpen: function () { return console.log('opened'); }, onClose: function () { return console.log('closed'); }, \r\n            // isOpen={menuOpen} \r\n            button: button },\r\n            react_1.default.createElement(\"div\", { className: menu_less_1.default.dropdown },\r\n                react_1.default.createElement(GenericList_1.GenericList, { list: list.map(merge_1.merge({ onClick: handleItemClick })) }),\r\n                react_1.default.createElement(\"button\", { className: menu_less_1.default.closeButton }, \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\")))));\r\n}\r\nexports.default = CardMenu;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/Menu.tsx?");

/***/ }),

/***/ "./src/shared/Icons/BlockIcon.tsx":
/*!****************************************!*\
  !*** ./src/shared/Icons/BlockIcon.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.BlockIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nfunction BlockIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"12\", height: \"12\", viewBox: \"0 0 12 12\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM6 10.8C3.348 10.8 1.2 8.652 1.2 6C1.2 4.89 1.578 3.87 2.214 3.06L8.94 9.786C8.13 10.422 7.11 10.8 6 10.8ZM9.786 8.94L3.06 2.214C3.87 1.578 4.89 1.2 6 1.2C8.652 1.2 10.8 3.348 10.8 6C10.8 7.11 10.422 8.13 9.786 8.94Z\", fill: \"#999999\" })));\r\n}\r\nexports.BlockIcon = BlockIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/BlockIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/index.ts":
/*!***********************************!*\
  !*** ./src/shared/Icons/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MenuIcon */ \"./src/shared/Icons/MenuIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./BlockIcon */ \"./src/shared/Icons/BlockIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './WarningIcon'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/index.ts?");

/***/ })

})