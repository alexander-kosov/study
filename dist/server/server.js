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

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\n// css base code, injected by the css-loader\r\n// eslint-disable-next-line func-names\r\nmodule.exports = function (cssWithMappingToString) {\r\n    var list = []; // return the list of modules as css string\r\n    list.toString = function toString() {\r\n        return this.map(function (item) {\r\n            var content = cssWithMappingToString(item);\r\n            if (item[2]) {\r\n                return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\r\n            }\r\n            return content;\r\n        }).join('');\r\n    }; // import a list of modules into the list\r\n    // eslint-disable-next-line func-names\r\n    list.i = function (modules, mediaQuery, dedupe) {\r\n        if (typeof modules === 'string') {\r\n            // eslint-disable-next-line no-param-reassign\r\n            modules = [[null, modules, '']];\r\n        }\r\n        var alreadyImportedModules = {};\r\n        if (dedupe) {\r\n            for (var i = 0; i < this.length; i++) {\r\n                // eslint-disable-next-line prefer-destructuring\r\n                var id = this[i][0];\r\n                if (id != null) {\r\n                    alreadyImportedModules[id] = true;\r\n                }\r\n            }\r\n        }\r\n        for (var _i = 0; _i < modules.length; _i++) {\r\n            var item = [].concat(modules[_i]);\r\n            if (dedupe && alreadyImportedModules[item[0]]) {\r\n                // eslint-disable-next-line no-continue\r\n                continue;\r\n            }\r\n            if (mediaQuery) {\r\n                if (!item[2]) {\r\n                    item[2] = mediaQuery;\r\n                }\r\n                else {\r\n                    item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\r\n                }\r\n            }\r\n            list.push(item);\r\n        }\r\n    };\r\n    return list;\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/history/esm/history.js":
/*!*********************************************!*\
  !*** ./node_modules/history/esm/history.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.createPath = exports.parsePath = exports.locationsAreEqual = exports.createLocation = exports.createMemoryHistory = exports.createHashHistory = exports.createBrowserHistory = void 0;\r\nvar extends_1 = __importDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"@babel/runtime/helpers/esm/extends\"));\r\nvar resolve_pathname_1 = __importDefault(__webpack_require__(/*! resolve-pathname */ \"./node_modules/resolve-pathname/esm/resolve-pathname.js\"));\r\nvar value_equal_1 = __importDefault(__webpack_require__(/*! value-equal */ \"./node_modules/value-equal/esm/value-equal.js\"));\r\nvar tiny_warning_1 = __importDefault(__webpack_require__(/*! tiny-warning */ \"tiny-warning\"));\r\nvar tiny_invariant_1 = __importDefault(__webpack_require__(/*! tiny-invariant */ \"./node_modules/tiny-invariant/dist/tiny-invariant.esm.js\"));\r\nfunction addLeadingSlash(path) {\r\n    return path.charAt(0) === '/' ? path : '/' + path;\r\n}\r\nfunction stripLeadingSlash(path) {\r\n    return path.charAt(0) === '/' ? path.substr(1) : path;\r\n}\r\nfunction hasBasename(path, prefix) {\r\n    return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;\r\n}\r\nfunction stripBasename(path, prefix) {\r\n    return hasBasename(path, prefix) ? path.substr(prefix.length) : path;\r\n}\r\nfunction stripTrailingSlash(path) {\r\n    return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;\r\n}\r\nfunction parsePath(path) {\r\n    var pathname = path || '/';\r\n    var search = '';\r\n    var hash = '';\r\n    var hashIndex = pathname.indexOf('#');\r\n    if (hashIndex !== -1) {\r\n        hash = pathname.substr(hashIndex);\r\n        pathname = pathname.substr(0, hashIndex);\r\n    }\r\n    var searchIndex = pathname.indexOf('?');\r\n    if (searchIndex !== -1) {\r\n        search = pathname.substr(searchIndex);\r\n        pathname = pathname.substr(0, searchIndex);\r\n    }\r\n    return {\r\n        pathname: pathname,\r\n        search: search === '?' ? '' : search,\r\n        hash: hash === '#' ? '' : hash\r\n    };\r\n}\r\nexports.parsePath = parsePath;\r\nfunction createPath(location) {\r\n    var pathname = location.pathname, search = location.search, hash = location.hash;\r\n    var path = pathname || '/';\r\n    if (search && search !== '?')\r\n        path += search.charAt(0) === '?' ? search : \"?\" + search;\r\n    if (hash && hash !== '#')\r\n        path += hash.charAt(0) === '#' ? hash : \"#\" + hash;\r\n    return path;\r\n}\r\nexports.createPath = createPath;\r\nfunction createLocation(path, state, key, currentLocation) {\r\n    var location;\r\n    if (typeof path === 'string') {\r\n        // Two-arg form: push(path, state)\r\n        location = parsePath(path);\r\n        location.state = state;\r\n    }\r\n    else {\r\n        // One-arg form: push(location)\r\n        location = extends_1.default({}, path);\r\n        if (location.pathname === undefined)\r\n            location.pathname = '';\r\n        if (location.search) {\r\n            if (location.search.charAt(0) !== '?')\r\n                location.search = '?' + location.search;\r\n        }\r\n        else {\r\n            location.search = '';\r\n        }\r\n        if (location.hash) {\r\n            if (location.hash.charAt(0) !== '#')\r\n                location.hash = '#' + location.hash;\r\n        }\r\n        else {\r\n            location.hash = '';\r\n        }\r\n        if (state !== undefined && location.state === undefined)\r\n            location.state = state;\r\n    }\r\n    try {\r\n        location.pathname = decodeURI(location.pathname);\r\n    }\r\n    catch (e) {\r\n        if (e instanceof URIError) {\r\n            throw new URIError('Pathname \"' + location.pathname + '\" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');\r\n        }\r\n        else {\r\n            throw e;\r\n        }\r\n    }\r\n    if (key)\r\n        location.key = key;\r\n    if (currentLocation) {\r\n        // Resolve incomplete/relative pathname relative to current location.\r\n        if (!location.pathname) {\r\n            location.pathname = currentLocation.pathname;\r\n        }\r\n        else if (location.pathname.charAt(0) !== '/') {\r\n            location.pathname = resolve_pathname_1.default(location.pathname, currentLocation.pathname);\r\n        }\r\n    }\r\n    else {\r\n        // When there is no prior location and pathname is empty, set it to /\r\n        if (!location.pathname) {\r\n            location.pathname = '/';\r\n        }\r\n    }\r\n    return location;\r\n}\r\nexports.createLocation = createLocation;\r\nfunction locationsAreEqual(a, b) {\r\n    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && value_equal_1.default(a.state, b.state);\r\n}\r\nexports.locationsAreEqual = locationsAreEqual;\r\nfunction createTransitionManager() {\r\n    var prompt = null;\r\n    function setPrompt(nextPrompt) {\r\n         true ? tiny_warning_1.default(prompt == null, 'A history supports only one prompt at a time') : undefined;\r\n        prompt = nextPrompt;\r\n        return function () {\r\n            if (prompt === nextPrompt)\r\n                prompt = null;\r\n        };\r\n    }\r\n    function confirmTransitionTo(location, action, getUserConfirmation, callback) {\r\n        // TODO: If another transition starts while we're still confirming\r\n        // the previous one, we may end up in a weird state. Figure out the\r\n        // best way to handle this.\r\n        if (prompt != null) {\r\n            var result = typeof prompt === 'function' ? prompt(location, action) : prompt;\r\n            if (typeof result === 'string') {\r\n                if (typeof getUserConfirmation === 'function') {\r\n                    getUserConfirmation(result, callback);\r\n                }\r\n                else {\r\n                     true ? tiny_warning_1.default(false, 'A history needs a getUserConfirmation function in order to use a prompt message') : undefined;\r\n                    callback(true);\r\n                }\r\n            }\r\n            else {\r\n                // Return false from a transition hook to cancel the transition.\r\n                callback(result !== false);\r\n            }\r\n        }\r\n        else {\r\n            callback(true);\r\n        }\r\n    }\r\n    var listeners = [];\r\n    function appendListener(fn) {\r\n        var isActive = true;\r\n        function listener() {\r\n            if (isActive)\r\n                fn.apply(void 0, arguments);\r\n        }\r\n        listeners.push(listener);\r\n        return function () {\r\n            isActive = false;\r\n            listeners = listeners.filter(function (item) {\r\n                return item !== listener;\r\n            });\r\n        };\r\n    }\r\n    function notifyListeners() {\r\n        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\r\n            args[_key] = arguments[_key];\r\n        }\r\n        listeners.forEach(function (listener) {\r\n            return listener.apply(void 0, args);\r\n        });\r\n    }\r\n    return {\r\n        setPrompt: setPrompt,\r\n        confirmTransitionTo: confirmTransitionTo,\r\n        appendListener: appendListener,\r\n        notifyListeners: notifyListeners\r\n    };\r\n}\r\nvar canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);\r\nfunction getConfirmation(message, callback) {\r\n    callback(window.confirm(message)); // eslint-disable-line no-alert\r\n}\r\n/**\r\n * Returns true if the HTML5 history API is supported. Taken from Modernizr.\r\n *\r\n * https://github.com/Modernizr/Modernizr/blob/master/LICENSE\r\n * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js\r\n * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586\r\n */\r\nfunction supportsHistory() {\r\n    var ua = window.navigator.userAgent;\r\n    if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1)\r\n        return false;\r\n    return window.history && 'pushState' in window.history;\r\n}\r\n/**\r\n * Returns true if browser fires popstate on hash change.\r\n * IE10 and IE11 do not.\r\n */\r\nfunction supportsPopStateOnHashChange() {\r\n    return window.navigator.userAgent.indexOf('Trident') === -1;\r\n}\r\n/**\r\n * Returns false if using go(n) with hash history causes a full page reload.\r\n */\r\nfunction supportsGoWithoutReloadUsingHash() {\r\n    return window.navigator.userAgent.indexOf('Firefox') === -1;\r\n}\r\n/**\r\n * Returns true if a given popstate event is an extraneous WebKit event.\r\n * Accounts for the fact that Chrome on iOS fires real popstate events\r\n * containing undefined state when pressing the back button.\r\n */\r\nfunction isExtraneousPopstateEvent(event) {\r\n    return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;\r\n}\r\nvar PopStateEvent = 'popstate';\r\nvar HashChangeEvent = 'hashchange';\r\nfunction getHistoryState() {\r\n    try {\r\n        return window.history.state || {};\r\n    }\r\n    catch (e) {\r\n        // IE 11 sometimes throws when accessing window.history.state\r\n        // See https://github.com/ReactTraining/history/pull/289\r\n        return {};\r\n    }\r\n}\r\n/**\r\n * Creates a history object that uses the HTML5 history API including\r\n * pushState, replaceState, and the popstate event.\r\n */\r\nfunction createBrowserHistory(props) {\r\n    if (props === void 0) {\r\n        props = {};\r\n    }\r\n    !canUseDOM ?  true ? tiny_invariant_1.default(false, 'Browser history needs a DOM') : undefined : void 0;\r\n    var globalHistory = window.history;\r\n    var canUseHistory = supportsHistory();\r\n    var needsHashChangeListener = !supportsPopStateOnHashChange();\r\n    var _props = props, _props$forceRefresh = _props.forceRefresh, forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh, _props$getUserConfirm = _props.getUserConfirmation, getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm, _props$keyLength = _props.keyLength, keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;\r\n    var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';\r\n    function getDOMLocation(historyState) {\r\n        var _ref = historyState || {}, key = _ref.key, state = _ref.state;\r\n        var _window$location = window.location, pathname = _window$location.pathname, search = _window$location.search, hash = _window$location.hash;\r\n        var path = pathname + search + hash;\r\n         true ? tiny_warning_1.default(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path \"' + path + '\" to begin with \"' + basename + '\".') : undefined;\r\n        if (basename)\r\n            path = stripBasename(path, basename);\r\n        return createLocation(path, state, key);\r\n    }\r\n    function createKey() {\r\n        return Math.random().toString(36).substr(2, keyLength);\r\n    }\r\n    var transitionManager = createTransitionManager();\r\n    function setState(nextState) {\r\n        extends_1.default(history, nextState);\r\n        history.length = globalHistory.length;\r\n        transitionManager.notifyListeners(history.location, history.action);\r\n    }\r\n    function handlePopState(event) {\r\n        // Ignore extraneous popstate events in WebKit.\r\n        if (isExtraneousPopstateEvent(event))\r\n            return;\r\n        handlePop(getDOMLocation(event.state));\r\n    }\r\n    function handleHashChange() {\r\n        handlePop(getDOMLocation(getHistoryState()));\r\n    }\r\n    var forceNextPop = false;\r\n    function handlePop(location) {\r\n        if (forceNextPop) {\r\n            forceNextPop = false;\r\n            setState();\r\n        }\r\n        else {\r\n            var action = 'POP';\r\n            transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {\r\n                if (ok) {\r\n                    setState({\r\n                        action: action,\r\n                        location: location\r\n                    });\r\n                }\r\n                else {\r\n                    revertPop(location);\r\n                }\r\n            });\r\n        }\r\n    }\r\n    function revertPop(fromLocation) {\r\n        var toLocation = history.location; // TODO: We could probably make this more reliable by\r\n        // keeping a list of keys we've seen in sessionStorage.\r\n        // Instead, we just default to 0 for keys we don't know.\r\n        var toIndex = allKeys.indexOf(toLocation.key);\r\n        if (toIndex === -1)\r\n            toIndex = 0;\r\n        var fromIndex = allKeys.indexOf(fromLocation.key);\r\n        if (fromIndex === -1)\r\n            fromIndex = 0;\r\n        var delta = toIndex - fromIndex;\r\n        if (delta) {\r\n            forceNextPop = true;\r\n            go(delta);\r\n        }\r\n    }\r\n    var initialLocation = getDOMLocation(getHistoryState());\r\n    var allKeys = [initialLocation.key]; // Public interface\r\n    function createHref(location) {\r\n        return basename + createPath(location);\r\n    }\r\n    function push(path, state) {\r\n         true ? tiny_warning_1.default(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;\r\n        var action = 'PUSH';\r\n        var location = createLocation(path, state, createKey(), history.location);\r\n        transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {\r\n            if (!ok)\r\n                return;\r\n            var href = createHref(location);\r\n            var key = location.key, state = location.state;\r\n            if (canUseHistory) {\r\n                globalHistory.pushState({\r\n                    key: key,\r\n                    state: state\r\n                }, null, href);\r\n                if (forceRefresh) {\r\n                    window.location.href = href;\r\n                }\r\n                else {\r\n                    var prevIndex = allKeys.indexOf(history.location.key);\r\n                    var nextKeys = allKeys.slice(0, prevIndex + 1);\r\n                    nextKeys.push(location.key);\r\n                    allKeys = nextKeys;\r\n                    setState({\r\n                        action: action,\r\n                        location: location\r\n                    });\r\n                }\r\n            }\r\n            else {\r\n                 true ? tiny_warning_1.default(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history') : undefined;\r\n                window.location.href = href;\r\n            }\r\n        });\r\n    }\r\n    function replace(path, state) {\r\n         true ? tiny_warning_1.default(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;\r\n        var action = 'REPLACE';\r\n        var location = createLocation(path, state, createKey(), history.location);\r\n        transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {\r\n            if (!ok)\r\n                return;\r\n            var href = createHref(location);\r\n            var key = location.key, state = location.state;\r\n            if (canUseHistory) {\r\n                globalHistory.replaceState({\r\n                    key: key,\r\n                    state: state\r\n                }, null, href);\r\n                if (forceRefresh) {\r\n                    window.location.replace(href);\r\n                }\r\n                else {\r\n                    var prevIndex = allKeys.indexOf(history.location.key);\r\n                    if (prevIndex !== -1)\r\n                        allKeys[prevIndex] = location.key;\r\n                    setState({\r\n                        action: action,\r\n                        location: location\r\n                    });\r\n                }\r\n            }\r\n            else {\r\n                 true ? tiny_warning_1.default(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history') : undefined;\r\n                window.location.replace(href);\r\n            }\r\n        });\r\n    }\r\n    function go(n) {\r\n        globalHistory.go(n);\r\n    }\r\n    function goBack() {\r\n        go(-1);\r\n    }\r\n    function goForward() {\r\n        go(1);\r\n    }\r\n    var listenerCount = 0;\r\n    function checkDOMListeners(delta) {\r\n        listenerCount += delta;\r\n        if (listenerCount === 1 && delta === 1) {\r\n            window.addEventListener(PopStateEvent, handlePopState);\r\n            if (needsHashChangeListener)\r\n                window.addEventListener(HashChangeEvent, handleHashChange);\r\n        }\r\n        else if (listenerCount === 0) {\r\n            window.removeEventListener(PopStateEvent, handlePopState);\r\n            if (needsHashChangeListener)\r\n                window.removeEventListener(HashChangeEvent, handleHashChange);\r\n        }\r\n    }\r\n    var isBlocked = false;\r\n    function block(prompt) {\r\n        if (prompt === void 0) {\r\n            prompt = false;\r\n        }\r\n        var unblock = transitionManager.setPrompt(prompt);\r\n        if (!isBlocked) {\r\n            checkDOMListeners(1);\r\n            isBlocked = true;\r\n        }\r\n        return function () {\r\n            if (isBlocked) {\r\n                isBlocked = false;\r\n                checkDOMListeners(-1);\r\n            }\r\n            return unblock();\r\n        };\r\n    }\r\n    function listen(listener) {\r\n        var unlisten = transitionManager.appendListener(listener);\r\n        checkDOMListeners(1);\r\n        return function () {\r\n            checkDOMListeners(-1);\r\n            unlisten();\r\n        };\r\n    }\r\n    var history = {\r\n        length: globalHistory.length,\r\n        action: 'POP',\r\n        location: initialLocation,\r\n        createHref: createHref,\r\n        push: push,\r\n        replace: replace,\r\n        go: go,\r\n        goBack: goBack,\r\n        goForward: goForward,\r\n        block: block,\r\n        listen: listen\r\n    };\r\n    return history;\r\n}\r\nexports.createBrowserHistory = createBrowserHistory;\r\nvar HashChangeEvent$1 = 'hashchange';\r\nvar HashPathCoders = {\r\n    hashbang: {\r\n        encodePath: function encodePath(path) {\r\n            return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);\r\n        },\r\n        decodePath: function decodePath(path) {\r\n            return path.charAt(0) === '!' ? path.substr(1) : path;\r\n        }\r\n    },\r\n    noslash: {\r\n        encodePath: stripLeadingSlash,\r\n        decodePath: addLeadingSlash\r\n    },\r\n    slash: {\r\n        encodePath: addLeadingSlash,\r\n        decodePath: addLeadingSlash\r\n    }\r\n};\r\nfunction stripHash(url) {\r\n    var hashIndex = url.indexOf('#');\r\n    return hashIndex === -1 ? url : url.slice(0, hashIndex);\r\n}\r\nfunction getHashPath() {\r\n    // We can't use window.location.hash here because it's not\r\n    // consistent across browsers - Firefox will pre-decode it!\r\n    var href = window.location.href;\r\n    var hashIndex = href.indexOf('#');\r\n    return hashIndex === -1 ? '' : href.substring(hashIndex + 1);\r\n}\r\nfunction pushHashPath(path) {\r\n    window.location.hash = path;\r\n}\r\nfunction replaceHashPath(path) {\r\n    window.location.replace(stripHash(window.location.href) + '#' + path);\r\n}\r\nfunction createHashHistory(props) {\r\n    if (props === void 0) {\r\n        props = {};\r\n    }\r\n    !canUseDOM ?  true ? tiny_invariant_1.default(false, 'Hash history needs a DOM') : undefined : void 0;\r\n    var globalHistory = window.history;\r\n    var canGoWithoutReload = supportsGoWithoutReloadUsingHash();\r\n    var _props = props, _props$getUserConfirm = _props.getUserConfirmation, getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm, _props$hashType = _props.hashType, hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;\r\n    var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';\r\n    var _HashPathCoders$hashT = HashPathCoders[hashType], encodePath = _HashPathCoders$hashT.encodePath, decodePath = _HashPathCoders$hashT.decodePath;\r\n    function getDOMLocation() {\r\n        var path = decodePath(getHashPath());\r\n         true ? tiny_warning_1.default(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path \"' + path + '\" to begin with \"' + basename + '\".') : undefined;\r\n        if (basename)\r\n            path = stripBasename(path, basename);\r\n        return createLocation(path);\r\n    }\r\n    var transitionManager = createTransitionManager();\r\n    function setState(nextState) {\r\n        extends_1.default(history, nextState);\r\n        history.length = globalHistory.length;\r\n        transitionManager.notifyListeners(history.location, history.action);\r\n    }\r\n    var forceNextPop = false;\r\n    var ignorePath = null;\r\n    function locationsAreEqual$$1(a, b) {\r\n        return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;\r\n    }\r\n    function handleHashChange() {\r\n        var path = getHashPath();\r\n        var encodedPath = encodePath(path);\r\n        if (path !== encodedPath) {\r\n            // Ensure we always have a properly-encoded hash.\r\n            replaceHashPath(encodedPath);\r\n        }\r\n        else {\r\n            var location = getDOMLocation();\r\n            var prevLocation = history.location;\r\n            if (!forceNextPop && locationsAreEqual$$1(prevLocation, location))\r\n                return; // A hashchange doesn't always == location change.\r\n            if (ignorePath === createPath(location))\r\n                return; // Ignore this change; we already setState in push/replace.\r\n            ignorePath = null;\r\n            handlePop(location);\r\n        }\r\n    }\r\n    function handlePop(location) {\r\n        if (forceNextPop) {\r\n            forceNextPop = false;\r\n            setState();\r\n        }\r\n        else {\r\n            var action = 'POP';\r\n            transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {\r\n                if (ok) {\r\n                    setState({\r\n                        action: action,\r\n                        location: location\r\n                    });\r\n                }\r\n                else {\r\n                    revertPop(location);\r\n                }\r\n            });\r\n        }\r\n    }\r\n    function revertPop(fromLocation) {\r\n        var toLocation = history.location; // TODO: We could probably make this more reliable by\r\n        // keeping a list of paths we've seen in sessionStorage.\r\n        // Instead, we just default to 0 for paths we don't know.\r\n        var toIndex = allPaths.lastIndexOf(createPath(toLocation));\r\n        if (toIndex === -1)\r\n            toIndex = 0;\r\n        var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));\r\n        if (fromIndex === -1)\r\n            fromIndex = 0;\r\n        var delta = toIndex - fromIndex;\r\n        if (delta) {\r\n            forceNextPop = true;\r\n            go(delta);\r\n        }\r\n    } // Ensure the hash is encoded properly before doing anything else.\r\n    var path = getHashPath();\r\n    var encodedPath = encodePath(path);\r\n    if (path !== encodedPath)\r\n        replaceHashPath(encodedPath);\r\n    var initialLocation = getDOMLocation();\r\n    var allPaths = [createPath(initialLocation)]; // Public interface\r\n    function createHref(location) {\r\n        var baseTag = document.querySelector('base');\r\n        var href = '';\r\n        if (baseTag && baseTag.getAttribute('href')) {\r\n            href = stripHash(window.location.href);\r\n        }\r\n        return href + '#' + encodePath(basename + createPath(location));\r\n    }\r\n    function push(path, state) {\r\n         true ? tiny_warning_1.default(state === undefined, 'Hash history cannot push state; it is ignored') : undefined;\r\n        var action = 'PUSH';\r\n        var location = createLocation(path, undefined, undefined, history.location);\r\n        transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {\r\n            if (!ok)\r\n                return;\r\n            var path = createPath(location);\r\n            var encodedPath = encodePath(basename + path);\r\n            var hashChanged = getHashPath() !== encodedPath;\r\n            if (hashChanged) {\r\n                // We cannot tell if a hashchange was caused by a PUSH, so we'd\r\n                // rather setState here and ignore the hashchange. The caveat here\r\n                // is that other hash histories in the page will consider it a POP.\r\n                ignorePath = path;\r\n                pushHashPath(encodedPath);\r\n                var prevIndex = allPaths.lastIndexOf(createPath(history.location));\r\n                var nextPaths = allPaths.slice(0, prevIndex + 1);\r\n                nextPaths.push(path);\r\n                allPaths = nextPaths;\r\n                setState({\r\n                    action: action,\r\n                    location: location\r\n                });\r\n            }\r\n            else {\r\n                 true ? tiny_warning_1.default(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack') : undefined;\r\n                setState();\r\n            }\r\n        });\r\n    }\r\n    function replace(path, state) {\r\n         true ? tiny_warning_1.default(state === undefined, 'Hash history cannot replace state; it is ignored') : undefined;\r\n        var action = 'REPLACE';\r\n        var location = createLocation(path, undefined, undefined, history.location);\r\n        transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {\r\n            if (!ok)\r\n                return;\r\n            var path = createPath(location);\r\n            var encodedPath = encodePath(basename + path);\r\n            var hashChanged = getHashPath() !== encodedPath;\r\n            if (hashChanged) {\r\n                // We cannot tell if a hashchange was caused by a REPLACE, so we'd\r\n                // rather setState here and ignore the hashchange. The caveat here\r\n                // is that other hash histories in the page will consider it a POP.\r\n                ignorePath = path;\r\n                replaceHashPath(encodedPath);\r\n            }\r\n            var prevIndex = allPaths.indexOf(createPath(history.location));\r\n            if (prevIndex !== -1)\r\n                allPaths[prevIndex] = path;\r\n            setState({\r\n                action: action,\r\n                location: location\r\n            });\r\n        });\r\n    }\r\n    function go(n) {\r\n         true ? tiny_warning_1.default(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : undefined;\r\n        globalHistory.go(n);\r\n    }\r\n    function goBack() {\r\n        go(-1);\r\n    }\r\n    function goForward() {\r\n        go(1);\r\n    }\r\n    var listenerCount = 0;\r\n    function checkDOMListeners(delta) {\r\n        listenerCount += delta;\r\n        if (listenerCount === 1 && delta === 1) {\r\n            window.addEventListener(HashChangeEvent$1, handleHashChange);\r\n        }\r\n        else if (listenerCount === 0) {\r\n            window.removeEventListener(HashChangeEvent$1, handleHashChange);\r\n        }\r\n    }\r\n    var isBlocked = false;\r\n    function block(prompt) {\r\n        if (prompt === void 0) {\r\n            prompt = false;\r\n        }\r\n        var unblock = transitionManager.setPrompt(prompt);\r\n        if (!isBlocked) {\r\n            checkDOMListeners(1);\r\n            isBlocked = true;\r\n        }\r\n        return function () {\r\n            if (isBlocked) {\r\n                isBlocked = false;\r\n                checkDOMListeners(-1);\r\n            }\r\n            return unblock();\r\n        };\r\n    }\r\n    function listen(listener) {\r\n        var unlisten = transitionManager.appendListener(listener);\r\n        checkDOMListeners(1);\r\n        return function () {\r\n            checkDOMListeners(-1);\r\n            unlisten();\r\n        };\r\n    }\r\n    var history = {\r\n        length: globalHistory.length,\r\n        action: 'POP',\r\n        location: initialLocation,\r\n        createHref: createHref,\r\n        push: push,\r\n        replace: replace,\r\n        go: go,\r\n        goBack: goBack,\r\n        goForward: goForward,\r\n        block: block,\r\n        listen: listen\r\n    };\r\n    return history;\r\n}\r\nexports.createHashHistory = createHashHistory;\r\nfunction clamp(n, lowerBound, upperBound) {\r\n    return Math.min(Math.max(n, lowerBound), upperBound);\r\n}\r\n/**\r\n * Creates a history object that stores locations in memory.\r\n */\r\nfunction createMemoryHistory(props) {\r\n    if (props === void 0) {\r\n        props = {};\r\n    }\r\n    var _props = props, getUserConfirmation = _props.getUserConfirmation, _props$initialEntries = _props.initialEntries, initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries, _props$initialIndex = _props.initialIndex, initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex, _props$keyLength = _props.keyLength, keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;\r\n    var transitionManager = createTransitionManager();\r\n    function setState(nextState) {\r\n        extends_1.default(history, nextState);\r\n        history.length = history.entries.length;\r\n        transitionManager.notifyListeners(history.location, history.action);\r\n    }\r\n    function createKey() {\r\n        return Math.random().toString(36).substr(2, keyLength);\r\n    }\r\n    var index = clamp(initialIndex, 0, initialEntries.length - 1);\r\n    var entries = initialEntries.map(function (entry) {\r\n        return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());\r\n    }); // Public interface\r\n    var createHref = createPath;\r\n    function push(path, state) {\r\n         true ? tiny_warning_1.default(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;\r\n        var action = 'PUSH';\r\n        var location = createLocation(path, state, createKey(), history.location);\r\n        transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {\r\n            if (!ok)\r\n                return;\r\n            var prevIndex = history.index;\r\n            var nextIndex = prevIndex + 1;\r\n            var nextEntries = history.entries.slice(0);\r\n            if (nextEntries.length > nextIndex) {\r\n                nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);\r\n            }\r\n            else {\r\n                nextEntries.push(location);\r\n            }\r\n            setState({\r\n                action: action,\r\n                location: location,\r\n                index: nextIndex,\r\n                entries: nextEntries\r\n            });\r\n        });\r\n    }\r\n    function replace(path, state) {\r\n         true ? tiny_warning_1.default(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored') : undefined;\r\n        var action = 'REPLACE';\r\n        var location = createLocation(path, state, createKey(), history.location);\r\n        transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {\r\n            if (!ok)\r\n                return;\r\n            history.entries[history.index] = location;\r\n            setState({\r\n                action: action,\r\n                location: location\r\n            });\r\n        });\r\n    }\r\n    function go(n) {\r\n        var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);\r\n        var action = 'POP';\r\n        var location = history.entries[nextIndex];\r\n        transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {\r\n            if (ok) {\r\n                setState({\r\n                    action: action,\r\n                    location: location,\r\n                    index: nextIndex\r\n                });\r\n            }\r\n            else {\r\n                // Mimic the behavior of DOM histories by\r\n                // causing a render after a cancelled POP.\r\n                setState();\r\n            }\r\n        });\r\n    }\r\n    function goBack() {\r\n        go(-1);\r\n    }\r\n    function goForward() {\r\n        go(1);\r\n    }\r\n    function canGo(n) {\r\n        var nextIndex = history.index + n;\r\n        return nextIndex >= 0 && nextIndex < history.entries.length;\r\n    }\r\n    function block(prompt) {\r\n        if (prompt === void 0) {\r\n            prompt = false;\r\n        }\r\n        return transitionManager.setPrompt(prompt);\r\n    }\r\n    function listen(listener) {\r\n        return transitionManager.appendListener(listener);\r\n    }\r\n    var history = {\r\n        length: entries.length,\r\n        action: 'POP',\r\n        location: entries[index],\r\n        index: index,\r\n        entries: entries,\r\n        createHref: createHref,\r\n        push: push,\r\n        replace: replace,\r\n        go: go,\r\n        goBack: goBack,\r\n        goForward: goForward,\r\n        canGo: canGo,\r\n        block: block,\r\n        listen: listen\r\n    };\r\n    return history;\r\n}\r\nexports.createMemoryHistory = createMemoryHistory;\r\n\n\n//# sourceURL=webpack:///./node_modules/history/esm/history.js?");

