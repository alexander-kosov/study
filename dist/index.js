/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ ((module) => {

eval("/*\r\nobject-assign\r\n(c) Sindre Sorhus\r\n@license MIT\r\n*/\r\n\r\n/* eslint-disable no-unused-vars */\r\nvar getOwnPropertySymbols = Object.getOwnPropertySymbols;\r\nvar hasOwnProperty = Object.prototype.hasOwnProperty;\r\nvar propIsEnumerable = Object.prototype.propertyIsEnumerable;\r\nfunction toObject(val) {\r\n    if (val === null || val === undefined) {\r\n        throw new TypeError('Object.assign cannot be called with null or undefined');\r\n    }\r\n    return Object(val);\r\n}\r\nfunction shouldUseNative() {\r\n    try {\r\n        if (!Object.assign) {\r\n            return false;\r\n        }\r\n        // Detect buggy property enumeration order in older V8 versions.\r\n        // https://bugs.chromium.org/p/v8/issues/detail?id=4118\r\n        var test1 = new String('abc'); // eslint-disable-line no-new-wrappers\r\n        test1[5] = 'de';\r\n        if (Object.getOwnPropertyNames(test1)[0] === '5') {\r\n            return false;\r\n        }\r\n        // https://bugs.chromium.org/p/v8/issues/detail?id=3056\r\n        var test2 = {};\r\n        for (var i = 0; i < 10; i++) {\r\n            test2['_' + String.fromCharCode(i)] = i;\r\n        }\r\n        var order2 = Object.getOwnPropertyNames(test2).map(function (n) {\r\n            return test2[n];\r\n        });\r\n        if (order2.join('') !== '0123456789') {\r\n            return false;\r\n        }\r\n        // https://bugs.chromium.org/p/v8/issues/detail?id=3056\r\n        var test3 = {};\r\n        'abcdefghijklmnopqrst'.split('').forEach(function (letter) {\r\n            test3[letter] = letter;\r\n        });\r\n        if (Object.keys(Object.assign({}, test3)).join('') !==\r\n            'abcdefghijklmnopqrst') {\r\n            return false;\r\n        }\r\n        return true;\r\n    }\r\n    catch (err) {\r\n        // We don't expect any of the above to throw, but better to be safe.\r\n        return false;\r\n    }\r\n}\r\nmodule.exports = shouldUseNative() ? Object.assign : function (target, source) {\r\n    var from;\r\n    var to = toObject(target);\r\n    var symbols;\r\n    for (var s = 1; s < arguments.length; s++) {\r\n        from = Object(arguments[s]);\r\n        for (var key in from) {\r\n            if (hasOwnProperty.call(from, key)) {\r\n                to[key] = from[key];\r\n            }\r\n        }\r\n        if (getOwnPropertySymbols) {\r\n            symbols = getOwnPropertySymbols(from);\r\n            for (var i = 0; i < symbols.length; i++) {\r\n                if (propIsEnumerable.call(from, symbols[i])) {\r\n                    to[symbols[i]] = from[symbols[i]];\r\n                }\r\n            }\r\n        }\r\n    }\r\n    return to;\r\n};\r\n\n\n//# sourceURL=webpack://lesson-1/./node_modules/object-assign/index.js?");

/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("/** @license React v17.0.1\r\n * react.development.js\r\n *\r\n * Copyright (c) Facebook, Inc. and its affiliates.\r\n *\r\n * This source code is licensed under the MIT license found in the\r\n * LICENSE file in the root directory of this source tree.\r\n */\r\n\r\nif (true) {\r\n    (function () {\r\n        'use strict';\r\n        var _assign = __webpack_require__(/*! object-assign */ \"./node_modules/object-assign/index.js\");\r\n        // TODO: this is special because it gets imported during build.\r\n        var ReactVersion = '17.0.1';\r\n        // ATTENTION\r\n        // When adding new symbols to this file,\r\n        // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'\r\n        // The Symbol used to tag the ReactElement-like types. If there is no native Symbol\r\n        // nor polyfill, then a plain number is used for performance.\r\n        var REACT_ELEMENT_TYPE = 0xeac7;\r\n        var REACT_PORTAL_TYPE = 0xeaca;\r\n        exports.Fragment = 0xeacb;\r\n        exports.StrictMode = 0xeacc;\r\n        exports.Profiler = 0xead2;\r\n        var REACT_PROVIDER_TYPE = 0xeacd;\r\n        var REACT_CONTEXT_TYPE = 0xeace;\r\n        var REACT_FORWARD_REF_TYPE = 0xead0;\r\n        exports.Suspense = 0xead1;\r\n        var REACT_SUSPENSE_LIST_TYPE = 0xead8;\r\n        var REACT_MEMO_TYPE = 0xead3;\r\n        var REACT_LAZY_TYPE = 0xead4;\r\n        var REACT_BLOCK_TYPE = 0xead9;\r\n        var REACT_SERVER_BLOCK_TYPE = 0xeada;\r\n        var REACT_FUNDAMENTAL_TYPE = 0xead5;\r\n        var REACT_SCOPE_TYPE = 0xead7;\r\n        var REACT_OPAQUE_ID_TYPE = 0xeae0;\r\n        var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;\r\n        var REACT_OFFSCREEN_TYPE = 0xeae2;\r\n        var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;\r\n        if (typeof Symbol === 'function' && Symbol.for) {\r\n            var symbolFor = Symbol.for;\r\n            REACT_ELEMENT_TYPE = symbolFor('react.element');\r\n            REACT_PORTAL_TYPE = symbolFor('react.portal');\r\n            exports.Fragment = symbolFor('react.fragment');\r\n            exports.StrictMode = symbolFor('react.strict_mode');\r\n            exports.Profiler = symbolFor('react.profiler');\r\n            REACT_PROVIDER_TYPE = symbolFor('react.provider');\r\n            REACT_CONTEXT_TYPE = symbolFor('react.context');\r\n            REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');\r\n            exports.Suspense = symbolFor('react.suspense');\r\n            REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');\r\n            REACT_MEMO_TYPE = symbolFor('react.memo');\r\n            REACT_LAZY_TYPE = symbolFor('react.lazy');\r\n            REACT_BLOCK_TYPE = symbolFor('react.block');\r\n            REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');\r\n            REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');\r\n            REACT_SCOPE_TYPE = symbolFor('react.scope');\r\n            REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');\r\n            REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');\r\n            REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');\r\n            REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');\r\n        }\r\n        var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;\r\n        var FAUX_ITERATOR_SYMBOL = '@@iterator';\r\n        function getIteratorFn(maybeIterable) {\r\n            if (maybeIterable === null || typeof maybeIterable !== 'object') {\r\n                return null;\r\n            }\r\n            var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];\r\n            if (typeof maybeIterator === 'function') {\r\n                return maybeIterator;\r\n            }\r\n            return null;\r\n        }\r\n        /**\r\n         * Keeps track of the current dispatcher.\r\n         */\r\n        var ReactCurrentDispatcher = {\r\n            /**\r\n             * @internal\r\n             * @type {ReactComponent}\r\n             */\r\n            current: null\r\n        };\r\n        /**\r\n         * Keeps track of the current batch's configuration such as how long an update\r\n         * should suspend for if it needs to.\r\n         */\r\n        var ReactCurrentBatchConfig = {\r\n            transition: 0\r\n        };\r\n        /**\r\n         * Keeps track of the current owner.\r\n         *\r\n         * The current owner is the component who should own any components that are\r\n         * currently being constructed.\r\n         */\r\n        var ReactCurrentOwner = {\r\n            /**\r\n             * @internal\r\n             * @type {ReactComponent}\r\n             */\r\n            current: null\r\n        };\r\n        var ReactDebugCurrentFrame = {};\r\n        var currentExtraStackFrame = null;\r\n        function setExtraStackFrame(stack) {\r\n            {\r\n                currentExtraStackFrame = stack;\r\n            }\r\n        }\r\n        {\r\n            ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {\r\n                {\r\n                    currentExtraStackFrame = stack;\r\n                }\r\n            }; // Stack implementation injected by the current renderer.\r\n            ReactDebugCurrentFrame.getCurrentStack = null;\r\n            ReactDebugCurrentFrame.getStackAddendum = function () {\r\n                var stack = ''; // Add an extra top frame while an element is being validated\r\n                if (currentExtraStackFrame) {\r\n                    stack += currentExtraStackFrame;\r\n                } // Delegate to the injected renderer-specific implementation\r\n                var impl = ReactDebugCurrentFrame.getCurrentStack;\r\n                if (impl) {\r\n                    stack += impl() || '';\r\n                }\r\n                return stack;\r\n            };\r\n        }\r\n        /**\r\n         * Used by act() to track whether you're inside an act() scope.\r\n         */\r\n        var IsSomeRendererActing = {\r\n            current: false\r\n        };\r\n        var ReactSharedInternals = {\r\n            ReactCurrentDispatcher: ReactCurrentDispatcher,\r\n            ReactCurrentBatchConfig: ReactCurrentBatchConfig,\r\n            ReactCurrentOwner: ReactCurrentOwner,\r\n            IsSomeRendererActing: IsSomeRendererActing,\r\n            // Used by renderers to avoid bundling object-assign twice in UMD bundles:\r\n            assign: _assign\r\n        };\r\n        {\r\n            ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;\r\n        }\r\n        // by calls to these methods by a Babel plugin.\r\n        //\r\n        // In PROD (or in packages without access to React internals),\r\n        // they are left as they are instead.\r\n        function warn(format) {\r\n            {\r\n                for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\r\n                    args[_key - 1] = arguments[_key];\r\n                }\r\n                printWarning('warn', format, args);\r\n            }\r\n        }\r\n        function error(format) {\r\n            {\r\n                for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {\r\n                    args[_key2 - 1] = arguments[_key2];\r\n                }\r\n                printWarning('error', format, args);\r\n            }\r\n        }\r\n        function printWarning(level, format, args) {\r\n            // When changing this logic, you might want to also\r\n            // update consoleWithStackDev.www.js as well.\r\n            {\r\n                var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;\r\n                var stack = ReactDebugCurrentFrame.getStackAddendum();\r\n                if (stack !== '') {\r\n                    format += '%s';\r\n                    args = args.concat([stack]);\r\n                }\r\n                var argsWithFormat = args.map(function (item) {\r\n                    return '' + item;\r\n                }); // Careful: RN currently depends on this prefix\r\n                argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it\r\n                // breaks IE9: https://github.com/facebook/react/issues/13610\r\n                // eslint-disable-next-line react-internal/no-production-logging\r\n                Function.prototype.apply.call(console[level], console, argsWithFormat);\r\n            }\r\n        }\r\n        var didWarnStateUpdateForUnmountedComponent = {};\r\n        function warnNoop(publicInstance, callerName) {\r\n            {\r\n                var _constructor = publicInstance.constructor;\r\n                var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';\r\n                var warningKey = componentName + \".\" + callerName;\r\n                if (didWarnStateUpdateForUnmountedComponent[warningKey]) {\r\n                    return;\r\n                }\r\n                error(\"Can't call %s on a component that is not yet mounted. \" + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);\r\n                didWarnStateUpdateForUnmountedComponent[warningKey] = true;\r\n            }\r\n        }\r\n        /**\r\n         * This is the abstract API for an update queue.\r\n         */\r\n        var ReactNoopUpdateQueue = {\r\n            /**\r\n             * Checks whether or not this composite component is mounted.\r\n             * @param {ReactClass} publicInstance The instance we want to test.\r\n             * @return {boolean} True if mounted, false otherwise.\r\n             * @protected\r\n             * @final\r\n             */\r\n            isMounted: function (publicInstance) {\r\n                return false;\r\n            },\r\n            /**\r\n             * Forces an update. This should only be invoked when it is known with\r\n             * certainty that we are **not** in a DOM transaction.\r\n             *\r\n             * You may want to call this when you know that some deeper aspect of the\r\n             * component's state has changed but `setState` was not called.\r\n             *\r\n             * This will not invoke `shouldComponentUpdate`, but it will invoke\r\n             * `componentWillUpdate` and `componentDidUpdate`.\r\n             *\r\n             * @param {ReactClass} publicInstance The instance that should rerender.\r\n             * @param {?function} callback Called after component is updated.\r\n             * @param {?string} callerName name of the calling function in the public API.\r\n             * @internal\r\n             */\r\n            enqueueForceUpdate: function (publicInstance, callback, callerName) {\r\n                warnNoop(publicInstance, 'forceUpdate');\r\n            },\r\n            /**\r\n             * Replaces all of the state. Always use this or `setState` to mutate state.\r\n             * You should treat `this.state` as immutable.\r\n             *\r\n             * There is no guarantee that `this.state` will be immediately updated, so\r\n             * accessing `this.state` after calling this method may return the old value.\r\n             *\r\n             * @param {ReactClass} publicInstance The instance that should rerender.\r\n             * @param {object} completeState Next state.\r\n             * @param {?function} callback Called after component is updated.\r\n             * @param {?string} callerName name of the calling function in the public API.\r\n             * @internal\r\n             */\r\n            enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {\r\n                warnNoop(publicInstance, 'replaceState');\r\n            },\r\n            /**\r\n             * Sets a subset of the state. This only exists because _pendingState is\r\n             * internal. This provides a merging strategy that is not available to deep\r\n             * properties which is confusing. TODO: Expose pendingState or don't use it\r\n             * during the merge.\r\n             *\r\n             * @param {ReactClass} publicInstance The instance that should rerender.\r\n             * @param {object} partialState Next partial state to be merged with state.\r\n             * @param {?function} callback Called after component is updated.\r\n             * @param {?string} Name of the calling function in the public API.\r\n             * @internal\r\n             */\r\n            enqueueSetState: function (publicInstance, partialState, callback, callerName) {\r\n                warnNoop(publicInstance, 'setState');\r\n            }\r\n        };\r\n        var emptyObject = {};\r\n        {\r\n            Object.freeze(emptyObject);\r\n        }\r\n        /**\r\n         * Base class helpers for the updating state of a component.\r\n         */\r\n        function Component(props, context, updater) {\r\n            this.props = props;\r\n            this.context = context; // If a component has string refs, we will assign a different object later.\r\n            this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the\r\n            // renderer.\r\n            this.updater = updater || ReactNoopUpdateQueue;\r\n        }\r\n        Component.prototype.isReactComponent = {};\r\n        /**\r\n         * Sets a subset of the state. Always use this to mutate\r\n         * state. You should treat `this.state` as immutable.\r\n         *\r\n         * There is no guarantee that `this.state` will be immediately updated, so\r\n         * accessing `this.state` after calling this method may return the old value.\r\n         *\r\n         * There is no guarantee that calls to `setState` will run synchronously,\r\n         * as they may eventually be batched together.  You can provide an optional\r\n         * callback that will be executed when the call to setState is actually\r\n         * completed.\r\n         *\r\n         * When a function is provided to setState, it will be called at some point in\r\n         * the future (not synchronously). It will be called with the up to date\r\n         * component arguments (state, props, context). These values can be different\r\n         * from this.* because your function may be called after receiveProps but before\r\n         * shouldComponentUpdate, and this new state, props, and context will not yet be\r\n         * assigned to this.\r\n         *\r\n         * @param {object|function} partialState Next partial state or function to\r\n         *        produce next partial state to be merged with current state.\r\n         * @param {?function} callback Called after state is updated.\r\n         * @final\r\n         * @protected\r\n         */\r\n        Component.prototype.setState = function (partialState, callback) {\r\n            if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {\r\n                {\r\n                    throw Error(\"setState(...): takes an object of state variables to update or a function which returns an object of state variables.\");\r\n                }\r\n            }\r\n            this.updater.enqueueSetState(this, partialState, callback, 'setState');\r\n        };\r\n        /**\r\n         * Forces an update. This should only be invoked when it is known with\r\n         * certainty that we are **not** in a DOM transaction.\r\n         *\r\n         * You may want to call this when you know that some deeper aspect of the\r\n         * component's state has changed but `setState` was not called.\r\n         *\r\n         * This will not invoke `shouldComponentUpdate`, but it will invoke\r\n         * `componentWillUpdate` and `componentDidUpdate`.\r\n         *\r\n         * @param {?function} callback Called after update is complete.\r\n         * @final\r\n         * @protected\r\n         */\r\n        Component.prototype.forceUpdate = function (callback) {\r\n            this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');\r\n        };\r\n        /**\r\n         * Deprecated APIs. These APIs used to exist on classic React classes but since\r\n         * we would like to deprecate them, we're not going to move them over to this\r\n         * modern base class. Instead, we define a getter that warns if it's accessed.\r\n         */\r\n        {\r\n            var deprecatedAPIs = {\r\n                isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],\r\n                replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']\r\n            };\r\n            var defineDeprecationWarning = function (methodName, info) {\r\n                Object.defineProperty(Component.prototype, methodName, {\r\n                    get: function () {\r\n                        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);\r\n                        return undefined;\r\n                    }\r\n                });\r\n            };\r\n            for (var fnName in deprecatedAPIs) {\r\n                if (deprecatedAPIs.hasOwnProperty(fnName)) {\r\n                    defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);\r\n                }\r\n            }\r\n        }\r\n        function ComponentDummy() { }\r\n        ComponentDummy.prototype = Component.prototype;\r\n        /**\r\n         * Convenience component with default shallow equality check for sCU.\r\n         */\r\n        function PureComponent(props, context, updater) {\r\n            this.props = props;\r\n            this.context = context; // If a component has string refs, we will assign a different object later.\r\n            this.refs = emptyObject;\r\n            this.updater = updater || ReactNoopUpdateQueue;\r\n        }\r\n        var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();\r\n        pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.\r\n        _assign(pureComponentPrototype, Component.prototype);\r\n        pureComponentPrototype.isPureReactComponent = true;\r\n        // an immutable object with a single mutable value\r\n        function createRef() {\r\n            var refObject = {\r\n                current: null\r\n            };\r\n            {\r\n                Object.seal(refObject);\r\n            }\r\n            return refObject;\r\n        }\r\n        function getWrappedName(outerType, innerType, wrapperName) {\r\n            var functionName = innerType.displayName || innerType.name || '';\r\n            return outerType.displayName || (functionName !== '' ? wrapperName + \"(\" + functionName + \")\" : wrapperName);\r\n        }\r\n        function getContextName(type) {\r\n            return type.displayName || 'Context';\r\n        }\r\n        function getComponentName(type) {\r\n            if (type == null) {\r\n                // Host root, text node or just invalid type.\r\n                return null;\r\n            }\r\n            {\r\n                if (typeof type.tag === 'number') {\r\n                    error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');\r\n                }\r\n            }\r\n            if (typeof type === 'function') {\r\n                return type.displayName || type.name || null;\r\n            }\r\n            if (typeof type === 'string') {\r\n                return type;\r\n            }\r\n            switch (type) {\r\n                case exports.Fragment:\r\n                    return 'Fragment';\r\n                case REACT_PORTAL_TYPE:\r\n                    return 'Portal';\r\n                case exports.Profiler:\r\n                    return 'Profiler';\r\n                case exports.StrictMode:\r\n                    return 'StrictMode';\r\n                case exports.Suspense:\r\n                    return 'Suspense';\r\n                case REACT_SUSPENSE_LIST_TYPE:\r\n                    return 'SuspenseList';\r\n            }\r\n            if (typeof type === 'object') {\r\n                switch (type.$$typeof) {\r\n                    case REACT_CONTEXT_TYPE:\r\n                        var context = type;\r\n                        return getContextName(context) + '.Consumer';\r\n                    case REACT_PROVIDER_TYPE:\r\n                        var provider = type;\r\n                        return getContextName(provider._context) + '.Provider';\r\n                    case REACT_FORWARD_REF_TYPE:\r\n                        return getWrappedName(type, type.render, 'ForwardRef');\r\n                    case REACT_MEMO_TYPE:\r\n                        return getComponentName(type.type);\r\n                    case REACT_BLOCK_TYPE:\r\n                        return getComponentName(type._render);\r\n                    case REACT_LAZY_TYPE:\r\n                        {\r\n                            var lazyComponent = type;\r\n                            var payload = lazyComponent._payload;\r\n                            var init = lazyComponent._init;\r\n                            try {\r\n                                return getComponentName(init(payload));\r\n                            }\r\n                            catch (x) {\r\n                                return null;\r\n                            }\r\n                        }\r\n                }\r\n            }\r\n            return null;\r\n        }\r\n        var hasOwnProperty = Object.prototype.hasOwnProperty;\r\n        var RESERVED_PROPS = {\r\n            key: true,\r\n            ref: true,\r\n            __self: true,\r\n            __source: true\r\n        };\r\n        var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;\r\n        {\r\n            didWarnAboutStringRefs = {};\r\n        }\r\n        function hasValidRef(config) {\r\n            {\r\n                if (hasOwnProperty.call(config, 'ref')) {\r\n                    var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;\r\n                    if (getter && getter.isReactWarning) {\r\n                        return false;\r\n                    }\r\n                }\r\n            }\r\n            return config.ref !== undefined;\r\n        }\r\n        function hasValidKey(config) {\r\n            {\r\n                if (hasOwnProperty.call(config, 'key')) {\r\n                    var getter = Object.getOwnPropertyDescriptor(config, 'key').get;\r\n                    if (getter && getter.isReactWarning) {\r\n                        return false;\r\n                    }\r\n                }\r\n            }\r\n            return config.key !== undefined;\r\n        }\r\n        function defineKeyPropWarningGetter(props, displayName) {\r\n            var warnAboutAccessingKey = function () {\r\n                {\r\n                    if (!specialPropKeyWarningShown) {\r\n                        specialPropKeyWarningShown = true;\r\n                        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);\r\n                    }\r\n                }\r\n            };\r\n            warnAboutAccessingKey.isReactWarning = true;\r\n            Object.defineProperty(props, 'key', {\r\n                get: warnAboutAccessingKey,\r\n                configurable: true\r\n            });\r\n        }\r\n        function defineRefPropWarningGetter(props, displayName) {\r\n            var warnAboutAccessingRef = function () {\r\n                {\r\n                    if (!specialPropRefWarningShown) {\r\n                        specialPropRefWarningShown = true;\r\n                        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);\r\n                    }\r\n                }\r\n            };\r\n            warnAboutAccessingRef.isReactWarning = true;\r\n            Object.defineProperty(props, 'ref', {\r\n                get: warnAboutAccessingRef,\r\n                configurable: true\r\n            });\r\n        }\r\n        function warnIfStringRefCannotBeAutoConverted(config) {\r\n            {\r\n                if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {\r\n                    var componentName = getComponentName(ReactCurrentOwner.current.type);\r\n                    if (!didWarnAboutStringRefs[componentName]) {\r\n                        error('Component \"%s\" contains the string ref \"%s\". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);\r\n                        didWarnAboutStringRefs[componentName] = true;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        /**\r\n         * Factory method to create a new React element. This no longer adheres to\r\n         * the class pattern, so do not use new to call it. Also, instanceof check\r\n         * will not work. Instead test $$typeof field against Symbol.for('react.element') to check\r\n         * if something is a React Element.\r\n         *\r\n         * @param {*} type\r\n         * @param {*} props\r\n         * @param {*} key\r\n         * @param {string|object} ref\r\n         * @param {*} owner\r\n         * @param {*} self A *temporary* helper to detect places where `this` is\r\n         * different from the `owner` when React.createElement is called, so that we\r\n         * can warn. We want to get rid of owner and replace string `ref`s with arrow\r\n         * functions, and as long as `this` and owner are the same, there will be no\r\n         * change in behavior.\r\n         * @param {*} source An annotation object (added by a transpiler or otherwise)\r\n         * indicating filename, line number, and/or other information.\r\n         * @internal\r\n         */\r\n        var ReactElement = function (type, key, ref, self, source, owner, props) {\r\n            var element = {\r\n                // This tag allows us to uniquely identify this as a React Element\r\n                $$typeof: REACT_ELEMENT_TYPE,\r\n                // Built-in properties that belong on the element\r\n                type: type,\r\n                key: key,\r\n                ref: ref,\r\n                props: props,\r\n                // Record the component responsible for creating this element.\r\n                _owner: owner\r\n            };\r\n            {\r\n                // The validation flag is currently mutative. We put it on\r\n                // an external backing store so that we can freeze the whole object.\r\n                // This can be replaced with a WeakMap once they are implemented in\r\n                // commonly used development environments.\r\n                element._store = {}; // To make comparing ReactElements easier for testing purposes, we make\r\n                // the validation flag non-enumerable (where possible, which should\r\n                // include every environment we run tests in), so the test framework\r\n                // ignores it.\r\n                Object.defineProperty(element._store, 'validated', {\r\n                    configurable: false,\r\n                    enumerable: false,\r\n                    writable: true,\r\n                    value: false\r\n                }); // self and source are DEV only properties.\r\n                Object.defineProperty(element, '_self', {\r\n                    configurable: false,\r\n                    enumerable: false,\r\n                    writable: false,\r\n                    value: self\r\n                }); // Two elements created in two different places should be considered\r\n                // equal for testing purposes and therefore we hide it from enumeration.\r\n                Object.defineProperty(element, '_source', {\r\n                    configurable: false,\r\n                    enumerable: false,\r\n                    writable: false,\r\n                    value: source\r\n                });\r\n                if (Object.freeze) {\r\n                    Object.freeze(element.props);\r\n                    Object.freeze(element);\r\n                }\r\n            }\r\n            return element;\r\n        };\r\n        /**\r\n         * Create and return a new ReactElement of the given type.\r\n         * See https://reactjs.org/docs/react-api.html#createelement\r\n         */\r\n        function createElement(type, config, children) {\r\n            var propName; // Reserved names are extracted\r\n            var props = {};\r\n            var key = null;\r\n            var ref = null;\r\n            var self = null;\r\n            var source = null;\r\n            if (config != null) {\r\n                if (hasValidRef(config)) {\r\n                    ref = config.ref;\r\n                    {\r\n                        warnIfStringRefCannotBeAutoConverted(config);\r\n                    }\r\n                }\r\n                if (hasValidKey(config)) {\r\n                    key = '' + config.key;\r\n                }\r\n                self = config.__self === undefined ? null : config.__self;\r\n                source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object\r\n                for (propName in config) {\r\n                    if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {\r\n                        props[propName] = config[propName];\r\n                    }\r\n                }\r\n            } // Children can be more than one argument, and those are transferred onto\r\n            // the newly allocated props object.\r\n            var childrenLength = arguments.length - 2;\r\n            if (childrenLength === 1) {\r\n                props.children = children;\r\n            }\r\n            else if (childrenLength > 1) {\r\n                var childArray = Array(childrenLength);\r\n                for (var i = 0; i < childrenLength; i++) {\r\n                    childArray[i] = arguments[i + 2];\r\n                }\r\n                {\r\n                    if (Object.freeze) {\r\n                        Object.freeze(childArray);\r\n                    }\r\n                }\r\n                props.children = childArray;\r\n            } // Resolve default props\r\n            if (type && type.defaultProps) {\r\n                var defaultProps = type.defaultProps;\r\n                for (propName in defaultProps) {\r\n                    if (props[propName] === undefined) {\r\n                        props[propName] = defaultProps[propName];\r\n                    }\r\n                }\r\n            }\r\n            {\r\n                if (key || ref) {\r\n                    var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;\r\n                    if (key) {\r\n                        defineKeyPropWarningGetter(props, displayName);\r\n                    }\r\n                    if (ref) {\r\n                        defineRefPropWarningGetter(props, displayName);\r\n                    }\r\n                }\r\n            }\r\n            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);\r\n        }\r\n        function cloneAndReplaceKey(oldElement, newKey) {\r\n            var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);\r\n            return newElement;\r\n        }\r\n        /**\r\n         * Clone and return a new ReactElement using element as the starting point.\r\n         * See https://reactjs.org/docs/react-api.html#cloneelement\r\n         */\r\n        function cloneElement(element, config, children) {\r\n            if (!!(element === null || element === undefined)) {\r\n                {\r\n                    throw Error(\"React.cloneElement(...): The argument must be a React element, but you passed \" + element + \".\");\r\n                }\r\n            }\r\n            var propName; // Original props are copied\r\n            var props = _assign({}, element.props); // Reserved names are extracted\r\n            var key = element.key;\r\n            var ref = element.ref; // Self is preserved since the owner is preserved.\r\n            var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a\r\n            // transpiler, and the original source is probably a better indicator of the\r\n            // true owner.\r\n            var source = element._source; // Owner will be preserved, unless ref is overridden\r\n            var owner = element._owner;\r\n            if (config != null) {\r\n                if (hasValidRef(config)) {\r\n                    // Silently steal the ref from the parent.\r\n                    ref = config.ref;\r\n                    owner = ReactCurrentOwner.current;\r\n                }\r\n                if (hasValidKey(config)) {\r\n                    key = '' + config.key;\r\n                } // Remaining properties override existing props\r\n                var defaultProps;\r\n                if (element.type && element.type.defaultProps) {\r\n                    defaultProps = element.type.defaultProps;\r\n                }\r\n                for (propName in config) {\r\n                    if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {\r\n                        if (config[propName] === undefined && defaultProps !== undefined) {\r\n                            // Resolve default props\r\n                            props[propName] = defaultProps[propName];\r\n                        }\r\n                        else {\r\n                            props[propName] = config[propName];\r\n                        }\r\n                    }\r\n                }\r\n            } // Children can be more than one argument, and those are transferred onto\r\n            // the newly allocated props object.\r\n            var childrenLength = arguments.length - 2;\r\n            if (childrenLength === 1) {\r\n                props.children = children;\r\n            }\r\n            else if (childrenLength > 1) {\r\n                var childArray = Array(childrenLength);\r\n                for (var i = 0; i < childrenLength; i++) {\r\n                    childArray[i] = arguments[i + 2];\r\n                }\r\n                props.children = childArray;\r\n            }\r\n            return ReactElement(element.type, key, ref, self, source, owner, props);\r\n        }\r\n        /**\r\n         * Verifies the object is a ReactElement.\r\n         * See https://reactjs.org/docs/react-api.html#isvalidelement\r\n         * @param {?object} object\r\n         * @return {boolean} True if `object` is a ReactElement.\r\n         * @final\r\n         */\r\n        function isValidElement(object) {\r\n            return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;\r\n        }\r\n        var SEPARATOR = '.';\r\n        var SUBSEPARATOR = ':';\r\n        /**\r\n         * Escape and wrap key so it is safe to use as a reactid\r\n         *\r\n         * @param {string} key to be escaped.\r\n         * @return {string} the escaped key.\r\n         */\r\n        function escape(key) {\r\n            var escapeRegex = /[=:]/g;\r\n            var escaperLookup = {\r\n                '=': '=0',\r\n                ':': '=2'\r\n            };\r\n            var escapedString = key.replace(escapeRegex, function (match) {\r\n                return escaperLookup[match];\r\n            });\r\n            return '$' + escapedString;\r\n        }\r\n        /**\r\n         * TODO: Test that a single child and an array with one item have the same key\r\n         * pattern.\r\n         */\r\n        var didWarnAboutMaps = false;\r\n        var userProvidedKeyEscapeRegex = /\\/+/g;\r\n        function escapeUserProvidedKey(text) {\r\n            return text.replace(userProvidedKeyEscapeRegex, '$&/');\r\n        }\r\n        /**\r\n         * Generate a key string that identifies a element within a set.\r\n         *\r\n         * @param {*} element A element that could contain a manual key.\r\n         * @param {number} index Index that is used if a manual key is not provided.\r\n         * @return {string}\r\n         */\r\n        function getElementKey(element, index) {\r\n            // Do some typechecking here since we call this blindly. We want to ensure\r\n            // that we don't block potential future ES APIs.\r\n            if (typeof element === 'object' && element !== null && element.key != null) {\r\n                // Explicit key\r\n                return escape('' + element.key);\r\n            } // Implicit key determined by the index in the set\r\n            return index.toString(36);\r\n        }\r\n        function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {\r\n            var type = typeof children;\r\n            if (type === 'undefined' || type === 'boolean') {\r\n                // All of the above are perceived as null.\r\n                children = null;\r\n            }\r\n            var invokeCallback = false;\r\n            if (children === null) {\r\n                invokeCallback = true;\r\n            }\r\n            else {\r\n                switch (type) {\r\n                    case 'string':\r\n                    case 'number':\r\n                        invokeCallback = true;\r\n                        break;\r\n                    case 'object':\r\n                        switch (children.$$typeof) {\r\n                            case REACT_ELEMENT_TYPE:\r\n                            case REACT_PORTAL_TYPE:\r\n                                invokeCallback = true;\r\n                        }\r\n                }\r\n            }\r\n            if (invokeCallback) {\r\n                var _child = children;\r\n                var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array\r\n                // so that it's consistent if the number of children grows:\r\n                var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;\r\n                if (Array.isArray(mappedChild)) {\r\n                    var escapedChildKey = '';\r\n                    if (childKey != null) {\r\n                        escapedChildKey = escapeUserProvidedKey(childKey) + '/';\r\n                    }\r\n                    mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {\r\n                        return c;\r\n                    });\r\n                }\r\n                else if (mappedChild != null) {\r\n                    if (isValidElement(mappedChild)) {\r\n                        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as\r\n                        // traverseAllChildren used to do for objects as children\r\n                        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key\r\n                        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number\r\n                            escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);\r\n                    }\r\n                    array.push(mappedChild);\r\n                }\r\n                return 1;\r\n            }\r\n            var child;\r\n            var nextName;\r\n            var subtreeCount = 0; // Count of children found in the current subtree.\r\n            var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;\r\n            if (Array.isArray(children)) {\r\n                for (var i = 0; i < children.length; i++) {\r\n                    child = children[i];\r\n                    nextName = nextNamePrefix + getElementKey(child, i);\r\n                    subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);\r\n                }\r\n            }\r\n            else {\r\n                var iteratorFn = getIteratorFn(children);\r\n                if (typeof iteratorFn === 'function') {\r\n                    var iterableChildren = children;\r\n                    {\r\n                        // Warn about using Maps as children\r\n                        if (iteratorFn === iterableChildren.entries) {\r\n                            if (!didWarnAboutMaps) {\r\n                                warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');\r\n                            }\r\n                            didWarnAboutMaps = true;\r\n                        }\r\n                    }\r\n                    var iterator = iteratorFn.call(iterableChildren);\r\n                    var step;\r\n                    var ii = 0;\r\n                    while (!(step = iterator.next()).done) {\r\n                        child = step.value;\r\n                        nextName = nextNamePrefix + getElementKey(child, ii++);\r\n                        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);\r\n                    }\r\n                }\r\n                else if (type === 'object') {\r\n                    var childrenString = '' + children;\r\n                    {\r\n                        {\r\n                            throw Error(\"Objects are not valid as a React child (found: \" + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + \"). If you meant to render a collection of children, use an array instead.\");\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n            return subtreeCount;\r\n        }\r\n        /**\r\n         * Maps children that are typically specified as `props.children`.\r\n         *\r\n         * See https://reactjs.org/docs/react-api.html#reactchildrenmap\r\n         *\r\n         * The provided mapFunction(child, index) will be called for each\r\n         * leaf child.\r\n         *\r\n         * @param {?*} children Children tree container.\r\n         * @param {function(*, int)} func The map function.\r\n         * @param {*} context Context for mapFunction.\r\n         * @return {object} Object containing the ordered map of results.\r\n         */\r\n        function mapChildren(children, func, context) {\r\n            if (children == null) {\r\n                return children;\r\n            }\r\n            var result = [];\r\n            var count = 0;\r\n            mapIntoArray(children, result, '', '', function (child) {\r\n                return func.call(context, child, count++);\r\n            });\r\n            return result;\r\n        }\r\n        /**\r\n         * Count the number of children that are typically specified as\r\n         * `props.children`.\r\n         *\r\n         * See https://reactjs.org/docs/react-api.html#reactchildrencount\r\n         *\r\n         * @param {?*} children Children tree container.\r\n         * @return {number} The number of children.\r\n         */\r\n        function countChildren(children) {\r\n            var n = 0;\r\n            mapChildren(children, function () {\r\n                n++; // Don't return anything\r\n            });\r\n            return n;\r\n        }\r\n        /**\r\n         * Iterates through children that are typically specified as `props.children`.\r\n         *\r\n         * See https://reactjs.org/docs/react-api.html#reactchildrenforeach\r\n         *\r\n         * The provided forEachFunc(child, index) will be called for each\r\n         * leaf child.\r\n         *\r\n         * @param {?*} children Children tree container.\r\n         * @param {function(*, int)} forEachFunc\r\n         * @param {*} forEachContext Context for forEachContext.\r\n         */\r\n        function forEachChildren(children, forEachFunc, forEachContext) {\r\n            mapChildren(children, function () {\r\n                forEachFunc.apply(this, arguments); // Don't return anything.\r\n            }, forEachContext);\r\n        }\r\n        /**\r\n         * Flatten a children object (typically specified as `props.children`) and\r\n         * return an array with appropriately re-keyed children.\r\n         *\r\n         * See https://reactjs.org/docs/react-api.html#reactchildrentoarray\r\n         */\r\n        function toArray(children) {\r\n            return mapChildren(children, function (child) {\r\n                return child;\r\n            }) || [];\r\n        }\r\n        /**\r\n         * Returns the first child in a collection of children and verifies that there\r\n         * is only one child in the collection.\r\n         *\r\n         * See https://reactjs.org/docs/react-api.html#reactchildrenonly\r\n         *\r\n         * The current implementation of this function assumes that a single child gets\r\n         * passed without a wrapper, but the purpose of this helper function is to\r\n         * abstract away the particular structure of children.\r\n         *\r\n         * @param {?object} children Child collection structure.\r\n         * @return {ReactElement} The first and only `ReactElement` contained in the\r\n         * structure.\r\n         */\r\n        function onlyChild(children) {\r\n            if (!isValidElement(children)) {\r\n                {\r\n                    throw Error(\"React.Children.only expected to receive a single React element child.\");\r\n                }\r\n            }\r\n            return children;\r\n        }\r\n        function createContext(defaultValue, calculateChangedBits) {\r\n            if (calculateChangedBits === undefined) {\r\n                calculateChangedBits = null;\r\n            }\r\n            else {\r\n                {\r\n                    if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {\r\n                        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);\r\n                    }\r\n                }\r\n            }\r\n            var context = {\r\n                $$typeof: REACT_CONTEXT_TYPE,\r\n                _calculateChangedBits: calculateChangedBits,\r\n                // As a workaround to support multiple concurrent renderers, we categorize\r\n                // some renderers as primary and others as secondary. We only expect\r\n                // there to be two concurrent renderers at most: React Native (primary) and\r\n                // Fabric (secondary); React DOM (primary) and React ART (secondary).\r\n                // Secondary renderers store their context values on separate fields.\r\n                _currentValue: defaultValue,\r\n                _currentValue2: defaultValue,\r\n                // Used to track how many concurrent renderers this context currently\r\n                // supports within in a single renderer. Such as parallel server rendering.\r\n                _threadCount: 0,\r\n                // These are circular\r\n                Provider: null,\r\n                Consumer: null\r\n            };\r\n            context.Provider = {\r\n                $$typeof: REACT_PROVIDER_TYPE,\r\n                _context: context\r\n            };\r\n            var hasWarnedAboutUsingNestedContextConsumers = false;\r\n            var hasWarnedAboutUsingConsumerProvider = false;\r\n            var hasWarnedAboutDisplayNameOnConsumer = false;\r\n            {\r\n                // A separate object, but proxies back to the original context object for\r\n                // backwards compatibility. It has a different $$typeof, so we can properly\r\n                // warn for the incorrect usage of Context as a Consumer.\r\n                var Consumer = {\r\n                    $$typeof: REACT_CONTEXT_TYPE,\r\n                    _context: context,\r\n                    _calculateChangedBits: context._calculateChangedBits\r\n                }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here\r\n                Object.defineProperties(Consumer, {\r\n                    Provider: {\r\n                        get: function () {\r\n                            if (!hasWarnedAboutUsingConsumerProvider) {\r\n                                hasWarnedAboutUsingConsumerProvider = true;\r\n                                error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');\r\n                            }\r\n                            return context.Provider;\r\n                        },\r\n                        set: function (_Provider) {\r\n                            context.Provider = _Provider;\r\n                        }\r\n                    },\r\n                    _currentValue: {\r\n                        get: function () {\r\n                            return context._currentValue;\r\n                        },\r\n                        set: function (_currentValue) {\r\n                            context._currentValue = _currentValue;\r\n                        }\r\n                    },\r\n                    _currentValue2: {\r\n                        get: function () {\r\n                            return context._currentValue2;\r\n                        },\r\n                        set: function (_currentValue2) {\r\n                            context._currentValue2 = _currentValue2;\r\n                        }\r\n                    },\r\n                    _threadCount: {\r\n                        get: function () {\r\n                            return context._threadCount;\r\n                        },\r\n                        set: function (_threadCount) {\r\n                            context._threadCount = _threadCount;\r\n                        }\r\n                    },\r\n                    Consumer: {\r\n                        get: function () {\r\n                            if (!hasWarnedAboutUsingNestedContextConsumers) {\r\n                                hasWarnedAboutUsingNestedContextConsumers = true;\r\n                                error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');\r\n                            }\r\n                            return context.Consumer;\r\n                        }\r\n                    },\r\n                    displayName: {\r\n                        get: function () {\r\n                            return context.displayName;\r\n                        },\r\n                        set: function (displayName) {\r\n                            if (!hasWarnedAboutDisplayNameOnConsumer) {\r\n                                warn('Setting `displayName` on Context.Consumer has no effect. ' + \"You should set it directly on the context with Context.displayName = '%s'.\", displayName);\r\n                                hasWarnedAboutDisplayNameOnConsumer = true;\r\n                            }\r\n                        }\r\n                    }\r\n                }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty\r\n                context.Consumer = Consumer;\r\n            }\r\n            {\r\n                context._currentRenderer = null;\r\n                context._currentRenderer2 = null;\r\n            }\r\n            return context;\r\n        }\r\n        var Uninitialized = -1;\r\n        var Pending = 0;\r\n        var Resolved = 1;\r\n        var Rejected = 2;\r\n        function lazyInitializer(payload) {\r\n            if (payload._status === Uninitialized) {\r\n                var ctor = payload._result;\r\n                var thenable = ctor(); // Transition to the next state.\r\n                var pending = payload;\r\n                pending._status = Pending;\r\n                pending._result = thenable;\r\n                thenable.then(function (moduleObject) {\r\n                    if (payload._status === Pending) {\r\n                        var defaultExport = moduleObject.default;\r\n                        {\r\n                            if (defaultExport === undefined) {\r\n                                error('lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\\n\\nYour code should look like: \\n  ' + // Break up imports to avoid accidentally parsing them as dependencies.\r\n                                    'const MyComponent = lazy(() => imp' + \"ort('./MyComponent'))\", moduleObject);\r\n                            }\r\n                        } // Transition to the next state.\r\n                        var resolved = payload;\r\n                        resolved._status = Resolved;\r\n                        resolved._result = defaultExport;\r\n                    }\r\n                }, function (error) {\r\n                    if (payload._status === Pending) {\r\n                        // Transition to the next state.\r\n                        var rejected = payload;\r\n                        rejected._status = Rejected;\r\n                        rejected._result = error;\r\n                    }\r\n                });\r\n            }\r\n            if (payload._status === Resolved) {\r\n                return payload._result;\r\n            }\r\n            else {\r\n                throw payload._result;\r\n            }\r\n        }\r\n        function lazy(ctor) {\r\n            var payload = {\r\n                // We use these fields to store the result.\r\n                _status: -1,\r\n                _result: ctor\r\n            };\r\n            var lazyType = {\r\n                $$typeof: REACT_LAZY_TYPE,\r\n                _payload: payload,\r\n                _init: lazyInitializer\r\n            };\r\n            {\r\n                // In production, this would just set it on the object.\r\n                var defaultProps;\r\n                var propTypes; // $FlowFixMe\r\n                Object.defineProperties(lazyType, {\r\n                    defaultProps: {\r\n                        configurable: true,\r\n                        get: function () {\r\n                            return defaultProps;\r\n                        },\r\n                        set: function (newDefaultProps) {\r\n                            error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');\r\n                            defaultProps = newDefaultProps; // Match production behavior more closely:\r\n                            // $FlowFixMe\r\n                            Object.defineProperty(lazyType, 'defaultProps', {\r\n                                enumerable: true\r\n                            });\r\n                        }\r\n                    },\r\n                    propTypes: {\r\n                        configurable: true,\r\n                        get: function () {\r\n                            return propTypes;\r\n                        },\r\n                        set: function (newPropTypes) {\r\n                            error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');\r\n                            propTypes = newPropTypes; // Match production behavior more closely:\r\n                            // $FlowFixMe\r\n                            Object.defineProperty(lazyType, 'propTypes', {\r\n                                enumerable: true\r\n                            });\r\n                        }\r\n                    }\r\n                });\r\n            }\r\n            return lazyType;\r\n        }\r\n        function forwardRef(render) {\r\n            {\r\n                if (render != null && render.$$typeof === REACT_MEMO_TYPE) {\r\n                    error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');\r\n                }\r\n                else if (typeof render !== 'function') {\r\n                    error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);\r\n                }\r\n                else {\r\n                    if (render.length !== 0 && render.length !== 2) {\r\n                        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');\r\n                    }\r\n                }\r\n                if (render != null) {\r\n                    if (render.defaultProps != null || render.propTypes != null) {\r\n                        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');\r\n                    }\r\n                }\r\n            }\r\n            var elementType = {\r\n                $$typeof: REACT_FORWARD_REF_TYPE,\r\n                render: render\r\n            };\r\n            {\r\n                var ownName;\r\n                Object.defineProperty(elementType, 'displayName', {\r\n                    enumerable: false,\r\n                    configurable: true,\r\n                    get: function () {\r\n                        return ownName;\r\n                    },\r\n                    set: function (name) {\r\n                        ownName = name;\r\n                        if (render.displayName == null) {\r\n                            render.displayName = name;\r\n                        }\r\n                    }\r\n                });\r\n            }\r\n            return elementType;\r\n        }\r\n        // Filter certain DOM attributes (e.g. src, href) if their values are empty strings.\r\n        var enableScopeAPI = false; // Experimental Create Event Handle API.\r\n        function isValidElementType(type) {\r\n            if (typeof type === 'string' || typeof type === 'function') {\r\n                return true;\r\n            } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).\r\n            if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {\r\n                return true;\r\n            }\r\n            if (typeof type === 'object' && type !== null) {\r\n                if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {\r\n                    return true;\r\n                }\r\n            }\r\n            return false;\r\n        }\r\n        function memo(type, compare) {\r\n            {\r\n                if (!isValidElementType(type)) {\r\n                    error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);\r\n                }\r\n            }\r\n            var elementType = {\r\n                $$typeof: REACT_MEMO_TYPE,\r\n                type: type,\r\n                compare: compare === undefined ? null : compare\r\n            };\r\n            {\r\n                var ownName;\r\n                Object.defineProperty(elementType, 'displayName', {\r\n                    enumerable: false,\r\n                    configurable: true,\r\n                    get: function () {\r\n                        return ownName;\r\n                    },\r\n                    set: function (name) {\r\n                        ownName = name;\r\n                        if (type.displayName == null) {\r\n                            type.displayName = name;\r\n                        }\r\n                    }\r\n                });\r\n            }\r\n            return elementType;\r\n        }\r\n        function resolveDispatcher() {\r\n            var dispatcher = ReactCurrentDispatcher.current;\r\n            if (!(dispatcher !== null)) {\r\n                {\r\n                    throw Error(\"Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\\n1. You might have mismatching versions of React and the renderer (such as React DOM)\\n2. You might be breaking the Rules of Hooks\\n3. You might have more than one copy of React in the same app\\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.\");\r\n                }\r\n            }\r\n            return dispatcher;\r\n        }\r\n        function useContext(Context, unstable_observedBits) {\r\n            var dispatcher = resolveDispatcher();\r\n            {\r\n                if (unstable_observedBits !== undefined) {\r\n                    error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\\n\\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://reactjs.org/link/rules-of-hooks' : '');\r\n                } // TODO: add a more generic warning for invalid values.\r\n                if (Context._context !== undefined) {\r\n                    var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs\r\n                    // and nobody should be using this in existing code.\r\n                    if (realContext.Consumer === Context) {\r\n                        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');\r\n                    }\r\n                    else if (realContext.Provider === Context) {\r\n                        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');\r\n                    }\r\n                }\r\n            }\r\n            return dispatcher.useContext(Context, unstable_observedBits);\r\n        }\r\n        function useState(initialState) {\r\n            var dispatcher = resolveDispatcher();\r\n            return dispatcher.useState(initialState);\r\n        }\r\n        function useReducer(reducer, initialArg, init) {\r\n            var dispatcher = resolveDispatcher();\r\n            return dispatcher.useReducer(reducer, initialArg, init);\r\n        }\r\n        function useRef(initialValue) {\r\n            var dispatcher = resolveDispatcher();\r\n            return dispatcher.useRef(initialValue);\r\n        }\r\n        function useEffect(create, deps) {\r\n            var dispatcher = resolveDispatcher();\r\n            return dispatcher.useEffect(create, deps);\r\n        }\r\n        function useLayoutEffect(create, deps) {\r\n            var dispatcher = resolveDispatcher();\r\n            return dispatcher.useLayoutEffect(create, deps);\r\n        }\r\n        function useCallback(callback, deps) {\r\n            var dispatcher = resolveDispatcher();\r\n            return dispatcher.useCallback(callback, deps);\r\n        }\r\n        function useMemo(create, deps) {\r\n            var dispatcher = resolveDispatcher();\r\n            return dispatcher.useMemo(create, deps);\r\n        }\r\n        function useImperativeHandle(ref, create, deps) {\r\n            var dispatcher = resolveDispatcher();\r\n            return dispatcher.useImperativeHandle(ref, create, deps);\r\n        }\r\n        function useDebugValue(value, formatterFn) {\r\n            {\r\n                var dispatcher = resolveDispatcher();\r\n                return dispatcher.useDebugValue(value, formatterFn);\r\n            }\r\n        }\r\n        // Helpers to patch console.logs to avoid logging during side-effect free\r\n        // replaying on render function. This currently only patches the object\r\n        // lazily which won't cover if the log function was extracted eagerly.\r\n        // We could also eagerly patch the method.\r\n        var disabledDepth = 0;\r\n        var prevLog;\r\n        var prevInfo;\r\n        var prevWarn;\r\n        var prevError;\r\n        var prevGroup;\r\n        var prevGroupCollapsed;\r\n        var prevGroupEnd;\r\n        function disabledLog() { }\r\n        disabledLog.__reactDisabledLog = true;\r\n        function disableLogs() {\r\n            {\r\n                if (disabledDepth === 0) {\r\n                    /* eslint-disable react-internal/no-production-logging */\r\n                    prevLog = console.log;\r\n                    prevInfo = console.info;\r\n                    prevWarn = console.warn;\r\n                    prevError = console.error;\r\n                    prevGroup = console.group;\r\n                    prevGroupCollapsed = console.groupCollapsed;\r\n                    prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099\r\n                    var props = {\r\n                        configurable: true,\r\n                        enumerable: true,\r\n                        value: disabledLog,\r\n                        writable: true\r\n                    }; // $FlowFixMe Flow thinks console is immutable.\r\n                    Object.defineProperties(console, {\r\n                        info: props,\r\n                        log: props,\r\n                        warn: props,\r\n                        error: props,\r\n                        group: props,\r\n                        groupCollapsed: props,\r\n                        groupEnd: props\r\n                    });\r\n                    /* eslint-enable react-internal/no-production-logging */\r\n                }\r\n                disabledDepth++;\r\n            }\r\n        }\r\n        function reenableLogs() {\r\n            {\r\n                disabledDepth--;\r\n                if (disabledDepth === 0) {\r\n                    /* eslint-disable react-internal/no-production-logging */\r\n                    var props = {\r\n                        configurable: true,\r\n                        enumerable: true,\r\n                        writable: true\r\n                    }; // $FlowFixMe Flow thinks console is immutable.\r\n                    Object.defineProperties(console, {\r\n                        log: _assign({}, props, {\r\n                            value: prevLog\r\n                        }),\r\n                        info: _assign({}, props, {\r\n                            value: prevInfo\r\n                        }),\r\n                        warn: _assign({}, props, {\r\n                            value: prevWarn\r\n                        }),\r\n                        error: _assign({}, props, {\r\n                            value: prevError\r\n                        }),\r\n                        group: _assign({}, props, {\r\n                            value: prevGroup\r\n                        }),\r\n                        groupCollapsed: _assign({}, props, {\r\n                            value: prevGroupCollapsed\r\n                        }),\r\n                        groupEnd: _assign({}, props, {\r\n                            value: prevGroupEnd\r\n                        })\r\n                    });\r\n                    /* eslint-enable react-internal/no-production-logging */\r\n                }\r\n                if (disabledDepth < 0) {\r\n                    error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');\r\n                }\r\n            }\r\n        }\r\n        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;\r\n        var prefix;\r\n        function describeBuiltInComponentFrame(name, source, ownerFn) {\r\n            {\r\n                if (prefix === undefined) {\r\n                    // Extract the VM specific prefix used by each line.\r\n                    try {\r\n                        throw Error();\r\n                    }\r\n                    catch (x) {\r\n                        var match = x.stack.trim().match(/\\n( *(at )?)/);\r\n                        prefix = match && match[1] || '';\r\n                    }\r\n                } // We use the prefix to ensure our stacks line up with native stack frames.\r\n                return '\\n' + prefix + name;\r\n            }\r\n        }\r\n        var reentry = false;\r\n        var componentFrameCache;\r\n        {\r\n            var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;\r\n            componentFrameCache = new PossiblyWeakMap();\r\n        }\r\n        function describeNativeComponentFrame(fn, construct) {\r\n            // If something asked for a stack inside a fake render, it should get ignored.\r\n            if (!fn || reentry) {\r\n                return '';\r\n            }\r\n            {\r\n                var frame = componentFrameCache.get(fn);\r\n                if (frame !== undefined) {\r\n                    return frame;\r\n                }\r\n            }\r\n            var control;\r\n            reentry = true;\r\n            var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.\r\n            Error.prepareStackTrace = undefined;\r\n            var previousDispatcher;\r\n            {\r\n                previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function\r\n                // for warnings.\r\n                ReactCurrentDispatcher$1.current = null;\r\n                disableLogs();\r\n            }\r\n            try {\r\n                // This should throw.\r\n                if (construct) {\r\n                    // Something should be setting the props in the constructor.\r\n                    var Fake = function () {\r\n                        throw Error();\r\n                    }; // $FlowFixMe\r\n                    Object.defineProperty(Fake.prototype, 'props', {\r\n                        set: function () {\r\n                            // We use a throwing setter instead of frozen or non-writable props\r\n                            // because that won't throw in a non-strict mode function.\r\n                            throw Error();\r\n                        }\r\n                    });\r\n                    if (typeof Reflect === 'object' && Reflect.construct) {\r\n                        // We construct a different control for this case to include any extra\r\n                        // frames added by the construct call.\r\n                        try {\r\n                            Reflect.construct(Fake, []);\r\n                        }\r\n                        catch (x) {\r\n                            control = x;\r\n                        }\r\n                        Reflect.construct(fn, [], Fake);\r\n                    }\r\n                    else {\r\n                        try {\r\n                            Fake.call();\r\n                        }\r\n                        catch (x) {\r\n                            control = x;\r\n                        }\r\n                        fn.call(Fake.prototype);\r\n                    }\r\n                }\r\n                else {\r\n                    try {\r\n                        throw Error();\r\n                    }\r\n                    catch (x) {\r\n                        control = x;\r\n                    }\r\n                    fn();\r\n                }\r\n            }\r\n            catch (sample) {\r\n                // This is inlined manually because closure doesn't do it for us.\r\n                if (sample && control && typeof sample.stack === 'string') {\r\n                    // This extracts the first frame from the sample that isn't also in the control.\r\n                    // Skipping one frame that we assume is the frame that calls the two.\r\n                    var sampleLines = sample.stack.split('\\n');\r\n                    var controlLines = control.stack.split('\\n');\r\n                    var s = sampleLines.length - 1;\r\n                    var c = controlLines.length - 1;\r\n                    while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {\r\n                        // We expect at least one stack frame to be shared.\r\n                        // Typically this will be the root most one. However, stack frames may be\r\n                        // cut off due to maximum stack limits. In this case, one maybe cut off\r\n                        // earlier than the other. We assume that the sample is longer or the same\r\n                        // and there for cut off earlier. So we should find the root most frame in\r\n                        // the sample somewhere in the control.\r\n                        c--;\r\n                    }\r\n                    for (; s >= 1 && c >= 0; s--, c--) {\r\n                        // Next we find the first one that isn't the same which should be the\r\n                        // frame that called our sample function and the control.\r\n                        if (sampleLines[s] !== controlLines[c]) {\r\n                            // In V8, the first line is describing the message but other VMs don't.\r\n                            // If we're about to return the first line, and the control is also on the same\r\n                            // line, that's a pretty good indicator that our sample threw at same line as\r\n                            // the control. I.e. before we entered the sample frame. So we ignore this result.\r\n                            // This can happen if you passed a class to function component, or non-function.\r\n                            if (s !== 1 || c !== 1) {\r\n                                do {\r\n                                    s--;\r\n                                    c--; // We may still have similar intermediate frames from the construct call.\r\n                                    // The next one that isn't the same should be our match though.\r\n                                    if (c < 0 || sampleLines[s] !== controlLines[c]) {\r\n                                        // V8 adds a \"new\" prefix for native classes. Let's remove it to make it prettier.\r\n                                        var _frame = '\\n' + sampleLines[s].replace(' at new ', ' at ');\r\n                                        {\r\n                                            if (typeof fn === 'function') {\r\n                                                componentFrameCache.set(fn, _frame);\r\n                                            }\r\n                                        } // Return the line we found.\r\n                                        return _frame;\r\n                                    }\r\n                                } while (s >= 1 && c >= 0);\r\n                            }\r\n                            break;\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n            finally {\r\n                reentry = false;\r\n                {\r\n                    ReactCurrentDispatcher$1.current = previousDispatcher;\r\n                    reenableLogs();\r\n                }\r\n                Error.prepareStackTrace = previousPrepareStackTrace;\r\n            } // Fallback to just using the name if we couldn't make it throw.\r\n            var name = fn ? fn.displayName || fn.name : '';\r\n            var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';\r\n            {\r\n                if (typeof fn === 'function') {\r\n                    componentFrameCache.set(fn, syntheticFrame);\r\n                }\r\n            }\r\n            return syntheticFrame;\r\n        }\r\n        function describeFunctionComponentFrame(fn, source, ownerFn) {\r\n            {\r\n                return describeNativeComponentFrame(fn, false);\r\n            }\r\n        }\r\n        function shouldConstruct(Component) {\r\n            var prototype = Component.prototype;\r\n            return !!(prototype && prototype.isReactComponent);\r\n        }\r\n        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {\r\n            if (type == null) {\r\n                return '';\r\n            }\r\n            if (typeof type === 'function') {\r\n                {\r\n                    return describeNativeComponentFrame(type, shouldConstruct(type));\r\n                }\r\n            }\r\n            if (typeof type === 'string') {\r\n                return describeBuiltInComponentFrame(type);\r\n            }\r\n            switch (type) {\r\n                case exports.Suspense:\r\n                    return describeBuiltInComponentFrame('Suspense');\r\n                case REACT_SUSPENSE_LIST_TYPE:\r\n                    return describeBuiltInComponentFrame('SuspenseList');\r\n            }\r\n            if (typeof type === 'object') {\r\n                switch (type.$$typeof) {\r\n                    case REACT_FORWARD_REF_TYPE:\r\n                        return describeFunctionComponentFrame(type.render);\r\n                    case REACT_MEMO_TYPE:\r\n                        // Memo may contain any component type so we recursively resolve it.\r\n                        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);\r\n                    case REACT_BLOCK_TYPE:\r\n                        return describeFunctionComponentFrame(type._render);\r\n                    case REACT_LAZY_TYPE:\r\n                        {\r\n                            var lazyComponent = type;\r\n                            var payload = lazyComponent._payload;\r\n                            var init = lazyComponent._init;\r\n                            try {\r\n                                // Lazy may contain any component type so we recursively resolve it.\r\n                                return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);\r\n                            }\r\n                            catch (x) { }\r\n                        }\r\n                }\r\n            }\r\n            return '';\r\n        }\r\n        var loggedTypeFailures = {};\r\n        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;\r\n        function setCurrentlyValidatingElement(element) {\r\n            {\r\n                if (element) {\r\n                    var owner = element._owner;\r\n                    var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);\r\n                    ReactDebugCurrentFrame$1.setExtraStackFrame(stack);\r\n                }\r\n                else {\r\n                    ReactDebugCurrentFrame$1.setExtraStackFrame(null);\r\n                }\r\n            }\r\n        }\r\n        function checkPropTypes(typeSpecs, values, location, componentName, element) {\r\n            {\r\n                // $FlowFixMe This is okay but Flow doesn't know it.\r\n                var has = Function.call.bind(Object.prototype.hasOwnProperty);\r\n                for (var typeSpecName in typeSpecs) {\r\n                    if (has(typeSpecs, typeSpecName)) {\r\n                        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to\r\n                        // fail the render phase where it didn't fail before. So we log it.\r\n                        // After these have been cleaned up, we'll let them throw.\r\n                        try {\r\n                            // This is intentionally an invariant that gets caught. It's the same\r\n                            // behavior as without this statement except with a better message.\r\n                            if (typeof typeSpecs[typeSpecName] !== 'function') {\r\n                                var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');\r\n                                err.name = 'Invariant Violation';\r\n                                throw err;\r\n                            }\r\n                            error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');\r\n                        }\r\n                        catch (ex) {\r\n                            error$1 = ex;\r\n                        }\r\n                        if (error$1 && !(error$1 instanceof Error)) {\r\n                            setCurrentlyValidatingElement(element);\r\n                            error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);\r\n                            setCurrentlyValidatingElement(null);\r\n                        }\r\n                        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {\r\n                            // Only monitor this failure once because there tends to be a lot of the\r\n                            // same error.\r\n                            loggedTypeFailures[error$1.message] = true;\r\n                            setCurrentlyValidatingElement(element);\r\n                            error('Failed %s type: %s', location, error$1.message);\r\n                            setCurrentlyValidatingElement(null);\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        function setCurrentlyValidatingElement$1(element) {\r\n            {\r\n                if (element) {\r\n                    var owner = element._owner;\r\n                    var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);\r\n                    setExtraStackFrame(stack);\r\n                }\r\n                else {\r\n                    setExtraStackFrame(null);\r\n                }\r\n            }\r\n        }\r\n        var propTypesMisspellWarningShown;\r\n        {\r\n            propTypesMisspellWarningShown = false;\r\n        }\r\n        function getDeclarationErrorAddendum() {\r\n            if (ReactCurrentOwner.current) {\r\n                var name = getComponentName(ReactCurrentOwner.current.type);\r\n                if (name) {\r\n                    return '\\n\\nCheck the render method of `' + name + '`.';\r\n                }\r\n            }\r\n            return '';\r\n        }\r\n        function getSourceInfoErrorAddendum(source) {\r\n            if (source !== undefined) {\r\n                var fileName = source.fileName.replace(/^.*[\\\\\\/]/, '');\r\n                var lineNumber = source.lineNumber;\r\n                return '\\n\\nCheck your code at ' + fileName + ':' + lineNumber + '.';\r\n            }\r\n            return '';\r\n        }\r\n        function getSourceInfoErrorAddendumForProps(elementProps) {\r\n            if (elementProps !== null && elementProps !== undefined) {\r\n                return getSourceInfoErrorAddendum(elementProps.__source);\r\n            }\r\n            return '';\r\n        }\r\n        /**\r\n         * Warn if there's no key explicitly set on dynamic arrays of children or\r\n         * object keys are not valid. This allows us to keep track of children between\r\n         * updates.\r\n         */\r\n        var ownerHasKeyUseWarning = {};\r\n        function getCurrentComponentErrorInfo(parentType) {\r\n            var info = getDeclarationErrorAddendum();\r\n            if (!info) {\r\n                var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;\r\n                if (parentName) {\r\n                    info = \"\\n\\nCheck the top-level render call using <\" + parentName + \">.\";\r\n                }\r\n            }\r\n            return info;\r\n        }\r\n        /**\r\n         * Warn if the element doesn't have an explicit key assigned to it.\r\n         * This element is in an array. The array could grow and shrink or be\r\n         * reordered. All children that haven't already been validated are required to\r\n         * have a \"key\" property assigned to it. Error statuses are cached so a warning\r\n         * will only be shown once.\r\n         *\r\n         * @internal\r\n         * @param {ReactElement} element Element that requires a key.\r\n         * @param {*} parentType element's parent's type.\r\n         */\r\n        function validateExplicitKey(element, parentType) {\r\n            if (!element._store || element._store.validated || element.key != null) {\r\n                return;\r\n            }\r\n            element._store.validated = true;\r\n            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);\r\n            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {\r\n                return;\r\n            }\r\n            ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a\r\n            // property, it may be the creator of the child that's responsible for\r\n            // assigning it a key.\r\n            var childOwner = '';\r\n            if (element && element._owner && element._owner !== ReactCurrentOwner.current) {\r\n                // Give the component that originally created this child.\r\n                childOwner = \" It was passed a child from \" + getComponentName(element._owner.type) + \".\";\r\n            }\r\n            {\r\n                setCurrentlyValidatingElement$1(element);\r\n                error('Each child in a list should have a unique \"key\" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);\r\n                setCurrentlyValidatingElement$1(null);\r\n            }\r\n        }\r\n        /**\r\n         * Ensure that every element either is passed in a static location, in an\r\n         * array with an explicit keys property defined, or in an object literal\r\n         * with valid key property.\r\n         *\r\n         * @internal\r\n         * @param {ReactNode} node Statically passed child of any type.\r\n         * @param {*} parentType node's parent's type.\r\n         */\r\n        function validateChildKeys(node, parentType) {\r\n            if (typeof node !== 'object') {\r\n                return;\r\n            }\r\n            if (Array.isArray(node)) {\r\n                for (var i = 0; i < node.length; i++) {\r\n                    var child = node[i];\r\n                    if (isValidElement(child)) {\r\n                        validateExplicitKey(child, parentType);\r\n                    }\r\n                }\r\n            }\r\n            else if (isValidElement(node)) {\r\n                // This element was passed in a valid location.\r\n                if (node._store) {\r\n                    node._store.validated = true;\r\n                }\r\n            }\r\n            else if (node) {\r\n                var iteratorFn = getIteratorFn(node);\r\n                if (typeof iteratorFn === 'function') {\r\n                    // Entry iterators used to provide implicit keys,\r\n                    // but now we print a separate warning for them later.\r\n                    if (iteratorFn !== node.entries) {\r\n                        var iterator = iteratorFn.call(node);\r\n                        var step;\r\n                        while (!(step = iterator.next()).done) {\r\n                            if (isValidElement(step.value)) {\r\n                                validateExplicitKey(step.value, parentType);\r\n                            }\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        /**\r\n         * Given an element, validate that its props follow the propTypes definition,\r\n         * provided by the type.\r\n         *\r\n         * @param {ReactElement} element\r\n         */\r\n        function validatePropTypes(element) {\r\n            {\r\n                var type = element.type;\r\n                if (type === null || type === undefined || typeof type === 'string') {\r\n                    return;\r\n                }\r\n                var propTypes;\r\n                if (typeof type === 'function') {\r\n                    propTypes = type.propTypes;\r\n                }\r\n                else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.\r\n                    // Inner props are checked in the reconciler.\r\n                    type.$$typeof === REACT_MEMO_TYPE)) {\r\n                    propTypes = type.propTypes;\r\n                }\r\n                else {\r\n                    return;\r\n                }\r\n                if (propTypes) {\r\n                    // Intentionally inside to avoid triggering lazy initializers:\r\n                    var name = getComponentName(type);\r\n                    checkPropTypes(propTypes, element.props, 'prop', name, element);\r\n                }\r\n                else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {\r\n                    propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:\r\n                    var _name = getComponentName(type);\r\n                    error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');\r\n                }\r\n                if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {\r\n                    error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');\r\n                }\r\n            }\r\n        }\r\n        /**\r\n         * Given a fragment, validate that it can only be provided with fragment props\r\n         * @param {ReactElement} fragment\r\n         */\r\n        function validateFragmentProps(fragment) {\r\n            {\r\n                var keys = Object.keys(fragment.props);\r\n                for (var i = 0; i < keys.length; i++) {\r\n                    var key = keys[i];\r\n                    if (key !== 'children' && key !== 'key') {\r\n                        setCurrentlyValidatingElement$1(fragment);\r\n                        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);\r\n                        setCurrentlyValidatingElement$1(null);\r\n                        break;\r\n                    }\r\n                }\r\n                if (fragment.ref !== null) {\r\n                    setCurrentlyValidatingElement$1(fragment);\r\n                    error('Invalid attribute `ref` supplied to `React.Fragment`.');\r\n                    setCurrentlyValidatingElement$1(null);\r\n                }\r\n            }\r\n        }\r\n        function createElementWithValidation(type, props, children) {\r\n            var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to\r\n            // succeed and there will likely be errors in render.\r\n            if (!validType) {\r\n                var info = '';\r\n                if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {\r\n                    info += ' You likely forgot to export your component from the file ' + \"it's defined in, or you might have mixed up default and named imports.\";\r\n                }\r\n                var sourceInfo = getSourceInfoErrorAddendumForProps(props);\r\n                if (sourceInfo) {\r\n                    info += sourceInfo;\r\n                }\r\n                else {\r\n                    info += getDeclarationErrorAddendum();\r\n                }\r\n                var typeString;\r\n                if (type === null) {\r\n                    typeString = 'null';\r\n                }\r\n                else if (Array.isArray(type)) {\r\n                    typeString = 'array';\r\n                }\r\n                else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {\r\n                    typeString = \"<\" + (getComponentName(type.type) || 'Unknown') + \" />\";\r\n                    info = ' Did you accidentally export a JSX literal instead of a component?';\r\n                }\r\n                else {\r\n                    typeString = typeof type;\r\n                }\r\n                {\r\n                    error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);\r\n                }\r\n            }\r\n            var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.\r\n            // TODO: Drop this when these are no longer allowed as the type argument.\r\n            if (element == null) {\r\n                return element;\r\n            } // Skip key warning if the type isn't valid since our key validation logic\r\n            // doesn't expect a non-string/function type and can throw confusing errors.\r\n            // We don't want exception behavior to differ between dev and prod.\r\n            // (Rendering will throw with a helpful message and as soon as the type is\r\n            // fixed, the key warnings will appear.)\r\n            if (validType) {\r\n                for (var i = 2; i < arguments.length; i++) {\r\n                    validateChildKeys(arguments[i], type);\r\n                }\r\n            }\r\n            if (type === exports.Fragment) {\r\n                validateFragmentProps(element);\r\n            }\r\n            else {\r\n                validatePropTypes(element);\r\n            }\r\n            return element;\r\n        }\r\n        var didWarnAboutDeprecatedCreateFactory = false;\r\n        function createFactoryWithValidation(type) {\r\n            var validatedFactory = createElementWithValidation.bind(null, type);\r\n            validatedFactory.type = type;\r\n            {\r\n                if (!didWarnAboutDeprecatedCreateFactory) {\r\n                    didWarnAboutDeprecatedCreateFactory = true;\r\n                    warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');\r\n                } // Legacy hook: remove it\r\n                Object.defineProperty(validatedFactory, 'type', {\r\n                    enumerable: false,\r\n                    get: function () {\r\n                        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');\r\n                        Object.defineProperty(this, 'type', {\r\n                            value: type\r\n                        });\r\n                        return type;\r\n                    }\r\n                });\r\n            }\r\n            return validatedFactory;\r\n        }\r\n        function cloneElementWithValidation(element, props, children) {\r\n            var newElement = cloneElement.apply(this, arguments);\r\n            for (var i = 2; i < arguments.length; i++) {\r\n                validateChildKeys(arguments[i], newElement.type);\r\n            }\r\n            validatePropTypes(newElement);\r\n            return newElement;\r\n        }\r\n        {\r\n            try {\r\n                var frozenObject = Object.freeze({});\r\n                /* eslint-disable no-new */\r\n                new Map([[frozenObject, null]]);\r\n                new Set([frozenObject]);\r\n                /* eslint-enable no-new */\r\n            }\r\n            catch (e) {\r\n            }\r\n        }\r\n        var createElement$1 = createElementWithValidation;\r\n        var cloneElement$1 = cloneElementWithValidation;\r\n        var createFactory = createFactoryWithValidation;\r\n        var Children = {\r\n            map: mapChildren,\r\n            forEach: forEachChildren,\r\n            count: countChildren,\r\n            toArray: toArray,\r\n            only: onlyChild\r\n        };\r\n        exports.Children = Children;\r\n        exports.Component = Component;\r\n        exports.PureComponent = PureComponent;\r\n        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;\r\n        exports.cloneElement = cloneElement$1;\r\n        exports.createContext = createContext;\r\n        exports.createElement = createElement$1;\r\n        exports.createFactory = createFactory;\r\n        exports.createRef = createRef;\r\n        exports.forwardRef = forwardRef;\r\n        exports.isValidElement = isValidElement;\r\n        exports.lazy = lazy;\r\n        exports.memo = memo;\r\n        exports.useCallback = useCallback;\r\n        exports.useContext = useContext;\r\n        exports.useDebugValue = useDebugValue;\r\n        exports.useEffect = useEffect;\r\n        exports.useImperativeHandle = useImperativeHandle;\r\n        exports.useLayoutEffect = useLayoutEffect;\r\n        exports.useMemo = useMemo;\r\n        exports.useReducer = useReducer;\r\n        exports.useRef = useRef;\r\n        exports.useState = useState;\r\n        exports.version = ReactVersion;\r\n    })();\r\n}\r\n\n\n//# sourceURL=webpack://lesson-1/./node_modules/react/cjs/react.development.js?");

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\nif (false) {}\r\nelse {\r\n    module.exports = __webpack_require__(/*! ./cjs/react.development.js */ \"./node_modules/react/cjs/react.development.js\");\r\n}\r\n\n\n//# sourceURL=webpack://lesson-1/./node_modules/react/index.js?");

/***/ }),

/***/ "./node_modules/webpack-plugin-serve/client.js":
/*!*****************************************************!*\
  !*** ./node_modules/webpack-plugin-serve/client.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\n/*\r\n  Copyright © 2018 Andrew Powell\r\n\r\n  This Source Code Form is subject to the terms of the Mozilla Public\r\n  License, v. 2.0. If a copy of the MPL was not distributed with this\r\n  file, You can obtain one at http://mozilla.org/MPL/2.0/.\r\n\r\n  The above copyright notice and this permission notice shall be\r\n  included in all copies or substantial portions of this Source Code Form.\r\n*/\r\n/**\r\n * @note This file exists merely as an easy reference for folks adding it to their configuration entries\r\n */\r\n(function () {\r\n    /* eslint-disable global-require */\r\n    var run = __webpack_require__(/*! ./lib/client/client */ \"./node_modules/webpack-plugin-serve/lib/client/client.js\").run;\r\n    var hash = '<unknown>';\r\n    var options;\r\n    try {\r\n        options = {\"compress\":null,\"headers\":null,\"historyFallback\":false,\"hmr\":true,\"host\":null,\"liveReload\":false,\"log\":{\"level\":\"info\",\"prefix\":{\"template\":\"{{level}}\"},\"name\":\"webpack-plugin-serve\"},\"open\":false,\"port\":55555,\"progress\":true,\"ramdisk\":false,\"secure\":false,\"static\":[\"G:\\\\node\\\\react\\\\study\"],\"status\":true,\"address\":\"[::]:55555\",\"compilerName\":null,\"wpsId\":\"536f80d\"};\r\n    }\r\n    catch (e) {\r\n        var log = __webpack_require__(/*! ./lib/client/log */ \"./node_modules/webpack-plugin-serve/lib/client/log.js\").log;\r\n        log.error('The entry for webpack-plugin-serve was included in your build, but it does not appear that the plugin was. Please check your configuration.');\r\n    }\r\n    try {\r\n        // eslint-disable-next-line camelcase\r\n        hash = __webpack_require__.h();\r\n    }\r\n    catch (e) { } // eslint-disable-line no-empty\r\n    run(hash, options);\r\n})();\r\n\n\n//# sourceURL=webpack://lesson-1/./node_modules/webpack-plugin-serve/client.js?");

/***/ }),

/***/ "./node_modules/webpack-plugin-serve/lib/client/ClientSocket.js":
/*!**********************************************************************!*\
  !*** ./node_modules/webpack-plugin-serve/lib/client/ClientSocket.js ***!
  \**********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\r\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\r\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\r\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\r\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\r\n            r[k] = a[j];\r\n    return r;\r\n};\r\n/*\r\n  Copyright © 2018 Andrew Powell\r\n\r\n  This Source Code Form is subject to the terms of the Mozilla Public\r\n  License, v. 2.0. If a copy of the MPL was not distributed with this\r\n  file, You can obtain one at http://mozilla.org/MPL/2.0/.\r\n\r\n  The above copyright notice and this permission notice shall be\r\n  included in all copies or substantial portions of this Source Code Form.\r\n*/\r\nvar _a = __webpack_require__(/*! ./log */ \"./node_modules/webpack-plugin-serve/lib/client/log.js\")(), error = _a.error, refresh = _a.refresh, warn = _a.warn;\r\n// ignore 1008 (HTTP 400 equivalent) and 1011 (HTTP 500 equivalent)\r\nvar ignoreCodes = [1008, 1011];\r\nvar maxAttempts = 10;\r\nvar ClientSocket = /** @class */ (function () {\r\n    function ClientSocket(options) {\r\n        var args = [];\r\n        for (var _i = 1; _i < arguments.length; _i++) {\r\n            args[_i - 1] = arguments[_i];\r\n        }\r\n        this.args = args;\r\n        this.attempts = 0;\r\n        this.eventHandlers = [];\r\n        this.options = options;\r\n        this.retrying = false;\r\n        this.connect();\r\n    }\r\n    ClientSocket.prototype.addEventListener = function () {\r\n        var _a;\r\n        var args = [];\r\n        for (var _i = 0; _i < arguments.length; _i++) {\r\n            args[_i] = arguments[_i];\r\n        }\r\n        this.eventHandlers.push(args);\r\n        (_a = this.socket).addEventListener.apply(_a, args);\r\n    };\r\n    ClientSocket.prototype.close = function () {\r\n        this.socket.close();\r\n    };\r\n    ClientSocket.prototype.connect = function () {\r\n        var _this = this;\r\n        if (this.socket) {\r\n            delete this.socket;\r\n        }\r\n        this.connecting = true;\r\n        this.socket = new (WebSocket.bind.apply(WebSocket, __spreadArrays([void 0], this.args)))();\r\n        if (this.options.retry) {\r\n            this.socket.addEventListener('close', function (event) {\r\n                if (ignoreCodes.includes(event.code)) {\r\n                    return;\r\n                }\r\n                if (!_this.retrying) {\r\n                    warn(\"The WebSocket was closed and will attempt to reconnect\");\r\n                }\r\n                _this.reconnect();\r\n            });\r\n        }\r\n        else {\r\n            this.socket.onclose = function () { return warn(\"The client WebSocket was closed. \" + refresh); };\r\n        }\r\n        this.socket.addEventListener('open', function () {\r\n            _this.attempts = 0;\r\n            _this.retrying = false;\r\n        });\r\n        if (this.eventHandlers.length) {\r\n            for (var _i = 0, _a = this.eventHandlers; _i < _a.length; _i++) {\r\n                var _b = _a[_i], name_1 = _b[0], fn = _b[1];\r\n                this.socket.addEventListener(name_1, fn);\r\n            }\r\n        }\r\n    };\r\n    ClientSocket.prototype.reconnect = function () {\r\n        var _this = this;\r\n        this.attempts += 1;\r\n        this.retrying = true;\r\n        if (this.attempts > maxAttempts) {\r\n            error(\"The WebSocket could not be reconnected. \" + refresh);\r\n            this.retrying = false;\r\n            return;\r\n        }\r\n        var timeout = 1000 * Math.pow(this.attempts, 2);\r\n        setTimeout(function () { return _this.connect(_this.args); }, timeout);\r\n    };\r\n    ClientSocket.prototype.removeEventListener = function () {\r\n        var _a;\r\n        var args = [];\r\n        for (var _i = 0; _i < arguments.length; _i++) {\r\n            args[_i] = arguments[_i];\r\n        }\r\n        var handler = args[1];\r\n        this.eventHandlers = this.eventHandlers.filter(function (_a) {\r\n            var fn = _a[1];\r\n            return fn === handler;\r\n        });\r\n        (_a = this.socket).removeEventListener.apply(_a, args);\r\n    };\r\n    return ClientSocket;\r\n}());\r\nmodule.exports = { ClientSocket: ClientSocket };\r\n\n\n//# sourceURL=webpack://lesson-1/./node_modules/webpack-plugin-serve/lib/client/ClientSocket.js?");

/***/ }),

