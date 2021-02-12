webpackHotUpdate("main",{

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
eval("/* WEBPACK VAR INJECTION */(function(global, module) {\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n/* global window */\r\nvar ponyfill_js_1 = __importDefault(__webpack_require__(/*! ./ponyfill.js */ \"./node_modules/symbol-observable/es/ponyfill.js\"));\r\nvar root;\r\nif (typeof self !== 'undefined') {\r\n    root = self;\r\n}\r\nelse if (typeof window !== 'undefined') {\r\n    root = window;\r\n}\r\nelse if (typeof global !== 'undefined') {\r\n    root = global;\r\n}\r\nelse if (true) {\r\n    root = module;\r\n}\r\nelse {}\r\nvar result = ponyfill_js_1.default(root);\r\nexports.default = result;\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\"), __webpack_require__(/*! ./../../webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./node_modules/symbol-observable/es/index.js?");

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

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar g;\r\n// This works in non-strict mode\r\ng = (function () {\r\n    return this;\r\n})();\r\ntry {\r\n    // This works if eval is allowed (see CSP)\r\n    g = g || new Function(\"return this\")();\r\n}\r\ncatch (e) {\r\n    // This works if the window reference is available\r\n    if (typeof window === \"object\")\r\n        g = window;\r\n}\r\n// g can still be undefined, but nothing to do about it...\r\n// We return undefined, instead of nothing here, so it's\r\n// easier to handle this case. if(!global) { ...}\r\nmodule.exports = g;\r\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\r\nvar Layout_1 = __importDefault(__webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\"));\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar Header_1 = __importDefault(__webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\"));\r\nvar Content_1 = __importDefault(__webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\"));\r\nvar CardsList_1 = __importDefault(__webpack_require__(/*! ./shared/CardsList */ \"./src/shared/CardsList/index.ts\"));\r\nvar useToken_1 = __webpack_require__(/*! ./hooks/useToken */ \"./src/hooks/useToken.ts\");\r\nvar tokenContext_1 = __webpack_require__(/*! ./shared/context/tokenContext */ \"./src/shared/context/tokenContext.ts\");\r\n//import { userContext } from './shared/context/userContext';\r\nvar userContext_1 = __webpack_require__(/*! ./shared/context/userContext */ \"./src/shared/context/userContext.tsx\");\r\nvar postsContext_1 = __webpack_require__(/*! ./shared/context/postsContext */ \"./src/shared/context/postsContext.tsx\");\r\nvar commentContext_1 = __webpack_require__(/*! ./shared/context/commentContext */ \"./src/shared/context/commentContext.ts\");\r\nvar redux_1 = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\r\nvar store = redux_1.createStore(function () { });\r\n//import { nanoid } from 'nanoid';\r\nfunction AppComponent() {\r\n    //????????????????? хер знает, не работает, выдает ошибку\r\n    // const url = new URL(window.location.href);\r\n    // console.log(url.searchParams.get('code'));\r\n    //---------------------------------------------------------\r\n    var _a = react_1.useState(''), commentValue = _a[0], setCommentValue = _a[1];\r\n    var token = useToken_1.useToken()[0];\r\n    var CommentProvider = commentContext_1.commentContext.Provider;\r\n    return (react_1.default.createElement(CommentProvider, { value: {\r\n            value: commentValue,\r\n            onChange: setCommentValue\r\n        } },\r\n        react_1.default.createElement(tokenContext_1.tokenContext.Provider, { value: token },\r\n            react_1.default.createElement(userContext_1.UserContextProvider, null,\r\n                react_1.default.createElement(postsContext_1.PostsContextProvider, null,\r\n                    react_1.default.createElement(Layout_1.default, null,\r\n                        react_1.default.createElement(Header_1.default, null),\r\n                        react_1.default.createElement(Content_1.default, null,\r\n                            react_1.default.createElement(CardsList_1.default, null))))))));\r\n}\r\nexports.App = root_1.hot(function () { return react_1.default.createElement(AppComponent, null); });\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/client/index.jsx":
/*!******************************!*\
  !*** ./src/client/index.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar ReactDOM = __importStar(__webpack_require__(/*! react-dom */ \"./node_modules/@hot-loader/react-dom/index.js\"));\r\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\r\n//чтобы срабатывало только в браузере(т.к. подключим SSR)\r\nwindow.addEventListener('load', function () {\r\n    //ReactDOM.render(<Header />, document.getElementById('react-root'));\r\n    ReactDOM.hydrate(React.createElement(App_1.App, null), document.getElementById('react-root'));\r\n});\r\n\n\n//# sourceURL=webpack:///./src/client/index.jsx?");

/***/ })

})