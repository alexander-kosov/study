/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nfunction _extends() {\r\n    exports._extends = _extends = Object.assign || function (target) {\r\n        for (var i = 1; i < arguments.length; i++) {\r\n            var source = arguments[i];\r\n            for (var key in source) {\r\n                if (Object.prototype.hasOwnProperty.call(source, key)) {\r\n                    target[key] = source[key];\r\n                }\r\n            }\r\n        }\r\n        return target;\r\n    };\r\n    return _extends.apply(this, arguments);\r\n}\r\nexports.default = _extends;\r\n\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/extends.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nfunction _objectWithoutPropertiesLoose(source, excluded) {\r\n    if (source == null)\r\n        return {};\r\n    var target = {};\r\n    var sourceKeys = Object.keys(source);\r\n    var key, i;\r\n    for (i = 0; i < sourceKeys.length; i++) {\r\n        key = sourceKeys[i];\r\n        if (excluded.indexOf(key) >= 0)\r\n            continue;\r\n        target[key] = source[key];\r\n    }\r\n    return target;\r\n}\r\nexports.default = _objectWithoutPropertiesLoose;\r\n\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\n// css base code, injected by the css-loader\r\n// eslint-disable-next-line func-names\r\nmodule.exports = function (cssWithMappingToString) {\r\n    var list = []; // return the list of modules as css string\r\n    list.toString = function toString() {\r\n        return this.map(function (item) {\r\n            var content = cssWithMappingToString(item);\r\n            if (item[2]) {\r\n                return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\r\n            }\r\n            return content;\r\n        }).join('');\r\n    }; // import a list of modules into the list\r\n    // eslint-disable-next-line func-names\r\n    list.i = function (modules, mediaQuery, dedupe) {\r\n        if (typeof modules === 'string') {\r\n            // eslint-disable-next-line no-param-reassign\r\n            modules = [[null, modules, '']];\r\n        }\r\n        var alreadyImportedModules = {};\r\n        if (dedupe) {\r\n            for (var i = 0; i < this.length; i++) {\r\n                // eslint-disable-next-line prefer-destructuring\r\n                var id = this[i][0];\r\n                if (id != null) {\r\n                    alreadyImportedModules[id] = true;\r\n                }\r\n            }\r\n        }\r\n        for (var _i = 0; _i < modules.length; _i++) {\r\n            var item = [].concat(modules[_i]);\r\n            if (dedupe && alreadyImportedModules[item[0]]) {\r\n                // eslint-disable-next-line no-continue\r\n                continue;\r\n            }\r\n            if (mediaQuery) {\r\n                if (!item[2]) {\r\n                    item[2] = mediaQuery;\r\n                }\r\n                else {\r\n                    item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\r\n                }\r\n            }\r\n            list.push(item);\r\n        }\r\n    };\r\n    return list;\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/components/Context.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/components/Context.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ReactReduxContext = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nexports.ReactReduxContext = react_1.default.createContext(null);\r\nif (true) {\r\n    exports.ReactReduxContext.displayName = 'ReactRedux';\r\n}\r\nexports.default = exports.ReactReduxContext;\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/components/Context.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/components/Provider.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/components/Provider.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\r\nvar Context_1 = __webpack_require__(/*! ./Context */ \"./node_modules/react-redux/es/components/Context.js\");\r\nvar Subscription_1 = __importDefault(__webpack_require__(/*! ../utils/Subscription */ \"./node_modules/react-redux/es/utils/Subscription.js\"));\r\nfunction Provider(_ref) {\r\n    var store = _ref.store, context = _ref.context, children = _ref.children;\r\n    var contextValue = react_1.useMemo(function () {\r\n        var subscription = new Subscription_1.default(store);\r\n        subscription.onStateChange = subscription.notifyNestedSubs;\r\n        return {\r\n            store: store,\r\n            subscription: subscription\r\n        };\r\n    }, [store]);\r\n    var previousState = react_1.useMemo(function () {\r\n        return store.getState();\r\n    }, [store]);\r\n    react_1.useEffect(function () {\r\n        var subscription = contextValue.subscription;\r\n        subscription.trySubscribe();\r\n        if (previousState !== store.getState()) {\r\n            subscription.notifyNestedSubs();\r\n        }\r\n        return function () {\r\n            subscription.tryUnsubscribe();\r\n            subscription.onStateChange = null;\r\n        };\r\n    }, [contextValue, previousState]);\r\n    var Context = context || Context_1.ReactReduxContext;\r\n    return /*#__PURE__*/ react_1.default.createElement(Context.Provider, {\r\n        value: contextValue\r\n    }, children);\r\n}\r\nif (true) {\r\n    Provider.propTypes = {\r\n        store: prop_types_1.default.shape({\r\n            subscribe: prop_types_1.default.func.isRequired,\r\n            dispatch: prop_types_1.default.func.isRequired,\r\n            getState: prop_types_1.default.func.isRequired\r\n        }),\r\n        context: prop_types_1.default.object,\r\n        children: prop_types_1.default.any\r\n    };\r\n}\r\nexports.default = Provider;\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/components/Provider.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/components/connectAdvanced.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/components/connectAdvanced.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar extends_1 = __importDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\"));\r\nvar objectWithoutPropertiesLoose_1 = __importDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js\"));\r\nvar hoist_non_react_statics_1 = __importDefault(__webpack_require__(/*! hoist-non-react-statics */ \"hoist-non-react-statics\"));\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar react_is_1 = __webpack_require__(/*! react-is */ \"react-is\");\r\nvar Subscription_1 = __importDefault(__webpack_require__(/*! ../utils/Subscription */ \"./node_modules/react-redux/es/utils/Subscription.js\"));\r\nvar useIsomorphicLayoutEffect_1 = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ \"./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js\");\r\nvar Context_1 = __webpack_require__(/*! ./Context */ \"./node_modules/react-redux/es/components/Context.js\"); // Define some constant arrays just to avoid re-creating these\r\nvar EMPTY_ARRAY = [];\r\nvar NO_SUBSCRIPTION_ARRAY = [null, null];\r\nvar stringifyComponent = function stringifyComponent(Comp) {\r\n    try {\r\n        return JSON.stringify(Comp);\r\n    }\r\n    catch (err) {\r\n        return String(Comp);\r\n    }\r\n};\r\nfunction storeStateUpdatesReducer(state, action) {\r\n    var updateCount = state[1];\r\n    return [action.payload, updateCount + 1];\r\n}\r\nfunction useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {\r\n    useIsomorphicLayoutEffect_1.useIsomorphicLayoutEffect(function () {\r\n        return effectFunc.apply(void 0, effectArgs);\r\n    }, dependencies);\r\n}\r\nfunction captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs) {\r\n    // We want to capture the wrapper props and child props we used for later comparisons\r\n    lastWrapperProps.current = wrapperProps;\r\n    lastChildProps.current = actualChildProps;\r\n    renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update\r\n    if (childPropsFromStoreUpdate.current) {\r\n        childPropsFromStoreUpdate.current = null;\r\n        notifyNestedSubs();\r\n    }\r\n}\r\nfunction subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch) {\r\n    // If we're not subscribed to the store, nothing to do here\r\n    if (!shouldHandleStateChanges)\r\n        return; // Capture values for checking if and when this component unmounts\r\n    var didUnsubscribe = false;\r\n    var lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component\r\n    var checkForUpdates = function checkForUpdates() {\r\n        if (didUnsubscribe) {\r\n            // Don't run stale listeners.\r\n            // Redux doesn't guarantee unsubscriptions happen until next dispatch.\r\n            return;\r\n        }\r\n        var latestStoreState = store.getState();\r\n        var newChildProps, error;\r\n        try {\r\n            // Actually run the selector with the most recent store state and wrapper props\r\n            // to determine what the child props should be\r\n            newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);\r\n        }\r\n        catch (e) {\r\n            error = e;\r\n            lastThrownError = e;\r\n        }\r\n        if (!error) {\r\n            lastThrownError = null;\r\n        } // If the child props haven't changed, nothing to do here - cascade the subscription update\r\n        if (newChildProps === lastChildProps.current) {\r\n            if (!renderIsScheduled.current) {\r\n                notifyNestedSubs();\r\n            }\r\n        }\r\n        else {\r\n            // Save references to the new child props.  Note that we track the \"child props from store update\"\r\n            // as a ref instead of a useState/useReducer because we need a way to determine if that value has\r\n            // been processed.  If this went into useState/useReducer, we couldn't clear out the value without\r\n            // forcing another re-render, which we don't want.\r\n            lastChildProps.current = newChildProps;\r\n            childPropsFromStoreUpdate.current = newChildProps;\r\n            renderIsScheduled.current = true; // If the child props _did_ change (or we caught an error), this wrapper component needs to re-render\r\n            forceComponentUpdateDispatch({\r\n                type: 'STORE_UPDATED',\r\n                payload: {\r\n                    error: error\r\n                }\r\n            });\r\n        }\r\n    }; // Actually subscribe to the nearest connected ancestor (or store)\r\n    subscription.onStateChange = checkForUpdates;\r\n    subscription.trySubscribe(); // Pull data from the store after first render in case the store has\r\n    // changed since we began.\r\n    checkForUpdates();\r\n    var unsubscribeWrapper = function unsubscribeWrapper() {\r\n        didUnsubscribe = true;\r\n        subscription.tryUnsubscribe();\r\n        subscription.onStateChange = null;\r\n        if (lastThrownError) {\r\n            // It's possible that we caught an error due to a bad mapState function, but the\r\n            // parent re-rendered without this component and we're about to unmount.\r\n            // This shouldn't happen as long as we do top-down subscriptions correctly, but\r\n            // if we ever do those wrong, this throw will surface the error in our tests.\r\n            // In that case, throw the error from here so it doesn't get lost.\r\n            throw lastThrownError;\r\n        }\r\n    };\r\n    return unsubscribeWrapper;\r\n}\r\nvar initStateUpdates = function initStateUpdates() {\r\n    return [null, 0];\r\n};\r\nfunction connectAdvanced(\r\n/*\r\n  selectorFactory is a func that is responsible for returning the selector function used to\r\n  compute new props from state, props, and dispatch. For example:\r\n     export default connectAdvanced((dispatch, options) => (state, props) => ({\r\n      thing: state.things[props.thingId],\r\n      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),\r\n    }))(YourComponent)\r\n   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators\r\n  outside of their selector as an optimization. Options passed to connectAdvanced are passed to\r\n  the selectorFactory, along with displayName and WrappedComponent, as the second argument.\r\n   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound\r\n  props. Do not use connectAdvanced directly without memoizing results between calls to your\r\n  selector, otherwise the Connect component will re-render on every state or props change.\r\n*/\r\nselectorFactory, // options object:\r\n_ref) {\r\n    if (_ref === void 0) {\r\n        _ref = {};\r\n    }\r\n    var _ref2 = _ref, _ref2$getDisplayName = _ref2.getDisplayName, getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {\r\n        return \"ConnectAdvanced(\" + name + \")\";\r\n    } : _ref2$getDisplayName, _ref2$methodName = _ref2.methodName, methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName, _ref2$renderCountProp = _ref2.renderCountProp, renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp, _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges, shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta, _ref2$storeKey = _ref2.storeKey, storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey, _ref2$withRef = _ref2.withRef, withRef = _ref2$withRef === void 0 ? false : _ref2$withRef, _ref2$forwardRef = _ref2.forwardRef, forwardRef = _ref2$forwardRef === void 0 ? false : _ref2$forwardRef, _ref2$context = _ref2.context, context = _ref2$context === void 0 ? Context_1.ReactReduxContext : _ref2$context, connectOptions = objectWithoutPropertiesLoose_1.default(_ref2, [\"getDisplayName\", \"methodName\", \"renderCountProp\", \"shouldHandleStateChanges\", \"storeKey\", \"withRef\", \"forwardRef\", \"context\"]);\r\n    if (true) {\r\n        if (renderCountProp !== undefined) {\r\n            throw new Error(\"renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension\");\r\n        }\r\n        if (withRef) {\r\n            throw new Error('withRef is removed. To access the wrapped instance, use a ref on the connected component');\r\n        }\r\n        var customStoreWarningMessage = 'To use a custom Redux store for specific components, create a custom React context with ' + \"React.createContext(), and pass the context object to React Redux's Provider and specific components\" + ' like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. ' + 'You may also pass a {context : MyContext} option to connect';\r\n        if (storeKey !== 'store') {\r\n            throw new Error('storeKey has been removed and does not do anything. ' + customStoreWarningMessage);\r\n        }\r\n    }\r\n    var Context = context;\r\n    return function wrapWithConnect(WrappedComponent) {\r\n        if ( true && !react_is_1.isValidElementType(WrappedComponent)) {\r\n            throw new Error(\"You must pass a component to the function returned by \" + (methodName + \". Instead received \" + stringifyComponent(WrappedComponent)));\r\n        }\r\n        var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';\r\n        var displayName = getDisplayName(wrappedComponentName);\r\n        var selectorFactoryOptions = extends_1.default({}, connectOptions, {\r\n            getDisplayName: getDisplayName,\r\n            methodName: methodName,\r\n            renderCountProp: renderCountProp,\r\n            shouldHandleStateChanges: shouldHandleStateChanges,\r\n            storeKey: storeKey,\r\n            displayName: displayName,\r\n            wrappedComponentName: wrappedComponentName,\r\n            WrappedComponent: WrappedComponent\r\n        });\r\n        var pure = connectOptions.pure;\r\n        function createChildSelector(store) {\r\n            return selectorFactory(store.dispatch, selectorFactoryOptions);\r\n        } // If we aren't running in \"pure\" mode, we don't want to memoize values.\r\n        // To avoid conditionally calling hooks, we fall back to a tiny wrapper\r\n        // that just executes the given callback immediately.\r\n        var usePureOnlyMemo = pure ? react_1.useMemo : function (callback) {\r\n            return callback();\r\n        };\r\n        function ConnectFunction(props) {\r\n            var _useMemo = react_1.useMemo(function () {\r\n                // Distinguish between actual \"data\" props that were passed to the wrapper component,\r\n                // and values needed to control behavior (forwarded refs, alternate context instances).\r\n                // To maintain the wrapperProps object reference, memoize this destructuring.\r\n                var reactReduxForwardedRef = props.reactReduxForwardedRef, wrapperProps = objectWithoutPropertiesLoose_1.default(props, [\"reactReduxForwardedRef\"]);\r\n                return [props.context, reactReduxForwardedRef, wrapperProps];\r\n            }, [props]), propsContext = _useMemo[0], reactReduxForwardedRef = _useMemo[1], wrapperProps = _useMemo[2];\r\n            var ContextToUse = react_1.useMemo(function () {\r\n                // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.\r\n                // Memoize the check that determines which context instance we should use.\r\n                return propsContext && propsContext.Consumer && react_is_1.isContextConsumer(/*#__PURE__*/ react_1.default.createElement(propsContext.Consumer, null)) ? propsContext : Context;\r\n            }, [propsContext, Context]); // Retrieve the store and ancestor subscription via context, if available\r\n            var contextValue = react_1.useContext(ContextToUse); // The store _must_ exist as either a prop or in context.\r\n            // We'll check to see if it _looks_ like a Redux store first.\r\n            // This allows us to pass through a `store` prop that is just a plain value.\r\n            var didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);\r\n            var didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);\r\n            if ( true && !didStoreComeFromProps && !didStoreComeFromContext) {\r\n                throw new Error(\"Could not find \\\"store\\\" in the context of \" + (\"\\\"\" + displayName + \"\\\". Either wrap the root component in a <Provider>, \") + \"or pass a custom React context provider to <Provider> and the corresponding \" + (\"React context consumer to \" + displayName + \" in connect options.\"));\r\n            } // Based on the previous check, one of these must be true\r\n            var store = didStoreComeFromProps ? props.store : contextValue.store;\r\n            var childPropsSelector = react_1.useMemo(function () {\r\n                // The child props selector needs the store reference as an input.\r\n                // Re-create this selector whenever the store changes.\r\n                return createChildSelector(store);\r\n            }, [store]);\r\n            var _useMemo2 = react_1.useMemo(function () {\r\n                if (!shouldHandleStateChanges)\r\n                    return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component\r\n                // connected to the store via props shouldn't use subscription from context, or vice versa.\r\n                var subscription = new Subscription_1.default(store, didStoreComeFromProps ? null : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in\r\n                // the middle of the notification loop, where `subscription` will then be null. This can\r\n                // probably be avoided if Subscription's listeners logic is changed to not call listeners\r\n                // that have been unsubscribed in the  middle of the notification loop.\r\n                var notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);\r\n                return [subscription, notifyNestedSubs];\r\n            }, [store, didStoreComeFromProps, contextValue]), subscription = _useMemo2[0], notifyNestedSubs = _useMemo2[1]; // Determine what {store, subscription} value should be put into nested context, if necessary,\r\n            // and memoize that value to avoid unnecessary context updates.\r\n            var overriddenContextValue = react_1.useMemo(function () {\r\n                if (didStoreComeFromProps) {\r\n                    // This component is directly subscribed to a store from props.\r\n                    // We don't want descendants reading from this store - pass down whatever\r\n                    // the existing context value is from the nearest connected ancestor.\r\n                    return contextValue;\r\n                } // Otherwise, put this component's subscription instance into context, so that\r\n                // connected descendants won't update until after this component is done\r\n                return extends_1.default({}, contextValue, {\r\n                    subscription: subscription\r\n                });\r\n            }, [didStoreComeFromProps, contextValue, subscription]); // We need to force this wrapper component to re-render whenever a Redux store update\r\n            // causes a change to the calculated child component props (or we caught an error in mapState)\r\n            var _useReducer = react_1.useReducer(storeStateUpdatesReducer, EMPTY_ARRAY, initStateUpdates), _useReducer$ = _useReducer[0], previousStateUpdateResult = _useReducer$[0], forceComponentUpdateDispatch = _useReducer[1]; // Propagate any mapState/mapDispatch errors upwards\r\n            if (previousStateUpdateResult && previousStateUpdateResult.error) {\r\n                throw previousStateUpdateResult.error;\r\n            } // Set up refs to coordinate values between the subscription effect and the render logic\r\n            var lastChildProps = react_1.useRef();\r\n            var lastWrapperProps = react_1.useRef(wrapperProps);\r\n            var childPropsFromStoreUpdate = react_1.useRef();\r\n            var renderIsScheduled = react_1.useRef(false);\r\n            var actualChildProps = usePureOnlyMemo(function () {\r\n                // Tricky logic here:\r\n                // - This render may have been triggered by a Redux store update that produced new child props\r\n                // - However, we may have gotten new wrapper props after that\r\n                // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.\r\n                // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.\r\n                // So, we'll use the child props from store update only if the wrapper props are the same as last time.\r\n                if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {\r\n                    return childPropsFromStoreUpdate.current;\r\n                } // TODO We're reading the store directly in render() here. Bad idea?\r\n                // This will likely cause Bad Things (TM) to happen in Concurrent Mode.\r\n                // Note that we do this because on renders _not_ caused by store updates, we need the latest store state\r\n                // to determine what the child props should be.\r\n                return childPropsSelector(store.getState(), wrapperProps);\r\n            }, [store, previousStateUpdateResult, wrapperProps]); // We need this to execute synchronously every time we re-render. However, React warns\r\n            // about useLayoutEffect in SSR, so we try to detect environment and fall back to\r\n            // just useEffect instead to avoid the warning, since neither will run anyway.\r\n            useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, actualChildProps, childPropsFromStoreUpdate, notifyNestedSubs]); // Our re-subscribe logic only runs when the store/subscription setup changes\r\n            useIsomorphicLayoutEffectWithArgs(subscribeUpdates, [shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, childPropsFromStoreUpdate, notifyNestedSubs, forceComponentUpdateDispatch], [store, subscription, childPropsSelector]); // Now that all that's done, we can finally try to actually render the child component.\r\n            // We memoize the elements for the rendered child component as an optimization.\r\n            var renderedWrappedComponent = react_1.useMemo(function () {\r\n                return /*#__PURE__*/ react_1.default.createElement(WrappedComponent, extends_1.default({}, actualChildProps, {\r\n                    ref: reactReduxForwardedRef\r\n                }));\r\n            }, [reactReduxForwardedRef, WrappedComponent, actualChildProps]); // If React sees the exact same element reference as last time, it bails out of re-rendering\r\n            // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.\r\n            var renderedChild = react_1.useMemo(function () {\r\n                if (shouldHandleStateChanges) {\r\n                    // If this component is subscribed to store updates, we need to pass its own\r\n                    // subscription instance down to our descendants. That means rendering the same\r\n                    // Context instance, and putting a different value into the context.\r\n                    return /*#__PURE__*/ react_1.default.createElement(ContextToUse.Provider, {\r\n                        value: overriddenContextValue\r\n                    }, renderedWrappedComponent);\r\n                }\r\n                return renderedWrappedComponent;\r\n            }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);\r\n            return renderedChild;\r\n        } // If we're in \"pure\" mode, ensure our wrapper component only re-renders when incoming props have changed.\r\n        var Connect = pure ? react_1.default.memo(ConnectFunction) : ConnectFunction;\r\n        Connect.WrappedComponent = WrappedComponent;\r\n        Connect.displayName = displayName;\r\n        if (forwardRef) {\r\n            var forwarded = react_1.default.forwardRef(function forwardConnectRef(props, ref) {\r\n                return /*#__PURE__*/ react_1.default.createElement(Connect, extends_1.default({}, props, {\r\n                    reactReduxForwardedRef: ref\r\n                }));\r\n            });\r\n            forwarded.displayName = displayName;\r\n            forwarded.WrappedComponent = WrappedComponent;\r\n            return hoist_non_react_statics_1.default(forwarded, WrappedComponent);\r\n        }\r\n        return hoist_non_react_statics_1.default(Connect, WrappedComponent);\r\n    };\r\n}\r\nexports.default = connectAdvanced;\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/components/connectAdvanced.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/connect/connect.js":
/*!********************************************************!*\
  !*** ./node_modules/react-redux/es/connect/connect.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.createConnect = void 0;\r\nvar extends_1 = __importDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\"));\r\nvar objectWithoutPropertiesLoose_1 = __importDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js\"));\r\nvar connectAdvanced_1 = __importDefault(__webpack_require__(/*! ../components/connectAdvanced */ \"./node_modules/react-redux/es/components/connectAdvanced.js\"));\r\nvar shallowEqual_1 = __importDefault(__webpack_require__(/*! ../utils/shallowEqual */ \"./node_modules/react-redux/es/utils/shallowEqual.js\"));\r\nvar mapDispatchToProps_1 = __importDefault(__webpack_require__(/*! ./mapDispatchToProps */ \"./node_modules/react-redux/es/connect/mapDispatchToProps.js\"));\r\nvar mapStateToProps_1 = __importDefault(__webpack_require__(/*! ./mapStateToProps */ \"./node_modules/react-redux/es/connect/mapStateToProps.js\"));\r\nvar mergeProps_1 = __importDefault(__webpack_require__(/*! ./mergeProps */ \"./node_modules/react-redux/es/connect/mergeProps.js\"));\r\nvar selectorFactory_1 = __importDefault(__webpack_require__(/*! ./selectorFactory */ \"./node_modules/react-redux/es/connect/selectorFactory.js\"));\r\n/*\r\n  connect is a facade over connectAdvanced. It turns its args into a compatible\r\n  selectorFactory, which has the signature:\r\n\r\n    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps\r\n  \r\n  connect passes its args to connectAdvanced as options, which will in turn pass them to\r\n  selectorFactory each time a Connect component instance is instantiated or hot reloaded.\r\n\r\n  selectorFactory returns a final props selector from its mapStateToProps,\r\n  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,\r\n  mergePropsFactories, and pure args.\r\n\r\n  The resulting final props selector is called by the Connect component instance whenever\r\n  it receives new props or store state.\r\n */\r\nfunction match(arg, factories, name) {\r\n    for (var i = factories.length - 1; i >= 0; i--) {\r\n        var result = factories[i](arg);\r\n        if (result)\r\n            return result;\r\n    }\r\n    return function (dispatch, options) {\r\n        throw new Error(\"Invalid value of type \" + typeof arg + \" for \" + name + \" argument when connecting component \" + options.wrappedComponentName + \".\");\r\n    };\r\n}\r\nfunction strictEqual(a, b) {\r\n    return a === b;\r\n} // createConnect with default args builds the 'official' connect behavior. Calling it with\r\n// different options opens up some testing and extensibility scenarios\r\nfunction createConnect(_temp) {\r\n    var _ref = _temp === void 0 ? {} : _temp, _ref$connectHOC = _ref.connectHOC, connectHOC = _ref$connectHOC === void 0 ? connectAdvanced_1.default : _ref$connectHOC, _ref$mapStateToPropsF = _ref.mapStateToPropsFactories, mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? mapStateToProps_1.default : _ref$mapStateToPropsF, _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories, mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? mapDispatchToProps_1.default : _ref$mapDispatchToPro, _ref$mergePropsFactor = _ref.mergePropsFactories, mergePropsFactories = _ref$mergePropsFactor === void 0 ? mergeProps_1.default : _ref$mergePropsFactor, _ref$selectorFactory = _ref.selectorFactory, selectorFactory = _ref$selectorFactory === void 0 ? selectorFactory_1.default : _ref$selectorFactory;\r\n    return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {\r\n        if (_ref2 === void 0) {\r\n            _ref2 = {};\r\n        }\r\n        var _ref3 = _ref2, _ref3$pure = _ref3.pure, pure = _ref3$pure === void 0 ? true : _ref3$pure, _ref3$areStatesEqual = _ref3.areStatesEqual, areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual, _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual, areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? shallowEqual_1.default : _ref3$areOwnPropsEqua, _ref3$areStatePropsEq = _ref3.areStatePropsEqual, areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? shallowEqual_1.default : _ref3$areStatePropsEq, _ref3$areMergedPropsE = _ref3.areMergedPropsEqual, areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? shallowEqual_1.default : _ref3$areMergedPropsE, extraOptions = objectWithoutPropertiesLoose_1.default(_ref3, [\"pure\", \"areStatesEqual\", \"areOwnPropsEqual\", \"areStatePropsEqual\", \"areMergedPropsEqual\"]);\r\n        var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');\r\n        var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');\r\n        var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');\r\n        return connectHOC(selectorFactory, extends_1.default({\r\n            // used in error messages\r\n            methodName: 'connect',\r\n            // used to compute Connect's displayName from the wrapped component's displayName.\r\n            getDisplayName: function getDisplayName(name) {\r\n                return \"Connect(\" + name + \")\";\r\n            },\r\n            // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes\r\n            shouldHandleStateChanges: Boolean(mapStateToProps),\r\n            // passed through to selectorFactory\r\n            initMapStateToProps: initMapStateToProps,\r\n            initMapDispatchToProps: initMapDispatchToProps,\r\n            initMergeProps: initMergeProps,\r\n            pure: pure,\r\n            areStatesEqual: areStatesEqual,\r\n            areOwnPropsEqual: areOwnPropsEqual,\r\n            areStatePropsEqual: areStatePropsEqual,\r\n            areMergedPropsEqual: areMergedPropsEqual\r\n        }, extraOptions));\r\n    };\r\n}\r\nexports.createConnect = createConnect;\r\nexports.default = createConnect();\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/connect/connect.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapDispatchToProps.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapDispatchToProps.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.whenMapDispatchToPropsIsObject = exports.whenMapDispatchToPropsIsMissing = exports.whenMapDispatchToPropsIsFunction = void 0;\r\nvar redux_1 = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\r\nvar wrapMapToProps_1 = __webpack_require__(/*! ./wrapMapToProps */ \"./node_modules/react-redux/es/connect/wrapMapToProps.js\");\r\nfunction whenMapDispatchToPropsIsFunction(mapDispatchToProps) {\r\n    return typeof mapDispatchToProps === 'function' ? wrapMapToProps_1.wrapMapToPropsFunc(mapDispatchToProps, 'mapDispatchToProps') : undefined;\r\n}\r\nexports.whenMapDispatchToPropsIsFunction = whenMapDispatchToPropsIsFunction;\r\nfunction whenMapDispatchToPropsIsMissing(mapDispatchToProps) {\r\n    return !mapDispatchToProps ? wrapMapToProps_1.wrapMapToPropsConstant(function (dispatch) {\r\n        return {\r\n            dispatch: dispatch\r\n        };\r\n    }) : undefined;\r\n}\r\nexports.whenMapDispatchToPropsIsMissing = whenMapDispatchToPropsIsMissing;\r\nfunction whenMapDispatchToPropsIsObject(mapDispatchToProps) {\r\n    return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? wrapMapToProps_1.wrapMapToPropsConstant(function (dispatch) {\r\n        return redux_1.bindActionCreators(mapDispatchToProps, dispatch);\r\n    }) : undefined;\r\n}\r\nexports.whenMapDispatchToPropsIsObject = whenMapDispatchToPropsIsObject;\r\nexports.default = [whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject];\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/connect/mapDispatchToProps.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mapStateToProps.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapStateToProps.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.whenMapStateToPropsIsMissing = exports.whenMapStateToPropsIsFunction = void 0;\r\nvar wrapMapToProps_1 = __webpack_require__(/*! ./wrapMapToProps */ \"./node_modules/react-redux/es/connect/wrapMapToProps.js\");\r\nfunction whenMapStateToPropsIsFunction(mapStateToProps) {\r\n    return typeof mapStateToProps === 'function' ? wrapMapToProps_1.wrapMapToPropsFunc(mapStateToProps, 'mapStateToProps') : undefined;\r\n}\r\nexports.whenMapStateToPropsIsFunction = whenMapStateToPropsIsFunction;\r\nfunction whenMapStateToPropsIsMissing(mapStateToProps) {\r\n    return !mapStateToProps ? wrapMapToProps_1.wrapMapToPropsConstant(function () {\r\n        return {};\r\n    }) : undefined;\r\n}\r\nexports.whenMapStateToPropsIsMissing = whenMapStateToPropsIsMissing;\r\nexports.default = [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing];\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/connect/mapStateToProps.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/connect/mergeProps.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mergeProps.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.whenMergePropsIsOmitted = exports.whenMergePropsIsFunction = exports.wrapMergePropsFunc = exports.defaultMergeProps = void 0;\r\nvar extends_1 = __importDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\"));\r\nvar verifyPlainObject_1 = __importDefault(__webpack_require__(/*! ../utils/verifyPlainObject */ \"./node_modules/react-redux/es/utils/verifyPlainObject.js\"));\r\nfunction defaultMergeProps(stateProps, dispatchProps, ownProps) {\r\n    return extends_1.default({}, ownProps, stateProps, dispatchProps);\r\n}\r\nexports.defaultMergeProps = defaultMergeProps;\r\nfunction wrapMergePropsFunc(mergeProps) {\r\n    return function initMergePropsProxy(dispatch, _ref) {\r\n        var displayName = _ref.displayName, pure = _ref.pure, areMergedPropsEqual = _ref.areMergedPropsEqual;\r\n        var hasRunOnce = false;\r\n        var mergedProps;\r\n        return function mergePropsProxy(stateProps, dispatchProps, ownProps) {\r\n            var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);\r\n            if (hasRunOnce) {\r\n                if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps))\r\n                    mergedProps = nextMergedProps;\r\n            }\r\n            else {\r\n                hasRunOnce = true;\r\n                mergedProps = nextMergedProps;\r\n                if (true)\r\n                    verifyPlainObject_1.default(mergedProps, displayName, 'mergeProps');\r\n            }\r\n            return mergedProps;\r\n        };\r\n    };\r\n}\r\nexports.wrapMergePropsFunc = wrapMergePropsFunc;\r\nfunction whenMergePropsIsFunction(mergeProps) {\r\n    return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;\r\n}\r\nexports.whenMergePropsIsFunction = whenMergePropsIsFunction;\r\nfunction whenMergePropsIsOmitted(mergeProps) {\r\n    return !mergeProps ? function () {\r\n        return defaultMergeProps;\r\n    } : undefined;\r\n}\r\nexports.whenMergePropsIsOmitted = whenMergePropsIsOmitted;\r\nexports.default = [whenMergePropsIsFunction, whenMergePropsIsOmitted];\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/connect/mergeProps.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/connect/selectorFactory.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/selectorFactory.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.pureFinalPropsSelectorFactory = exports.impureFinalPropsSelectorFactory = void 0;\r\nvar objectWithoutPropertiesLoose_1 = __importDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js\"));\r\nvar verifySubselectors_1 = __importDefault(__webpack_require__(/*! ./verifySubselectors */ \"./node_modules/react-redux/es/connect/verifySubselectors.js\"));\r\nfunction impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {\r\n    return function impureFinalPropsSelector(state, ownProps) {\r\n        return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);\r\n    };\r\n}\r\nexports.impureFinalPropsSelectorFactory = impureFinalPropsSelectorFactory;\r\nfunction pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {\r\n    var areStatesEqual = _ref.areStatesEqual, areOwnPropsEqual = _ref.areOwnPropsEqual, areStatePropsEqual = _ref.areStatePropsEqual;\r\n    var hasRunAtLeastOnce = false;\r\n    var state;\r\n    var ownProps;\r\n    var stateProps;\r\n    var dispatchProps;\r\n    var mergedProps;\r\n    function handleFirstCall(firstState, firstOwnProps) {\r\n        state = firstState;\r\n        ownProps = firstOwnProps;\r\n        stateProps = mapStateToProps(state, ownProps);\r\n        dispatchProps = mapDispatchToProps(dispatch, ownProps);\r\n        mergedProps = mergeProps(stateProps, dispatchProps, ownProps);\r\n        hasRunAtLeastOnce = true;\r\n        return mergedProps;\r\n    }\r\n    function handleNewPropsAndNewState() {\r\n        stateProps = mapStateToProps(state, ownProps);\r\n        if (mapDispatchToProps.dependsOnOwnProps)\r\n            dispatchProps = mapDispatchToProps(dispatch, ownProps);\r\n        mergedProps = mergeProps(stateProps, dispatchProps, ownProps);\r\n        return mergedProps;\r\n    }\r\n    function handleNewProps() {\r\n        if (mapStateToProps.dependsOnOwnProps)\r\n            stateProps = mapStateToProps(state, ownProps);\r\n        if (mapDispatchToProps.dependsOnOwnProps)\r\n            dispatchProps = mapDispatchToProps(dispatch, ownProps);\r\n        mergedProps = mergeProps(stateProps, dispatchProps, ownProps);\r\n        return mergedProps;\r\n    }\r\n    function handleNewState() {\r\n        var nextStateProps = mapStateToProps(state, ownProps);\r\n        var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);\r\n        stateProps = nextStateProps;\r\n        if (statePropsChanged)\r\n            mergedProps = mergeProps(stateProps, dispatchProps, ownProps);\r\n        return mergedProps;\r\n    }\r\n    function handleSubsequentCalls(nextState, nextOwnProps) {\r\n        var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);\r\n        var stateChanged = !areStatesEqual(nextState, state);\r\n        state = nextState;\r\n        ownProps = nextOwnProps;\r\n        if (propsChanged && stateChanged)\r\n            return handleNewPropsAndNewState();\r\n        if (propsChanged)\r\n            return handleNewProps();\r\n        if (stateChanged)\r\n            return handleNewState();\r\n        return mergedProps;\r\n    }\r\n    return function pureFinalPropsSelector(nextState, nextOwnProps) {\r\n        return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);\r\n    };\r\n} // TODO: Add more comments\r\nexports.pureFinalPropsSelectorFactory = pureFinalPropsSelectorFactory;\r\n// If pure is true, the selector returned by selectorFactory will memoize its results,\r\n// allowing connectAdvanced's shouldComponentUpdate to return false if final\r\n// props have not changed. If false, the selector will always return a new\r\n// object and shouldComponentUpdate will always return true.\r\nfunction finalPropsSelectorFactory(dispatch, _ref2) {\r\n    var initMapStateToProps = _ref2.initMapStateToProps, initMapDispatchToProps = _ref2.initMapDispatchToProps, initMergeProps = _ref2.initMergeProps, options = objectWithoutPropertiesLoose_1.default(_ref2, [\"initMapStateToProps\", \"initMapDispatchToProps\", \"initMergeProps\"]);\r\n    var mapStateToProps = initMapStateToProps(dispatch, options);\r\n    var mapDispatchToProps = initMapDispatchToProps(dispatch, options);\r\n    var mergeProps = initMergeProps(dispatch, options);\r\n    if (true) {\r\n        verifySubselectors_1.default(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);\r\n    }\r\n    var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;\r\n    return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);\r\n}\r\nexports.default = finalPropsSelectorFactory;\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/connect/selectorFactory.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/connect/verifySubselectors.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/verifySubselectors.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar warning_1 = __importDefault(__webpack_require__(/*! ../utils/warning */ \"./node_modules/react-redux/es/utils/warning.js\"));\r\nfunction verify(selector, methodName, displayName) {\r\n    if (!selector) {\r\n        throw new Error(\"Unexpected value for \" + methodName + \" in \" + displayName + \".\");\r\n    }\r\n    else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {\r\n        if (!Object.prototype.hasOwnProperty.call(selector, 'dependsOnOwnProps')) {\r\n            warning_1.default(\"The selector for \" + methodName + \" of \" + displayName + \" did not specify a value for dependsOnOwnProps.\");\r\n        }\r\n    }\r\n}\r\nfunction verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {\r\n    verify(mapStateToProps, 'mapStateToProps', displayName);\r\n    verify(mapDispatchToProps, 'mapDispatchToProps', displayName);\r\n    verify(mergeProps, 'mergeProps', displayName);\r\n}\r\nexports.default = verifySubselectors;\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/connect/verifySubselectors.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/connect/wrapMapToProps.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/wrapMapToProps.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.wrapMapToPropsFunc = exports.getDependsOnOwnProps = exports.wrapMapToPropsConstant = void 0;\r\nvar verifyPlainObject_1 = __importDefault(__webpack_require__(/*! ../utils/verifyPlainObject */ \"./node_modules/react-redux/es/utils/verifyPlainObject.js\"));\r\nfunction wrapMapToPropsConstant(getConstant) {\r\n    return function initConstantSelector(dispatch, options) {\r\n        var constant = getConstant(dispatch, options);\r\n        function constantSelector() {\r\n            return constant;\r\n        }\r\n        constantSelector.dependsOnOwnProps = false;\r\n        return constantSelector;\r\n    };\r\n} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args\r\nexports.wrapMapToPropsConstant = wrapMapToPropsConstant;\r\n// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine\r\n// whether mapToProps needs to be invoked when props have changed.\r\n//\r\n// A length of one signals that mapToProps does not depend on props from the parent component.\r\n// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and\r\n// therefore not reporting its length accurately..\r\nfunction getDependsOnOwnProps(mapToProps) {\r\n    return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;\r\n} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,\r\nexports.getDependsOnOwnProps = getDependsOnOwnProps;\r\n// this function wraps mapToProps in a proxy function which does several things:\r\n//\r\n//  * Detects whether the mapToProps function being called depends on props, which\r\n//    is used by selectorFactory to decide if it should reinvoke on props changes.\r\n//\r\n//  * On first call, handles mapToProps if returns another function, and treats that\r\n//    new function as the true mapToProps for subsequent calls.\r\n//\r\n//  * On first call, verifies the first result is a plain object, in order to warn\r\n//    the developer that their mapToProps function is not returning a valid result.\r\n//\r\nfunction wrapMapToPropsFunc(mapToProps, methodName) {\r\n    return function initProxySelector(dispatch, _ref) {\r\n        var displayName = _ref.displayName;\r\n        var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {\r\n            return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);\r\n        }; // allow detectFactoryAndVerify to get ownProps\r\n        proxy.dependsOnOwnProps = true;\r\n        proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {\r\n            proxy.mapToProps = mapToProps;\r\n            proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);\r\n            var props = proxy(stateOrDispatch, ownProps);\r\n            if (typeof props === 'function') {\r\n                proxy.mapToProps = props;\r\n                proxy.dependsOnOwnProps = getDependsOnOwnProps(props);\r\n                props = proxy(stateOrDispatch, ownProps);\r\n            }\r\n            if (true)\r\n                verifyPlainObject_1.default(props, displayName, methodName);\r\n            return props;\r\n        };\r\n        return proxy;\r\n    };\r\n}\r\nexports.wrapMapToPropsFunc = wrapMapToPropsFunc;\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/connect/wrapMapToProps.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useDispatch.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useDispatch.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useDispatch = exports.createDispatchHook = void 0;\r\nvar Context_1 = __webpack_require__(/*! ../components/Context */ \"./node_modules/react-redux/es/components/Context.js\");\r\nvar useStore_1 = __webpack_require__(/*! ./useStore */ \"./node_modules/react-redux/es/hooks/useStore.js\");\r\n/**\r\n * Hook factory, which creates a `useDispatch` hook bound to a given context.\r\n *\r\n * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.\r\n * @returns {Function} A `useDispatch` hook bound to the specified context.\r\n */\r\nfunction createDispatchHook(context) {\r\n    if (context === void 0) {\r\n        context = Context_1.ReactReduxContext;\r\n    }\r\n    var useStore = context === Context_1.ReactReduxContext ? useStore_1.useStore : useStore_1.createStoreHook(context);\r\n    return function useDispatch() {\r\n        var store = useStore();\r\n        return store.dispatch;\r\n    };\r\n}\r\nexports.createDispatchHook = createDispatchHook;\r\n/**\r\n * A hook to access the redux `dispatch` function.\r\n *\r\n * @returns {any|function} redux store's `dispatch` function\r\n *\r\n * @example\r\n *\r\n * import React, { useCallback } from 'react'\r\n * import { useDispatch } from 'react-redux'\r\n *\r\n * export const CounterComponent = ({ value }) => {\r\n *   const dispatch = useDispatch()\r\n *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])\r\n *   return (\r\n *     <div>\r\n *       <span>{value}</span>\r\n *       <button onClick={increaseCounter}>Increase counter</button>\r\n *     </div>\r\n *   )\r\n * }\r\n */\r\nexports.useDispatch = createDispatchHook();\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/hooks/useDispatch.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useReduxContext.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useReduxContext.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useReduxContext = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar Context_1 = __webpack_require__(/*! ../components/Context */ \"./node_modules/react-redux/es/components/Context.js\");\r\n/**\r\n * A hook to access the value of the `ReactReduxContext`. This is a low-level\r\n * hook that you should usually not need to call directly.\r\n *\r\n * @returns {any} the value of the `ReactReduxContext`\r\n *\r\n * @example\r\n *\r\n * import React from 'react'\r\n * import { useReduxContext } from 'react-redux'\r\n *\r\n * export const CounterComponent = ({ value }) => {\r\n *   const { store } = useReduxContext()\r\n *   return <div>{store.getState()}</div>\r\n * }\r\n */\r\nfunction useReduxContext() {\r\n    var contextValue = react_1.useContext(Context_1.ReactReduxContext);\r\n    if ( true && !contextValue) {\r\n        throw new Error('could not find react-redux context value; please ensure the component is wrapped in a <Provider>');\r\n    }\r\n    return contextValue;\r\n}\r\nexports.useReduxContext = useReduxContext;\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/hooks/useReduxContext.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useSelector.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useSelector.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useSelector = exports.createSelectorHook = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar useReduxContext_1 = __webpack_require__(/*! ./useReduxContext */ \"./node_modules/react-redux/es/hooks/useReduxContext.js\");\r\nvar Subscription_1 = __importDefault(__webpack_require__(/*! ../utils/Subscription */ \"./node_modules/react-redux/es/utils/Subscription.js\"));\r\nvar useIsomorphicLayoutEffect_1 = __webpack_require__(/*! ../utils/useIsomorphicLayoutEffect */ \"./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js\");\r\nvar Context_1 = __webpack_require__(/*! ../components/Context */ \"./node_modules/react-redux/es/components/Context.js\");\r\nvar refEquality = function refEquality(a, b) {\r\n    return a === b;\r\n};\r\nfunction useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub) {\r\n    var _useReducer = react_1.useReducer(function (s) {\r\n        return s + 1;\r\n    }, 0), forceRender = _useReducer[1];\r\n    var subscription = react_1.useMemo(function () {\r\n        return new Subscription_1.default(store, contextSub);\r\n    }, [store, contextSub]);\r\n    var latestSubscriptionCallbackError = react_1.useRef();\r\n    var latestSelector = react_1.useRef();\r\n    var latestStoreState = react_1.useRef();\r\n    var latestSelectedState = react_1.useRef();\r\n    var storeState = store.getState();\r\n    var selectedState;\r\n    try {\r\n        if (selector !== latestSelector.current || storeState !== latestStoreState.current || latestSubscriptionCallbackError.current) {\r\n            selectedState = selector(storeState);\r\n        }\r\n        else {\r\n            selectedState = latestSelectedState.current;\r\n        }\r\n    }\r\n    catch (err) {\r\n        if (latestSubscriptionCallbackError.current) {\r\n            err.message += \"\\nThe error may be correlated with this previous error:\\n\" + latestSubscriptionCallbackError.current.stack + \"\\n\\n\";\r\n        }\r\n        throw err;\r\n    }\r\n    useIsomorphicLayoutEffect_1.useIsomorphicLayoutEffect(function () {\r\n        latestSelector.current = selector;\r\n        latestStoreState.current = storeState;\r\n        latestSelectedState.current = selectedState;\r\n        latestSubscriptionCallbackError.current = undefined;\r\n    });\r\n    useIsomorphicLayoutEffect_1.useIsomorphicLayoutEffect(function () {\r\n        function checkForUpdates() {\r\n            try {\r\n                var newSelectedState = latestSelector.current(store.getState());\r\n                if (equalityFn(newSelectedState, latestSelectedState.current)) {\r\n                    return;\r\n                }\r\n                latestSelectedState.current = newSelectedState;\r\n            }\r\n            catch (err) {\r\n                // we ignore all errors here, since when the component\r\n                // is re-rendered, the selectors are called again, and\r\n                // will throw again, if neither props nor store state\r\n                // changed\r\n                latestSubscriptionCallbackError.current = err;\r\n            }\r\n            forceRender();\r\n        }\r\n        subscription.onStateChange = checkForUpdates;\r\n        subscription.trySubscribe();\r\n        checkForUpdates();\r\n        return function () {\r\n            return subscription.tryUnsubscribe();\r\n        };\r\n    }, [store, subscription]);\r\n    return selectedState;\r\n}\r\n/**\r\n * Hook factory, which creates a `useSelector` hook bound to a given context.\r\n *\r\n * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.\r\n * @returns {Function} A `useSelector` hook bound to the specified context.\r\n */\r\nfunction createSelectorHook(context) {\r\n    if (context === void 0) {\r\n        context = Context_1.ReactReduxContext;\r\n    }\r\n    var useReduxContext = context === Context_1.ReactReduxContext ? useReduxContext_1.useReduxContext : function () {\r\n        return react_1.useContext(context);\r\n    };\r\n    return function useSelector(selector, equalityFn) {\r\n        if (equalityFn === void 0) {\r\n            equalityFn = refEquality;\r\n        }\r\n        if ( true && !selector) {\r\n            throw new Error(\"You must pass a selector to useSelector\");\r\n        }\r\n        var _useReduxContext = useReduxContext(), store = _useReduxContext.store, contextSub = _useReduxContext.subscription;\r\n        var selectedState = useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub);\r\n        react_1.useDebugValue(selectedState);\r\n        return selectedState;\r\n    };\r\n}\r\nexports.createSelectorHook = createSelectorHook;\r\n/**\r\n * A hook to access the redux store's state. This hook takes a selector function\r\n * as an argument. The selector is called with the store state.\r\n *\r\n * This hook takes an optional equality comparison function as the second parameter\r\n * that allows you to customize the way the selected state is compared to determine\r\n * whether the component needs to be re-rendered.\r\n *\r\n * @param {Function} selector the selector function\r\n * @param {Function=} equalityFn the function that will be used to determine equality\r\n *\r\n * @returns {any} the selected state\r\n *\r\n * @example\r\n *\r\n * import React from 'react'\r\n * import { useSelector } from 'react-redux'\r\n *\r\n * export const CounterComponent = () => {\r\n *   const counter = useSelector(state => state.counter)\r\n *   return <div>{counter}</div>\r\n * }\r\n */\r\nexports.useSelector = createSelectorHook();\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/hooks/useSelector.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/hooks/useStore.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useStore.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useStore = exports.createStoreHook = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar Context_1 = __webpack_require__(/*! ../components/Context */ \"./node_modules/react-redux/es/components/Context.js\");\r\nvar useReduxContext_1 = __webpack_require__(/*! ./useReduxContext */ \"./node_modules/react-redux/es/hooks/useReduxContext.js\");\r\n/**\r\n * Hook factory, which creates a `useStore` hook bound to a given context.\r\n *\r\n * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.\r\n * @returns {Function} A `useStore` hook bound to the specified context.\r\n */\r\nfunction createStoreHook(context) {\r\n    if (context === void 0) {\r\n        context = Context_1.ReactReduxContext;\r\n    }\r\n    var useReduxContext = context === Context_1.ReactReduxContext ? useReduxContext_1.useReduxContext : function () {\r\n        return react_1.useContext(context);\r\n    };\r\n    return function useStore() {\r\n        var _useReduxContext = useReduxContext(), store = _useReduxContext.store;\r\n        return store;\r\n    };\r\n}\r\nexports.createStoreHook = createStoreHook;\r\n/**\r\n * A hook to access the redux store.\r\n *\r\n * @returns {any} the redux store\r\n *\r\n * @example\r\n *\r\n * import React from 'react'\r\n * import { useStore } from 'react-redux'\r\n *\r\n * export const ExampleComponent = () => {\r\n *   const store = useStore()\r\n *   return <div>{store.getState()}</div>\r\n * }\r\n */\r\nexports.useStore = createStoreHook();\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/hooks/useStore.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-redux/es/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.shallowEqual = exports.createStoreHook = exports.useStore = exports.createSelectorHook = exports.useSelector = exports.createDispatchHook = exports.useDispatch = exports.batch = exports.connect = exports.ReactReduxContext = exports.connectAdvanced = exports.Provider = void 0;\r\nvar Provider_1 = __importDefault(__webpack_require__(/*! ./components/Provider */ \"./node_modules/react-redux/es/components/Provider.js\"));\r\nexports.Provider = Provider_1.default;\r\nvar connectAdvanced_1 = __importDefault(__webpack_require__(/*! ./components/connectAdvanced */ \"./node_modules/react-redux/es/components/connectAdvanced.js\"));\r\nexports.connectAdvanced = connectAdvanced_1.default;\r\nvar Context_1 = __webpack_require__(/*! ./components/Context */ \"./node_modules/react-redux/es/components/Context.js\");\r\nObject.defineProperty(exports, \"ReactReduxContext\", { enumerable: true, get: function () { return Context_1.ReactReduxContext; } });\r\nvar connect_1 = __importDefault(__webpack_require__(/*! ./connect/connect */ \"./node_modules/react-redux/es/connect/connect.js\"));\r\nexports.connect = connect_1.default;\r\nvar useDispatch_1 = __webpack_require__(/*! ./hooks/useDispatch */ \"./node_modules/react-redux/es/hooks/useDispatch.js\");\r\nObject.defineProperty(exports, \"useDispatch\", { enumerable: true, get: function () { return useDispatch_1.useDispatch; } });\r\nObject.defineProperty(exports, \"createDispatchHook\", { enumerable: true, get: function () { return useDispatch_1.createDispatchHook; } });\r\nvar useSelector_1 = __webpack_require__(/*! ./hooks/useSelector */ \"./node_modules/react-redux/es/hooks/useSelector.js\");\r\nObject.defineProperty(exports, \"useSelector\", { enumerable: true, get: function () { return useSelector_1.useSelector; } });\r\nObject.defineProperty(exports, \"createSelectorHook\", { enumerable: true, get: function () { return useSelector_1.createSelectorHook; } });\r\nvar useStore_1 = __webpack_require__(/*! ./hooks/useStore */ \"./node_modules/react-redux/es/hooks/useStore.js\");\r\nObject.defineProperty(exports, \"useStore\", { enumerable: true, get: function () { return useStore_1.useStore; } });\r\nObject.defineProperty(exports, \"createStoreHook\", { enumerable: true, get: function () { return useStore_1.createStoreHook; } });\r\nvar batch_1 = __webpack_require__(/*! ./utils/batch */ \"./node_modules/react-redux/es/utils/batch.js\");\r\nvar reactBatchedUpdates_1 = __webpack_require__(/*! ./utils/reactBatchedUpdates */ \"./node_modules/react-redux/es/utils/reactBatchedUpdates.js\");\r\nObject.defineProperty(exports, \"batch\", { enumerable: true, get: function () { return reactBatchedUpdates_1.unstable_batchedUpdates; } });\r\nvar shallowEqual_1 = __importDefault(__webpack_require__(/*! ./utils/shallowEqual */ \"./node_modules/react-redux/es/utils/shallowEqual.js\"));\r\nexports.shallowEqual = shallowEqual_1.default;\r\nbatch_1.setBatch(reactBatchedUpdates_1.unstable_batchedUpdates);\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/index.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/utils/Subscription.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/Subscription.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.default = void 0;\r\nvar batch_1 = __webpack_require__(/*! ./batch */ \"./node_modules/react-redux/es/utils/batch.js\"); // encapsulates the subscription logic for connecting a component to the redux store, as\r\n// well as nesting subscriptions of descendant components, so that we can ensure the\r\n// ancestor components re-render before descendants\r\nvar nullListeners = {\r\n    notify: function notify() { }\r\n};\r\nfunction createListenerCollection() {\r\n    var batch = batch_1.getBatch();\r\n    var first = null;\r\n    var last = null;\r\n    return {\r\n        clear: function clear() {\r\n            first = null;\r\n            last = null;\r\n        },\r\n        notify: function notify() {\r\n            batch(function () {\r\n                var listener = first;\r\n                while (listener) {\r\n                    listener.callback();\r\n                    listener = listener.next;\r\n                }\r\n            });\r\n        },\r\n        get: function get() {\r\n            var listeners = [];\r\n            var listener = first;\r\n            while (listener) {\r\n                listeners.push(listener);\r\n                listener = listener.next;\r\n            }\r\n            return listeners;\r\n        },\r\n        subscribe: function subscribe(callback) {\r\n            var isSubscribed = true;\r\n            var listener = last = {\r\n                callback: callback,\r\n                next: null,\r\n                prev: last\r\n            };\r\n            if (listener.prev) {\r\n                listener.prev.next = listener;\r\n            }\r\n            else {\r\n                first = listener;\r\n            }\r\n            return function unsubscribe() {\r\n                if (!isSubscribed || first === null)\r\n                    return;\r\n                isSubscribed = false;\r\n                if (listener.next) {\r\n                    listener.next.prev = listener.prev;\r\n                }\r\n                else {\r\n                    last = listener.prev;\r\n                }\r\n                if (listener.prev) {\r\n                    listener.prev.next = listener.next;\r\n                }\r\n                else {\r\n                    first = listener.next;\r\n                }\r\n            };\r\n        }\r\n    };\r\n}\r\nvar Subscription = /*#__PURE__*/ function () {\r\n    function Subscription(store, parentSub) {\r\n        this.store = store;\r\n        this.parentSub = parentSub;\r\n        this.unsubscribe = null;\r\n        this.listeners = nullListeners;\r\n        this.handleChangeWrapper = this.handleChangeWrapper.bind(this);\r\n    }\r\n    var _proto = Subscription.prototype;\r\n    _proto.addNestedSub = function addNestedSub(listener) {\r\n        this.trySubscribe();\r\n        return this.listeners.subscribe(listener);\r\n    };\r\n    _proto.notifyNestedSubs = function notifyNestedSubs() {\r\n        this.listeners.notify();\r\n    };\r\n    _proto.handleChangeWrapper = function handleChangeWrapper() {\r\n        if (this.onStateChange) {\r\n            this.onStateChange();\r\n        }\r\n    };\r\n    _proto.isSubscribed = function isSubscribed() {\r\n        return Boolean(this.unsubscribe);\r\n    };\r\n    _proto.trySubscribe = function trySubscribe() {\r\n        if (!this.unsubscribe) {\r\n            this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper);\r\n            this.listeners = createListenerCollection();\r\n        }\r\n    };\r\n    _proto.tryUnsubscribe = function tryUnsubscribe() {\r\n        if (this.unsubscribe) {\r\n            this.unsubscribe();\r\n            this.unsubscribe = null;\r\n            this.listeners.clear();\r\n            this.listeners = nullListeners;\r\n        }\r\n    };\r\n    return Subscription;\r\n}();\r\nexports.default = Subscription;\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/utils/Subscription.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/utils/batch.js":
