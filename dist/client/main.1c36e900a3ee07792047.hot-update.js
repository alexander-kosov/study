webpackHotUpdate("main",{

/***/ "./src/shared/Dropdown/Dropdown.tsx":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/Dropdown.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"./node_modules/@hot-loader/react-dom/index.js\"));\r\nvar dropdown_less_1 = __importDefault(__webpack_require__(/*! ./dropdown.less */ \"./src/shared/Dropdown/dropdown.less\"));\r\n;\r\nvar NOOP = function () { }; //чтобы onOpen и onClose срабатывали всегда, чтобы TS не выдавал ошибку в случае отсутствия этих функций\r\nfunction Dropdown(_a) {\r\n    var button = _a.button, children = _a.children, isOpen = _a.isOpen, _b = _a.onClose, onClose = _b === void 0 ? NOOP : _b, _c = _a.onOpen, onOpen = _c === void 0 ? NOOP : _c;\r\n    var _d = react_1.default.useState(isOpen), isDropdownOpen = _d[0], setIsDropdownOpen = _d[1];\r\n    var _e = react_1.default.useState({ top: '0', left: '0' }), isDropdownCoord = _e[0], setIsDropdownCoord = _e[1];\r\n    var containerRef = react_1.default.useRef(null);\r\n    react_1.default.useEffect(function () {\r\n        var _a;\r\n        var head = (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();\r\n        var headBottom = head === null || head === void 0 ? void 0 : head.bottom;\r\n        var headRight = head === null || head === void 0 ? void 0 : head.right;\r\n        setIsDropdownCoord({ top: headBottom + 'px', left: headRight + 'px' });\r\n        //console.log('coord', isDropdownCoord);\r\n    }, [isDropdownOpen]);\r\n    react_1.default.useEffect(function () { return setIsDropdownOpen(isOpen); }, [isOpen]);\r\n    react_1.default.useEffect(function () { return isDropdownOpen ? onOpen() : onClose(); }, [isDropdownOpen]);\r\n    var handleOpen = function () {\r\n        if (isOpen === undefined) {\r\n            // если isOpen не передается, хотим, чтобы список работал автоматически\r\n            setIsDropdownOpen(!isDropdownOpen);\r\n        }\r\n    };\r\n    var node = document.querySelector('#modal_root');\r\n    if (!node)\r\n        return null;\r\n    var drop = react_dom_1.default.createPortal((react_1.default.createElement(react_1.default.Fragment, null, isDropdownOpen && (react_1.default.createElement(\"div\", { className: dropdown_less_1.default.listContainer, style: isDropdownCoord },\r\n        react_1.default.createElement(\"div\", { className: dropdown_less_1.default.list, onClick: function () { return setIsDropdownOpen(false); } }, children))))), node);\r\n    return (react_1.default.createElement(\"div\", { className: dropdown_less_1.default.container, ref: containerRef },\r\n        react_1.default.createElement(\"div\", { onClick: handleOpen }, button),\r\n        isDropdownOpen && drop));\r\n}\r\nexports.default = Dropdown;\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/Dropdown.tsx?");

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