/***/ "./node_modules/webpack-plugin-serve/lib/client/client.js":
/*!****************************************************************!*\
  !*** ./node_modules/webpack-plugin-serve/lib/client/client.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\n/*\r\n  Copyright © 2018 Andrew Powell\r\n\r\n  This Source Code Form is subject to the terms of the Mozilla Public\r\n  License, v. 2.0. If a copy of the MPL was not distributed with this\r\n  file, You can obtain one at http://mozilla.org/MPL/2.0/.\r\n\r\n  The above copyright notice and this permission notice shall be\r\n  included in all copies or substantial portions of this Source Code Form.\r\n*/\r\n/* eslint-disable global-require */\r\nvar run = function (buildHash, options) {\r\n    var address = options.address, _a = options.client, client = _a === void 0 ? {} : _a, progress = options.progress, secure = options.secure, status = options.status;\r\n    options.firstInstance = !window.webpackPluginServe; // eslint-disable-line no-param-reassign\r\n    window.webpackPluginServe = window.webpackPluginServe || {\r\n        compilers: {}\r\n    };\r\n    window.webpackPluginServe.silent = !!client.silent;\r\n    var ClientSocket = __webpack_require__(/*! ./ClientSocket */ \"./node_modules/webpack-plugin-serve/lib/client/ClientSocket.js\").ClientSocket;\r\n    var replace = __webpack_require__(/*! ./hmr */ \"./node_modules/webpack-plugin-serve/lib/client/hmr.js\").replace;\r\n    var _b = __webpack_require__(/*! ./log */ \"./node_modules/webpack-plugin-serve/lib/client/log.js\")(), error = _b.error, info = _b.info, warn = _b.warn;\r\n    var protocol = secure ? 'wss' : 'ws';\r\n    var socket = new ClientSocket(client, protocol + \"://\" + (client.address || address) + \"/wps\");\r\n    var compilerName = options.compilerName;\r\n    window.webpackPluginServe.compilers[compilerName] = {};\r\n    // prevents ECONNRESET errors on the server\r\n    window.addEventListener('beforeunload', function () { return socket.close(); });\r\n    socket.addEventListener('message', function (message) {\r\n        var _a = JSON.parse(message.data), action = _a.action, _b = _a.data, data = _b === void 0 ? {} : _b;\r\n        var _c = data || {}, errors = _c.errors, _d = _c.hash, hash = _d === void 0 ? '<?>' : _d, warnings = _c.warnings;\r\n        var shortHash = hash.slice(0, 7);\r\n        var identifier = options.compilerName ? \"(Compiler: \" + options.compilerName + \") \" : '';\r\n        var compiler = window.webpackPluginServe.compilers[compilerName];\r\n        var wpsId = data.wpsId;\r\n        switch (action) {\r\n            case 'build':\r\n                compiler.done = false;\r\n                break;\r\n            case 'connected':\r\n                info(\"WebSocket connected \" + identifier);\r\n                break;\r\n            case 'done':\r\n                compiler.done = true;\r\n                break;\r\n            case 'problems':\r\n                if (data.errors.length) {\r\n                    error(identifier + \"Build \" + shortHash + \" produced errors:\\n\", errors);\r\n                }\r\n                if (data.warnings.length) {\r\n                    warn(identifier + \"Build \" + shortHash + \" produced warnings:\\n\", warnings);\r\n                }\r\n                break;\r\n            case 'reload':\r\n                window.location.reload();\r\n                break;\r\n            case 'replace':\r\n                // actions with a wpsId in tow indicate actions that should only be executed when the wpsId sent\r\n                // matches the wpsId set in options. this is how we can identify multiple compilers in the\r\n                // client.\r\n                if (wpsId && wpsId === options.wpsId) {\r\n                    replace(buildHash, hash);\r\n                }\r\n                break;\r\n            default:\r\n        }\r\n    });\r\n    if (options.firstInstance) {\r\n        if (progress === 'minimal') {\r\n            var init = __webpack_require__(/*! ./overlays/progress-minimal */ \"./node_modules/webpack-plugin-serve/lib/client/overlays/progress-minimal.js\").init;\r\n            init(options, socket);\r\n        }\r\n        else if (progress) {\r\n            var init = __webpack_require__(/*! ./overlays/progress */ \"./node_modules/webpack-plugin-serve/lib/client/overlays/progress.js\").init;\r\n            init(options, socket);\r\n        }\r\n        if (status) {\r\n            var init = __webpack_require__(/*! ./overlays/status */ \"./node_modules/webpack-plugin-serve/lib/client/overlays/status.js\").init;\r\n            init(options, socket);\r\n        }\r\n        if (true) {\r\n            info('Hot Module Replacement is active');\r\n            if (options.liveReload) {\r\n                info('Live Reload taking precedence over Hot Module Replacement');\r\n            }\r\n        }\r\n        else {}\r\n        if (false) {}\r\n    }\r\n};\r\nmodule.exports = { run: run };\r\n\n\n//# sourceURL=webpack://lesson-1/./node_modules/webpack-plugin-serve/lib/client/client.js?");

/***/ }),