/*!****************************************************!*\
  !*** ./node_modules/react-redux/es/utils/batch.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.getBatch = exports.setBatch = void 0;\r\n// Default to a dummy \"batch\" implementation that just runs the callback\r\nfunction defaultNoopBatch(callback) {\r\n    callback();\r\n}\r\nvar batch = defaultNoopBatch; // Allow injecting another batching function later\r\nvar setBatch = function setBatch(newBatch) {\r\n    return batch = newBatch;\r\n}; // Supply a getter just to skip dealing with ESM bindings\r\nexports.setBatch = setBatch;\r\nvar getBatch = function getBatch() {\r\n    return batch;\r\n};\r\nexports.getBatch = getBatch;\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/utils/batch.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/utils/isPlainObject.js":
/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/isPlainObject.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/**\r\n * @param {any} obj The object to inspect.\r\n * @returns {boolean} True if the argument appears to be a plain object.\r\n */\r\nfunction isPlainObject(obj) {\r\n    if (typeof obj !== 'object' || obj === null)\r\n        return false;\r\n    var proto = Object.getPrototypeOf(obj);\r\n    if (proto === null)\r\n        return true;\r\n    var baseProto = proto;\r\n    while (Object.getPrototypeOf(baseProto) !== null) {\r\n        baseProto = Object.getPrototypeOf(baseProto);\r\n    }\r\n    return proto === baseProto;\r\n}\r\nexports.default = isPlainObject;\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/utils/isPlainObject.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/utils/reactBatchedUpdates.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/reactBatchedUpdates.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.unstable_batchedUpdates = void 0;\r\n/* eslint-disable import/no-unresolved */\r\nvar react_dom_1 = __webpack_require__(/*! react-dom */ \"react-dom\");\r\nObject.defineProperty(exports, \"unstable_batchedUpdates\", { enumerable: true, get: function () { return react_dom_1.unstable_batchedUpdates; } });\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/utils/reactBatchedUpdates.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/utils/shallowEqual.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/shallowEqual.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nfunction is(x, y) {\r\n    if (x === y) {\r\n        return x !== 0 || y !== 0 || 1 / x === 1 / y;\r\n    }\r\n    else {\r\n        return x !== x && y !== y;\r\n    }\r\n}\r\nfunction shallowEqual(objA, objB) {\r\n    if (is(objA, objB))\r\n        return true;\r\n    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {\r\n        return false;\r\n    }\r\n    var keysA = Object.keys(objA);\r\n    var keysB = Object.keys(objB);\r\n    if (keysA.length !== keysB.length)\r\n        return false;\r\n    for (var i = 0; i < keysA.length; i++) {\r\n        if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {\r\n            return false;\r\n        }\r\n    }\r\n    return true;\r\n}\r\nexports.default = shallowEqual;\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/utils/shallowEqual.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useIsomorphicLayoutEffect = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\"); // React currently throws a warning when using useLayoutEffect on the server.\r\n// To get around it, we can conditionally useEffect on the server (no-op) and\r\n// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store\r\n// subscription callback always has the selector from the latest render commit\r\n// available, otherwise a store update may happen between render and the effect,\r\n// which may cause missed updates; we also must ensure the store subscription\r\n// is created synchronously, otherwise a store update may occur before the\r\n// subscription is created and an inconsistent state may be observed\r\nexports.useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? react_1.useLayoutEffect : react_1.useEffect;\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/utils/verifyPlainObject.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/verifyPlainObject.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar isPlainObject_1 = __importDefault(__webpack_require__(/*! ./isPlainObject */ \"./node_modules/react-redux/es/utils/isPlainObject.js\"));\r\nvar warning_1 = __importDefault(__webpack_require__(/*! ./warning */ \"./node_modules/react-redux/es/utils/warning.js\"));\r\nfunction verifyPlainObject(value, displayName, methodName) {\r\n    if (!isPlainObject_1.default(value)) {\r\n        warning_1.default(methodName + \"() in \" + displayName + \" must return a plain object. Instead received \" + value + \".\");\r\n    }\r\n}\r\nexports.default = verifyPlainObject;\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/utils/verifyPlainObject.js?");

