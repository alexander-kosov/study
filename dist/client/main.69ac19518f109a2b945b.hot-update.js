webpackHotUpdate("main",{

/***/ "./src/shared/CommentForm/CommentForm.tsx":
/*!************************************************!*\
  !*** ./src/shared/CommentForm/CommentForm.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar commentform_less_1 = __importDefault(__webpack_require__(/*! ./commentform.less */ \"./src/shared/CommentForm/commentform.less\"));\r\nvar formik_1 = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\r\nfunction validateComment(value) {\r\n    var error = '';\r\n    if (value.length >= 3)\r\n        error = \"Должно быть больше 3х символов!\";\r\n    return error;\r\n}\r\nfunction CommentForm() {\r\n    // const [value, setValue] = useState('');\r\n    // const [touched, setTouched] = useState(false); \r\n    // const [valueError, setValueError] = useState('');\r\n    return (react_1.default.createElement(formik_1.Formik, { initialValues: {\r\n            comment: '',\r\n        }, onSubmit: function (values, _a) {\r\n            var setSubmitting = _a.setSubmitting;\r\n            //типа асинхронно\r\n            setTimeout(function () {\r\n                alert(JSON.stringify(values, null, 2));\r\n                setSubmitting(false);\r\n            }, 0);\r\n        } }, function (_a) {\r\n        var errors = _a.errors, touched = _a.touched, validateField = _a.validateField, validateForm = _a.validateForm;\r\n        return (react_1.default.createElement(formik_1.Form, { className: commentform_less_1.default.form },\r\n            react_1.default.createElement(\"label\", { htmlFor: \"comment\", style: { visibility: 'hidden' } }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\\u0438\\u0439\"),\r\n            react_1.default.createElement(formik_1.Field, __assign({ className: commentform_less_1.default.input, type: \"comment\", id: \"comment\", name: \"comment\", as: 'textarea', validate: validateComment }, errors.comment && touched.comment && react_1.default.createElement(\"div\", null, errors.comment))),\r\n            react_1.default.createElement(\"button\", { type: \"submit\", className: commentform_less_1.default.button }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\")));\r\n    })\r\n    // <form className={styles.form} onSubmit={handleSubmit}>\r\n    //     <textarea className={styles.input} \r\n    //     value={value} \r\n    //     onChange={handleChange}\r\n    //     // onBlur={handleBlur}\r\n    //     aria-invalid={valueError?'true':undefined}\r\n    //     />\r\n    //     {touched && validateValue() && (<div style={{color: 'red'}}>{validateValue()}</div>)}\r\n    //     <button type=\"submit\" className={styles.button}>Комментировать</button>\t\t\r\n    // </form>\r\n    );\r\n}\r\nexports.default = CommentForm;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/CommentForm.tsx?");

/***/ }),

/***/ "./src/shared/CommentForm/index.ts":
/*!*****************************************!*\
  !*** ./src/shared/CommentForm/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar CommentForm_1 = __importDefault(__webpack_require__(/*! ./CommentForm */ \"./src/shared/CommentForm/CommentForm.tsx\"));\r\nexports.default = CommentForm_1.default;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/index.ts?");

/***/ })

})