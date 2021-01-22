webpackHotUpdate("main",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\r\nvar Layout_1 = __importDefault(__webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\"));\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar Header_1 = __importDefault(__webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\"));\r\nvar Content_1 = __importDefault(__webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\"));\r\nvar CardsList_1 = __importDefault(__webpack_require__(/*! ./shared/CardsList */ \"./src/shared/CardsList/index.ts\"));\r\nvar HooksExample_1 = __webpack_require__(/*! ./HooksExample */ \"./src/HooksExample.tsx\");\r\nvar pickFromSyntheticEvent_1 = __webpack_require__(/*! ../utils/react/pickFromSyntheticEvent */ \"./utils/react/pickFromSyntheticEvent.tsx\");\r\nfunction AppComponent() {\r\n    // const [isVisible, setIsVisible] = React.useState(false);\r\n    var _a = react_1.default.useState(''), title = _a[0], setTitle = _a[1];\r\n    var isVisible = HooksExample_1.useIsMounted()[0];\r\n    return (react_1.default.createElement(Layout_1.default, null,\r\n        react_1.default.createElement(Header_1.default, null),\r\n        react_1.default.createElement(Content_1.default, null,\r\n            react_1.default.createElement(CardsList_1.default, null),\r\n            react_1.default.createElement(\"input\", { type: \"text\", onChange: pickFromSyntheticEvent_1.getValue(setTitle) }),\r\n            isVisible && react_1.default.createElement(HooksExample_1.MyHooks, { title: title, id: '11' }))));\r\n}\r\nexports.App = root_1.hot(function () { return react_1.default.createElement(AppComponent, null); });\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/HooksExample.tsx":
/*!******************************!*\
  !*** ./src/HooksExample.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useIsMounted = exports.MyHooks = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nfunction MyHooks(_a) {\r\n    var title = _a.title, id = _a.id;\r\n    //MEMO:\r\n    var items = 100;\r\n    var multiplier = 3;\r\n    var result = react_1.default.useMemo(function () { return calculate(items, multiplier); }, [items, multiplier]);\r\n    // /memo\r\n    react_1.default.useEffect(function () {\r\n        console.log('1)componentDidMount');\r\n        console.log('1)componentWillUpdate');\r\n    });\r\n    react_1.default.useEffect(function () {\r\n        console.log('2)componentDidMount');\r\n        return function () {\r\n            console.log('2)componentWillUnmount');\r\n        };\r\n    }, []);\r\n    react_1.default.useEffect(function () {\r\n        console.log('3)componentWillRecieveProps', title);\r\n    }, [title]);\r\n    //-------------------\r\n    var isMounted = useIsMounted()[0];\r\n    react_1.default.useEffect(function () {\r\n        console.log('isMounted:', isMounted);\r\n    }, [isMounted]);\r\n    return (react_1.default.createElement(\"div\", null,\r\n        title,\r\n        \" \",\r\n        id,\r\n        \" (\",\r\n        result,\r\n        \")\"));\r\n}\r\nexports.MyHooks = MyHooks;\r\nfunction useIsMounted() {\r\n    var _a = react_1.default.useState(false), isMounted = _a[0], setIsMounted = _a[1];\r\n    react_1.default.useEffect(function () {\r\n        setIsMounted(true);\r\n    }, []);\r\n    return [isMounted];\r\n}\r\nexports.useIsMounted = useIsMounted;\r\n//for Memo\r\nfunction calculate(items, multiplier) {\r\n    return new Array(items).fill(1).reduce(function (a, v) { return a * multiplier; });\r\n}\r\n;\r\n\n\n//# sourceURL=webpack:///./src/HooksExample.tsx?");

/***/ })

})