/***/ }),

/***/ "./node_modules/react-redux/es/utils/warning.js":
/*!******************************************************!*\
  !*** ./node_modules/react-redux/es/utils/warning.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/**\r\n * Prints a warning in the console if it exists.\r\n *\r\n * @param {String} message The warning message.\r\n * @returns {void}\r\n */\r\nfunction warning(message) {\r\n    /* eslint-disable no-console */\r\n    if (typeof console !== 'undefined' && typeof console.error === 'function') {\r\n        console.error(message);\r\n    }\r\n    /* eslint-enable no-console */\r\n    try {\r\n        // This error was thrown as a convenience so that if you enable\r\n        // \"break on all exceptions\" in your console,\r\n        // it would pause the execution at this line.\r\n        throw new Error(message);\r\n        /* eslint-disable no-empty */\r\n    }\r\n    catch (e) { }\r\n    /* eslint-enable no-empty */\r\n}\r\nexports.default = warning;\r\n\n\n//# sourceURL=webpack:///./node_modules/react-redux/es/utils/warning.js?");

/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.createStore = exports.compose = exports.combineReducers = exports.bindActionCreators = exports.applyMiddleware = exports.__DO_NOT_USE__ActionTypes = void 0;\r\nvar symbol_observable_1 = __importDefault(__webpack_require__(/*! symbol-observable */ \"./node_modules/symbol-observable/es/index.js\"));\r\n/**\r\n * These are private action types reserved by Redux.\r\n * For any unknown actions, you must return the current state.\r\n * If the current state is undefined, you must return the initial state.\r\n * Do not reference these action types directly in your code.\r\n */\r\nvar randomString = function randomString() {\r\n    return Math.random().toString(36).substring(7).split('').join('.');\r\n};\r\nvar ActionTypes = {\r\n    INIT: \"@@redux/INIT\" + randomString(),\r\n    REPLACE: \"@@redux/REPLACE\" + randomString(),\r\n    PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {\r\n        return \"@@redux/PROBE_UNKNOWN_ACTION\" + randomString();\r\n    }\r\n};\r\nexports.__DO_NOT_USE__ActionTypes = ActionTypes;\r\n/**\r\n * @param {any} obj The object to inspect.\r\n * @returns {boolean} True if the argument appears to be a plain object.\r\n */\r\nfunction isPlainObject(obj) {\r\n    if (typeof obj !== 'object' || obj === null)\r\n        return false;\r\n    var proto = obj;\r\n    while (Object.getPrototypeOf(proto) !== null) {\r\n        proto = Object.getPrototypeOf(proto);\r\n    }\r\n    return Object.getPrototypeOf(obj) === proto;\r\n}\r\n/**\r\n * Creates a Redux store that holds the state tree.\r\n * The only way to change the data in the store is to call `dispatch()` on it.\r\n *\r\n * There should only be a single store in your app. To specify how different\r\n * parts of the state tree respond to actions, you may combine several reducers\r\n * into a single reducer function by using `combineReducers`.\r\n *\r\n * @param {Function} reducer A function that returns the next state tree, given\r\n * the current state tree and the action to handle.\r\n *\r\n * @param {any} [preloadedState] The initial state. You may optionally specify it\r\n * to hydrate the state from the server in universal apps, or to restore a\r\n * previously serialized user session.\r\n * If you use `combineReducers` to produce the root reducer function, this must be\r\n * an object with the same shape as `combineReducers` keys.\r\n *\r\n * @param {Function} [enhancer] The store enhancer. You may optionally specify it\r\n * to enhance the store with third-party capabilities such as middleware,\r\n * time travel, persistence, etc. The only store enhancer that ships with Redux\r\n * is `applyMiddleware()`.\r\n *\r\n * @returns {Store} A Redux store that lets you read the state, dispatch actions\r\n * and subscribe to changes.\r\n */\r\nfunction createStore(reducer, preloadedState, enhancer) {\r\n    var _ref2;\r\n    if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {\r\n        throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');\r\n    }\r\n    if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {\r\n        enhancer = preloadedState;\r\n        preloadedState = undefined;\r\n    }\r\n    if (typeof enhancer !== 'undefined') {\r\n        if (typeof enhancer !== 'function') {\r\n            throw new Error('Expected the enhancer to be a function.');\r\n        }\r\n        return enhancer(createStore)(reducer, preloadedState);\r\n    }\r\n    if (typeof reducer !== 'function') {\r\n        throw new Error('Expected the reducer to be a function.');\r\n    }\r\n    var currentReducer = reducer;\r\n    var currentState = preloadedState;\r\n    var currentListeners = [];\r\n    var nextListeners = currentListeners;\r\n    var isDispatching = false;\r\n    /**\r\n     * This makes a shallow copy of currentListeners so we can use\r\n     * nextListeners as a temporary list while dispatching.\r\n     *\r\n     * This prevents any bugs around consumers calling\r\n     * subscribe/unsubscribe in the middle of a dispatch.\r\n     */\r\n    function ensureCanMutateNextListeners() {\r\n        if (nextListeners === currentListeners) {\r\n            nextListeners = currentListeners.slice();\r\n        }\r\n    }\r\n    /**\r\n     * Reads the state tree managed by the store.\r\n     *\r\n     * @returns {any} The current state tree of your application.\r\n     */\r\n    function getState() {\r\n        if (isDispatching) {\r\n            throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');\r\n        }\r\n        return currentState;\r\n    }\r\n    /**\r\n     * Adds a change listener. It will be called any time an action is dispatched,\r\n     * and some part of the state tree may potentially have changed. You may then\r\n     * call `getState()` to read the current state tree inside the callback.\r\n     *\r\n     * You may call `dispatch()` from a change listener, with the following\r\n     * caveats:\r\n     *\r\n     * 1. The subscriptions are snapshotted just before every `dispatch()` call.\r\n     * If you subscribe or unsubscribe while the listeners are being invoked, this\r\n     * will not have any effect on the `dispatch()` that is currently in progress.\r\n     * However, the next `dispatch()` call, whether nested or not, will use a more\r\n     * recent snapshot of the subscription list.\r\n     *\r\n     * 2. The listener should not expect to see all state changes, as the state\r\n     * might have been updated multiple times during a nested `dispatch()` before\r\n     * the listener is called. It is, however, guaranteed that all subscribers\r\n     * registered before the `dispatch()` started will be called with the latest\r\n     * state by the time it exits.\r\n     *\r\n     * @param {Function} listener A callback to be invoked on every dispatch.\r\n     * @returns {Function} A function to remove this change listener.\r\n     */\r\n    function subscribe(listener) {\r\n        if (typeof listener !== 'function') {\r\n            throw new Error('Expected the listener to be a function.');\r\n        }\r\n        if (isDispatching) {\r\n            throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');\r\n        }\r\n        var isSubscribed = true;\r\n        ensureCanMutateNextListeners();\r\n        nextListeners.push(listener);\r\n        return function unsubscribe() {\r\n            if (!isSubscribed) {\r\n                return;\r\n            }\r\n            if (isDispatching) {\r\n                throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribelistener for more details.');\r\n            }\r\n            isSubscribed = false;\r\n            ensureCanMutateNextListeners();\r\n            var index = nextListeners.indexOf(listener);\r\n            nextListeners.splice(index, 1);\r\n            currentListeners = null;\r\n        };\r\n    }\r\n    /**\r\n     * Dispatches an action. It is the only way to trigger a state change.\r\n     *\r\n     * The `reducer` function, used to create the store, will be called with the\r\n     * current state tree and the given `action`. Its return value will\r\n     * be considered the **next** state of the tree, and the change listeners\r\n     * will be notified.\r\n     *\r\n     * The base implementation only supports plain object actions. If you want to\r\n     * dispatch a Promise, an Observable, a thunk, or something else, you need to\r\n     * wrap your store creating function into the corresponding middleware. For\r\n     * example, see the documentation for the `redux-thunk` package. Even the\r\n     * middleware will eventually dispatch plain object actions using this method.\r\n     *\r\n     * @param {Object} action A plain object representing “what changed”. It is\r\n     * a good idea to keep actions serializable so you can record and replay user\r\n     * sessions, or use the time travelling `redux-devtools`. An action must have\r\n     * a `type` property which may not be `undefined`. It is a good idea to use\r\n     * string constants for action types.\r\n     *\r\n     * @returns {Object} For convenience, the same action object you dispatched.\r\n     *\r\n     * Note that, if you use a custom middleware, it may wrap `dispatch()` to\r\n     * return something else (for example, a Promise you can await).\r\n     */\r\n    function dispatch(action) {\r\n        if (!isPlainObject(action)) {\r\n            throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');\r\n        }\r\n        if (typeof action.type === 'undefined') {\r\n            throw new Error('Actions may not have an undefined \"type\" property. ' + 'Have you misspelled a constant?');\r\n        }\r\n        if (isDispatching) {\r\n            throw new Error('Reducers may not dispatch actions.');\r\n        }\r\n        try {\r\n            isDispatching = true;\r\n            currentState = currentReducer(currentState, action);\r\n        }\r\n        finally {\r\n            isDispatching = false;\r\n        }\r\n        var listeners = currentListeners = nextListeners;\r\n        for (var i = 0; i < listeners.length; i++) {\r\n            var listener = listeners[i];\r\n            listener();\r\n        }\r\n        return action;\r\n    }\r\n    /**\r\n     * Replaces the reducer currently used by the store to calculate the state.\r\n     *\r\n     * You might need this if your app implements code splitting and you want to\r\n     * load some of the reducers dynamically. You might also need this if you\r\n     * implement a hot reloading mechanism for Redux.\r\n     *\r\n     * @param {Function} nextReducer The reducer for the store to use instead.\r\n     * @returns {void}\r\n     */\r\n    function replaceReducer(nextReducer) {\r\n        if (typeof nextReducer !== 'function') {\r\n            throw new Error('Expected the nextReducer to be a function.');\r\n        }\r\n        currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.\r\n        // Any reducers that existed in both the new and old rootReducer\r\n        // will receive the previous state. This effectively populates\r\n        // the new state tree with any relevant data from the old one.\r\n        dispatch({\r\n            type: ActionTypes.REPLACE\r\n        });\r\n    }\r\n    /**\r\n     * Interoperability point for observable/reactive libraries.\r\n     * @returns {observable} A minimal observable of state changes.\r\n     * For more information, see the observable proposal:\r\n     * https://github.com/tc39/proposal-observable\r\n     */\r\n    function observable() {\r\n        var _ref;\r\n        var outerSubscribe = subscribe;\r\n        return _ref = {\r\n            /**\r\n             * The minimal observable subscription method.\r\n             * @param {Object} observer Any object that can be used as an observer.\r\n             * The observer object should have a `next` method.\r\n             * @returns {subscription} An object with an `unsubscribe` method that can\r\n             * be used to unsubscribe the observable from the store, and prevent further\r\n             * emission of values from the observable.\r\n             */\r\n            subscribe: function subscribe(observer) {\r\n                if (typeof observer !== 'object' || observer === null) {\r\n                    throw new TypeError('Expected the observer to be an object.');\r\n                }\r\n                function observeState() {\r\n                    if (observer.next) {\r\n                        observer.next(getState());\r\n                    }\r\n                }\r\n                observeState();\r\n                var unsubscribe = outerSubscribe(observeState);\r\n                return {\r\n                    unsubscribe: unsubscribe\r\n                };\r\n            }\r\n        }, _ref[symbol_observable_1.default] = function () {\r\n            return this;\r\n        }, _ref;\r\n    } // When a store is created, an \"INIT\" action is dispatched so that every\r\n    // reducer returns their initial state. This effectively populates\r\n    // the initial state tree.\r\n    dispatch({\r\n        type: ActionTypes.INIT\r\n    });\r\n    return _ref2 = {\r\n        dispatch: dispatch,\r\n        subscribe: subscribe,\r\n        getState: getState,\r\n        replaceReducer: replaceReducer\r\n    }, _ref2[symbol_observable_1.default] = observable, _ref2;\r\n}\r\nexports.createStore = createStore;\r\n/**\r\n * Prints a warning in the console if it exists.\r\n *\r\n * @param {String} message The warning message.\r\n * @returns {void}\r\n */\r\nfunction warning(message) {\r\n    /* eslint-disable no-console */\r\n    if (typeof console !== 'undefined' && typeof console.error === 'function') {\r\n        console.error(message);\r\n    }\r\n    /* eslint-enable no-console */\r\n    try {\r\n        // This error was thrown as a convenience so that if you enable\r\n        // \"break on all exceptions\" in your console,\r\n        // it would pause the execution at this line.\r\n        throw new Error(message);\r\n    }\r\n    catch (e) { } // eslint-disable-line no-empty\r\n}\r\nfunction getUndefinedStateErrorMessage(key, action) {\r\n    var actionType = action && action.type;\r\n    var actionDescription = actionType && \"action \\\"\" + String(actionType) + \"\\\"\" || 'an action';\r\n    return \"Given \" + actionDescription + \", reducer \\\"\" + key + \"\\\" returned undefined. \" + \"To ignore an action, you must explicitly return the previous state. \" + \"If you want this reducer to hold no value, you can return null instead of undefined.\";\r\n}\r\nfunction getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {\r\n    var reducerKeys = Object.keys(reducers);\r\n    var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';\r\n    if (reducerKeys.length === 0) {\r\n        return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';\r\n    }\r\n    if (!isPlainObject(inputState)) {\r\n        return \"The \" + argumentName + \" has unexpected type of \\\"\" + {}.toString.call(inputState).match(/\\s([a-z|A-Z]+)/)[1] + \"\\\". Expected argument to be an object with the following \" + (\"keys: \\\"\" + reducerKeys.join('\", \"') + \"\\\"\");\r\n    }\r\n    var unexpectedKeys = Object.keys(inputState).filter(function (key) {\r\n        return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];\r\n    });\r\n    unexpectedKeys.forEach(function (key) {\r\n        unexpectedKeyCache[key] = true;\r\n    });\r\n    if (action && action.type === ActionTypes.REPLACE)\r\n        return;\r\n    if (unexpectedKeys.length > 0) {\r\n        return \"Unexpected \" + (unexpectedKeys.length > 1 ? 'keys' : 'key') + \" \" + (\"\\\"\" + unexpectedKeys.join('\", \"') + \"\\\" found in \" + argumentName + \". \") + \"Expected to find one of the known reducer keys instead: \" + (\"\\\"\" + reducerKeys.join('\", \"') + \"\\\". Unexpected keys will be ignored.\");\r\n    }\r\n}\r\nfunction assertReducerShape(reducers) {\r\n    Object.keys(reducers).forEach(function (key) {\r\n        var reducer = reducers[key];\r\n        var initialState = reducer(undefined, {\r\n            type: ActionTypes.INIT\r\n        });\r\n        if (typeof initialState === 'undefined') {\r\n            throw new Error(\"Reducer \\\"\" + key + \"\\\" returned undefined during initialization. \" + \"If the state passed to the reducer is undefined, you must \" + \"explicitly return the initial state. The initial state may \" + \"not be undefined. If you don't want to set a value for this reducer, \" + \"you can use null instead of undefined.\");\r\n        }\r\n        if (typeof reducer(undefined, {\r\n            type: ActionTypes.PROBE_UNKNOWN_ACTION()\r\n        }) === 'undefined') {\r\n            throw new Error(\"Reducer \\\"\" + key + \"\\\" returned undefined when probed with a random type. \" + (\"Don't try to handle \" + ActionTypes.INIT + \" or other actions in \\\"redux/*\\\" \") + \"namespace. They are considered private. Instead, you must return the \" + \"current state for any unknown actions, unless it is undefined, \" + \"in which case you must return the initial state, regardless of the \" + \"action type. The initial state may not be undefined, but can be null.\");\r\n        }\r\n    });\r\n}\r\n/**\r\n * Turns an object whose values are different reducer functions, into a single\r\n * reducer function. It will call every child reducer, and gather their results\r\n * into a single state object, whose keys correspond to the keys of the passed\r\n * reducer functions.\r\n *\r\n * @param {Object} reducers An object whose values correspond to different\r\n * reducer functions that need to be combined into one. One handy way to obtain\r\n * it is to use ES6 `import * as reducers` syntax. The reducers may never return\r\n * undefined for any action. Instead, they should return their initial state\r\n * if the state passed to them was undefined, and the current state for any\r\n * unrecognized action.\r\n *\r\n * @returns {Function} A reducer function that invokes every reducer inside the\r\n * passed object, and builds a state object with the same shape.\r\n */\r\nfunction combineReducers(reducers) {\r\n    var reducerKeys = Object.keys(reducers);\r\n    var finalReducers = {};\r\n    for (var i = 0; i < reducerKeys.length; i++) {\r\n        var key = reducerKeys[i];\r\n        if (true) {\r\n            if (typeof reducers[key] === 'undefined') {\r\n                warning(\"No reducer provided for key \\\"\" + key + \"\\\"\");\r\n            }\r\n        }\r\n        if (typeof reducers[key] === 'function') {\r\n            finalReducers[key] = reducers[key];\r\n        }\r\n    }\r\n    var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same\r\n    // keys multiple times.\r\n    var unexpectedKeyCache;\r\n    if (true) {\r\n        unexpectedKeyCache = {};\r\n    }\r\n    var shapeAssertionError;\r\n    try {\r\n        assertReducerShape(finalReducers);\r\n    }\r\n    catch (e) {\r\n        shapeAssertionError = e;\r\n    }\r\n    return function combination(state, action) {\r\n        if (state === void 0) {\r\n            state = {};\r\n        }\r\n        if (shapeAssertionError) {\r\n            throw shapeAssertionError;\r\n        }\r\n        if (true) {\r\n            var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);\r\n            if (warningMessage) {\r\n                warning(warningMessage);\r\n            }\r\n        }\r\n        var hasChanged = false;\r\n        var nextState = {};\r\n        for (var _i = 0; _i < finalReducerKeys.length; _i++) {\r\n            var _key = finalReducerKeys[_i];\r\n            var reducer = finalReducers[_key];\r\n            var previousStateForKey = state[_key];\r\n            var nextStateForKey = reducer(previousStateForKey, action);\r\n            if (typeof nextStateForKey === 'undefined') {\r\n                var errorMessage = getUndefinedStateErrorMessage(_key, action);\r\n                throw new Error(errorMessage);\r\n            }\r\n            nextState[_key] = nextStateForKey;\r\n            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;\r\n        }\r\n        hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;\r\n        return hasChanged ? nextState : state;\r\n    };\r\n}\r\nexports.combineReducers = combineReducers;\r\nfunction bindActionCreator(actionCreator, dispatch) {\r\n    return function () {\r\n        return dispatch(actionCreator.apply(this, arguments));\r\n    };\r\n}\r\n/**\r\n * Turns an object whose values are action creators, into an object with the\r\n * same keys, but with every function wrapped into a `dispatch` call so they\r\n * may be invoked directly. This is just a convenience method, as you can call\r\n * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.\r\n *\r\n * For convenience, you can also pass an action creator as the first argument,\r\n * and get a dispatch wrapped function in return.\r\n *\r\n * @param {Function|Object} actionCreators An object whose values are action\r\n * creator functions. One handy way to obtain it is to use ES6 `import * as`\r\n * syntax. You may also pass a single function.\r\n *\r\n * @param {Function} dispatch The `dispatch` function available on your Redux\r\n * store.\r\n *\r\n * @returns {Function|Object} The object mimicking the original object, but with\r\n * every action creator wrapped into the `dispatch` call. If you passed a\r\n * function as `actionCreators`, the return value will also be a single\r\n * function.\r\n */\r\nfunction bindActionCreators(actionCreators, dispatch) {\r\n    if (typeof actionCreators === 'function') {\r\n        return bindActionCreator(actionCreators, dispatch);\r\n    }\r\n    if (typeof actionCreators !== 'object' || actionCreators === null) {\r\n        throw new Error(\"bindActionCreators expected an object or a function, instead received \" + (actionCreators === null ? 'null' : typeof actionCreators) + \". \" + \"Did you write \\\"import ActionCreators from\\\" instead of \\\"import * as ActionCreators from\\\"?\");\r\n    }\r\n    var boundActionCreators = {};\r\n    for (var key in actionCreators) {\r\n        var actionCreator = actionCreators[key];\r\n        if (typeof actionCreator === 'function') {\r\n            boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);\r\n        }\r\n    }\r\n    return boundActionCreators;\r\n}\r\nexports.bindActionCreators = bindActionCreators;\r\nfunction _defineProperty(obj, key, value) {\r\n    if (key in obj) {\r\n        Object.defineProperty(obj, key, {\r\n            value: value,\r\n            enumerable: true,\r\n            configurable: true,\r\n            writable: true\r\n        });\r\n    }\r\n    else {\r\n        obj[key] = value;\r\n    }\r\n    return obj;\r\n}\r\nfunction ownKeys(object, enumerableOnly) {\r\n    var keys = Object.keys(object);\r\n    if (Object.getOwnPropertySymbols) {\r\n        keys.push.apply(keys, Object.getOwnPropertySymbols(object));\r\n    }\r\n    if (enumerableOnly)\r\n        keys = keys.filter(function (sym) {\r\n            return Object.getOwnPropertyDescriptor(object, sym).enumerable;\r\n        });\r\n    return keys;\r\n}\r\nfunction _objectSpread2(target) {\r\n    for (var i = 1; i < arguments.length; i++) {\r\n        var source = arguments[i] != null ? arguments[i] : {};\r\n        if (i % 2) {\r\n            ownKeys(source, true).forEach(function (key) {\r\n                _defineProperty(target, key, source[key]);\r\n            });\r\n        }\r\n        else if (Object.getOwnPropertyDescriptors) {\r\n            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));\r\n        }\r\n        else {\r\n            ownKeys(source).forEach(function (key) {\r\n                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));\r\n            });\r\n        }\r\n    }\r\n    return target;\r\n}\r\n/**\r\n * Composes single-argument functions from right to left. The rightmost\r\n * function can take multiple arguments as it provides the signature for\r\n * the resulting composite function.\r\n *\r\n * @param {...Function} funcs The functions to compose.\r\n * @returns {Function} A function obtained by composing the argument functions\r\n * from right to left. For example, compose(f, g, h) is identical to doing\r\n * (...args) => f(g(h(...args))).\r\n */\r\nfunction compose() {\r\n    for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {\r\n        funcs[_key] = arguments[_key];\r\n    }\r\n    if (funcs.length === 0) {\r\n        return function (arg) {\r\n            return arg;\r\n        };\r\n    }\r\n    if (funcs.length === 1) {\r\n        return funcs[0];\r\n    }\r\n    return funcs.reduce(function (a, b) {\r\n        return function () {\r\n            return a(b.apply(void 0, arguments));\r\n        };\r\n    });\r\n}\r\nexports.compose = compose;\r\n/**\r\n * Creates a store enhancer that applies middleware to the dispatch method\r\n * of the Redux store. This is handy for a variety of tasks, such as expressing\r\n * asynchronous actions in a concise manner, or logging every action payload.\r\n *\r\n * See `redux-thunk` package as an example of the Redux middleware.\r\n *\r\n * Because middleware is potentially asynchronous, this should be the first\r\n * store enhancer in the composition chain.\r\n *\r\n * Note that each middleware will be given the `dispatch` and `getState` functions\r\n * as named arguments.\r\n *\r\n * @param {...Function} middlewares The middleware chain to be applied.\r\n * @returns {Function} A store enhancer applying the middleware.\r\n */\r\nfunction applyMiddleware() {\r\n    for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {\r\n        middlewares[_key] = arguments[_key];\r\n    }\r\n    return function (createStore) {\r\n        return function () {\r\n            var store = createStore.apply(void 0, arguments);\r\n            var _dispatch = function dispatch() {\r\n                throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');\r\n            };\r\n            var middlewareAPI = {\r\n                getState: store.getState,\r\n                dispatch: function dispatch() {\r\n                    return _dispatch.apply(void 0, arguments);\r\n                }\r\n            };\r\n            var chain = middlewares.map(function (middleware) {\r\n                return middleware(middlewareAPI);\r\n            });\r\n            _dispatch = compose.apply(void 0, chain)(store.dispatch);\r\n            return _objectSpread2({}, store, {\r\n                dispatch: _dispatch\r\n            });\r\n        };\r\n    };\r\n}\r\nexports.applyMiddleware = applyMiddleware;\r\n/*\r\n * This is a dummy function to check if the function name has been altered by minification.\r\n * If the function has been minified and NODE_ENV !== 'production', warn the user.\r\n */\r\nfunction isCrushed() { }\r\nif ( true && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {\r\n    warning('You are currently using minified code outside of NODE_ENV === \"production\". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/redux/es/redux.js?");

/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/* global window */\r\nvar ponyfill_js_1 = __importDefault(__webpack_require__(/*! ./ponyfill.js */ \"./node_modules/symbol-observable/es/ponyfill.js\"));\r\nvar root;\r\nif (typeof self !== 'undefined') {\r\n    root = self;\r\n}\r\nelse if (typeof window !== 'undefined') {\r\n    root = window;\r\n}\r\nelse if (typeof global !== 'undefined') {\r\n    root = global;\r\n}\r\nelse if (true) {\r\n    root = module;\r\n}\r\nelse {}\r\nvar result = ponyfill_js_1.default(root);\r\nexports.default = result;\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./node_modules/symbol-observable/es/index.js?");

/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nfunction symbolObservablePonyfill(root) {\r\n    var result;\r\n    var Symbol = root.Symbol;\r\n    if (typeof Symbol === 'function') {\r\n        if (Symbol.observable) {\r\n            result = Symbol.observable;\r\n        }\r\n        else {\r\n            result = Symbol('observable');\r\n            Symbol.observable = result;\r\n        }\r\n    }\r\n    else {\r\n        result = '@@observable';\r\n    }\r\n    return result;\r\n}\r\nexports.default = symbolObservablePonyfill;\r\n;\r\n\n\n//# sourceURL=webpack:///./node_modules/symbol-observable/es/ponyfill.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nmodule.exports = function (module) {\r\n    if (!module.webpackPolyfill) {\r\n        module.deprecate = function () { };\r\n        module.paths = [];\r\n        // module.parent = undefined by default\r\n        if (!module.children)\r\n            module.children = [];\r\n        Object.defineProperty(module, \"loaded\", {\r\n            enumerable: true,\r\n            get: function () {\r\n                return module.l;\r\n            }\r\n        });\r\n        Object.defineProperty(module, \"id\", {\r\n            enumerable: true,\r\n            get: function () {\r\n                return module.i;\r\n            }\r\n        });\r\n        module.webpackPolyfill = 1;\r\n    }\r\n    return module;\r\n};\r\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\nvar Layout_1 = __importDefault(__webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\"));\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar Header_1 = __importDefault(__webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\"));\r\nvar Content_1 = __importDefault(__webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\"));\r\nvar CardsList_1 = __importDefault(__webpack_require__(/*! ./shared/CardsList */ \"./src/shared/CardsList/index.ts\"));\r\nvar useToken_1 = __webpack_require__(/*! ./hooks/useToken */ \"./src/hooks/useToken.ts\");\r\nvar tokenContext_1 = __webpack_require__(/*! ./shared/context/tokenContext */ \"./src/shared/context/tokenContext.ts\");\r\n//import { userContext } from './shared/context/userContext';\r\nvar userContext_1 = __webpack_require__(/*! ./shared/context/userContext */ \"./src/shared/context/userContext.tsx\");\r\nvar postsContext_1 = __webpack_require__(/*! ./shared/context/postsContext */ \"./src/shared/context/postsContext.tsx\");\r\nvar commentContext_1 = __webpack_require__(/*! ./shared/context/commentContext */ \"./src/shared/context/commentContext.ts\");\r\nvar redux_1 = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nvar store = redux_1.createStore(function () { });\r\n//import { nanoid } from 'nanoid';\r\nfunction AppComponent() {\r\n    //????????????????? хер знает, не работает, выдает ошибку\r\n    // const url = new URL(window.location.href);\r\n    // console.log(url.searchParams.get('code'));\r\n    //---------------------------------------------------------\r\n    var _a = react_1.useState(''), commentValue = _a[0], setCommentValue = _a[1];\r\n    var token = useToken_1.useToken()[0];\r\n    var CommentProvider = commentContext_1.commentContext.Provider;\r\n    return (react_1.default.createElement(react_redux_1.Provider, { store: store },\r\n        react_1.default.createElement(CommentProvider, { value: {\r\n                value: commentValue,\r\n                onChange: setCommentValue\r\n            } },\r\n            react_1.default.createElement(tokenContext_1.tokenContext.Provider, { value: token },\r\n                react_1.default.createElement(userContext_1.UserContextProvider, null,\r\n                    react_1.default.createElement(postsContext_1.PostsContextProvider, null,\r\n                        react_1.default.createElement(Layout_1.default, null,\r\n                            react_1.default.createElement(Header_1.default, null),\r\n                            react_1.default.createElement(Content_1.default, null,\r\n                                react_1.default.createElement(CardsList_1.default, null)))))))));\r\n}\r\nexports.App = root_1.hot(function () { return react_1.default.createElement(AppComponent, null); });\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/hooks/usePostsData.ts":
/*!***********************************!*\
  !*** ./src/hooks/usePostsData.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.usePostsData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar tokenContext_1 = __webpack_require__(/*! ../shared/context/tokenContext */ \"./src/shared/context/tokenContext.ts\");\r\n// interface IPostsData {\r\n//     name?: string;\r\n//     iconImg?: string;\r\n// }\r\nfunction usePostsData() {\r\n    var _a = react_1.useState([]), data = _a[0], setData = _a[1];\r\n    var token = react_1.useContext(tokenContext_1.tokenContext);\r\n    react_1.useEffect(function () {\r\n        if (!token)\r\n            return;\r\n        axios_1.default.get('https://oauth.reddit.com/best/', {\r\n            headers: { Authorization: \"bearer \" + token }\r\n        })\r\n            .then(function (resp) {\r\n            setData(resp.data.data.children);\r\n        })\r\n            .catch(console.log);\r\n    }, [token]);\r\n    return [data];\r\n}\r\nexports.usePostsData = usePostsData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/usePostsData.ts?");

/***/ }),

/***/ "./src/hooks/useToken.ts":
/*!*******************************!*\
  !*** ./src/hooks/useToken.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useToken = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nfunction useToken() {\r\n    var _a = react_1.useState(''), token = _a[0], setToken = _a[1];\r\n    react_1.useEffect(function () {\r\n        if (window.__token__) {\r\n            setToken(window.__token__);\r\n        }\r\n    }, []);\r\n    return [token]; //токен обернут в массив, т.к. многие из хуков реакта поддерживаются такого API\r\n}\r\nexports.useToken = useToken;\r\n;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useToken.ts?");

/***/ }),