/***/ "./node_modules/webpack-plugin-serve/lib/client/hmr.js":
/*!*************************************************************!*\
  !*** ./node_modules/webpack-plugin-serve/lib/client/hmr.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n/*\r\n  Copyright © 2018 Andrew Powell\r\n\r\n  This Source Code Form is subject to the terms of the Mozilla Public\r\n  License, v. 2.0. If a copy of the MPL was not distributed with this\r\n  file, You can obtain one at http://mozilla.org/MPL/2.0/.\r\n\r\n  The above copyright notice and this permission notice shall be\r\n  included in all copies or substantial portions of this Source Code Form.\r\n*/\r\nvar _a = __webpack_require__(/*! ./log */ \"./node_modules/webpack-plugin-serve/lib/client/log.js\")(), error = _a.error, info = _a.info, refresh = _a.refresh, warn = _a.warn;\r\nvar latest = true;\r\nvar hmr = {\r\n    onUnaccepted: function (data) {\r\n        warn('Change in unaccepted module(s):\\n', data);\r\n        warn(data);\r\n    },\r\n    onDeclined: function (data) {\r\n        warn('Change in declined module(s):\\n', data);\r\n    },\r\n    onErrored: function (data) {\r\n        error('Error in module(s):\\n', data);\r\n    }\r\n};\r\nvar replace = function (buildHash, hash) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var _a, apply, check, status, hmrStatus, modules, e_1;\r\n    return __generator(this, function (_b) {\r\n        switch (_b.label) {\r\n            case 0:\r\n                _a = module.hot, apply = _a.apply, check = _a.check, status = _a.status;\r\n                if (hash) {\r\n                    // eslint-disable-next-line no-undef\r\n                    latest = hash.includes(buildHash);\r\n                }\r\n                if (!!latest) return [3 /*break*/, 6];\r\n                hmrStatus = status();\r\n                if (hmrStatus === 'abort' || hmrStatus === 'fail') {\r\n                    warn(\"An HMR update was triggered, but \" + hmrStatus + \"ed. \" + refresh);\r\n                    return [2 /*return*/];\r\n                }\r\n                modules = void 0;\r\n                _b.label = 1;\r\n            case 1:\r\n                _b.trys.push([1, 3, , 4]);\r\n                return [4 /*yield*/, check(false)];\r\n            case 2:\r\n                modules = _b.sent();\r\n                return [3 /*break*/, 4];\r\n            case 3:\r\n                e_1 = _b.sent();\r\n                // noop. this typically happens when a MultiCompiler has more than one compiler that includes\r\n                // this script, and an update happens with a hash that isn't part of the compiler/module this\r\n                // instance was loaded for.\r\n                return [2 /*return*/];\r\n            case 4:\r\n                if (!modules) {\r\n                    warn(\"No modules found for replacement. \" + refresh);\r\n                    return [2 /*return*/];\r\n                }\r\n                return [4 /*yield*/, apply(hmr)];\r\n            case 5:\r\n                modules = _b.sent();\r\n                if (modules) {\r\n                    latest = true;\r\n                    info(\"Build \" + hash.slice(0, 7) + \" replaced:\\n\", modules);\r\n                }\r\n                _b.label = 6;\r\n            case 6: return [2 /*return*/];\r\n        }\r\n    });\r\n}); };\r\nmodule.exports = { replace: replace };\r\n\n\n//# sourceURL=webpack://lesson-1/./node_modules/webpack-plugin-serve/lib/client/hmr.js?");

