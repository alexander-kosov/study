webpackHotUpdate("main",{

/***/ "./src/shared/CardsList/CardsList.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/CardsList.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar cardslist_less_1 = __importDefault(__webpack_require__(/*! ./cardslist.less */ \"./src/shared/CardsList/cardslist.less\"));\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\n// interface IPostObj {\r\n//     kind: string; \r\n//     data: {\r\n//         id: string;\r\n//         author: string;\r\n//         created_utc: number;\r\n//         num_comments: number;\r\n//         permalink: string;\r\n//         title: string;\r\n//         url: string;\r\n//         thumbnail: string; \r\n//     }\r\n// }\r\nfunction CardsList() {\r\n    react_1.useEffect(function () {\r\n        axios_1.default.get('https://www.reddit.com/api/v1/me/rising', {\r\n            headers: { Authorization: \"bearer \" + getState().token }\r\n        })\r\n            .then(function (resp) {\r\n        })\r\n            .catch(function (error) {\r\n        });\r\n    }, []);\r\n    // const [posts] = usePostsData();\r\n    // let items = posts.map((post:IPostObj)=>{\r\n    //     return <Card data={post.data} key={post.data.id}/>\r\n    // });\r\n    // return (\r\n    //     <ul className={styles.cardslist}>\r\n    //         {items}\r\n    //     </ul>\r\n    // );\r\n    return (react_1.default.createElement(\"ul\", { className: cardslist_less_1.default.cardslist }));\r\n}\r\nexports.default = CardsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardsList.tsx?");

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