/***/ }),

/***/ "./node_modules/mini-create-react-context/dist/esm/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/mini-create-react-context/dist/esm/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar inheritsLoose_1 = __importDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ \"@babel/runtime/helpers/esm/inheritsLoose\"));\r\nvar prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\r\nvar tiny_warning_1 = __importDefault(__webpack_require__(/*! tiny-warning */ \"tiny-warning\"));\r\nvar MAX_SIGNED_31_BIT_INT = 1073741823;\r\nvar commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};\r\nfunction getUniqueId() {\r\n    var key = '__global_unique_id__';\r\n    return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;\r\n}\r\nfunction objectIs(x, y) {\r\n    if (x === y) {\r\n        return x !== 0 || 1 / x === 1 / y;\r\n    }\r\n    else {\r\n        return x !== x && y !== y;\r\n    }\r\n}\r\nfunction createEventEmitter(value) {\r\n    var handlers = [];\r\n    return {\r\n        on: function on(handler) {\r\n            handlers.push(handler);\r\n        },\r\n        off: function off(handler) {\r\n            handlers = handlers.filter(function (h) {\r\n                return h !== handler;\r\n            });\r\n        },\r\n        get: function get() {\r\n            return value;\r\n        },\r\n        set: function set(newValue, changedBits) {\r\n            value = newValue;\r\n            handlers.forEach(function (handler) {\r\n                return handler(value, changedBits);\r\n            });\r\n        }\r\n    };\r\n}\r\nfunction onlyChild(children) {\r\n    return Array.isArray(children) ? children[0] : children;\r\n}\r\nfunction createReactContext(defaultValue, calculateChangedBits) {\r\n    var _Provider$childContex, _Consumer$contextType;\r\n    var contextProp = '__create-react-context-' + getUniqueId() + '__';\r\n    var Provider = /*#__PURE__*/ function (_Component) {\r\n        inheritsLoose_1.default(Provider, _Component);\r\n        function Provider() {\r\n            var _this;\r\n            _this = _Component.apply(this, arguments) || this;\r\n            _this.emitter = createEventEmitter(_this.props.value);\r\n            return _this;\r\n        }\r\n        var _proto = Provider.prototype;\r\n        _proto.getChildContext = function getChildContext() {\r\n            var _ref;\r\n            return _ref = {}, _ref[contextProp] = this.emitter, _ref;\r\n        };\r\n        _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {\r\n            if (this.props.value !== nextProps.value) {\r\n                var oldValue = this.props.value;\r\n                var newValue = nextProps.value;\r\n                var changedBits;\r\n                if (objectIs(oldValue, newValue)) {\r\n                    changedBits = 0;\r\n                }\r\n                else {\r\n                    changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;\r\n                    if (true) {\r\n                        tiny_warning_1.default((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: ' + changedBits);\r\n                    }\r\n                    changedBits |= 0;\r\n                    if (changedBits !== 0) {\r\n                        this.emitter.set(nextProps.value, changedBits);\r\n                    }\r\n                }\r\n            }\r\n        };\r\n        _proto.render = function render() {\r\n            return this.props.children;\r\n        };\r\n        return Provider;\r\n    }(react_1.Component);\r\n    Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = prop_types_1.default.object.isRequired, _Provider$childContex);\r\n    var Consumer = /*#__PURE__*/ function (_Component2) {\r\n        inheritsLoose_1.default(Consumer, _Component2);\r\n        function Consumer() {\r\n            var _this2;\r\n            _this2 = _Component2.apply(this, arguments) || this;\r\n            _this2.state = {\r\n                value: _this2.getValue()\r\n            };\r\n            _this2.onUpdate = function (newValue, changedBits) {\r\n                var observedBits = _this2.observedBits | 0;\r\n                if ((observedBits & changedBits) !== 0) {\r\n                    _this2.setState({\r\n                        value: _this2.getValue()\r\n                    });\r\n                }\r\n            };\r\n            return _this2;\r\n        }\r\n        var _proto2 = Consumer.prototype;\r\n        _proto2.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {\r\n            var observedBits = nextProps.observedBits;\r\n            this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;\r\n        };\r\n        _proto2.componentDidMount = function componentDidMount() {\r\n            if (this.context[contextProp]) {\r\n                this.context[contextProp].on(this.onUpdate);\r\n            }\r\n            var observedBits = this.props.observedBits;\r\n            this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;\r\n        };\r\n        _proto2.componentWillUnmount = function componentWillUnmount() {\r\n            if (this.context[contextProp]) {\r\n                this.context[contextProp].off(this.onUpdate);\r\n            }\r\n        };\r\n        _proto2.getValue = function getValue() {\r\n            if (this.context[contextProp]) {\r\n                return this.context[contextProp].get();\r\n            }\r\n            else {\r\n                return defaultValue;\r\n            }\r\n        };\r\n        _proto2.render = function render() {\r\n            return onlyChild(this.props.children)(this.state.value);\r\n        };\r\n        return Consumer;\r\n    }(react_1.Component);\r\n    Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = prop_types_1.default.object, _Consumer$contextType);\r\n    return {\r\n        Provider: Provider,\r\n        Consumer: Consumer\r\n    };\r\n}\r\nvar index = react_1.default.createContext || createReactContext;\r\nexports.default = index;\r\n\n\n//# sourceURL=webpack:///./node_modules/mini-create-react-context/dist/esm/index.js?");

