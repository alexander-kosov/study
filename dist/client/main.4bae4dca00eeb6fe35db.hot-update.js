webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/Dropdown/dropdown.less":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/less-loader/dist/cjs.js!./src/shared/Dropdown/dropdown.less ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/dropdown.less?./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\r\nvar Layout_1 = __importDefault(__webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\"));\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar Header_1 = __importDefault(__webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\"));\r\nvar Content_1 = __importDefault(__webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\"));\r\nvar CardsList_1 = __importDefault(__webpack_require__(/*! ./shared/CardsList */ \"./src/shared/CardsList/index.ts\"));\r\nvar HooksExample_1 = __webpack_require__(/*! ./HooksExample */ \"./src/HooksExample.tsx\");\r\nvar pickFromSyntheticEvent_1 = __webpack_require__(/*! ../utils/react/pickFromSyntheticEvent */ \"./utils/react/pickFromSyntheticEvent.tsx\");\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../utils/react/generateRandomIndex */ \"./utils/react/generateRandomIndex.ts\");\r\nvar GenericList_1 = __webpack_require__(/*! ./shared/GenericList/GenericList */ \"./src/shared/GenericList/GenericList.tsx\");\r\nvar merge_1 = __webpack_require__(/*! ../utils/js/merge */ \"./utils/js/merge.ts\");\r\nvar Dropdown_1 = __importDefault(__webpack_require__(/*! ./shared/Dropdown */ \"./src/shared/Dropdown/index.ts\"));\r\n//import { nanoid } from 'nanoid';\r\n/* выносится ВНЕ AppComponent, чтобы не перегенерировалась каждый раз */\r\nvar LIST = [\r\n    { text: 'some' },\r\n    { text: 'other some' },\r\n    { text: 'one more some' },\r\n    { text: 'not some' },\r\n    { text: 'other not some' }\r\n    //].map((item: {value: string})=>({...item, id: generateRandomString()}));\r\n    //].map(assignId);\r\n].map(generateRandomIndex_1.generateId);\r\n//].map((item:{value:string})=> ({...item, id:nanoid()}));\r\nfunction AppComponent() {\r\n    // const [isVisible, setIsVisible] = React.useState(false);\r\n    var _a = react_1.default.useState(''), title = _a[0], setTitle = _a[1];\r\n    var isVisible = HooksExample_1.useIsMounted()[0];\r\n    var _b = react_1.default.useState(LIST), list = _b[0], setList = _b[1];\r\n    var handleItemClick = function (id) {\r\n        setList(list.filter(function (item) { return item.id !== id; }));\r\n    };\r\n    var handleAdd = function () {\r\n        setList(list.concat(generateRandomIndex_1.generateId({ text: generateRandomIndex_1.generateRandomString() })));\r\n    };\r\n    return (react_1.default.createElement(Layout_1.default, null,\r\n        react_1.default.createElement(Header_1.default, null),\r\n        react_1.default.createElement(Content_1.default, null,\r\n            react_1.default.createElement(CardsList_1.default, null),\r\n            react_1.default.createElement(\"hr\", null),\r\n            react_1.default.createElement(Dropdown_1.default, null,\r\n                react_1.default.createElement(\"ul\", null,\r\n                    react_1.default.createElement(\"li\", null, \"test\"))),\r\n            react_1.default.createElement(\"button\", { onClick: handleAdd }, \"Add element to list\"),\r\n            react_1.default.createElement(GenericList_1.GenericList, { list: list.map(merge_1.merge({ onClick: handleItemClick })) }),\r\n            react_1.default.createElement(\"hr\", null),\r\n            react_1.default.createElement(\"input\", { type: \"text\", onChange: pickFromSyntheticEvent_1.getValue(setTitle) }),\r\n            isVisible && react_1.default.createElement(HooksExample_1.MyHooks, { title: title, id: '11' }))));\r\n}\r\nexports.App = root_1.hot(function () { return react_1.default.createElement(AppComponent, null); });\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/client/index.jsx":
/*!******************************!*\
  !*** ./src/client/index.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar ReactDOM = __importStar(__webpack_require__(/*! react-dom */ \"./node_modules/@hot-loader/react-dom/index.js\"));\r\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\r\n//чтобы срабатывало только в браузере(т.к. подключим SSR)\r\nwindow.addEventListener('load', function () {\r\n    //ReactDOM.render(<Header />, document.getElementById('react-root'));\r\n    ReactDOM.hydrate(React.createElement(App_1.App, null), document.getElementById('react-root'));\r\n});\r\n\n\n//# sourceURL=webpack:///./src/client/index.jsx?");

/***/ }),

/***/ "./src/shared/Dropdown/Dropdown.tsx":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/Dropdown.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar dropdown_less_1 = __importDefault(__webpack_require__(/*! ./dropdown.less */ \"./src/shared/Dropdown/dropdown.less\"));\r\n;\r\nfunction Dropdown(_a) {\r\n    var button = _a.button, children = _a.children;\r\n    var _b = react_1.default.useState(false), isDropdownOpen = _b[0], setIsDropdownOpen = _b[1];\r\n    return (react_1.default.createElement(\"div\", { className: dropdown_less_1.default.dropdown },\r\n        react_1.default.createElement(\"div\", { onClick: function () { return setIsDropdownOpen(!isDropdownOpen); } }, button),\r\n        isDropdownOpen && (react_1.default.createElement(\"div\", null,\r\n            react_1.default.createElement(\"div\", { onClick: function () { return setIsDropdownOpen(false); } }, children)))));\r\n}\r\nexports.default = Dropdown;\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/Dropdown.tsx?");

/***/ }),

/***/ "./src/shared/Dropdown/dropdown.less":
/*!*******************************************!*\
  !*** ./src/shared/Dropdown/dropdown.less ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_less_loader_dist_cjs_js_dropdown_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/less-loader/dist/cjs.js!./dropdown.less */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/Dropdown/dropdown.less\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_less_loader_dist_cjs_js_dropdown_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"], options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_less_loader_dist_cjs_js_dropdown_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var oldLocals = _node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_less_loader_dist_cjs_js_dropdown_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locals;\n\n    module.hot.accept(\n      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/less-loader/dist/cjs.js!./dropdown.less */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/Dropdown/dropdown.less\",\n      function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_less_loader_dist_cjs_js_dropdown_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/less-loader/dist/cjs.js!./dropdown.less */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/Dropdown/dropdown.less\");\n(function () {\n        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_less_loader_dist_cjs_js_dropdown_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locals, undefined)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = _node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_less_loader_dist_cjs_js_dropdown_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_less_loader_dist_cjs_js_dropdown_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_ref_5_1_node_modules_less_loader_dist_cjs_js_dropdown_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].locals || {});\n\n//# sourceURL=webpack:///./src/shared/Dropdown/dropdown.less?");

/***/ }),

/***/ "./src/shared/Dropdown/index.ts":
/*!**************************************!*\
  !*** ./src/shared/Dropdown/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Dropdown_1 = __importDefault(__webpack_require__(/*! ./Dropdown */ \"./src/shared/Dropdown/Dropdown.tsx\"));\r\nexports.default = Dropdown_1.default;\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/index.ts?");

/***/ })

})