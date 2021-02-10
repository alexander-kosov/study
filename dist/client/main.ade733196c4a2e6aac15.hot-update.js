webpackHotUpdate("main",{

/***/ "./src/shared/CommentList/ResponseComment/ResponseComment.tsx":
/*!********************************************************************!*\
  !*** ./src/shared/CommentList/ResponseComment/ResponseComment.tsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar responsecomment_less_1 = __importDefault(__webpack_require__(/*! ./responsecomment.less */ \"./src/shared/CommentList/ResponseComment/responsecomment.less\"));\r\nfunction ResponseComment(props) {\r\n    var ref = react_1.useRef(null);\r\n    function handleSubmit(event) {\r\n        var _a, _b;\r\n        event.preventDefault();\r\n        console.log((_a = ref.current) === null || _a === void 0 ? void 0 : _a.value);\r\n        (_b = props.onClose) === null || _b === void 0 ? void 0 : _b.call(props);\r\n    }\r\n    react_1.useEffect(function () {\r\n        ref.current && ref.current.focus();\r\n    }, []);\r\n    return (react_1.default.createElement(\"div\", { className: responsecomment_less_1.default.ResponseComment },\r\n        react_1.default.createElement(\"div\", { className: responsecomment_less_1.default.ResponseCommentCaption },\r\n            react_1.default.createElement(\"img\", { className: responsecomment_less_1.default.avatar, src: \"https://cdn.dribbble.com/users/133681/avatars/mini/46a5fbb029199915f49a465fb2dc4ac9.png?1589805794\", alt: \"avatar\" }),\r\n            react_1.default.createElement(\"div\", { className: responsecomment_less_1.default.name }, \"\\u0412\\u0430\\u0441\\u0438\\u043B\\u0438\\u0439 \\u0420\\u043E\\u0433\\u043E\\u0432\")),\r\n        react_1.default.createElement(\"form\", { className: responsecomment_less_1.default.form, onSubmit: handleSubmit },\r\n            react_1.default.createElement(\"textarea\", { className: responsecomment_less_1.default.input, ref: ref }),\r\n            react_1.default.createElement(\"button\", { type: \"submit\", className: responsecomment_less_1.default.button }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\"))));\r\n}\r\nexports.default = ResponseComment;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentList/ResponseComment/ResponseComment.tsx?");

/***/ }),

/***/ "./src/shared/CommentList/ResponseComment/index.ts":
/*!*********************************************************!*\
  !*** ./src/shared/CommentList/ResponseComment/index.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ResponseComment_1 = __importDefault(__webpack_require__(/*! ./ResponseComment */ \"./src/shared/CommentList/ResponseComment/ResponseComment.tsx\"));\r\nexports.default = ResponseComment_1.default;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentList/ResponseComment/index.ts?");

/***/ })

})