/***/ }),

/***/ "./node_modules/webpack-plugin-serve/lib/client/log.js":
/*!*************************************************************!*\
  !*** ./node_modules/webpack-plugin-serve/lib/client/log.js ***!
  \*************************************************************/
/***/ ((module) => {

eval("\r\n/*\r\n  Copyright © 2018 Andrew Powell\r\n\r\n  This Source Code Form is subject to the terms of the Mozilla Public\r\n  License, v. 2.0. If a copy of the MPL was not distributed with this\r\n  file, You can obtain one at http://mozilla.org/MPL/2.0/.\r\n\r\n  The above copyright notice and this permission notice shall be\r\n  included in all copies or substantial portions of this Source Code Form.\r\n*/\r\nvar error = console.error, info = console.info, warn = console.warn;\r\nvar log = {\r\n    error: error.bind(console, '⬡ wps:'),\r\n    info: info.bind(console, '⬡ wps:'),\r\n    refresh: 'Please refresh the page',\r\n    warn: warn.bind(console, '⬡ wps:')\r\n};\r\nvar noop = function () { };\r\nvar silent = {\r\n    error: noop,\r\n    info: noop,\r\n    warn: noop\r\n};\r\nmodule.exports = function () { return (window.webpackPluginServe.silent ? silent : log); };\r\n\n\n//# sourceURL=webpack://lesson-1/./node_modules/webpack-plugin-serve/lib/client/log.js?");

/***/ }),