/***/ "./src/hooks/useUserData.ts":
/*!**********************************!*\
  !*** ./src/hooks/useUserData.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useUserData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar tokenContext_1 = __webpack_require__(/*! ../shared/context/tokenContext */ \"./src/shared/context/tokenContext.ts\");\r\nfunction useUserData() {\r\n    var _a = react_1.useState({}), data = _a[0], setData = _a[1];\r\n    var token = react_1.useContext(tokenContext_1.tokenContext);\r\n    react_1.useEffect(function () {\r\n        if (!token)\r\n            return;\r\n        axios_1.default.get('https://oauth.reddit.com/api/v1/me', {\r\n            headers: { Authorization: \"bearer \" + token }\r\n        })\r\n            .then(function (resp) {\r\n            var userData = resp.data;\r\n            //console.log(\"#\",resp);\r\n            setData({ name: userData.name, iconImg: userData.icon_img });\r\n        })\r\n            .catch(console.log);\r\n    }, [token]);\r\n    return [data];\r\n}\r\nexports.useUserData = useUserData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useUserData.ts?");

/***/ }),

/***/ "./src/main.global.css":
/*!*****************************!*\
  !*** ./src/main.global.css ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"#modal_root {\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    width: 100%;\\r\\n}\\r\\n\\r\\n/*not work in IE!!!*/\\r\\n:root {\\r\\n    --black:    #333333;\\r\\n    --white:    #ffffff;\\r\\n    --orange:   #cc6633;\\r\\n    --green:    #a4cc33;\\r\\n\\r\\n    --whiteLightness: 100%;\\r\\n\\r\\n    --greyF3:   #f3f3f3;\\r\\n    --greyEC:   hsl(0, 0%, calc(var(--whiteLightness) - 7%));\\r\\n    --greyF4:   #f4f4f4;\\r\\n    --greyD9:   #d9d9d9;\\r\\n    --greyC4:   #c4c4c4;\\r\\n    --grey99:   #999999;\\r\\n    --grey66:   #666666;\\r\\n}\\r\\n\\r\\nbody {\\r\\n    padding: 0;\\r\\n    margin: 0;\\r\\n    background-color: var(--greyF4);\\r\\n    font-size: 14px;\\r\\n    line-height: 16px;\\r\\n    font-family: 'Roboto', serif;\\r\\n}\\r\\n\\r\\n*{\\r\\n    color: var(--black);\\r\\n    box-sizing: border-box;\\r\\n    -webkit-font-smoothing: antialiased;\\r\\n    -mox-osx-font-smoothing: grayscale;\\r\\n}\\r\\n\\r\\nul {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    list-style: none;\\r\\n}\\r\\n\\r\\na {\\r\\n    text-decoration: none;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n    padding: 0;\\r\\n    border: 0;\\r\\n    background: transparent;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/main.global.css?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.indexTemplate = void 0;\r\nvar indexTemplate = function (content, token) {\r\n    return \"<!DOCTYPE html>\\n<html>\\n\\t<head>\\n\\t\\t<meta charset=\\\"UTF-8\\\">\\n\\t\\t<meta name=\\\"viewport\\\" content=\\\"width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no\\\"/>\\n\\t\\t<meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\"/>\\n\\t\\t<meta name=\\\"HandheldFriendly\\\" content=\\\"true\\\"/>\\n\\t\\t<title>Reddit</title>\\n\\t\\t<script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n\\t\\t<script>\\n\\t\\t\\twindow.__token__ = '\" + token + \"'\\n\\t\\t</script>\\n\\t</head>\\n\\t<body>\\n\\t\\t<div id=\\\"react-root\\\">\" + content + \"</div>\\n\\t\\t<div id=\\\"modal_root\\\"></div>\\n\\t</body>\\n</html>\\n\\t\";\r\n};\r\nexports.indexTemplate = indexTemplate;\r\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n//const express = require('express');\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\r\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar app = express_1.default();\r\napp.use('/static', express_1.default.static('./dist/client'));\r\napp.get('/', function (req, res) {\r\n    res.header(\"Access-Control-Allow-Origin\", \"*\");\r\n    res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_1.App())));\r\n});\r\napp.get('/auth', function (req, res) {\r\n    res.header(\"Access-Control-Allow-Origin\", \"*\");\r\n    axios_1.default.post('https://www.reddit.com/api/v1/access_token', \"grant_type=authorization_code&code=\" + req.query.code + \"&redirect_uri=http://localhost:3000/auth\", {\r\n        auth: { username: 'b0t5J709nNhl3Q', password: 'oYcwI-3QvrfPkEiW9o_6nf3cqtBfnA' },\r\n        headers: { 'Content-type': 'application/x-www-form-urlencoded' }\r\n    })\r\n        .then(function (_a) {\r\n        var data = _a.data;\r\n        res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_1.App()), data['access_token']));\r\n    })\r\n        .catch(console.log);\r\n});\r\napp.listen(3000, function () {\r\n    console.log('Server started on http://localhost:3000');\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/Break/Break.tsx":
/*!************************************!*\
  !*** ./src/shared/Break/Break.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar break_less_1 = __importDefault(__webpack_require__(/*! ./break.less */ \"./src/shared/Break/break.less\"));\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nfunction Break(props) {\r\n    var _a, _b, _c, _d, _e;\r\n    var _f = props.inline, inline = _f === void 0 ? false : _f, _g = props.top, top = _g === void 0 ? false : _g, size = props.size, mobileSize = props.mobileSize, tabletSize = props.tabletSize, desktopSize = props.desktopSize;\r\n    return (react_1.default.createElement(\"div\", { className: classnames_1.default(break_less_1.default[\"s\" + size], (_a = {}, _a[break_less_1.default[\"mobile_s\" + mobileSize]] = mobileSize, _a), (_b = {}, _b[break_less_1.default[\"tablet_s\" + tabletSize]] = tabletSize, _b), (_c = {}, _c[break_less_1.default[\"desktop_s\" + desktopSize]] = desktopSize, _c), (_d = {}, _d[break_less_1.default.inline] = inline, _d), (_e = {}, _e[break_less_1.default.top] = top, _e)) }));\r\n}\r\nexports.default = Break;\r\n\n\n//# sourceURL=webpack:///./src/shared/Break/Break.tsx?");

