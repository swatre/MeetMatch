/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "./components/ErrorBoundary.js":
/*!*************************************!*\
  !*** ./components/ErrorBoundary.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n\n\nclass ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    constructor(props){\n        super(props);\n        this.state = {\n            hasError: false\n        };\n    }\n    static getDerivedStateFromError(error) {\n        return {\n            hasError: true\n        };\n    }\n    componentDidCatch(error, errorInfo) {\n        console.error(\"Error caught by ErrorBoundary:\", error, errorInfo);\n    }\n    render() {\n        if (this.state.hasError) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Something went wrong.\"\n                    }, void 0, false, {\n                        fileName: \"/home/project/components/ErrorBoundary.js\",\n                        lineNumber: 21,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>this.setState({\n                                hasError: false\n                            }),\n                        children: \"Try again\"\n                    }, void 0, false, {\n                        fileName: \"/home/project/components/ErrorBoundary.js\",\n                        lineNumber: 22,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/project/components/ErrorBoundary.js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this);\n        }\n        return this.props.children;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorBoundary);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Vycm9yQm91bmRhcnkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFrQztBQUU5QixNQUFNQyxzQkFBc0JELDRDQUFTQTtJQUNuQ0UsWUFBWUMsS0FBSyxDQUFFO1FBQ2pCLEtBQUssQ0FBQ0E7UUFDTixJQUFJLENBQUNDLEtBQUssR0FBRztZQUFFQyxVQUFVO1FBQU07SUFDakM7SUFFQSxPQUFPQyx5QkFBeUJDLEtBQUssRUFBRTtRQUNyQyxPQUFPO1lBQUVGLFVBQVU7UUFBSztJQUMxQjtJQUVBRyxrQkFBa0JELEtBQUssRUFBRUUsU0FBUyxFQUFFO1FBQ2xDQyxRQUFRSCxLQUFLLENBQUMsa0NBQWtDQSxPQUFPRTtJQUN6RDtJQUVBRSxTQUFTO1FBQ1AsSUFBSSxJQUFJLENBQUNQLEtBQUssQ0FBQ0MsUUFBUSxFQUFFO1lBQ3ZCLHFCQUNFLDhEQUFDTzs7a0NBQ0MsOERBQUNDO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNDO3dCQUFPQyxTQUFTLElBQU0sSUFBSSxDQUFDQyxRQUFRLENBQUM7Z0NBQUVYLFVBQVU7NEJBQU07a0NBQUk7Ozs7Ozs7Ozs7OztRQUtqRTtRQUVBLE9BQU8sSUFBSSxDQUFDRixLQUFLLENBQUNjLFFBQVE7SUFDNUI7QUFDRjtBQUVBLGlFQUFlaEIsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2IyYi1tYXRjaGluZy8uL2NvbXBvbmVudHMvRXJyb3JCb3VuZGFyeS5qcz9jOWFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuICAgIGNsYXNzIEVycm9yQm91bmRhcnkgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0geyBoYXNFcnJvcjogZmFsc2UgfTtcbiAgICAgIH1cblxuICAgICAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihlcnJvcikge1xuICAgICAgICByZXR1cm4geyBoYXNFcnJvcjogdHJ1ZSB9O1xuICAgICAgfVxuXG4gICAgICBjb21wb25lbnREaWRDYXRjaChlcnJvciwgZXJyb3JJbmZvKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNhdWdodCBieSBFcnJvckJvdW5kYXJ5OicsIGVycm9yLCBlcnJvckluZm8pO1xuICAgICAgfVxuXG4gICAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmhhc0Vycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMT5Tb21ldGhpbmcgd2VudCB3cm9uZy48L2gxPlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBoYXNFcnJvcjogZmFsc2UgfSl9PlxuICAgICAgICAgICAgICAgIFRyeSBhZ2FpblxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgZGVmYXVsdCBFcnJvckJvdW5kYXJ5O1xuIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIkVycm9yQm91bmRhcnkiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJoYXNFcnJvciIsImdldERlcml2ZWRTdGF0ZUZyb21FcnJvciIsImVycm9yIiwiY29tcG9uZW50RGlkQ2F0Y2giLCJlcnJvckluZm8iLCJjb25zb2xlIiwicmVuZGVyIiwiZGl2IiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwic2V0U3RhdGUiLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ErrorBoundary.js\n");

/***/ }),