/***/ "./node_modules/webpack-plugin-serve/lib/client/overlays/progress-minimal.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/webpack-plugin-serve/lib/client/overlays/progress-minimal.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\n/*\r\n  Copyright © 2018 Andrew Powell, Matheus Gonçalves da Silva\r\n\r\n  This Source Code Form is subject to the terms of the Mozilla Public\r\n  License, v. 2.0. If a copy of the MPL was not distributed with this\r\n  file, You can obtain one at http://mozilla.org/MPL/2.0/.\r\n\r\n  The above copyright notice and this permission notice shall be\r\n  included in all copies or substantial portions of this Source Code Form.\r\n*/\r\nvar _a = __webpack_require__(/*! ./util */ \"./node_modules/webpack-plugin-serve/lib/client/overlays/util.js\"), addCss = _a.addCss, addHtml = _a.addHtml;\r\nvar ns = 'wps-progress-minimal';\r\nvar html = \"\\n<div id=\\\"\" + ns + \"\\\" class=\\\"\" + ns + \"-hidden\\\">\\n  <div id=\\\"\" + ns + \"-bar\\\"></div>\\n</div>\\n\";\r\nvar css = \"\\n#\" + ns + \" {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  height: 4px;\\n  width: 100vw;\\n  z-index: 2147483645;\\n}\\n\\n#\" + ns + \"-bar {\\n  width: 0%;\\n  height: 4px;\\n  background-color: rgb(186, 223, 172);\\n  transition: width 1s ease-in-out;\\n}\\n\\n.\" + ns + \"-hidden{\\n  display: none;\\n}\\n\";\r\nvar update = function (percent) {\r\n    var bar = document.querySelector(\"#\" + ns + \"-bar\");\r\n    bar.style.width = percent + \"%\";\r\n};\r\nvar reset = function (wrapper) {\r\n    wrapper.classList.add(ns + \"-hidden\");\r\n    setTimeout(function () { return update(0); }, 1e3);\r\n};\r\nvar init = function (options, socket) {\r\n    if (options.firstInstance) {\r\n        document.addEventListener('DOMContentLoaded', function () {\r\n            addCss(css);\r\n            addHtml(html);\r\n        });\r\n    }\r\n    socket.addEventListener('message', function (message) {\r\n        var _a = JSON.parse(message.data), action = _a.action, data = _a.data;\r\n        if (action !== 'progress') {\r\n            return;\r\n        }\r\n        var percent = Math.floor(data.percent * 100);\r\n        var wrapper = document.querySelector(\"#\" + ns);\r\n        wrapper.classList.remove(ns + \"-hidden\");\r\n        if (data.percent === 1) {\r\n            setTimeout(function () { return reset(wrapper); }, 5e3);\r\n        }\r\n        update(percent);\r\n    });\r\n};\r\nmodule.exports = {\r\n    init: init\r\n};\r\n\n\n//# sourceURL=webpack://lesson-1/./node_modules/webpack-plugin-serve/lib/client/overlays/progress-minimal.js?");