/***/ }),

/***/ "./src/shared/Break/break.less":
/*!*************************************!*\
  !*** ./src/shared/Break/break.less ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"tops4\": \"break__tops4--2FKJy\",\n\t\"s8\": \"break__s8--Krl3R\",\n\t\"s12\": \"break__s12--31EB0\",\n\t\"s16\": \"break__s16--1wz9n\",\n\t\"s20\": \"break__s20--2uysh\",\n\t\"inline\": \"break__inline--2mBIi\",\n\t\"s4\": \"break__s4--19fvJ\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Break/break.less?");

/***/ }),

/***/ "./src/shared/Break/index.ts":
/*!***********************************!*\
  !*** ./src/shared/Break/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Break_1 = __importDefault(__webpack_require__(/*! ./Break */ \"./src/shared/Break/Break.tsx\"));\r\nexports.default = Break_1.default;\r\n\n\n//# sourceURL=webpack:///./src/shared/Break/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Card.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/Card.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar card_less_1 = __importDefault(__webpack_require__(/*! ./card.less */ \"./src/shared/CardsList/Card/card.less\"));\r\nvar CardCaption_1 = __importDefault(__webpack_require__(/*! ./CardCaption */ \"./src/shared/CardsList/Card/CardCaption/index.ts\"));\r\nvar CardControls_1 = __importDefault(__webpack_require__(/*! ./CardControls */ \"./src/shared/CardsList/Card/CardControls/index.ts\"));\r\nvar CardImage_1 = __importDefault(__webpack_require__(/*! ./CardImage */ \"./src/shared/CardsList/Card/CardImage/index.ts\"));\r\nvar Menu_1 = __importDefault(__webpack_require__(/*! ./Menu */ \"./src/shared/CardsList/Card/Menu/index.ts\"));\r\n// interface LooseObject {\r\n//     [key: string]: any\r\n// }\r\nfunction Card(props) {\r\n    return (react_1.default.createElement(\"li\", { className: card_less_1.default.card },\r\n        react_1.default.createElement(CardCaption_1.default, { data: props.data }),\r\n        react_1.default.createElement(CardImage_1.default, { data: props.data }),\r\n        react_1.default.createElement(Menu_1.default, null),\r\n        react_1.default.createElement(CardControls_1.default, { data: props.data })));\r\n}\r\nexports.default = Card;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Card.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardCaption/CardCaption.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardCaption/CardCaption.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar Post_1 = __importDefault(__webpack_require__(/*! ../../../Post */ \"./src/shared/Post/index.ts\"));\r\nvar cardcaption_less_1 = __importDefault(__webpack_require__(/*! ./cardcaption.less */ \"./src/shared/CardsList/Card/CardCaption/cardcaption.less\"));\r\nfunction CardCaption(_a) {\r\n    var data = _a.data;\r\n    var date = new Date(parseInt(data.created_utc + '000'));\r\n    var options = {\r\n        //era: 'long',\r\n        year: 'numeric',\r\n        month: 'long',\r\n        day: 'numeric',\r\n        //weekday: 'long',\r\n        timezone: 'UTC+04:00',\r\n        hour: 'numeric',\r\n        minute: 'numeric',\r\n        second: 'numeric'\r\n    };\r\n    var realDate = date.toLocaleString(\"ru\", options);\r\n    var _b = react_1.useState(false), isModalOpened = _b[0], setIsModalOpened = _b[1];\r\n    return (react_1.default.createElement(\"div\", { className: cardcaption_less_1.default.cardcaption },\r\n        react_1.default.createElement(\"div\", { className: cardcaption_less_1.default.metaData },\r\n            react_1.default.createElement(\"div\", { className: cardcaption_less_1.default.userLink },\r\n                react_1.default.createElement(\"img\", { className: cardcaption_less_1.default.avatar, src: \"https://cdn.dribbble.com/users/133681/avatars/mini/46a5fbb029199915f49a465fb2dc4ac9.png?1589805794\", alt: \"avatar\" }),\r\n                react_1.default.createElement(\"a\", { href: \"#user-url\", className: cardcaption_less_1.default.username }, data.author)),\r\n            react_1.default.createElement(\"span\", { className: cardcaption_less_1.default.createdAt },\r\n                react_1.default.createElement(\"span\", { className: cardcaption_less_1.default.publishedLabel }, \"\\u041E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E \"),\r\n                realDate)),\r\n        react_1.default.createElement(\"h2\", { className: cardcaption_less_1.default.title },\r\n            react_1.default.createElement(\"a\", { href: \"#post-url\", className: cardcaption_less_1.default.postLink, onClick: function () { setIsModalOpened(true); console.log(\"modal:\", isModalOpened); } }, data.title),\r\n            isModalOpened && (react_1.default.createElement(Post_1.default, { onClose: function () { setIsModalOpened(false); } })))));\r\n}\r\nexports.default = CardCaption;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardCaption/CardCaption.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardCaption/cardcaption.less":