/***/ }),

/***/ "./node_modules/react-router-dom/esm/react-router-dom.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-router-dom/esm/react-router-dom.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.NavLink = exports.Link = exports.HashRouter = exports.BrowserRouter = exports.withRouter = exports.useRouteMatch = exports.useParams = exports.useLocation = exports.useHistory = exports.matchPath = exports.generatePath = exports.Switch = exports.StaticRouter = exports.Router = exports.Route = exports.Redirect = exports.Prompt = exports.MemoryRouter = void 0;\r\nvar react_router_1 = __webpack_require__(/*! react-router */ \"./node_modules/react-router/esm/react-router.js\");\r\nvar react_router_2 = __webpack_require__(/*! react-router */ \"./node_modules/react-router/esm/react-router.js\");\r\nObject.defineProperty(exports, \"MemoryRouter\", { enumerable: true, get: function () { return react_router_2.MemoryRouter; } });\r\nObject.defineProperty(exports, \"Prompt\", { enumerable: true, get: function () { return react_router_2.Prompt; } });\r\nObject.defineProperty(exports, \"Redirect\", { enumerable: true, get: function () { return react_router_2.Redirect; } });\r\nObject.defineProperty(exports, \"Route\", { enumerable: true, get: function () { return react_router_2.Route; } });\r\nObject.defineProperty(exports, \"Router\", { enumerable: true, get: function () { return react_router_2.Router; } });\r\nObject.defineProperty(exports, \"StaticRouter\", { enumerable: true, get: function () { return react_router_2.StaticRouter; } });\r\nObject.defineProperty(exports, \"Switch\", { enumerable: true, get: function () { return react_router_2.Switch; } });\r\nObject.defineProperty(exports, \"generatePath\", { enumerable: true, get: function () { return react_router_2.generatePath; } });\r\nObject.defineProperty(exports, \"matchPath\", { enumerable: true, get: function () { return react_router_2.matchPath; } });\r\nObject.defineProperty(exports, \"useHistory\", { enumerable: true, get: function () { return react_router_2.useHistory; } });\r\nObject.defineProperty(exports, \"useLocation\", { enumerable: true, get: function () { return react_router_2.useLocation; } });\r\nObject.defineProperty(exports, \"useParams\", { enumerable: true, get: function () { return react_router_2.useParams; } });\r\nObject.defineProperty(exports, \"useRouteMatch\", { enumerable: true, get: function () { return react_router_2.useRouteMatch; } });\r\nObject.defineProperty(exports, \"withRouter\", { enumerable: true, get: function () { return react_router_2.withRouter; } });\r\nvar inheritsLoose_1 = __importDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ \"@babel/runtime/helpers/esm/inheritsLoose\"));\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar history_1 = __webpack_require__(/*! history */ \"./node_modules/history/esm/history.js\");\r\nvar prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\r\nvar tiny_warning_1 = __importDefault(__webpack_require__(/*! tiny-warning */ \"tiny-warning\"));\r\nvar extends_1 = __importDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"@babel/runtime/helpers/esm/extends\"));\r\nvar objectWithoutPropertiesLoose_1 = __importDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ \"@babel/runtime/helpers/esm/objectWithoutPropertiesLoose\"));\r\nvar tiny_invariant_1 = __importDefault(__webpack_require__(/*! tiny-invariant */ \"./node_modules/tiny-invariant/dist/tiny-invariant.esm.js\"));\r\n/**\r\n * The public API for a <Router> that uses HTML5 history.\r\n */\r\nvar BrowserRouter = \r\n/*#__PURE__*/\r\nfunction (_React$Component) {\r\n    inheritsLoose_1.default(BrowserRouter, _React$Component);\r\n    function BrowserRouter() {\r\n        var _this;\r\n        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\r\n            args[_key] = arguments[_key];\r\n        }\r\n        _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;\r\n        _this.history = history_1.createBrowserHistory(_this.props);\r\n        return _this;\r\n    }\r\n    var _proto = BrowserRouter.prototype;\r\n    _proto.render = function render() {\r\n        return react_1.default.createElement(react_router_1.Router, {\r\n            history: this.history,\r\n            children: this.props.children\r\n        });\r\n    };\r\n    return BrowserRouter;\r\n}(react_1.default.Component);\r\nexports.BrowserRouter = BrowserRouter;\r\nif (true) {\r\n    BrowserRouter.propTypes = {\r\n        basename: prop_types_1.default.string,\r\n        children: prop_types_1.default.node,\r\n        forceRefresh: prop_types_1.default.bool,\r\n        getUserConfirmation: prop_types_1.default.func,\r\n        keyLength: prop_types_1.default.number\r\n    };\r\n    BrowserRouter.prototype.componentDidMount = function () {\r\n         true ? tiny_warning_1.default(!this.props.history, \"<BrowserRouter> ignores the history prop. To use a custom history, \" + \"use `import { Router }` instead of `import { BrowserRouter as Router }`.\") : undefined;\r\n    };\r\n}\r\n/**\r\n * The public API for a <Router> that uses window.location.hash.\r\n */\r\nvar HashRouter = \r\n/*#__PURE__*/\r\nfunction (_React$Component) {\r\n    inheritsLoose_1.default(HashRouter, _React$Component);\r\n    function HashRouter() {\r\n        var _this;\r\n        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\r\n            args[_key] = arguments[_key];\r\n        }\r\n        _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;\r\n        _this.history = history_1.createHashHistory(_this.props);\r\n        return _this;\r\n    }\r\n    var _proto = HashRouter.prototype;\r\n    _proto.render = function render() {\r\n        return react_1.default.createElement(react_router_1.Router, {\r\n            history: this.history,\r\n            children: this.props.children\r\n        });\r\n    };\r\n    return HashRouter;\r\n}(react_1.default.Component);\r\nexports.HashRouter = HashRouter;\r\nif (true) {\r\n    HashRouter.propTypes = {\r\n        basename: prop_types_1.default.string,\r\n        children: prop_types_1.default.node,\r\n        getUserConfirmation: prop_types_1.default.func,\r\n        hashType: prop_types_1.default.oneOf([\"hashbang\", \"noslash\", \"slash\"])\r\n    };\r\n    HashRouter.prototype.componentDidMount = function () {\r\n         true ? tiny_warning_1.default(!this.props.history, \"<HashRouter> ignores the history prop. To use a custom history, \" + \"use `import { Router }` instead of `import { HashRouter as Router }`.\") : undefined;\r\n    };\r\n}\r\nvar resolveToLocation = function resolveToLocation(to, currentLocation) {\r\n    return typeof to === \"function\" ? to(currentLocation) : to;\r\n};\r\nvar normalizeToLocation = function normalizeToLocation(to, currentLocation) {\r\n    return typeof to === \"string\" ? history_1.createLocation(to, null, null, currentLocation) : to;\r\n};\r\nvar forwardRefShim = function forwardRefShim(C) {\r\n    return C;\r\n};\r\nvar forwardRef = react_1.default.forwardRef;\r\nif (typeof forwardRef === \"undefined\") {\r\n    forwardRef = forwardRefShim;\r\n}\r\nfunction isModifiedEvent(event) {\r\n    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);\r\n}\r\nvar LinkAnchor = forwardRef(function (_ref, forwardedRef) {\r\n    var innerRef = _ref.innerRef, navigate = _ref.navigate, _onClick = _ref.onClick, rest = objectWithoutPropertiesLoose_1.default(_ref, [\"innerRef\", \"navigate\", \"onClick\"]);\r\n    var target = rest.target;\r\n    var props = extends_1.default({}, rest, {\r\n        onClick: function onClick(event) {\r\n            try {\r\n                if (_onClick)\r\n                    _onClick(event);\r\n            }\r\n            catch (ex) {\r\n                event.preventDefault();\r\n                throw ex;\r\n            }\r\n            if (!event.defaultPrevented && // onClick prevented default\r\n                event.button === 0 && ( // ignore everything but left clicks\r\n            !target || target === \"_self\") && // let browser handle \"target=_blank\" etc.\r\n                !isModifiedEvent(event) // ignore clicks with modifier keys\r\n            ) {\r\n                event.preventDefault();\r\n                navigate();\r\n            }\r\n        }\r\n    }); // React 15 compat\r\n    if (forwardRefShim !== forwardRef) {\r\n        props.ref = forwardedRef || innerRef;\r\n    }\r\n    else {\r\n        props.ref = innerRef;\r\n    }\r\n    /* eslint-disable-next-line jsx-a11y/anchor-has-content */\r\n    return react_1.default.createElement(\"a\", props);\r\n});\r\nif (true) {\r\n    LinkAnchor.displayName = \"LinkAnchor\";\r\n}\r\n/**\r\n * The public API for rendering a history-aware <a>.\r\n */\r\nvar Link = forwardRef(function (_ref2, forwardedRef) {\r\n    var _ref2$component = _ref2.component, component = _ref2$component === void 0 ? LinkAnchor : _ref2$component, replace = _ref2.replace, to = _ref2.to, innerRef = _ref2.innerRef, rest = objectWithoutPropertiesLoose_1.default(_ref2, [\"component\", \"replace\", \"to\", \"innerRef\"]);\r\n    return react_1.default.createElement(react_router_1.__RouterContext.Consumer, null, function (context) {\r\n        !context ?  true ? tiny_invariant_1.default(false, \"You should not use <Link> outside a <Router>\") : undefined : void 0;\r\n        var history = context.history;\r\n        var location = normalizeToLocation(resolveToLocation(to, context.location), context.location);\r\n        var href = location ? history.createHref(location) : \"\";\r\n        var props = extends_1.default({}, rest, {\r\n            href: href,\r\n            navigate: function navigate() {\r\n                var location = resolveToLocation(to, context.location);\r\n                var method = replace ? history.replace : history.push;\r\n                method(location);\r\n            }\r\n        }); // React 15 compat\r\n        if (forwardRefShim !== forwardRef) {\r\n            props.ref = forwardedRef || innerRef;\r\n        }\r\n        else {\r\n            props.innerRef = innerRef;\r\n        }\r\n        return react_1.default.createElement(component, props);\r\n    });\r\n});\r\nexports.Link = Link;\r\nif (true) {\r\n    var toType = prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object, prop_types_1.default.func]);\r\n    var refType = prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.func, prop_types_1.default.shape({\r\n            current: prop_types_1.default.any\r\n        })]);\r\n    Link.displayName = \"Link\";\r\n    Link.propTypes = {\r\n        innerRef: refType,\r\n        onClick: prop_types_1.default.func,\r\n        replace: prop_types_1.default.bool,\r\n        target: prop_types_1.default.string,\r\n        to: toType.isRequired\r\n    };\r\n}\r\nvar forwardRefShim$1 = function forwardRefShim(C) {\r\n    return C;\r\n};\r\nvar forwardRef$1 = react_1.default.forwardRef;\r\nif (typeof forwardRef$1 === \"undefined\") {\r\n    forwardRef$1 = forwardRefShim$1;\r\n}\r\nfunction joinClassnames() {\r\n    for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {\r\n        classnames[_key] = arguments[_key];\r\n    }\r\n    return classnames.filter(function (i) {\r\n        return i;\r\n    }).join(\" \");\r\n}\r\n/**\r\n * A <Link> wrapper that knows if it's \"active\" or not.\r\n */\r\nvar NavLink = forwardRef$1(function (_ref, forwardedRef) {\r\n    var _ref$ariaCurrent = _ref[\"aria-current\"], ariaCurrent = _ref$ariaCurrent === void 0 ? \"page\" : _ref$ariaCurrent, _ref$activeClassName = _ref.activeClassName, activeClassName = _ref$activeClassName === void 0 ? \"active\" : _ref$activeClassName, activeStyle = _ref.activeStyle, classNameProp = _ref.className, exact = _ref.exact, isActiveProp = _ref.isActive, locationProp = _ref.location, sensitive = _ref.sensitive, strict = _ref.strict, styleProp = _ref.style, to = _ref.to, innerRef = _ref.innerRef, rest = objectWithoutPropertiesLoose_1.default(_ref, [\"aria-current\", \"activeClassName\", \"activeStyle\", \"className\", \"exact\", \"isActive\", \"location\", \"sensitive\", \"strict\", \"style\", \"to\", \"innerRef\"]);\r\n    return react_1.default.createElement(react_router_1.__RouterContext.Consumer, null, function (context) {\r\n        !context ?  true ? tiny_invariant_1.default(false, \"You should not use <NavLink> outside a <Router>\") : undefined : void 0;\r\n        var currentLocation = locationProp || context.location;\r\n        var toLocation = normalizeToLocation(resolveToLocation(to, currentLocation), currentLocation);\r\n        var path = toLocation.pathname; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202\r\n        var escapedPath = path && path.replace(/([.+*?=^!:${}()[\\]|/\\\\])/g, \"\\\\$1\");\r\n        var match = escapedPath ? react_router_1.matchPath(currentLocation.pathname, {\r\n            path: escapedPath,\r\n            exact: exact,\r\n            sensitive: sensitive,\r\n            strict: strict\r\n        }) : null;\r\n        var isActive = !!(isActiveProp ? isActiveProp(match, currentLocation) : match);\r\n        var className = isActive ? joinClassnames(classNameProp, activeClassName) : classNameProp;\r\n        var style = isActive ? extends_1.default({}, styleProp, {}, activeStyle) : styleProp;\r\n        var props = extends_1.default({\r\n            \"aria-current\": isActive && ariaCurrent || null,\r\n            className: className,\r\n            style: style,\r\n            to: toLocation\r\n        }, rest); // React 15 compat\r\n        if (forwardRefShim$1 !== forwardRef$1) {\r\n            props.ref = forwardedRef || innerRef;\r\n        }\r\n        else {\r\n            props.innerRef = innerRef;\r\n        }\r\n        return react_1.default.createElement(Link, props);\r\n    });\r\n});\r\nexports.NavLink = NavLink;\r\nif (true) {\r\n    NavLink.displayName = \"NavLink\";\r\n    var ariaCurrentType = prop_types_1.default.oneOf([\"page\", \"step\", \"location\", \"date\", \"time\", \"true\"]);\r\n    NavLink.propTypes = extends_1.default({}, Link.propTypes, {\r\n        \"aria-current\": ariaCurrentType,\r\n        activeClassName: prop_types_1.default.string,\r\n        activeStyle: prop_types_1.default.object,\r\n        className: prop_types_1.default.string,\r\n        exact: prop_types_1.default.bool,\r\n        isActive: prop_types_1.default.func,\r\n        location: prop_types_1.default.object,\r\n        sensitive: prop_types_1.default.bool,\r\n        strict: prop_types_1.default.bool,\r\n        style: prop_types_1.default.object\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./node_modules/react-router-dom/esm/react-router-dom.js?");