/***/ }),

/***/ "./node_modules/webpack-plugin-serve/lib/client/overlays/progress.js":
/*!***************************************************************************!*\
  !*** ./node_modules/webpack-plugin-serve/lib/client/overlays/progress.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\n/*\r\n  Copyright © 2018 Andrew Powell, Matheus Gonçalves da Silva\r\n\r\n  This Source Code Form is subject to the terms of the Mozilla Public\r\n  License, v. 2.0. If a copy of the MPL was not distributed with this\r\n  file, You can obtain one at http://mozilla.org/MPL/2.0/.\r\n\r\n  The above copyright notice and this permission notice shall be\r\n  included in all copies or substantial portions of this Source Code Form.\r\n*/\r\nvar _a = __webpack_require__(/*! ./util */ \"./node_modules/webpack-plugin-serve/lib/client/overlays/util.js\"), addCss = _a.addCss, addHtml = _a.addHtml;\r\nvar ns = 'wps-progress';\r\nvar css = \"\\n@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');\\n\\n#\" + ns + \"{\\n  width: 200px;\\n  height: 200px;\\n  position: absolute;\\n  right: 5%;\\n  top: 5%;\\n  transition: opacity .25s ease-in-out;\\n  z-index: 2147483645;\\n}\\n\\n#\" + ns + \"-bg {\\n  fill: #282d35;\\n}\\n\\n#\" + ns + \"-fill {\\n  fill: rgba(0, 0, 0, 0);\\n  stroke: rgb(186, 223, 172);\\n  stroke-dasharray: 219.99078369140625;\\n  stroke-dashoffset: -219.99078369140625;\\n  stroke-width: 10;\\n  transform: rotate(90deg)translate(0px, -80px);\\n  transition: stroke-dashoffset 1s;\\n}\\n\\n#\" + ns + \"-percent {\\n  font-family: 'Open Sans';\\n  font-size: 18px;\\n  fill: #ffffff;\\n}\\n\\n#\" + ns + \"-percent-value {\\n  dominant-baseline: middle;\\n  text-anchor: middle;\\n}\\n\\n#\" + ns + \"-percent-super {\\n  fill: #bdc3c7;\\n  font-size: .45em;\\n  baseline-shift: 10%;\\n}\\n\\n.\" + ns + \"-noselect {\\n  -webkit-touch-callout: none;\\n  -webkit-user-select: none;\\n  -khtml-user-select: none;\\n  -moz-user-select: none;\\n  -ms-user-select: none;\\n  user-select: none;\\n  cursor: default;\\n}\\n\\n@keyframes \" + ns + \"-hidden-display {\\n\\t0% {\\n\\t\\topacity: 1;\\n\\t\\ttransform: scale(1);\\n\\t\\t-webkit-transform: scale(1);\\n\\t}\\n\\t99% {\\n\\t\\tdisplay: inline-flex;\\n\\t\\topacity: 0;\\n\\t\\ttransform: scale(0);\\n\\t\\t-webkit-transform: scale(0);\\n\\t}\\n\\t100% {\\n\\t\\tdisplay: none;\\n\\t\\topacity: 0;\\n\\t\\ttransform: scale(0);\\n\\t\\t-webkit-transform: scale(0);\\n\\t}\\n}\\n\\n.\" + ns + \"-hidden {\\n  animation: \" + ns + \"-hidden-display .3s;\\n  animation-fill-mode:forwards;\\n  display: inline-flex;\\n}\\n\\n.\" + ns + \"-hidden-onload {\\n  display: none;\\n}\\n\";\r\nvar html = \"\\n<svg id=\\\"\" + ns + \"\\\" class=\\\"\" + ns + \"-noselect \" + ns + \"-hidden-onload\\\" x=\\\"0px\\\" y=\\\"0px\\\" viewBox=\\\"0 0 80 80\\\">\\n  <circle id=\\\"\" + ns + \"-bg\\\" cx=\\\"50%\\\" cy=\\\"50%\\\" r=\\\"35\\\"></circle>\\n  <path id=\\\"\" + ns + \"-fill\\\" d=\\\"M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0\\\" />\\n  <text id=\\\"\" + ns + \"-percent\\\" x=\\\"50%\\\" y=\\\"51%\\\"><tspan id=\\\"\" + ns + \"-percent-value\\\">0</tspan><tspan id=\\\"\" + ns + \"-percent-super\\\">%</tspan></text>\\n</svg>\\n\";\r\nvar update = function (percent) {\r\n    var max = -219.99078369140625;\r\n    var value = document.querySelector(\"#\" + ns + \"-percent-value\");\r\n    var track = document.querySelector(\"#\" + ns + \"-fill\");\r\n    var offset = ((100 - percent) / 100) * max;\r\n    track.setAttribute('style', \"stroke-dashoffset: \" + offset);\r\n    value.innerHTML = percent.toString();\r\n};\r\nvar reset = function (svg) {\r\n    svg.classList.add(ns + \"-hidden\");\r\n    setTimeout(function () { return update(0); }, 1e3);\r\n};\r\nvar init = function (options, socket) {\r\n    if (options.firstInstance) {\r\n        document.addEventListener('DOMContentLoaded', function () {\r\n            addCss(css);\r\n            addHtml(html);\r\n        });\r\n    }\r\n    socket.addEventListener('message', function (message) {\r\n        var _a = JSON.parse(message.data), action = _a.action, data = _a.data;\r\n        if (action !== 'progress') {\r\n            return;\r\n        }\r\n        var percent = Math.floor(data.percent * 100);\r\n        var svg = document.querySelector(\"#\" + ns);\r\n        if (!svg) {\r\n            return;\r\n        }\r\n        // we can safely call this even if it doesn't have the class\r\n        svg.classList.remove(ns + \"-hidden\", ns + \"-hidden-onload\");\r\n        if (data.percent === 1) {\r\n            setTimeout(function () { return reset(svg); }, 5e3);\r\n        }\r\n        update(percent);\r\n    });\r\n};\r\nmodule.exports = { init: init };\r\n\n\n//# sourceURL=webpack://lesson-1/./node_modules/webpack-plugin-serve/lib/client/overlays/progress.js?");

