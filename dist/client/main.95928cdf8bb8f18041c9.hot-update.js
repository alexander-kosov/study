webpackHotUpdate("main",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\r\nvar Layout_1 = __importDefault(__webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\"));\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar Header_1 = __importDefault(__webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\"));\r\nvar Content_1 = __importDefault(__webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\"));\r\nvar CardsList_1 = __importDefault(__webpack_require__(/*! ./shared/CardsList */ \"./src/shared/CardsList/index.ts\"));\r\nvar HooksExample_1 = __webpack_require__(/*! ./HooksExample */ \"./src/HooksExample.tsx\");\r\nvar pickFromSyntheticEvent_1 = __webpack_require__(/*! ../utils/react/pickFromSyntheticEvent */ \"./utils/react/pickFromSyntheticEvent.tsx\");\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../utils/react/generateRandomIndex */ \"./utils/react/generateRandomIndex.ts\");\r\nvar GenericList_1 = __webpack_require__(/*! ./shared/GenericList/GenericList */ \"./src/shared/GenericList/GenericList.tsx\");\r\n//import { nanoid } from 'nanoid';\r\n/* выносится ВНЕ AppComponent, чтобы не перегенерировалась каждый раз */\r\nvar LIST = [\r\n    { value: 'some' },\r\n    { value: 'other some' },\r\n    { value: 'one more some' },\r\n    { value: 'not some' },\r\n    { value: 'other not some' }\r\n    //].map((item: {value: string})=>({...item, id: generateRandomString()}));\r\n    //].map(assignId);\r\n].map(generateRandomIndex_1.generateId);\r\n//].map((item:{value:string})=> ({...item, id:nanoid()}));\r\nfunction AppComponent() {\r\n    // const [isVisible, setIsVisible] = React.useState(false);\r\n    var _a = react_1.default.useState(''), title = _a[0], setTitle = _a[1];\r\n    var isVisible = HooksExample_1.useIsMounted()[0];\r\n    return (react_1.default.createElement(Layout_1.default, null,\r\n        react_1.default.createElement(Header_1.default, null),\r\n        react_1.default.createElement(Content_1.default, null,\r\n            react_1.default.createElement(CardsList_1.default, null),\r\n            react_1.default.createElement(GenericList_1.MyList, { list: LIST }),\r\n            react_1.default.createElement(\"hr\", null),\r\n            react_1.default.createElement(\"input\", { type: \"text\", onChange: pickFromSyntheticEvent_1.getValue(setTitle) }),\r\n            isVisible && react_1.default.createElement(HooksExample_1.MyHooks, { title: title, id: '11' }))));\r\n}\r\nexports.App = root_1.hot(function () { return react_1.default.createElement(AppComponent, null); });\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/shared/GenericList/GenericList.tsx":
/*!************************************************!*\
  !*** ./src/shared/GenericList/GenericList.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MyList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nfunction MyList(_a) {\r\n    var list = _a.list, onClick = _a.onClick;\r\n    return (react_1.default.createElement(\"ul\", null, list.map(function (item, index) { return (react_1.default.createElement(\"li\", { onClick: function () { return onClick(item.id); }, key: item.id },\r\n        item.value,\r\n        \" (\",\r\n        item.id,\r\n        \")\")); })));\r\n}\r\nexports.MyList = MyList;\r\n;\r\n\n\n//# sourceURL=webpack:///./src/shared/GenericList/GenericList.tsx?");

/***/ })

})