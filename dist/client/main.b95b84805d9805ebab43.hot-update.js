webpackHotUpdate("main",{

/***/ "./src/shared/CardsList/CardsList.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/CardsList.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar cardslist_less_1 = __importDefault(__webpack_require__(/*! ./cardslist.less */ \"./src/shared/CardsList/cardslist.less\"));\r\nvar Card_1 = __importDefault(__webpack_require__(/*! ./Card */ \"./src/shared/CardsList/Card/index.ts\"));\r\nvar usePostsData_1 = __webpack_require__(/*! ../../hooks/usePostsData */ \"./src/hooks/usePostsData.ts\");\r\nfunction CardsList() {\r\n    //console.log('usePostsData');\r\n    var posts = usePostsData_1.usePostsData()[0];\r\n    console.log(\"posts:\", posts);\r\n    var items = posts.map(function (post) {\r\n        console.log(\"Post:\", post.data.author, post);\r\n        return react_1.default.createElement(Card_1.default, null);\r\n    });\r\n    return (react_1.default.createElement(\"ul\", { className: cardslist_less_1.default.cardslist }, items));\r\n}\r\nexports.default = CardsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardsList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/index.ts":
/*!***************************************!*\
  !*** ./src/shared/CardsList/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar CardsList_1 = __importDefault(__webpack_require__(/*! ./CardsList */ \"./src/shared/CardsList/CardsList.tsx\"));\r\nexports.default = CardsList_1.default;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/index.ts?");

/***/ })

})