/*!****************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardCaption/cardcaption.less ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"cardcaption\": \"cardcaption__cardcaption--3TmXa\",\n\t\"avatar\": \"cardcaption__avatar--20GWj\",\n\t\"metaData\": \"cardcaption__metaData--39-8Y\",\n\t\"userLink\": \"cardcaption__userLink--1WoXU\",\n\t\"username\": \"cardcaption__username--1zmJk\",\n\t\"createdAt\": \"cardcaption__createdAt--2iaNA\",\n\t\"publishedLabel\": \"cardcaption__publishedLabel--1BBv0\",\n\t\"title\": \"cardcaption__title--2ecxJ\",\n\t\"postLink\": \"cardcaption__postLink--W_By-\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardCaption/cardcaption.less?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardCaption/index.ts":
/*!********************************************************!*\
  !*** ./src/shared/CardsList/Card/CardCaption/index.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar CardCaption_1 = __importDefault(__webpack_require__(/*! ./CardCaption */ \"./src/shared/CardsList/Card/CardCaption/CardCaption.tsx\"));\r\nexports.default = CardCaption_1.default;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardCaption/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardControls/CardControls.tsx":
/*!*****************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardControls/CardControls.tsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar cardcontrols_less_1 = __importDefault(__webpack_require__(/*! ./cardcontrols.less */ \"./src/shared/CardsList/Card/CardControls/cardcontrols.less\"));\r\nfunction CardControls(_a) {\r\n    var data = _a.data;\r\n    return (react_1.default.createElement(\"div\", { className: cardcontrols_less_1.default.controls },\r\n        react_1.default.createElement(\"div\", { className: cardcontrols_less_1.default.karmaCounter },\r\n            react_1.default.createElement(\"button\", { className: cardcontrols_less_1.default.up },\r\n                react_1.default.createElement(\"svg\", { width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                    react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#C4C4C4\" }))),\r\n            react_1.default.createElement(\"span\", { className: cardcontrols_less_1.default.karmaValue }, \"234\"),\r\n            react_1.default.createElement(\"button\", { className: cardcontrols_less_1.default.down },\r\n                react_1.default.createElement(\"svg\", { width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                    react_1.default.createElement(\"path\", { d: \"M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z\", fill: \"#C4C4C4\" })))),\r\n        react_1.default.createElement(\"button\", { className: cardcontrols_less_1.default.commentsButton },\r\n            react_1.default.createElement(\"svg\", { width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                react_1.default.createElement(\"path\", { d: \"M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z\", fill: \"#C4C4C4\" })),\r\n            react_1.default.createElement(\"span\", { className: cardcontrols_less_1.default.commentsNumber }, data.num_comments)),\r\n        react_1.default.createElement(\"div\", { className: cardcontrols_less_1.default.actions },\r\n            react_1.default.createElement(\"button\", { className: cardcontrols_less_1.default.shareButton },\r\n                react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                    react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\r\n                    react_1.default.createElement(\"path\", { d: \"M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z\", fill: \"white\" }))),\r\n            react_1.default.createElement(\"button\", { className: cardcontrols_less_1.default.saveButton },\r\n                react_1.default.createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                    react_1.default.createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#C4C4C4\" }),\r\n                    react_1.default.createElement(\"path\", { d: \"M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5 7 5.45 7 6V12C7 12.55 7.45 13 8 13H14C14.55 13 15 12.55 15 12V6C15 5.45 14.55 5 14 5ZM13.5 9.5H11.5V11.5H10.5V9.5H8.5V8.5H10.5V6.5H11.5V8.5H13.5V9.5Z\", fill: \"white\" }))))));\r\n}\r\nexports.default = CardControls;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardControls/CardControls.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardControls/cardcontrols.less":
/*!******************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardControls/cardcontrols.less ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"controls\": \"cardcontrols__controls--3p2Ic\",\n\t\"actions\": \"cardcontrols__actions--QEQET\",\n\t\"shareButton\": \"cardcontrols__shareButton--1bAVP\",\n\t\"saveButton\": \"cardcontrols__saveButton--39XBQ\",\n\t\"karmaCounter\": \"cardcontrols__karmaCounter--eYGNU\",\n\t\"karmaValue\": \"cardcontrols__karmaValue--2Rd3Z\",\n\t\"commentsButton\": \"cardcontrols__commentsButton--2Ao1e\",\n\t\"commentsNumber\": \"cardcontrols__commentsNumber--2Q38q\",\n\t\"up\": \"cardcontrols__up--1xCPH\",\n\t\"down\": \"cardcontrols__down--Yc2C8\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardControls/cardcontrols.less?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardControls/index.ts":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/CardControls/index.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar CardControls_1 = __importDefault(__webpack_require__(/*! ./CardControls */ \"./src/shared/CardsList/Card/CardControls/CardControls.tsx\"));\r\nexports.default = CardControls_1.default;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardControls/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardImage/CardImage.tsx":
/*!***********************************************************!*\
  !*** ./src/shared/CardsList/Card/CardImage/CardImage.tsx ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar cardimage_less_1 = __importDefault(__webpack_require__(/*! ./cardimage.less */ \"./src/shared/CardsList/Card/CardImage/cardimage.less\"));\r\nfunction CardImage(_a) {\r\n    var data = _a.data;\r\n    if (data.thumbnail !== 'default') {\r\n        return (react_1.default.createElement(\"div\", { className: cardimage_less_1.default.preview },\r\n            react_1.default.createElement(\"img\", { className: cardimage_less_1.default.previewImg, src: data.thumbnail })));\r\n    }\r\n    else\r\n        return (react_1.default.createElement(\"div\", { className: cardimage_less_1.default.preview },\r\n            react_1.default.createElement(\"div\", { className: cardimage_less_1.default.fakePreview })));\r\n}\r\nexports.default = CardImage;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardImage/CardImage.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardImage/cardimage.less":
/*!************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardImage/cardimage.less ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"preview\": \"cardimage__preview--17ZvV\",\n\t\"previewImg\": \"cardimage__previewImg--1EqvD\",\n\t\"fakePreview\": \"cardimage__fakePreview--Ea3QI\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardImage/cardimage.less?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardImage/index.ts":
/*!******************************************************!*\
  !*** ./src/shared/CardsList/Card/CardImage/index.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar CardImage_1 = __importDefault(__webpack_require__(/*! ./CardImage */ \"./src/shared/CardsList/Card/CardImage/CardImage.tsx\"));\r\nexports.default = CardImage_1.default;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CardImage/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/Menu.tsx":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/Menu.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar menu_less_1 = __importDefault(__webpack_require__(/*! ./menu.less */ \"./src/shared/CardsList/Card/Menu/menu.less\"));\r\nvar Dropdown_1 = __importDefault(__webpack_require__(/*! ../../../Dropdown */ \"./src/shared/Dropdown/index.ts\"));\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ../../../../utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\r\nvar Icons_1 = __webpack_require__(/*! ../../../Icons */ \"./src/shared/Icons/index.ts\");\r\nvar Text_1 = __importStar(__webpack_require__(/*! ../../../Text/Text */ \"./src/shared/Text/Text.tsx\"));\r\nvar MenuItemsList_1 = __importDefault(__webpack_require__(/*! ./MenuItemsList */ \"./src/shared/CardsList/Card/Menu/MenuItemsList/index.ts\"));\r\nvar LIST = [\r\n    { text: 'Скрыть', icon: 'block' },\r\n    { text: 'Пожаловаться', icon: 'warning' },\r\n    { text: 'Закрыть' }\r\n    //].map((item: {value: string})=>({...item, id: generateRandomString()}));\r\n    //].map(assignId);\r\n].map(generateRandomIndex_1.generateId);\r\nfunction CardMenu() {\r\n    var _a = react_1.default.useState(LIST), list = _a[0], setList = _a[1];\r\n    var _b = react_1.default.useState(false), menuOpen = _b[0], setMenuOpen = _b[1];\r\n    var handleItemClick = function (id) {\r\n        console.log(\"clicked\", id);\r\n    };\r\n    var handleButtonClick = function () {\r\n        //setMenuOpen(!menuOpen)\r\n    };\r\n    var button = (react_1.default.createElement(\"button\", { className: menu_less_1.default.menuButton, onClick: handleButtonClick },\r\n        react_1.default.createElement(Icons_1.MenuIcon, null)));\r\n    return (react_1.default.createElement(\"div\", { className: menu_less_1.default.menu },\r\n        react_1.default.createElement(Dropdown_1.default, { onOpen: function () { return console.log('opened'); }, onClose: function () { return console.log('closed'); }, \r\n            // isOpen={menuOpen} \r\n            button: button },\r\n            react_1.default.createElement(\"div\", { className: menu_less_1.default.dropdown },\r\n                react_1.default.createElement(MenuItemsList_1.default, { postId: '1234' }),\r\n                react_1.default.createElement(\"button\", { className: menu_less_1.default.closeButton },\r\n                    react_1.default.createElement(Text_1.default, { As: \"div\", mobileSize: 12, size: 14, color: Text_1.EColor.grey66 }, \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\"))))));\r\n}\r\nexports.default = CardMenu;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/Menu.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/MenuItemsList/MenuItemsList.tsx":
/*!************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/MenuItemsList/MenuItemsList.tsx ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Icons_1 = __webpack_require__(/*! ../../../../Icons */ \"./src/shared/Icons/index.ts\");\r\nvar Icon_1 = __importDefault(__webpack_require__(/*! ../../../../Icon */ \"./src/shared/Icon/index.ts\"));\r\nvar Text_1 = __importStar(__webpack_require__(/*! ../../../../Text */ \"./src/shared/Text/index.ts\"));\r\n//import Text, {EColor} from '../../../../Text/Text';\r\nvar menuitemslist_less_1 = __importDefault(__webpack_require__(/*! ./menuitemslist.less */ \"./src/shared/CardsList/Card/Menu/MenuItemsList/menuitemslist.less\"));\r\nfunction MenuItemsList(_a) {\r\n    var postId = _a.postId;\r\n    return (react_1.default.createElement(\"ul\", { className: menuitemslist_less_1.default.menuItemsList },\r\n        react_1.default.createElement(\"li\", { className: menuitemslist_less_1.default.menuItem, onClick: function () { return console.log(postId); } },\r\n            react_1.default.createElement(Icon_1.default, { name: 'comment', size: 14 }),\r\n            react_1.default.createElement(Text_1.default, { size: 12, tabletSize: 14, desktopSize: 14, color: Text_1.EColor.grey99 }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\\u0438\\u0438\")),\r\n        react_1.default.createElement(\"div\", { className: menuitemslist_less_1.default.divider }),\r\n        react_1.default.createElement(\"li\", { className: menuitemslist_less_1.default.menuItem, onClick: function () { return console.log(postId); } },\r\n            react_1.default.createElement(Icons_1.ShareIcon, null),\r\n            react_1.default.createElement(Text_1.default, { size: 12, tabletSize: 14, desktopSize: 14, color: Text_1.EColor.grey99 }, \"\\u041F\\u043E\\u0434\\u0435\\u043B\\u0438\\u0442\\u044C\\u0441\\u044F\")),\r\n        react_1.default.createElement(\"div\", { className: menuitemslist_less_1.default.divider }),\r\n        react_1.default.createElement(\"li\", { className: menuitemslist_less_1.default.menuItem, onClick: function () { return console.log(postId); } },\r\n            react_1.default.createElement(Icons_1.BlockIcon, null),\r\n            react_1.default.createElement(Text_1.default, { size: 12, tabletSize: 14, desktopSize: 14, color: Text_1.EColor.grey99 }, \"\\u0421\\u043A\\u0440\\u044B\\u0442\\u044C\")),\r\n        react_1.default.createElement(\"div\", { className: menuitemslist_less_1.default.divider }),\r\n        react_1.default.createElement(\"li\", { className: menuitemslist_less_1.default.menuItem, onClick: function () { return console.log(postId); } },\r\n            react_1.default.createElement(Icons_1.SaveIcon, null),\r\n            react_1.default.createElement(Text_1.default, { size: 12, tabletSize: 14, desktopSize: 14, color: Text_1.EColor.grey99 }, \"\\u0421\\u043E\\u0445\\u0440\\u0430\\u043D\\u0438\\u0442\\u044C\")),\r\n        react_1.default.createElement(\"div\", { className: menuitemslist_less_1.default.divider }),\r\n        react_1.default.createElement(\"li\", { className: menuitemslist_less_1.default.menuItem },\r\n            react_1.default.createElement(Icons_1.WarningIcon, null),\r\n            react_1.default.createElement(Text_1.default, { size: 12, tabletSize: 14, desktopSize: 14, color: Text_1.EColor.grey99 }, \"\\u041F\\u043E\\u0436\\u0430\\u043B\\u043E\\u0432\\u0430\\u0442\\u044C\\u0441\\u044F\"))));\r\n}\r\nexports.default = MenuItemsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/MenuItemsList/MenuItemsList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/MenuItemsList/index.ts":
/*!***************************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/MenuItemsList/index.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar MenuItemsList_1 = __importDefault(__webpack_require__(/*! ./MenuItemsList */ \"./src/shared/CardsList/Card/Menu/MenuItemsList/MenuItemsList.tsx\"));\r\nexports.default = MenuItemsList_1.default;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/MenuItemsList/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/MenuItemsList/menuitemslist.less":
/*!*************************************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/MenuItemsList/menuitemslist.less ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"menuItemsList\": \"menuitemslist__menuItemsList--49XIW\",\n\t\"menuItem\": \"menuitemslist__menuItem--1s254\",\n\t\"divider\": \"menuitemslist__divider--1lWmc\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/MenuItemsList/menuitemslist.less?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/index.ts":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Menu_1 = __importDefault(__webpack_require__(/*! ./Menu */ \"./src/shared/CardsList/Card/Menu/Menu.tsx\"));\r\nexports.default = Menu_1.default;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/menu.less":
/*!**************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/menu.less ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"menu\": \"menu__menu--1n12e\",\n\t\"menuButton\": \"menu__menuButton--2EYOj\",\n\t\"dropdown\": \"menu__dropdown--3-G8P\",\n\t\"closeButton\": \"menu__closeButton--38ptB\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/menu.less?");

/***/ }),

/***/ "./src/shared/CardsList/Card/card.less":
/*!*********************************************!*\
  !*** ./src/shared/CardsList/Card/card.less ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"card\": \"card__card--3x2Yf\",\n\t\"textContent\": \"card__textContent--1c236\",\n\t\"userLink\": \"card__userLink--2TG_m\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/card.less?");

/***/ }),

/***/ "./src/shared/CardsList/Card/index.ts":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Card_1 = __importDefault(__webpack_require__(/*! ./Card */ \"./src/shared/CardsList/Card/Card.tsx\"));\r\nexports.default = Card_1.default;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/CardsList.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/CardsList.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar cardslist_less_1 = __importDefault(__webpack_require__(/*! ./cardslist.less */ \"./src/shared/CardsList/cardslist.less\"));\r\nvar Card_1 = __importDefault(__webpack_require__(/*! ./Card */ \"./src/shared/CardsList/Card/index.ts\"));\r\nvar usePostsData_1 = __webpack_require__(/*! ../../hooks/usePostsData */ \"./src/hooks/usePostsData.ts\");\r\nfunction CardsList() {\r\n    var posts = usePostsData_1.usePostsData()[0];\r\n    var items = posts.map(function (post) {\r\n        return react_1.default.createElement(Card_1.default, { data: post.data, key: post.data.id });\r\n    });\r\n    return (react_1.default.createElement(\"ul\", { className: cardslist_less_1.default.cardslist }, items));\r\n}\r\nexports.default = CardsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardsList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/cardslist.less":
/*!*********************************************!*\
  !*** ./src/shared/CardsList/cardslist.less ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"cardslist\": \"cardslist__cardslist--mdxkl\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/cardslist.less?");

/***/ }),

/***/ "./src/shared/CardsList/index.ts":
/*!***************************************!*\
  !*** ./src/shared/CardsList/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar CardsList_1 = __importDefault(__webpack_require__(/*! ./CardsList */ \"./src/shared/CardsList/CardsList.tsx\"));\r\nexports.default = CardsList_1.default;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/index.ts?");

/***/ }),

/***/ "./src/shared/CommentForm/CommentForm.tsx":
/*!************************************************!*\
  !*** ./src/shared/CommentForm/CommentForm.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar commentContext_1 = __webpack_require__(/*! ../context/commentContext */ \"./src/shared/context/commentContext.ts\");\r\nvar commentform_less_1 = __importDefault(__webpack_require__(/*! ./commentform.less */ \"./src/shared/CommentForm/commentform.less\"));\r\nfunction CommentForm() {\r\n    var _a = react_1.useContext(commentContext_1.commentContext), value = _a.value, onChange = _a.onChange;\r\n    function handleChange(event) {\r\n        onChange(event.target.value);\r\n    }\r\n    function handleSubmit(event) {\r\n        event.preventDefault();\r\n        console.log(value);\r\n    }\r\n    return (react_1.default.createElement(\"form\", { className: commentform_less_1.default.form, onSubmit: handleSubmit },\r\n        react_1.default.createElement(\"textarea\", { className: commentform_less_1.default.input, value: value, onChange: handleChange }),\r\n        react_1.default.createElement(\"button\", { type: \"submit\", className: commentform_less_1.default.button }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\")));\r\n}\r\nexports.default = CommentForm;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/CommentForm.tsx?");

/***/ }),

/***/ "./src/shared/CommentForm/commentform.less":
/*!*************************************************!*\
  !*** ./src/shared/CommentForm/commentform.less ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"form\": \"commentform__form--3UJN2\",\n\t\"input\": \"commentform__input--32X9b\",\n\t\"button\": \"commentform__button--1LY8t\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/commentform.less?");

/***/ }),

/***/ "./src/shared/CommentForm/index.ts":
/*!*****************************************!*\
  !*** ./src/shared/CommentForm/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar CommentForm_1 = __importDefault(__webpack_require__(/*! ./CommentForm */ \"./src/shared/CommentForm/CommentForm.tsx\"));\r\nexports.default = CommentForm_1.default;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/index.ts?");