/***/ }),

/***/ "./node_modules/react-router/esm/react-router.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-router/esm/react-router.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.withRouter = exports.useRouteMatch = exports.useParams = exports.useLocation = exports.useHistory = exports.matchPath = exports.generatePath = exports.__RouterContext = exports.__HistoryContext = exports.Switch = exports.StaticRouter = exports.Router = exports.Route = exports.Redirect = exports.Prompt = exports.MemoryRouter = void 0;\r\nvar inheritsLoose_1 = __importDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ \"@babel/runtime/helpers/esm/inheritsLoose\"));\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\r\nvar history_1 = __webpack_require__(/*! history */ \"./node_modules/history/esm/history.js\");\r\nvar tiny_warning_1 = __importDefault(__webpack_require__(/*! tiny-warning */ \"tiny-warning\"));\r\nvar mini_create_react_context_1 = __importDefault(__webpack_require__(/*! mini-create-react-context */ \"./node_modules/mini-create-react-context/dist/esm/index.js\"));\r\nvar tiny_invariant_1 = __importDefault(__webpack_require__(/*! tiny-invariant */ \"./node_modules/tiny-invariant/dist/tiny-invariant.esm.js\"));\r\nvar extends_1 = __importDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"@babel/runtime/helpers/esm/extends\"));\r\nvar path_to_regexp_1 = __importDefault(__webpack_require__(/*! path-to-regexp */ \"path-to-regexp\"));\r\nvar react_is_1 = __webpack_require__(/*! react-is */ \"react-is\");\r\nvar objectWithoutPropertiesLoose_1 = __importDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ \"@babel/runtime/helpers/esm/objectWithoutPropertiesLoose\"));\r\nvar hoist_non_react_statics_1 = __importDefault(__webpack_require__(/*! hoist-non-react-statics */ \"hoist-non-react-statics\"));\r\n// TODO: Replace with React.createContext once we can assume React 16+\r\nvar createNamedContext = function createNamedContext(name) {\r\n    var context = mini_create_react_context_1.default();\r\n    context.displayName = name;\r\n    return context;\r\n};\r\nvar historyContext = \r\n/*#__PURE__*/\r\ncreateNamedContext(\"Router-History\");\r\nexports.__HistoryContext = historyContext;\r\n// TODO: Replace with React.createContext once we can assume React 16+\r\nvar createNamedContext$1 = function createNamedContext(name) {\r\n    var context = mini_create_react_context_1.default();\r\n    context.displayName = name;\r\n    return context;\r\n};\r\nvar context = \r\n/*#__PURE__*/\r\ncreateNamedContext$1(\"Router\");\r\nexports.__RouterContext = context;\r\n/**\r\n * The public API for putting history on context.\r\n */\r\nvar Router = \r\n/*#__PURE__*/\r\nfunction (_React$Component) {\r\n    inheritsLoose_1.default(Router, _React$Component);\r\n    Router.computeRootMatch = function computeRootMatch(pathname) {\r\n        return {\r\n            path: \"/\",\r\n            url: \"/\",\r\n            params: {},\r\n            isExact: pathname === \"/\"\r\n        };\r\n    };\r\n    function Router(props) {\r\n        var _this;\r\n        _this = _React$Component.call(this, props) || this;\r\n        _this.state = {\r\n            location: props.history.location\r\n        }; // This is a bit of a hack. We have to start listening for location\r\n        // changes here in the constructor in case there are any <Redirect>s\r\n        // on the initial render. If there are, they will replace/push when\r\n        // they mount and since cDM fires in children before parents, we may\r\n        // get a new location before the <Router> is mounted.\r\n        _this._isMounted = false;\r\n        _this._pendingLocation = null;\r\n        if (!props.staticContext) {\r\n            _this.unlisten = props.history.listen(function (location) {\r\n                if (_this._isMounted) {\r\n                    _this.setState({\r\n                        location: location\r\n                    });\r\n                }\r\n                else {\r\n                    _this._pendingLocation = location;\r\n                }\r\n            });\r\n        }\r\n        return _this;\r\n    }\r\n    var _proto = Router.prototype;\r\n    _proto.componentDidMount = function componentDidMount() {\r\n        this._isMounted = true;\r\n        if (this._pendingLocation) {\r\n            this.setState({\r\n                location: this._pendingLocation\r\n            });\r\n        }\r\n    };\r\n    _proto.componentWillUnmount = function componentWillUnmount() {\r\n        if (this.unlisten)\r\n            this.unlisten();\r\n    };\r\n    _proto.render = function render() {\r\n        return react_1.default.createElement(context.Provider, {\r\n            value: {\r\n                history: this.props.history,\r\n                location: this.state.location,\r\n                match: Router.computeRootMatch(this.state.location.pathname),\r\n                staticContext: this.props.staticContext\r\n            }\r\n        }, react_1.default.createElement(historyContext.Provider, {\r\n            children: this.props.children || null,\r\n            value: this.props.history\r\n        }));\r\n    };\r\n    return Router;\r\n}(react_1.default.Component);\r\nexports.Router = Router;\r\nif (true) {\r\n    Router.propTypes = {\r\n        children: prop_types_1.default.node,\r\n        history: prop_types_1.default.object.isRequired,\r\n        staticContext: prop_types_1.default.object\r\n    };\r\n    Router.prototype.componentDidUpdate = function (prevProps) {\r\n         true ? tiny_warning_1.default(prevProps.history === this.props.history, \"You cannot change <Router history>\") : undefined;\r\n    };\r\n}\r\n/**\r\n * The public API for a <Router> that stores location in memory.\r\n */\r\nvar MemoryRouter = \r\n/*#__PURE__*/\r\nfunction (_React$Component) {\r\n    inheritsLoose_1.default(MemoryRouter, _React$Component);\r\n    function MemoryRouter() {\r\n        var _this;\r\n        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\r\n            args[_key] = arguments[_key];\r\n        }\r\n        _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;\r\n        _this.history = history_1.createMemoryHistory(_this.props);\r\n        return _this;\r\n    }\r\n    var _proto = MemoryRouter.prototype;\r\n    _proto.render = function render() {\r\n        return react_1.default.createElement(Router, {\r\n            history: this.history,\r\n            children: this.props.children\r\n        });\r\n    };\r\n    return MemoryRouter;\r\n}(react_1.default.Component);\r\nexports.MemoryRouter = MemoryRouter;\r\nif (true) {\r\n    MemoryRouter.propTypes = {\r\n        initialEntries: prop_types_1.default.array,\r\n        initialIndex: prop_types_1.default.number,\r\n        getUserConfirmation: prop_types_1.default.func,\r\n        keyLength: prop_types_1.default.number,\r\n        children: prop_types_1.default.node\r\n    };\r\n    MemoryRouter.prototype.componentDidMount = function () {\r\n         true ? tiny_warning_1.default(!this.props.history, \"<MemoryRouter> ignores the history prop. To use a custom history, \" + \"use `import { Router }` instead of `import { MemoryRouter as Router }`.\") : undefined;\r\n    };\r\n}\r\nvar Lifecycle = \r\n/*#__PURE__*/\r\nfunction (_React$Component) {\r\n    inheritsLoose_1.default(Lifecycle, _React$Component);\r\n    function Lifecycle() {\r\n        return _React$Component.apply(this, arguments) || this;\r\n    }\r\n    var _proto = Lifecycle.prototype;\r\n    _proto.componentDidMount = function componentDidMount() {\r\n        if (this.props.onMount)\r\n            this.props.onMount.call(this, this);\r\n    };\r\n    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {\r\n        if (this.props.onUpdate)\r\n            this.props.onUpdate.call(this, this, prevProps);\r\n    };\r\n    _proto.componentWillUnmount = function componentWillUnmount() {\r\n        if (this.props.onUnmount)\r\n            this.props.onUnmount.call(this, this);\r\n    };\r\n    _proto.render = function render() {\r\n        return null;\r\n    };\r\n    return Lifecycle;\r\n}(react_1.default.Component);\r\n/**\r\n * The public API for prompting the user before navigating away from a screen.\r\n */\r\nfunction Prompt(_ref) {\r\n    var message = _ref.message, _ref$when = _ref.when, when = _ref$when === void 0 ? true : _ref$when;\r\n    return react_1.default.createElement(context.Consumer, null, function (context) {\r\n        !context ?  true ? tiny_invariant_1.default(false, \"You should not use <Prompt> outside a <Router>\") : undefined : void 0;\r\n        if (!when || context.staticContext)\r\n            return null;\r\n        var method = context.history.block;\r\n        return react_1.default.createElement(Lifecycle, {\r\n            onMount: function onMount(self) {\r\n                self.release = method(message);\r\n            },\r\n            onUpdate: function onUpdate(self, prevProps) {\r\n                if (prevProps.message !== message) {\r\n                    self.release();\r\n                    self.release = method(message);\r\n                }\r\n            },\r\n            onUnmount: function onUnmount(self) {\r\n                self.release();\r\n            },\r\n            message: message\r\n        });\r\n    });\r\n}\r\nexports.Prompt = Prompt;\r\nif (true) {\r\n    var messageType = prop_types_1.default.oneOfType([prop_types_1.default.func, prop_types_1.default.string]);\r\n    Prompt.propTypes = {\r\n        when: prop_types_1.default.bool,\r\n        message: messageType.isRequired\r\n    };\r\n}\r\nvar cache = {};\r\nvar cacheLimit = 10000;\r\nvar cacheCount = 0;\r\nfunction compilePath(path) {\r\n    if (cache[path])\r\n        return cache[path];\r\n    var generator = path_to_regexp_1.default.compile(path);\r\n    if (cacheCount < cacheLimit) {\r\n        cache[path] = generator;\r\n        cacheCount++;\r\n    }\r\n    return generator;\r\n}\r\n/**\r\n * Public API for generating a URL pathname from a path and parameters.\r\n */\r\nfunction generatePath(path, params) {\r\n    if (path === void 0) {\r\n        path = \"/\";\r\n    }\r\n    if (params === void 0) {\r\n        params = {};\r\n    }\r\n    return path === \"/\" ? path : compilePath(path)(params, {\r\n        pretty: true\r\n    });\r\n}\r\nexports.generatePath = generatePath;\r\n/**\r\n * The public API for navigating programmatically with a component.\r\n */\r\nfunction Redirect(_ref) {\r\n    var computedMatch = _ref.computedMatch, to = _ref.to, _ref$push = _ref.push, push = _ref$push === void 0 ? false : _ref$push;\r\n    return react_1.default.createElement(context.Consumer, null, function (context) {\r\n        !context ?  true ? tiny_invariant_1.default(false, \"You should not use <Redirect> outside a <Router>\") : undefined : void 0;\r\n        var history = context.history, staticContext = context.staticContext;\r\n        var method = push ? history.push : history.replace;\r\n        var location = history_1.createLocation(computedMatch ? typeof to === \"string\" ? generatePath(to, computedMatch.params) : extends_1.default({}, to, {\r\n            pathname: generatePath(to.pathname, computedMatch.params)\r\n        }) : to); // When rendering in a static context,\r\n        // set the new location immediately.\r\n        if (staticContext) {\r\n            method(location);\r\n            return null;\r\n        }\r\n        return react_1.default.createElement(Lifecycle, {\r\n            onMount: function onMount() {\r\n                method(location);\r\n            },\r\n            onUpdate: function onUpdate(self, prevProps) {\r\n                var prevLocation = history_1.createLocation(prevProps.to);\r\n                if (!history_1.locationsAreEqual(prevLocation, extends_1.default({}, location, {\r\n                    key: prevLocation.key\r\n                }))) {\r\n                    method(location);\r\n                }\r\n            },\r\n            to: to\r\n        });\r\n    });\r\n}\r\nexports.Redirect = Redirect;\r\nif (true) {\r\n    Redirect.propTypes = {\r\n        push: prop_types_1.default.bool,\r\n        from: prop_types_1.default.string,\r\n        to: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired\r\n    };\r\n}\r\nvar cache$1 = {};\r\nvar cacheLimit$1 = 10000;\r\nvar cacheCount$1 = 0;\r\nfunction compilePath$1(path, options) {\r\n    var cacheKey = \"\" + options.end + options.strict + options.sensitive;\r\n    var pathCache = cache$1[cacheKey] || (cache$1[cacheKey] = {});\r\n    if (pathCache[path])\r\n        return pathCache[path];\r\n    var keys = [];\r\n    var regexp = path_to_regexp_1.default(path, keys, options);\r\n    var result = {\r\n        regexp: regexp,\r\n        keys: keys\r\n    };\r\n    if (cacheCount$1 < cacheLimit$1) {\r\n        pathCache[path] = result;\r\n        cacheCount$1++;\r\n    }\r\n    return result;\r\n}\r\n/**\r\n * Public API for matching a URL pathname to a path.\r\n */\r\nfunction matchPath(pathname, options) {\r\n    if (options === void 0) {\r\n        options = {};\r\n    }\r\n    if (typeof options === \"string\" || Array.isArray(options)) {\r\n        options = {\r\n            path: options\r\n        };\r\n    }\r\n    var _options = options, path = _options.path, _options$exact = _options.exact, exact = _options$exact === void 0 ? false : _options$exact, _options$strict = _options.strict, strict = _options$strict === void 0 ? false : _options$strict, _options$sensitive = _options.sensitive, sensitive = _options$sensitive === void 0 ? false : _options$sensitive;\r\n    var paths = [].concat(path);\r\n    return paths.reduce(function (matched, path) {\r\n        if (!path && path !== \"\")\r\n            return null;\r\n        if (matched)\r\n            return matched;\r\n        var _compilePath = compilePath$1(path, {\r\n            end: exact,\r\n            strict: strict,\r\n            sensitive: sensitive\r\n        }), regexp = _compilePath.regexp, keys = _compilePath.keys;\r\n        var match = regexp.exec(pathname);\r\n        if (!match)\r\n            return null;\r\n        var url = match[0], values = match.slice(1);\r\n        var isExact = pathname === url;\r\n        if (exact && !isExact)\r\n            return null;\r\n        return {\r\n            path: path,\r\n            // the path used to match\r\n            url: path === \"/\" && url === \"\" ? \"/\" : url,\r\n            // the matched portion of the URL\r\n            isExact: isExact,\r\n            // whether or not we matched exactly\r\n            params: keys.reduce(function (memo, key, index) {\r\n                memo[key.name] = values[index];\r\n                return memo;\r\n            }, {})\r\n        };\r\n    }, null);\r\n}\r\nexports.matchPath = matchPath;\r\nfunction isEmptyChildren(children) {\r\n    return react_1.default.Children.count(children) === 0;\r\n}\r\nfunction evalChildrenDev(children, props, path) {\r\n    var value = children(props);\r\n     true ? tiny_warning_1.default(value !== undefined, \"You returned `undefined` from the `children` function of \" + (\"<Route\" + (path ? \" path=\\\"\" + path + \"\\\"\" : \"\") + \">, but you \") + \"should have returned a React element or `null`\") : undefined;\r\n    return value || null;\r\n}\r\n/**\r\n * The public API for matching a single path and rendering.\r\n */\r\nvar Route = \r\n/*#__PURE__*/\r\nfunction (_React$Component) {\r\n    inheritsLoose_1.default(Route, _React$Component);\r\n    function Route() {\r\n        return _React$Component.apply(this, arguments) || this;\r\n    }\r\n    var _proto = Route.prototype;\r\n    _proto.render = function render() {\r\n        var _this = this;\r\n        return react_1.default.createElement(context.Consumer, null, function (context$1) {\r\n            !context$1 ?  true ? tiny_invariant_1.default(false, \"You should not use <Route> outside a <Router>\") : undefined : void 0;\r\n            var location = _this.props.location || context$1.location;\r\n            var match = _this.props.computedMatch ? _this.props.computedMatch // <Switch> already computed the match for us\r\n                : _this.props.path ? matchPath(location.pathname, _this.props) : context$1.match;\r\n            var props = extends_1.default({}, context$1, {\r\n                location: location,\r\n                match: match\r\n            });\r\n            var _this$props = _this.props, children = _this$props.children, component = _this$props.component, render = _this$props.render; // Preact uses an empty array as children by\r\n            // default, so use null if that's the case.\r\n            if (Array.isArray(children) && children.length === 0) {\r\n                children = null;\r\n            }\r\n            return react_1.default.createElement(context.Provider, {\r\n                value: props\r\n            }, props.match ? children ? typeof children === \"function\" ?  true ? evalChildrenDev(children, props, _this.props.path) : undefined : children : component ? react_1.default.createElement(component, props) : render ? render(props) : null : typeof children === \"function\" ?  true ? evalChildrenDev(children, props, _this.props.path) : undefined : null);\r\n        });\r\n    };\r\n    return Route;\r\n}(react_1.default.Component);\r\nexports.Route = Route;\r\nif (true) {\r\n    Route.propTypes = {\r\n        children: prop_types_1.default.oneOfType([prop_types_1.default.func, prop_types_1.default.node]),\r\n        component: function component(props, propName) {\r\n            if (props[propName] && !react_is_1.isValidElementType(props[propName])) {\r\n                return new Error(\"Invalid prop 'component' supplied to 'Route': the prop is not a valid React component\");\r\n            }\r\n        },\r\n        exact: prop_types_1.default.bool,\r\n        location: prop_types_1.default.object,\r\n        path: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.arrayOf(prop_types_1.default.string)]),\r\n        render: prop_types_1.default.func,\r\n        sensitive: prop_types_1.default.bool,\r\n        strict: prop_types_1.default.bool\r\n    };\r\n    Route.prototype.componentDidMount = function () {\r\n         true ? tiny_warning_1.default(!(this.props.children && !isEmptyChildren(this.props.children) && this.props.component), \"You should not use <Route component> and <Route children> in the same route; <Route component> will be ignored\") : undefined;\r\n         true ? tiny_warning_1.default(!(this.props.children && !isEmptyChildren(this.props.children) && this.props.render), \"You should not use <Route render> and <Route children> in the same route; <Route render> will be ignored\") : undefined;\r\n         true ? tiny_warning_1.default(!(this.props.component && this.props.render), \"You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored\") : undefined;\r\n    };\r\n    Route.prototype.componentDidUpdate = function (prevProps) {\r\n         true ? tiny_warning_1.default(!(this.props.location && !prevProps.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no \"location\" prop and then provided one on a subsequent render.') : undefined;\r\n         true ? tiny_warning_1.default(!(!this.props.location && prevProps.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a \"location\" prop initially but omitted it on a subsequent render.') : undefined;\r\n    };\r\n}\r\nfunction addLeadingSlash(path) {\r\n    return path.charAt(0) === \"/\" ? path : \"/\" + path;\r\n}\r\nfunction addBasename(basename, location) {\r\n    if (!basename)\r\n        return location;\r\n    return extends_1.default({}, location, {\r\n        pathname: addLeadingSlash(basename) + location.pathname\r\n    });\r\n}\r\nfunction stripBasename(basename, location) {\r\n    if (!basename)\r\n        return location;\r\n    var base = addLeadingSlash(basename);\r\n    if (location.pathname.indexOf(base) !== 0)\r\n        return location;\r\n    return extends_1.default({}, location, {\r\n        pathname: location.pathname.substr(base.length)\r\n    });\r\n}\r\nfunction createURL(location) {\r\n    return typeof location === \"string\" ? location : history_1.createPath(location);\r\n}\r\nfunction staticHandler(methodName) {\r\n    return function () {\r\n         true ? tiny_invariant_1.default(false, \"You cannot %s with <StaticRouter>\", methodName) : undefined;\r\n    };\r\n}\r\nfunction noop() { }\r\n/**\r\n * The public top-level API for a \"static\" <Router>, so-called because it\r\n * can't actually change the current location. Instead, it just records\r\n * location changes in a context object. Useful mainly in testing and\r\n * server-rendering scenarios.\r\n */\r\nvar StaticRouter = \r\n/*#__PURE__*/\r\nfunction (_React$Component) {\r\n    inheritsLoose_1.default(StaticRouter, _React$Component);\r\n    function StaticRouter() {\r\n        var _this;\r\n        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\r\n            args[_key] = arguments[_key];\r\n        }\r\n        _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;\r\n        _this.handlePush = function (location) {\r\n            return _this.navigateTo(location, \"PUSH\");\r\n        };\r\n        _this.handleReplace = function (location) {\r\n            return _this.navigateTo(location, \"REPLACE\");\r\n        };\r\n        _this.handleListen = function () {\r\n            return noop;\r\n        };\r\n        _this.handleBlock = function () {\r\n            return noop;\r\n        };\r\n        return _this;\r\n    }\r\n    var _proto = StaticRouter.prototype;\r\n    _proto.navigateTo = function navigateTo(location, action) {\r\n        var _this$props = this.props, _this$props$basename = _this$props.basename, basename = _this$props$basename === void 0 ? \"\" : _this$props$basename, _this$props$context = _this$props.context, context = _this$props$context === void 0 ? {} : _this$props$context;\r\n        context.action = action;\r\n        context.location = addBasename(basename, history_1.createLocation(location));\r\n        context.url = createURL(context.location);\r\n    };\r\n    _proto.render = function render() {\r\n        var _this$props2 = this.props, _this$props2$basename = _this$props2.basename, basename = _this$props2$basename === void 0 ? \"\" : _this$props2$basename, _this$props2$context = _this$props2.context, context = _this$props2$context === void 0 ? {} : _this$props2$context, _this$props2$location = _this$props2.location, location = _this$props2$location === void 0 ? \"/\" : _this$props2$location, rest = objectWithoutPropertiesLoose_1.default(_this$props2, [\"basename\", \"context\", \"location\"]);\r\n        var history = {\r\n            createHref: function createHref(path) {\r\n                return addLeadingSlash(basename + createURL(path));\r\n            },\r\n            action: \"POP\",\r\n            location: stripBasename(basename, history_1.createLocation(location)),\r\n            push: this.handlePush,\r\n            replace: this.handleReplace,\r\n            go: staticHandler(\"go\"),\r\n            goBack: staticHandler(\"goBack\"),\r\n            goForward: staticHandler(\"goForward\"),\r\n            listen: this.handleListen,\r\n            block: this.handleBlock\r\n        };\r\n        return react_1.default.createElement(Router, extends_1.default({}, rest, {\r\n            history: history,\r\n            staticContext: context\r\n        }));\r\n    };\r\n    return StaticRouter;\r\n}(react_1.default.Component);\r\nexports.StaticRouter = StaticRouter;\r\nif (true) {\r\n    StaticRouter.propTypes = {\r\n        basename: prop_types_1.default.string,\r\n        context: prop_types_1.default.object,\r\n        location: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object])\r\n    };\r\n    StaticRouter.prototype.componentDidMount = function () {\r\n         true ? tiny_warning_1.default(!this.props.history, \"<StaticRouter> ignores the history prop. To use a custom history, \" + \"use `import { Router }` instead of `import { StaticRouter as Router }`.\") : undefined;\r\n    };\r\n}\r\n/**\r\n * The public API for rendering the first <Route> that matches.\r\n */\r\nvar Switch = \r\n/*#__PURE__*/\r\nfunction (_React$Component) {\r\n    inheritsLoose_1.default(Switch, _React$Component);\r\n    function Switch() {\r\n        return _React$Component.apply(this, arguments) || this;\r\n    }\r\n    var _proto = Switch.prototype;\r\n    _proto.render = function render() {\r\n        var _this = this;\r\n        return react_1.default.createElement(context.Consumer, null, function (context) {\r\n            !context ?  true ? tiny_invariant_1.default(false, \"You should not use <Switch> outside a <Router>\") : undefined : void 0;\r\n            var location = _this.props.location || context.location;\r\n            var element, match; // We use React.Children.forEach instead of React.Children.toArray().find()\r\n            // here because toArray adds keys to all child elements and we do not want\r\n            // to trigger an unmount/remount for two <Route>s that render the same\r\n            // component at different URLs.\r\n            react_1.default.Children.forEach(_this.props.children, function (child) {\r\n                if (match == null && react_1.default.isValidElement(child)) {\r\n                    element = child;\r\n                    var path = child.props.path || child.props.from;\r\n                    match = path ? matchPath(location.pathname, extends_1.default({}, child.props, {\r\n                        path: path\r\n                    })) : context.match;\r\n                }\r\n            });\r\n            return match ? react_1.default.cloneElement(element, {\r\n                location: location,\r\n                computedMatch: match\r\n            }) : null;\r\n        });\r\n    };\r\n    return Switch;\r\n}(react_1.default.Component);\r\nexports.Switch = Switch;\r\nif (true) {\r\n    Switch.propTypes = {\r\n        children: prop_types_1.default.node,\r\n        location: prop_types_1.default.object\r\n    };\r\n    Switch.prototype.componentDidUpdate = function (prevProps) {\r\n         true ? tiny_warning_1.default(!(this.props.location && !prevProps.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no \"location\" prop and then provided one on a subsequent render.') : undefined;\r\n         true ? tiny_warning_1.default(!(!this.props.location && prevProps.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a \"location\" prop initially but omitted it on a subsequent render.') : undefined;\r\n    };\r\n}\r\n/**\r\n * A public higher-order component to access the imperative API\r\n */\r\nfunction withRouter(Component) {\r\n    var displayName = \"withRouter(\" + (Component.displayName || Component.name) + \")\";\r\n    var C = function C(props) {\r\n        var wrappedComponentRef = props.wrappedComponentRef, remainingProps = objectWithoutPropertiesLoose_1.default(props, [\"wrappedComponentRef\"]);\r\n        return react_1.default.createElement(context.Consumer, null, function (context) {\r\n            !context ?  true ? tiny_invariant_1.default(false, \"You should not use <\" + displayName + \" /> outside a <Router>\") : undefined : void 0;\r\n            return react_1.default.createElement(Component, extends_1.default({}, remainingProps, context, {\r\n                ref: wrappedComponentRef\r\n            }));\r\n        });\r\n    };\r\n    C.displayName = displayName;\r\n    C.WrappedComponent = Component;\r\n    if (true) {\r\n        C.propTypes = {\r\n            wrappedComponentRef: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.func, prop_types_1.default.object])\r\n        };\r\n    }\r\n    return hoist_non_react_statics_1.default(C, Component);\r\n}\r\nexports.withRouter = withRouter;\r\nvar useContext = react_1.default.useContext;\r\nfunction useHistory() {\r\n    if (true) {\r\n        !(typeof useContext === \"function\") ?  true ? tiny_invariant_1.default(false, \"You must use React >= 16.8 in order to use useHistory()\") : undefined : void 0;\r\n    }\r\n    return useContext(historyContext);\r\n}\r\nexports.useHistory = useHistory;\r\nfunction useLocation() {\r\n    if (true) {\r\n        !(typeof useContext === \"function\") ?  true ? tiny_invariant_1.default(false, \"You must use React >= 16.8 in order to use useLocation()\") : undefined : void 0;\r\n    }\r\n    return useContext(context).location;\r\n}\r\nexports.useLocation = useLocation;\r\nfunction useParams() {\r\n    if (true) {\r\n        !(typeof useContext === \"function\") ?  true ? tiny_invariant_1.default(false, \"You must use React >= 16.8 in order to use useParams()\") : undefined : void 0;\r\n    }\r\n    var match = useContext(context).match;\r\n    return match ? match.params : {};\r\n}\r\nexports.useParams = useParams;\r\nfunction useRouteMatch(path) {\r\n    if (true) {\r\n        !(typeof useContext === \"function\") ?  true ? tiny_invariant_1.default(false, \"You must use React >= 16.8 in order to use useRouteMatch()\") : undefined : void 0;\r\n    }\r\n    var location = useLocation();\r\n    var match = useContext(context).match;\r\n    return path ? matchPath(location.pathname, path) : match;\r\n}\r\nexports.useRouteMatch = useRouteMatch;\r\nif (true) {\r\n    if (typeof window !== \"undefined\") {\r\n        var global = window;\r\n        var key = \"__react_router_build__\";\r\n        var buildNames = {\r\n            cjs: \"CommonJS\",\r\n            esm: \"ES modules\",\r\n            umd: \"UMD\"\r\n        };\r\n        if (global[key] && global[key] !== \"esm\") {\r\n            var initialBuildName = buildNames[global[key]];\r\n            var secondaryBuildName = buildNames[\"esm\"]; // TODO: Add link to article that explains in detail how to avoid\r\n            // loading 2 different builds.\r\n            throw new Error(\"You are loading the \" + secondaryBuildName + \" build of React Router \" + (\"on a page that is already running the \" + initialBuildName + \" \") + \"build, so things won't work right.\");\r\n        }\r\n        global[key] = \"esm\";\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./node_modules/react-router/esm/react-router.js?");