/***/ }),

/***/ "./node_modules/webpack-plugin-serve/lib/client/overlays/status.js":
/*!*************************************************************************!*\
  !*** ./node_modules/webpack-plugin-serve/lib/client/overlays/status.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\n/*\r\n  Copyright © 2018 Andrew Powell\r\n\r\n  This Source Code Form is subject to the terms of the Mozilla Public\r\n  License, v. 2.0. If a copy of the MPL was not distributed with this\r\n  file, You can obtain one at http://mozilla.org/MPL/2.0/.\r\n\r\n  The above copyright notice and this permission notice shall be\r\n  included in all copies or substantial portions of this Source Code Form.\r\n*/\r\nvar _a = __webpack_require__(/*! ./util */ \"./node_modules/webpack-plugin-serve/lib/client/overlays/util.js\"), addCss = _a.addCss, addHtml = _a.addHtml, socketMessage = _a.socketMessage;\r\nvar ns = 'wps-status';\r\nvar css = \"\\n@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');\\n\\n#\" + ns + \" {\\n  background: #282d35;\\n  border-radius: 0.6em;\\n  display: flex;\\n  flex-direction: column;\\n\\tfont-family: 'Open Sans', Helvetica, Arial, sans-serif;\\n\\tfont-size: 10px;\\n  height: 90%;\\n  min-height: 20em;\\n  left: 50%;\\n  opacity: 1;\\n  overflow: hidden;\\n  padding-bottom: 3em;\\n  position: absolute;\\n  top: 2rem;\\n  transform: translateX(-50%);\\n  transition: opacity .25s ease-in-out;\\n  width: 95%;\\n  z-index: 2147483645;\\n}\\n\\n@keyframes \" + ns + \"-hidden-display {\\n\\t0% {\\n\\t\\topacity: 1;\\n\\t}\\n\\t99% {\\n\\t\\tdisplay: inline-flex;\\n\\t\\topacity: 0;\\n\\t}\\n\\t100% {\\n\\t\\tdisplay: none;\\n\\t\\topacity: 0;\\n\\t}\\n}\\n\\n#\" + ns + \".\" + ns + \"-hidden {\\n  animation: \" + ns + \"-hidden-display .3s;\\n  animation-fill-mode:forwards;\\n  display: none;\\n}\\n\\n#\" + ns + \".\" + ns + \"-min {\\n  animation: minimize 10s;\\n  bottom: 2em;\\n  cursor: pointer;\\n  height: 6em;\\n  left: auto;\\n  min-height: 6em;\\n  padding-bottom: 0;\\n  position: absolute;\\n  right: 2em;\\n  top: auto;\\n  transform: none;\\n  width: 6em;\\n}\\n\\n#\" + ns + \".\" + ns + \"-min #\" + ns + \"-beacon {\\n  display: block;\\n}\\n\\n#\" + ns + \"-title {\\n  color: #fff;\\n  font-size: 1.2em;\\n  font-weight: normal;\\n  margin: 0;\\n  padding: 0.6em 0;\\n  text-align: center;\\n  width: 100%;\\n}\\n\\n#\" + ns + \".\" + ns + \"-min #\" + ns + \"-title {\\n  display: none;\\n}\\n\\n#\" + ns + \"-title-errors {\\n  color: #ff5f58;\\n  font-style: normal;\\n  padding-left: 1em;\\n}\\n\\n#\" + ns + \"-title-warnings {\\n  color: #ffbd2e;\\n  font-style: normal;\\n  padding-left: 1em;\\n}\\n\\n#\" + ns + \"-problems {\\n  overflow-y: auto;\\n  padding: 1em 2em;\\n}\\n\\n#\" + ns + \"-problems pre {\\n  color: #ddd;\\n  background: #282d35;\\n  display: block;\\n  font-size: 1.3em;\\n\\tfont-family: 'Open Sans', Helvetica, Arial, sans-serif;\\n  white-space: pre-wrap;\\n}\\n\\n#\" + ns + \"-problems pre em {\\n  background: #ff5f58;\\n  border-radius: 0.3em;\\n  color: #641e16;\\n  font-style: normal;\\n  line-height: 3em;\\n  margin-right: 0.4em;\\n  padding: 0.1em 0.4em;\\n  text-transform: uppercase;\\n}\\n\\npre#\" + ns + \"-warnings em {\\n  background: #ffbd2e;\\n  color: #3e2723;\\n}\\n\\npre#\" + ns + \"-success {\\n  display: none;\\n  text-align: center;\\n}\\n\\npre#\" + ns + \"-success em {\\n  background: #7fb900;\\n  color: #004d40;\\n}\\n\\n#\" + ns + \"-problems.\" + ns + \"-success #\" + ns + \"-success {\\n  display: block;\\n}\\n\\n#\" + ns + \".\" + ns + \"-min #\" + ns + \"-problems {\\n  display: none;\\n}\\n\\n#\" + ns + \"-nav {\\n  opacity: 0.5;\\n  padding: 1.2em;\\n  position: absolute;\\n}\\n\\n#\" + ns + \".\" + ns + \"-min #\" + ns + \"-nav {\\n  display: none;\\n}\\n\\n#\" + ns + \"-nav:hover {\\n  opacity: 1;\\n}\\n\\n#\" + ns + \"-nav div {\\n  background: #ff5f58;\\n  border-radius: 1.2em;\\n  cursor: pointer;\\n  display: inline-block;\\n  height: 1.2em;\\n  position: relative;\\n  width: 1.2em;\\n}\\n\\ndiv#\" + ns + \"-min {\\n  background: #ffbd2e;\\n  margin-left: 0.8em;\\n}\\n\\n#\" + ns + \"-beacon {\\n  border-radius: 3em;\\n  display: none;\\n  font-size: 10px;\\n  height: 3em;\\n  margin: 1.6em auto;\\n  position: relative;\\n  width: 3em;\\n}\\n\\n#\" + ns + \"-beacon:before, #\" + ns + \"-beacon:after {\\n  content: '';\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  background: rgba(127,185,0, 0.2);\\n  border-radius: 3em;\\n  opacity: 0;\\n}\\n\\n#\" + ns + \"-beacon:before {\\n  animation: \" + ns + \"-pulse 3s infinite linear;\\n  transform: scale(1);\\n}\\n\\n#\" + ns + \"-beacon:after {\\n  animation: \" + ns + \"-pulse 3s 2s infinite linear;\\n}\\n\\n\\n@keyframes \" + ns + \"-pulse {\\n  0% {\\n    opacity: 0;\\n    transform: scale(0.6);\\n  }\\n  33% {\\n    opacity: 1;\\n    transform: scale(1);\\n  }\\n  100% {\\n    opacity: 0;\\n    transform: scale(1.4);\\n  }\\n}\\n\\n#\" + ns + \"-beacon mark {\\n  background: rgba(127, 185, 0, 1);\\n  border-radius: 100% 100%;\\n  height: 1em;\\n  left: 1em;\\n  position: absolute;\\n  top: 1em;\\n  width: 1em;\\n}\\n\\n#\" + ns + \"-beacon.\" + ns + \"-error mark {\\n  background: #ff5f58;\\n}\\n\\n#\" + ns + \"-beacon.\" + ns + \"-error:before, #\" + ns + \"-beacon.error:after {\\n  background: rgba(255, 95, 88, 0.2);\\n}\\n\\n#\" + ns + \"-beacon.\" + ns + \"-warning mark {\\n  background: #ffbd2e;\\n}\\n\\n#\" + ns + \"-beacon.\" + ns + \"-warning:before, #\" + ns + \"-beacon.warning:after {\\n  background: rgba(255, 189, 46, 0.2);\\n}\\n\";\r\nvar html = \"\\n<aside id=\\\"\" + ns + \"\\\" class=\\\"\" + ns + \"-hidden\\\" title=\\\"build status\\\">\\n  <figure id=\\\"\" + ns + \"-beacon\\\">\\n    <mark/>\\n  </figure>\\n  <nav id=\\\"\" + ns + \"-nav\\\">\\n    <div id=\\\"\" + ns + \"-close\\\" title=\\\"close\\\"></div>\\n    <div id=\\\"\" + ns + \"-min\\\" title=\\\"minmize\\\"></div>\\n  </nav>\\n  <h1 id=\\\"\" + ns + \"-title\\\">\\n    build status\\n    <em id=\\\"\" + ns + \"-title-errors\\\"></em>\\n    <em id=\\\"\" + ns + \"-title-warnings\\\"></em>\\n  </h1>\\n  <article id=\\\"\" + ns + \"-problems\\\">\\n    <pre id=\\\"\" + ns + \"-success\\\"><em>Build Successful</em></pre>\\n    <pre id=\\\"\" + ns + \"-errors\\\"></pre>\\n    <pre id=\\\"\" + ns + \"-warnings\\\"></pre>\\n  </article>\\n</aside>\\n\";\r\nvar init = function (options, socket) {\r\n    var hidden = ns + \"-hidden\";\r\n    var hasProblems = false;\r\n    var aside;\r\n    var beacon;\r\n    var problems;\r\n    var preErrors;\r\n    var preWarnings;\r\n    var titleErrors;\r\n    var titleWarnings;\r\n    var reset = function () {\r\n        preErrors.innerHTML = '';\r\n        preWarnings.innerHTML = '';\r\n        problems.classList.remove(ns + \"-success\");\r\n        beacon.className = '';\r\n        titleErrors.innerText = '';\r\n        titleWarnings.innerText = '';\r\n    };\r\n    var addErrors = function (errors) {\r\n        if (errors.length) {\r\n            problems.classList.remove(ns + \"-success\");\r\n            beacon.classList.add(ns + \"-error\");\r\n            for (var _i = 0, errors_1 = errors; _i < errors_1.length; _i++) {\r\n                var error = errors_1[_i];\r\n                var markup = \"<div><em>Error</em> in \" + error + \"</div>\";\r\n                addHtml(markup, preErrors);\r\n            }\r\n            titleErrors.innerText = errors.length + \" Error(s)\";\r\n        }\r\n        else {\r\n            titleErrors.innerText = '';\r\n        }\r\n        aside.classList.remove(hidden);\r\n    };\r\n    var addWarnings = function (warnings) {\r\n        if (warnings.length) {\r\n            problems.classList.remove(ns + \"-success\");\r\n            if (!beacon.classList.contains(ns + \"-error\")) {\r\n                beacon.classList.add(ns + \"-warning\");\r\n            }\r\n            for (var _i = 0, warnings_1 = warnings; _i < warnings_1.length; _i++) {\r\n                var warning = warnings_1[_i];\r\n                var markup = \"<div><em>Warning</em> in \" + warning + \"</div>\";\r\n                addHtml(markup, preWarnings);\r\n            }\r\n            titleWarnings.innerText = warnings.length + \" Warning(s)\";\r\n        }\r\n        else {\r\n            titleWarnings.innerText = '';\r\n        }\r\n        aside.classList.remove(hidden);\r\n    };\r\n    if (options.firstInstance) {\r\n        document.addEventListener('DOMContentLoaded', function () {\r\n            addCss(css);\r\n            aside = addHtml(html)[0];\r\n            beacon = document.querySelector(\"#\" + ns + \"-beacon\");\r\n            problems = document.querySelector(\"#\" + ns + \"-problems\");\r\n            preErrors = document.querySelector(\"#\" + ns + \"-errors\");\r\n            preWarnings = document.querySelector(\"#\" + ns + \"-warnings\");\r\n            titleErrors = document.querySelector(\"#\" + ns + \"-title-errors\");\r\n            titleWarnings = document.querySelector(\"#\" + ns + \"-title-warnings\");\r\n            var close = document.querySelector(\"#\" + ns + \"-close\");\r\n            var min = document.querySelector(\"#\" + ns + \"-min\");\r\n            aside.addEventListener('click', function () {\r\n                aside.classList.remove(ns + \"-min\");\r\n            });\r\n            close.addEventListener('click', function () {\r\n                aside.classList.add(ns + \"-hidden\");\r\n            });\r\n            min.addEventListener('click', function (e) {\r\n                aside.classList.add(ns + \"-min\");\r\n                e.stopImmediatePropagation();\r\n            });\r\n        });\r\n    }\r\n    socketMessage(socket, function (action, data) {\r\n        if (!aside) {\r\n            return;\r\n        }\r\n        var compilers = window.webpackPluginServe.compilers;\r\n        switch (action) {\r\n            case 'build':\r\n                // clear errors and warnings when a new build begins\r\n                reset();\r\n                break;\r\n            case 'problems':\r\n                addErrors(data.errors);\r\n                addWarnings(data.warnings);\r\n                aside.classList.remove(hidden);\r\n                hasProblems = data.errors.length || data.warnings.length;\r\n                break;\r\n            case 'replace':\r\n                // if there's a compiler that isn't done yet, hold off and let it run the show\r\n                for (var _i = 0, _a = Object.keys(compilers); _i < _a.length; _i++) {\r\n                    var compilerName = _a[_i];\r\n                    if (!compilers[compilerName]) {\r\n                        return;\r\n                    }\r\n                }\r\n                if (hasProblems && !preErrors.children.length && !preWarnings.children.length) {\r\n                    reset();\r\n                    hasProblems = false;\r\n                    problems.classList.add(ns + \"-success\");\r\n                    aside.classList.remove(hidden);\r\n                    setTimeout(function () { return aside.classList.add(hidden); }, 3e3);\r\n                }\r\n                break;\r\n            default:\r\n        }\r\n    });\r\n};\r\nmodule.exports = { init: init };\r\n\n\n//# sourceURL=webpack://lesson-1/./node_modules/webpack-plugin-serve/lib/client/overlays/status.js?");