/***/ }),

/***/ "./src/shared/CommentList/CommentItem/CommentItem.tsx":
/*!************************************************************!*\
  !*** ./src/shared/CommentList/CommentItem/CommentItem.tsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Icons_1 = __webpack_require__(/*! ../../Icons */ \"./src/shared/Icons/index.ts\");\r\nvar commentitem_less_1 = __importDefault(__webpack_require__(/*! ./commentitem.less */ \"./src/shared/CommentList/CommentItem/commentitem.less\"));\r\nvar ResponseComment_1 = __importDefault(__webpack_require__(/*! ../ResponseComment */ \"./src/shared/CommentList/ResponseComment/index.ts\"));\r\n//import {BlockIcon, WarningIcon, CommentIcon, ShareIcon, SaveIcon} from '../../../../Icons';\r\nfunction CommentItem() {\r\n    var _a = react_1.default.useState(false), openResponseComment = _a[0], setOpenResponseComment = _a[1];\r\n    return (react_1.default.createElement(\"li\", { className: commentitem_less_1.default.commentItem },\r\n        react_1.default.createElement(\"div\", { className: commentitem_less_1.default.commentCaption },\r\n            react_1.default.createElement(\"img\", { className: commentitem_less_1.default.avatar, src: \"https://cdn.dribbble.com/users/133681/avatars/mini/46a5fbb029199915f49a465fb2dc4ac9.png?1589805794\", alt: \"avatar\" }),\r\n            react_1.default.createElement(\"div\", { className: commentitem_less_1.default.name }, \"\\u0412\\u0430\\u0441\\u0438\\u043B\\u0438\\u0439 \\u0420\\u043E\\u0433\\u043E\\u0432\"),\r\n            react_1.default.createElement(\"div\", { className: commentitem_less_1.default.date }, \"2 \\u0447\\u0430\\u0441\\u0430 \\u043D\\u0430\\u0437\\u0430\\u0434\"),\r\n            react_1.default.createElement(\"div\", { className: commentitem_less_1.default.group }, \"\\u041B\\u0438\\u0433\\u0430 \\u043F\\u0440\\u0430\\u0432\\u043E\\u043E\\u0445\\u0440\\u0430\\u043D\\u0438\\u0442\\u0435\\u043B\\u0435\\u0439\")),\r\n        react_1.default.createElement(\"div\", { className: commentitem_less_1.default.commentBody }, \"asdgf wg ertgherth tybh werth rtyj yun fgb erth rtjk rythn dfgh ertjhrt yj\"),\r\n        react_1.default.createElement(\"div\", { className: commentitem_less_1.default.commentButtons },\r\n            react_1.default.createElement(\"button\", { className: commentitem_less_1.default.button, onClick: function () { return setOpenResponseComment(true); } },\r\n                react_1.default.createElement(Icons_1.CommentIcon, null),\r\n                react_1.default.createElement(\"span\", null, \"\\u041E\\u0442\\u0432\\u0435\\u0442\\u0438\\u0442\\u044C\")),\r\n            react_1.default.createElement(\"button\", { className: commentitem_less_1.default.button },\r\n                react_1.default.createElement(Icons_1.ShareIcon, null),\r\n                react_1.default.createElement(\"span\", null, \"\\u041F\\u043E\\u0434\\u0435\\u043B\\u0438\\u0442\\u044C\\u0441\\u044F\")),\r\n            react_1.default.createElement(\"button\", { className: commentitem_less_1.default.button },\r\n                react_1.default.createElement(Icons_1.WarningIcon, null),\r\n                react_1.default.createElement(\"span\", null, \"\\u041F\\u043E\\u0436\\u0430\\u043B\\u043E\\u0432\\u0430\\u0442\\u044C\\u0441\\u044F\"))),\r\n        openResponseComment && react_1.default.createElement(ResponseComment_1.default, { onClose: function () { return setOpenResponseComment(false); } })));\r\n}\r\nexports.default = CommentItem;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentList/CommentItem/CommentItem.tsx?");

/***/ }),

/***/ "./src/shared/CommentList/CommentItem/commentitem.less":
/*!*************************************************************!*\
  !*** ./src/shared/CommentList/CommentItem/commentitem.less ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"commentItem\": \"commentitem__commentItem--2m-9M\",\n\t\"commentCaption\": \"commentitem__commentCaption--3frF9\",\n\t\"commentBody\": \"commentitem__commentBody--B-PkJ\",\n\t\"commentButtons\": \"commentitem__commentButtons--1AfvC\",\n\t\"avatar\": \"commentitem__avatar--qB1t1\",\n\t\"name\": \"commentitem__name--4DpWj\",\n\t\"date\": \"commentitem__date--1jMTx\",\n\t\"group\": \"commentitem__group--bdNNz\",\n\t\"button\": \"commentitem__button--eDJcb\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/CommentList/CommentItem/commentitem.less?");

/***/ }),

/***/ "./src/shared/CommentList/CommentItem/index.ts":
/*!*****************************************************!*\
  !*** ./src/shared/CommentList/CommentItem/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar CommentItem_1 = __importDefault(__webpack_require__(/*! ./CommentItem */ \"./src/shared/CommentList/CommentItem/CommentItem.tsx\"));\r\nexports.default = CommentItem_1.default;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentList/CommentItem/index.ts?");

/***/ }),

/***/ "./src/shared/CommentList/CommentList.tsx":
/*!************************************************!*\
  !*** ./src/shared/CommentList/CommentList.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar CommentItem_1 = __importDefault(__webpack_require__(/*! ./CommentItem */ \"./src/shared/CommentList/CommentItem/index.ts\"));\r\nvar commentlist_less_1 = __importDefault(__webpack_require__(/*! ./commentlist.less */ \"./src/shared/CommentList/commentlist.less\"));\r\nfunction CommentList() {\r\n    return (react_1.default.createElement(\"ul\", { className: commentlist_less_1.default.list },\r\n        react_1.default.createElement(CommentItem_1.default, null)));\r\n}\r\nexports.default = CommentList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentList/CommentList.tsx?");

/***/ }),

/***/ "./src/shared/CommentList/ResponseComment/ResponseComment.tsx":
/*!********************************************************************!*\
  !*** ./src/shared/CommentList/ResponseComment/ResponseComment.tsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar responsecomment_less_1 = __importDefault(__webpack_require__(/*! ./responsecomment.less */ \"./src/shared/CommentList/ResponseComment/responsecomment.less\"));\r\nfunction ResponseComment(props) {\r\n    var ref = react_1.useRef(null);\r\n    var _a = react_1.useState(''), value = _a[0], setValue = _a[1];\r\n    function handleChange(event) {\r\n        setValue(event.target.value);\r\n    }\r\n    function handleSubmit(event) {\r\n        var _a;\r\n        event.preventDefault();\r\n        console.log(value);\r\n        (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props);\r\n    }\r\n    react_1.useEffect(function () {\r\n        ref.current && ref.current.focus();\r\n    }, []);\r\n    return (react_1.default.createElement(\"div\", { className: responsecomment_less_1.default.ResponseComment },\r\n        react_1.default.createElement(\"div\", { className: responsecomment_less_1.default.ResponseCommentCaption },\r\n            react_1.default.createElement(\"img\", { className: responsecomment_less_1.default.avatar, src: \"https://cdn.dribbble.com/users/133681/avatars/mini/46a5fbb029199915f49a465fb2dc4ac9.png?1589805794\", alt: \"avatar\" }),\r\n            react_1.default.createElement(\"div\", { className: responsecomment_less_1.default.name }, \"\\u0412\\u0430\\u0441\\u0438\\u043B\\u0438\\u0439 \\u0420\\u043E\\u0433\\u043E\\u0432\")),\r\n        react_1.default.createElement(\"form\", { className: responsecomment_less_1.default.form, onSubmit: handleSubmit },\r\n            react_1.default.createElement(\"textarea\", { className: responsecomment_less_1.default.input, value: value, onChange: handleChange, ref: ref }),\r\n            react_1.default.createElement(\"button\", { type: \"submit\", className: responsecomment_less_1.default.button }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\"))));\r\n}\r\nexports.default = ResponseComment;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentList/ResponseComment/ResponseComment.tsx?");

/***/ }),

/***/ "./src/shared/CommentList/ResponseComment/index.ts":
/*!*********************************************************!*\
  !*** ./src/shared/CommentList/ResponseComment/index.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ResponseComment_1 = __importDefault(__webpack_require__(/*! ./ResponseComment */ \"./src/shared/CommentList/ResponseComment/ResponseComment.tsx\"));\r\nexports.default = ResponseComment_1.default;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentList/ResponseComment/index.ts?");

/***/ }),

/***/ "./src/shared/CommentList/ResponseComment/responsecomment.less":
/*!*********************************************************************!*\
  !*** ./src/shared/CommentList/ResponseComment/responsecomment.less ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"ResponseComment\": \"responsecomment__ResponseComment--1cjRh\",\n\t\"ResponseCommentCaption\": \"responsecomment__ResponseCommentCaption--2jAm3\",\n\t\"avatar\": \"responsecomment__avatar--3zoCM\",\n\t\"name\": \"responsecomment__name--1BeMb\",\n\t\"form\": \"responsecomment__form--zzgrZ\",\n\t\"input\": \"responsecomment__input--tJJei\",\n\t\"button\": \"responsecomment__button--14d9-\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/CommentList/ResponseComment/responsecomment.less?");

/***/ }),

/***/ "./src/shared/CommentList/commentlist.less":
/*!*************************************************!*\
  !*** ./src/shared/CommentList/commentlist.less ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"list\": \"commentlist__list--9of9v\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/CommentList/commentlist.less?");

/***/ }),

/***/ "./src/shared/CommentList/index.ts":
/*!*****************************************!*\
  !*** ./src/shared/CommentList/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar CommentList_1 = __importDefault(__webpack_require__(/*! ./CommentList */ \"./src/shared/CommentList/CommentList.tsx\"));\r\nexports.default = CommentList_1.default;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentList/index.ts?");

/***/ }),

/***/ "./src/shared/Content/Content.tsx":
/*!****************************************!*\
  !*** ./src/shared/Content/Content.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar content_less_1 = __importDefault(__webpack_require__(/*! ./content.less */ \"./src/shared/Content/content.less\"));\r\nfunction Content(_a) {\r\n    var children = _a.children;\r\n    return (react_1.default.createElement(\"main\", { className: content_less_1.default.content }, children));\r\n}\r\nexports.default = Content;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Content/content.less":
/*!*****************************************!*\
  !*** ./src/shared/Content/content.less ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"content\": \"content__content--2Zn57\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Content/content.less?");

/***/ }),

/***/ "./src/shared/Content/index.ts":
/*!*************************************!*\
  !*** ./src/shared/Content/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Content_1 = __importDefault(__webpack_require__(/*! ./Content */ \"./src/shared/Content/Content.tsx\"));\r\nexports.default = Content_1.default;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/index.ts?");

/***/ }),

/***/ "./src/shared/Dropdown/Dropdown.tsx":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/Dropdown.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\r\nvar dropdown_less_1 = __importDefault(__webpack_require__(/*! ./dropdown.less */ \"./src/shared/Dropdown/dropdown.less\"));\r\n;\r\nvar NOOP = function () { }; //чтобы onOpen и onClose срабатывали всегда, чтобы TS не выдавал ошибку в случае отсутствия этих функций\r\nfunction Dropdown(_a) {\r\n    var button = _a.button, children = _a.children, isOpen = _a.isOpen, _b = _a.onClose, onClose = _b === void 0 ? NOOP : _b, _c = _a.onOpen, onOpen = _c === void 0 ? NOOP : _c;\r\n    var _d = react_1.default.useState(isOpen), isDropdownOpen = _d[0], setIsDropdownOpen = _d[1];\r\n    var _e = react_1.default.useState({ top: '0', left: '0' }), isDropdownCoord = _e[0], setIsDropdownCoord = _e[1];\r\n    var containerRef = react_1.default.useRef(null);\r\n    react_1.default.useEffect(function () {\r\n        var _a;\r\n        var head = (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();\r\n        var headBottom = head === null || head === void 0 ? void 0 : head.bottom;\r\n        var headRight = head === null || head === void 0 ? void 0 : head.right;\r\n        setIsDropdownCoord({ top: headBottom + 'px', left: headRight + 'px' });\r\n        //console.log('coord', isDropdownCoord);\r\n    }, [isDropdownOpen]);\r\n    react_1.default.useEffect(function () { return setIsDropdownOpen(isOpen); }, [isOpen]);\r\n    react_1.default.useEffect(function () { return isDropdownOpen ? onOpen() : onClose(); }, [isDropdownOpen]);\r\n    var handleOpen = function () {\r\n        if (isOpen === undefined) {\r\n            // если isOpen не передается, хотим, чтобы список работал автоматически\r\n            setIsDropdownOpen(!isDropdownOpen);\r\n        }\r\n    };\r\n    var node = document.querySelector('#modal_root');\r\n    if (!node)\r\n        return null;\r\n    var drop = react_dom_1.default.createPortal((react_1.default.createElement(react_1.default.Fragment, null, isDropdownOpen && (react_1.default.createElement(\"div\", { className: dropdown_less_1.default.listContainer, style: isDropdownCoord },\r\n        react_1.default.createElement(\"div\", { className: dropdown_less_1.default.list, onClick: function () { return setIsDropdownOpen(false); } }, children))))), node);\r\n    return (react_1.default.createElement(\"div\", { className: dropdown_less_1.default.container, ref: containerRef },\r\n        react_1.default.createElement(\"div\", { onClick: handleOpen }, button),\r\n        isDropdownOpen && drop));\r\n}\r\nexports.default = Dropdown;\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/Dropdown.tsx?");

/***/ }),

/***/ "./src/shared/Dropdown/dropdown.less":
/*!*******************************************!*\
  !*** ./src/shared/Dropdown/dropdown.less ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"container\": \"dropdown__container--2mwQP\",\n\t\"listContainer\": \"dropdown__listContainer--3l3i1\",\n\t\"list\": \"dropdown__list--2DXPG\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/dropdown.less?");

/***/ }),

/***/ "./src/shared/Dropdown/index.ts":
/*!**************************************!*\
  !*** ./src/shared/Dropdown/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Dropdown_1 = __importDefault(__webpack_require__(/*! ./Dropdown */ \"./src/shared/Dropdown/Dropdown.tsx\"));\r\nexports.default = Dropdown_1.default;\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/index.ts?");

/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar header_less_1 = __importDefault(__webpack_require__(/*! ./header.less */ \"./src/shared/Header/header.less\"));\r\nvar SearchBlock_1 = __importDefault(__webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/index.ts\"));\r\nvar SortBlock_1 = __importDefault(__webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/index.ts\"));\r\nvar ThreadTitle_1 = __importDefault(__webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/index.ts\"));\r\nfunction Header() {\r\n    return (react_1.default.createElement(\"header\", { className: header_less_1.default.header },\r\n        react_1.default.createElement(SearchBlock_1.default, null),\r\n        react_1.default.createElement(ThreadTitle_1.default, null),\r\n        react_1.default.createElement(SortBlock_1.default, null)));\r\n}\r\nexports.default = Header;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/SearchBlock.less":
/*!********************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.less ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"searchBlock\": \"SearchBlock__searchBlock--a9kwC\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/SearchBlock.less?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/SearchBlock.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar SearchBlock_less_1 = __importDefault(__webpack_require__(/*! ./SearchBlock.less */ \"./src/shared/Header/SearchBlock/SearchBlock.less\"));\r\nvar UserBlock_1 = __importDefault(__webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/index.ts\"));\r\n//import {useUserData} from '../../../hooks/useUserData';\r\nvar userContext_1 = __webpack_require__(/*! ../../context/userContext */ \"./src/shared/context/userContext.tsx\");\r\nfunction SearchBlock() {\r\n    //const userData = useContext(userContext)\r\n    var _a = react_1.useContext(userContext_1.userContext), iconImg = _a.iconImg, name = _a.name;\r\n    return (react_1.default.createElement(\"div\", { className: SearchBlock_less_1.default.searchBlock },\r\n        \"Search block\",\r\n        react_1.default.createElement(UserBlock_1.default, { avatarSrc: iconImg, username: name })));\r\n}\r\nexports.default = SearchBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar userblock_less_1 = __importDefault(__webpack_require__(/*! ./userblock.less */ \"./src/shared/Header/SearchBlock/UserBlock/userblock.less\"));\r\nvar Break_1 = __importDefault(__webpack_require__(/*! ../../../Break */ \"./src/shared/Break/index.ts\"));\r\nvar Text_1 = __importStar(__webpack_require__(/*! ../../../Text */ \"./src/shared/Text/index.ts\"));\r\nvar Icons_1 = __webpack_require__(/*! ../../../Icons */ \"./src/shared/Icons/index.ts\");\r\nfunction UserBlock(_a) {\r\n    var avatarSrc = _a.avatarSrc, username = _a.username;\r\n    return (react_1.default.createElement(\"a\", { href: \"https://www.reddit.com/api/v1/authorize?client_id=b0t5J709nNhl3Q&response_type=code&\\r\\n\\t\\tstate=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity\", className: userblock_less_1.default.userBox },\r\n        react_1.default.createElement(\"div\", { className: userblock_less_1.default.avatarBox }, avatarSrc ? react_1.default.createElement(\"img\", { src: avatarSrc, alt: \"user avatar\", className: userblock_less_1.default.avatarImage })\r\n            : react_1.default.createElement(Icons_1.AnonIcon, null)),\r\n        react_1.default.createElement(\"div\", { className: userblock_less_1.default.username },\r\n            react_1.default.createElement(Break_1.default, { size: 12 }),\r\n            react_1.default.createElement(Text_1.default, { size: 20, color: username ? Text_1.EColor.black : Text_1.EColor.grey99 }, username || 'Аноним'))));\r\n}\r\nexports.default = UserBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/index.ts":
/*!**********************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/index.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar UserBlock_1 = __importDefault(__webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx\"));\r\nexports.default = UserBlock_1.default;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/userblock.less":
/*!****************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/userblock.less ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"userBox\": \"userblock__userBox--3lzeE\",\n\t\"avatarBox\": \"userblock__avatarBox--2P0zS\",\n\t\"avatarImage\": \"userblock__avatarImage--1ygtq\",\n\t\"username\": \"userblock__username--3VTRM\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/userblock.less?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/SearchBlock/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar SearchBlock_1 = __importDefault(__webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/SearchBlock.tsx\"));\r\nexports.default = SearchBlock_1.default;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/SortBlock.tsx":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/SortBlock.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar sortblock_less_1 = __importDefault(__webpack_require__(/*! ./sortblock.less */ \"./src/shared/Header/SortBlock/sortblock.less\"));\r\nfunction SortBlock() {\r\n    return (react_1.default.createElement(\"div\", { className: sortblock_less_1.default.sortblock }, \"SortBlock dropdown\"));\r\n}\r\nexports.default = SortBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/SortBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/index.ts":
/*!**********************************************!*\
  !*** ./src/shared/Header/SortBlock/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar SortBlock_1 = __importDefault(__webpack_require__(/*! ./SortBlock */ \"./src/shared/Header/SortBlock/SortBlock.tsx\"));\r\nexports.default = SortBlock_1.default;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/sortblock.less":
/*!****************************************************!*\
  !*** ./src/shared/Header/SortBlock/sortblock.less ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"sortblock\": \"sortblock__sortblock--3BMEt\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/sortblock.less?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/ThreadTitle.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/ThreadTitle.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar threadtitle_less_1 = __importDefault(__webpack_require__(/*! ./threadtitle.less */ \"./src/shared/Header/ThreadTitle/threadtitle.less\"));\r\nfunction ThreadTitle() {\r\n    return (react_1.default.createElement(\"h1\", { className: threadtitle_less_1.default.threadTitle }, \"Header\"));\r\n}\r\nexports.default = ThreadTitle;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/ThreadTitle.tsx?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar ThreadTitle_1 = __importDefault(__webpack_require__(/*! ./ThreadTitle */ \"./src/shared/Header/ThreadTitle/ThreadTitle.tsx\"));\r\nexports.default = ThreadTitle_1.default;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/index.ts?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/threadtitle.less":
/*!********************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/threadtitle.less ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"threadTitle\": \"threadtitle__threadTitle--1nfVh\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/threadtitle.less?");

/***/ }),