/***/ }),

/***/ "./node_modules/resolve-pathname/esm/resolve-pathname.js":
/*!***************************************************************!*\
  !*** ./node_modules/resolve-pathname/esm/resolve-pathname.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nfunction isAbsolute(pathname) {\r\n    return pathname.charAt(0) === '/';\r\n}\r\n// About 1.5x faster than the two-arg version of Array#splice()\r\nfunction spliceOne(list, index) {\r\n    for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {\r\n        list[i] = list[k];\r\n    }\r\n    list.pop();\r\n}\r\n// This implementation is based heavily on node's url.parse\r\nfunction resolvePathname(to, from) {\r\n    if (from === undefined)\r\n        from = '';\r\n    var toParts = (to && to.split('/')) || [];\r\n    var fromParts = (from && from.split('/')) || [];\r\n    var isToAbs = to && isAbsolute(to);\r\n    var isFromAbs = from && isAbsolute(from);\r\n    var mustEndAbs = isToAbs || isFromAbs;\r\n    if (to && isAbsolute(to)) {\r\n        // to is absolute\r\n        fromParts = toParts;\r\n    }\r\n    else if (toParts.length) {\r\n        // to is relative, drop the filename\r\n        fromParts.pop();\r\n        fromParts = fromParts.concat(toParts);\r\n    }\r\n    if (!fromParts.length)\r\n        return '/';\r\n    var hasTrailingSlash;\r\n    if (fromParts.length) {\r\n        var last = fromParts[fromParts.length - 1];\r\n        hasTrailingSlash = last === '.' || last === '..' || last === '';\r\n    }\r\n    else {\r\n        hasTrailingSlash = false;\r\n    }\r\n    var up = 0;\r\n    for (var i = fromParts.length; i >= 0; i--) {\r\n        var part = fromParts[i];\r\n        if (part === '.') {\r\n            spliceOne(fromParts, i);\r\n        }\r\n        else if (part === '..') {\r\n            spliceOne(fromParts, i);\r\n            up++;\r\n        }\r\n        else if (up) {\r\n            spliceOne(fromParts, i);\r\n            up--;\r\n        }\r\n    }\r\n    if (!mustEndAbs)\r\n        for (; up--; up)\r\n            fromParts.unshift('..');\r\n    if (mustEndAbs &&\r\n        fromParts[0] !== '' &&\r\n        (!fromParts[0] || !isAbsolute(fromParts[0])))\r\n        fromParts.unshift('');\r\n    var result = fromParts.join('/');\r\n    if (hasTrailingSlash && result.substr(-1) !== '/')\r\n        result += '/';\r\n    return result;\r\n}\r\nexports.default = resolvePathname;\r\n\n\n//# sourceURL=webpack:///./node_modules/resolve-pathname/esm/resolve-pathname.js?");

/***/ }),