/***/ "./context/AuthContext.js":
/*!********************************!*\
  !*** ./context/AuthContext.js ***!
  \********************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebaseConfig */ \"./firebaseConfig.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebaseConfig__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__]);\n([_firebaseConfig__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction AuthProvider({ children }) {\n    const [currentUser, setCurrentUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    function signup(email, password) {\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.createUserWithEmailAndPassword)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_2__.auth, email, password);\n    }\n    function login(email, password) {\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithEmailAndPassword)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_2__.auth, email, password);\n    }\n    function googleLogin() {\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithPopup)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_2__.auth, googleProvider);\n    }\n    function logout() {\n        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signOut)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_2__.auth);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.onAuthStateChanged)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_2__.auth, (user)=>{\n            setCurrentUser(user);\n            setLoading(false);\n        });\n        return unsubscribe;\n    }, []);\n    const value = {\n        currentUser,\n        signup,\n        login,\n        googleLogin,\n        logout\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: value,\n        children: !loading && children\n    }, void 0, false, {\n        fileName: \"/home/project/context/AuthContext.js\",\n        lineNumber: 51,\n        columnNumber: 9\n    }, this);\n}\nfunction useAuth() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0F1dGhDb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBdUU7QUFDMUI7QUFPbEI7QUFFdkIsTUFBTVUsNEJBQWNWLG9EQUFhQTtBQUUxQixTQUFTVyxhQUFhLEVBQUVDLFFBQVEsRUFBRTtJQUN2QyxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1gsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDWSxTQUFTQyxXQUFXLEdBQUdiLCtDQUFRQSxDQUFDO0lBRXZDLFNBQVNjLE9BQU9DLEtBQUssRUFBRUMsUUFBUTtRQUM3QixPQUFPWiw2RUFBOEJBLENBQUNILGlEQUFJQSxFQUFFYyxPQUFPQztJQUNyRDtJQUVBLFNBQVNDLE1BQU1GLEtBQUssRUFBRUMsUUFBUTtRQUM1QixPQUFPZCx5RUFBMEJBLENBQUNELGlEQUFJQSxFQUFFYyxPQUFPQztJQUNqRDtJQUVBLFNBQVNFO1FBQ1AsT0FBT2YsOERBQWVBLENBQUNGLGlEQUFJQSxFQUFFa0I7SUFDL0I7SUFFQSxTQUFTQztRQUNQLE9BQU9mLHNEQUFPQSxDQUFDSixpREFBSUE7SUFDckI7SUFFQUYsZ0RBQVNBLENBQUM7UUFDUixNQUFNc0IsY0FBY2YsaUVBQWtCQSxDQUFDTCxpREFBSUEsRUFBRSxDQUFDcUI7WUFDNUNYLGVBQWVXO1lBQ2ZULFdBQVc7UUFDYjtRQUVBLE9BQU9RO0lBQ1QsR0FBRyxFQUFFO0lBRUwsTUFBTUUsUUFBUTtRQUNaYjtRQUNBSTtRQUNBRztRQUNBQztRQUNBRTtJQUNGO0lBRUEscUJBQ0UsOERBQUNiLFlBQVlpQixRQUFRO1FBQUNELE9BQU9BO2tCQUMxQixDQUFDWCxXQUFXSDs7Ozs7O0FBR25CO0FBRU8sU0FBU2dCO0lBQ2QsT0FBTzNCLGlEQUFVQSxDQUFDUztBQUNwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2IyYi1tYXRjaGluZy8uL2NvbnRleHQvQXV0aENvbnRleHQuanM/MTM5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuICAgIGltcG9ydCB7IGF1dGggfSBmcm9tICcuLi9maXJlYmFzZUNvbmZpZyc7XG4gICAgaW1wb3J0IHtcbiAgICAgIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLFxuICAgICAgc2lnbkluV2l0aFBvcHVwLFxuICAgICAgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkLFxuICAgICAgc2lnbk91dCxcbiAgICAgIG9uQXV0aFN0YXRlQ2hhbmdlZFxuICAgIH0gZnJvbSAnZmlyZWJhc2UvYXV0aCc7XG5cbiAgICBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuICAgIGV4cG9ydCBmdW5jdGlvbiBBdXRoUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gICAgICBjb25zdCBbY3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgICAgIGZ1bmN0aW9uIHNpZ251cChlbWFpbCwgcGFzc3dvcmQpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCBlbWFpbCwgcGFzc3dvcmQpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBsb2dpbihlbWFpbCwgcGFzc3dvcmQpIHtcbiAgICAgICAgcmV0dXJuIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIGVtYWlsLCBwYXNzd29yZCk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGdvb2dsZUxvZ2luKCkge1xuICAgICAgICByZXR1cm4gc2lnbkluV2l0aFBvcHVwKGF1dGgsIGdvb2dsZVByb3ZpZGVyKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gbG9nb3V0KCkge1xuICAgICAgICByZXR1cm4gc2lnbk91dChhdXRoKTtcbiAgICAgIH1cblxuICAgICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgdW5zdWJzY3JpYmUgPSBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKHVzZXIpID0+IHtcbiAgICAgICAgICBzZXRDdXJyZW50VXNlcih1c2VyKTtcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHVuc3Vic2NyaWJlO1xuICAgICAgfSwgW10pO1xuXG4gICAgICBjb25zdCB2YWx1ZSA9IHtcbiAgICAgICAgY3VycmVudFVzZXIsXG4gICAgICAgIHNpZ251cCxcbiAgICAgICAgbG9naW4sXG4gICAgICAgIGdvb2dsZUxvZ2luLFxuICAgICAgICBsb2dvdXRcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PlxuICAgICAgICAgIHshbG9hZGluZyAmJiBjaGlsZHJlbn1cbiAgICAgICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgZXhwb3J0IGZ1bmN0aW9uIHVzZUF1dGgoKSB7XG4gICAgICByZXR1cm4gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG4gICAgfVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJhdXRoIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzaWduSW5XaXRoUG9wdXAiLCJjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJzaWduT3V0Iiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiQXV0aENvbnRleHQiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsImN1cnJlbnRVc2VyIiwic2V0Q3VycmVudFVzZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNpZ251cCIsImVtYWlsIiwicGFzc3dvcmQiLCJsb2dpbiIsImdvb2dsZUxvZ2luIiwiZ29vZ2xlUHJvdmlkZXIiLCJsb2dvdXQiLCJ1bnN1YnNjcmliZSIsInVzZXIiLCJ2YWx1ZSIsIlByb3ZpZGVyIiwidXNlQXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/AuthContext.js\n");

