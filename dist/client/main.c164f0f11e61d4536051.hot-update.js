webpackHotUpdate("main",{

/***/ "./src/shared/CommentList/CommentItem/CommentItem.tsx":
/*!************************************************************!*\
  !*** ./src/shared/CommentList/CommentItem/CommentItem.tsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar Icons_1 = __webpack_require__(/*! ../../Icons */ \"./src/shared/Icons/index.ts\");\r\nvar commentitem_less_1 = __importDefault(__webpack_require__(/*! ./commentitem.less */ \"./src/shared/CommentList/CommentItem/commentitem.less\"));\r\n//import {BlockIcon, WarningIcon, CommentIcon, ShareIcon, SaveIcon} from '../../../../Icons';\r\nfunction CommentItem() {\r\n    var _a = react_1.default.useState(false), openResponseComment = _a[0], setOpenResponseComment = _a[1];\r\n    return (react_1.default.createElement(\"li\", { className: commentitem_less_1.default.commentItem },\r\n        react_1.default.createElement(\"div\", { className: commentitem_less_1.default.commentCaption },\r\n            react_1.default.createElement(\"img\", { className: commentitem_less_1.default.avatar, src: \"https://cdn.dribbble.com/users/133681/avatars/mini/46a5fbb029199915f49a465fb2dc4ac9.png?1589805794\", alt: \"avatar\" }),\r\n            react_1.default.createElement(\"div\", { className: commentitem_less_1.default.name }, \"\\u0412\\u0430\\u0441\\u0438\\u043B\\u0438\\u0439 \\u0420\\u043E\\u0433\\u043E\\u0432\"),\r\n            react_1.default.createElement(\"div\", { className: commentitem_less_1.default.date }, \"2 \\u0447\\u0430\\u0441\\u0430 \\u043D\\u0430\\u0437\\u0430\\u0434\"),\r\n            react_1.default.createElement(\"div\", { className: commentitem_less_1.default.group }, \"\\u041B\\u0438\\u0433\\u0430 \\u043F\\u0440\\u0430\\u0432\\u043E\\u043E\\u0445\\u0440\\u0430\\u043D\\u0438\\u0442\\u0435\\u043B\\u0435\\u0439\")),\r\n        react_1.default.createElement(\"div\", { className: commentitem_less_1.default.commentBody }, \"asdgf wg ertgherth tybh werth rtyj yun fgb erth rtjk rythn dfgh ertjhrt yj\"),\r\n        react_1.default.createElement(\"div\", { className: commentitem_less_1.default.commentButtons },\r\n            react_1.default.createElement(\"button\", { className: commentitem_less_1.default.button, onClick: function () { return setOpenResponseComment(true); } },\r\n                react_1.default.createElement(Icons_1.CommentIcon, null),\r\n                react_1.default.createElement(\"span\", null, \"\\u041E\\u0442\\u0432\\u0435\\u0442\\u0438\\u0442\\u044C\")),\r\n            react_1.default.createElement(\"button\", { className: commentitem_less_1.default.button },\r\n                react_1.default.createElement(Icons_1.ShareIcon, null),\r\n                react_1.default.createElement(\"span\", null, \"\\u041F\\u043E\\u0434\\u0435\\u043B\\u0438\\u0442\\u044C\\u0441\\u044F\")),\r\n            react_1.default.createElement(\"button\", { className: commentitem_less_1.default.button },\r\n                react_1.default.createElement(Icons_1.WarningIcon, null),\r\n                react_1.default.createElement(\"span\", null, \"\\u041F\\u043E\\u0436\\u0430\\u043B\\u043E\\u0432\\u0430\\u0442\\u044C\\u0441\\u044F\")))));\r\n}\r\nexports.default = CommentItem;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentList/CommentItem/CommentItem.tsx?");

/***/ }),

/***/ "./src/shared/CommentList/CommentItem/index.ts":
/*!*****************************************************!*\
  !*** ./src/shared/CommentList/CommentItem/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar CommentItem_1 = __importDefault(__webpack_require__(/*! ./CommentItem */ \"./src/shared/CommentList/CommentItem/CommentItem.tsx\"));\r\nexports.default = CommentItem_1.default;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentList/CommentItem/index.ts?");

/***/ })

})