/***/ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/tiny-invariant/dist/tiny-invariant.esm.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar isProduction = \"development\" === 'production';\r\nvar prefix = 'Invariant failed';\r\nfunction invariant(condition, message) {\r\n    if (condition) {\r\n        return;\r\n    }\r\n    if (isProduction) {\r\n        throw new Error(prefix);\r\n    }\r\n    throw new Error(prefix + \": \" + (message || ''));\r\n}\r\nexports.default = invariant;\r\n\n\n//# sourceURL=webpack:///./node_modules/tiny-invariant/dist/tiny-invariant.esm.js?");

/***/ }),

/***/ "./node_modules/value-equal/esm/value-equal.js":
/*!*****************************************************!*\
  !*** ./node_modules/value-equal/esm/value-equal.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nfunction valueOf(obj) {\r\n    return obj.valueOf ? obj.valueOf() : Object.prototype.valueOf.call(obj);\r\n}\r\nfunction valueEqual(a, b) {\r\n    // Test for strict equality first.\r\n    if (a === b)\r\n        return true;\r\n    // Otherwise, if either of them == null they are not equal.\r\n    if (a == null || b == null)\r\n        return false;\r\n    if (Array.isArray(a)) {\r\n        return (Array.isArray(b) &&\r\n            a.length === b.length &&\r\n            a.every(function (item, index) {\r\n                return valueEqual(item, b[index]);\r\n            }));\r\n    }\r\n    if (typeof a === 'object' || typeof b === 'object') {\r\n        var aValue = valueOf(a);\r\n        var bValue = valueOf(b);\r\n        if (aValue !== a || bValue !== b)\r\n            return valueEqual(aValue, bValue);\r\n        return Object.keys(Object.assign({}, a, b)).every(function (key) {\r\n            return valueEqual(a[key], b[key]);\r\n        });\r\n    }\r\n    return false;\r\n}\r\nexports.default = valueEqual;\r\n\n\n//# sourceURL=webpack:///./node_modules/value-equal/esm/value-equal.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\nvar Layout_1 = __importDefault(__webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\"));\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar Header_1 = __importDefault(__webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\"));\r\nvar Content_1 = __importDefault(__webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\"));\r\nvar CardsList_1 = __importDefault(__webpack_require__(/*! ./shared/CardsList */ \"./src/shared/CardsList/index.ts\"));\r\n//import {useToken} from './hooks/useToken';\r\n//import { userContext } from './shared/context/userContext';\r\nvar userContext_1 = __webpack_require__(/*! ./shared/context/userContext */ \"./src/shared/context/userContext.tsx\");\r\nvar postsContext_1 = __webpack_require__(/*! ./shared/context/postsContext */ \"./src/shared/context/postsContext.tsx\");\r\nvar redux_1 = __webpack_require__(/*! redux */ \"redux\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\r\nvar store_1 = __webpack_require__(/*! ./store */ \"./src/store.ts\");\r\nvar redux_thunk_1 = __importDefault(__webpack_require__(/*! redux-thunk */ \"redux-thunk\"));\r\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\r\n//import { nanoid } from 'nanoid';\r\nvar store = redux_1.createStore(store_1.rootReducer, redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(redux_thunk_1.default)));\r\nfunction AppComponent() {\r\n    // useEffect(()=>{\r\n    //     const token = localStorage.getItem('token') || window.__token__;\r\n    //     store dispatchEvent(setToken(token));\r\n    //     if(token){\r\n    //         localStorage.setItem('token',token);\r\n    //     }\r\n    // },[])\r\n    react_1.useEffect(function () {\r\n    }, []);\r\n    return (react_1.default.createElement(react_redux_1.Provider, { store: store },\r\n        react_1.default.createElement(userContext_1.UserContextProvider, null,\r\n            react_1.default.createElement(postsContext_1.PostsContextProvider, null,\r\n                react_1.default.createElement(react_router_dom_1.BrowserRouter, null,\r\n                    react_1.default.createElement(Layout_1.default, null,\r\n                        react_1.default.createElement(Header_1.default, null),\r\n                        react_1.default.createElement(Content_1.default, null,\r\n                            react_1.default.createElement(CardsList_1.default, null))))))));\r\n}\r\nexports.App = root_1.hot(function () { return react_1.default.createElement(AppComponent, null); });\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/hooks/usePostsData.ts":