/***/ }),

/***/ "./firebaseConfig.js":
/*!***************************!*\
  !*** ./firebaseConfig.js ***!
  \***************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   googleProvider: () => (/* binding */ googleProvider)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyDeac15m4I15LtrWWxf4K_c46MkCMmbUUY\",\n    authDomain: \"meetmatch-9f423.firebaseapp.com\",\n    projectId: \"meetmatch-9f423\",\n    storageBucket: \"meetmatch-9f423.firebasestorage.app\",\n    messagingSenderId: \"1030249018425\",\n    appId: \"1:1030249018425:web:67d03e1b3f9f30865cc9e8\",\n    measurementId: \"G-GHX46910Y0\"\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\nconst googleProvider = new firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider();\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZUNvbmZpZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTZDO0FBQ21CO0FBRTVELE1BQU1HLGlCQUFpQjtJQUNyQkMsUUFBUUMseUNBQXdDO0lBQ2hERyxZQUFZSCxpQ0FBNEM7SUFDeERLLFdBQVdMLGlCQUEyQztJQUN0RE8sZUFBZVAscUNBQStDO0lBQzlEUyxtQkFBbUJULGVBQW9EO0lBQ3ZFVyxPQUFPWCw0Q0FBdUM7SUFDOUNhLGVBQWViLGNBQStDO0FBQ2hFO0FBRUEsTUFBTWUsTUFBTXBCLDJEQUFhQSxDQUFDRztBQUMxQixNQUFNa0IsT0FBT3BCLHNEQUFPQSxDQUFDbUI7QUFDckIsTUFBTUUsaUJBQWlCLElBQUlwQiw2REFBa0JBO0FBRWIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iMmItbWF0Y2hpbmcvLi9maXJlYmFzZUNvbmZpZy5qcz9mOTc0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tICdmaXJlYmFzZS9hcHAnO1xuICAgIGltcG9ydCB7IGdldEF1dGgsIEdvb2dsZUF1dGhQcm92aWRlciB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnO1xuXG4gICAgY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gICAgICBhcGlLZXk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FQSV9LRVksXG4gICAgICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9BVVRIX0RPTUFJTixcbiAgICAgIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfUFJPSkVDVF9JRCxcbiAgICAgIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX1NUT1JBR0VfQlVDS0VULFxuICAgICAgbWVzc2FnaW5nU2VuZGVySWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX01FU1NBR0lOR19TRU5ERVJfSUQsXG4gICAgICBhcHBJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBQX0lELFxuICAgICAgbWVhc3VyZW1lbnRJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfTUVBU1VSRU1FTlRfSURcbiAgICB9O1xuXG4gICAgY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG4gICAgY29uc3QgYXV0aCA9IGdldEF1dGgoYXBwKTtcbiAgICBjb25zdCBnb29nbGVQcm92aWRlciA9IG5ldyBHb29nbGVBdXRoUHJvdmlkZXIoKTtcblxuICAgIGV4cG9ydCB7IGF1dGgsIGdvb2dsZVByb3ZpZGVyIH07XG4iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEF1dGgiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9BUElfS0VZIiwiYXV0aERvbWFpbiIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FVVEhfRE9NQUlOIiwicHJvamVjdElkIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfUFJPSkVDVF9JRCIsInN0b3JhZ2VCdWNrZXQiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfTUVTU0FHSU5HX1NFTkRFUl9JRCIsImFwcElkIiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBQX0lEIiwibWVhc3VyZW1lbnRJZCIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX01FQVNVUkVNRU5UX0lEIiwiYXBwIiwiYXV0aCIsImdvb2dsZVByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./firebaseConfig.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.js\");\n/* harmony import */ var _components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ErrorBoundary */ \"./components/ErrorBoundary.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__]);\n_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_1__.AuthProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/project/pages/_app.js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/project/pages/_app.js\",\n            lineNumber: 8,\n            columnNumber: 11\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/project/pages/_app.js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFzRDtBQUNNO0FBQ3pCO0FBRS9CLFNBQVNFLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDckMscUJBQ0UsOERBQUNILGlFQUFhQTtrQkFDWiw0RUFBQ0QsOERBQVlBO3NCQUNYLDRFQUFDRztnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FBSWhDO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iMmItbWF0Y2hpbmcvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dC9BdXRoQ29udGV4dCc7XG4gICAgaW1wb3J0IEVycm9yQm91bmRhcnkgZnJvbSAnLi4vY29tcG9uZW50cy9FcnJvckJvdW5kYXJ5JztcbiAgICBpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5cbiAgICBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxFcnJvckJvdW5kYXJ5PlxuICAgICAgICAgIDxBdXRoUHJvdmlkZXI+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgPC9BdXRoUHJvdmlkZXI+XG4gICAgICAgIDwvRXJyb3JCb3VuZGFyeT5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiQXV0aFByb3ZpZGVyIiwiRXJyb3JCb3VuZGFyeSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();