/***/ "./src/shared/Header/header.less":
/*!***************************************!*\
  !*** ./src/shared/Header/header.less ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"header\": \"header__header--2XElO\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Header/header.less?");

/***/ }),

/***/ "./src/shared/Header/index.ts":
/*!************************************!*\
  !*** ./src/shared/Header/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Header_1 = __importDefault(__webpack_require__(/*! ./Header */ \"./src/shared/Header/Header.tsx\"));\r\nexports.default = Header_1.default;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/index.ts?");

/***/ }),

/***/ "./src/shared/Icon/Icon.tsx":
/*!**********************************!*\
  !*** ./src/shared/Icon/Icon.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Icons_1 = __webpack_require__(/*! ../Icons */ \"./src/shared/Icons/index.ts\");\r\nfunction Icon(_a) {\r\n    var name = _a.name, size = _a.size;\r\n    switch (name) {\r\n        case 'comment':\r\n            return react_1.default.createElement(Icons_1.CommentIcon, null);\r\n            break;\r\n        case 'block':\r\n            return react_1.default.createElement(Icons_1.BlockIcon, null);\r\n            break;\r\n        default:\r\n            return react_1.default.createElement(react_1.default.Fragment, null);\r\n    }\r\n}\r\nexports.default = Icon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icon/Icon.tsx?");

/***/ }),

/***/ "./src/shared/Icon/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Icon/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Icon_1 = __importDefault(__webpack_require__(/*! ./Icon */ \"./src/shared/Icon/Icon.tsx\"));\r\nexports.default = Icon_1.default;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icon/index.ts?");

/***/ }),

/***/ "./src/shared/Icons/AnonIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/AnonIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.AnonIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction AnonIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"50\", height: \"50\", viewBox: \"0 0 50 50\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z\", fill: \"#D9D9D9\" })));\r\n}\r\nexports.AnonIcon = AnonIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/AnonIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/BlockIcon.tsx":
/*!****************************************!*\
  !*** ./src/shared/Icons/BlockIcon.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.BlockIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction BlockIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"12\", height: \"12\", viewBox: \"0 0 12 12\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M6 0C2.688 0 0 2.688 0 6C0 9.312 2.688 12 6 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 6 0ZM6 10.8C3.348 10.8 1.2 8.652 1.2 6C1.2 4.89 1.578 3.87 2.214 3.06L8.94 9.786C8.13 10.422 7.11 10.8 6 10.8ZM9.786 8.94L3.06 2.214C3.87 1.578 4.89 1.2 6 1.2C8.652 1.2 10.8 3.348 10.8 6C10.8 7.11 10.422 8.13 9.786 8.94Z\", fill: \"#999999\" })));\r\n}\r\nexports.BlockIcon = BlockIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/BlockIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/CommentIcon.tsx":
/*!******************************************!*\
  !*** ./src/shared/Icons/CommentIcon.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction CommentIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z\", fill: \"#999999\" })));\r\n}\r\nexports.CommentIcon = CommentIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/CommentIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/MenuIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/MenuIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction MenuIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"5\", height: \"20\", viewBox: \"0 0 5 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"2.5\", r: \"2.5\", fill: \"#D9D9D9\" }),\r\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"10\", r: \"2.5\", fill: \"#D9D9D9\" }),\r\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"17.5\", r: \"2.5\", fill: \"#D9D9D9\" })));\r\n}\r\nexports.MenuIcon = MenuIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/MenuIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/SaveIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/SaveIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SaveIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction SaveIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"14\", height: \"14\", viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z\", fill: \"#979797\" })));\r\n}\r\nexports.SaveIcon = SaveIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/SaveIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/ShareIcon.tsx":
/*!****************************************!*\
  !*** ./src/shared/Icons/ShareIcon.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ShareIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction ShareIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"12\", height: \"14\", viewBox: \"0 0 12 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z\", fill: \"#999999\" })));\r\n}\r\nexports.ShareIcon = ShareIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/ShareIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/WarningIcon.tsx":
/*!******************************************!*\
  !*** ./src/shared/Icons/WarningIcon.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.WarningIcon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction WarningIcon() {\r\n    return (react_1.default.createElement(\"svg\", { width: \"14\", height: \"12\", viewBox: \"0 0 14 12\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M0 12H14L7 0L0 12ZM7.63636 10.1053H6.36364V8.8421H7.63636V10.1053ZM7.63636 7.57895H6.36364V5.05263H7.63636V7.57895Z\", fill: \"#999999\" })));\r\n}\r\nexports.WarningIcon = WarningIcon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/WarningIcon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/index.ts":
/*!***********************************!*\
  !*** ./src/shared/Icons/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MenuIcon */ \"./src/shared/Icons/MenuIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./BlockIcon */ \"./src/shared/Icons/BlockIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./WarningIcon */ \"./src/shared/Icons/WarningIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./SaveIcon */ \"./src/shared/Icons/SaveIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./ShareIcon */ \"./src/shared/Icons/ShareIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./CommentIcon */ \"./src/shared/Icons/CommentIcon.tsx\"), exports);\r\n__exportStar(__webpack_require__(/*! ./AnonIcon */ \"./src/shared/Icons/AnonIcon.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Layout.less":
/*!***************************************!*\
  !*** ./src/shared/Layout/Layout.less ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"layout\": \"Layout__layout--Xwq0W\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.less?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Layout_less_1 = __importDefault(__webpack_require__(/*! ./Layout.less */ \"./src/shared/Layout/Layout.less\"));\r\nfunction Layout(_a) {\r\n    var children = _a.children;\r\n    return (react_1.default.createElement(\"div\", { className: Layout_less_1.default.layout }, children));\r\n}\r\nexports.default = Layout;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/Layout/index.ts":
/*!************************************!*\
  !*** ./src/shared/Layout/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Layout_1 = __importDefault(__webpack_require__(/*! ./Layout */ \"./src/shared/Layout/Layout.tsx\"));\r\nexports.default = Layout_1.default;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/index.ts?");

/***/ }),

/***/ "./src/shared/Post/Post.tsx":
/*!**********************************!*\
  !*** ./src/shared/Post/Post.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar post_less_1 = __importDefault(__webpack_require__(/*! ./post.less */ \"./src/shared/Post/post.less\"));\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\r\nvar CommentForm_1 = __importDefault(__webpack_require__(/*! ../CommentForm */ \"./src/shared/CommentForm/index.ts\"));\r\nvar CommentList_1 = __importDefault(__webpack_require__(/*! ../CommentList */ \"./src/shared/CommentList/index.ts\"));\r\nfunction Post(props) {\r\n    var ref = react_1.useRef(null);\r\n    react_1.useEffect(function () {\r\n        function handleClick(event) {\r\n            var _a, _b;\r\n            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\r\n                console.log('clicked!', event.target);\r\n                (_b = props.onClose) === null || _b === void 0 ? void 0 : _b.call(props);\r\n                //про эту последнюю точку f?.() между  ? и (), то она нужна для того, чтобы \r\n                //не перепутать с тернарным оператором. Вот тут тред на эту тему можно \r\n                //почитать https://github.com/claudepache/es-optional-chaining/issues/3\r\n            }\r\n        }\r\n        ;\r\n        document.addEventListener('click', handleClick);\r\n        return function () {\r\n            document.removeEventListener('click', handleClick);\r\n        };\r\n    }, []);\r\n    var node = document.querySelector('#modal_root');\r\n    if (!node)\r\n        return null;\r\n    return react_dom_1.default.createPortal((react_1.default.createElement(\"div\", { className: post_less_1.default.modal, ref: ref },\r\n        react_1.default.createElement(\"h2\", null, \"\\u0421\\u043B\\u0435\\u0434\\u0443\\u0435\\u0442 \\u043E\\u0442\\u043C\\u0435\\u0442\\u0438\\u0442\\u044C, \\u0447\\u0442\\u043E \\u043D\\u043E\\u0432\\u0430\\u044F \\u043C\\u043E\\u0434\\u0435\\u043B\\u044C \\u0447\\u0435\\u0433\\u043E-\\u0442\\u043E \\u0442\\u0430\\u043C \\u0442\\u0430\\u043A\\u043E\\u0435 \"),\r\n        react_1.default.createElement(\"div\", { className: post_less_1.default.content },\r\n            react_1.default.createElement(\"p\", null, \"9.1 \\u0412\\u0435\\u0440\\u0441\\u0442\\u0430\\u0435\\u043C \\u043A\\u0430\\u0440\\u0442\\u043E\\u0447\\u043A\\u0443 \\u043F\\u043E\\u0441\\u0442\\u0430, \\u0438\\u0441\\u043F\\u043E\\u043B\\u044C\\u0437\\u0443\\u044F ReactPortal\"),\r\n            react_1.default.createElement(\"p\", null, \"9.1 \\u0412\\u0435\\u0440\\u0441\\u0442\\u0430\\u0435\\u043C \\u043A\\u0430\\u0440\\u0442\\u043E\\u0447\\u043A\\u0443 \\u043F\\u043E\\u0441\\u0442\\u0430, \\u0438\\u0441\\u043F\\u043E\\u043B\\u044C\\u0437\\u0443\\u044F ReactPortal\"),\r\n            react_1.default.createElement(\"p\", null, \"9.1 \\u0412\\u0435\\u0440\\u0441\\u0442\\u0430\\u0435\\u043C \\u043A\\u0430\\u0440\\u0442\\u043E\\u0447\\u043A\\u0443 \\u043F\\u043E\\u0441\\u0442\\u0430, \\u0438\\u0441\\u043F\\u043E\\u043B\\u044C\\u0437\\u0443\\u044F ReactPortal\"),\r\n            react_1.default.createElement(\"p\", null, \"9.1 \\u0412\\u0435\\u0440\\u0441\\u0442\\u0430\\u0435\\u043C \\u043A\\u0430\\u0440\\u0442\\u043E\\u0447\\u043A\\u0443 \\u043F\\u043E\\u0441\\u0442\\u0430, \\u0438\\u0441\\u043F\\u043E\\u043B\\u044C\\u0437\\u0443\\u044F ReactPortal\")),\r\n        react_1.default.createElement(CommentForm_1.default, null),\r\n        react_1.default.createElement(CommentList_1.default, null))), node);\r\n}\r\nexports.default = Post;\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/Post.tsx?");

/***/ }),

/***/ "./src/shared/Post/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Post/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar Post_1 = __importDefault(__webpack_require__(/*! ./Post */ \"./src/shared/Post/Post.tsx\"));\r\nexports.default = Post_1.default;\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/index.ts?");

/***/ }),

/***/ "./src/shared/Post/post.less":
/*!***********************************!*\
  !*** ./src/shared/Post/post.less ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"modal\": \"post__modal--FF9ss\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Post/post.less?");

/***/ }),

/***/ "./src/shared/Text/Text.tsx":
/*!**********************************!*\
  !*** ./src/shared/Text/Text.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.EColor = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar text_less_1 = __importDefault(__webpack_require__(/*! ./text.less */ \"./src/shared/Text/text.less\"));\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"classnames\"));\r\nvar EColor;\r\n(function (EColor) {\r\n    EColor[\"black\"] = \"black\";\r\n    EColor[\"white\"] = \"white\";\r\n    EColor[\"orange\"] = \"orange\";\r\n    EColor[\"green\"] = \"green\";\r\n    EColor[\"greyF3\"] = \"greyF3\";\r\n    EColor[\"greyF4\"] = \"greyF4\";\r\n    EColor[\"greyD9\"] = \"greyD9\";\r\n    EColor[\"greyC4\"] = \"greyC4\";\r\n    EColor[\"grey99\"] = \"grey99\";\r\n    EColor[\"grey66\"] = \"grey66\";\r\n})(EColor = exports.EColor || (exports.EColor = {}));\r\n;\r\nfunction Text(props) {\r\n    var _a, _b, _c, _d;\r\n    var _e = props.As, As = _e === void 0 ? 'span' : _e, _f = props.color, color = _f === void 0 ? EColor.black : _f, _g = props.bold, bold = _g === void 0 ? false : _g, children = props.children, size = props.size, mobileSize = props.mobileSize, desktopSize = props.desktopSize, tabletSize = props.tabletSize;\r\n    var classes = classnames_1.default(text_less_1.default[\"s\" + size], (_a = {}, _a[text_less_1.default.bold] = bold, _a), (_b = {}, _b[text_less_1.default[\"m\" + mobileSize]] = mobileSize, _b), (_c = {}, _c[text_less_1.default[\"t\" + tabletSize]] = tabletSize, _c), (_d = {}, _d[text_less_1.default[\"d\" + desktopSize]] = desktopSize, _d), text_less_1.default[color]);\r\n    return (react_1.default.createElement(As, { className: classes }, children));\r\n}\r\nexports.default = Text;\r\n\n\n//# sourceURL=webpack:///./src/shared/Text/Text.tsx?");

/***/ }),

/***/ "./src/shared/Text/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Text/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.EColor = void 0;\r\nvar Text_1 = __importStar(__webpack_require__(/*! ./Text */ \"./src/shared/Text/Text.tsx\"));\r\nObject.defineProperty(exports, \"EColor\", { enumerable: true, get: function () { return Text_1.EColor; } });\r\nexports.default = Text_1.default;\r\n\n\n//# sourceURL=webpack:///./src/shared/Text/index.ts?");

/***/ }),

/***/ "./src/shared/Text/text.less":
/*!***********************************!*\
  !*** ./src/shared/Text/text.less ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"s28\": \"text__s28--Qg_Nm\",\n\t\"s20\": \"text__s20--3YU16\",\n\t\"s16\": \"text__s16--mAbkY\",\n\t\"s14\": \"text__s14--3oN4_\",\n\t\"s12\": \"text__s12--1hNk6\",\n\t\"s10\": \"text__s10--3yb5Z\",\n\t\"bold\": \"text__bold--3ZlfO\",\n\t\"black\": \"text__black--2AUHY\",\n\t\"orange\": \"text__orange--1gP3u\",\n\t\"white\": \"text__white--BnG2A\",\n\t\"green\": \"text__green--393Qk\",\n\t\"greyF3\": \"text__greyF3--dXSIX\",\n\t\"greyF4\": \"text__greyF4--xcLDX\",\n\t\"greyD9\": \"text__greyD9--3WeuY\",\n\t\"greyC4\": \"text__greyC4--3mNAn\",\n\t\"grey99\": \"text__grey99--29tsV\",\n\t\"grey66\": \"text__grey66--1bRj7\",\n\t\"m28\": \"text__m28--12H5Z\",\n\t\"m20\": \"text__m20--3KoLV\",\n\t\"m16\": \"text__m16--3PBnP\",\n\t\"m14\": \"text__m14--1m0_h\",\n\t\"m12\": \"text__m12--21t5n\",\n\t\"m10\": \"text__m10--2ob58\",\n\t\"t28\": \"text__t28--3JnVT\",\n\t\"t20\": \"text__t20--yyZIc\",\n\t\"t16\": \"text__t16--qRAxI\",\n\t\"t14\": \"text__t14--1aXiP\",\n\t\"t12\": \"text__t12--10kxH\",\n\t\"t10\": \"text__t10--asRZQ\",\n\t\"d28\": \"text__d28--2kcEE\",\n\t\"d20\": \"text__d20--3fMx4\",\n\t\"d16\": \"text__d16--2xRti\",\n\t\"d14\": \"text__d14--owb8e\",\n\t\"d12\": \"text__d12--3xOtO\",\n\t\"d10\": \"text__d10--2oiWo\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Text/text.less?");

/***/ }),

/***/ "./src/shared/context/commentContext.ts":
/*!**********************************************!*\
  !*** ./src/shared/context/commentContext.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.commentContext = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nexports.commentContext = react_1.default.createContext({\r\n    value: '',\r\n    onChange: function () { }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/shared/context/commentContext.ts?");

/***/ }),

/***/ "./src/shared/context/postsContext.tsx":
/*!*********************************************!*\
  !*** ./src/shared/context/postsContext.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PostsContextProvider = exports.postsContext = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar usePostsData_1 = __webpack_require__(/*! ../../hooks/usePostsData */ \"./src/hooks/usePostsData.ts\");\r\n// interface IPostsContextData {\r\n//     name?: string;\r\n//     iconImg?: string;\r\n// }\r\nexports.postsContext = react_1.default.createContext([]);\r\nfunction PostsContextProvider(_a) {\r\n    var children = _a.children;\r\n    var data = usePostsData_1.usePostsData()[0];\r\n    return (react_1.default.createElement(exports.postsContext.Provider, { value: data }, children));\r\n}\r\nexports.PostsContextProvider = PostsContextProvider;\r\n;\r\n\n\n//# sourceURL=webpack:///./src/shared/context/postsContext.tsx?");

/***/ }),

/***/ "./src/shared/context/tokenContext.ts":
/*!********************************************!*\
  !*** ./src/shared/context/tokenContext.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.tokenContext = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nexports.tokenContext = react_1.default.createContext('');\r\n\n\n//# sourceURL=webpack:///./src/shared/context/tokenContext.ts?");

/***/ }),

/***/ "./src/shared/context/userContext.tsx":
/*!********************************************!*\
  !*** ./src/shared/context/userContext.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserContextProvider = exports.userContext = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar useUserData_1 = __webpack_require__(/*! ../../hooks/useUserData */ \"./src/hooks/useUserData.ts\");\r\nexports.userContext = react_1.default.createContext({});\r\nfunction UserContextProvider(_a) {\r\n    var children = _a.children;\r\n    var data = useUserData_1.useUserData()[0];\r\n    return (react_1.default.createElement(exports.userContext.Provider, { value: data }, children));\r\n}\r\nexports.UserContextProvider = UserContextProvider;\r\n;\r\n\n\n//# sourceURL=webpack:///./src/shared/context/userContext.tsx?");

/***/ }),

/***/ "./src/utils/js/assoc.ts":
/*!*******************************!*\
  !*** ./src/utils/js/assoc.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.assoc = void 0;\r\nfunction assoc(key, value) {\r\n    return function (obj) {\r\n        var _a;\r\n        return (__assign(__assign({}, obj), (_a = {}, _a[key] = value, _a)));\r\n    };\r\n}\r\nexports.assoc = assoc;\r\n\n\n//# sourceURL=webpack:///./src/utils/js/assoc.ts?");

/***/ }),

/***/ "./src/utils/react/generateRandomIndex.ts":
/*!************************************************!*\
  !*** ./src/utils/react/generateRandomIndex.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.generateId = exports.generateRandomString = void 0;\r\nvar assoc_1 = __webpack_require__(/*! ../js/assoc */ \"./src/utils/js/assoc.ts\");\r\n//nanoid\r\nvar generateRandomString = function () { return Math.random().toString(36).substring(2, 15); };\r\nexports.generateRandomString = generateRandomString;\r\n//export const assignId = assoc('id', generateRandomString());//generate... вызывается всего 1 раз когда мы вызываем модуль\r\n//export const generateId = <O extends object>(obj: O) => assignId(obj); //вызывается каждый раз когда мы вызываем функцию\r\n// export const assignId = <O extends object> (obj: O) => assoc('id',generateRandomString())(obj);\r\n// export const generateId = <O extends object> (obj: O) => assignId;\r\nvar generateId = function (obj) { return assoc_1.assoc('id', exports.generateRandomString())(obj); };\r\nexports.generateId = generateId;\r\n/* а лучше всего использовать nanoid */\r\n// import { nanoid } from 'nanoid'\r\n// export const nanoId = nanoid();\r\n\n\n//# sourceURL=webpack:///./src/utils/react/generateRandomIndex.ts?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");\n\n//# sourceURL=webpack:///external_%22classnames%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "hoist-non-react-statics":
/*!******************************************!*\
  !*** external "hoist-non-react-statics" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"hoist-non-react-statics\");\n\n//# sourceURL=webpack:///external_%22hoist-non-react-statics%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-is\");\n\n//# sourceURL=webpack:///external_%22react-is%22?");

/***/ })

/******/ });