/*!***********************************!*\
  !*** ./src/hooks/usePostsData.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.usePostsData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\n// interface IPostsData {\r\n//     name?: string;\r\n//     iconImg?: string;\r\n// }\r\nfunction usePostsData() {\r\n    var _a = react_1.useState([]), data = _a[0], setData = _a[1];\r\n    var token = react_redux_1.useSelector(function (state) { return state.token; });\r\n    react_1.useEffect(function () {\r\n        if (!token)\r\n            return;\r\n        axios_1.default.get('https://oauth.reddit.com/best/', {\r\n            headers: { Authorization: \"bearer \" + token }\r\n        })\r\n            .then(function (resp) {\r\n            setData(resp.data.data.children);\r\n        })\r\n            .catch(console.log);\r\n    }, [token]);\r\n    return [data];\r\n}\r\nexports.usePostsData = usePostsData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/usePostsData.ts?");

/***/ }),

/***/ "./src/hooks/useUserData.ts":
/*!**********************************!*\
  !*** ./src/hooks/useUserData.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useUserData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"react\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar actions_1 = __webpack_require__(/*! ../me/actions */ \"./src/me/actions.ts\");\r\nfunction useUserData() {\r\n    var data = react_redux_1.useSelector(function (state) { return state.me.data; });\r\n    var loading = react_redux_1.useSelector(function (state) { return state.me.loading; });\r\n    var token = react_redux_1.useSelector(function (state) { return state.token; });\r\n    var dispatch = react_redux_1.useDispatch();\r\n    react_1.useEffect(function () {\r\n        if (!token)\r\n            return;\r\n        dispatch(actions_1.meRequestAsync());\r\n    }, [token]);\r\n    return {\r\n        data: data,\r\n        loading: loading,\r\n    };\r\n}\r\nexports.useUserData = useUserData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useUserData.ts?");

/***/ }),

/***/ "./src/main.global.css":
/*!*****************************!*\
  !*** ./src/main.global.css ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"#modal_root {\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    width: 100%;\\r\\n\\tz-index: 1;\\r\\n}\\r\\n\\r\\n/*not work in IE!!!*/\\r\\n:root {\\r\\n    --black:    #333333;\\r\\n    --white:    #ffffff;\\r\\n    --orange:   #cc6633;\\r\\n    --green:    #a4cc33;\\r\\n\\r\\n    --whiteLightness: 100%;\\r\\n\\r\\n    --greyF3:   #f3f3f3;\\r\\n    --greyEC:   hsl(0, 0%, calc(var(--whiteLightness) - 7%));\\r\\n    --greyF4:   #f4f4f4;\\r\\n    --greyD9:   #d9d9d9;\\r\\n    --greyC4:   #c4c4c4;\\r\\n    --grey99:   #999999;\\r\\n    --grey66:   #666666;\\r\\n}\\r\\n\\r\\nbody {\\r\\n    padding: 0;\\r\\n    margin: 0;\\r\\n    background-color: var(--greyF4);\\r\\n    font-size: 14px;\\r\\n    line-height: 16px;\\r\\n    font-family: 'Roboto', serif;\\r\\n}\\r\\n\\r\\n*{\\r\\n    color: var(--black);\\r\\n    box-sizing: border-box;\\r\\n    -webkit-font-smoothing: antialiased;\\r\\n    -mox-osx-font-smoothing: grayscale;\\r\\n}\\r\\n\\r\\nul {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    list-style: none;\\r\\n}\\r\\n\\r\\na {\\r\\n    text-decoration: none;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n    padding: 0;\\r\\n    border: 0;\\r\\n    background: transparent;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/main.global.css?");

/***/ }),

/***/ "./src/me/actions.ts":
/*!***************************!*\
  !*** ./src/me/actions.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.meRequestAsync = exports.meRequestError = exports.ME_REQUEST_ERROR = exports.meRequestSuccess = exports.ME_REQUEST_SUCCESS = exports.meRequest = exports.ME_REQUEST = void 0;\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nexports.ME_REQUEST = 'ME_REQUEST';\r\nvar meRequest = function () { return ({\r\n    type: exports.ME_REQUEST\r\n}); };\r\nexports.meRequest = meRequest;\r\nexports.ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';\r\nvar meRequestSuccess = function (data) { return ({\r\n    type: exports.ME_REQUEST_SUCCESS,\r\n    data: data,\r\n}); };\r\nexports.meRequestSuccess = meRequestSuccess;\r\nexports.ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';\r\nvar meRequestError = function (error) { return ({\r\n    type: exports.ME_REQUEST_ERROR,\r\n    error: error\r\n}); };\r\nexports.meRequestError = meRequestError;\r\nvar meRequestAsync = function () { return function (dispatch, getState) {\r\n    dispatch(exports.meRequest());\r\n    axios_1.default.get('https://oauth.reddit.com/api/v1/me', {\r\n        headers: { Authorization: \"bearer \" + getState().token }\r\n    })\r\n        .then(function (resp) {\r\n        var userData = resp.data;\r\n        dispatch(exports.meRequestSuccess({ name: userData.name, iconImg: userData.icon_img }));\r\n    })\r\n        .catch(function (error) {\r\n        console.log(error);\r\n        dispatch(exports.meRequestError(String(error)));\r\n    });\r\n}; };\r\nexports.meRequestAsync = meRequestAsync;\r\n\n\n//# sourceURL=webpack:///./src/me/actions.ts?");

/***/ }),

/***/ "./src/me/reducer.ts":
/*!***************************!*\
  !*** ./src/me/reducer.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.meReducer = void 0;\r\nvar actions_1 = __webpack_require__(/*! ./actions */ \"./src/me/actions.ts\");\r\nvar meReducer = function (state, action) {\r\n    switch (action.type) {\r\n        case actions_1.ME_REQUEST:\r\n            return __assign(__assign({}, state), { loading: true });\r\n        case actions_1.ME_REQUEST_SUCCESS:\r\n            return __assign(__assign({}, state), { data: action.data, loading: false });\r\n        case actions_1.ME_REQUEST_ERROR:\r\n            return __assign(__assign({}, state), { error: action.error, loading: false });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.meReducer = meReducer;\r\n\n\n//# sourceURL=webpack:///./src/me/reducer.ts?");

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
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar cardslist_less_1 = __importDefault(__webpack_require__(/*! ./cardslist.less */ \"./src/shared/CardsList/cardslist.less\"));\r\nvar Card_1 = __importDefault(__webpack_require__(/*! ./Card */ \"./src/shared/CardsList/Card/index.ts\"));\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nfunction CardsList() {\r\n    var token = react_redux_1.useSelector(function (state) { return state.token; });\r\n    var _a = react_1.useState([]), posts = _a[0], setPosts = _a[1];\r\n    var _b = react_1.useState(false), loading = _b[0], setLoading = _b[1]; //false т.к. изначально загрузки нет, нет токена\r\n    var _c = react_1.useState(''), errorLoading = _c[0], setErrorLoading = _c[1];\r\n    var _d = react_1.useState(''), nextAfter = _d[0], setNextAfter = _d[1]; //\"курсор\" для курсорной пагинации \r\n    var bottomOfList = react_1.useRef(null);\r\n    var _e = react_1.useState(0), count = _e[0], setCount = _e[1]; //счетчик страниц\r\n    function load() {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            var _a, after, children_1, error_1;\r\n            return __generator(this, function (_b) {\r\n                switch (_b.label) {\r\n                    case 0:\r\n                        setLoading(true);\r\n                        setErrorLoading('');\r\n                        _b.label = 1;\r\n                    case 1:\r\n                        _b.trys.push([1, 3, , 4]);\r\n                        return [4 /*yield*/, axios_1.default.get('https://oauth.reddit.com/rising/', {\r\n                                //const response = await axios.get('https://oauth.reddit.com/rising/',{\r\n                                headers: { Authorization: \"bearer \" + token },\r\n                                params: {\r\n                                    limit: 10,\r\n                                    after: nextAfter,\r\n                                }\r\n                            })];\r\n                    case 2:\r\n                        _a = (_b.sent()).data.data, after = _a.after, children_1 = _a.children;\r\n                        //console.log('response:',children);\r\n                        setCount(function (prevCount) { return prevCount + 1; });\r\n                        setNextAfter(after);\r\n                        setPosts(function (prevChildren) { return prevChildren.concat.apply(prevChildren, children_1); });\r\n                        return [3 /*break*/, 4];\r\n                    case 3:\r\n                        error_1 = _b.sent();\r\n                        //console.error(error);\r\n                        setErrorLoading(String(error_1));\r\n                        return [3 /*break*/, 4];\r\n                    case 4:\r\n                        setLoading(false);\r\n                        console.log(\"count:\", count);\r\n                        return [2 /*return*/];\r\n                }\r\n            });\r\n        });\r\n    }\r\n    //IntersectionObserver\r\n    react_1.useEffect(function () {\r\n        //-----------------\r\n        var observer = new IntersectionObserver(function (entries) {\r\n            if (count == 0 || entries[0].isIntersecting && count % 3) {\r\n                load();\r\n            }\r\n        }, {\r\n            rootMargin: '10px',\r\n        });\r\n        if (bottomOfList.current) {\r\n            observer.observe(bottomOfList.current);\r\n        }\r\n        return function () {\r\n            if (bottomOfList.current) {\r\n                observer.unobserve(bottomOfList.current);\r\n            }\r\n        };\r\n    }, [bottomOfList.current, nextAfter, token]);\r\n    // const [posts] = usePostsData();\r\n    // let items = posts.map((post:IPostObj)=>{\r\n    //     return <Card data={post.data} key={post.data.id}/>\r\n    // });\r\n    // return (\r\n    //     <ul className={styles.cardslist}>\r\n    //         {items}\r\n    //     </ul>\r\n    // );\r\n    return (react_1.default.createElement(\"ul\", { className: cardslist_less_1.default.cardslist },\r\n        posts.length === 0 && !loading && !errorLoading && (react_1.default.createElement(\"div\", { style: { textAlign: 'center' } }, \"\\u041D\\u0435\\u0442 \\u043D\\u0438 \\u043E\\u0434\\u043D\\u043E\\u0433\\u043E \\u043F\\u043E\\u0441\\u0442\\u0430\")),\r\n        posts.map(function (post) {\r\n            return react_1.default.createElement(Card_1.default, { data: post.data, key: post.data.id });\r\n        }),\r\n        react_1.default.createElement(\"div\", { ref: bottomOfList }),\r\n        count !== 0 && !(count % 3) && (react_1.default.createElement(\"div\", { style: { textAlign: 'center' } },\r\n            react_1.default.createElement(\"button\", { onClick: load, style: { padding: '8px', border: '1px solid #666', background: '#CCC' } }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u0438\\u0442\\u044C \\u0435\\u0449\\u0451\"))),\r\n        loading && (count % 3) && (react_1.default.createElement(\"div\", { style: { textAlign: 'center' } }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430...\")),\r\n        errorLoading && (react_1.default.createElement(\"div\", { role: \"alert\", style: { textAlign: 'center' } }, errorLoading))));\r\n}\r\nexports.default = CardsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardsList.tsx?");

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
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar commentform_less_1 = __importDefault(__webpack_require__(/*! ./commentform.less */ \"./src/shared/CommentForm/commentform.less\"));\r\nvar formik_1 = __webpack_require__(/*! formik */ \"formik\");\r\nfunction validateComment(value) {\r\n    var error = '';\r\n    if (value.length <= 3)\r\n        error = \"Должно быть больше 3х символов!\";\r\n    return error;\r\n}\r\nfunction CommentForm() {\r\n    // const [value, setValue] = useState('');\r\n    // const [touched, setTouched] = useState(false); \r\n    // const [valueError, setValueError] = useState('');\r\n    // function handleSubmit(event: FormEvent){\r\n    //     event.preventDefault();\r\n    //     setTouched(true);\r\n    //     setValueError(validateValue());\r\n    //     const isFormValid = !validateValue();\r\n    //     if(!isFormValid) return\r\n    //     console.log(\"send:\",value);\r\n    // }\r\n    // function handleChange(event: ChangeEvent<HTMLTextAreaElement>){\r\n    //     setValue(event.target.value);\r\n    //     //setValueTouched(true);\r\n    // }\r\n    // function handleBlur(){\r\n    //     //setValueTouched(true);\r\n    // }\r\n    // function validateValue(){\r\n    //     if(value.length <= 3 ) return 'Нужно больше трёх символов';\r\n    //     return '';\r\n    // }\r\n    return (\r\n    //https://formik.org/docs/guides/validation\r\n    react_1.default.createElement(formik_1.Formik, { initialValues: {\r\n            comment: '',\r\n        }, onSubmit: function (values) {\r\n            console.log(values);\r\n            alert(\"\\u041E\\u0442\\u043F\\u0440\\u0430\\u0432\\u043A\\u0430 \\u0444\\u043E\\u0440\\u043C\\u044B\");\r\n        } }, function (_a) {\r\n        var errors = _a.errors, touched = _a.touched, isValidating = _a.isValidating;\r\n        return (react_1.default.createElement(formik_1.Form, { className: commentform_less_1.default.form },\r\n            react_1.default.createElement(formik_1.Field, { name: \"comment\", validate: validateComment, as: 'textarea', className: commentform_less_1.default.input }),\r\n            errors.comment && touched.comment && react_1.default.createElement(\"div\", null, errors.comment),\r\n            react_1.default.createElement(\"button\", { type: \"submit\", className: commentform_less_1.default.button }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\")));\r\n    })\r\n    //=========================================================================================\r\n    // <form className={styles.form} onSubmit={handleSubmit}>\r\n    //     <textarea className={styles.input} \r\n    //     value={value} \r\n    //     onChange={handleChange}\r\n    //     // onBlur={handleBlur}\r\n    //     aria-invalid={valueError?'true':undefined}\r\n    //     />\r\n    //     {touched && validateValue() && (<div style={{color: 'red'}}>{validateValue()}</div>)}\r\n    //     <button type=\"submit\" className={styles.button}>Комментировать</button>\t\t\r\n    // </form>\r\n    );\r\n}\r\nexports.default = CommentForm;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/CommentForm.tsx?");

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

/***/ "./src/shared/CommentFormContainer/CommentFormContainer.tsx":
/*!******************************************************************!*\
  !*** ./src/shared/CommentFormContainer/CommentFormContainer.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar store_1 = __webpack_require__(/*! ../../store */ \"./src/store.ts\");\r\nvar CommentForm_1 = __importDefault(__webpack_require__(/*! ../CommentForm */ \"./src/shared/CommentForm/index.ts\"));\r\nfunction CommentFormContainer() {\r\n    var value = react_redux_1.useSelector(function (state) { return state.commentText; });\r\n    var dispatch = react_redux_1.useDispatch();\r\n    function handleChange(event) {\r\n        dispatch(store_1.updateComment(event.target.value));\r\n    }\r\n    function handleSubmit(event) {\r\n        event.preventDefault();\r\n        console.log(value);\r\n    }\r\n    return (react_1.default.createElement(CommentForm_1.default\r\n    // value={value} \r\n    // onChange={handleChange} \r\n    // onSubmit={handleSubmit}\r\n    , null));\r\n}\r\nexports.default = CommentFormContainer;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentFormContainer/CommentFormContainer.tsx?");

/***/ }),