/***/ }),

/***/ "./node_modules/webpack-plugin-serve/lib/client/overlays/util.js":
/*!***********************************************************************!*\
  !*** ./node_modules/webpack-plugin-serve/lib/client/overlays/util.js ***!
  \***********************************************************************/
/***/ ((module) => {

eval("\r\n/*\r\n  Copyright © 2018 Andrew Powell\r\n\r\n  This Source Code Form is subject to the terms of the Mozilla Public\r\n  License, v. 2.0. If a copy of the MPL was not distributed with this\r\n  file, You can obtain one at http://mozilla.org/MPL/2.0/.\r\n\r\n  The above copyright notice and this permission notice shall be\r\n  included in all copies or substantial portions of this Source Code Form.\r\n*/\r\nvar addHtml = function (html, parent) {\r\n    var div = document.createElement('div');\r\n    var nodes = [];\r\n    div.innerHTML = html.trim();\r\n    while (div.firstChild) {\r\n        nodes.push((parent || document.body).appendChild(div.firstChild));\r\n    }\r\n    return nodes;\r\n};\r\nvar addCss = function (css) {\r\n    var style = document.createElement('style');\r\n    style.type = 'text/css';\r\n    if (css.styleSheet) {\r\n        style.styleSheet.cssText = css;\r\n    }\r\n    else {\r\n        style.appendChild(document.createTextNode(css));\r\n    }\r\n    // append the stylesheet for the svg\r\n    document.head.appendChild(style);\r\n};\r\nvar socketMessage = function (socket, handler) {\r\n    socket.addEventListener('message', function (message) {\r\n        var _a = JSON.parse(message.data), action = _a.action, _b = _a.data, data = _b === void 0 ? {} : _b;\r\n        handler(action, data);\r\n    });\r\n};\r\nmodule.exports = { addCss: addCss, addHtml: addHtml, socketMessage: socketMessage };\r\n\n\n//# sourceURL=webpack://lesson-1/./node_modules/webpack-plugin-serve/lib/client/overlays/util.js?");

/***/ }),

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar React = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\n//чтобы срабатывало только в браузере(т.к. подключим SSR)\r\nwindow.addEventListener('load', function () {\r\n    ReactDom.render(React.createElement(Header, null), document.getElementById('react-root'));\r\n});\r\n\n\n//# sourceURL=webpack://lesson-1/./src/index.jsx?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 		__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 		module = execOptions.module;
/******/ 		execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "536f80d-" + chunkId + "-wps-hmr.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => "536f80d-wps-hmr.json";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "7c799aa8fe64fcc29ef3"
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "lesson-1:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => fn(event));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: currentChildModule !== moduleId,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 					else hot._acceptedDependencies[dep] = callback || function () {};
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				registeredStatusHandlers[i].call(null, newStatus);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			setStatus("check");
/******/ 			return __webpack_require__.hmrM().then(function (update) {
/******/ 				if (!update) {
/******/ 					setStatus(applyInvalidatedModules() ? "ready" : "idle");
/******/ 					return null;
/******/ 				}
/******/ 		
/******/ 				setStatus("prepare");
/******/ 		
/******/ 				var updatedModules = [];
/******/ 				blockingPromises = [];
/******/ 				currentUpdateApplyHandlers = [];
/******/ 		
/******/ 				return Promise.all(
/******/ 					Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 						promises,
/******/ 						key
/******/ 					) {
/******/ 						__webpack_require__.hmrC[key](
/******/ 							update.c,
/******/ 							update.r,
/******/ 							update.m,
/******/ 							promises,
/******/ 							currentUpdateApplyHandlers,
/******/ 							updatedModules
/******/ 						);
/******/ 						return promises;
/******/ 					},
/******/ 					[])
/******/ 				).then(function () {
/******/ 					return waitForBlockingPromises(function () {
/******/ 						if (applyOnUpdate) {
/******/ 							return internalApply(applyOnUpdate);
/******/ 						} else {
/******/ 							setStatus("ready");
/******/ 		
/******/ 							return updatedModules;
/******/ 						}
/******/ 					});
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				setStatus("abort");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			// handle errors in accept handlers and self accepted module load
/******/ 			if (error) {
/******/ 				setStatus("fail");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw error;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			if (queuedInvalidatedModules) {
/******/ 				return internalApply(options).then(function (list) {
/******/ 					outdatedModules.forEach(function (moduleId) {
/******/ 						if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 					});
/******/ 					return list;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			setStatus("idle");
/******/ 			return Promise.resolve(outdatedModules);
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatelesson_1"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				if (
/******/ 					__webpack_require__.c[outdatedModuleId] &&
/******/ 					__webpack_require__.c[outdatedModuleId].hot._selfAccepted &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!__webpack_require__.c[outdatedModuleId].hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: __webpack_require__.c[outdatedModuleId].hot._requireSelf,
/******/ 						errorHandler: __webpack_require__.c[outdatedModuleId].hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (options.onErrored) {
/******/ 											options.onErrored({
/******/ 												type: "accept-errored",
/******/ 												moduleId: outdatedModuleId,
/******/ 												dependencyId: dependenciesForCallbacks[k],
/******/ 												error: err
/******/ 											});
/******/ 										}
/******/ 										if (!options.ignoreErrored) {
/******/ 											reportError(err);
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err);
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 									}
/******/ 									reportError(err);
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no deferred startup
/******/ 		
/******/ 		// no jsonp function
/******/ 		
/******/ 		// no deferred startup
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.jsx");
/******/ 	__webpack_require__("./node_modules/webpack-plugin-serve/client.js");
/******/ })()
;