/***/ "./src/shared/CommentFormContainer/index.ts":
/*!**************************************************!*\
  !*** ./src/shared/CommentFormContainer/index.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar CommentFormContainer_1 = __importDefault(__webpack_require__(/*! ./CommentFormContainer */ \"./src/shared/CommentFormContainer/CommentFormContainer.tsx\"));\r\nexports.default = CommentFormContainer_1.default;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentFormContainer/index.ts?");

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
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar SearchBlock_less_1 = __importDefault(__webpack_require__(/*! ./SearchBlock.less */ \"./src/shared/Header/SearchBlock/SearchBlock.less\"));\r\nvar UserBlock_1 = __importDefault(__webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/index.ts\"));\r\n//import {useUserData} from '../../../hooks/useUserData';\r\nvar userContext_1 = __webpack_require__(/*! ../../context/userContext */ \"./src/shared/context/userContext.tsx\");\r\nfunction SearchBlock() {\r\n    //const userData = useContext(userContext)\r\n    var _a = react_1.useContext(userContext_1.userContext), iconImg = _a.iconImg, name = _a.name, loading = _a.loading;\r\n    //const {data, loading} = useUserData();\r\n    return (react_1.default.createElement(\"div\", { className: SearchBlock_less_1.default.searchBlock },\r\n        \"Search block\",\r\n        react_1.default.createElement(UserBlock_1.default, { avatarSrc: iconImg, username: name, loading: loading })));\r\n}\r\nexports.default = SearchBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar userblock_less_1 = __importDefault(__webpack_require__(/*! ./userblock.less */ \"./src/shared/Header/SearchBlock/UserBlock/userblock.less\"));\r\nvar Break_1 = __importDefault(__webpack_require__(/*! ../../../Break */ \"./src/shared/Break/index.ts\"));\r\nvar Text_1 = __importStar(__webpack_require__(/*! ../../../Text */ \"./src/shared/Text/index.ts\"));\r\nvar Icons_1 = __webpack_require__(/*! ../../../Icons */ \"./src/shared/Icons/index.ts\");\r\nfunction UserBlock(_a) {\r\n    var avatarSrc = _a.avatarSrc, username = _a.username, loading = _a.loading;\r\n    return (react_1.default.createElement(\"a\", { href: \"https://www.reddit.com/api/v1/authorize?client_id=b0t5J709nNhl3Q&response_type=code&\\r\\n\\t\\tstate=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity\", className: userblock_less_1.default.userBox },\r\n        react_1.default.createElement(\"div\", { className: userblock_less_1.default.avatarBox }, avatarSrc ? react_1.default.createElement(\"img\", { src: avatarSrc, alt: \"user avatar\", className: userblock_less_1.default.avatarImage })\r\n            : react_1.default.createElement(Icons_1.AnonIcon, null)),\r\n        react_1.default.createElement(\"div\", { className: userblock_less_1.default.username },\r\n            react_1.default.createElement(Break_1.default, { size: 12 }),\r\n            loading ? (react_1.default.createElement(Text_1.default, { size: 20, color: Text_1.EColor.grey99 }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430\")) : (react_1.default.createElement(Text_1.default, { size: 20, color: username ? Text_1.EColor.black : Text_1.EColor.grey99 }, username || 'Аноним')))));\r\n}\r\nexports.default = UserBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx?");

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
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar store_1 = __webpack_require__(/*! ../../store */ \"./src/store.ts\");\r\nvar Layout_less_1 = __importDefault(__webpack_require__(/*! ./Layout.less */ \"./src/shared/Layout/Layout.less\"));\r\nfunction Layout(_a) {\r\n    var children = _a.children;\r\n    var dispatch = react_redux_1.useDispatch();\r\n    react_1.useEffect(function () {\r\n        dispatch(store_1.saveToken());\r\n    }, []);\r\n    return (react_1.default.createElement(\"div\", { className: Layout_less_1.default.layout }, children));\r\n}\r\nexports.default = Layout;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.tsx?");

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
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar post_less_1 = __importDefault(__webpack_require__(/*! ./post.less */ \"./src/shared/Post/post.less\"));\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\r\nvar CommentList_1 = __importDefault(__webpack_require__(/*! ../CommentList */ \"./src/shared/CommentList/index.ts\"));\r\nvar CommentFormContainer_1 = __importDefault(__webpack_require__(/*! ../CommentFormContainer */ \"./src/shared/CommentFormContainer/index.ts\"));\r\nfunction Post(props) {\r\n    var ref = react_1.useRef(null);\r\n    react_1.useEffect(function () {\r\n        function handleClick(event) {\r\n            var _a, _b;\r\n            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\r\n                console.log('clicked!', event.target);\r\n                (_b = props.onClose) === null || _b === void 0 ? void 0 : _b.call(props);\r\n                //про эту последнюю точку f?.() между  ? и (), то она нужна для того, чтобы \r\n                //не перепутать с тернарным оператором. Вот тут тред на эту тему можно \r\n                //почитать https://github.com/claudepache/es-optional-chaining/issues/3\r\n            }\r\n        }\r\n        ;\r\n        document.addEventListener('click', handleClick);\r\n        return function () {\r\n            document.removeEventListener('click', handleClick);\r\n        };\r\n    }, []);\r\n    var node = document.querySelector('#modal_root');\r\n    if (!node)\r\n        return null;\r\n    return react_dom_1.default.createPortal((react_1.default.createElement(\"div\", { className: post_less_1.default.modal, ref: ref },\r\n        react_1.default.createElement(\"h2\", null, \"\\u0421\\u043B\\u0435\\u0434\\u0443\\u0435\\u0442 \\u043E\\u0442\\u043C\\u0435\\u0442\\u0438\\u0442\\u044C, \\u0447\\u0442\\u043E \\u043D\\u043E\\u0432\\u0430\\u044F \\u043C\\u043E\\u0434\\u0435\\u043B\\u044C \\u0447\\u0435\\u0433\\u043E-\\u0442\\u043E \\u0442\\u0430\\u043C \\u0442\\u0430\\u043A\\u043E\\u0435 \"),\r\n        react_1.default.createElement(\"div\", { className: post_less_1.default.content },\r\n            react_1.default.createElement(\"p\", null, \"9.1 \\u0412\\u0435\\u0440\\u0441\\u0442\\u0430\\u0435\\u043C \\u043A\\u0430\\u0440\\u0442\\u043E\\u0447\\u043A\\u0443 \\u043F\\u043E\\u0441\\u0442\\u0430, \\u0438\\u0441\\u043F\\u043E\\u043B\\u044C\\u0437\\u0443\\u044F ReactPortal\"),\r\n            react_1.default.createElement(\"p\", null, \"9.1 \\u0412\\u0435\\u0440\\u0441\\u0442\\u0430\\u0435\\u043C \\u043A\\u0430\\u0440\\u0442\\u043E\\u0447\\u043A\\u0443 \\u043F\\u043E\\u0441\\u0442\\u0430, \\u0438\\u0441\\u043F\\u043E\\u043B\\u044C\\u0437\\u0443\\u044F ReactPortal\"),\r\n            react_1.default.createElement(\"p\", null, \"9.1 \\u0412\\u0435\\u0440\\u0441\\u0442\\u0430\\u0435\\u043C \\u043A\\u0430\\u0440\\u0442\\u043E\\u0447\\u043A\\u0443 \\u043F\\u043E\\u0441\\u0442\\u0430, \\u0438\\u0441\\u043F\\u043E\\u043B\\u044C\\u0437\\u0443\\u044F ReactPortal\"),\r\n            react_1.default.createElement(\"p\", null, \"9.1 \\u0412\\u0435\\u0440\\u0441\\u0442\\u0430\\u0435\\u043C \\u043A\\u0430\\u0440\\u0442\\u043E\\u0447\\u043A\\u0443 \\u043F\\u043E\\u0441\\u0442\\u0430, \\u0438\\u0441\\u043F\\u043E\\u043B\\u044C\\u0437\\u0443\\u044F ReactPortal\")),\r\n        react_1.default.createElement(CommentFormContainer_1.default, null),\r\n        react_1.default.createElement(CommentList_1.default, null))), node);\r\n}\r\nexports.default = Post;\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/Post.tsx?");

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

/***/ "./src/shared/context/postsContext.tsx":
/*!*********************************************!*\
  !*** ./src/shared/context/postsContext.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PostsContextProvider = exports.postsContext = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar usePostsData_1 = __webpack_require__(/*! ../../hooks/usePostsData */ \"./src/hooks/usePostsData.ts\");\r\n// interface IPostsContextData {\r\n//     name?: string;\r\n//     iconImg?: string;\r\n// }\r\nexports.postsContext = react_1.default.createContext([]);\r\nfunction PostsContextProvider(_a) {\r\n    var children = _a.children;\r\n    var data = usePostsData_1.usePostsData()[0];\r\n    return (react_1.default.createElement(exports.postsContext.Provider, { value: data }, children));\r\n}\r\nexports.PostsContextProvider = PostsContextProvider;\r\n;\r\n\n\n//# sourceURL=webpack:///./src/shared/context/postsContext.tsx?");

/***/ }),

/***/ "./src/shared/context/userContext.tsx":
/*!********************************************!*\
  !*** ./src/shared/context/userContext.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserContextProvider = exports.userContext = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar useUserData_1 = __webpack_require__(/*! ../../hooks/useUserData */ \"./src/hooks/useUserData.ts\");\r\nexports.userContext = react_1.default.createContext({});\r\nfunction UserContextProvider(_a) {\r\n    var children = _a.children;\r\n    var data = useUserData_1.useUserData().data;\r\n    return (react_1.default.createElement(exports.userContext.Provider, { value: data }, children));\r\n}\r\nexports.UserContextProvider = UserContextProvider;\r\n;\r\n\n\n//# sourceURL=webpack:///./src/shared/context/userContext.tsx?");

/***/ }),

/***/ "./src/store.ts":
/*!**********************!*\
  !*** ./src/store.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.rootReducer = exports.updateComment = exports.saveToken = exports.setToken = void 0;\r\nvar actions_1 = __webpack_require__(/*! ./me/actions */ \"./src/me/actions.ts\");\r\nvar reducer_1 = __webpack_require__(/*! ./me/reducer */ \"./src/me/reducer.ts\");\r\nvar initialState = {\r\n    commentText: 'Усем превед!',\r\n    token: '',\r\n    me: {\r\n        loading: false,\r\n        error: '',\r\n        data: {}\r\n    }\r\n};\r\nvar UPDATE_COMMENT = 'UPDATE_COMMENT';\r\nvar SET_TOKEN = 'SET_TOKEN';\r\nvar setToken = function (token) { return ({\r\n    type: SET_TOKEN,\r\n    token: token\r\n}); };\r\nexports.setToken = setToken;\r\n/***************************************************************/\r\nvar saveToken = function () { return function (dispatch, getState) {\r\n    if (localStorage.getItem('reddit-token') || window.__token__ && window.__token__ !== 'undefined') {\r\n        var token = localStorage.getItem('reddit-token') || window.__token__;\r\n        dispatch(exports.setToken(window.__token__));\r\n        if (token) {\r\n            localStorage.setItem('reddit-token', token);\r\n        }\r\n    }\r\n}; };\r\nexports.saveToken = saveToken;\r\n/***************************************************************/\r\nvar updateComment = function (text) { return ({\r\n    type: UPDATE_COMMENT,\r\n    text: text\r\n}); };\r\nexports.updateComment = updateComment;\r\nvar rootReducer = function (state, action) {\r\n    if (state === void 0) { state = initialState; }\r\n    switch (action.type) {\r\n        case UPDATE_COMMENT:\r\n            return __assign(__assign({}, state), { commentText: action.text });\r\n        case SET_TOKEN:\r\n            return __assign(__assign({}, state), { token: action.token });\r\n        case actions_1.ME_REQUEST:\r\n        case actions_1.ME_REQUEST_SUCCESS:\r\n        case actions_1.ME_REQUEST_ERROR:\r\n            return __assign(__assign({}, state), { me: reducer_1.meReducer(state.me, action) });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\nexports.rootReducer = rootReducer;\r\n\n\n//# sourceURL=webpack:///./src/store.ts?");

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

/***/ "@babel/runtime/helpers/esm/extends":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/esm/extends" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/esm/extends\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/esm/extends%22?");

/***/ }),

/***/ "@babel/runtime/helpers/esm/inheritsLoose":
/*!***********************************************************!*\
  !*** external "@babel/runtime/helpers/esm/inheritsLoose" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/esm/inheritsLoose\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/esm/inheritsLoose%22?");

/***/ }),

/***/ "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose":
/*!**************************************************************************!*\
  !*** external "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose" ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/esm/objectWithoutPropertiesLoose\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/esm/objectWithoutPropertiesLoose%22?");

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

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"formik\");\n\n//# sourceURL=webpack:///external_%22formik%22?");

/***/ }),

/***/ "hoist-non-react-statics":
/*!******************************************!*\
  !*** external "hoist-non-react-statics" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"hoist-non-react-statics\");\n\n//# sourceURL=webpack:///external_%22hoist-non-react-statics%22?");

/***/ }),

/***/ "path-to-regexp":
/*!*********************************!*\
  !*** external "path-to-regexp" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path-to-regexp\");\n\n//# sourceURL=webpack:///external_%22path-to-regexp%22?");

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

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");\n\n//# sourceURL=webpack:///external_%22redux-devtools-extension%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "tiny-warning":
/*!*******************************!*\
  !*** external "tiny-warning" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"tiny-warning\");\n\n//# sourceURL=webpack:///external_%22tiny-warning%22?");

/***/ })

/******/ });